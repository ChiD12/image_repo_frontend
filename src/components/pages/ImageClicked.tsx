import React, { useState, useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Item, ItemResponse, PageProps } from '../../Interfaces'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { serverUrl, useStyles } from '../../constants'
import Grow from '@material-ui/core/Grow';

// const  apiKEY  =  "<YOUR_API_KEY_HERE>";
const  endpoint  =  `${serverUrl}/all`;
const imageEndpoint = `${serverUrl}/images/`;



export const ImageClicked: FC<PageProps> = (props): JSX.Element => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Item[]>([]);
    const classes = useStyles();
    
    console.log(props)

    const endpoint = `${serverUrl}/getSimilarImages/${props.imageClicked}`;
    console.log(endpoint)

    const sendGetRequest = () => {
        axios.get<ItemResponse>(endpoint, {headers: {
            "Access-Control-Allow-Origin": "*"
          }})
        .then(response => {
            console.log(response.data);
            setItems( response.data.items );
        }).catch(error =>{
            console.log(error)
        })
    };
    
    useEffect(() => {
        sendGetRequest();
    }, [props.imageClicked])

    const goToImage = (name: string) => {

    }


    return (
        <div className='selected'>
            <p>Similar Images to Selected Image</p>

            <div className={classes.root}>
                <GridList cellHeight={400} className={classes.gridList} cols={3}>
                    
                    
                        <GridListTile key={"main"}  cols={3}>
                            <img src={imageEndpoint + props.imageClicked}/>
                        </GridListTile>
                    
                    
                    {items.map((item,index) => (
                        <Grow in = {true}
                        {...({ timeout: (index+1) *200 })}>
                            <GridListTile key={item.id} onClick={() => {props.clickImage(item.name)}}>
                                <img src={imageEndpoint + item.name}/>
                            </GridListTile>
                        </Grow>

                    ))}
                </GridList>
            </div>
        </div>
    )
}

export default ImageClicked;