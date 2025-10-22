import { Button } from "../ui/Button/Button";

export const GettingStarted = () => {
  return (
    <section className="bg-[#3b3054] getStarted-background bg-no-repeat bg-cover bg-left-top text-center flex flex-col items-center gap-6 py-14 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Boost your links today
      </h2>
      <Button>Get Started</Button>
    </section>
  );
};
