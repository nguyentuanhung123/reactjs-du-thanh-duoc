import React, { useState } from "react";

const Radio = () => {
    const [checked, setChecked] = useState();

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

    console.log('Check on Radio Component : ', checked);

    const handleSubmit = () => {
        console.log('id: ', checked);
    }


    return (
        <div>
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
        </div>
    )
}

export default Radio;