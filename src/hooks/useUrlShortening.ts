import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import URLShortenerAPI from "../api/url-shortener-api";
import type { ShortLink } from "../types/common";

export const useUrlShortening = (
  setLinks: React.Dispatch<React.SetStateAction<ShortLink[]>>,
  reset?: () => void
) => {
  const mutation = useMutation({
    mutationFn: ({ url }: { url: string }) =>
      URLShortenerAPI.postShortenURL(url),

    onSuccess: (result, params) => {
      const short = result?.result_url;

      if (!short) {
        toast.warning("No shortened URL found in API response");
        return;
      }

      setLinks((prev) => [
        { original_link: params.url, full_short_link: short },
        ...prev,
      ]);

      toast.success("URL shortened successfully!");
      reset?.();
    },

    onError: (error) => {
      toast.error(
        (error as Error)?.message || "Failed to shorten URL. Please try again."
      );
    },
  });

  return {
    shortenUrl: mutation.mutate,
    shortenUrlAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
