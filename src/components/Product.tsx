import React from "react";

export type Product = {
    name: string,
    dateOfAdding: string,
    usersCount: number
}


export type Products = {
    products: Product[]
}