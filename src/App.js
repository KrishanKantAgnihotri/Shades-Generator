import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState("");
  const [gap, setGap] = useState(10);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#123456').all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(gap);
      setList(colors);
    }
    catch (error) {
      setError(true);
      alert("Enter Correct Values Only!!");
    }
  }
  return (
    <>
      <section className="container">
        <h3>Shades Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#123456" className={`${error ? "error" : null}`} />

          <select defaultValue={gap} onChange={(e) => setGap(parseInt(e.target.value))}>
            <option value="1">1</option>
            <option value="5" >5</option>
            <option value="10">10</option>
            <option value="15" >15</option>
            <option value="20">20</option>
          </select>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {

          list.map((color, index) => {

            return <SingleColor key={index} {...color} index={index} hexColor={color.hex} gap={gap} />
          })
        }
      </section>
    </>
  );
}

export default App
