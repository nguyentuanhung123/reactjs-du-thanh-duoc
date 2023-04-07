import { useState } from "react";

const SelectAllCheckbox = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: 'Jeevan'
        },
        {
            id: 2,
            name: 'Manish'
        },
        {
            id: 3,
            name: 'Prince'
        },
        {
            id: 4,
            name: 'Arti'
        }
    ])

    const renderFilter = () => {
        return users.map((user) => {
            if (user.isChecked) {
                return <span>{user.name} X</span>
            } else {
                return null
            }
        })
    }

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'allSelect') {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked }
            })
            setUsers(tempUser)
        } else {
            let tempUser = users.map((user) => user.name === name ? { ...user, isChecked: checked } : { ...user });
            setUsers(tempUser)
        }
    }

    return (
        <div className="container my-4" >
            <form className="form">
                <h3>Select Users</h3>
                <div className="filter">
                    {
                        renderFilter()
                    }
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="allSelect"
                        checked={(users.filter((user) => user?.isChecked !== true)).length < 1}
                        onChange={(e) => handleChange(e)} />
                    <label className="form-check-lable ms-2">All Select</label>
                </div>
                {
                    users.map((user) => {
                        return (
                            <div className="form-check" key={user.id}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={(e) => handleChange(e)} />
                                <label className="form-check-lable ms-2">{user.name}</label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    )
}

export default SelectAllCheckbox;