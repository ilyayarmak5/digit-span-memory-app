const StatusItem = ({ value, text }) => {
  return (
    <div className="status-item">
      <h1>{text}</h1>
      <h1>{value}</h1>
    </div>
  );
};

export default StatusItem;
