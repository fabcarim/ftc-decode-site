import React, { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const highlightJava = (code) => {
  let highlighted = escapeHtml(code);
  highlighted = highlighted.replace(/(\/\/.*$)/gm, '<span class="text-emerald-600">$1</span>');
  highlighted = highlighted.replace(
    /("(?:[^"\\]|\\.)*")/g,
    '<span class="text-amber-600">$1</span>',
  );
  highlighted = highlighted.replace(
    /\b(@\w+)/g,
    '<span class="text-purple-600">$1</span>',
  );
  highlighted = highlighted.replace(
    /\b(public|private|protected|class|void|int|double|boolean|enum|if|else|for|while|return|new|static|final)\b/g,
    '<span class="text-blue-600 font-semibold">$1</span>',
  );
  highlighted = highlighted.replace(
    /\b(\d+(?:\.\d+)?)\b/g,
    '<span class="text-purple-600">$1</span>',
  );
  return highlighted;
};

const highlightCode = (code, language) => {
  if (language === 'java' || language === 'kt') {
    return highlightJava(code);
  }
  return escapeHtml(code);
};

const CodeSnippet = ({ code, language = 'text', filename }) => {
  const [copied, setCopied] = useState(false);

  const displayCode = useMemo(() => code.trimEnd(), [code]);
  const highlighted = useMemo(
    () => highlightCode(displayCode, language).split('\n'),
    [displayCode, language],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error('Copy failed', error);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
        <span className="font-medium text-gray-700">{filename || 'Code Snippet'}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-semibold text-gray-600 hover:bg-gray-100"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <div className="grid grid-cols-[auto,1fr] gap-4 bg-gray-900 px-4 py-3 text-sm">
        <div className="select-none text-right font-mono text-gray-500">
          {highlighted.map((_, index) => (
            <div key={`line-${index}`} className="leading-6">
              {index + 1}
            </div>
          ))}
        </div>
        <pre className="font-mono text-gray-100">
          {highlighted.map((line, index) => (
            <div
              key={`code-${index}`}
              className="leading-6"
              dangerouslySetInnerHTML={{ __html: line || ' ' }}
            />
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeSnippet;
