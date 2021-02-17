import React, { useState } from 'react';
import { Modal } from './Modal';

export const Diploma = ({ title, img, description, ruteDiploma }) => {

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => { setOpenModal(true) };

    return (<>
        <div className="diploma pointer" onClick={handleOpenModal}>
            <div className="imgDiploma">
                <img src={img} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <div className="left">
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <Modal
            open={openModal}
            setOpen={setOpenModal}
            source={
                <img src={ruteDiploma} alt="Diploma" className="imgModal" />
            }
        />
    </>
    )
}
