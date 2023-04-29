import React from "react";

function AddItem() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div id="add">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p>Add Item</p>
        <input type="text" placeholder="Item Name" />
        <input type="text" placeholder="Price" />
        <input type="text" placeholder="Image Url" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddItem;
