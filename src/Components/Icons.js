import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const Icons = ({icon, onMouseOut, onMouseOver, onClick}) => {
    
    switch (icon) {
        case "email":
            return (
                <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} onClick={onClick} className="pointer">
                    <EmailIcon />
                </div>
            );
        case "address":
            return (
                <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} onClick={onClick} className="pointer">
                    <HomeIcon />
                </div>
            );
        case "phone": {
            return (
                <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} onClick={onClick} className="pointer">
                    <PhoneIcon />
                </div>
            );
        }
        case "linkedin": {
            return (
                <div onMouseOut={onMouseOut} onMouseOver={onMouseOver} onClick={onClick} className="pointer">
                    <LinkedInIcon />
                </div>
            );
        }
        default:
            break;
    }
}

Icons.defaultProps = {
    onMouseOut: () => {},
    onMouseOver: () => {},
    onClick: () => {}
}