import { Edit, Delete } from "@material-ui/icons";
import { Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React from "react";

export const UsersTable = (props) => {
    return(
        <TableContainer>
            <Table>
                <TableHead>
                     <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell></TableCell>
                     </TableRow>
                </TableHead>
                <TableBody>
                {props.rows.map((row) => (

                    <TableRow>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>
                            <Edit/>
                            <Delete/>
                        </TableCell>
                     </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}