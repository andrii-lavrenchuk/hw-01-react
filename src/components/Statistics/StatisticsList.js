import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";

const StatisticsList = ({ stats }) => (
  <ul>
    {stats.map(({ id, label, percentage }) => (
      <StatisticsItem key={id} label={label} percentage={percentage} />
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
};

export default StatisticsList;
