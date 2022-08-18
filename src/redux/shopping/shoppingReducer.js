import {
    ADD_TO_CART,
    REMOVE_TO_CART
} from "./actionTypes";

const initialState = {
    products: [
        {
            id:1,
            name: "Asus Vivobook X515MA ",
            price: 35500,
            qty: 20,
            asusQty:0
        },
        {
            id:2,
            name: "Dell E1916HV 18.5 Inch",
            price: 9300,
            qty: 35,
            dellQty:0

        },
        {
            id:3,
            name: "Canon Eos 4000D 18M",
            price: 36500,
            qty: 72,
            canonQty:0
        },
    ],
    cartItems:[],
    totalPrice: 0,
    totalItem:0

}


const shoppingCartReducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
        case ADD_TO_CART:
            const theItem = state.products.find(
                product => product.id === action.payload.id,
            );

            
            console.log( theItem.qty -= 1);
            if (theItem) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    totalPrice: state.totalPrice + action.payload.price,
                    totalItem: state.totalItem + 1,
                    
                };
            }

            
        case REMOVE_TO_CART:
            return {
                ...state,
                value: state.value - 1
            }

            default:
                return state
    }
}

export default shoppingCartReducer