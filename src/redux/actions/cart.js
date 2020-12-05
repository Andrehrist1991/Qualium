export const setProductsCart = (items) => ({
    type: 'SET_PRODUCTS_CART',
    payload: items,
});

export const addProductCart = (obj) => ({
    type: 'ADD_PRODUCT_CART',
    payload: obj,
});

export const removeProductCart = (id) => ({
    type: 'REMOVE_PRODUCT_CART',
    payload: id,
});

export const updateCartProduct = (obj) => ({
    type: 'UPDATE_CART_PRODUCT',
    payload: obj,
});

export const onPlusCartItem = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});

export const onMinusCartItem = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});

