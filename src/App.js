import Header from './components/Header'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import LineChart from './components/LineChart'

const App = () => (
  <>
    <Header/>
    <div>
      <BarChart />
      <PieChart />
      <LineChart />
    </div>
  </>
)

export default App