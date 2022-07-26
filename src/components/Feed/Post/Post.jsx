import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import {Favorite, Share, MoreVert, FavoriteBorder} from "@mui/icons-material";


function Post(props) {

    return (
        <Card sx={{margin: 5, width: {xs: '70vw', sm: '40vw'}}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: "red"}} aria-label="recipe" src={props.picture}/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert/>
                    </IconButton>
                }
                title={props.name}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="10%"
                image={props.post}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite color={'error'}/>}/>
                </IconButton>
                <IconButton aria-label="share">
                    <Share/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post