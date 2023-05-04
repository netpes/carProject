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
        { field: 'answer', headerName: 'Answer', width: 800 }]
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
    axios.post("https://car-backend-9jqj.onrender.com/search", {input:input}).then((res)=>{
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

      <form onSubmit={HandleSubmit} className={'flex flex-wrap flex-row items-center justify-center'}>
          <br/>
          <div className={"my-16"}>

          </div>
          {/*<div*/}
          {/*    className={"absolute bg-gray-200 w-70 h-100"}>*/}
          {/*    <TextField id="filled-basic" label="Search Bar" onChange={e=>setInput(e.target.value)} value={input} sx={{width:"50vw", height:"15%", backgroundColor:"white", color:"black"}} variant="filled" />*/}
          {/*    <Button variant="contained"  sx={{width:"auto", height:"15%", padding:2, backgroundColor:"white", color:"black"}} onClick={HandleSubmit}>Search</Button>*/}
          {/*</div>*/}
          <div className="w-3/4 mx-auto relative">
              <input type="number" placeholder="Search" maxLength="8" onChange={e=>setInput(e.target.value)} value={input}
                     className="w-full p-6 h-6  text-gray-700 placeholder-gray-400 border rounded-lg focus:outline-none focus:shadow-outline" />
                  <button type="submit" onClick={()=>HandleSubmit}
                          className="absolute inset-y-0 right-0 px-4 text-white bg-blue-500 rounded-r-lg hover:bg-blue-700">
                      Search
                  </button>
          </div>


      </form>
          {isloading ? <p className={"text-white"}>loading...</p>:
              <div style={{ height: 400  }} className={"text-white flex flex-wrap flex-row items-center justify-center "}>
                  <DataGrid sx={{
                      color:"white", display:"flex", justifyContent: "center",fontSize:25}}
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