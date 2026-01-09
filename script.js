  const themebtn = document.getElementById('themeToggle');
  const balanceInput = document.getElementById('balance');
  const incomeEl = document.getElementById('income-amount');
  const expenseInput = document.getElementById('expense-amount');
  const descInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const form = document.getElementById("transaction-form");
  const transactionList = document.getElementById('transaction-list');


  let income = 0;
  let balance = 0;
  let expense = 0;

  form.addEventListener('submit',function(e){
    e.preventDefault();

    const desc = descInput.value;
    const amt = Number(amountInput.value);

    if (amt > 0){
      income += amt;
      balance += amt;
      incomeEl.innerHTML = income;
      balanceInput.innerHTML = balance;
      addTransaction(desc,amt);
    }else if(amt<0){
      expense += Math.abs(amt);
      balance += amt
      expenseInput.innerHTML = expense;
      balanceInput.innerHTML = balance;
      addTransaction(desc,amt);
    }
    descInput.value = "";
    amountInput.value = "";

  });
  


  function addTransaction(desc,amt){
    const li = document.createElement('li');
    li.classList.add('transaction');

    if (amt > 0) {
      li.classList.add('income');
      li.innerHTML =
      `<span class="text">${desc}</span>
      <span class="amount">₹${amt}</span>
      <button class="delete-btn">❌</button>`;
    } else {
      li.classList.add('expense');
      li.innerHTML =
      li.innerHTML = `
        <span class="text">${desc}</span>
        <span class="amount">₹${Math.abs(amt)}</span>
        <button class="delete-btn">❌</button>
`;

    }
    transactionList.prepend(li);

    const deletebtn = li.querySelector('.delete-btn');
    deletebtn.addEventListener('click',function(){
      removeTransaction(li,amt);
    });
  }
  function removeTransaction(li,amt){
    li.remove();
    if (amt > 0) {
      income -= amt;
      balance -= amt;
      incomeEl.innerHTML = income;
    } else {
      expense -= Math.abs(amt);
      balance -= amt; 
      expenseInput.innerHTML = expense;
    }
    balanceInput.innerHTML = balance;
  }

  // 🌙 THEME TOGGLE CODE
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});





  

