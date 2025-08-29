document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("getting called");
  document.querySelector(".nav-links").classList.toggle("expanded");
});
