let Totbudget = document.getElementById('totalbudget');
let Toexpense = document.getElementById('expenses');
let isEditing = false; 
let editingItem = null; 

const addExpenseButton = document.getElementById("addExpenseButton");

function showBudget() {
  const budgetValue = Number(Totbudget.value);
  const currentBalance = Number(document.getElementById("showbalance").innerHTML) || 0;
  const totalExpenses = Number(document.getElementById("showexpense").innerHTML) || 0;
  
  if (!isNaN(budgetValue) && budgetValue > 0) {
    const newBudget = budgetValue + (Number(localStorage.getItem('budget')) || 0);
    localStorage.setItem('budget', newBudget);
    document.getElementById("showbudget").innerHTML = newBudget;
    Totbudget.value = ''; 
    
    updateBalance(totalExpenses);
  } else {
    Totbudget.value = '';
    Totbudget.setAttribute("placeholder", 'Please Enter Valid Budget');
  }
}


function showExpense() {
  const expenseValue = Number(Toexpense.value);
  const budgetValue = Number(localStorage.getItem('budget')) || 0;
  const totalExpenses = Number(document.getElementById("showexpense").innerHTML) || 0;

  if (isEditing && editingItem) {
    const oldExpenseValue = Number(editingItem.getAttribute("data-value"));
    if (totalExpenses - oldExpenseValue + expenseValue > budgetValue) {
      alert('Cannot update expense. Over budget!');
      Toexpense.value = '';
      return;
    }
  } else {
    if (totalExpenses + expenseValue > budgetValue) {
      alert('Cannot add expense. Over budget!');
      Toexpense.value = '';
      return;
    }
  }

  if (!isNaN(expenseValue) && expenseValue > 0) {
    if (isEditing && editingItem) {
      updateExpenseItem(expenseValue);
    } else {
      addExpense(expenseValue);
    }
    Toexpense.value = '';
  } else {
    Toexpense.value = '';
    Toexpense.setAttribute("placeholder", 'Please Enter Valid Expense');
  }
}



function addExpense(expenseValue) {
  const inputValue = document.getElementById("expensename").value;
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("LI");
  li.textContent = `${inputValue}: ${expenseValue}`;
  li.setAttribute("data-value", expenseValue);
  li.setAttribute("data-name", inputValue);

  const editButton = createButton("edit", "edit.png", () => editExpense(li));
  const closeButton = createButton("close", "close.png", () => removeExpense(li));

  li.appendChild(editButton);
  li.appendChild(closeButton);
  document.getElementById("UL").appendChild(li);
  
  document.getElementById("expensename").value = "";
  updateExpenses(); 
  updateBalance(); 
  saveExpenses(); 
}

function createButton(type, imgSrc, clickHandler) {
  const button = document.createElement("BUTTON");
  const img = document.createElement('img');
  img.src = imgSrc;
  button.appendChild(img);
  button.className = type;
  img.className = `jsimg${type}`;
  button.onclick = clickHandler;
  return button;
}

function removeExpense(li) {
  li.remove();
  updateExpenses();
  saveExpenses();
  updateBalance(); 
}


function editExpense(li) {
  const expenseValue = Number(li.getAttribute("data-value"));
  const inputValue = li.getAttribute("data-name");

  document.getElementById("expensename").value = inputValue;
  Toexpense.value = expenseValue;

  document.getElementById('add').innerText = "Update Item"; 
  isEditing = true;
  editingItem = li; 
}

function updateExpenseItem(expenseValue) {
  const inputValue = document.getElementById("expensename").value;
  editingItem.setAttribute("data-value", expenseValue);
  editingItem.setAttribute("data-name", inputValue);
  editingItem.innerHTML = `${inputValue}: ${expenseValue}`;
  
  const editButton = createButton("edit", "edit.png", () => editExpense(editingItem));
  const closeButton = createButton("close", "close.png", () => removeExpense(editingItem));

  const existingButtons = editingItem.querySelectorAll("BUTTON");
  existingButtons.forEach(button => button.remove());
  
  editingItem.appendChild(editButton);
  editingItem.appendChild(closeButton);
  
  updateExpenses();
  updateBalance(); 
  saveExpenses(); 

  document.getElementById("expensename").value = '';
  Toexpense.value = '';
  document.getElementById('add').innerText = "Add Expense"; 
  isEditing = false; 
  editingItem = null; 
}


function updateExpenses() {
  const listItems = document.querySelectorAll("#UL li");
  let totalExpenses = 0;

  listItems.forEach(item => {
    const expenseValue = Number(item.getAttribute("data-value")) || 0; 
    totalExpenses += expenseValue;
  });

  document.getElementById("showexpense").innerHTML = totalExpenses;
 
  return totalExpenses; 
}


function updateBalance() {
  const budgetValue = Number(localStorage.getItem('budget')) || 0; 
  const totalExpenses = updateExpenses(); 
  const newBalance = budgetValue - totalExpenses;
  document.getElementById("showbalance").innerHTML = newBalance >= 0 ? newBalance : 0;

  document.getElementById("expensename").value = '';
  Toexpense.value = '';
  document.getElementById('add').innerText = "Add Expense"; 
  document.getElementById('add').setAttribute("class","addbut");
  isEditing = false; 
  editingItem = null; 
}


function saveExpenses() {
  const expenses = [];
  const listItems = document.querySelectorAll("#UL li");

  listItems.forEach(item => {
    const expenseValue = Number(item.getAttribute("data-value"));
    const expenseName = item.getAttribute("data-name");
    expenses.push({ name: expenseName, value: expenseValue });
  });

  localStorage.setItem('expenses', JSON.stringify(expenses)); 
}

function loadExpenses() {
  const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  savedExpenses.forEach(expense => {
    const li = document.createElement("LI");
    li.textContent = `${expense.name}: ${expense.value}`;
    li.setAttribute("data-value", expense.value); 
    li.setAttribute("data-name", expense.name);
    
    const editButton = document.createElement("BUTTON");
    const editimage = document.createElement('img');
    editimage.src = "edit.png";
    editButton.appendChild(editimage);
    editButton.className = "edit";
    editimage.className = "jsimgedit";
    editButton.onclick = function() {
      editExpense(li);
    };

    const closeButton = document.createElement("BUTTON");
    const closeimage = document.createElement('img');
    closeimage.src = "close.png";
    closeButton.appendChild(closeimage);
    closeButton.className = "close";
    closeimage.className = "jsimgclose";
    closeButton.onclick = function() {
      li.remove();
      updateExpenses();
      saveExpenses();
      updateBalance(); 
    };

    li.appendChild(editButton);
    li.appendChild(closeButton);
    document.getElementById("UL").appendChild(li);
  });

  updateExpenses(); 
}

function reset() {
  localStorage.removeItem('budget');
  localStorage.removeItem('expenses');

  document.getElementById("showbudget").innerHTML = 0;


  document.getElementById('UL').innerHTML='';
  document.getElementById("showexpense").innerHTML = 0;
  document.getElementById("showbalance").innerHTML = 0;

  Totbudget.value = '';
  Toexpense.value = '';
  document.getElementById("expensename").value = '';
  
  document.getElementById('add').innerText = "Add Expense"; 
  document.getElementById('add').setAttribute("class", "addbut");
  
  isEditing = false; 
  editingItem = null; 
}


document.addEventListener('DOMContentLoaded', () => {
  const savedBudget = localStorage.getItem('budget');
  if (savedBudget) {
    document.getElementById("showbudget").innerHTML = savedBudget;
    loadExpenses(); 
  }

  updateBalance(); 
});



