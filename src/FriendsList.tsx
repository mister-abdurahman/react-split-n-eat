import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import { Button } from "./Button";
import { Friend } from "./Friend";

export function FriendsList({
  friends,
  addFriendToFriendList,
  openSplitBillForm,
  selectedFriend,
  toggleAddFriendForm,
  addFriend,
}: any) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((el: any) => (
          <Friend
            key={el.id}
            friend={el}
            openSplitBillForm={openSplitBillForm}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
      {addFriend && (
        <AddFriendForm addFriendToFriendList={addFriendToFriendList} />
      )}
      <Button onClick={toggleAddFriendForm}>
        {addFriend ? "Close" : "Add Friend"}
      </Button>
    </div>
  );
}
