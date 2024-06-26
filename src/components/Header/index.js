import {useState} from 'react'
import './index.css'

const Header = () => {
    const [value, setValue] = useState('')

    const options = [
        {label: 'Bar Chart', value: 1},
        {label: 'Pie Chart', value: 2},
        {label: 'Line Chart', value: 3},
    ]

    const onSelectOption = event => {
        setValue(event.target.value)
    }
    return (
        <nav className="nav-header">
            <div className="nav-content">
            <h1 className="nav-link">Timestamp Tracker</h1>
            <select className="nav-menu" onChange={onSelectOption}>
                {options.map(option => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <p>{value}</p>
            </div>
        </nav>
    )
}
export default Header