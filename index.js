// 1. Selecteer de hamburgerknop (menu openen)
const hamburger = document.querySelector(".hamburger");

// 2. Selecteer de sluitknop (menu sluiten)
const closeButton = document.querySelector(".menu-close");

// 3. Selecteer het navigatiemenu
const nav = document.querySelector("#navList");

// 4. Klik op hamburger om het menu te openen
hamburger.addEventListener("click", () => {
  // Hamburger menu is zichtbaar
  nav.classList.add("open");  
  // hamburger menu wordt verborgen        
  hamburger.classList.add("hidden");   
  // X wordt getoond want hidden wordt verwijderd 
  closeButton.classList.remove("hidden");
});

// 5. Klik op X om het menu te sluiten
closeButton.addEventListener("click", () => {
  // sluit het menu en verwijderd de class open
  nav.classList.remove("open");  
  // Verbergt de close button      
  closeButton.classList.add("hidden");
  // hamburger menu wordt getoond
  hamburger.classList.remove("hidden"); // hamburger tonen
});