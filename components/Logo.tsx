export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif font-semibold leading-none ${className}`}>
      <span className="text-rss-ink">Raum</span>
      <span className="text-rss-yellow">.</span>{" "}
      <span className="text-rss-ink">Stille</span>
      <span className="text-rss-yellow">.</span>{" "}
      <span className="text-rss-ink">Stimme</span>
      <span className="text-rss-yellow">.</span>
    </span>
  );
}

export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    <span className={`block font-serif font-semibold leading-[0.95] ${className}`}>
      <span className="block">
        <span className="text-rss-ink">Raum</span>
        <span className="text-rss-yellow">.</span>
      </span>
      <span className="block">
        <span className="text-rss-ink">Stille</span>
        <span className="text-rss-yellow">.</span>
      </span>
      <span className="block">
        <span className="text-rss-ink">Stimme</span>
        <span className="text-rss-yellow">.</span>
      </span>
    </span>
  );
}
