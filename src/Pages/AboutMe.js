import React from 'react';
import { Diploma } from '../Components/Diploma';

import { connect } from 'react-redux';
import { Strings } from '../Assets/Language/Strings';
import { Skill } from '../Components/Skill';

const AboutMe = ({ language }) => {

    const {Skills} = Strings;
    const { AboutMe: { certificate, skill }, libreries } = Strings[language];

    return <>
        <div className="center">
            <h2 className="animate__animated animate__bounceInRight">Diplomas</h2>
            <hr className="animate__animated animate__bounceInRight" />
            <div className="listaContainer animate__animated animate__backInLeft">
                {
                    certificate.map((val, i) => (
                        <Diploma 
                            title={val.title} 
                            img={val.urlImage} 
                            description={val.description}
                            ruteDiploma={val.urlDiploma}
                            key={val.title + i} 
                        />
                    ))
                }
            </div>
            <br />
            <h2 className="animate__animated animate__bounceInRight">{skill}</h2>
            <hr className="animate__animated animate__bounceInRight" />
            <div className="listaContainer animate__animated animate__backInLeft">
                {
                    Skills.map((val, i) => (
                        <Skill title={val.title} img={val.img} libreries={val.libreries} language={libreries} key={"Skills"+i} />
                    ))
                }
            </div>
        </div>
    </>
}

const mapStateToProps = (state) => ({
    language: state
})

export default connect(mapStateToProps, {})(AboutMe)