import Hero from "../components/Hero";
import AboutImage from "../assets/aboutBg.jpg";
import AboutOne from "../assets/01-About.jpg";

const About = () => {
  return (
    <>
      <Hero BgImage={AboutImage} pageName="About Us" pageTitle="About" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 my-14 sm:my-16 md:my-20 lg:my-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
            <h2 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              About ARC Holdings
            </h2>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Emirates. We have consistently delivered excellence throughout the
              Gulf region, with a strong presence in the UAE, Saudi Arabia, and
              Qatar. The company has successfully executed comprehensive
              electromechanical solutions for a diverse array of projects,
              including hospitals, hotels, shopping complexes, residential
              developments, private commercial and residential buildings,
              villas, and industrial facilities across all sectors of real
              estate and infrastructure.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
              Through our unwavering commitment to operational efficiency and
              technical excellence, coupled with a highly skilled and dedicated
              team, ARC Holdings ensures the highest standards of quality and
              service. We have sustained our business ethos by prioritizing
              client satisfaction and consistently delivering projects with
              precision, effectiveness, and professionalism.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src={AboutOne}
                alt="About ARC Holdings"
                className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
