"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeHooks() {
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("name");
    if (saved) {
      setName(saved); // ye erro isliye aa raha hai kyuki --> useEffect ke andar turant setState mat chalao, kyuki isse extra render hota hai.

      /*kaise 
      Step 1: First render
      const [name, setName] = useState(""); so initially name = ""

      Step 2: Render ke baad pehla effect chalega --> #

      useEffect(() => {
  const saved = localStorage.getItem("name");
  if (saved) {
    setName(saved);
  }
}, []);

Maan lo localStorage me "Rahul" saved hai.
saved = "Rahul";
setName("Rahul");
    |
    |
    
Step 3: setName(saved) kya karega?
Ye React ko bolta hai:

"State change ho gayi, dobara render karo."

To phir second render hoga.
Step 4: Second render
Ab state:

React

name = "Rahul"
Ab input me "Rahul" show hoga.


5) Problem kya hui?
Flow aisa ban gaya:

Render
→ Effect
→ setState
→ Render again


MEANING
Isko React cascading render bol raha hai.

Matlab:

render ke baad effect chala
effect ne state badal di
state badli to fir render hua
Ye unnecessary extra render ho sakta hai.

6) React ko is pattern se problem kyu hai?
Kyuki React bolta hai:

Agar tum initial value already nikal sakte ho, to effect ke andar state set kyu kar rahe ho?

Tum jo kar rahe ho wo basically:

pehle empty state se render
phir baad me localStorage se value laake state update
React prefer karta hai ki:

initial value direct useState me de do



IN MY CODE 
Initial state = ""
Effect 1 reads "Rahul"
Effect 2 writes ""
Then setName("Rahul")
Re-render
Effect 2 writes "Rahul"
      
      */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="enter your name"
    />
  );
}
