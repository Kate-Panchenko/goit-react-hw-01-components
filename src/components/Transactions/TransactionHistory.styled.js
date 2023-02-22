import styled from "styled-components";

export const Transactions = styled.table`
    background-color: ${props => props.theme.bcg};
    width: 100%;
    text-align: center;
    margin-bottom: 32px;
    padding: 10px;
    color: ${props => props.theme.black}; 
`
export const Head = styled.thead`
    background-color: ${props => props.theme.accent};
    border-radius: 4px;
`

export const Title = styled.th`
    padding: 10px;
    border-radius: 4px;
`

export const Data = styled.th`
    padding: 8px;
    border-radius: 4px;
    background-color: ${props => props.theme.white};
`