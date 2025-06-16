import styled from "styled-components";
import { cores } from "../../styles";

type InputGroupProps = {
    maxwidth?: string
}
type RowProps = {
    margintop?: string
}
export const Title = styled.h2`
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 16px;
`
export const Row = styled.div<RowProps>`
    display: flex;
    column-gap: 24px;
    margin-top: ${(props) => props.margintop || '0'};
    align-items: flex-end;
`
export const Group = styled.div<InputGroupProps>`
    flex: auto;
    max-width: ${(props) => props.maxwidth || 'auto'};
    font-weight: 700;
    label {
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
    }
    input {
        width: 100%;
        background-color: ${cores.white};
        height: 32px;
        padding: 0 8px;
        border: 1px solid ${cores.white};
        margin-bottom: 8px;

        &.error {
        border: 1px solid red;
        }
    }
    
`
export const ButtonContainer = styled.div`
    margin-top: 24px;
    button {
        margin-bottom: 8px;
    }
`
export const CheckoutButton = styled.button`
    max-width: 100%;
    width: 100%;
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.pink};
    background-color: ${cores.ligthPink};
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${cores.white};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`
