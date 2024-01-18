import React, { useEffect, useRef } from "react";
import {
    Chart,
    LineController,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from "chart.js";

const MypageAll = ({ scoreData, isDataReady }) => {
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        const destroyChart = () => {
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
        };

        const createChart = () => {
            Chart.register(
                LineController,
                CategoryScale,
                LinearScale,
                PointElement,
                LineElement
            );
            chartInstance = new Chart(chartRef.current.getContext("2d"), {
                type: "line",
                data: {
                    labels: ["1학년 1학기", "1학년 2학기", "2학년 1학기", "2학년 2학기", "3학년 1학기", "3학년 2학기"],
                    datasets: [
                        {
                            label: "Data 1",
                            data: scoreData,
                            borderColor: "rgba(255, 99, 132, 1)",
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            pointRadius: 5,
                            pointBackgroundColor: "rgba(255, 99, 132, 1)",
                            pointBorderColor: "rgba(255, 255, 255, 1)",
                            pointHoverRadius: 7,
                            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
                            pointHoverBorderColor: "rgba(255, 255, 255, 1)",
                            fill: false,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            display: true,
                        },
                        y: {
                            beginAtZero: true,
                            min: 0,
                            max: 9,
                            reverse: true,
                        },
                    },
                },
            });
        };

        const initializeChart = () => {
            destroyChart();
            createChart();
        };

        if (isDataReady) {
            initializeChart();
        }

        return () => {
            destroyChart();
        };
    }, [isDataReady, scoreData]);


    return (isDataReady && (
        <>
            <canvas ref={chartRef} />
        </>
    )
    )
};

export default MypageAll;