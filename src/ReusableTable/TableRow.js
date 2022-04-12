import React, {useState, useEffect} from "react"

function TableRow({ person }) {
    return Object.values(person).map((tableData,index) => {
        return (
            <td key={index}>
                {tableData}
            </td>)
    })
}


export default TableRow