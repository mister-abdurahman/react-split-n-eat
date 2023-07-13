import React, { useState } from "react";
import { Button } from "./Button";
import { friendProps } from "./App";

function AddFriendForm({ addFriendToFriendList }: any) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();
    const friend: friendProps = {
      name,
      id,
      balance: 0,
      image: `${url}?u=${id}`,
    };
    addFriendToFriendList(friend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">Image URL</label>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriendForm;
