  // 1. Zoek de hamburgerknop op de pagina (die opent/sluit het menu)
  const hamburger = document.querySelector(".hamburger");

  // 2. Zoek de navigatielijst die wordt getoond 
  const nav = document.querySelector("#navList");

  // 3. Click op het Hamburger menu 
  hamburger.addEventListener("click", () => {

    // 4. Voegt of verwijderd de class open Wanneer open aanwezig is het menu zichtbaar zo niet is het hidden.
    nav.classList.toggle("open");

  });
