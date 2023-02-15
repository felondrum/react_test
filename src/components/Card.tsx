import React, { FC } from "react";
import * as CardStyle from '../styles/CardStyle.tsx'
import {context, CardPageManipulateContext } from "../components/Context.tsx"

export type CardProps = {
    name: string;
    daysActive: string;
    usersActivity: string;
    deleteIndex: string;
}

export const Card: FC<CardProps> = ({
    name,
    daysActive,
    usersActivity,
    deleteIndex
}: CardProps) => {
    
    const { deleteProduct } = React.useContext(context) as CardPageManipulateContext

    const onDeleteClick = () => {
        deleteProduct(deleteIndex)
    }

    return (
        <div style={ CardStyle.cardStyle }>
            <h2 style={CardStyle.hStyleCard}>Название: { name }</h2>
            <h3 style={CardStyle.hStyleCard}>Активен дней: { daysActive } </h3>
            <h3 style={CardStyle.hStyleCard}>Используют { usersActivity } пользователей</h3>
            <button onClick={onDeleteClick}>X</button>
        </div>
    )
}

