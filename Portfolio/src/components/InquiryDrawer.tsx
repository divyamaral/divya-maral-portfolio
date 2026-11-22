import React, { useEffect, useState } from 'react';
import { SITE_META } from '../data/portfolio';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOPICS = [
  'Software Engineering Role',
  'Bitnest Product / Consulting',
  'Geospatial & ESG Tooling',
  'General Correspondence',
];

export default function InquiryDrawer({ isOpen, onClose }: InquiryDrawerProps) {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formattedSubject = `[${selectedTopic}] Inquiry from ${senderName || 'Portfolio Visitor'}`;
  const formattedBody = `${message}\n\n— ${senderName || 'Sent via rohitmane portfolio'}`;
  const mailtoHref = `mailto:${SITE_META.contactEmail}?subject=${encodeURIComponent(
    formattedSubject
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopyBrief = async () => {
    const clipboardText = `To: ${SITE_META.contactEmail}\nSubject: ${formattedSubject}\n\n${formattedBody}`;
    try {
      await navigator.clipboard.writeText(clipboardText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#1C1B1A]/35 transition-opacity duration-500"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <aside
        className="flex h-full w-full max-w-xl flex-col justify-between overflow-y-auto border-l border-[#1C1B1A]/20 bg-[#EFEAE2] px-6 py-8 text-[#1C1B1A] md:px-14 md:py-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Top Ledger Bar */}
          <div className="flex items-center justify-between border-b border-[#1C1B1A]/15 pb-5">
            <span className="text-xs uppercase tracking-[0.2em] text-[#59554E]">
              Correspondence · {SITE_META.location}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="py-1 text-xs uppercase tracking-[0.18em] text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              Close [Esc]
            </button>
          </div>

          <header className="mt-10">
            <h2 id="inquiry-title" className="font-serif text-4xl text-[#1C1B1A]">
              Direct Inquiry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#59554E]">
              For full-stack engineering roles, technical architecture reviews, or Bitnest engagements.
            </p>
          </header>

          {/* Topic Selection (Hairline Underline Tabs) */}
          <div className="mt-10">
            <span className="block text-xs uppercase tracking-[0.18em] text-[#59554E]">
              01 · Nature of Inquiry
            </span>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {TOPICS.map((topic) => {
                const active = topic === selectedTopic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`py-2 text-sm transition-colors duration-500 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734] ${
                      active
                        ? 'border-b border-[#064734] text-[#1C1B1A]'
                        : 'text-[#59554E] hover:text-[#1C1B1A]'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimal Hairline Inputs */}
          <div className="mt-10 space-y-8">
            <div>
              <label
                htmlFor="sender-name"
                className="block text-xs uppercase tracking-[0.18em] text-[#59554E]"
              >
                02 · Your Name or Organization
              </label>
              <input
                id="sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="e.g. Engineering Lead, Acme Systems"
                className="mt-3 w-full border-b border-[#1C1B1A]/25 bg-transparent py-2.5 text-base text-[#1C1B1A] placeholder:text-[#59554E]/85 focus:border-[#064734] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#064734]"
              />
            </div>

            <div>
              <label
                htmlFor="inquiry-note"
                className="block text-xs uppercase tracking-[0.18em] text-[#59554E]"
              >
                03 · Note
              </label>
              <textarea
                id="inquiry-note"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline the role, system scope, or timeline..."
                className="mt-3 w-full resize-none border-b border-[#1C1B1A]/25 bg-transparent py-2.5 text-base leading-relaxed text-[#1C1B1A] placeholder:text-[#59554E]/85 focus:border-[#064734] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#064734]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 py-2 text-sm text-[#1C1B1A] underline decoration-[#064734] underline-offset-4 transition-colors duration-500 hover:text-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              <span>Open in Mail Client</span>
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              onClick={handleCopyBrief}
              className="py-2 text-xs uppercase tracking-[0.16em] text-[#59554E] transition-colors duration-500 hover:text-[#1C1B1A] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              {copied ? 'Copied to clipboard' : `Copy address & note (${SITE_META.contactEmail})`}
            </button>
          </div>
        </div>

        {/* Direct Profiles */}
        <div className="mt-12 border-t border-[#1C1B1A]/15 pt-6 text-xs text-[#59554E]">
          <p className="uppercase tracking-[0.16em]">Elsewhere</p>
          <div className="mt-3 flex flex-wrap gap-6 text-[#1C1B1A]">
            <a
              href={SITE_META.links.github}
              target="_blank"
              rel="noreferrer"
              className="py-1 underline decoration-[#1C1B1A]/30 underline-offset-4 hover:decoration-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              GitHub (ro-hitmane)
            </a>
            <a
              href={SITE_META.links.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="py-1 underline decoration-[#1C1B1A]/30 underline-offset-4 hover:decoration-[#064734] focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#064734]"
            >
              HackerRank (rohitmane)
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}