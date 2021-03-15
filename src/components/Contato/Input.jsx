import React,{Fragment, useState} from 'react';
import  './Input.module.css'

function Input(props) {
    const[input, setInput] = useState('')

    const hendle = (event)=>{
        setInput(event.target.value)
        console.log(input)
        // setTimeout(()=>{
        //     setInput(input.value(''))
            
        // }, 5000)
    }

    return (
        <>
        <label htmlFor={props.name} className={props.legenda} >{props.children}</label>
        <input 
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={hendle}
        className={props.legenda}/>
        </>
    )
}

export default Input
