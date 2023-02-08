import React, { FC, useEffect, useState } from "react";

import CardStack, { addProductOuter } from "../components/CardStack.tsx";
import * as FooNavStyle from '../styles/FooBarStyle.tsx'
import IPage from "./IPage.tsx"
import { products, usersCount } from "../App.tsx"

const CardPage: FC<IPage> = ({}: IPage) => {

    const [productsState, setProductsState] = useState(products)

    const addProduct = (newProduct) => {
        let newProducts = [...productsState, newProduct]
        setProductsState(newProducts)
    }

    useEffect(() => {console.log(productsState)}, [productsState])

    return (
       <>
        <div style={FooNavStyle.NavStyle}>
            <button style={{cursor: 'pointer'}} onClick={() => addProduct(productStub)}>Добавить карточку</button>
        </div>
        <CardStack products={productsState} usersCount={usersCount}/>  
        <div style={FooNavStyle.FooStyle}>FOO</div>
       </> 
    )
}

const productStub = {
    name: "STUB",
    dateOfAdding: "10.02.2022",
    usersCount: 1
  }

export default CardPage;