//Default state

const defaultState= {
    balance: 0,
}

const account = (state = defaultState, action) => {
    console.log ("cylon account is Reducing!!")
switch(action.type){
    case 'increment':
        console.log("MONEY !!!", state.balance, '+', action.payload);
        return {
            balance: state.balance + action.payload
        }

    case 'decrement':
        console.log("WHO TOOK MY MONEY !!!", state.balance, '-', action.payload);
        return {
            balance: state.balance - action.payload
        }

    default:
        return state;
}
}

export default account