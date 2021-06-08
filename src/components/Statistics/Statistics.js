import PropTypes from "prop-types";
import Section from "./Section";
import StatisticsList from "./StatisticsList";

const Statistics = ({ title = "Default title", stats }) => (
  <Section>
    {title && <h2>{title}</h2>}
    <StatisticsList stats={stats} />
  </Section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
