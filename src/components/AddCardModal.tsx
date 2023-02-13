import React, { useEffect, useState, FC, useRef } from "react";
import { Product } from "../components/Product.tsx";

type AddCardModalType = {
    isShown: boolean
    onClose(): void
    onAdd(product: Product): void
}

const AddCardModal: FC<AddCardModalType> = 
({ isShown, onClose, onAdd} :AddCardModalType) => {

    const [showState, setShowState] = useState(isShown)
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputDateRef = useRef<HTMLInputElement>(null);
    const inputUserRef = useRef<HTMLInputElement>(null);

    useEffect(() => {console.log("Modal. Следим за состоянием отображения. Текущий стэйт: " + showState)},
    [showState]) 

    useEffect(() => {setShowState(isShown)}, [isShown])
   
    const onCloseInner = () => {
        setShowState(false)
        onClose()
    }

    const onAddInner = () => {
        onAdd(getInputProduct())
        onCloseInner()
    }
    

    const getName = (): string => {
        let name = inputNameRef.current?.value
        console.log(name)
        return String(name)
    }

    const getDate = (): string => {
        let date = inputDateRef.current?.value
        console.log(date)
        return String(date)
    }


    const getUsersCount = (): number => {
        let users = inputUserRef.current?.value
        console.log(users)
        return Number(users)
    }

    const getInputProduct = (): Product => {
        let result: Product = {
            name: getName(),
            dateOfAdding: getDate(),
            usersCount: getUsersCount()
        }
        console.log("product name: " + result.name + "; product date: " + result.dateOfAdding + "; product users: " + result.usersCount)
        return result
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
                        <input ref={inputNameRef}></input>
                        <input ref={inputDateRef}></input>
                        <input ref={inputUserRef}></input>
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