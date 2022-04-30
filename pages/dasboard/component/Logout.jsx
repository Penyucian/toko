import Router from "next/router";
import React from "react";

export default function Logout() {

    function handleClick() {
        localStorage.clear()
        Router.push('./autentikasi')
    }

    return(
        <button 
            className="z-50 fixed top-24 right-4 bg-white border px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white active:bg-white active:text-black"
            onClick={handleClick}
        >
            Logout
        </button>
    )
}