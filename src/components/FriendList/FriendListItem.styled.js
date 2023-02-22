import styled from "styled-components";

export const Status = styled.span`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 16px;
    
    background-color: ${ props => {
    if (props.value) {
        return "#46B700";
    } else if (props.value === false) {
        return "#D20D0D";
    } else {
        return "#161616";
    }
}}
`
export const Avatar = styled.img`
    margin-right: 24px;
`
export const Name = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    color: ${props => props.theme.black}; 
`