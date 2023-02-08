import React, { FC } from "react";
import { Card } from "./Card.tsx";
import { products, usersCount } from "../App.tsx"
import { makeDayCount, makeProc } from '../utils/DateAndNumbersUtils.tsx'
import * as CardStackStyle from '../styles/CardStackStyle.tsx'

type CardStackProps = {
}

const CardStack: FC<CardStackProps> = ({}: CardStackProps) => {
  return (
    <>
    <div style={CardStackStyle.bigStyle}>
        <div style={CardStackStyle.globalStyle}>
        {
          products.map(p => (
          <Card
            name={p.name}
            daysActive={makeDayCount(p.dateOfAdding)}
            usersActivity={makeProc(p.usersCount, usersCount)}
          />
          ))
        }
        </div>
      </div>
    </>
  );
}

export default CardStack

