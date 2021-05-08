import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Pages from './components/pages'
import ModalForm from './components/Modal'
import Modal from '@material-ui/core/Modal';
import { PageProps } from './Interfaces'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

interface pageType{
  value : keyof typeof Pages
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

console.log(Pages)

function App() {
  const classes = useStyles();
  const [page, setPage] = useState<pageType>({value:"Home"});
  const [imageClicked, setImageClicked] = useState<string>("")
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const clickImage = (imageName : string) => {
    setImageClicked(imageName)
    setPage({value: "ImageClicked"})
  }

  const goHome = () => {
    setImageClicked("")
    setPage({value: "Home"})
  }

  const renderPage = (page: keyof typeof Pages) => {
    let Component;
    Component = Pages[page]
  
    return <Component 
          clickImage = {clickImage}
          imageClicked = {imageClicked}
          />
  }

  const renderHomeFab = () => {
    if (page.value === 'Home'){
      return  <Fab color="secondary" aria-label="home" disabled>
                <HomeIcon />
              </Fab>
    } else if(page.value === 'ImageClicked'){
      return  <Fab color="secondary" aria-label="home" onClick={() => {goHome()}}>
                <HomeIcon />
              </Fab>
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <p className='title'>Image Repository</p>
        
        {renderPage(page.value)}

        
        <div className={classes.root}>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
                {renderHomeFab()}

        </div>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          >
            <ModalForm
              handleClose = {handleClose}
              clickImage = {clickImage}
            />
          </Modal>
      </header>
    </div>
  );
}




export default App;
