import React, {useState, useEffect} from 'react'
import Component1 from './components/Component1'
import './index.css';

function App() {

    const [data, setData] = useState([{}])

    useEffect(() => {
         fetch("/list").then(
             res => res.json()
         ).then(
             data => {
                setData(data)
                console.log(data)
             }
         )
    }, [])

  return (
      <div>
          { (typeof data.list === "undefined") ? (
               <p>Loading...</p>
          ) : (
              data.list.map(
                  (element, index) => ( <Component1 content={element} chiave={index}/> )
              )
          )}
      </div>
  )
}

export default App