import {Box, styled} from "@mui/material";

const StyledIconsSmall = styled(Box)(({theme}) => ({
    display: "none",
    [theme.breakpoints.down("sm")] : {
        display: "flex",
        alignItems: "center",
        gap: "20px"
    }
}))

export default StyledIconsSmall;
