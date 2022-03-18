import React from "react";

export const UsersTableHtml = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {props.rows.map((row) => (
                <tr>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>Ícones</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}