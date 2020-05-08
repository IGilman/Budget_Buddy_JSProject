let entertainmentTotal = document.querySelector(".entertainment-sub");
let foodTotal = document.querySelector(".food-sub");
let clothingTotal = document.querySelector(".clothing-sub");
let billsTotal = document.querySelector(".bills-sub");
let entertainmentInput = document.querySelector(".entertainment-input");
let foodInput = document.querySelector(".food-input");
let clothingInput = document.querySelector(".clothing-input");
let billsInput = document.querySelector(".bills-input");

let budgetTotal = document.querySelector(".budget-form");
let budgetDisplay = document.querySelector(".budget");

let budget = 0;
let entertainmentSubTotal = 0;

budgetTotal.addEventListener("submit", (event) => {
  event.preventDefault();
  let budgetData = new FormData(budgetTotal);
  let budgetAmount = budgetData.get("budget");
  budget += Number(budgetAmount);

  budgetDisplay.innerText = `$${Number(budget).toFixed(2)}`;
  budgetTotal.reset();
});

entertainmentInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let entertainmentData = new FormData(entertainmentInput);
  let entertainmentPurchase = entertainmentData.get("item");
  let entertainmentAmount = entertainmentData.get("money-spent");

  budget -= entertainmentAmount;
  budgetDisplay.innerText = budget;
  entertainmentSubTotal += Number(entertainmentAmount);

  entertainmentTotal.innerText = `$${entertainmentSubTotal.toFixed(2)}`;

  entertainmentInput.reset();
});
