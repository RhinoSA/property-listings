import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="info col-md-4">{charge}</div>
        <div className="info col-md-4">R{amount}</div>
        <div className="col-md-4 text-right">
          <button
            className="edit-btn btn btn-secondary btn-sm mr-2 mt-2"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            <MdEdit />
          </button>
          <button
            className="clear-btn btn btn-primary btn-sm mt-2"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
