// Show body
window.onload = () => {
    document.getElementById("welcome-background").style.opacity = 1;
};


const enableMobile = true;
const animationDelay = 100;
const animationDuration = 500;

// Welcome
ScrollReveal({ mobile: enableMobile }).reveal("#welcome-image", {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.1,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#welcome-text", {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.1,
    duration: animationDuration,
    delay: animationDelay * 5
});

// Trusted By
ScrollReveal({ mobile: enableMobile }).reveal("#customers-text", {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 1.0,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#microsoft", {
    distance: "50%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 1.0,
    duration: animationDuration,
    delay: animationDelay * 2
});

ScrollReveal({ mobile: enableMobile }).reveal(
    [document.getElementById("github"), document.getElementById("unity")],
    {
        distance: "50%",
        origin: "bottom",
        opacity: 0,
        viewFactor: 1.0,
        duration: animationDuration,
        delay: animationDelay * 3
    }
);

ScrollReveal({ mobile: enableMobile }).reveal(
    [document.getElementById("apple"), document.getElementById("adobe")],
    {
        distance: "50%",
        origin: "bottom",
        opacity: 0,
        viewFactor: 1.0,
        duration: animationDuration,
        delay: animationDelay * 4
    }
);

ScrollReveal({ mobile: enableMobile }).reveal(
    [document.getElementById("netflix"), document.getElementById("ubisoft")],
    {
        distance: "50%",
        origin: "bottom",
        opacity: 0,
        viewFactor: 1.0,
        duration: animationDuration,
        delay: animationDelay * 5
    }
);

// About
ScrollReveal({ mobile: enableMobile }).reveal("#block1", {
    distance: "10%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.5,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#block2", {
    distance: "10%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.5,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#block3", {
    distance: "10%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.5,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#block4", {
    distance: "10%",
    origin: "bottom",
    opacity: 0,
    viewFactor: 0.5,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#plan1", {
    opacity: 0,
    viewFactor: 0.2,
    scale: 0.9,
    duration: animationDuration,
    delay: animationDelay
});

ScrollReveal({ mobile: enableMobile }).reveal("#plan2", {
    opacity: 0,
    viewFactor: 0.2,
    scale: 0.9,
    duration: animationDuration,
    delay: animationDelay * 2
});
