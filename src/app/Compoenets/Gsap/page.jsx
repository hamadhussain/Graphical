"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import Image from "next/image";
import { Inter, Roboto_Mono, Pacifico, Noto_Sans_JP } from "next/font/google";
import { motion } from "framer-motion";

const roboto = Noto_Sans_JP({
  weight: ["900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  useEffect(() => {
    let bodyScrollBar = Scrollbar.init(document.body, {
      damping: 0.1,
      delegateTo: document,
    });

    ScrollTrigger.scrollerProxy(".scroller", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");
    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });
      tl.to(image, { height: 0 });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });

    var texts = gsap.utils.toArray(".panel-text");
    texts.forEach((text, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          scroller: ".scroller",
          start: () => "" + window.innerHeight * i,
          end: () => "" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });
      tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    });

    ScrollTrigger.create({
      trigger: "section.black",
      scroller: ".scroller",
      scrub: true,
      //   markers: true,
      pin: true,
      start: () => "top top",
      end: () => "" + (images.length + 1) * window.innerHeight,
      invalidateOnRefresh: true,
    });

    return () => {
      bodyScrollBar.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const im = [
    { id: 1, imgname: "1", pa: "Custom Designs" },
    { id: 2, imgname: "2", pa: "" },
    { id: 3, imgname: "3", pa: "" },
    { id: 4, imgname: "4", pa: "" },
    { id: 5, imgname: "5", pa: "Interactive Arts" },
  ];
  return (
    <div className={"scroller"}>
      <div
        className={`h-screen intro flex justify-center items-center ${roboto.className}`}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-white"
        >
          Designer
        </motion.p>
      </div>

      <section className={""}>
        <div className=" grid-container text-black">
          {im.map((i) => (
            <div
              key={i.id}
              className={`item${i.id}  flex items-center borde-2`}
            >
              <Image
                src={`/${i.imgname}.jpg`}
                className=" rounded-lg cursor-pointer hover:scale-150 transition-all ease-in-out duration-200"
                width={200}
                height={100}
                alt={`Image ${i.id}`}
              />
              <h1 className={`text-4xl item${i.id}p`}>{i.pa}</h1>
            </div>
          ))}
        </div>
      </section>
      {/* 
      <section className={" black "}>
        <h1 className=" text-2xl">
          "Crafting Unique Identities Through Thoughtful Logo Design"
        </h1>{" "}
        <div className={"pWrap"}>
          <div className={`panel blue `}></div>
          <div className={`panel   red`}></div>
          <div
            className={`panel   orangePanel`}
          ></div>
          <div
            className={`panel   purple`}
          ></div>
        </div>
      </section> */}
      <section
        className={" black flex justify-around items-center  lg:flex-row flex-col"}
      >
        <h1 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center">
          "Crafting Unique Identities Through Thoughtful Logo Design"
        </h1>

        <div className={"pWrap"}>
          <div className={`panel blue flex justify-center items-center`}></div>
          <div className={`panel  flex justify-center items-center red`}></div>
          <div
            className={`panel  flex justify-center items-center orangePanel`}
          ></div>
          <div
            className={`panel flex justify-center items-center  purple`}
          ></div>
        </div>
      </section>
      <div>
        <div className="h-screen flex flex-col lg:flex-row items-center justify-around px-4">
          <div className="text-center max-w-xl lg:max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Innovative Logo Design
            </h2>
            <p className="text-base lg:text-lg">
              At the heart of every successful brand is a unique logo that tells
              a story. I specialize in creating innovative and memorable logos
              that capture the essence of your business. Whether you’re a
              startup or an established company, I tailor each design to ensure
              it resonates with your target audience and stands out in the
              marketplace.
            </p>
          </div>
          <Image
            src="/10.jpg"
            className="rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 w-full max-w-xs lg:max-w-sm"
            width={400}
            height={300}
          />
        </div>

        <div className="h-screen flex  flex-col-reverse lg:flex-row items-center justify-around px-4">
          <Image
            src="/11.jpg"
            className="rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 w-full max-w-xs lg:max-w-sm"
            width={400}
            height={300}
          />
          <div className="text-center max-w-xl lg:max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Creative Process
            </h2>
            <p className="text-base lg:text-lg">
              My design process is both collaborative and strategic. I begin by
              understanding your brand’s core values and vision, followed by
              sketching and conceptualizing ideas. Through a series of
              iterations, I refine the design to ensure it aligns perfectly with
              your brand identity. Each step is aimed at delivering a logo that
              not only looks great but also communicates your brand’s message
              effectively.
            </p>
          </div>
        </div>

        <div className="h-screen flex flex-col lg:flex-row items-center justify-around px-4">
          <div className="text-center max-w-xl lg:max-w-md">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose Me?
            </h2>
            <p className="text-base lg:text-lg">
              With a keen eye for detail and a passion for design, I offer a
              personalized approach to logo creation. My commitment to quality
              and client satisfaction sets me apart. I believe in building
              long-term relationships with clients by delivering designs that
              exceed expectations and help your brand make a lasting impression.
            </p>
          </div>
          <Image
            src="/13.jpg"
            className="rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 w-full max-w-xs lg:max-w-sm"
            width={400}
            height={300}
          />
        </div>
      </div>
      <footer className="w-screen bg-slate-50 text-center py-8 px-4 sm:py-10 sm:px-6 md:py-12 md:px-8 lg:py-14 lg:px-14">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl not-italic">
          © copyrgiht{" "}
          <span className="uppercase text-blue-400">hammad hussain</span> 2024
        </p>
      </footer>
    </div>
  );
};

export default Scroller;
