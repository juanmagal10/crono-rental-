import _, { map } from 'underscore';

const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[]}
    }
    if (action.type === 'REMOVE') {
          const arreglo=action.payload.array
        // return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action) };
    }
    if (action.type === 'GET_TOTALS') {
        const { total, amount } = state.cart.reduce((carTotal, cartItem) => {
            const { precio } = cartItem
            return carTotal
        }, {
            total: 0,
            amount: 0
        })

        return { ...state, total, amount }
       
    }

    if (action.type === 'ADD_ITEM') {
        const arreglo=action.payload.array
        const foundItem = arreglo.find(item => item.id === action.payload.id)
        if (window.localStorage.carrito) {
            state.cart=JSON.parse(window.localStorage.getItem('carrito'))
            state.cart.push(foundItem);
        } else {
            state.cart.push(foundItem);
        }
        const uniqValuesArray = _.uniq(state.cart,function(item){
           return item.name
        });
        localStorage.setItem(`carrito`, JSON.stringify(uniqValuesArray))
        console.log(uniqValuesArray)
    }
    return state
}

export default reducer