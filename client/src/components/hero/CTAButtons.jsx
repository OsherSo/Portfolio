const CTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
      <a
        href="#projects"
        className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg"
      >
        Explore My Work
      </a>
      <a
        href="#contact"
        className="px-6 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition duration-300 shadow-md hover:shadow-lg border border-emerald-600"
      >
        Let&apos;s Connect
      </a>
    </div>
  );
};

export default CTAButtons;
