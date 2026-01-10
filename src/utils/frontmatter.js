const parseValue = (value) => {
  const trimmed = value.trim();
  if (!trimmed) return '';
  if (/^\d+$/.test(trimmed)) return Number(trimmed);
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim();
    if (!inner) return [];
    return inner
      .split(',')
      .map((item) => item.trim().replace(/['"]/g, ''))
      .filter(Boolean);
  }
  return trimmed.replace(/['"]/g, '');
};

export const parseFrontmatter = (raw) => {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw };
  }

  const endIndex = raw.indexOf('\n---');
  if (endIndex === -1) {
    return { data: {}, content: raw };
  }

  const frontmatterBlock = raw.slice(3, endIndex).trim();
  const content = raw.slice(endIndex + 4).trimStart();
  const data = {};

  frontmatterBlock.split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (!key || rest.length === 0) return;
    const value = rest.join(':');
    data[key.trim()] = parseValue(value);
  });

  return { data, content };
};
