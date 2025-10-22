import { webApiClient } from "./web-api-client";

const URLShortenerAPI = {
  postShortenURL: async (url: string) => {
    return await webApiClient.post<{ result_url: string }, { url: string }>(
      "/shorten",
      { url },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};

export default URLShortenerAPI;
