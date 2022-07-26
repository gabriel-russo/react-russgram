import {Box, Modal, styled} from "@mui/material";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const StyledModalBox = styled(Box)({
    width: 400,
    height: 350,
    padding: 30,
    borderRadius: 5
})

export {StyledModal, StyledModalBox};