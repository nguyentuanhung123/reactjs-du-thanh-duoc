import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const initialAddress = () => {
    console.log('initialAddress');
    return {
        nation: "Việt Nam",
        city: {
            street: "200 Điện Biên Phủ , Đà Nẵng",
            house: "Building"
        }
    }
}

// const initialAddress = {
//     nation: "Việt Nam",
//     city: {
//         street: "200 Điện Biên Phủ , Đà Nẵng",
//         house: "Building"
//     }
// }

//Thường dùng gọi API
const getAddress = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                nation: 'USA',
                city: {
                    street: '100, Nicolas, NY',
                    house: 'Building'
                }
            })
        }, 3000)
    })
}
const profile = {}

const User = () => {
    const [firstName, setFirstName] = useState("Hưng");
    const [age, setAge] = useState(24);
    const [address, setAddress] = useState(initialAddress)
    const [, forceRerender] = useState(0);

    const increaseAge = () => {
        setAge((prevState) => prevState + 1);
    }

    const profile = {};

    const rerender = () => {
        forceRerender((prevState) => prevState + 1)
    }

    // const newAddress = { ...address };
    // console.log("New address : ", newAddress);
    // console.log(newAddress === address);

    // const changeCity = () => {
    //     setAddress(
    //         prevAddress => ({ ...prevAddress, city: "Da Nang" })
    //         // {
    //         //     nation: 'Nhật Bản',
    //         //     city: "Tokyo"
    //         // }
    //     )
    // }

    const changeStreet = () => {
        setAddress((prevAddress) => {
            const newCity = { ...prevAddress.city }//shalow copy city trong address
            newCity.street = '100 Điện Biên Phủ , Đà Nẵng'
            return {
                ...prevAddress,
                city: newCity,
                nation: "Buôn Ma Thuột"
            }
        })
    }

    const changeNation = () => {
        setAddress((prevAddress) => {
            // const newNation = { ...prevAddress.nation }
            // console.log("New nation : ", newNation);
            return { ...prevAddress, nation: "Hồ Chí Minh" }
        })
    }


    console.log("Re-render");

    //Giống componentDidUpdate, effect function chạy lại
    //mỗi khi component re-render

    useEffect(() => {
        console.log("useEffect giống componentDidUpdate");
        console.log(profile);
        getAddress().then((res) => {
            setAddress(prevAddress => {
                const newAddress = { ...prevAddress }
                newAddress.city = res.city
                return newAddress
            }
            )
        })

        //cleanup function
        return () => {
            console.log('Huy goi API');
        }
    }, [])

    useEffect(() => {
        console.log('age', age);
        return () => {
            console.log('Clean Age');//chạy trước khi log cái age ở trên
        }
    }, [age])

    return (
        <>
            <div>User Funtional Component</div>
            <UserProfile firstName={firstName} age={age} address={address} increaseAge={increaseAge} />
            <button onClick={rerender}>Rerender</button>
            {/* <button onClick={changeCity}>Change City</button> */}
            <button onClick={changeStreet}>Change Street</button>
            <button onClick={changeNation}>Change Nation</button>
        </>
    )
}

export default User;