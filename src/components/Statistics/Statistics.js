import { theme } from 'components/Layout';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Statistic, Title, List, Item, Label } from './Satistics.styled';
import { Value } from '../Profile/Profile.styled';
import { getRandomHexColor } from 'utils/utils';

export const Statistics = ({title, stats}) => {
    return <ThemeProvider theme={theme}>
        <Statistic>
        <Title>{title}</Title>

        <List>
            {stats.map(stat => (
                <Item key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                    <Label>{ stat.label }</Label>
                    <Value>{ stat.percentage }%</Value>
                </Item>
            ))}
        </List>
    </Statistic>
    </ThemeProvider>
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}
