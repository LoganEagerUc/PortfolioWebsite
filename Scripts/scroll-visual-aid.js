// SCROLL VISUAL AID FUNCTION, (downwards arrow icon behaviour)

// references
const footer = document.querySelector("footer");

// local vars
let iconVisible = true; // flag as to wether it *should* be visible
let inactivityTimer = null;

document.addEventListener("scroll", handleScroll, { passive: true });

// initial state
if (footer) {
  footer.classList.add("fade-in");
}

// triggers every scroll event
function handleScroll() {
  iconVisible = false;
  handleIconAnimation();

  // resets timer
  if (inactivityTimer) clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    iconVisible = true;
    handleIconAnimation();
  }, 10000); // 60,000ms == 1 min
}

// depending on flag, switches animation in 'buffer'
function handleIconAnimation() {
  if (!footer) return;

  if (iconVisible) {
    footer.classList.remove("fade-out");
    footer.classList.add("fade-in");
  } else {
    footer.classList.remove("fade-in");
    footer.classList.add("fade-out");
  }
}
