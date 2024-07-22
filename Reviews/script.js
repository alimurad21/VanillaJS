const reviews = [
    {
      name: "Ali Murad",
      role: "Web Developer",
      text:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis laudantium error hic nihil maxime? Perspiciatis, quam! Quisquam blanditiis ullam nihil odio fugit veniam necessitatibus. Mollitia sit rerum autem fugit consequatur quod nam officia debitis? Ducimus beatae placeat suscipit soluta?",
    },
    {
        name: "Sadar Saddam Hussain",
        role: "Boss",
        text:
          "Saddam Hussein , also known mononymously as Saddam, was an Iraqi politician and revolutionary who was the fifth president of Iraq from 1979 to 2003. He also served as prime minister of Iraq, first from 1979 to 1991 and later from 1994 to 2003."
      },
      {
        name: "Camrade Saddam Hussain",
        role: "Manager",
        text:"To assert Iraq's hegemony over its neighbours, Saddam led Iraq into war with Iran in the Iran-Iraq War and with Kuwait in the lead-up to the Persian Gulf War. His refusal to cooperate fully with international inspections for proscribed weapons led to the invasion of Iraq by the U.S. and allies in the Iraq War."
          },
    // Add more review objects if needed
  ];
  
  let currentReview = 0;
  
  const reviewImage = document.querySelector(".review .image img");
  const reviewName = document.querySelector(".review h3");
  const reviewRole = document.querySelector(".review p:nth-child(3)");
  const reviewText = document.querySelector(".review .info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  function showReview(index) {
    reviewImage.src = `profile.jpg`; // Replace with the actual image URL if available
    reviewName.textContent = reviews[index].name;
    reviewRole.textContent = reviews[index].role;
    reviewText.textContent = reviews[index].text;
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    showReview(currentReview);
  });
  
  prevBtn.addEventListener("click", () => {
    currentReview--;
    if (currentReview < 0) {
      currentReview = reviews.length - 1;
    }
    showReview(currentReview);
  });
  
  nextBtn.addEventListener("click", () => {
    currentReview++;
    if (currentReview === reviews.length) {
      currentReview = 0;
    }
    showReview(currentReview);
  });
  
  randomBtn.addEventListener("click", () => {
    currentReview = Math.floor(Math.random() * reviews.length);
    showReview(currentReview);
  });
  