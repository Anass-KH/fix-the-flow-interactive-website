// 1. Wacht tot het hele document geladen is zodat alle HTML beschikbaar is
document.addEventListener("DOMContentLoaded", () => {

  // 2. Zoek de hamburgerknop op de pagina (die opent/sluit het menu)
  const hamburger = document.querySelector(".hamburger");

  // 3. Zoek de navigatielijst die wordt getoond 
  const nav = document.querySelector("#navList");

  // 4. Click op het Hamburger menu 
  hamburger.addEventListener("click", () => {

    // 5. Voegt of verwijderd de class open Wanneer open aanwezig is het menu zichtbaar zo niet is het hidden.
    nav.classList.toggle("open");

    // 6. Voeg of verwijder de class "active" op de hamburgr
    hamburger.classList.toggle("active");
  });
});
