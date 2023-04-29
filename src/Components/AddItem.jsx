import React from "react";

function AddItem() {
  return (
    <div id="add">
      <form>
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
