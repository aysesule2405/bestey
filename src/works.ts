// Loads every piece in src/content/works. To add a new piece, drop a new .md file there.

export type Work = {
  slug: string;
  title: string;
  kind: 'poem' | 'prose';
  form?: 'prose';
  venue?: string;
  issue?: string;
  venueUrl?: string;
  date: string;
  art?: 'budgie' | 'sunflower' | 'nautilus' | 'bosphorus';
  lines: string[];
  body: string;
  note?: string;
};

const raw = import.meta.glob('./content/works/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function parse(file: string, text: string): Work {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file} is missing its --- header ---`);
  const [, head, rest] = match;
  const data: Record<string, any> = {};
  let listKey: string | null = null;
  for (const line of head.split('\n')) {
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      data[listKey].push(unquote(item[1]));
      continue;
    }
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, value] = kv;
    if (value === '') {
      data[key] = [];
      listKey = key;
    } else {
      data[key] = unquote(value);
      listKey = null;
    }
  }
  const [body, note] = rest.split(/\n---note---\n/);
  return {
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
    lines: [],
    ...data,
    body: body.replace(/\s+$/, ''),
    note: note?.trim(),
  } as Work;
}

const unquote = (s: string) => s.trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');

export const works: Work[] = Object.entries(raw)
  .map(([file, text]) => parse(file, text))
  .sort((a, b) => b.date.localeCompare(a.date));

export const artImages = {
  budgie: { src: '/images/budgie.webp', ink: false },
  sunflower: { src: '/images/sunflower.webp', ink: false },
  nautilus: { src: '/images/nautilus-ink.webp', ink: true },
  bosphorus: { src: '/images/bosphorus-ink.webp', ink: true },
} as const;
