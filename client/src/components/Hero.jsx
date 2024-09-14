import Headline from "./hero/Headline";
import CTAButtons from "./hero/CTAButtons";
import SocialLinks from "./hero/SocialLinks";

import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-50 to-teal-100 py-20 md:py-32 mt-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        <article className="text-center md:text-left">
          <Headline />
          <p className="mt-4 text-lg text-slate-700 mb-8">
            Transforming ideas into powerful web solutions. Let&apos;s build
            something amazing together.
          </p>
          <CTAButtons />
          <SocialLinks />
        </article>

        <article className="hidden md:block">
          <img src={heroImg} alt="Hero" className="max-w-full h-auto mx-auto" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
