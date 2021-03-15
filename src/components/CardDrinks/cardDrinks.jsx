import React from 'react'

function cardDrinks(props) {
    return (
        <div>
            {/* <img src={props.src} alt=""/> */}
            <h2 htmlFor={props.name}>{props.name}</h2>

        </div>
    )
}

export default cardDrinks
