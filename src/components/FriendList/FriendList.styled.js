import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: ${props => props.theme.bcg};
    padding: 10px;
    margin-bottom: 32px;
`
export const Friend = styled.li`
    display: flex;
    align-items: center;
    padding: 12px;
    background-color: ${props => props.theme.accent};
    border-radius: 10px;
`

