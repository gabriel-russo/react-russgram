import {Fab, IconButton, Stack, TextField, Tooltip, Typography} from "@mui/material";
import {Add as AddIcon, AddCircle, Image, PhotoCamera, Videocam} from "@mui/icons-material"
import {useState} from "react";
import {StyledModalBox, StyledModal} from "./Modal/StyledModal";
import UserBox from "./Modal/UserBox/UserBox";

function Add() {

    const [modalToggle, setModalToggle] = useState(false)

    function toggle(){
        setModalToggle(!modalToggle)
    }

    return (
        <>
            <Tooltip title="Add"
                     sx={{position: 'fixed', bottom:20, left: {xs: "calc(50% - 25px)", sm: 30}}}
                     onClick={e => toggle()}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={modalToggle}
                onClose={e => toggle()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalBox sx={{ backgroundColor: "background.default", color: "text.primary"}}>
                    <Typography variant={'h6'} color={'grey'} textAlign={"center"}>Create post</Typography>
                    <UserBox/>
                    <TextField
                        sx={{width: '100%'}}
                        id="standard-multiline-static"
                        placeholder={"O que está pensando?"}
                        multiline
                        rows={3}
                    />
                    <Stack direction={"row"} gap={3} mt={2}>
                        <Image/>
                        <PhotoCamera/>
                        <Videocam/>
                        <IconButton aria-label="add" color={"success"} sx={{marginLeft: 'auto'}}>
                            <AddCircle sx={{fontSize: 48}}/>
                        </IconButton>
                    </Stack>
                </StyledModalBox>
            </StyledModal>
        </>
    );
}

export default Add;