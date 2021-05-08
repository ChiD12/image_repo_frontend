import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const serverUrl = "http://localhost:5000";

export const useStyles = makeStyles((theme: Theme) =>
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
  }),
);