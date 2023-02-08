import React, { FC } from "react";
import * as CardStyle from '../styles/CardStyle.tsx'

export type CardProps = {
    name: string;
    daysActive: string;
    usersActivity: string;
}

export const Card: FC<CardProps> = ({
    name,
    daysActive,
    usersActivity
}: CardProps) => {

    return (
        <div style={ CardStyle.cardStyle }>
            <h2 style={CardStyle.hStyleCard}>Название: { name }</h2>
            <h3 style={CardStyle.hStyleCard}>Активен дней: { daysActive } </h3>
            <h3 style={CardStyle.hStyleCard}>Используют { usersActivity } пользователей</h3>
        </div>
    )
}

