import React, { useState } from "react";
import { Button } from "./Button";

export function SplitBillForm({
  selectedFriend,
  setSelectedFriend,
  onSplitBill,
  bill,
  setBill,
  myExpense,
  setMyExpense,
  friendExpense,
  billPayer,
  setBillPayer,
}: any) {
  // const [bill, setBill] = useState("");
  // const [myExpense, setMyExpense] = useState("");
  // const friendExpense = Number(bill) - Number(myExpense);
  // const [billPayer, setBillPayer] = useState("user");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!bill || !myExpense) return;

    const balance = billPayer === "user" ? friendExpense : -myExpense;
    onSplitBill(balance);
    setSelectedFriend(null);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰 Bill value</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor="">💵 Your Expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) =>
          e.target.value > bill
            ? setMyExpense(myExpense)
            : setMyExpense(e.target.value)
        }
      />
      <label htmlFor="">👬 {selectedFriend.name}'s Expense</label>
      <input type="number" disabled value={friendExpense} />
      <label htmlFor="">🤑 Who's paying the bill?</label>
      <select
        name=""
        id=""
        value={billPayer}
        onChange={(e) => setBillPayer(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
