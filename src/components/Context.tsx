import React from "react";
import { Product } from "./Product";


export interface CardPageManipulateContext {
    addProduct: (product: Product) => void;
    openModal: () => void;
    deleteProduct: (deleteIndex: string) => void;

}

export const context = React.createContext<CardPageManipulateContext | null>(null);