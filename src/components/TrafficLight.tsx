import { useState } from 'react';
import Light from './Light'

const colors = ['#fe242f', '#fea724', '#009a82']; // Traffic Light Colors

const TrafficLight = () => {
    const [lightSelect, setLightSelect] = useState('')

    return (
        <div className="traffic-light">
            {colors.map((color, i) => {
                return <Light color={color} onClick={() => setLightSelect(color)} active={ lightSelect === color ? true : false } />
            })}
        </div>
    )
}

export default TrafficLight
