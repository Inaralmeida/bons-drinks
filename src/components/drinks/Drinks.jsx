import React, { useState, useEffect } from 'react'
import cardDrinks from '../CardDrinks/cardDrinks'

function Drinks() {
    const[results, setResults] = useState([])
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(response => response.json())
        .then(data =>{
            setResults(data.drinks)
        })
    }, [])
    return (
        <div>
            <ul>
            {results && results.map((item, index)=>{
                
                   return (  
                        <cardDrinks key={item.idDrink} name={item.strDrink} />
                    )
                
            })}
            </ul>
        </div>
    )
}

export default Drinks
