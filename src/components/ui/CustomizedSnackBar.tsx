import { Alert, Snackbar } from "@mui/material";
import  { useState } from "react";

export const CustomizedSnackBar = ({type, message}: { type: "error" | "success" | "warning" | "info"; message: string }) => {
    const [open, setOpen] = useState(false);

    const handleClose = (_event: any, reason: string) => {
        if(reason === 'clickaway'){
            return;
        }

        setOpen(false);
    }

    const handleAlertClose = (_event: React.SyntheticEvent | null) => {
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={(e: any, reason: string) => handleClose(e, reason)}>
            <Alert onClose={handleAlertClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}