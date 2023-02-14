import React, { FC } from "react";
import * as CardStyle from '../styles/CardStyle.tsx'
import { Product } from "./Product.js";

export type CardProps = {
    name: string;
    daysActive: string;
    usersActivity: string;
    deleteIndex: string;
    onDelete(deleteIndex: string)
}

export const Card: FC<CardProps> = ({
    name,
    daysActive,
    usersActivity,
    deleteIndex,
    onDelete
}: CardProps) => {
    
    const onDeleteClick = () => {
        onDelete(deleteIndex)
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

