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

gsap.from("#pageHeading", {
  opacity: 0,
  y: 80,
  duration: 0.8,
});
