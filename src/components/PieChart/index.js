import { Pie } from 'react-chartjs-2'
import {
    Chart,
    ArcElement,
    Legend,
    Title,
    Tooltip,
} from 'chart.js'

Chart.register(
    ArcElement,
    Legend,
    Tooltip,
    Title,
)

const labels = ['Day', 'Week', 'Month']

const options = {
    plugins: {
        legend:{
            position: 'top',
        },
        title:{
            display: true,
            text: "Timestamp Tracker"
        }
    }
}

const data = {
    labels,
    datasets: [
        {
            label: 'Timestamp',
            data: [
                { "timestamp": "2023-01-01T00:00:00Z", "value": 10 },
                { "timestamp": "2023-01-02T00:00:00Z", "value": 12 },
                { "timestamp": "2023-01-03T00:00:00Z", "value": 5 },
            ],
            backgroundColor: ['grey', 'pink', 'green'],
        },
    ]
}

const PieChart = () => (
    <>
        <div className='pie-chart-conatiner'>
            <Pie options={options} data={data} style={{'height':400, 'width':800, 'margin': 'auto'}} />
        </div>
    </>
)

export default PieChart