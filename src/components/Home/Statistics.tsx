import iconBrand from "../../assets/images/icon-brand-recognition.svg";
import iconRecords from "../../assets/images/icon-detailed-records.svg";
import iconCustomizable from "../../assets/images/icon-fully-customizable.svg";
import { StatisticCard } from "./StatisticCard";

export const Statistic = () => {
  return (
    <section className="bg-[hsl(230,25%,95%)] text-center px-4 md:px-16 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Advanced Statistics
      </h2>
      <p className="max-w-2xl mx-auto text-gray-400 mb-24 text-base md:text-lg leading-8">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-20 md:gap-8 max-w-576 mx-auto">
        {/* connecting line */}
        <div className="absolute z-0 bg-cyan-400 md:w-160 md:h-2 w-2 h-full left-1/2 -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2" />

        <StatisticCard
          icon={iconBrand}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
          className="md:self-start"
        />
        <StatisticCard
          icon={iconRecords}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          className="md:mt-11"
        />
        <StatisticCard
          icon={iconCustomizable}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          className="md:mt-24"
        />
      </div>
    </section>
  );
};
