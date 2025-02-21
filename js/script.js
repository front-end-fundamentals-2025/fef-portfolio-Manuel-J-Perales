// Select the logo element
const logo = document.getElementById("logo");

// Add event listener for mouseover and mouseout
logo.addEventListener("mouseover", () => {
  logo.style.color = "blue"; // Change color on hover
});

logo.addEventListener("mouseout", () => {
  logo.style.color = "black"; // Revert color when mouse leaves
});
