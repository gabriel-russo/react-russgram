import {Avatar, Box, Typography} from "@mui/material";

function UserBox(){

    return (
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2, marginBottom: 3, marginTop: 3}}>
            <Avatar src={"https://github.com/gabriel-russo.png"} sx={{width: 35, heigth: 30}}/>
            <Typography fontWeight={500} variant={'span'}>Gabriel Russo</Typography>
        </Box>
    );
}

export default UserBox;