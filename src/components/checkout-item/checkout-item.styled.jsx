import styled, { css } from "styled-components";

const columnWidthStyle = css`width: 23%;`;

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgray;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageColumn = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }`;

export const RemoveButton = styled.div`
    cursor: pointer;
    color: red;
`;
export const NameColumn = styled.div`
    ${columnWidthStyle}
`;

export const QuantityColumn = styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    .plus, .minus {
        
    }
    ${columnWidthStyle}
`;

export const ChangeQuantity = styled.div`
    margin: 8px;
    padding: 0 8px;
    font-size: 25px;
    box-shadow: 0px -1px 10px -5px #4d4d4d;
    border-radius: 50%;
    cursor: pointer;`
    ;

export const PriceColumn = styled.div`${columnWidthStyle}`;
