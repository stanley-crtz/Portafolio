import React from 'react';
import { NavLink } from 'react-router-dom';

import { Strings } from '../Assets/Language/Strings';
import ModalIdioma from './ModalIdioma';

export const Menu = ({ language, hidden }) => {

    const { menu, languages } = Strings[language];

    return (
        <>
            <ul className={hidden ? 'Hidden' : 'Show animate__animated animate__bounceInDown'}>
                {
                    menu.map((value, i) => (
                        <li key={'rute-' + i}>
                            {
                                !value.language ? (
                                    <NavLink to={value.rute} activeClassName="active-route" >{value.title}</NavLink>
                                ) : (
                                    <ModalIdioma language={languages} />
                                )
                            }
                            
                        </li>
                    ))
                }
            </ul>
        </>
    )
}