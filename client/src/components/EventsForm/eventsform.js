import React from "react";

function EventsForm(props) {
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
      <input type="date" name="date" onChange={props.inputChange} />
      <button onClick={props.formSubmit}>Submit</button>
    </form>
  );
}

export default EventsForm;
