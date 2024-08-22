// const accordion = document.getElementsByClassName("accordion-container");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

function toggleAccordion(header) {
  const accordionItem = header.parentElement;
  const content = accordionItem.querySelector(".order-accordion-content");

  // Toggle the 'active' class on the clicked accordion
  if (accordionItem.classList.contains("active")) {
    // Close the content if it's already open
    accordionItem.classList.remove("active");
    content.style.maxHeight = null;
  } else {
    // Open the content
    accordionItem.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// Selecting your prefrenece
// Coffee how
let selectedCard = null;

function selectCard(cardId, message) {
  // Deselect the previously selected card, if any
  if (selectedCard) {
    document.getElementById(selectedCard).classList.remove("selected");
  }

  // Mark the new card as selected
  const card = document.getElementById(cardId);
  card.classList.add("selected");
  selectedCard = cardId;

  // Update the output message
  document.getElementById("coffee-how").textContent = message;
}

// Coffee type
let selectedCard2 = null;

function selectCard2(cardId, message) {
  // Deselect the previously selected card, if any
  if (selectedCard2) {
    document.getElementById(selectedCard2).classList.remove("selected");
  }

  // Mark the new card as selected
  const card = document.getElementById(cardId);
  card.classList.add("selected");
  selectedCard2 = cardId;

  // Update the output message
  document.getElementById("coffee-type").textContent = message;
}

// Coffee quantity
let selectedCard3 = null;

function selectCard3(cardId, message) {
  // Deselect the previously selected card, if any
  if (selectedCard3) {
    document.getElementById(selectedCard3).classList.remove("selected");
  }

  // Mark the new card as selected
  const card = document.getElementById(cardId);
  card.classList.add("selected");
  selectedCard3 = cardId;

  // Update the output message
  document.getElementById("coffee-quantity").textContent = message;
}

// Coffee delivery
let selectedCard4 = null;

function selectCard4(cardId, message) {
  // Deselect the previously selected card, if any
  if (selectedCard4) {
    document.getElementById(selectedCard4).classList.remove("selected");
  }

  // Mark the new card as selected
  const card = document.getElementById(cardId);
  card.classList.add("selected");
  selectedCard4 = cardId;

  // Update the output message
  document.getElementById("coffee-delivery").textContent = message;
}
