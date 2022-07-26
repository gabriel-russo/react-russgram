import {Avatar, AvatarGroup} from "@mui/material";
import {useEffect, useState} from "react";

function Friends(){

    const [thumbnail, setThumbnail] = useState([])

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=20")
            .then((res) => res.json())
            .then((data) => {
                setThumbnail(data.results)
            })
    }, []);

    return (
        <AvatarGroup max={8} sx={{justifyContent:'left'}}>
            {thumbnail.map(thumbs => <Avatar alt="Remy Sharp" src={thumbs.picture.thumbnail}/>)}
        </AvatarGroup>
    )
}

export default Friends;