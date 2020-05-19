export const addItemToCart = (items, itemToAdd) => {
    const existingItem = items.find(item => item.id === itemToAdd.id);
    if (existingItem) {
        return items.map(item => item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
    } else {
        return [...items, { ...itemToAdd, quantity: 1 }]
    }
};

export const decreaseCartItemQuantity = (items, itemToDecrease) => {
    const existingItem = items.find(item => item.id === itemToDecrease.id);
    if (existingItem.quantity === 1) {

        return items.filter(item => item.id !== itemToDecrease.id);
        
    } else {
        return items.map(item => item.id === itemToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)
    }
};