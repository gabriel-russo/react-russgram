import {Box, styled} from "@mui/material";

const StyledIcons = styled(Box)(({theme}) => ({
    display: "none",
    [theme.breakpoints.up("sm")]: {
        display: 'flex',
        gap: "20px",
        alignItems: 'center'
    }
}));

export default StyledIcons;