import React, { useState } from 'react'

export default function ModalWindow() {
    const[open, setOpen]= useState(false)
    function openModal(){
        setOpen((prev)=>!prev)
        console.log(open)
    }
  return (
    <div className="modal-overlay">
        {!open && (<button onClick={()=>openModal(open)}className="open_modal"> нажми на кнопку</button>)}
      {open && (<div className="modal">
        <button onClick={()=>openModal(open)}className="close_button">&times;</button>
        <div className="modal-content">
          <img className="img_oleg"src="./Снимок экрана 2023-10-13 235401.png" alt="" />
        </div>
      </div>)}
    </div>
  )
}
