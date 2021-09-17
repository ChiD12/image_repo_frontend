import React, { useState, FC , useRef, useEffect, useReducer } from 'react';
import { CustomProps } from './../Interfaces'
import { serverUrl, useStyles, styleGraph } from './../constants'

import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import axios from 'axios';

export const CustomTileBar: FC<CustomProps> = (props): JSX.Element => {

    const [likes, setLikes] = useState(props.likes);
    const [alreadyLiked, setAlreadyLiked] = useState(props.didUserLikeImage);
    const classes = useStyles();
    console.log("REALODING")

    useEffect(() => {
        setAlreadyLiked(props.didUserLikeImage)
    }, [props.imgId])

    const handleLike = () => {
        let target = `${serverUrl}/like`

        let headers = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/plain"
            }
        }
        let data = {
            "userId": props.handleId(),
            "imgId": props.imgId
        }

        sendPostRequest(target, data, headers);
    }

    let sendPostRequest = (target: string, data: any, headers: object) =>{
        axios.post<any>(target, data, headers)
        .then(response => {
            // set base files image to the newly created one
            // setError(false)
            // props.clickImage(response.data.items[0].name);
            // props.handleClose();
            if(response.data.likes !== -1){
                setLikes(likes+1)
                setAlreadyLiked(true)
            }
        }).catch(error =>{
            console.log(error)
            // setError(true)
        })
    }

    let createIconButton = () => {

        if(alreadyLiked){
            return(
                <IconButton aria-label={`star ${"hi"}`} className={classes.iconFilled}>
                        <FavoriteIcon/>
                </IconButton>
            )
        }else{
            return(
                <IconButton aria-label={`star ${"hi"}`} className={classes.icon} 
                        onClick={() => {handleLike()}}>
                        <FavoriteBorderIcon/>
                </IconButton>
            )
        }
    }

    return (
        <GridListTileBar
            title={likes}
            titlePosition="top"
            actionIcon={
                createIconButton()                    
            }
            actionPosition="left"
            className={classes.titleBar}
        />
    );
}

export default CustomTileBar