import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Description, UserProfile, Image, Info, Username, Stats, Stat, StatName, Value } from './Profile.styled';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }}) => {
    return <ThemeProvider theme={theme}>
        <UserProfile>
        <Description>
            <Image src={avatar} alt="User avatar" />
            <Username>{ username }</Username>
            <Info>@{ tag }</Info>
            <Info>{ location }</Info>
        </Description>
        <Stats>
            <Stat>
                <StatName>Followers</StatName>
                <Value>{ followers }</Value>
            </Stat>
            <Stat>
                <StatName>Views</StatName>
                <Value>{ views }</Value>
            </Stat>
            <Stat>
                <StatName>Likes</StatName>
                <Value>{ likes }</Value>
            </Stat>
        </Stats>
    </UserProfile>
    </ThemeProvider>   
}
    
Profile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
}