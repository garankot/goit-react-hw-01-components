import PropTypes from 'prop-types';

import {
  StatsSection,
  StatsTitle,
  StatsData,
  StatsList,
  StatsLabel,
  StatsPercent,
} from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}
      <StatsData>
        {stats.map(stat => (
          <StatsList key={stat.id}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercent>{stat.percentage}%</StatsPercent>
          </StatsList>
        ))}
      </StatsData>
    </StatsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
