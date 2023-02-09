import React, { FC } from "react";
import IPage from "./IPage.tsx"
import * as Task from "../utils.tsx"
import * as CustomStyles from "../styles/FooBarStyle.tsx"

const HomePage: FC<IPage> = ({}: IPage) => {
    return (
        <>
        <div style={CustomStyles.MainPageBarStyle}>
            <h1>Чистая страница (почти)</h1>
        </div>  
        <div>{Task.returnTasks()}</div>
        </>
    )
}

export default HomePage