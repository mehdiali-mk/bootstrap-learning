gsap.from("#helloWorld", {
  y: -200,
  scale: 0.2,
  opacity: 0,
  duration: 1.6,
  delay: 0.2,
  //   ease: "back.out(2.4)",
  ease: "elastic.out(1,0.3)",
});

gsap.from("#subTitle", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
});

gsap.from("#moreBtn", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
});

gsap.from("#downIcon", {
  opacity: 0,
  y: -30,
  scale: 0,
  rotate: 360,
  duration: 0.6,
  delay: 1,
  //   ease: "back.out(2.4)",
  ease: "elastic.out(1,0.3)",
});
