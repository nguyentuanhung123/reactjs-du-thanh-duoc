import React, { useState } from "react";
import CheckBox from "../Two-way-binding/CheckBox";

const Product = () => {

    const [checkboxs, setCheckboxs] = useState([
        {
            id: 1,
            name: 'Apple',
            inStock: 1920,
            check: false
        },
        {
            id: 2,
            name: 'Samsung',
            inStock: 1980,
            check: true
        },
        {
            id: 3,
            name: 'Vivo',
            inStock: 2000,
            check: false
        },
        {
            id: 4,
            name: 'Laptop',
            inStock: 2013,
            check: false
        }
    ])

    const handleChangeboxs = (id) => {
        setCheckboxs(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    return { ...item, check: !item.check }
                } else {
                    return { ...item }
                }
            })
        })
    }


    const renderCheckboxs = () => {
        return checkboxs.map(item => {
            return (
                <div className="product" key={item.id}>
                    <div className="productInput" onClick={() => handleChangeboxs(item.id)}>
                        {/* <input type="checkbox" id={item.id} /> */}
                        {
                            item.check && (
                                <>
                                    <div className="productInputBefore"></div>
                                    <div className="productInputAfter">v</div>
                                </>
                            )
                        }
                    </div>
                    <label htmlFor="apple">
                        {item.name}
                        <span>{item.inStock}</span>
                    </label>
                </div>
            )
        })
    }

    const renderFilter = () => {
        return checkboxs.map(item => {
            if (item.check) {
                return <span
                    onClick={() => handleChangeboxs(item.id)}
                    className="option"
                    key={item.id}>
                    {item.name} X
                </span>
            }
            else {
                return null;
            }
        })
    }

    return (
        <>
            <div className="filters">
                {
                    renderFilter()
                }
                {
                    checkboxs.some((item) => item.check) ? null : <span style={{ color: 'white' }}>Empty</span>
                }
            </div>
            <div className="products">
                {
                    renderCheckboxs()
                }
            </div>
        </>
    )
}

export default Product;