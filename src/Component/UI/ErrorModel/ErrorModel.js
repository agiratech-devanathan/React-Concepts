import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/button";
import Card from "../Card/card";
import classes from './ErrorModel.module.css'

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModelOverlay = (props) => {
    return <Card className={classes.model}>
        <header className={classes.header} >
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>

    </Card>
}
const ErrorModel = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}

        </React.Fragment>
    )
}

export default ErrorModel;