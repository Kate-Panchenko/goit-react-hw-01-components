import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Transactions, Head, Title, Data } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <ThemeProvider theme={theme}>
        <Transactions>
            <Head>
                <tr>
                    <Title>Type</Title>
                    <Title>Amount</Title>
                    <Title>Currency</Title>
                </tr>
            </Head>
            {items.map(item => (
                <tbody key={item.id}>
                    <tr>
                        <Data>{ item.type }</Data>
                        <Data>{ item.amount }</Data>
                        <Data>{ item.currency }</Data>
                    </tr>
                </tbody>
            ))}
        </Transactions>
    </ThemeProvider>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
};
