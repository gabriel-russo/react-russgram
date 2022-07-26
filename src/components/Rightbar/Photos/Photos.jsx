import {ImageList, ImageListItem} from "@mui/material";

function Photos(){

    return (
        <ImageList cols={3} gap={5}>
            <ImageListItem>
                <img
                    src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"}
                    alt={""}/>
            </ImageListItem>
            <ImageListItem>
                <img
                    src={"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"}
                    alt={""}/>
            </ImageListItem>
            <ImageListItem>
                <img
                    src={"https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format"}
                    alt={""}/>
            </ImageListItem>
        </ImageList>
    )
}

export default Photos;