import React from 'react';
import PerfilImage from '../Assets/Images/PerfilImage.jpeg';
import { connect } from 'react-redux';
import { Strings } from '../Assets/Language/Strings';

const Home = ({ language }) => {

    const {Home: data} = Strings[language]

    return (
        <div className="space-between animate__animated animate__fadeInUpBig">
            <img src={PerfilImage} alt="Johansson Stanley Rodriguez Cortez" />
            <div className="container">
                <h1>{data.title}</h1>
                <br />
                <p>{data.greetings} <em>Johansson Stanley Rodriguez Cortez</em>. </p>
                <br />
                <p>{data.specialization}</p>
                <br />
                <p>{data.pleasures}</p>
                <br />
                <p>{data.dislike}</p>
                <br />
                <p>{data.objective}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    language: state
})

export default connect(mapStateToProps, {})(Home);