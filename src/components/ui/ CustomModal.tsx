
import { Modal, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { PopoverBox } from "./PopoverBox";
import CloseIcon from "@mui/icons-material/Close";

export const CustomModal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode; heading: string, width: string, height: string }> = ({ open, onClose, children, heading }) => {
    const theme = useTheme();
    return (
        <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <PopoverBox>
            <Stack sx={{
                position: "sticky",
                top: '0px',
                backgroundColor: theme['palette']['background']['paper'],
                alignItems: "center",
                justifyContent: "center"
            }}>
                <CloseIcon onClick={onClose} sx={{ position: "absolute", right: 16, cursor: "pointer" }} />
                <Typography color="primary" variant="h6" id="modal-modal-title">
                    {heading}
                </Typography>
            </Stack>
            {children}
            </PopoverBox>
        </Modal>
    )}