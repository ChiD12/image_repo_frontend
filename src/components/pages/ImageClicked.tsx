import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { Item, ItemResponse, PageProps, LikedImagesResponse } from '../../Interfaces'
import CustomTileBar from './../CustomTileBar'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { serverUrl, useStyles, styleGraph } from '../../constants'
import Grow from '@material-ui/core/Grow';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const imageEndpoint = `${serverUrl}/images/`;

export const ImageClicked: FC<PageProps> = (props): JSX.Element => {
    // const [items, setItems] = useState<Item[]>([]);
    const [state, setState] = useState({items:[], likedImages: []})
    const classes = useStyles();
    const graphClasses = styleGraph();

    const endpoint = `${serverUrl}/getSimilarImages/${props.imageClicked}`;
    const likesEndpoint  =  `${serverUrl}/likes/`;
    
    const sendGetRequest = () => {
        axios.get<ItemResponse>(endpoint, {headers: {
            "Access-Control-Allow-Origin": "*"
          }})
        .then(response => {
            console.log(response.data);
            getLikedImages( response.data.items );
        }).catch(error =>{
            console.log(error)
        })
    };

    const getLikedImages = (otherData) => {
        axios.get<LikedImagesResponse>(likesEndpoint + props.handleId(), {headers: {
            "Access-Control-Allow-Origin": "*"
          }})
        .then(response => {
            console.log(response.data);
            // likedImages=  response.data.likedIds ;
            setState({items:otherData, likedImages: response.data.likedIds})
        }).catch(error =>{
            console.log(error)
            console.log(endpoint)
        })
    };
    
    useEffect(() => {
        sendGetRequest();
    }, [props.imageClicked])

    return (
        <div className='selected'>
            <p>Similar Images to Selected Image</p>

            <div className={classes.root}>
                <GridList cellHeight={400} className={classes.gridList} cols={3}>
                    <GridListTile key={"main"}  cols={3}>
                        <img src={imageEndpoint + props.imageClicked} />
                    </GridListTile>
                    {state.items.map((item,index) => (
                        <Grow in = {true}
                        {...({ timeout: (index+1) *200 })}>
                            <GridListTile key={item.id}>
                                <img src={imageEndpoint + item.name}
                                    onClick={() => {props.clickImage(item.name)}}/>
                                <GridListTileBar
                                    titlePosition="bottom"
                                    actionIcon={
                                        <IconButton aria-label={`star ${"hi"}`} className={classes.icon} 
                                            onClick={() => {props.handleOpenGraph(item.name)}}>
                                            <ShowChartIcon />
                                        </IconButton>
                                        
                                        
                                    }
                                    actionPosition="left"
                                    className={graphClasses.titleBar}
                                />
                                <CustomTileBar
                                    likes={item.likes}
                                    handleId={props.handleId}
                                    imgId={item.id}
                                    didUserLikeImage={state.likedImages.includes(item.id)}
                                />
                            </GridListTile>
                        </Grow>
                    ))}
                </GridList>
            </div>
        </div>
    )
}

export default ImageClicked;