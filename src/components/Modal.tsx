import React, { useState, useEffect, FC , useRef } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { serverUrl } from './../constants'
import { Item, ItemResponse, ModalProps } from './../Interfaces'

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const  endpoint  =  `${serverUrl}/all`;
const imageEndpoint = `${serverUrl}/images/`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            backgroundColor: "#282C34",
            
            borderRadius: '4px',
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            padding: theme.spacing(2, 4, 3),
            width: '700px',
            height: '400px',
            fontFamily: "Roboto",
            color: 'gray'
        },
        title: {
            fontSize: 14,
        },
        textfield: {
            color: '#F8FCFF,'
        },
        input: {
            color: "white"
        },
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
          label: {
            textTransform: 'capitalize',
          },
    }),
);

export const ModalForm: FC<ModalProps> = (props): JSX.Element => {
    const classes = useStyles();
    const [enteredURL, setURL] = useState('');
    const [error, setError] = useState(false)
    const inputFile = useRef<HTMLInputElement>(null)

    const sendPostRequest = (target: string, data: any, headers: object) => {
        axios.post<ItemResponse>(target, data, headers)
        .then(response => {
            // set base files image to the newly created one
            setError(false)
            props.clickImage(response.data.items[0].name);
            props.handleClose();
        }).catch(error =>{
            console.log(error)
            setError(true)
        })
    };

    const sendURLCreateImage = () => {
        let target = `${serverUrl}/createImage`

        let headers = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "text/plain"
            }
        }
        sendPostRequest(target, enteredURL, headers);
    }

    const sendImage = (img: any) => {
        let target = `${serverUrl}/createImage`

        let type = img.type
        if(type.split('/')[0] != 'image'){
            throw 'Is not an Image'
        }

        let headers = {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": type
            }
        }
        sendPostRequest(target, img, headers);
    }


    const onChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value);
        setURL(e.target.value)
    })

    const renderTextField = () => {
        if(error){
            return <TextField
                error
                id="standard-full-width"
                label="URL"
                style={{ margin: 8 }}
                placeholder="www.image.com/image.jpg"
                helperText="Enter URL of Image you wish you upload"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    className: classes.input
                }}
                value={enteredURL}
                onInput={onChangeHandler} 
            />
        }else if(!error){
            return <TextField
                
                id="standard-full-width"
                label="URL"
                style={{ margin: 8 }}
                placeholder="www.image.com/image.jpg"
                helperText="Enter URL of Image you wish you upload"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    className: classes.input
                }}
                value={enteredURL}
                onInput={onChangeHandler} 
            />
        }
    }

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        if (inputFile.current !== null){
            inputFile.current.click();

            console.log(inputFile.current.files)
            console.log("buttonclick")

        }
    };

    const onSubmit = (e: any) => {
        // `current` points to the mounted file input element
        console.log("***submited")
        if (inputFile.current !== null){
            console.log(inputFile.current.files)
            const files =  e.currentTarget.files;
            // e.currentTarget.files = {} as FileList
            // for (let file in inputFile.current.files){
            //     console.log(file)
            // }
            Array.from(files).forEach(file => {
                try{
                    sendImage(file)
                }catch(err){
                    e.target.value = null
                    alert("file was not an image")
                }
            })   
        }
    };


    return (
        <Card className={classes.paper}>
            <p className='modalTitle'>Upload your image</p>
            <p className='modalText'>Wtih a URL</p>
            <form onSubmit = {(e) => { e.preventDefault(); sendURLCreateImage();}}>
                {renderTextField()}
                <Button type="submit"
                        classes={{
                            root: classes.root, 
                            label: classes.label, 
                        }}>
                    Submit
                </Button>
            </form>
            <p className='modalText'>Or Upload the file</p>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}} onChange={onSubmit}/>
            <Button onClick={onButtonClick}
                    classes={{
                        root: classes.root, // class name, e.g. `classes-nesting-root-x`
                        label: classes.label, // class name, e.g. `classes-nesting-label-x`
                      }}>
                          Open file upload window
            </Button>
            
        </Card>
    );
}

export default ModalForm