import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import STUDENTS from "./students.json";


function App() {
  // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
]);
console.log(STUDENTS)
// Column Definitions: Defines the columns to be displayed.
const [colDefs, setColDefs] = useState([
  { field: "make" },
  { field: "model" },
  { field: "price" },
  { field: "electric" }
]);
  return (
    <div className="App">
        <div
          className="ag-theme-quartz" // applying the Data Grid theme
          style={{ height: 500 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
              rowData={rowData}
              columnDefs={colDefs}
          />
        </div>
    </div>
  );
}

export default App;
