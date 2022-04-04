import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
function inverse(figure) {
  // inverse a RGB color
  return ((figure & 0x000000) | (~figure & 0xFFFFFF))
}
const SingleColor = ({ rgb, weight, index, hexColor, gap }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = `#${hexColor}`;
  const invhex  = `#${inverse(hexColor)}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [alert]);
  // console.log(gap);
  return <article className={`color ${index > (100 / gap) && "color-light"}`} style={{ backgroundColor: `${hex}` }} onClick={() => {
    setAlert(true);
    navigator.clipboard.writeText(hex);

  }}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hex}</p>
    {<p className={`${alert?"alert":"hide"}` }>Copied to Clipboard</p>}
  </article >;
}

export default SingleColor
