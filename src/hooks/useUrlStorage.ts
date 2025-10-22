import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import type { ShortLink } from "../types/common";

export const useUrlStorage = () => {
  const [urls, setUrls] = useState<ShortLink[]>(() => {
    try {
      const stored = localStorage.getItem("shortenedUrls");
      return stored ? JSON.parse(stored) : [];
    } catch {
      toast.error("Failed to load saved URLs");
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("shortenedUrls", JSON.stringify(urls));
  }, [urls]);

  return { urls, setUrls };
};
