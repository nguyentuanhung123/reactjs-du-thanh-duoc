import React from "react";
import './cart.scss'
import styled from "styled-components";

const Container = styled.div`
    max-width: 1500px;
    margin: auto;
    padding-left: 1rem;
    padding-right: 1rem;
`

const Cart = ({ isShow }) => {
    return (
        <Container>
            Cart
            <div className="buttons" style={{ backgroundColor: "yellow", display: isShow ? "block" : "none" }}>
                <div className="button-item">Hello</div>
            </div>
        </Container>
    )
}

export default Cart;