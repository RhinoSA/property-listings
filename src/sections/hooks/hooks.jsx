import React, { useState, useEffect } from "react";
import Menu from "../menu";
import TempCalculator from "./tempcalculator";

// Expenses form
import ExpenseList from "./expenselist";
import ExpenseForm from "./expenseform";
import Alert from "./alert";
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

  /* ########## HOKS EXAMPLES ########## */

  function HooksExampleTwo() {
    const [countTwo, setCountTwo] = useState(0);

    useEffect(() => {
      document.getElementById(
        "demo"
      ).innerHTML = `${countTwo} X 2 = ${countTwo * 2}`;
    });

    return (
      <div>
        <p className="alert alert-warning">You clicked {countTwo} times.</p>
        <p>
          <button
            className="btn btn-secondary"
            onClick={() => setCountTwo(countTwo + 1)}
          >
            Click Me
          </button>
          <button
            className={
              countTwo === 0
                ? "btn btn-secondary ml-2 disabled"
                : "btn btn-secondary ml-2"
            }
            onClick={() => setCountTwo(0)}
          >
            Reset
          </button>
        </p>
      </div>
    );
  }

  function HooksExample() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
      <div>
        <p className="alert alert-warning">You clicked {count} times.</p>
        <p>
          <button
            className="btn btn-secondary"
            onClick={() => setCount(count + 1)}
          >
            Click Me
          </button>
          <button
            className={
              count === 0
                ? "btn btn-secondary ml-2 disabled"
                : "btn btn-secondary ml-2"
            }
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="container">
      {/* EXPENSE LIST */}
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <div className="row">
        <div className="col-md-3">
          <Menu />
        </div>
        <div className="col-md-9">
          <h1>Using Hooks</h1>
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
          <h5 className="mt-3">
            Total Spending :&nbsp;
            <span className="total">
              R
              {expenses.reduce((acc, curr) => {
                return (acc += parseFloat(curr.amount));
              }, 0)}
            </span>
          </h5>
          {/* EXAMPLE USESTATE */}
          <h2>Using the useState Hook</h2>
          <p>
            Below is a basic example of how one can use hooks in an app. Hooks
            allow one to alter the value of a constant inside a function.
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component, useState &#125; from "react";
            <br />
            <br />
            function HooksExample() &#123;
            <br />
            &nbsp;&nbsp;const [count, setCount] = useState(0);
            <br />
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="alert
            alert-warning">You clicked &#123;count&#125; times.&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            className="btn btn-secondary" onClick=&#123;&#40;&#41; =>
            setCount(count + 1)&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            className=&#123;count === 0 ? "btn btn-secondary ml-2 disabled" :
            "btn btn-secondary ml-2"&#125; onClick=&#123;() =>
            setCount(0)&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </p>
          <HooksExample />

          <h2>Using the useEffect Hook</h2>
          <p>This example makes use of the useEffect hook.</p>
          <p className="alert alert-secondary">
            import React, &#123; Component, useState, useEffect &#125; from
            "react";
            <br />
            <br />
            function HooksExampleTwo&#40;&#41; &#123;
            <br />
            &nbsp;&nbsp;const &#91;countTwo, setCountTwo&#93; =
            useState&#40;0&#41;;
            <br />
            <br />
            &nbsp;&nbsp;useEffect&#40;&#40;&#41; =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById&#40;"demo"&#41;.innerHTML
            = `{"$"}&#123;countTwo&#125; X 2 = {"$"}&#123;countTwo &#42;
            2&#125;`;
            <br />
            &nbsp;&nbsp;&#125;&#41;;
            <br />
            <br />
            &nbsp;&nbsp;return &#40;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="alert
            alert-warning"&gt;You clicked &#123;countTwo&#125; times.&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            className="btn btn-secondary" onClick=&#123;&#40;&#41; =&gt;
            setCountTwo&#40;countTwo + 1&#41;&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            className=&#123;countTwo === 0 ? "btn btn-secondary ml-2 disabled" :
            "btn btn-secondary ml-2"&#125; onClick=&#123;&#40;&#41; =>
            setCountTwo&#40;0&#41;&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&#41;;
            <br />
            &#125;
          </p>
          <HooksExampleTwo />
          <h4 id="demo">Demo</h4>
          <h2>Temperature Calculator</h2>
          <TempCalculator />
        </div>
      </div>
    </div>
  );
};

export default Hooks;
