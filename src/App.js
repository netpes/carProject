import * as React from 'react';
import './App.css';
import {useState} from "react";
import axios from "axios"
import { DataGrid } from '@mui/x-data-grid';
import {
  Button,
  Container,
  CssBaseline, Paper,

  TextField
} from "@mui/material";


function App() {
  const [rows,setRows] = useState([])
    let columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'answer', headerName: 'Answer', width: 500 }]
  const [input,setInput] = useState()
  const [output,setOutput] = useState()
  const [isloading,setIsLoading] = useState(true)
  const [name,setName] = useState("")


  function createData(name, answer) {
    return { name, answer};
  }

  function HandleSubmit(e) {
    e.preventDefault();
    setIsLoading(true)
    axios.post("http://localhost:2000/search", {input:input}).then((res)=>{
        console.log(res.data.services.Libra, "trtre")

            rows.push({id: 1,name:'הכשרה:', answer:res.data.services.Hash})
            rows.push({id: 2,name:'ליברה:', answer:res.data.services.Libra})
            rows.push({id: 3,name:'מגדל:', answer:res.data.services.Migdal})
            rows.push({id: 4,name:'איילון:', answer:res.data.services.Aylon})
            rows.push({id: 5,name:'וישור:', answer:res.data.services.Wesure})
            rows.push({id: 6,name:'מנורה:', answer:res.data.services.Menora})
            rows.push({id: 7,name:'חלקאי:', answer:res.data.services.Haklai})

        setIsLoading(false)

    })
  }

  function handle(e){
    setName(e.target.value)
  }
  return (
    <div className="App">

        <CssBaseline />

      <form onSubmit={HandleSubmit} style={{ marginTop:5}}>
        <TextField id="outlined-basic" sx={{width:"60%", height:"15%"}} label="Search Bar" variant="outlined" onChange={e=>setInput(e.target.value)} value={input}/>
        <Button variant="contained"  sx={{width:"30%", height:"15%", padding:2}} onClick={HandleSubmit}>Search</Button>
      </form>
          {isloading ? <p>loading...</p>:
              <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                      rows={rows}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection
                  />

              </div>}

    </div>
  );
}

export default App;
// הראל כלל שלמה ישיר AIG חקלאי סקוריטס מגדל CASH