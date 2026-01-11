// src/pages/Contact.jsx
import Hero from "../components/Hero";
import ContactBg from "../assets/pagesBg.jpg";
import Form from "../components/Form"; // Use Form instead of CareerForm

const Contact = () => {
  return (
    <>
      <Hero BgImage={ContactBg} pageName="Contact" pageTitle="Contact Us" />

      <section className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* FORM */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Contact Us
            </h3>
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
              <Form uploadFile={false} /> {/* Contact form, no file upload */}
            </div>
          </div>

          {/* LOCATION */}
          <div className="w-full lg:w-1/2 flex flex-col items-center bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              Our Location
            </h3>

            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
              className="w-full h-64 sm:h-72 md:h-80 rounded-md shadow-sm"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="mt-6 space-y-3 text-sm sm:text-base text-center">
              <p>
                <strong>📍 Address:</strong> Dubai, UAE
              </p>
              <p>
                <strong>📞 Phone:</strong> +971 52 291 0234
              </p>
              <p>
                <strong>📧 Email:</strong> Info@archolding.ae
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
