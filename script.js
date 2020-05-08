let entertainmentInput = document.querySelector(".form");
let entertainmentTotal = document.querySelector(".total");
entertainmentInput.addEventListener("submit", (event) => {
  event.preventDefault();
  let entertainmentData = new FormData(entertainmentInput);
  let entertainmentPurchase = entertainmentData.get("item");
  let entertainmentAmount = entertainmentData.get("money-spent");
  entertainmentTotal.innerText = `$${entertainmentAmount}.00`;
  entertainmentInput.reset();
});
