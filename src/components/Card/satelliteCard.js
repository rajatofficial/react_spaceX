import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import './card.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '400px',
    width: '200px',
    float: 'left',
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '10px'
  },
  media: {
    paddingTop: '56.25%',
    display: 'block',
    marginLeft: 'auto',
    marginTop:'10px',
    marginRight: 'auto',
    width: '50%',
    backgroundColor: 'lightgray'
  },
  cardContent: {
    marginLeft: '5px',
    textAlign: 'left'
  },
  cardHeader: {
    textAlign: 'left',
    fontSize: '20px',
    marginLeft: '10px',
    color: 'darkblue',
    fontWeight: '700',
    marginTop: '10px',
    
  }
}));

export default function SatelliteCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
      />
      <div className={classes.cardHeader}>
        {props.mission}
        {props.flight_number}
      </div>
      <CardContent className={classes.cardContent}>
        <strong>Mission Ids:</strong>
        <div className="list">
          <li>{props.mission_ids}</li>
        </div>
        <strong>Launch Year:</strong> {props.launch_year}<br />
        <strong>Successful Launch:</strong>{props.success_launch ? " true" : " false"}<br />
        <strong>Successful Landing:</strong>{props.landing ? " true" : " false"}<br />

      </CardContent>
    </Card>
  );
}
