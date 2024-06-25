navTimeLine = gsap.timeline();

navTimeLine.from(".navbar-logo", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  delay: 0.25,
});
gsap.from(".nav-item", {
  opacity: 0,
  y: -20,
  duration: 0.8,
});

gsap.from("#heroLeftSide", {
  opacity: 0,
  x: -200,
  duration: 1.2,
  delay: 0.2,
});

gsap.from("#heroRightSide", {
  opacity: 0,
  x: 200,
  duration: 1.2,
  delay: 0.2,
});

let iconTimeLine = gsap.timeline();

gsap.from("#icon1", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#icon1",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#icon2", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#icon1",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
  delay: 0.2,
});

gsap.from("#icon3", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#icon1",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
  delay: 0.4,
});

gsap.from("#detailsLeftSide", {
  opacity: 0,
  x: -200,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#detailsLeftSide",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});
gsap.from("#detailsRightSide", {
  opacity: 0,
  x: 200,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#detailsRightSide",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#masterArt", {
  opacity: 0,
  y: 100,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#masterArt",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#blogHeading", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#blogHeading",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

let blogCardTimeLine = gsap.timeline();

gsap.from("#blogCard1", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#blogCard1",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#blogCard2", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#blogCard2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#blogCard3", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#blogCard3",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#detailsLeftSide2", {
  opacity: 0,
  x: -200,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#detailsLeftSide2",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});
gsap.from("#detailsRightSide2", {
  opacity: 0,
  x: 200,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#detailsRightSide2",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#popularHeading", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#popularHeading",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#popularBlogCard1", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#popularBlogCard1",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#popularBlogCard2", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#popularBlogCard2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#popularBlogCard3", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#popularBlogCard3",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#popularBlogCard4", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#popularBlogCard4",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#popularBlogCard5", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#popularBlogCard5",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#popularBlogCard6", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#popularBlogCard6",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#testimonialHeading", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#testimonialHeading",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#testimonialCard1", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#testimonialCard1",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#testimonialCard2", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#testimonialCard2",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#testimonialCard3", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#testimonialCard3",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#downloadImage", {
  opacity: 0,
  y: 150,
  duration: 0.8,
  scrollTrigger: {
    trigger: "#downloadImage",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#feedBack", {
  opacity: 0,
  x: 200,
  duration: 1.2,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#feedBack",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#socialText", {
  opacity: 0,
  y: 80,
  duration: 1.2,
  delay: 0.2,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#socialText",
    scroller: "body",
    start: "top 70%",
    end: "top 20%",
  },
});

gsap.from("#socialIcons", {
  opacity: 0,
  y: 80,
  duration: 1,
  scale: 0,
  scrollTrigger: {
    trigger: "#socialIcons",
    scroller: "body",
    start: "top 80%",
    end: "top 20%",
  },
});

/*
// gsap.from("#heroImage", {
//   opacity: 0,
//   y: 80,
//   duration: 1.5,
//   delay: 0.25,
// });

// heroTimeLine = gsap.timeline();

// heroTimeLine.from("#heroHeading", {
//   opacity: 0,
//   y: 80,
//   duration: 0.5,
//   delay: 0.25,
// });
// heroTimeLine.from("#heroText", {
//   opacity: 0,
//   y: 80,
//   duration: 0.75,
// });
// heroTimeLine.from("#heroForm", {
//   opacity: 0,
//   y: 80,
//   duration: 1,
// });
*/
