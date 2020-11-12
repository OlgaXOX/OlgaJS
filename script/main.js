let money;
let income; 
let addExpenses;
let deposit;
let mission;
let period;

console.log('Любой текст');

let calcolate = document.getElementById('start');

let plusIncome = document.getElementsByTagName('button')[0];

let plusExpenses = document.getElementsByTagName('button')[1];

let depositCheckbox = document.querySelector('#deposit-check');

let incomeAddInput = document.querySelectorAll('.additional_income-item');


let monthBudget = document.querySelector('.budget_month-value');


let dayBudget = document.getElementsByClassName('budget_day-value');

let monthExpenses = document.getElementsByClassName('expenses_month-value');

let probableIncome = document.getElementsByClassName('additional_income-value');

let probableExpenses = document.getElementsByClassName('additional_expenses-value');

let savingsPerPeriod = document.getElementsByClassName('income_period-value');

let goalInMonths = document.getElementsByClassName('target_month-value');


let salaryAmount = document.querySelector('.salary-amount');

let incomeAmount = document.querySelector('.income-amount');

let incomeTitle = document.querySelector('.income-title');

let additionalIncome = document.querySelectorAll('.additional_income-item');

let expensesObligName = document.querySelector('.expenses-title');

let expensesObligAmount = document.querySelector('.expenses-amount');

let expensesAddInput = document.querySelector('.additional_expenses-item');

let targetAmount = document.querySelector('.target-amount');

let periodSelect = document.querySelector('.period-select');




