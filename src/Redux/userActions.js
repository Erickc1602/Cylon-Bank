const increment = (amount) => {
    console.log("action Increment fired!", amount)
    return{
        type: 'increment',
        payload: amount,
     }
}

const decrement = (amount) => {
    console.log("action Decrement fired!", amount)
    return{
        type: 'decrement',
        payload: amount,
     }
}

export {increment, decrement}