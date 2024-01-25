'use client'

import { useState } from "react"

export default function List() {
  let items = ['Tomatoes', 'Pasta', 'Coconut']
  const [counter, setCounter] = useState([0, 0, 0])
  
  return (
    <div>
      <h4 className="title">item list</h4>
        { items.map( (food, i) => {
            return (
              <div className="food" key={i}>
                <img src={`/food${i}.png`} className="food-img" />
                <h4>{ food } $40</h4>
                <button onClick={()=>{
                  if(counter[i] > 0) {
                    let minus = [...counter];
                    minus[i]--
                    setCounter(minus)
                  }
                }}> - </button>
                <span> { counter[i] } </span>
                <button onClick={()=>{
                  let plus = [...counter];
                  plus[i]++;
                  setCounter(plus)
                }}> + </button>
            </div>
            )
          }) }
    </div>
  )
}
  