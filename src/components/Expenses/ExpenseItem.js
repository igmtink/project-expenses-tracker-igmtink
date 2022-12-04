import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const usdCurrency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card className="py-3 px-6 bg-neutral-900 border-l-2 border-blue-500">
      <div className="flex items-center justify-between">
        <div className="grid gap-1">
          <h1>{props.title}</h1>
          <div className="flex gap-2">
            <span className="text-sm text-neutral-500">
              {props.date.toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="text-sm text-neutral-500">●</span>
            <span className="text-sm text-neutral-500">{props.time}</span>
          </div>
        </div>

        <span className="font-bold text-blue-500">
          +{usdCurrency.format(props.amount)}
        </span>
      </div>
    </Card>
  );
};

export default ExpenseItem;
