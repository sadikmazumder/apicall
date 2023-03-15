import React, { useEffect, useState } from "react";

function UserComponets() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Get API
    const url = "https://jsonplaceholder.typicode.com/users";

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
      <h2>user component</h2>
      {data.map((item) => {
        return (
          <div>
            {item.id}.{item.name}
          </div>
        );
      })}
      <button onClick={postPutEvent}>submit</button>
    </div>
  );
}

export default UserComponets;
