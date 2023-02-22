import styled from "styled-components";

export const Statistic = styled.section`
    background-color: ${props => props.theme.bcg};
    align-items: center;
    margin-bottom: 32px;
`
export const Title = styled.h2`
    text-align: center;
    padding-top: 12px;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    color: ${props => props.theme.black}; 
` 
export const List = styled.ul`
    display: flex;
    width: 375px;
    text-align: center;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 22px 2px;
    width: 75px;
    color: ${props => props.theme.black}; 
`
export const Label = styled.span`
`