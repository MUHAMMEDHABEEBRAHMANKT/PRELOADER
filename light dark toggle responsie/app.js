const container = document.querySelector(".container");
const wrapper = document.getElementById("wrapper");
const sun = document.getElementById("sun");
const nav = document.querySelector(".nav");
const line = document.querySelector(".line");
////////
const logo = document.querySelector(".logo");
const header = document.querySelector(".header");
const home = document.querySelector("#home");
const services = document.querySelector("#services");
const contact = document.querySelector("#contact");
const span = document.querySelector("span");
// .............loding function.......
window.addEventListener("load",()=> {
  let header = document.querySelector(".header");
  wrapper.style.display = "none";
  container.style.overflowy = "hidden";
  header.style.display = "none";
  setTimeout(() => {
    container.style.display = "none";
    wrapper.style.display = "block";
    header.style.display = "flex";
  },2000);
});
// ............................................................

  line.onclick = function () {
    nav.classList.toggle("list");
    line.classList.toggle("list");
  };
function enableDarkMode() {

  container.classList.add("light");
  wrapper.classList.add("light");
  logo.classList.add("light");
  header.classList.add("light");
  nav.classList.add("light");
  home.classList.add("light");
  services.classList.add("light");
  contact.classList.add("light");
  span.classList.add("light");
  sun.innerHTML = "dark";
}

// Function to remove dark mode styles
function disableDarkMode() {


  container.classList.add("light");
  wrapper.classList.remove("light");
  logo.classList.remove("light");
  header.classList.remove("light");
  nav.classList.remove("light");
  home.classList.remove("light");
  span.classList.remove("light"); 
  services.classList.remove("light");
  contact.classList.remove("light");
  sun.innerHTML = "light";
}

// Check if dark mode preference is already set
const isDarkMode = localStorage.getItem("lightMode");

// If dark mode preference exists, apply it
if (isDarkMode === "true") {
  enableDarkMode();
}

// Toggle dark mode on sun click
sun.onclick = function () {
  // Check if dark mode is currently enabled
  const isCurrentlyLightmode = wrapper.classList.contains("light");

  // Toggle dark mode based on current state
  if (isCurrentlyLightmode) {
    disableDarkMode();
    // Save preference in localStorage
    localStorage.setItem("lightMode", "false");
  } else {
    enableDarkMode();
    // Save preference in localStorage
    localStorage.setItem("lightMode", "true");
  }
};

