import React, { useState } from "react";

function App() {
  const [data, setData] = useState({ message: "No data" });
  const [content, setContent] = useState("");

  const handlePost = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_APP_BACKEND_URL + "/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Data saved:", result);
      setContent(""); // Clear the input
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleGet = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_API_URL}/api/data`
      );
      // const response = await fetch(
      //   import.meta.env.VITE_APP_BACKEND_URL + "/data"
      // );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter content"
      />

      <button onClick={handlePost}>Send POST Request</button>

      <button onClick={handleGet}>Send GET Request</button>

      <div>
        <h3>Data from Backend:</h3>
        <ul>
          {data.message}
        </ul>
      </div>
    </div>
  );
}

export default App;
