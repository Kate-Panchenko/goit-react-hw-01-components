import PropTypes from 'prop-types';


export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes }}) => {
    return <div>
        <div>
            <img src={avatar} alt="User avatar" />
            <p>{ username }</p>
            <p>@{ tag }</p>
            <p>{ location }</p>
        </div>
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
    </div>
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
    }),
}