const initialState = {
    items: [],
    inUpdate: {}
};

const toggleFlagInCart = (arr, id) => arr.map(n => n.id === id ? { ...n, inCart: !n.inCart } : n);

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS': {
      return {
        ...state,
        items: action.payload,
      }
    }
    case 'TOGGLE_IN_CART_FLAG': {
      const beforeToggle = [
        ...state.items,
      ];

      const afterToggle = toggleFlagInCart(beforeToggle, action.payload);
      return {
        ...state,
        items: afterToggle
      }
    }
    case 'REMOVE_PRODUCT': {
      const newItems = [
        ...state.items,
      ];
      const filteredArray = newItems.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: filteredArray
      }
    }

    case 'UPDATE_PRODUCT': {
      const oldItems = [
        ...state.items
      ];

      const newItems = oldItems.map(o => {
        if (o.id === action.payload.id) {
          return action.payload;
        }
        return o;
      });

      return {
        ...state,
        items: newItems
      }
    }
      
    case 'CREATE_PRODUCT': {
      const oldProducts = [
        ...state.items
      ];
      
      const newProducts = [action.payload].concat(oldProducts);

      return {
        ...state,
        items: newProducts
      }
    }
    default:
      return state;
  }
};

export default products;
  