import { Box, useTheme } from "@mui/material";

export const RightSideDivider = () => {
    const theme = useTheme();
    return (
        <Box sx={{height: '0.5rem',mt:5,width: '100%', backgroundColor: theme.palette.tertiary.main,boxShadow: theme.shadows[1],  transform: 'skewY(3deg)'}}>

        </Box>
    )
}

export const LeftSideDivider = () => {
    const theme = useTheme();
    return (
        <Box sx={{height: '0.5rem',mb:5,width: '100%', backgroundColor: theme.palette.tertiary.main,boxShadow: theme.shadows[1],  transform: 'skewY(-3deg)'}}>

        </Box>
    )
}