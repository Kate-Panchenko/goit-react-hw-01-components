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
    padding-bottom: 32px;
`

export const Description = styled.div`
    text-align: center;
    margin-bottom: 20px;
`
export const Image = styled.img`
    width: 140px;
    height: 140px;
    border: 1px solid ${props => props.theme.grey};
    padding: 10px;
    border-radius: 50%;
    margin: 46px auto 30px auto;
`

export const Info = styled.p`
    margin-bottom: 12px;
    font-size: 16px;
    line-height: 1.19;
    color: ${props => props.theme.grey};
`
export const Username = styled.p`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    margin-bottom: 12px;
    color: ${props => props.theme.black}; 
`

export const Stats = styled.ul`
    display: flex;
    justify-content: center;
    gap: 72px;
    font-size: 12px;
    line-height: 1.17;
    padding: 14px 32px;
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.accent};
    border-radius: 10px;
`
export const Stat = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: ${props => props.theme.black}; 
`
export const StatName = styled.span`
`

export const StatValue = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.25;
`