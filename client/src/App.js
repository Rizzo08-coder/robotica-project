import React, {useState, useEffect} from 'react'

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
                  (element, i) => ( <p key={i}>{element}</p> )
              )
          )}
      </div>
  )
}

export default App