import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export const Logo = ({ compact = false }: { compact?: boolean }) => {
  const triggerEmojiBlast = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const emojis = ["🐶", "🐱", "🐕", "🐈", "🐾", "🐩", "😸", "🐶", "😽", "🐾"];
    const container = document.body;
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + rect.height / 2 + window.scrollY;

    for (let i = 0; i < 24; i++) {
      const el = document.createElement("div");
      el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.position = "absolute";
      el.style.left = `${startX}px`;
      el.style.top = `${startY}px`;
      el.style.transform = "translate(-50%, -50%) scale(0.2)";
      el.style.pointerEvents = "none";
      el.style.zIndex = "99999";
      el.style.fontSize = `${Math.random() * 16 + 24}px`;
      el.style.transition = "all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      el.style.opacity = "1";
      container.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 120 + 80;
      const targetX = startX + Math.cos(angle) * distance;
      const targetY = startY + Math.sin(angle) * distance - (Math.random() * 50 + 30);

      requestAnimationFrame(() => {
        el.style.left = `${targetX}px`;
        el.style.top = `${targetY}px`;
        el.style.transform = `translate(-50%, -50%) scale(1.2) rotate(${Math.random() * 540 - 270}deg)`;
        el.style.opacity = "0";
      });

      setTimeout(() => {
        el.remove();
      }, 950);
    }
  };

  return (
    <Link to="/" onClick={triggerEmojiBlast} className="flex items-center gap-2.5 group">
      <img
        src={logoImg}
        alt="Home Pet Services Logo"
        className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="leading-tight hidden min-[375px]:block">
          <span className="block font-display text-base sm:text-lg font-bold text-foreground">Home Pet Services</span>
          <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-brand-blue font-semibold">Care at your doorstep</span>
        </span>
      )}
    </Link>
  );
};
