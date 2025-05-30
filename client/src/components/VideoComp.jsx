import React from "react";

const videos = [
  {
    id: 1,
    title: "Danny Quick",
    description: "Founder, Powerups",
    mediaType: "video",
    video: "https://framerusercontent.com/assets/bout3KxbMaPTRUvJGVwRzI0WM.mp4",
      logo: "https://framerusercontent.com/images/w6ArqgxbtxLXfbfeOJPIS8g7Q.jpg",
  },
  {
    id: 2,
    title: "John Smith",
    description: "Co-founder, Example Inc.",
    mediaType: "video",
    video: "https://framerusercontent.com/assets/XMwwb4nP2hKlj2AMlyQ79Ou8g8.mp4",
    logo: "https://framerusercontent.com/images/w6ArqgxbtxLXfbfeOJPIS8g7Q.jpg",
},
];
const VideoCarousel = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-white">
      {videos.map((item) => (
        <div key={item.id} className="w-full md:w-1/2 h-[600px] flex flex-col">
          <div className="flex-grow relative overflow-hidden">
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white px-6 py-4 flex items-center gap-3 h-[100px]">
            <div className="w-10 h-10 rounded-md overflow-hidden">
              <img
                src={item.logo}
                alt={`${item.title} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold truncate">{item.title}</span>
              <span className="text-sm text-gray-500 break-all">{item.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
