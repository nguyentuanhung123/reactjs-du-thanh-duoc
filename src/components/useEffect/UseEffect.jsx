import React, { useState, useEffect } from "react";


const UseEffect = () => {

    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(1);

    console.log('Count top useEffect : ', count);
    console.log('Calculation top useEffect : ', calculation);

    useEffect(() => {
        setCalculation(() => count * 2);//Khi nao state moi khac state cu thi man hinh moi re-render
        console.log('Count on useEffect : ', count);
        console.log('Calculation on useEffect : ', calculation);
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

export default UseEffect;