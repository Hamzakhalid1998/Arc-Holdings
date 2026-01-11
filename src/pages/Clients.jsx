import Hero from "../components/Hero";
import Client from "../components/Client";
import ClientsBg from "../assets/pagesBg.jpg";

import ClientOne from "../assets/01-Client.png";
import ClientTwo from "../assets/02-Client.png";
import ClientThree from "../assets/03-Client.png";
import ClientFour from "../assets/04-Client.png";
import ClientFive from "../assets/05-Client.png";
import ClientSix from "../assets/06-Client.png";
import ClientSeven from "../assets/07-Client.png";
import ClientEight from "../assets/08-Client.png";
import ClientNine from "../assets/09-Client.png";
import ClientTen from "../assets/10-Client.png";
import ClientEleven from "../assets/11-Client.png";
import ClientTwelve from "../assets/12-Client.png";
import ClientThirteen from "../assets/13-Client.png";
import ClientFourteen from "../assets/14-Client.png";
import ClientFifteen from "../assets/15-Client.png";

const Clients = () => {
  const slides = [
    ClientOne,
    ClientTwo,
    ClientThree,
    ClientFour,
    ClientFive,
    ClientSix,
    ClientSeven,
    ClientEight,
    ClientNine,
    ClientTen,
    ClientEleven,
    ClientTwelve,
    ClientThirteen,
    ClientFourteen,
    ClientFifteen,
  ].map((img) => ({ img, title: "" }));

  return (
    <>
      <Hero BgImage={ClientsBg} pageName="Clients" pageTitle="Clients" />

      <div className="flex justify-center items-center py-10">
        <Client
          slides={slides}
          className="w-70"
          mainDivHeight="h-80"
          mainDivWidth="w-80"
          centerContent={true}
        />
      </div>
    </>
  );
};

export default Clients;
