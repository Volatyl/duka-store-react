import React, { useState } from "react";

function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: "",
  });

  function handleChange(e) {
    console.log(e.target.value);

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json)
      .then((data) => console.log(data));
  }

  return (
    <div id="add">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <p>Add Item</p>
        <input
          type="text"
          placeholder="Item Name"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Image Url"
          name="image"
          value={formData.image}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddItem;
