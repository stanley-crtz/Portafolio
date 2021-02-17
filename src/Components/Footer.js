import React from 'react';
import { connect } from 'react-redux'
import { Strings } from '../Assets/Language/Strings';
import { Icons } from './Icons';
import { Popover } from './Popover';

const Footer = ({ language }) => {

    const { Footer: footer } = Strings[language];

    const toLinkedIn = () => {
        window.open("https://www.linkedin.com/in/johansson-rodriguez-70079818b/" , "Stanley Cortez")
    }

    return (
        <footer className="animate__animated animate__backInLeft">
            <div>
                <Popover typography="johanssonr638@gmail.com" icon="email" alertTitle={footer.alertTitle}/>
                <Popover typography="Santa Elena, Usulutan, El Salvador" icon="address" alertTitle={footer.alertTitle} />
                <Popover typography="+503 7740-1395" icon="phone" alertTitle={footer.alertTitle} />
                <Icons icon="linkedin" onClick={toLinkedIn}/>
            </div>
            {footer.text}
            {footer.slogan}
        </footer>
    )
}

const mapStateToProps = (state) => ({
    language: state
})

export default connect(mapStateToProps, {})(Footer);