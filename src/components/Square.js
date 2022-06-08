import React from 'react'
import '../App.css'
function Square({ val, chooseSquare }) {
  let clr
  if (val === 'X') {
    clr = "black"
  } else {
    clr = "white"
  }
  return (
    <div className='square' style={{ color: clr }} onClick={chooseSquare}>{val}</div>
  )
}

export default Square