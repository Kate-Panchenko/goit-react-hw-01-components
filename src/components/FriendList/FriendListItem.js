import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Status, Avatar ,Name } from './FriendListItem.styled';


export const FriendListItem = ({
    friend: { avatar, name, isOnline }
}) => {
    return <ThemeProvider theme={theme}>
        <>
            <Status value={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{ name }</Name>
        </>
    </ThemeProvider>
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};

