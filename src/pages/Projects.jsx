import Hero from "../components/Hero";
import Client from "../components/Client";
import ProjectsBg from "../assets/pagesBg.jpg";

import ProjectOne from "../assets/01-City-Walk.jpg";
import ProjectTwo from "../assets/01-Edgnex.jpeg";
import ProjectThree from "../assets/01-Rawadah.jpg";
import ProjectFour from "../assets/01-burj-damac.jpg";
import ProjectFive from "../assets/01-Sur-La.jpg";
import ProjectSix from "../assets/01-Al-Zahia.jpg";
import ProjectSeven from "../assets/01-Zahra-Breeze.jpg";
import ProjectEight from "../assets/01-Hayat-boulaverd.jpg";
import ProjectNine from "../assets/01-Ghalia-Tower.jpg";
import ProjectTen from "../assets/01-Park-Ridge-Tower.jpg";
import ProjectEleven from "../assets/01-Golf-Suits.jpg";
import ProjectTwelve from "../assets/01-Virdis.png";
import ProjectThirteen from "../assets/01-Park-Horizon.jpg";
import ProjectFourteen from "../assets/01-Aykon-city-tower-c.jpg";
import ProjectFifteen from "../assets/01-Grand-Blue-Tower.png";
import ProjectSixteen from "../assets/01-Villa-Nova.jpg";
import ProjectSeventeen from "../assets/01-Al-Reeman-Villas.png";
import ProjectEighteen from "../assets/01-Golf-Grove.jpg";
import ProjectNineteen from "../assets/01-Golf-Place-II.png";
import ProjectTwenty from "../assets/01-Tenora.jpg";
import ProjectTwentyOne from "../assets/01-Avani.jpg";
import ProjectTwentyTwo from "../assets/01-Prive.jpg";
import ProjectTwentyThree from "../assets/01-Centara.jpg";
import ProjectTwentyFour from "../assets/01-IBN.jpg";
import ProjectTwentyFive from "../assets/01-Royal.png";

const ProjectsData = [
  {
    heading: "DATA CENTERS",
    projects: [{ img: ProjectTwo, title: "EDGNEX RYD-1 DATA CENTER" }],
  },
  {
    heading: "RESIDENTIAL TOWERS",
    projects: [
      { img: ProjectThree, title: "RAWADAH APPARTMENTS" },
      { img: ProjectFour, title: "BURJ DAMAC 4" },
      { img: ProjectOne, title: "CITY WALK" },
      { img: ProjectSeven, title: "ZAHIRA BREEZE" },
      { img: ProjectEight, title: "HAYAT BOULVARD" },
      { img: ProjectNine, title: "GHALIA TOWER" },
      { img: ProjectTen, title: "PARK RIDGE TOWER" },
      { img: ProjectEleven, title: "GOLF SUITS" },
      { img: ProjectTwelve, title: "VIRDIS" },
      { img: ProjectThirteen, title: "PARK HORIZON" },
      { img: ProjectFourteen, title: "AYKON CITY - TOWER C" },
      { img: ProjectFifteen, title: "GRAND BLUE TOWER" },
    ],
  },
  {
    heading: "VILLAS",
    projects: [
      { img: ProjectFive, title: "SUR LA MER TOWN HOUSES" },
      { img: ProjectSix, title: "AL ZAHIA VILLAS" },
      { img: ProjectSixteen, title: "VILLA NOVA" },
      { img: ProjectSeventeen, title: "AL REEMAN VILLAS" },
      { img: ProjectEighteen, title: "GOLF GROVE" },
      { img: ProjectNineteen, title: "GOLF PLACE-II" },
    ],
  },
  {
    heading: "HOTELS",
    projects: [
      { img: ProjectTwenty, title: "TENORA HOTEL APARTMENTS" },
      { img: ProjectTwentyOne, title: "AVANI HOTEL" },
      { img: ProjectTwentyTwo, title: "PRIVE HOTEL" },
      { img: ProjectTwentyThree, title: "CENTARA RESORT" },
      { img: ProjectTwentyFour, title: "IBN BATTUTA PREMIER INN HOTEL" },
      { img: ProjectTwentyFive, title: "ROYAL CONTINENTAL HOTEL" },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Hero BgImage={ProjectsBg} pageName="Projects" pageTitle="Our Projects" />
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5 py-16 space-y-20">
        {ProjectsData.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-3xl md:text-3xl font-extrabold pb-3 mb-8 tracking-wider uppercase text-center lg:text-start">
              <span className="border-b-4 pb-3 border-orange-500 inline-block">
                {section.heading}
              </span>
            </h2>

            <Client
              slides={section.projects}
              className="rounded-xl"
              mainDivHeight="h-80"
              mainDivWidth="w-80"
              showHoverText={true}
              contentDirection={
                section.heading === "DATA CENTERS"
                  ? "justify-center lg:justify-start"
                  : "justify-center"
              }
              extraGap="gap-x-6 gap-y-8"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
