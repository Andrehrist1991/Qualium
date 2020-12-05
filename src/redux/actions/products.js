export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items,
});

export const removeProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    payload: id
});

export const toggleCartFlag = (id) => ({
    type: 'TOGGLE_IN_CART_FLAG',
    payload: id
});

export const updateProduct = (obj) => ({
    type: 'UPDATE_PRODUCT',
    payload: obj,
});

export const createProduct = (obj) => ({
    type: 'CREATE_PRODUCT',
    payload: obj,
});

