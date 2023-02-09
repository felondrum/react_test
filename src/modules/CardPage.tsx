import React, { FC, useEffect, useState } from "react";

import CardStack from "../components/CardStack.tsx";
import * as FooNavStyle from '../styles/FooBarStyle.tsx'
import IPage from "./IPage.tsx"
import { products, usersCount } from "../App.tsx"
import AddCardModal from "../components/AddCardModal.tsx";

const CardPage: FC<IPage> = ({}: IPage) => {

    const [productsState, setProductsState] = useState(products)
    const [modalIsShown, setModalIsShown] = useState(false)

    const addProduct = (newProduct) => {
        let newProducts = [...productsState, newProduct]
        setProductsState(newProducts)
    }

    const openModal = () => {
        let modalTmp = !modalIsShown
        console.log("CardPage. Изменили статутс modalShown. Было:" + modalIsShown)
        setModalIsShown(modalTmp)
    }

    useEffect(() => { console.log("CardPage some changes!") })
    useEffect(() => { console.log("CardPage was mounted") }, [] )
    useEffect(() => { return () => {console.log("CardPage will unmounted")} }, [] )
    useEffect(() => {console.log("CardPage. ModalIsShown: " + modalIsShown)}, [modalIsShown])

    return (
       <>
        <div style={FooNavStyle.NavStyle}>
            <button 
             style={{cursor: 'pointer'}}
             onClick={() => openModal()}
              >Добавить карточку</button>
        </div>
        <AddCardModal
            onAdd={addProduct}
            onClose={openModal}
            isShown={modalIsShown}
        /> 
        <CardStack products={productsState} usersCount={usersCount}/> 
        <div style={FooNavStyle.FooStyle}>FOO</div>
       </> 
    )
}


export default CardPage;