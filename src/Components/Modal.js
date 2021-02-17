import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mod from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 20,
        boxShadow: theme.shadows[5],
        outlineStyle: 'unset',
        padding: theme.spacing(2, 4, 3),
        width: '100%',
        maxWidth: '500px',
        height: 'min-content',
        justifyItems: 'flex-end'
    },
}));

export const Modal = ({ open, setOpen, source }) => {

    const classes = useStyles();

    const handleClose = () => {
        setOpen((val) => !val);
    }

    return (
        <Mod
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <div className="closeModal" >
                        <div className="pointer pointer-modal" onClick={handleClose} >
                            <CancelIcon />
                        </div>
                    </div>
                    {source}
                </div>

            </Fade>
        </Mod>
    )
}

