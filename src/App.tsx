import { useState } from "react";
import { FriendsList } from "./FriendsList";
import AddFriendForm from "./AddFriendForm";
import { SplitBillForm } from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export interface friendProps {
  id: number | string;
  name: string;
  image: string;
  balance: number;
}

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState<any>(null); //ask why using <any> works for the id error
  const [addFriend, setAddFriend] = useState(false);

  // splitbill form:
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  let friendExpense = Number(bill) - Number(myExpense);
  const [billPayer, setBillPayer] = useState("user");

  function toggleAddFriendForm() {
    setAddFriend((prev) => !prev);
  }
  function addFriendToFriendList(friend: friendProps) {
    setFriends((prev: any) => [...prev, friend]);
  }
  function openSplitBillForm(friend: friendProps) {
    setSelectedFriend(friend);
    setAddFriend(false);

    setBill("");
    setMyExpense("");
    friendExpense = 0;
    setBillPayer("user");
  }
  function splitBill(value: number) {
    setFriends((friends: any) =>
      friends.map((el: friendProps) =>
        el.id === selectedFriend?.id
          ? { ...el, balance: el.balance + value }
          : el
      )
    );
  }
  return (
    <div className="app">
      <FriendsList
        friends={friends}
        addFriendToFriendList={addFriendToFriendList}
        openSplitBillForm={openSplitBillForm}
        selectedFriend={selectedFriend}
        toggleAddFriendForm={toggleAddFriendForm}
        addFriend={addFriend}
      />
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          setSelectedFriend={setSelectedFriend}
          onSplitBill={splitBill}
          bill={bill}
          setBill={setBill}
          myExpense={myExpense}
          setMyExpense={setMyExpense}
          friendExpense={friendExpense}
          billPayer={billPayer}
          setBillPayer={setBillPayer}
        />
      )}
    </div>
  );
}

export default App;
