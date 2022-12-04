const ChartBar = (props) => {
  let barFillHeight = "0%";

  // !Get the percentage of total sum expenses amount
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="grid gap-3">
      <div className="h-40 rotate-180">
        <div
          className="w-14 bg-blue-500 rounded-md text-center grid"
          style={{ height: barFillHeight }}
        >
          <span className="rotate-180 self-start">{barFillHeight}</span>
        </div>
      </div>
      <span className="text-center">{props.month}</span>
    </div>
  );
};

export default ChartBar;
