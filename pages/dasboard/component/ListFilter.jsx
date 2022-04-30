import Router from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import getAllCategory from "../../../utils/fetcherCategory";


export default function ListFilter({setArrayCategory, arrayCategory}) {


    const {category, isLoading, isError} = getAllCategory()

    if (isLoading) return (
        <div className="z-50 fixed max-w-md max-h-md top-24 bg-white border p-4 rounded-lg">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </ div>
    )

    if (isError) return <p className="z-50 fixed max-w-md max-h-md top-24 bg-white border p-4 rounded-lg">{isError}</p>


    return(
        <div className="z-50 fixed max-w-md max-h-md top-24 bg-white border p-4 rounded-lg">
            {category.result.map((item) => {

                return (
                    <div className="form-check" key={item.category} >
                        <input 
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 
                            checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat 
                            bg-center bg-contain float-left mr-2 cursor-pointer" 
                            type="checkbox" 
                            value={`${item.category}`}
                            id={`checkbox${item.category}`} 
                            name="filterCategory"
                            onChange={(e)=>{ setArrayCategory(arrayCategory.concat(e.target.value))}}
                        />
                        <label className="form-check-label font-medium inline-block text-gray-800" htmlFor={`checkbox${item.category}`}>
                            {item.category}
                        </label>
                    </div>
                )
            })}
        </div>
    )
}