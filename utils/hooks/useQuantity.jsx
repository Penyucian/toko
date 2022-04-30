import { useState } from "react";

export const getDrug = (id, stock, borrow) => {

    const [drug, setDrugs] = useState(stock)
    const [get, setGet] = useState(0)


    const handleChange = e => {
        setValue(e.target.value);
    }

    return {
        stock : drug,
        borrow : get,
  }
}