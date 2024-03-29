import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    max={totalMaxValue}
                />
            ))}
        </div>
    );
};

export default Chart;
