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

let receiptList = document.querySelector(".list-item");
let receiptButton = document.querySelector(".receipt");
let showReceipt = document.querySelector(".list-container");
let closeReceipt = document.querySelector(".close");

let budget = 0;

let entertainmentSubTotal = 0;
let foodSubTotal = 0;
let clothingSubTotal = 0;
let billsSubTotal = 0;

// entertainmentInput.disabled = true;

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
  if (budget - entertainmentAmount < 0) {
    window.alert("Not Enough Funds");
    entertainmentInput.reset();
  } else {
    budget -= entertainmentAmount;
    budgetDisplay.innerText = `$${budget.toFixed(2)}`;
    entertainmentSubTotal += Number(entertainmentAmount);
    entertainmentTotal.innerText = `$${entertainmentSubTotal.toFixed(2)}`;
    let receiptItem = document.createElement("li");
    receiptItem.innerText = `${entertainmentPurchase}: $${entertainmentAmount} (Entertainment)`;
    receiptList.append(receiptItem);
    entertainmentInput.reset();
  }
});

foodInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let foodData = new FormData(foodInput);
  let foodPurchase = foodData.get("item");
  let foodAmount = foodData.get("money-spent");
  if (budget - foodAmount < 0) {
    window.alert("Not Enough Funds");
    foodInput.reset();
  } else {
    budget -= foodAmount;
    budgetDisplay.innerText = `$${budget.toFixed(2)}`;
    foodSubTotal += Number(foodAmount);
    foodTotal.innerText = `$${foodSubTotal.toFixed(2)}`;
    let receiptItem = document.createElement("li");
    receiptItem.innerText = `${foodPurchase}: $${foodAmount} (Food)`;
    receiptList.append(receiptItem);
    foodInput.reset();
  }
});

clothingInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let clothingData = new FormData(clothingInput);
  let clothingPurchase = clothingData.get("item");
  let clothingAmount = clothingData.get("money-spent");
  if (budget - clothingAmount < 0) {
    window.alert("Not Enough Funds");
    clothingInput.reset();
  } else {
    budget -= clothingAmount;
    budgetDisplay.innerText = `$${budget.toFixed(2)}`;
    clothingSubTotal += Number(clothingAmount);
    clothingTotal.innerText = `$${clothingSubTotal.toFixed(2)}`;
    let receiptItem = document.createElement("li");
    receiptItem.innerText = `${clothingPurchase}: $${clothingAmount} (Clothing)`;
    receiptList.append(receiptItem);
    clothingInput.reset();
  }
});

billsInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let billsData = new FormData(billsInput);
  let billsPurchase = billsData.get("item");
  let billsAmount = billsData.get("money-spent");
  if (budget - billsAmount < 0) {
    window.alert("Not Enough Funds");
    billsInput.reset();
  } else {
    budget -= billsAmount;
    budgetDisplay.innerText = `$${budget.toFixed(2)}`;
    billsSubTotal += Number(billsAmount);
    billsTotal.innerText = `$${billsSubTotal.toFixed(2)}`;
    let receiptItem = document.createElement("li");
    receiptItem.innerText = `${billsPurchase}: $${billsAmount} (Bills)`;
    receiptList.append(receiptItem);
    billsInput.reset();
  }
});

// let receiptList = document.querySelector(".list-item");
// let receiptButton = document.querySelector(".receipt");
// let showReceipt = document.querySelector(".list-container");
// let closeReceipt = document.querySelector(".close");

receiptButton.addEventListener("click", () => {
  showReceipt.style.display = "flex";
});

closeReceipt.addEventListener("click", () => {
  showReceipt.style.display = "none";
  console.log("click");
});
