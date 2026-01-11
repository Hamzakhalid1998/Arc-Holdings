import Hero from "../components/Hero";
import CertificateBg from "../assets/pagesBg.jpg";
import CertificateOne from "../assets/01-Certificates.jpg";
import CertificateTwo from "../assets/02-Certificates.jpg";
import CertificateThree from "../assets/03-Certificates.jpg";

const Certificates = () => {
  const certificates = [
    { img: CertificateOne, text: "Environmental Policy" },
    { img: CertificateTwo, text: "ISO 9001 Certification" },
    { img: CertificateThree, text: "Safety Standards" },
  ];

  return (
    <>
      <Hero
        BgImage={CertificateBg}
        pageName="Certificates"
        pageTitle="Certificates"
      />

      <div className="my-10 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-lg p-4 bg-white shadow-md w-full sm:w-[45%] md:w-[30%]"
            >
              <img
                src={item.img}
                alt={item.text}
                className="w-full object-cover rounded-md"
              />
              <p className="text-center text-orange-500 text-lg mt-4">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;
