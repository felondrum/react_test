import React, { useEffect, useState, FC } from "react";
import { Product } from "../components/Product.tsx";

type AddCardModalType = {
    isShown: boolean
    onClose(): void
    onAdd(product: Product): void
}

const AddCardModal: FC<AddCardModalType> = 
({ isShown, onClose, onAdd} :AddCardModalType) => {

    const [showState, setShowState] = useState(isShown)

    useEffect(() => {console.log("Modal. Следим за состоянием отображения. Текущий стэйт: " + showState)},
    [showState]) 

    useEffect(() => {setShowState(isShown)}, [isShown])
   
    const onCloseInner = () => {
        setShowState(false)
        onClose()
    }

    const onAddInner = () => {
        onAdd(productStub)
        onCloseInner()
    }
    
    const renderModal = () => {
        console.log("Modal. Рендер, showState=" + showState)
        if (showState) {
            return (
            <>
            <div className="modal" id="modal">
                <h2>Добавить продукт</h2>
                <div className="content">
                    <div>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                </div>
                <div className="action">
                    <button className="toggle-button" onClick={onAddInner}>Добавить</button>
                    <button onClick={() => onCloseInner()}>Закрыть</button>
                </div>
            </div>
            </>)
        }
        return null
    }

    return (renderModal())
}

const productStub: Product = {
    name: "STUB",
    dateOfAdding: "10.02.2022",
    usersCount: 1
  }

export default AddCardModal