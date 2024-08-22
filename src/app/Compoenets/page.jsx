"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Gsap from "./Gsap/page";
const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
    setTimeout(() => setLoading(false), 3300);
  }, []);
  return (
    <div>
      <Gsap />
    </div>
  );
};

export default Page;











// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { TweenMax, Power3,gsap } from "gsap";

// const Page = () => {
//   let l = useRef(null);
//   let l1 = useRef(null);
//   let l2 = useRef(null);
//   let l3 = useRef(null);

//   useEffect(() => {
// //     TweenMax.to(
// //       l.current,
// //       0.8, // Duration should have a period, and a comma should separate it from the options object
// //       {
// //         opacity: 1,
// //         y: -20,
// //         ease: Power3.easeOut, // Should be Power3.easeOut
// //       }
// //     );
// //     // TweenMax.to(
// //     //   l1.current,
// //     //   0.8, // Duration should have a period, and a comma should separate it from the options object
// //     //   {
// //     //     opacity: 1,
// //     //     x: -20,
// //     //     ease: Power3.easeOut,
// //     //     delay:.1// Should be Power3.easeOut
// //     //   }
// //     // );
// //     // TweenMax.to(
// //     //   l2.current,
// //     //   0.8, // Duration should have a period, and a comma should separate it from the options object
// //     //   {
// //     //     opacity: 1,
// //     //     x: -20,
// //     //     ease: Power3.easeOut,
// //     //     delay:.2// Should be Power3.easeOut
// //     //     // Should be Power3.easeOut
// //     //   }
// //     // );
// //     // TweenMax.to(
// //     //   l3.current,
// //     //   0.8, // Duration should have a period, and a comma should separate it from the options object
// //     //   {
// //     //     opacity: 1,
// //     //     x: -20,
// //     //     ease: Power3.easeOut,
// //     //     delay:.3// Should be Power3.easeOut
// //     //     // Should be Power3.easeOut
// //     //   }
// //     // );
// //     TweenMax.staggerTo(
// //       [l1.current,l2.current,l3.current],
// //       0.8, // Duration should have a period, and a comma should separate it from the options object
// //       {
// //         opacity: 1,
// //         x: -20,
// //         ease: Power3.easeOut,
// //         // Should be Power3.easeOut
// //         // Should be Power3.easeOut
// //       },.2
// //   )
//   gsap.to(l.current, {
//     yPercent: -100,
//     ease: "none",
//     scrollTrigger: {
//       trigger: l2.current,
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     },
//   });

//   gsap.to(l1.current, {
//     yPercent: 50,
//     ease: "none",
//     scrollTrigger: {
//       trigger: l2.current,
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     },
//   });

//   }, []);

//   return (
//     // <div className="flex min-h-screen flex-col items-center justify-between p-24">
//     //   <Image
//     //     ref={l}
//     //     src="/vercel.svg"
//     //     alt="Vercel Logo"
//     //     className="dark:invert cd" // I assume "cd" is a class name
//     //     width={100}
//     //     height={24}
//     //     priority
//     //   />
//     //   <div className=" space-y-3">
//     //     <div className=" w-10 h-10 rounded-full  cd bg-red-500" ref={l1}>
//     //     </div>
//     //     <div ref={l2} className="rounded-full w-10 h-10 cd bg-yellow-500">
//     //     </div>
//     //     <div ref={l3} className="rounded-full w-10 h-10 cd bg-green-500">
//     //     </div>
//     //   </div>
//     // </div>
// <>
// <div data-aos="fade-up"
//     //  data-aos-duration="3000"
//      >
// <section class="pSection"   ref={l2}  >
//   <div class="container">
//     <div class="pContent"   ref={l}>
//       <p>This is a super simple example of how to create a basic parallax effect using GSAP's ScrollTrigger!</p>
//       <p>For more information about ScrollTrigger, check out <a href="https://greensock.com" target="_blank">the GreenSock website.</a></p>
//     </div>
//   </div>

//   <img class="pImage"   ref={l1} src="https://picsum.photos/1200/526?random=1" alt="Filler image"/>
// </section>
// </div>
// </>

// );
// };

// export default Page;

// // "use client";
// // import React, { useEffect, useRef } from "react";
// // import Image from "next/image";
// // import { TweenMax, Power3 } from "gsap"; // Import TweenMax from "gsap" instead of "gsap/gsap-core"

// // const page = () => {
// //   let l = useRef(null);
// //   console.log(l);
// //   useEffect(() => {
// //     console.log(l);
// //     TweenMax.to(
// //         l,.8,{
// //             opacity:1,
// //             y:-20,
// //             ease:Power3.easeOut
// //         }
// //     )
// //   }, []);
// //   return (
// //     <div className="flex min-h-screen flex-col items-center justify-between p-24">
// //       <Image ref={l}
// //         src="/vercel.svg"
// //         alt="Vercel Logo"
// //         className="dark:invert cd"
// //         width={100}
// //         height={24}
// //         priority
// //       />
// //     </div>
// //   );
// // };

// // export default page;
