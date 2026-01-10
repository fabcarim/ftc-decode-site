import React from 'react';
import CodeSnippet from './CodeSnippet';
import { parseMarkdown } from '../utils/markdown';

const extractFilename = (meta = '') => {
  if (!meta) return undefined;
  const match = meta.match(/filename=([^\s]+)/i);
  if (!match) return undefined;
  return match[1].replace(/['"]/g, '');
};

const InlineContent = ({ parts }) => {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === 'string') {
          return <span key={index}>{part}</span>;
        }
        if (part.type === 'code') {
          return (
            <code
              key={index}
              className="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-800"
            >
              {part.value}
            </code>
          );
        }
        if (part.type === 'link') {
          return (
            <a
              key={index}
              href={part.url}
              className="text-googlebox-blue underline"
              target="_blank"
              rel="noreferrer"
            >
              {part.text}
            </a>
          );
        }
        return null;
      })}
    </>
  );
};

const MarkdownRenderer = ({ content }) => {
  const blocks = parseMarkdown(content);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          const Tag = block.level === 2 ? 'h2' : block.level === 3 ? 'h3' : 'h4';
          return (
            <Tag key={index} className="text-xl font-semibold text-gray-900">
              <InlineContent parts={block.inline} />
            </Tag>
          );
        }

        if (block.type === 'paragraph') {
          return (
            <p key={index} className="text-base leading-7 text-gray-700">
              <InlineContent parts={block.inline} />
            </p>
          );
        }

        if (block.type === 'list') {
          const ListTag = block.ordered ? 'ol' : 'ul';
          return (
            <ListTag
              key={index}
              className={
                block.ordered
                  ? 'list-decimal space-y-2 pl-6 text-gray-700'
                  : 'list-disc space-y-2 pl-6 text-gray-700'
              }
            >
              {block.inlineItems.map((itemParts, itemIndex) => (
                <li key={itemIndex} className="text-base leading-7">
                  <InlineContent parts={itemParts} />
                </li>
              ))}
            </ListTag>
          );
        }

        if (block.type === 'code') {
          return (
            <CodeSnippet
              key={index}
              code={block.value}
              language={block.language}
              filename={extractFilename(block.meta)}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default MarkdownRenderer;
