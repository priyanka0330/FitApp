// Smooth scroll on nav click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    anime({
      targets: "html, body",
      scrollTop: target.offsetTop - 60,
      duration: 800,
      easing: "easeInOutQuad",
    });
  });
});

// Helper: animate elements on scroll
function animateOnScroll(selector, props) {
  const els = document.querySelectorAll(selector);
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          anime(
            Object.assign({ targets: entry.target, delay: i * 150 }, props)
          );
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  els.forEach((el) => obs.observe(el));
}

// Initial header/nav/hero
anime({
  targets: ".logo",
  translateY: [-30, 0],
  opacity: [0, 1],
  duration: 1200,
  easing: "easeOutElastic(1,.8)",
});
anime({
  targets: ".nav-links a",
  translateY: [-20, 0],
  opacity: [0, 1],
  delay: anime.stagger(100, { start: 500 }),
  duration: 800,
  easing: "easeOutQuad",
});
anime({
  targets: [".title", ".subtitle", ".btn"],
  opacity: [0, 1],
  translateY: [20, 0],
  delay: anime.stagger(200, { start: 900 }),
  duration: 900,
  easing: "easeOutExpo",
});

// Animate sections
animateOnScroll(".features .feature", {
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 800,
  easing: "easeOutCubic",
});
animateOnScroll(".about h2, .about p", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".app-features .feature-card", {
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 700,
  easing: "easeOutBack",
});
animateOnScroll(".how-it-works h2", {
  opacity: [0, 1],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".how-it-works .step", {
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 800,
  easing: "easeOutCubic",
});
animateOnScroll(".download h2", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".store-btn", {
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 700,
  easing: "easeOutBack",
});
animateOnScroll(".pricing h2", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".plan-card", {
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 800,
  easing: "easeOutCubic",
});
animateOnScroll(".testimonial h2", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".testimonial-card", {
  opacity: [0, 1],
  scale: [0.8, 1],
  duration: 700,
  easing: "easeOutBack",
});
animateOnScroll(".contact h2", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  easing: "easeOutExpo",
});
animateOnScroll(".contact-form", {
  opacity: [0, 1],
  translateY: [30, 0],
  duration: 800,
  easing: "easeOutCubic",
});
animateOnScroll(".footer-links a", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 800,
  delay: anime.stagger(100),
  easing: "easeOutQuad",
});
animateOnScroll(".footer", {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 1000,
  easing: "easeOutExpo",
});

// Elements
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");
const navMenu = document.getElementById("nav-menu");

function openMenu() {
  hamburger.classList.add("active");
  navMenu.classList.add("open");
  closeBtn.style.opacity = "1";
  // animate links in
  anime({
    targets: "#nav-menu li",
    translateX: [100, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 400,
    easing: "easeOutBack",
  });
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("open");
  closeBtn.style.opacity = "0";
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
// clicking a link also closes menu
navMenu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));

// Hover animations via Anime.js events
const hoverItems = document.querySelectorAll(
  ".feature, .feature-card, .plan-card, .testimonial-card"
);
hoverItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    anime({
      targets: item,
      scale: 1.05,
      duration: 400,
      easing: "easeOutCubic",
    });
  });
  item.addEventListener("mouseleave", () => {
    anime({
      targets: item,
      scale: 1,
      duration: 400,
      easing: "easeOutCubic",
    });
  });
});

// Header gradient color shift on scroll direction
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const current = window.pageYOffset;
  const root = document.documentElement;
  if (current > lastScroll) {
    // scrolling down: warm gradient
    anime({
      targets: root,
      duration: 1000,
      easing: "linear",
      update: () => {
        root.style.setProperty(
          "--gradient",
          "linear-gradient(120deg,#047a95,#0e2627)"
        );
      },
    });
  } else {
    // scrolling up: cool gradient
    anime({
      targets: root,
      duration: 1000,
      easing: "linear",
      update: () => {
        root.style.setProperty(
          "--gradient",
          "linear-gradient(120deg,#0e2627,#047a95)"
        );
      },
    });
  }
  lastScroll = current;
});
