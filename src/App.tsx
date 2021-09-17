import React, { useState } from 'react';
import uuid from 'react-uuid'
import './App.css';
import * as Pages from './components/pages'
import ModalForm from './components/Modal'
import GraphModal from './components/GraphModal'
import Modal from '@material-ui/core/Modal';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

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
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openGraph, setOpenGraph] = React.useState(false);
  const [imgToGraph, setImgToGraph] = useState("");


  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleOpenGraph = (img) => {
    setOpenGraph(true);
    setImgToGraph(img)
  };

  const handleCloseGraph = () => {
    setOpenGraph(false);
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
            handleOpenGraph = {handleOpenGraph}
            handleId = {handleId}
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
  
  let handleId = () => {
    if(document.cookie){
      return document.cookie.split('=')[1]
    }else{
      let cook = `id=${uuid()};expires=${new Date('01/01/2100').toUTCString()}`
      document.cookie = cook
      return document.cookie.split('=')[1]
    }
  }

  let scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  return (
    <div className="App">
      <header className="App-header">
      <p className='title'>Image Repository</p>
        
        {renderPage(page.value)}

        
        <div className={classes.root}>
                <Fab color="primary" aria-label="add" onClick={handleOpenAdd}>
                    <AddIcon />
                </Fab>
                {renderHomeFab()}
                <Fab color="primary" aria-label="add" onClick={scrollToTop}>
                    <ArrowUpwardSharpIcon />
                </Fab>

        </div>
          <Modal
            open={openAdd}
            onClose={handleCloseAdd}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <ModalForm
              handleClose = {handleCloseAdd}
              clickImage = {clickImage}
            />
          </Modal>
          <Modal
            open={openGraph}
            onClose={handleCloseGraph}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <GraphModal
              handleClose = {handleCloseGraph}
              clickImage = {clickImage}
              imgToGraph = {imgToGraph}
            />
          </Modal>
      </header>
    </div>
  );
}

export default App;