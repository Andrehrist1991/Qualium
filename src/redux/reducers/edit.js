const initialState = {
    id: "",
    title: "",
    description: "",
    price: ""
}

const editItem = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCT_FOR_EDIT':
        return {
          ...state,
          id: action.payload.id,
          title: action.payload.title,
          description: action.payload.description,
          price: action.payload.price,
        };
      default:
        return state;
    }
  };
  
  export default editItem;