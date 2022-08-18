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
            totalThisItem:0
        },
        {
            id:2,
            name: "Dell E1916HV 18.5 Inch",
            price: 9300,
            qty: 35,
            totalThisItem:0

        },
        {
            id:3,
            name: "Canon Eos 4000D 18M",
            price: 36500,
            qty: 72,
            totalThisItem:0
        },
    ],
    cartItems:[],
    totalPrice: 0,
    totalItem:0

}


const counterReducer = (state = initialState, action) => {
   
    switch (action.type) {
        case ADD_TO_CART:
            const theItem = state.products.find(
                product => product.id === action.payload.id,
            );

            if (theItem) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    totalPrice: state.totalPrice + action.payload.price,
                    totalItem: state.totalItem + 1,

                      // update stocks
                    products: state.products.map((product) =>
                    product.id === action.payload.id
                    ? {
                        ...product,
                        qty: product.qty - 1,
                        totalThisItem:product.totalThisItem+1
                        }
                    : product
                ),
                    
                };
            }
        case REMOVE_TO_CART:
            const item = state.products.find(
                product => product.id === action.payload.id,
            );

            if (item) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload],
                    totalPrice: state.totalPrice - action.payload.price,
                    totalItem: state.totalItem - 1,

                      // update stocks
                    products: state.products.map((product) =>
                    product.id === action.payload.id
                    ? {
                        ...product,
                        qty: product.qty + 1,
                        totalThisItem:product.totalThisItem-1
                        }
                    : product
                ),
                    
                };
            }

        

            default:
                return state
    }
}

export default counterReducer