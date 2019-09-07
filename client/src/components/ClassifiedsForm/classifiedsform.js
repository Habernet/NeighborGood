import React from "react";

function ClassifiedsForm(props) {
  return (
    <form className="form">
      <h3>Post a classifieds listing of your own!</h3>
      <input
        name="title"
        onChange={props.inputChange}
        type="text"
        placeholder="Title"
      />
      <textarea
        // style={formStyle}
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
      <button className="submitButton" onClick={props.formSubmit}>
        Submit
      </button>
    </form>
  );
}

export default ClassifiedsForm;
