import styled from "styled-components";

export const UserProfile = styled.div`
    background-color: ${props => props.theme.bcg};
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 375px;
    margin-right: auto;
    margin-left: auto;
`

export const Description = styled.div`
    text-align: center;
    margin-bottom: 32px;
`
export const Image = styled.img`
    width: 140px;
    height: 140px;
    border: 1px solid ${props => props.theme.grey};
    padding: 10px;
    border-radius: 50%;
    margin-bottom: 30px;
    margin-top: 46px;
`

export const Info = styled.p`
    margin-bottom: 12px;
`