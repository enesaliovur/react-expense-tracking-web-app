import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </>
  );
};

export default Expenses;
