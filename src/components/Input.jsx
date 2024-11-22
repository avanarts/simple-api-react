import Picture from './Picture'
import { useState } from 'react'

export default function Input() {
const [dateValue, setDateValue] = useState('')
const [selectedDate, setSelectedDate] = useState(null)

function handleDateValue(e) {
    setDateValue(e.target.value)
}

function handleClick() {
    setSelectedDate(dateValue)
}

return (
    <>
    <h1>NASA Photo of the Day</h1>
        <div className="date-picker">
            <h2>Please Choose Date</h2>
                <input 
                type="date" 
                id="date"
                onChange={handleDateValue}></input> 
                <button onClick={handleClick} className='submit-btn'>Submit</button>
                {<Picture dateValue={selectedDate} />}
        </div>
    </>
)
}