import React, { useState, useEffect } from "react";
// Expenses form
import Title from "../modules/title";
import ExpenseList from "../modules/hooks/expenselist";
import ExpenseForm from "../modules/hooks/expenseform";
import Alert from "../modules/hooks/alert";
// Install uuid for unique id values
// npm install uuid --save
import uuid from "uuid/v4";

const Hooks = () => {
  const initialExpenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];
  // ************ state values ******************
  // All expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // Alert
  const [alert, setAlert] = useState({ show: false });
  // Edit
  const [edit, setEdit] = useState(false);
  // Edit item
  const [id, setId] = useState(0);
  // ************ use effect ********************
  useEffect(() => {
    // Save info to local storage
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  // ************ state values ******************

  // Handle Charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // Handle Amount
  const handleAmount = e => {
    setAmount(e.target.value);
  };
  // Handle Alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = e => {
    e.preventDefault();
    //console.log(charge, amount);
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({
          type: "success",
          text: "Item updated"
        });
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "Item added" });
      }
      setCharge("");
      setAmount("");
    } else {
      // handle alert called
      handleAlert({
        type: "danger",
        text: `Charge can't be an empty value, it has to be bigger than zero`
      });
    }
  };
  // Clear All Items
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: "danger", text: "All items deleted" });
  };
  // Handle Delete Item
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "Item deleted" });
  };
  // Handle Edit Item
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
    //console.log(expense);
  };

  return (
    <div className="container">
      {/* EXPENSE LIST */}
      <Title title="Budget Calculator" />
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="row">
        <div className="col-md-12">
          <ExpenseForm
            charge={charge}
            amount={amount}
            handleAmount={handleAmount}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            edit={edit}
          />
          <ExpenseList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            clearItems={clearItems}
          />
        </div>
      </div>
      <h5 className="mt-3">
        Total Spending :&nbsp;
        <span className="total">
          R
          {expenses.reduce((acc, curr) => {
            return (acc += parseFloat(curr.amount));
          }, 0)}
        </span>
      </h5>
      {/* END EXPENSE LIST */}
    </div>
  );
};

export default Hooks;
