import styled from "styled-components";

export const DropdownContainer = styled.div`
    position: absolute;
    width: 340px;
    height: 540px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border: 1px solid black;
    background-color: whitesmoke;
    top: 80px;
    right: 60px;
    z-index: 5;`;

export const CartItemsContainer = styled.div`height: 100%;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        `;

export const NoItemText = styled.h6`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: auto;`
    ;

// .cartDropdown {
    

//     .cart-items {
        
//     }

//     button {
//         margin-top: auto;
//     }

//     .no-item-text {
        
//     }
// }

// .cartDropdown::-webkit-scrollbar {
//     width: 6px;
//     background-color: #F5F5F5;
// }