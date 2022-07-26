import {Box, Typography} from "@mui/material";
import Photos from "./Photos/Photos";
import Friends from "./Friends/Friends";
import Chat from "./Chat/Chat";

function Rightbar() {
    return (
        <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}, marginLeft: 0, paddingLeft: 0}}>
            <Box position={"fixed"}>
                <Typography variant={"h6"} fontWeight={"200"}>Amigos online:</Typography>
                <Friends/>
                <Typography variant={"h6"} fontWeight={"200"} mt={2} mb={2}>Fotos</Typography>
                <Photos/>
                <Typography variant={"h6"} fontWeight={"200"} mt={2} mb={2}>Conversas</Typography>
                <Chat/>
            </Box>
        </Box>
    )
}

export default Rightbar;