import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme => ({
  root: {
    margin: '3.5rem',
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  topicsWindow: {
    width: '30%',
    height: '60vh',
    borderRight: '1px solid gray'
  },
  chatWindow: {
    width: '70%',
    height: '60vh',
    padding: '1rem'
  },
  chatBox: {
    width: '85%',
    height: '10vh'
  },
  button: {
    width: '15%',
    height: '10vh'
  },
  chip: {
    width: "10%",
    margin: '.2rem .6rem'
  }

}))

const Dashboard = () => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h3">
          Vox Pop
        </Typography>
        <Typography component="h5"> 
          Topic Placeholder
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List component="nav" aria-label="main mailbox folders">
              {["topic 1", "topic 2"].map(topic => {
                return (
                <ListItem key={topic} button>
                  <ListItemText>
                    {topic}
                  </ListItemText>
                </ListItem>
                )
              })}
            </List>
          </div>
          <div className={classes.chatWindow}>
            <List component="nav" aria-label="main mailbox folders">
                {[{from: 'user', message: 'hello'}, {from: 'user2', message: 'hello 2'}].map((chat, index) => {
                  return (
                  <div className={classes.flex} key={index}>
                    <Chip label={chat.from} className={classes.chip}/>
                    <Typography variant='p'>{chat.message}</Typography>
                  </div>
                  )
                })}
              </List>          
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.chatBox}>
          <TextField
          className={classes.chatBox}
          label="Message"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
        />
          </div>
          <div className={classes.button}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Dashboard
