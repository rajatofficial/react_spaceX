import React from 'react'
import './Filter.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:'10px',
        marginLeft: '20px',
        marginRight: '20px',
        paddingBottom: '40px',
        width: '190px'
    },
    text: {
        float: 'right'
    },
    button: {
        background: 'lightGreen',
        color:'black',
        marginRight: '10px',
        marginBottom: '2px',
        marginTop: '5px',
        paddingLeft: '2px',
        paddingRight: '2px',
        marginLeft: '5px',
        height: '30px',
        "&.active": {
              background:'black',
            }
    }
  }));

const Filter = (props) => {
    console.log("buttonselected: "+ props.buttonSelected);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <h5 className={classes.head}>Filters</h5>
            <p><u>Launch Years</u></p>
            <Button style={{backgroundColor: props.buttonSelected==="2006" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2006", "", "")}>2006</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2007" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2007", "", "")}>2007</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2008" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2008", "", "")}>2008</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2009" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2009", "", "")}>2009</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2010" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2010", "", "")}>2010</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2011" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2011", "", "")}>2011</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2012" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2012", "", "")}>2012</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2013" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2013", "", "")}>2013</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2014" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2014", "", "")}>2014</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2015" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2015", "", "")}>2015</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2016" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2016", "", "")}>2016</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2017" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2017", "", "")}>2017</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2018" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2018", "", "")}>2018</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2019" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2019", "", "")}>2019</Button>
            <Button style={{backgroundColor: props.buttonSelected==="2020" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("2020", "", "")}>2020</Button>
            <br/>
            <br/>
            <p><u>Successful Launch</u></p>
            <Button style={{backgroundColor: props.launch==="true" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("", "true", "")}>True</Button>
            <Button style={{backgroundColor: props.launch==="false" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("", "false", "")}>False</Button>
            <br/>
            <br/>
            <p><u>Successful Landing</u></p>
            <Button  style={{backgroundColor: props.land==="true" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("", "", "true")}>True</Button>
            <Button  style={{backgroundColor: props.land==="false" ? "rgb(57, 153, 57)" : "lightgreen"}} className={classes.button} onClick={() => props.clickHandler("", "", "false")}>False</Button>
        </Card>
    )
}

export default Filter;