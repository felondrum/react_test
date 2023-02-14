import React, { FC, useEffect, useState } from "react";

import CardStack from "../components/CardStack.tsx";
import * as FooNavStyle from '../styles/FooBarStyle.tsx'
import IPage from "./IPage.tsx"
import { products, usersCount, productsTp } from "../App.tsx"
import AddCardModal from "../components/AddCardModal.tsx";
import { Product, Products } from "../components/Product.js";

const CardPage: FC<IPage> = ({}: IPage) => {
    const [productsState, setProductsState] = useState<Product[]>([])
    const [modalIsShown, setModalIsShown] = useState(false)

    const addProduct = (newProduct) => {
        let newProducts = [...productsState, newProduct]
        setProductsState(newProducts)
    }

    const addProducts = (newProducts) => {
        console.log("Alarm" + newProducts)
        setProductsState(newProducts)
    }

    const deleteProduct = (deleteIndex) => {
        const productNewState = productsState
        setProductsState(filerProducts(deleteIndex, productNewState))
    }

    const openModal = () => {
        let modalTmp = !modalIsShown
        console.log("CardPage. Изменили статутс modalShown. Было:" + modalIsShown)
        setModalIsShown(modalTmp)
    }

    useEffect(() => { console.log("CardPage some changes!") })
    useEffect(() => { 

        // async () => {
            console.log("Fetch start")
            const requestParam = 
                {
                    param: "1"
                }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestParam)
            }
            
            const url = "http://localhost:8787/react/products/get"
            const res =  getProductsApi(url, requestOptions).then((r: Products | any) => {
                console.log(r)
                addProducts(r.products)
            })
            // console.log(res)
            // addProducts(res.products)
        // }

    }, [] )
    useEffect(() => { return () => {console.log("CardPage will unmounted")} }, [] )
    useEffect(() => {console.log("CardPage. ModalIsShown: " + modalIsShown)}, [modalIsShown])

    return (
       <>
        <div style={FooNavStyle.NavStyle}>
            <button 
             style={{cursor: 'pointer'}}
             onClick={openModal}
              >Добавить карточку</button>
        </div>
        <AddCardModal
            onAdd={addProduct}
            onClose={openModal}
            isShown={modalIsShown}
        /> 
        <CardStack products={productsState} usersCount={usersCount} onDelete={deleteProduct}/> 
        <div style={FooNavStyle.FooStyle}>FOO</div>
       </> 
    )
}


function filerProducts(deleteIndex: string, arr: Product[]): Product[] {
    var res = arr.filter(ell => {return ell.name != deleteIndex})
    return res
}

async function getProductsApi<Products>(url: string, rqParams: {}): Promise<Products> {
     return await fetch(url, rqParams)
    .then(res => {
        if (!res.ok) {
            throw new Error(res.statusText)
        }
        return res.json() as Promise<Products>
    })
}


export default CardPage;