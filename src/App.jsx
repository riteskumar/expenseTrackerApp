import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import { uselocalStorage } from "./hooks/uselocalStorage";

function App() {
	const [expenses, setExpenses] = uselocalStorage('expenses' , expenseData);
	const [editingRowId, setEditingRowId] = uselocalStorage('editingRowId' , "");
	const [expenseForm, setExpenseForm] = uselocalStorage('expenseForm' ,{
		title: "",
		category: "",
		amount: "",
	});

	return (
		<main>
			<h1>Track Your Expense</h1>
			<div className="expense-tracker">
				<ExpenseForm
					setExpenses={setExpenses}
					expenseForm={expenseForm}
					editingRowId={editingRowId}
					setExpenseForm={setExpenseForm}
					setEditingRowId={setEditingRowId}
				/>
				<ExpenseTable
					expenses={expenses}
					setExpenses={setExpenses}
					setExpenseForm={setExpenseForm}
					setEditingRowId={setEditingRowId}
				/>
			</div>
		</main>
	);
}

export default App;
