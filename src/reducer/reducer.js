import _, { map } from 'underscore';

const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        window.localStorage.clear()
        return {...state, cart:[]}
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
        console.log(JSON.parse(window.localStorage.getItem('carrito')).length, 'storage')
}
    return state
}

export default reducer