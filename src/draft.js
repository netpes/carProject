
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"
import {logDOM} from "@testing-library/react";
function App() {
    const [name,setName] = useState()
    const [output,setOutput] = useState()
    const [isloading,setIsLoading] = useState(true)
    useEffect(()=>{
        setIsLoading(true)
        axios.get("http://localhost:2000/search").then((res)=>{
            console.log(res)
            setOutput(res.data)
            setIsLoading(false)
        })
    })
    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            <p>{name}</p>
            {isloading ? <p>loading...</p> :
                <div>
                    {output?.map((single) => {
                        return<p>{single}</p>
                    })}
                </div>

            }
        </div>
    );
}

export default App;
