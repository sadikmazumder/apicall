import React, { useEffect, useState } from "react";

function UserCommentsComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get API
    const url = "https://jsonplaceholder.typicode.com/comments";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("jsonn", json);
        setData(json);
      })
      .catch((e) => {
        console.log("e", e);
      });
  }, []);

  const postPutEvent = () => {};

  return (
    <div className="App">
      <h2>user id component</h2>
      {data.map((item) => {
        return <div>{item.name}</div>;
      })}
      <button onClick={postPutEvent}>submit</button>
    </div>
  );
}

export default UserCommentsComp;
