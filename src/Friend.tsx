import React from "react";
import { Button } from "./Button";

export function Friend({ friend, openSplitBillForm, selectedFriend }: any) {
  return (
    <li className={selectedFriend?.id === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      ) : friend.balance === 0 ? (
        <p> You and {friend.name} are even</p>
      ) : (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      <Button onClick={() => openSplitBillForm(friend)}>
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
