



document.getElementById('deposit-button').addEventListener('click', function () {
    //get ammount form input
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmmout = parseFloat(depositText);


    const depositTotal = document.getElementById('deposit-total');
    //depositTotal.innerText = depositText;

    const priviousDepositText = depositTotal.innerText;
    const priviousDepositAmmount = parseFloat(priviousDepositText);
    const newDepositTotal = priviousDepositAmmount + depositAmmout;
    depositTotal.innerText = newDepositTotal;

    //update balance
    const balaceTotal = document.getElementById('balace-total');
    const balaceTotalText = balaceTotal.innerText;
    const balaceAmmout = parseFloat(balaceTotalText);
    const newBalanceTotal = balaceAmmout + depositAmmout;
    balaceTotal.innerText = newBalanceTotal;

    //clear the input
    depositInput.value = '';
})

//withdraw
document.getElementById('withdra-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmmountInput = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawAmmountTotal = parseFloat(withdrawTotalText);
    const newWithdrawTotal = withdrawAmmountTotal + withdrawAmmountInput;

    //sett in total withdraw dashbord
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balaceTotal = document.getElementById('balace-total');
    const balaceTotalText = balaceTotal.innerText;
    const balaceAmmout = parseFloat(balaceTotalText);
    const newBalanceTotal = balaceAmmout - withdrawAmmountInput;
    balaceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

})