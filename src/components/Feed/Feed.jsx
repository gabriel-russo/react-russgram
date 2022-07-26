import {Box} from "@mui/material";
import Post from "./Post/Post";
import {useEffect, useState} from "react";


function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=30")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.results)
            })
    }, []);

    return (
        <Box flex={4} p={2}>
            {posts.map(post =>
                <Post picture={post.picture.thumbnail} post={post.picture.large}
                      name={post.name.first}/>)}
        </Box>
    )
}

export default Feed;