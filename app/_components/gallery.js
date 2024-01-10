// Components/Gallery.js
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
// you can add more image if you want
    {
      imageUrl: "/MTRP Pics/01-ISI.jpg",
      type: "MTRP Exam",
      title: "ISI Center",
    },
    {
      imageUrl: "/MTRP Pics/02-Durgapur.jpg",
      type: "MTRP Exam",
      title: "Durgapur",
    },
    {
      imageUrl: "/MTRP Pics/03-RKMNarendrapur.jpg",
      type: "MTRP Exam",
      title: "RKM Narendrapur",
    },
    {
      imageUrl: "/MTRP Pics/04-seniorcamp.jpg",
      type: "MTRP Camp",
      title: "Senior Camp",
    },
    {
      imageUrl: "/MTRP Pics/05-juniorcamp.jpg",
      type: "MTRP Camp",
      title: "Junior Camp",
    },
    {
        imageUrl: "/MTRP Pics/06-kiranmoy.jpg",
        type: "MTRP Camp",
        title: "Lecture by Prof. Kiranmoy Das",
    },
    {
        imageUrl: "/MTRP Pics/07-award1.jpg",
        type: "Award Ceremony",
        title: "",
    },
    {
        imageUrl: "/MTRP Pics/08-award2.jpg",
        type: "Award Ceremony",
        title: "",
    },
    {
        imageUrl: "/MTRP Pics/09-juniorsenior.jpg",
        type: "Award Ceremony",
        title: "Juniors and Seniors",
    },
  ];



  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full">
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-screen relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-3xl absolute bottom-0 left-2 z-10">
                      <div className="text-[#7bff29]">{x.type}</div>
                      <div className="text-yellow-200">{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;