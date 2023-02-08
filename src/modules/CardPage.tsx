import React, { FC } from "react";

import CardStack from "../components/CardStack.tsx";
import * as FooNavStyle from '../styles/FooBarStyle.tsx'
import IPage from "./IPage.tsx"

const CardPage: FC<IPage> = ({}: IPage) => {
    return (
       <>
        <div style={FooNavStyle.NavStyle}>
        <button style={{cursor: 'pointer'}}>Добавить карточку</button>
        </div>
        <CardStack/>  
        <div style={FooNavStyle.FooStyle}>FOO
        </div>
       </> 
    )
}

export default CardPage;