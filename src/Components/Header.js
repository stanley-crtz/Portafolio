import React, { useEffect, useState } from "react";
import { Menu } from "./Menu";

import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Assets/Images/Logo.png';

import { connect }from 'react-redux';

const Header = ({language}) => {

    const [menuHidden, setMenuHidden] = useState(true);

    useEffect(() => {
        if(window.screen.width > 615){
            setMenuHidden(false);
        }
    }, [])

    useEffect(() => {

        window.addEventListener('resize', (e) => {
            e.preventDefault();
            const width = e.currentTarget.innerWidth;

            if (width > 615) {
                setMenuHidden(false);
            }
            else{
                setMenuHidden(true);
            }

        })

        
    }, [])

    const handleChangeMenu = () => {

        setMenuHidden(!menuHidden);
        
    }

    return (
        <header>

            <div className="header-icon">

                <img src={Logo} alt="Logo" />

            </div>

            <div className="burger">

                <div className="burger-icon">

                    <MenuIcon htmlColor="white" onClick={handleChangeMenu} />

                </div>

                <Menu language={language} hidden={menuHidden} />

            </div>

        </header>
    )
}

const mapStateToProps = (state) => ({
    language: state
})

export default connect(mapStateToProps, {})(Header);
