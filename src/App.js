// import {theme} from "./styles/theme";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Rightbar from "./components/Rightbar/Rightbar";
import {Box, Stack} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Box>
            <Navbar />
            <Stack direction={"row"} spacing={2} justifyContent={"space-evenly"}>
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
        </Box>
    );
}

export default App;
