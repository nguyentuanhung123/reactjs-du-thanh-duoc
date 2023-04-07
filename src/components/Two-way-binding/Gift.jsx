import React, { useState } from "react";
import CheckBox from "./CheckBox";
import Radio from "./Radio";

const gifts = [
    'CPU 19',
    'RAM 32GB RGB',
    'RGB KeyBoard'
]


const Gift = () => {
    const [gift, setGift] = useState();

    const [name, setName] = useState('');

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }


    return (
        <div style={{ padding: 32 }}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy Thưởng</button>

            <Radio />

            <CheckBox />

        </div>
    )
}

export default Gift;