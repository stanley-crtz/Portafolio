import React, { useState } from 'react';

import { Modal } from './Modal';
import { Progress } from './Progress';

export const Skill = ({ title, img, libreries, language }) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => { setOpenModal(true) };

    return (
        <>
            <div className="skill pointer" onClick={handleOpenModal}>
                <img src={img} alt={title} />
                <div className="centrado">{title}</div>
            </div>
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                source={
                    <>
                        <h1>{language}</h1>
                        <hr />
                        {

                            libreries.map((val, i) => (
                                <Progress title={val.title} value={val.progress} key={"libreries" + i} />
                            ))
                        }
                    </>
                }
            />
        </>
    )
}
