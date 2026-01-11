// src/components/HomePageSlider.jsx
const HomePageSlider = ({ video }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HomePageSlider;
