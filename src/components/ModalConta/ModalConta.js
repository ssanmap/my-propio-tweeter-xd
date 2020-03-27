import React from "react";
import {Modal} from "@material-ui/core";


import "./ModalConta.scss"

export default function ModalConta(props){
    const {isAbiertoModal, CerradoModal, children} = props;
    return (
        <Modal

        className="modal-conta"
        open={isAbiertoModal}
        onClose={CerradoModal}
        closeAfterTransition
        >
        <div> {children} </div>
        </Modal>
    );
}