


function slideCardsOnScroll() {
  const cards = document.querySelectorAll(".project-card");
  const windowHeight = window.innerHeight;

  let delay = 0;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      setTimeout(() => {
        card.classList.add("active");
      }, delay * 500);
      delay++;
    }
  });
}
window.addEventListener("scroll",slideCardsOnScroll);