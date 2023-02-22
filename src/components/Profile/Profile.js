import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Description, UserProfile, Image, Info } from './Profile.styled';

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
            <Info>{ username }</Info>
            <Info>@{ tag }</Info>
            <p>{ location }</p>
        </Description>
        <ul>
            <li>
                <span>Followers</span>
                <span>{ followers }</span>
            </li>
            <li>
                <span>Views</span>
                <span>{ views }</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{ likes }</span>
            </li>
        </ul>
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