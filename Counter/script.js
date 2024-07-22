const countElement = document.getElementById("count");
const btnIncrement = document.getElementById("btnIncrement");
const btnDecrement = document.getElementById("btnDecrement");
const btnReset = document.getElementById("btnReset");

let countValue = 0;

function updateCount() {
  countElement.textContent = countValue;
  if(countValue > 0){
    countElement.style.backgroundColor = '#3ea832';
  }
  else if(countValue = 0){
    countElement.style.backgroundColor = '#080808';
  }
  else{
    countElement.style.backgroundColor = '#bf0f18';
  }
}

// Event listener for the increment button
btnIncrement.addEventListener("click", () => {
  countValue++;
  updateCount();
});

// Event listener for the decrement button
btnDecrement.addEventListener("click", () => {
  countValue--;
  updateCount();
});

// Event listener for the reset button
btnReset.addEventListener("click", () => {
  countValue = 0;
  updateCount();
});

// Initial count update
updateCount();
