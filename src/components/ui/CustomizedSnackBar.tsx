import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";

export const CustomizedSnackBar = ({type, message}) => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpen(false);
    }

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}