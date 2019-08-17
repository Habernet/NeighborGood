import React from "react";

function ClassifiedsForm(props) {
  return (
    <form className="form">
      <input
        name="title"
        onChange={props.inputChange}
        type="text"
        placeholder="Title"
      />
      <input
        name="description"
        onChange={props.inputChange}
        type="text"
        placeholder="Description"
      />
      <input
        name="price"
        onChange={props.inputChange}
        type="text"
        placeholder="Price"
      />
      <button onClick={props.formSubmit}>Submit</button>
    </form>
  );
}

export default ClassifiedsForm;
