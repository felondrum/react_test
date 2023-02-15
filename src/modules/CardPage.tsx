import React, { FC, useEffect, useState } from "react";

import CardStack from "../components/CardStack.tsx";
import * as FooNavStyle from '../styles/FooBarStyle.tsx'
import IPage from "./IPage.tsx"
import { usersCount } from "../App.tsx"
import AddCardModal from "../components/AddCardModal.tsx";
import { Product, Products } from "../components/Product.js";
import { CardPageManipulateContext, context } from "../components/Context.tsx"

const CardPage: FC<IPage | CardPageManipulateContext> = ({}: IPage) => {
    const [productsState, setProductsState] = useState<Product[]>([])
    const [modalIsShown, setModalIsShown] = useState(false)

    const addProduct = (newProduct: Product) => {
        let newProducts = [...productsState, newProduct]
        addProducts(newProducts)
    }

    const addProducts = (newProducts) => {
        setProductsState(newProducts)
    }

    const deleteProduct = (deleteIndex: string) => {
        const productNewState = productsState
        setProductsState(filerProducts(deleteIndex, productNewState))
    }

    const openModal = () => {
        let modalTmp = !modalIsShown
        setModalIsShown(modalTmp)
    }

    useEffect(() => { 
            const requestParam = 
                {
                    param: Math.round(Math.random() * 100)
                }
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestParam)
            }
            
            const url = "http://localhost:8787/react/products/get"
            const res =  getProductsApi(url, requestOptions).then((r: Products | any) => {
                addProducts(r.products)
            })

    }, [] )

    return (
       <>
       <context.Provider value={{addProduct, openModal, deleteProduct}}>
            <div style={FooNavStyle.NavStyle}>
                <button 
                style={{cursor: 'pointer'}}
                onClick={openModal}
                >Добавить карточку</button>
            </div>
            <AddCardModal
                isShown={modalIsShown}
            /> 
            <CardStack products={productsState} usersCount={usersCount}/> 
            <div style={FooNavStyle.FooStyle}>FOO</div>
        </context.Provider>
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