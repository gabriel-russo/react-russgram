import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Home, Article, Group, Storefront, Person, Settings, AccountBox} from "@mui/icons-material";


function Sidebar() {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <List>
                {/* HOME */}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#inicio"}>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary="Inicio"/>
                    </ListItemButton>
                </ListItem>
                {/* PAGES */}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#paginas"}>
                        <ListItemIcon>
                            <Article/>
                        </ListItemIcon>
                        <ListItemText primary="Paginas"/>
                    </ListItemButton>
                </ListItem>
            {/* GROUPS */}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#grupos"}>
                        <ListItemIcon>
                            <Group/>
                        </ListItemIcon>
                        <ListItemText primary="Grupos"/>
                    </ListItemButton>
                </ListItem>
            {/* MARKETPLACE*/}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#loja"}>
                        <ListItemIcon>
                            <Storefront/>
                        </ListItemIcon>
                        <ListItemText primary="Loja"/>
                    </ListItemButton>
                </ListItem>
            {/* FRIENDS */}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#amigos"}>
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="Amigos"/>
                    </ListItemButton>
                </ListItem>
            {/*    SETTINGS*/}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#configuracoes"}>
                        <ListItemIcon>
                            <Settings/>
                        </ListItemIcon>
                        <ListItemText primary="Configurações"/>
                    </ListItemButton>
                </ListItem>
            {/*    PROFILE*/}
                <ListItem disablePadding>
                    <ListItemButton component={"a"} href={"#perfil"}>
                        <ListItemIcon>
                            <AccountBox/>
                        </ListItemIcon>
                        <ListItemText primary="Perfil"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default Sidebar;