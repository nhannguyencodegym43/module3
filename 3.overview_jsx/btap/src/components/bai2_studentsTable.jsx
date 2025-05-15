import React from "react";
import "./bai2.css";

function Bai2() {
    let students = [
        {
            company: "Alfreds Futterkiste",
            contact: "Maria Anders",
            country: "Germany",
        }
        ,
        {
            company: "Centro comercial Moctezuma",
            contact: "Francisco Chang",
            country: "Mexico",
        },
        {
            company: "Ernst Handel",
            contact: "Roland Mendel",
            country: "Austria",
        },
        {
            company: "Island Trading",
            contact: "Helen Bennett",
            country: "UK",
        },
        {
            company: "Laughing Bacchus Winecellars",
            contact: "Yoshi Tannamuri",
            country: "Canada",
        },
        {
            company: "Magazzini Alimentari Riuniti",
            contact: "Giovanni Rovelli",
            country: "Italy",
        }
    ]
    return (
        <>
            <table border="1">
                <th>
                    Company
                </th>
                <th>
                    Contact
                </th>
                <th>
                    Country
                </th>
                <tbody>
                {students.map(student => (
                    <tr>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Bai2;
