document.getElementById("btn-deposit").addEventListener("click", function () {
  /*
 1. get the element by id
 2. get the value from the element
 3. convert string value to a number
 */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  // get previous deposit total by id
  const previousDepositAmount = getElementValueById("deposit-total");
  // calculate new deposit total
  const newDepositTotal = previousDepositAmount + newDepositAmount;
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
 