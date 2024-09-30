type BarProps = {
  percentage: number;
};

function HumidityBar({ percentage }: BarProps) {
  return (
    <div className="bar-container">
      <div className="bar-scales">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className="whitebar">
        <div className="fill-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <span style={{ alignSelf: "flex-end" }}>%</span>
    </div>
  );
}

export default HumidityBar;
