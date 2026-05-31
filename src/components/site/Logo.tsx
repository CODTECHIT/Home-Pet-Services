import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export const Logo = ({ compact = false }: { compact?: boolean }) => {
  const triggerEmojiBlast = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const emojis = ["🐶", "🐱", "🐕", "🐈", "🐾", "🐩", "😸", "🐶", "😽", "🐾", "🐈‍⬛", "🐩", "😻", "🐾"];
    const container = document.body;
    const rect = e.currentTarget.getBoundingClientRect();
    const startX = rect.left + rect.width / 2 + window.scrollX;
    const startY = rect.top + rect.height / 2 + window.scrollY;
    const numEmojis = 80;

    for (let i = 0; i < numEmojis; i++) {
      const el = document.createElement("div");
      el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.position = "absolute";
      el.style.left = `${startX}px`;
      el.style.top = `${startY}px`;
      el.style.transform = "translate(-50%, -50%) scale(0.1)";
      el.style.pointerEvents = "none";
      el.style.zIndex = "99999";
      el.style.fontSize = `${Math.random() * 20 + 22}px`; // 22px to 42px
      const duration = Math.random() * 1.5 + 1.8; // 1.8s to 3.3s
      el.style.transition = `all ${duration}s cubic-bezier(0.1, 0.8, 0.25, 1)`;
      el.style.opacity = "1";
      container.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      // Allow particles to scatter up to 85% of screen size to cover the entire page
      const maxDistance = Math.max(window.innerWidth, window.innerHeight) * 0.85;
      const distance = Math.random() * maxDistance;
      const targetX = startX + Math.cos(angle) * distance;
      // Gravity effect pulling emojis downward as they fly out
      const targetY = startY + Math.sin(angle) * distance + (Math.random() * 300 + 200);

      requestAnimationFrame(() => {
        el.style.left = `${targetX}px`;
        el.style.top = `${targetY}px`;
        el.style.transform = `translate(-50%, -50%) scale(${Math.random() * 0.7 + 0.8}) rotate(${Math.random() * 1080 - 540}deg)`;
        el.style.opacity = "0";
      });

      setTimeout(() => {
        el.remove();
      }, duration * 1000);
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
