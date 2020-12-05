const initialState = {
    items: [],
    totalCartPrice: 0,
};

const counterPlus = (src_array, id) => {
  const result_array = JSON.parse(JSON.stringify(src_array));
  const obj = result_array.find(el => el.id === id);
  if (obj) obj.quantity++;
  return result_array;
}

const counterMinus = (src_array, id) => {
  const result_array = JSON.parse(JSON.stringify(src_array));
  const obj = result_array.find(el => el.id === id);
  if (obj && obj.quantity >= 2) obj.quantity--;
  return result_array;
}

const getSum = (a, b) => {
  return a += b;
}

const getSubstraction = (a, b) => {
  return a -= b;
}

const getSumArrayPrices = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const getSumMultArrayPrices = (arr) => arr.reduce((sum, obj) => (obj.price * obj.quantity) + sum, 0);

function geItemPrice(array, search) {
  var i = array.length;
  while (i--) {
      if (array[i].id === search) {
         return array[i].price;
      }
  }
}

function geItemQuantity(array, search) {
  var i = array.length;
  while (i--) {
      if (array[i].id === search) {
         return array[i].quantity;
      }
  }
}
  
const productsCart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_CART': {
      return {
        ...state,
        items: action.payload,
        totalCartPrice: getSumArrayPrices(action.payload)
      };
    }
    case 'ADD_PRODUCT_CART': {
      const newItemsInCart = [
        ...state.items, 
        action.payload
      ];

      return {
        ...state,
        items: newItemsInCart,
        totalCartPrice: getSum(state.totalCartPrice, action.payload.price)
      };
    }
    case 'REMOVE_PRODUCT_CART': {
      const newItems = [
        ...state.items,
      ];

      
      const filteredArray = newItems.filter((item) => item.id !== action.payload);
      const priceOfPayload = geItemPrice(newItems, action.payload);
      const quantityOfPayload = geItemQuantity(newItems, action.payload);

      return {
        ...state,
        items: filteredArray,
        totalCartPrice: getSubstraction(state.totalCartPrice, (priceOfPayload * quantityOfPayload))
      }
    };
    case 'UPDATE_CART_PRODUCT': {
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
        items: newItems,
        totalCartPrice: getSumMultArrayPrices(newItems)
      };
    }
    case 'PLUS_CART_ITEM': {
      const beforeCountPlus = [
        ...state.items,
      ];

      const priceOfPayload = geItemPrice(beforeCountPlus, action.payload);
      const afterCountPlus = counterPlus(beforeCountPlus, action.payload);

      return {
        ...state,
        items: afterCountPlus,
        totalCartPrice: getSum(state.totalCartPrice, priceOfPayload)
      }
    }
    case 'MINUS_CART_ITEM': {
      const beforeCountMinus = [
        ...state.items
      ];

      const afterCountMinus = counterMinus(beforeCountMinus, action.payload);
      const priceOfPayload = geItemPrice(beforeCountMinus, action.payload);
      const quantityOfPayload = geItemQuantity(beforeCountMinus, action.payload);

      return {
        ...state,
        items: afterCountMinus,
        totalCartPrice: quantityOfPayload > 1 ? getSubstraction(state.totalCartPrice, priceOfPayload) : state.totalCartPrice
      }
    }
    default:
      return state;
  }
};

export default productsCart;
  