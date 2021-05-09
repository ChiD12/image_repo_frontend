import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { Item, ItemResponse, PageProps } from '../../Interfaces'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grow from '@material-ui/core/Grow';
import { serverUrl, useStyles } from '../../constants'

const  endpoint  =  `${serverUrl}/all`;
const imageEndpoint = `${serverUrl}/images/`;

export const Home: FC<PageProps> = (props): JSX.Element => {
    const [items, setItems] = useState<Item[]>([]);
    const classes = useStyles();

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