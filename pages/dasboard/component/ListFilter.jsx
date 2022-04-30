import Router from "next/router";
import React from "react";
import getAllCategory from "../../../utils/fetcherCategory";
import Filter from "./Filter";


export default function ListFIlter() {

    const {category, isLoading, isError} = getAllCategory()

    if (isLoading) return (
        <div className="h-screen w-screen flex justify-center items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </ div>
    )

    if (isError) return <p className="h-screen w-screen flex justify-center items-center">{isError}</p>

    return(
        <div className="z-50 fixed max-w-md max-h-md top-24 bg-white border p-4 rounded-lg">
            
            {category.result.map((item) => {
                <Filter item={item} key={item.category}  />
            })}
        </div>
    )
}