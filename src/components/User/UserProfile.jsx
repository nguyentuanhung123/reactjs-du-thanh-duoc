const UserProfile = ({ firstName, age, address, increaseAge }) => {
    return (
        <div>
            <ul>
                <li>
                    First name is {firstName}
                </li>
                <li>He is {age} years old</li>
                <li>Nation : {address.nation}</li>
                {/* <li>City : {address.city}</li> */}
                <li>Street : {address.city.street}</li>
                <li>House : {address.city.house}</li>
            </ul>
            <button onClick={increaseAge}>Increase Age</button>
        </div>
    )
}

export default UserProfile;