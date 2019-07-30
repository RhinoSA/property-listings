import React from "react";
import ExpenseItem from "./expenseitem";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <React.Fragment>
      <ul className="list-group mt-3 mb-3">
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn btn-danger" onClick={clearItems}>
          Clear Expenses <MdDelete className="btn-icon" />
        </button>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
