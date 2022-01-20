import PropTypes from 'prop-types';

import {
  StatsSection,
  StatsTitle,
  StatsData,
  StatsList,
  StatsName,
  StatsNumber,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsData>
        {stats.map(stat => (
          <StatsList key={stat.id}>
            <StatsName>{stat.label}</StatsName>
            <StatsNumber>{stat.percentage}%</StatsNumber>
          </StatsList>
        ))}
      </StatsData>
    </StatsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.array.isRequired,
  //   stats: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       label: PropTypes.string.isRequired,
  //       percentage: PropTypes.number.isRequired,
  //     })
  //   ),
};

export default Statistics;
