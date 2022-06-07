export const initialState = {
  basket: [],
};
//get basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.value + amount, 0);

//remove from basket

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Something is Wrong");
      }
      return {
        ...state,
        basket: newBasket,
      };
  }
};

export default reducer;
