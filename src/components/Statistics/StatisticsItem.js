const StatisticsItem = ({ id, label, percentage }) => (
  <li key={id}>
    <span>{label}</span>
    <span>{percentage}%</span>
  </li>
);

export default StatisticsItem;
