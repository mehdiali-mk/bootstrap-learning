gsap.from("#navLogo", {
  opacity: 0,
  y: -40,
  duration: 0.8,
  delay: 0.2,
});

gsap.from(".nav-item", {
  opacity: 0,
  y: -40,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.1,
});

gsap.from(".heading-text", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  delay: 0.4,
  stagger: 0.2,
});

gsap.from(".paragraph-text", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  delay: 1,
  stagger: 0.2,
});

gsap.from("#registerHeader", {
  opacity: 0,
  x: 150,
  scale: 0.2,
  duration: 0.8,
  delay: 1.6,
});

gsap.from("#discoverHeader", {
  opacity: 0,
  x: -150,
  scale: 0.2,
  duration: 0.8,
  delay: 1.6,
});

gsap.from("#slider", {
  opacity: 0,
  scale: 0.2,
  y: 100,
  duration: 0.8,
  delay: 1.6,
});

gsap.from("#registerLeft", {
  opacity: 0,
  x: -150,
  duration: 0.8,
  delay: 0.1,
  scrollTrigger: {
    trigger: "#registerLeft",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from("#registerRight", {
  opacity: 0,
  x: 150,
  duration: 0.8,
  delay: 0.1,
  scrollTrigger: {
    trigger: "#registerRight",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from("#registerBtn", {
  opacity: 0,
  width: "0%",
  y: 50,
  scale: 0.2,
  duration: 0.8,
  delay: 0.3,
  scrollTrigger: {
    trigger: "#registerBtn",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
  },
});

gsap.from("#discoverLeft", {
  opacity: 0,
  x: -150,
  duration: 0.8,
  delay: 0.1,
  scrollTrigger: {
    trigger: "#discoverLeft",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
  },
});
gsap.from("#discoverRight", {
  opacity: 0,
  x: 150,
  duration: 0.8,
  delay: 0.1,
  scrollTrigger: {
    trigger: "#discoverRight",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
  },
});

gsap.from("#myIcon", {
  rotate: 360,
  delay: 0.5,
  scale: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: "#myIcon",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
  },
});

gsap.from("#pointsHeading", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#pointsHeading",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from("#summaryHeading", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  delay: 0.2,
  scrollTrigger: {
    trigger: "#summaryHeading",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from(".points-block", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".points-block",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from(".course-block", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".course-block",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
  },
});
