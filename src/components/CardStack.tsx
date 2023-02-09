import React, { FC, useState } from "react";
import { Card } from "./Card.tsx";
import { makeDayCount, makeProc } from '../utils/DateAndNumbersUtils.tsx'
import * as CardStackStyle from '../styles/CardStackStyle.tsx'
import { Product } from "../components/Product.tsx"

type CardStackProps = {
  products: Product[],
  usersCount: number
}

const CardStack: FC<CardStackProps> = ({products, usersCount}: CardStackProps) => {
  const [prodState, setProductsState] = useState(products)
  React.useEffect(() => {"CardStack was mount"}, []) //doesn't work???
  React.useEffect(() => {"CardStack changed!"}) //doesn't work???
  React.useEffect(() => {console.log("CardStack state is changed!")}, [prodState]) 
  return (
    <>
    <div style={CardStackStyle.bigStyle}>
        <div style={CardStackStyle.globalStyle}>
        {
          products.map((p, index) => (
          <Card 
            key={index + p.name}
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

