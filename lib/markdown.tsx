import type { ReactNode } from "react";
import { Fragment } from "react";

/**
 * Minimaler Markdown-Renderer für redaktionelle Texte aus Sveltia CMS.
 *
 * Unterstützt bewusst nur das, was Redakteur:innen im CMS wirklich brauchen:
 *
 *   ## Überschrift            → <h2>
 *   ### Unterüberschrift      → <h3>
 *   - Punkt / * Punkt         → <ul><li>
 *   1. Punkt                  → <ol><li>
 *   > Zitat                   → <blockquote>
 *   **fett**                  → <strong>
 *   *kursiv* / _kursiv_       → <em>
 *   [Text](https://…)         → <a>
 *   Leerzeile                 → neuer Absatz
 *   Zeilenumbruch             → <br />
 *
 * Es wird kein HTML aus dem CMS interpretiert (kein dangerouslySetInnerHTML),
 * damit eingegebener Text niemals als Markup ausgeführt werden kann.
 */

const INLINE_PATTERN =
  /(\*\*[^*]+\*\*|__[^_]+__|\*[^*\n]+\*|_[^_\n]+_|\[[^\]]+\]\([^)\s]+\)|https?:\/\/[^\s<>()]+)/g;

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const parts = text.split(INLINE_PATTERN).filter((part) => part !== undefined && part !== "");

  parts.forEach((part, index) => {
    const key = `${keyPrefix}-${index}`;

    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      nodes.push(
        <a key={key} href={link[2]} target={isExternal(link[2]) ? "_blank" : undefined} rel={isExternal(link[2]) ? "noreferrer" : undefined}>
          {link[1]}
        </a>,
      );
      return;
    }

    if (/^https?:\/\//.test(part)) {
      nodes.push(
        <a key={key} href={part} target="_blank" rel="noreferrer">
          {part.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </a>,
      );
      return;
    }

    if (/^(\*\*|__).+(\*\*|__)$/.test(part)) {
      nodes.push(<strong key={key}>{part.slice(2, -2)}</strong>);
      return;
    }

    if (/^(\*|_).+(\*|_)$/.test(part)) {
      nodes.push(<em key={key}>{part.slice(1, -1)}</em>);
      return;
    }

    // Einfacher Text: einzelne Zeilenumbrüche als <br /> erhalten
    const lines = part.split("\n");
    lines.forEach((line, lineIndex) => {
      if (lineIndex > 0) nodes.push(<br key={`${key}-br-${lineIndex}`} />);
      nodes.push(<Fragment key={`${key}-t-${lineIndex}`}>{line}</Fragment>);
    });
  });

  return nodes;
}

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

type Block =
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; ordered: boolean; items: string[] };

function parseBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");

  let paragraph: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  let quote: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ kind: "paragraph", text: paragraph.join("\n").trim() });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list && list.items.length) blocks.push({ kind: "list", ...list });
    list = null;
  };
  const flushQuote = () => {
    if (quote.length) {
      blocks.push({ kind: "quote", text: quote.join("\n").trim() });
      quote = [];
    }
  };
  const flushAll = () => {
    flushParagraph();
    flushList();
    flushQuote();
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      flushAll();
      continue;
    }

    const heading = /^(#{2,3})\s+(.*)$/.exec(line);
    if (heading) {
      flushAll();
      blocks.push({ kind: "heading", level: heading[1].length === 2 ? 2 : 3, text: heading[2].trim() });
      continue;
    }

    const bullet = /^\s*[-*+]\s+(.*)$/.exec(line);
    if (bullet) {
      flushParagraph();
      flushQuote();
      if (!list || list.ordered) {
        flushList();
        list = { ordered: false, items: [] };
      }
      list.items.push(bullet[1].trim());
      continue;
    }

    const numbered = /^\s*\d+[.)]\s+(.*)$/.exec(line);
    if (numbered) {
      flushParagraph();
      flushQuote();
      if (!list || !list.ordered) {
        flushList();
        list = { ordered: true, items: [] };
      }
      list.items.push(numbered[1].trim());
      continue;
    }

    const quoted = /^\s*>\s?(.*)$/.exec(line);
    if (quoted) {
      flushParagraph();
      flushList();
      quote.push(quoted[1]);
      continue;
    }

    flushList();
    flushQuote();
    paragraph.push(line);
  }

  flushAll();
  return blocks;
}

/** Rendert einen Markdown-String als React-Elemente. */
export function Markdown({ children }: { children?: string | null }) {
  if (!children || !children.trim()) return null;

  return (
    <>
      {parseBlocks(children).map((block, index) => {
        const key = `block-${index}`;

        if (block.kind === "heading") {
          return block.level === 2 ? (
            <h2 key={key}>{renderInline(block.text, key)}</h2>
          ) : (
            <h3 key={key}>{renderInline(block.text, key)}</h3>
          );
        }

        if (block.kind === "quote") {
          return <blockquote key={key}>{renderInline(block.text, key)}</blockquote>;
        }

        if (block.kind === "list") {
          const items = block.items.map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ));
          return block.ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>;
        }

        return <p key={key}>{renderInline(block.text, key)}</p>;
      })}
    </>
  );
}
