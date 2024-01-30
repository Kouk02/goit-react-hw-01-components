import PropTypes from 'prop-types';
import {
  StatisticsWrapper,
  Title,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './statistics.jsx';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;