import "./App.css";
import { useState } from "react";
import Table from "./components/table";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <div className="text-center">
        <h1 class="text-4xl font-normal leading-normal text-white-800">
          Browse Fortune 500 - Year 2021
        </h1>
        <input
          placeholder="Seacrh Company Name"
          className="shadow appearance-none border rounded py-2 my-10 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <Table query={query} />
    </div>
  );
}

export default App;
