import React, {useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const BudgetsContext = React.createContext();

export function useBudgets() {
    return useContext(BudgetsContext);
}
// // budgets
// {
//     id:
//     name:
//     max:
// },

// //expenses
// {
//     id:
//     budgetId:
//     amount:
//     description:
// }
export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    function addExpense(description, amount, budgetId) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: uuidv4(), description, amount, budgetId}]
        })
    }
    function addBudget(name, max) {
        if (prevBudgets.find(budget => budget.name === name)) {
            return prevBudgets
        }
        setBudgets(prevBudgets => {
            return [...prevBudgets, {id: uuidv4(), name, max}]
        })
    }
    function deleteBudget({ id }){
        setBudgets(prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        }
    }
    function deleteExpense({ id }) {
        setExpenses(prevExpenses => {
            return prevExpenses.filter(expense => expense.id !== id)
        }
    }
    return (
        <BudgetsContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>{children}</BudgetsContext.Provider>
        )

}