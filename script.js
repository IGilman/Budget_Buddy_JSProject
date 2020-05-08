let entertainmentInput = document.querySelector(".form");
let entertainmentTotal = document.querySelector(".total");

const entertainmentObject = [];
entertainmentInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let entertainmentData = new FormData(entertainmentInput);
  let entertainmentPurchase = entertainmentData.get("item");
  let entertainmentAmount = entertainmentData.get("money-spent");
  entertainmentObject.push({
    purchase: entertainmentPurchase,
    amount: Number(entertainmentAmount),
  });
  let counter = 0;
  entertainmentObject.forEach((object) =>{
    counter += object.amount 
  });
  entertainmentTotal.innerText = `$${counter}.00`;
  console.log(entertainmentObject);
  entertainmentInput.reset();
});

let budgetTotal = document.querySelector(".budget-form");
let budgetDisplay = document.querySelector(".budget");
budgetTotal.addEventListener("submit", (event) => {
  event.preventDefault();
  let budgetData = new FormData(budgetTotal);
  let budgetAmount = budgetData.get("budget");
  console.log(budgetAmount);
  budgetDisplay.innerText = `$${budgetAmount}`;
})