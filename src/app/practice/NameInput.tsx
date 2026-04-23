"use client"

import React, { useState } from "react"

export default function NameInput() {
  const [name , setName] = useState("")


  function handleChange(e:React.ChangeEvent<HTMLInputElement> ) {
    setName(e.target.value)
  }

  return (
    <div>
      <input type="text" placeholder="type you name baby" value={name} onChange={handleChange}/>

      <p>Hello, [{name}]</p>

    </div>
  )
}