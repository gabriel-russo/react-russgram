// import {theme} from "./styles/theme";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {Box, createTheme, CssBaseline, Stack, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/Add/Add";
import {useState} from "react";

function App() {

    const [mode, setMode] = useState('light')

    const Theme = createTheme({
        palette: {
            mode: mode
        }
    })

    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline />
            <Box>
                <Navbar/>
                <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <Rightbar/>
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
