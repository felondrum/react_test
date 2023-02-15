import React, { useEffect, useState, FC, useRef } from "react";
import { Product } from "../components/Product.tsx";
import {containsOnlyNumbers} from "../utils/DateAndNumbersUtils.tsx"
import {context, CardPageManipulateContext } from "../components/Context.tsx"

type AddCardModalType = {
    isShown: boolean
}

const AddCardModal: FC<AddCardModalType> = 
({ isShown } :AddCardModalType) => {

    const { addProduct, openModal } = React.useContext(context) as CardPageManipulateContext

    const [showState, setShowState] = useState(isShown)
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputDateRef = useRef<HTMLInputElement>(null);
    const inputUserRef = useRef<HTMLInputElement>(null);

    useEffect(() => {setShowState(isShown)}, [isShown])
   
    const onCloseInner = () => {
        setShowState(false)
        openModal()
    }

    const onAddInner = () => {
        addProduct(getInputProduct())
        onCloseInner()
    }
    

    const getName = (): string => {
        let name = inputNameRef.current?.value
        if (name === '' || name === undefined) name = 'Не указано'
        return String(name)
    }

    const getDate = (): string => {
        let date = inputDateRef.current?.value
        return String(date)
    }


    const getUsersCount = (): number => {
        let users = inputUserRef.current?.value
        if (!containsOnlyNumbers(users)) users = "0"
        return Number(users)
    }

    const getInputProduct = (): Product => {
        let result: Product = {
            name: getName(),
            dateOfAdding: getDate(),
            usersCount: getUsersCount()
        }
        return result
    }

    const renderModal = () => {
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

export default AddCardModal