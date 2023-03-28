import React, { useState } from "react";
import CheckBox from "./CheckBox";

const gifts = [
    'CPU 19',
    'RAM 32GB RGB',
    'RGB KeyBoard'
]


const courses = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Javascript'
    },
    {
        id: 3,
        name: 'Reactjs'
    }
]

const Gift = () => {
    const [gift, setGift] = useState();

    const [name, setName] = useState('');

    const [checked, setChecked] = useState();


    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);

        setGift(gifts[index]);
    }

    console.log(checked);

    const handleSubmit = () => {
        console.log('id: ', checked);
    }

    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy Thưởng</button>

            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            type='radio'
                            checked={checked === course.id}
                            onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Register</button>

            <CheckBox />

        </div>
    )
}

export default Gift;