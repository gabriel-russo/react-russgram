import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {Home, Article, Group, Storefront, Person, Settings, AccountBox, ModeNight} from "@mui/icons-material";


function Sidebar({mode, setMode}) {
    return (
        <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
            <Box position={"fixed"}>
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
                    {/* SETTINGS */}
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href={"#configuracoes"}>
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Configurações"/>
                        </ListItemButton>
                    </ListItem>
                    {/* PROFILE */}
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href={"#perfil"}>
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Perfil"/>
                        </ListItemButton>
                    </ListItem>
                    {/* Night Mode */}
                    <ListItem disablePadding>
                        <ListItemButton component={"a"} href={"#perfil"}>
                            <ListItemIcon>
                                <ModeNight/>
                            </ListItemIcon>
                            <Switch onChange={event => setMode(mode === 'light' ? 'dark' : 'light')}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar;