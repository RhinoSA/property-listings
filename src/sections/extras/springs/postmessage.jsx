import React, { useState } from "react";
import Form from "./form";
import ListContainer from "./listcontainer";

let count = 3;

const PostMessage = () => {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      text: "There is no passion, there is serenity."
    }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    setItems([...items, { id: count, text: value }]);
    setValue("");
    count++;
  };

  return (
    <React.Fragment>
      <section className="row justify-content-center mt-3">
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </section>
      <section className="row justify-content-center mt-1">
        <ListContainer items={items} />
      </section>
    </React.Fragment>
  );
};

export default PostMessage;
