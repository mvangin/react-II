import logo from './logo.svg';
import './App.css';
import { useEffect, useState} from 'react';
import ReusableTable from "./ReusableTable/ReusableTable"
import {data} from "./data"

function App() {

  return (
    <ReusableTable 
      data={data} 
      colsToFilter={["name","address","street"]}/>
  )
}

export default App;
