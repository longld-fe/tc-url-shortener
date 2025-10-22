import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUrlStorage } from "../../hooks/useUrlStorage";
import { urlSchema } from "../../schemas/urlShortener";
import { useUrlShortening } from "../../hooks/useUrlShortening";
import { Button } from "../ui/Button/Button";

type FormData = {
  url: string;
};

export const UrlShortener: React.FC = () => {
  const { urls, setUrls } = useUrlStorage();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: { url: "" },
  });

  const { shortenUrl, isLoading, isError, error } = useUrlShortening(
    setUrls,
    reset
  );

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleCopyClick = async (index: number) => {
    const link = urls[index].full_short_link;
    await navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const onSubmit = handleSubmit((data) => {
    shortenUrl({ url: data.url });
  });

  return (
    <>
      <section className="form relative mx-7 md:mx-16">
        <div className="form-container flex flex-col items-center w-full absolute top-0 -translate-y-1/2">
          <form
            onSubmit={onSubmit}
            className="flex flex-col md:flex-row w-full bg-[#3b3054] p-6 md:p-12 rounded-lg form-background bg-no-repeat bg-right-top items-center gap-4 md:gap-8 relative"
          >
            <div className="w-full relative text-left md:mr-5 mb-0">
              <Controller
                control={control}
                name="url"
                render={({ field }) => (
                  <input
                    {...field}
                    ref={inputRef}
                    type="text"
                    placeholder="Shorten a link here..."
                    className={`w-full p-3 text-lg rounded-lg border focus:outline-none bg-white placeholder-gray-400 ${
                      errors.url || isError
                        ? "border-2 border-red-700 placeholder-red-500"
                        : "border-none"
                    }`}
                  />
                )}
              />
              {errors.url ? (
                <p className="error-text text-red-400 absolute mt-1 text-sm">
                  {errors.url.message}
                </p>
              ) : isError ? (
                <p className="error-text text-red-400 absolute mt-1 text-sm">
                  {(error as Error)?.message || "Something went wrong"}
                </p>
              ) : null}
            </div>

            <Button
              className="rounded-md w-30 p-3 text-nowrap"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Shorten It!"}
            </Button>
          </form>
        </div>
      </section>

      {/* Shortened urls */}
      <div className="shorter-container pt-24 md:pt-32 px-4 md:px-16 bg-[hsl(230,25%,95%)]">
        {urls.length > 0 &&
          urls.map((link, index) => (
            <div
              key={index}
              className="shorter bg-white mt-4 p-4 md:p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="shorter-original w-full md:w-[40vw] py-2">
                <a
                  href={link.original_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shorter-originalLink text-[#3b3054] block no-underline pr-2 max-w-full break-all"
                >
                  {link.original_link}
                </a>
              </div>

              <div className="shorter-result flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center border-t md:border-t-0 md:ml-4 pt-2 md:pt-0 w-full md:w-auto">
                <a
                  href={link.full_short_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shorter-fullShortLink text-cyan block py-2 no-underline break-all"
                >
                  {link.full_short_link}
                </a>

                <Button
                  onClick={() => handleCopyClick(index)}
                  className={`rounded-md ${copiedIndex === index ? "bg-dark-violet" : ""}`}
                  disabled={isLoading}
                >
                  {copiedIndex === index ? "Copied!" : "Copy"}
                </Button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
