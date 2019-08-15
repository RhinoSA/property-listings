import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="expense">Charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              placeholder="e.g. rent"
              value={charge}
              onChange={handleCharge}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={handleAmount}
            />
        </div>
      </div>
      <button className="btn btn-secondary" type="submit">
        {edit ? "Update Item" : "Add Item"} <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
