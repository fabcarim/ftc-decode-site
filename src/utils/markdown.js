const isBlockStart = (line) => {
  const trimmed = line.trim();
  return (
    trimmed.startsWith('```') ||
    trimmed.startsWith('#') ||
    trimmed.startsWith('- ') ||
    trimmed.startsWith('* ') ||
    /^\d+\./.test(trimmed)
  );
};

const parseInline = (text) => {
  const parts = [];
  let remaining = text;

  while (remaining.length) {
    const codeIndex = remaining.indexOf('`');
    const linkIndex = remaining.indexOf('[');
    const nextIndex =
      codeIndex === -1
        ? linkIndex
        : linkIndex === -1
          ? codeIndex
          : Math.min(codeIndex, linkIndex);

    if (nextIndex === -1) {
      parts.push(remaining);
      break;
    }

    if (nextIndex > 0) {
      parts.push(remaining.slice(0, nextIndex));
      remaining = remaining.slice(nextIndex);
    }

    if (remaining.startsWith('`')) {
      const end = remaining.indexOf('`', 1);
      if (end === -1) {
        parts.push(remaining);
        break;
      }
      parts.push({ type: 'code', value: remaining.slice(1, end) });
      remaining = remaining.slice(end + 1);
      continue;
    }

    if (remaining.startsWith('[')) {
      const endText = remaining.indexOf(']');
      const startUrl = remaining.indexOf('(', endText);
      const endUrl = remaining.indexOf(')', startUrl);
      if (endText !== -1 && startUrl !== -1 && endUrl !== -1) {
        parts.push({
          type: 'link',
          text: remaining.slice(1, endText),
          url: remaining.slice(startUrl + 1, endUrl),
        });
        remaining = remaining.slice(endUrl + 1);
        continue;
      }
    }

    parts.push(remaining);
    break;
  }

  return parts;
};

export const parseMarkdown = (content) => {
  const lines = content.split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (trimmed.startsWith('```')) {
      const meta = trimmed.replace('```', '').trim();
      const [language, ...metaParts] = meta.split(' ');
      const metaString = metaParts.join(' ');
      index += 1;
      const codeLines = [];
      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push({
        type: 'code',
        language: language || 'text',
        meta: metaString,
        value: codeLines.join('\n'),
      });
      index += 1;
      continue;
    }

    if (trimmed.startsWith('#')) {
      const level = trimmed.match(/^#+/)[0].length;
      const text = trimmed.replace(/^#+\s*/, '');
      blocks.push({ type: 'heading', level, text });
      index += 1;
      continue;
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = [];
      while (index < lines.length) {
        const itemLine = lines[index].trim();
        if (!itemLine.startsWith('- ') && !itemLine.startsWith('* ')) break;
        items.push(itemLine.replace(/^[-*]\s*/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: false, items });
      continue;
    }

    if (/^\d+\./.test(trimmed)) {
      const items = [];
      while (index < lines.length) {
        const itemLine = lines[index].trim();
        if (!/^\d+\./.test(itemLine)) break;
        items.push(itemLine.replace(/^\d+\.\s*/, ''));
        index += 1;
      }
      blocks.push({ type: 'list', ordered: true, items });
      continue;
    }

    const paragraphLines = [trimmed];
    index += 1;
    while (index < lines.length && lines[index].trim() && !isBlockStart(lines[index])) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks.map((block) => {
    if (block.type === 'paragraph' || block.type === 'heading') {
      return { ...block, inline: parseInline(block.text) };
    }
    if (block.type === 'list') {
      return { ...block, inlineItems: block.items.map(parseInline) };
    }
    return block;
  });
};
