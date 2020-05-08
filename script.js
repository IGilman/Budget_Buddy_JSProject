let entertainmentInput = document.querySelector(".form");
let entertainmentTotal = document.querySelector(".total");
let budgetTotal = document.querySelector(".budget-form");
let budgetDisplay = document.querySelector(".budget");
//const entertainmentObject = [];
let budget = 0;
let entertainmentSubTotal = 0;

budgetTotal.addEventListener("submit", (event) => {
  event.preventDefault();
  let budgetData = new FormData(budgetTotal);
  budget = budgetData.get("budget");
  console.log(budget);
  budgetDisplay.innerText = `$${budget}`;
});

entertainmentInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let entertainmentData = new FormData(entertainmentInput);
  let entertainmentPurchase = entertainmentData.get("item");
  let entertainmentAmount = entertainmentData.get("money-spent");
  // let counter = 0;
  // counter += entertainmentAmount;
  budget -= entertainmentAmount;
  budgetDisplay.innerText = budget;
  entertainmentSubTotal += Number(entertainmentAmount);

  // entertainmentObject.push({
  //   purchase: entertainmentPurchase,
  //   amount: Number(entertainmentAmount),
  // });

  // entertainmentObject.forEach((object) => {
  //   counter += object.amount
  // });

  entertainmentTotal.innerText = `$${entertainmentSubTotal}.00`;
  console.log(entertainmentObject);
  entertainmentInput.reset();
});

