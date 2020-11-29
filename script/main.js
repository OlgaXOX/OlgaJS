'use strict';
   

    let start = document.getElementById('start'),
    
        btnPlus = document.getElementsByTagName('button'),
    
        incomePlus = btnPlus[0],
    
        expensesPlus = btnPlus[1],
    
        depositCheckbox = document.querySelector('#deposit-check'),
    
        additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    
    
        budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    
        budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    
        expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    
        additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    
        additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    
        accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value')[0],
    
        incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    
        targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    
    
        salaryAmount = document.querySelector('.salary-amount'),
    
        incomeItem = document.querySelectorAll('.income-items'),
    
        incomeTitle = document.querySelector('.income-title'),    
    
        expensesTitle = document.querySelector('.expenses-title'),
    
        expensesItems = document.querySelectorAll('.expenses-items'),
    
        additionalExpenses = document.querySelector('.additional_expenses'),
    
        targetAmount = document.querySelector('.target-amount'),
    
        periodSelect = document.querySelector('.period-select'),

        periodAmount = document.querySelector('.period-amount'),
        
        additionalExpensesItem = document.querySelector('.additional_expenses-item');

        const appData = {
        budget: 0,
        budgetDay: 0,
        budgetMonth: 0,
        income: {},
        incomeMonth: 0,
        addIncome: [],
        expenses: {},
        expensesMonth: 0,
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 50000,               

        start: function() {           
            appData.budget = +salaryAmount.value;           
            
            appData.getExpenses();

            appData.getIncome();

            appData.getIncomeMonth();

            appData.getExpensesMonth();            

            appData.getAddExpenses();

            appData.getAddIncome();            

            appData.getBudget();

            appData.getRangeValue();

            appData.showResult();
        },
        showResult: function() {
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = Math.ceil(appData.budgetDay);
            expensesMonthValue.value = appData.expensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = Math.ceil(appData.getTarghetMonth());
            incomePeriodValue.value = appData.calcPeriod();
            start.addEventListener('click', () =>  
                incomePeriodValue.value = periodSelect.value * appData.budgetMonth);            
            if (salaryAmount.value === '') {               
              return;
            }
        }, 
        addExpensesBlock: function() {            
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
            expensesItems = document.querySelectorAll('.expenses-items');
            if(expensesItems.length === 3) {
                expensesPlus.style.display = 'none';
            }
        },
        getExpenses: function() {
            expensesItems.forEach(function(item){
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if(itemExpenses !== '' && cashExpenses !== ''){
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        addIncomeBlock: function() {
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItem = document.querySelectorAll('.income-items');
            if(incomeItem.length === 3) {
                incomePlus.style.display = 'none';
            } 
        },
        getIncome: function(){
            incomeItem.forEach(function(item){
                let itemIncome = item.querySelector('.income-title').value;             
                let cashIncome = item.querySelector('.income-amount').value;
                if(itemIncome !== '' && cashIncome !== ''){
                  appData.income[itemIncome] = cashIncome;  
                }                                   
            });            
        }, 
        getAddExpenses: function() {
            let addExpenses = additionalExpensesItem.value.split(', ');
            addExpenses.forEach(function(item){
                item = item.trim();
                if (item !== '') {
                    appData.addExpenses.push(item);
                }
            });
        },
        getIncomeMonth: function() {
           for (let key in appData.income){
                appData.incomeMonth += +appData.income[key]; 
            } 
        }, 
        getAddIncome: function() {
            additionalIncomeItem.forEach(function(item){
                let itemValue = item.value.trim();
                if (itemValue !== ''){
                    appData.addIncome.push(itemValue);
                }
            });
        }, 
        getInfoDeposit: function() {
            appData.deposit = confirm('Есть ли у вас депозит?');
            if(appData.deposit) {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);                
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);                
            }
        },
        getExpensesMonth: function() {                                
            for (let key in appData.expenses) {                                               
                appData.expensesMonth += +appData.expenses[key];                                  
            }                       
        },
        getBudget: function() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
            appData.budgetDay = appData.budgetMonth / 30;
        },
        getTarghetMonth: function() {           
            return targetAmount.value / appData.budgetMonth;
        },
        getStatusIncome: function() {
            if (appData.budgetDay>=1200) {
                console.log('У вас высокий уровень дохода');
            } else if (appData.budgetDay>=600 && appData.budgetDay<1200 ) {
                console.log('У вас средний уровень дохода');
            } else if (appData.budgetDay<600 && appData.budgetDay>=0) {
                console.log('К сожалению, у вас уровень дохода ниже среднего');
            } else {
                console.log('Что-то пошло не так');
            }
        },        
        calcPeriod: function() {
            return appData.budgetMonth * periodSelect.value;
        },
        getRangeValue: function() {
            periodAmount.textContent = periodSelect.value;
        }
    };
    
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);    
    periodSelect.addEventListener('focus', appData.getRangeValue);

        

    

    //if (appData.getTarghetMonth() > 0) {
    //    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTarghetMonth()) + ' месяца');
    //} else {
    //    console.log('Цель не будет достигнута');
    //}

    

