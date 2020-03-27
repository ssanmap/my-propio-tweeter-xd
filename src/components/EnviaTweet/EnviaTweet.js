import React , {useState} from "react";
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
import ModalConta from "../ModalConta";
import FormSend from "../FromSend";
import {tweets_storage} from "../../utils/constants";


import "./EnviaTweet.scss";

export default function EnviaTweet(props){
    const { setToasProps, allTweets} = props;

    const [isAbiertoModal, SetModal] = useState(false);

    const AbiertoModal = () => {
        SetModal(true);
    };
    const CerradoModal = () => {
        SetModal(false);
    };

    const enviarTweet = (event, formValue) => {
        event.preventDefault();
        const {name, tweet} = formValue;
        let allTweetsArray = [];

        if(allTweets){
            allTweetsArray = allTweets;
        }

        if(!name || !tweet){
            
            setToasProps({
            open:true,
            text:"WARNING: todosl os campos son obligarosfijsdf"
            });
        } else {
            formValue.time = moment();
            allTweetsArray.push(formValue)
            localStorage.setItem(tweets_storage, JSON.stringify(allTweetsArray ));
            
            setToasProps({
                open:true,
                text:"tweet enviado con exito ctm"

            })
            CerradoModal();
        }
        allTweetsArray = []
    };

    return (
        <div className="Envia-t">
            <Fab
            className="Envia-t__omodal"
            Color="primary"
            arial-label="add"
            onClick={AbiertoModal}

            >
                <AddIcon />

            </Fab>
            <ModalConta isAbiertoModal={isAbiertoModal} CerradoModal={CerradoModal}>
                <FormSend  enviarTweet={enviarTweet} />
                
            </ModalConta>

        </div>
    )
}