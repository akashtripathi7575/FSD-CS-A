import axios from "axios";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    axios.post("http://172.16.46.10:3005/add", {
      name: "Akash",
      age: 20,
      city: "Ghaziabad"
    })
      .then(res => {
        console.log("Response:", res.data);
      })
      .catch(err => {
        console.error("Error:", err);
      });
  }, []); // runs once when component loads

  return (
    <div>
      <h1>React Axios Test</h1>
    </div>
  );
}

export default App;
