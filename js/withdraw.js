/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function

 */
// step-1
document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawAmount = getElementValueById("withdraw-total");
  const newWithdrawTotalAMount = newWithdrawAmount + previousWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotalAMount);
 
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
