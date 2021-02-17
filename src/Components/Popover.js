import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pop from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import { Icons } from './Icons';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
    },
    typography: {
        padding: theme.spacing(2),
    }
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const Popover = ({ typography, icon, alertTitle }) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [alert, setAlert] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const text = useRef()

    const handleHover = (bool) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };

    const handleClick = () => {
        const range = window.document.createRange();
        range.selectNode(text.current)

        window.getSelection().addRange(range);

        try {
            // intentar copiar el contenido seleccionado
            var resultado = document.execCommand('copy');

            setAlert(true);
        } catch (err) {
            console.log('ERROR al intentar copiar el email');
        }

        // eliminar el texto seleccionado
        window.getSelection().removeAllRanges();
    }


    return (
        <div>
            <Pop open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper style={{
                            backgroundColor: 'rgb(198,194,194)'
                        }}>
                            <Typography className={classes.typography} innerRef={text}>{typography}</Typography>
                        </Paper>
                    </Fade>
                )}
            </Pop>
            <Snackbar open={alert} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
            }}>
                <Alert onClose={handleClose} severity="success">
                    {alertTitle}
                </Alert>
            </Snackbar>
            <Icons icon={icon} onMouseOver={handleHover(true)} onMouseOut={handleHover(false)} onClick={handleClick} />

        </div>
    )
}
