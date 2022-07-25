import {Box, styled} from "@mui/material";

const StyledSearch = styled(Box)(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

export default StyledSearch;