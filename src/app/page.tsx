import notionPage from "@/data/notion-page.json";
import type { ReactNode } from "react";

type Mark = [string, string?];
type RichText = [string, Mark[]?];

type NotionBlock = {
  id: string;
  type: string;
  space_id?: string;
  parent_id?: string;
  content?: string[];
  properties?: {
    title?: RichText[];
    source?: RichText[];
    caption?: RichText[];
  };
  format?: {
    block_width?: number;
    column_ratio?: number;
    automation_id?: string;
  };
};

type BlockMap = Record<string, { value?: { value?: NotionBlock } }>;
type AutomationMap = Record<string, { value?: { value?: { properties?: { name?: string }; action_ids?: string[] } } }>;
type AutomationActionMap = Record<
  string,
  { value?: { value?: { config?: { target?: { url?: string } } } } }
>;

const PAGE_ID = "8a287e2f-8378-8290-af10-0165d93bf034";
const recordMap = (
  notionPage as unknown as {
    recordMap: { block: BlockMap; automation?: AutomationMap; automation_action?: AutomationActionMap };
  }
).recordMap;
const blocks = recordMap.block;
const automations = recordMap.automation ?? {};
const automationActions = recordMap.automation_action ?? {};

function getBlock(id: string): NotionBlock | null {
  return blocks[id]?.value?.value ?? null;
}

function plainText(block: NotionBlock): string {
  return (block.properties?.title ?? []).map((segment) => segment[0]).join("");
}

function plainRichText(rich: RichText[] | undefined): string {
  return (rich ?? []).map((segment) => segment[0]).join("");
}

function highlightColor(color?: string): string | undefined {
  const map: Record<string, string> = {
    orange: "#fef3c7",
    gray: "#f3f4f6",
    yellow: "#fef9c3",
    red: "#fee2e2",
    green: "#dcfce7",
    blue: "#dbeafe",
  };

  return color ? map[color] : undefined;
}

function notionImageUrl(block: NotionBlock): string | null {
  const source = block.properties?.source?.[0]?.[0];
  if (!source) return null;

  const ext = source.split(".").pop()?.toLowerCase();
  if (ext) {
    return `/notion-assets/${block.id}.${ext}`;
  }

  const encoded = encodeURIComponent(source);
  return `https://www.notion.so/image/${encoded}?table=block&id=${block.id}&spaceId=${block.space_id ?? ""}&cache=v2`;
}

function renderRichText(rich: RichText[] | undefined, keyPrefix: string): ReactNode {
  if (!rich || rich.length === 0) return null;

  return rich.map((segment, index) => {
    const [text, marks] = segment;
    const style: Record<string, string | number> = {};
    let href: string | null = null;

    for (const mark of marks ?? []) {
      const [type, value] = mark;
      if (type === "b") style.fontWeight = 600;
      if (type === "i") style.fontStyle = "italic";
      if (type === "s") style.textDecoration = "line-through";
      if (type === "u") style.textDecoration = "underline";
      if (type === "c") {
        style.fontSize = "0.9em";
        style.fontWeight = 600;
        style.padding = "0.1em 0.32em";
        style.borderRadius = "4px";
        style.background = "rgba(135,131,120,0.15)";
      }
      if (type === "a" && value) href = value;
      if (type === "h") {
        const color = highlightColor(value);
        if (color) style.background = color;
      }
    }

    const lines = text.split("\n");
    const node = (
      <span key={`${keyPrefix}-${index}`} style={style}>
        {lines.map((line, lineIndex) => (
          <span key={`${keyPrefix}-${index}-${lineIndex}`}>
            {line}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </span>
    );

    if (href) {
      return (
        <a key={`${keyPrefix}-${index}`} href={href} target="_blank" rel="noreferrer" className="notion-link">
          {node}
        </a>
      );
    }

    return node;
  });
}

function renderChildren(ids: string[] | undefined, keyPrefix: string): ReactNode {
  if (!ids || ids.length === 0) return null;
  return ids.map((id, index) => renderBlock(id, `${keyPrefix}-${index}`));
}

function renderBlock(id: string, key: string): ReactNode {
  const block = getBlock(id);
  if (!block) return null;

  const text = plainText(block);

  if (block.type === "text") {
    if (!text.trim()) return <div key={key} className="notion-spacer" />;
    return (
      <p key={key} className="notion-text">
        {renderRichText(block.properties?.title, `${key}-text`)}
      </p>
    );
  }

  if (block.type === "sub_header") {
    return (
      <h2 key={key} className="notion-sub-header">
        {renderRichText(block.properties?.title, `${key}-h2`)}
      </h2>
    );
  }

  if (block.type === "header") {
    return (
      <h2 key={key} className="notion-header">
        {renderRichText(block.properties?.title, `${key}-h1`)}
      </h2>
    );
  }

  if (block.type === "sub_sub_header") {
    return (
      <h3 key={key} className="notion-sub-sub-header">
        {renderRichText(block.properties?.title, `${key}-h3`)}
      </h3>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote key={key} className="notion-quote">
        {renderRichText(block.properties?.title, `${key}-quote`)}
      </blockquote>
    );
  }

  if (block.type === "divider") {
    return <hr key={key} className="notion-divider" />;
  }

  if (block.type === "image") {
    const src = notionImageUrl(block);
    if (!src) return null;

    return (
      <figure key={key} className="notion-image-wrap">
        <img
          src={src}
          alt={block.properties?.caption?.[0]?.[0] || text || "Notion media"}
          className="notion-image"
          style={{
            width: block.format?.block_width ? `${block.format.block_width}px` : undefined,
            maxWidth: "100%",
          }}
        />
      </figure>
    );
  }

  if (block.type === "bulleted_list") {
    return (
      <ul key={key} className="notion-list">
        <li>{renderRichText(block.properties?.title, `${key}-li`)}</li>
      </ul>
    );
  }

  if (block.type === "callout") {
    return (
      <div key={key} className="notion-callout">
        {renderChildren(block.content, `${key}-callout`) }
      </div>
    );
  }

  if (block.type === "toggle") {
    return (
      <details key={key} className="notion-toggle" open>
        <summary className="notion-toggle-summary">
          {renderRichText(block.properties?.title, `${key}-toggle-summary`)}
        </summary>
        <div className="notion-toggle-content">{renderChildren(block.content, `${key}-toggle`)}</div>
      </details>
    );
  }

  if (block.type === "embed") {
    const raw = block.properties?.source?.[0]?.[0];
    if (!raw) return null;
    return (
      <div key={key} className="notion-embed-wrap">
        <a href={raw} target="_blank" rel="noreferrer" className="notion-link">
          {raw}
        </a>
      </div>
    );
  }

  if (block.type === "button") {
    const automationId = block.format?.automation_id;
    const automation = automationId ? automations[automationId]?.value?.value : undefined;
    const label = automation?.properties?.name ?? "Learn more";
    const actionId = automation?.action_ids?.[0];
    const url = actionId ? automationActions[actionId]?.value?.value?.config?.target?.url : undefined;

    if (!url) return null;

    return (
      <a key={key} href={url} target="_blank" rel="noreferrer" className="notion-button">
        {label}
      </a>
    );
  }

  if (block.type === "column_list") {
    const cols = (block.content ?? []).map((childId) => getBlock(childId)).filter(Boolean) as NotionBlock[];
    const template = cols
      .map((col) => `${Math.max(col.format?.column_ratio ?? 0.333, 0.2)}fr`)
      .join(" ");

    return (
      <div key={key} className="notion-columns" style={{ gridTemplateColumns: template || undefined }}>
        {renderChildren(block.content, `${key}-columns`) }
      </div>
    );
  }

  if (block.type === "column") {
    return (
      <div key={key} className="notion-column">
        {renderChildren(block.content, `${key}-column`) }
      </div>
    );
  }

  return null;
}

export default function Home() {
  const root = getBlock(PAGE_ID);
  const title = root?.properties?.title;
  const titleText = plainRichText(title);

  return (
    <main className="notion-page-shell">
      <article className="notion-page-content">
        <h1 className="notion-page-title">{titleText}</h1>
        {renderChildren(root?.content, "root")}
      </article>
    </main>
  );
}
