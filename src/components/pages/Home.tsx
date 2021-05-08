import React, { useState, useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Item, ItemResponse, PageProps } from '../../Interfaces'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grow from '@material-ui/core/Grow';
import { serverUrl, useStyles } from '../../constants'

// const  apiKEY  =  "<YOUR_API_KEY_HERE>";
const  endpoint  =  `${serverUrl}/all`;
const imageEndpoint = `${serverUrl}/images/`;



export const Home: FC<PageProps> = (props): JSX.Element => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<Item[]>([]);
    const classes = useStyles();
    const [time, setTime] = useState(500)
    
    console.log(props)

    const sendGetRequest = () => {
        axios.get<ItemResponse>(endpoint, {headers: {
            "Access-Control-Allow-Origin": "*"
          }})
        .then(response => {
            console.log(response.data);
            setItems( response.data.items );
        }).catch(error =>{
            console.log(error)
            console.log(endpoint)
        })
    };
    
    useEffect(() => {
        sendGetRequest();
    }, [])

    const myTimeout = () => {

    }


    return (
        <div >
            <div className={classes.root}>
                <GridList cellHeight={300} className={classes.gridList} cols={3}>
                    {items.map((item,index) => (
                        <Grow in = {true}
                        {...(true ? { timeout: (index +1) *100 } : {})}>
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

export default Home;