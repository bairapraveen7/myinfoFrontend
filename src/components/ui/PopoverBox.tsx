import { Box, styled } from "@mui/material";

export const PopoverBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    overflow: 'auto',
    padding: `0px ${theme.spacing(2)}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
}));