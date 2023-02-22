import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { FriendListItem } from './FriendListItem';
import { List, Friend } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return <ThemeProvider theme={theme}>
        <List>
            {friends.map(friend => (
                <Friend key={friend.id}>
                    <FriendListItem friend={friend} />
                </Friend>
            ))}
        </List>
    </ThemeProvider>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};
