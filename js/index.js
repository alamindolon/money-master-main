
function inputElementValue(inputID)
{
    const incomeFiled = document.getElementById(inputID);
    const incomeText = incomeFiled.value;
    const incomeNumber = parseFloat(incomeText);
    return incomeNumber;
}
function setAmountValue(elementID, value)
{
    const amountID = document.getElementById(elementID);
    amountID.innerText = value;
}



document.getElementById('calculator_ID').addEventListener('click', function()
{
    const incomeAmount = inputElementValue("income_id");
    const foodPrice = inputElementValue('food_id');
    const rentPrice = inputElementValue('rent_id')
    const clothsPrice = inputElementValue('cloth_id');
    const expenses = foodPrice + rentPrice + clothsPrice;
    const balance = incomeAmount - expenses;
    if(incomeAmount < expenses)
    {
        alert('your case have no money')
    }

    const totalExpenses = setAmountValue('total_expenses',expenses);
    const totalBalance = setAmountValue('balance-id',balance);

})

document.getElementById('save_ID').addEventListener('click',function()
{
    const saveInputValue = inputElementValue('save_input_filed');
    const incomeAmount = inputElementValue("income_id");
    const savingAmount = incomeAmount *.20;
   
    const savingAmountID = setAmountValue('saving_id',savingAmount);

    const totalBalanceFiled = document.getElementById('balance-id');
    const totalBalanceFiledString = totalBalanceFiled.innerText;
    const totalBalanceFiledAmount = parseFloat(totalBalanceFiledString);

    const balance = totalBalanceFiledAmount - savingAmount;
    const remaingBalance = document.getElementById('remaing_balance');
    remaingBalance.innerText = balance;



    
})