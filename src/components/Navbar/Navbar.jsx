import {AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Typography} from "@mui/material";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import StyledToolbar from "./Toolbar/StyledToolbar";
import StyledSearch from "./Search/StyledSearch";
import StyledIcons from "./Icons/StyledIcons";
import {Mail, Notifications} from "@mui/icons-material";
import StyledIconsSmall from "./Icons/StyledIconsSmall";
import {useState} from "react";


function Navbar() {
    /* Estados para o Menu*/
    const [menuAberto, setMenuAberto] = useState(false)
    const [elemPai, setElemPai] = useState(null)

    function abrirMenu(evento){
        setMenuAberto(true);
        setElemPai(evento.currentTarget);
    }

    function fecharMenu(evento) {
        setMenuAberto(false);
        setElemPai(null);
    }

    return (
        <AppBar position={"sticky"}>
            <StyledToolbar>
                <Typography variant={"h6"} sx={{display: {xs: 'none', sm: 'block'}}}>Russgram</Typography>
                <LogoDevIcon sx={{display: {xs: 'block', sm: 'none'}}}/>
                <StyledSearch>
                    <InputBase placeholder={"Search..."}/>
                </StyledSearch>
                <StyledIcons>
                    <Badge badgeContent={4} color="error">
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={3} color={"error"}>
                        <Notifications/>
                    </Badge>
                    <Avatar sx={{width: 30, height: 30}}
                            src={"https://github.com/gabriel-russo.png"}
                            id={"avatar"}
                            onClick={(evento) => abrirMenu(evento)}/>
                </StyledIcons>
                <StyledIconsSmall>
                    <Avatar sx={{width: 30, height: 30}}
                            src={"https://github.com/gabriel-russo.png"}
                            onClick={(evento) => abrirMenu(evento)}/>
                    <Typography>Russo</Typography>
                </StyledIconsSmall>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="avatar"
                open={menuAberto}
                anchorEl={elemPai}
                onClose={(evento) => fecharMenu(evento)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;