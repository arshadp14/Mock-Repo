import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import AdminDashboardService from "../../../services/admin.service";

const LineGraph = () => {

    const [chartData, setChartData] = useState({});
   




    const chart = () => {
        let categoryCount = [];
        let categoryName = [];

        AdminDashboardService.categorywiseNewsCount()
            .then((response) => {
                setChartData(response.data);
                console.log(response.data);
                for (const dataObj of response.data) {
                    categoryCount.push(parseInt(dataObj.count));
                    categoryName.push(JSON.stringify(dataObj.category_name));
                }

                setChartData({
                    labels: categoryName,
                    datasets: [
                        {
                            label: 'News Categories',
                            data: categoryCount,
                            borderColor: ['rgba(194,152,28,0.5)'],
                            backgroundColor: ['rgba(194,152,28,0.5)'],
                            borderWidth: 2
                        }
                    ]

                })
                console.log(categoryName + "categoryCount array");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    




const options = {
    title: {
        display: true,
        text: "News-Analysis",
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    min: 0,
                    max: 8,
                    stepSize: 2,
                },
                // gridLines: {
                //     display: false
                // }
            },
        ],
        xAxes: [{
            // gridLines: {
            //     display: false
            // }
        }
        ]
    },
};

useEffect(() => {
    chart()
}, []);

return (
    <div className="Graph">

        <Line data={chartData} options={options} />

    </div>

)

};



export default LineGraph;