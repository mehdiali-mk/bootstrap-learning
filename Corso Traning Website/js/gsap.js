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
