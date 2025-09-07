"use client";
import React, { useEffect, useRef } from "react";
type Props = {
  triggerRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
};

export default function PositionedMenu({
  triggerRef,
  open,
  onClose,
  className = "",
  style = {},
  align = "left",
  children,
}: Props) {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function update() {
      const trigger = triggerRef?.current;
      const el = elRef.current;
      if (!trigger || !el) return;

      const rect = trigger.getBoundingClientRect();
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;


      let left = rect.left + scrollX;
      if (align === "center") left = rect.left + scrollX + (rect.width - el.offsetWidth) / 2;
      if (align === "right") left = rect.right + scrollX - el.offsetWidth;

      let top = rect.bottom + scrollY + 6; 

      const winW = window.innerWidth;
      if (left + el.offsetWidth > winW - 8) left = Math.max(8, winW - el.offsetWidth - 8);
      if (left < 8) left = 8;

      const winH = window.innerHeight;
      if (top + el.offsetHeight > winH - 8) {
        const possibleTop = rect.top + scrollY - el.offsetHeight - 6;
        if (possibleTop > 8) top = possibleTop;
      }

      el.style.left = `${left}px`;
      el.style.top = `${top}px`;
    }

    const t = setTimeout(update, 0);

    const ro = new ResizeObserver(update);
    if (triggerRef?.current) ro.observe(triggerRef.current);
    if (elRef.current) ro.observe(elRef.current);

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, triggerRef, align]);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      const el = elRef.current;
      const trigger = triggerRef?.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target) && trigger && !trigger.contains(e.target)) {
        onClose();
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, triggerRef, onClose]);

  if (!open) return null;

  return (
    <div
      ref={elRef}
      role="menu"
      className={className}
      style={{
        position: "fixed",
        zIndex: 9999,
        minWidth: 160,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
