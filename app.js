let sales = JSON.parse(localStorage.getItem("sales")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let rent = localStorage.getItem("rent") || "";

function addSale() {
  const amount = document.getElementById("saleAmount").value;
  const type = document.getElementById("saleType").value;

  const sale = {
    amount,
    type,
    date: new Date().toLocaleDateString()
  };

  sales.push(sale);

  localStorage.setItem("sales", JSON.stringify(sales));

  displaySales();
}

function addExpense() {
  const name = document.getElementById("expenseName").value;
  const amount = document.getElementById("expenseAmount").value;

  const expense = {
    name,
    amount,
    date: new Date().toLocaleDateString()
  };

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
}

function saveRent() {
  const amount = document.getElementById("rentAmount").value;

  localStorage.setItem("rent", amount);

  displayRent();
}

function displaySales() {
  const salesList = document.getElementById("salesList");

  salesList.innerHTML = "";

  sales.reverse().forEach((sale) => {
    const li = document.createElement("li");

    li.innerHTML =
      `${sale.type} Sale - ${sale.amount} SAR <br> ${sale.date}`;

    salesList.appendChild(li);
  });
}

function displayExpenses() {
  const expenseList = document.getElementById("expenseList");

  expenseList.innerHTML = "";

  expenses.reverse().forEach((expense) => {
    const li = document.createElement("li");

    li.innerHTML =
      `${expense.name} - ${expense.amount} SAR <br> ${expense.date}`;

    expenseList.appendChild(li);
  });
}

function displayRent() {
  const rentDisplay = document.getElementById("rentDisplay");

  const rent = localStorage.getItem("rent");

  rentDisplay.innerHTML = `Yearly Rent: ${rent} SAR`;
}

displaySales();
displayExpenses();
displayRent();