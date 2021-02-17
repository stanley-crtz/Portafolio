import React, {useState} from 'react';
import Radio from '@material-ui/core/Radio';
import Group from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export const RadioGroup = ({setModal, value, languages = [], title}) => {

    const handleChange = (event) => {
        setModal(event.target.value);
    };

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{title}</FormLabel>
            <Group aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                {
                    languages.map((val, i) => (
                        <FormControlLabel value={val.value} control={<Radio />} label={val.label} key={'modalIdioma'+i}/>
                    ))
                }
            </Group>
        </FormControl>
    )
}
