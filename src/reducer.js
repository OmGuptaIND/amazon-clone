export const initialState={
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>(
    basket?.reduce((amt,item)=>item.price+amt,0)
);

function reducer (state,action){
    console.log(action);
    switch(action.type){

        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
            break;

        case "ADD_TO_BASKET":
            //Logic to add to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
               
            }
            break;
        
        case "REMOVE_FROM_BASKET":
            //logic to remove from basket
            const newBasket=[...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            if(index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Cant remove Product (id:${action.id}) as it is not in the basket!`
                );
            }
            return ({
                ...state,
                basket:newBasket
            })
            
            break;
        
        default:
            return state;  
    }
};

export default reducer;
