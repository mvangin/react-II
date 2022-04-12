import React, { useState, useEffect } from "react"
import TableRow from "./TableRow";

function ReusableTable({ data, colsToFilter }) {

    const [filteredData, setFilteredData] = useState([]);

    const filteredColumns = colsToFilter.length > 0 ?
        colsToFilter :
        Object.keys(filteredData[0])


    useEffect(() => {
        let filtered = filterData(data, colsToFilter)
        setFilteredData(filtered);
    }, [data, colsToFilter])


    function filterData(data, colsToFilter) {
        return data.map(person => {
            if (colsToFilter.length > 0) {
                let filteredPerson = {};
                colsToFilter.forEach(col => {
                    filteredPerson[col] = person[col]
                })
                return filteredPerson;
            } else {
                return person
            }
        })
    }

    function TableHeaders({ columnName }) {
        return (
            <th> {columnName} </th>
        )
    }

    return (
        <table>
            <thead>
                <tr>
                    {filteredColumns.map((columnName, index) => (
                        <TableHeaders key={index} columnName={columnName} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {filteredData.map((person, index) => (
                    <tr key={index}>
                        {<TableRow person={person} />}
                    </tr>
                ))}
            </tbody>


        </table>
    );
}


export default ReusableTable