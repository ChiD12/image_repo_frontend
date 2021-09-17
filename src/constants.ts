import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const serverUrl = "http://localhost:5000";
// export const serverUrl = "http://178.128.231.244:5000";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      textAlign: 'left'
      
    },
    gridList: {
      width:1200,
      
    },
    titleBar: {
      background:
        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      fontFamily: "Varela Round, sans-serif",
      fontStyle: "normal",
    },
    icon: {
      color: 'white',
    },
    iconFilled: {
      color: 'red',
    },
  }),
);

export const styleGraph = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      
    },
    gridList: {
      width:1200,
      
    },
    titleBar: {
      background: 'transparent'
        
    },
    icon: {
      color: 'white',
    },
  }),
);