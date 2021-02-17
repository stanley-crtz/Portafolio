import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Mod from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { RadioGroup } from './RadioGroup';

import { connect }from 'react-redux';
import { Strings } from '../Assets/Language/Strings';

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
        maxWidth: '300px'
    },
}));

const ModalIdioma = ({ language, changeLanguage }) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [state, setState] = useState(language);

    const {languages: {titlesModal, languages}} = Strings[language];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" className="buttonLanguage" onClick={handleOpen}>
                {titlesModal.buttonOpenModal}
            </button>
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
                        <RadioGroup
                            setModal={setState}
                            value={state}
                            languages={languages}
                            title={titlesModal.title}
                        />
                        <div className="groupButton">
                            <Button variant="contained" color="secondary" onClick={handleClose}>
                                {titlesModal.buttonCancel}
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => {
                                changeLanguage(state);
                                handleClose();
                            }}>
                                {titlesModal.buttonAccept}
                            </Button>
                        </div>
                    </div>

                </Fade>
            </Mod>
        </div>
    )
}

const mapStateToProps = (state) => ({
    language: state
})

const mapDispatchToProps = dispatch => ({
    changeLanguage(language){
        dispatch({
            type: "CHANGE_LANGUAGE",
            language
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalIdioma)