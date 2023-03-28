import React, { useState } from "react";

const hobbies = [
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



const CheckBox = () => {

    const [checked, setChecked] = useState([]);

    console.log(checked);

    const handleCheck = (name) => {
        // setChecked(prev => {
        //     const isChecked = checked.includes(id)
        //     if (isChecked) {
        //         return checked.filter(item => item !== id)
        //     } else {
        //         return [...prev, id]
        //     }
        // })
        setChecked((prev) => {
            const isChecked = checked.includes(name);
            if (isChecked) {
                return checked.filter(item => item !== name)
            } else {
                return [...prev, name]
            }
        })
    }

    const handleSubmit = () => {
        console.log('id: ', checked);
    }

    return (
        <>
            {hobbies.map((hobby) => {
                return (
                    <div key={hobby.id}>
                        <input
                            type='checkbox'
                            name={hobby.name}
                            checked={checked.includes(hobby.name)}
                            onChange={() => handleCheck(hobby.name)}
                        />
                        {hobby.name}
                    </div>
                )
            })}
            <button onClick={handleSubmit}>Register</button>
        </>
    )
}

export default CheckBox;