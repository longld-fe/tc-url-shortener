import { useEffect, useRef, useState } from "react";

export function useToggleClick<T extends HTMLElement>() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<T | null>(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, toggle, close, ref };
}
