import React, { useState} from "react";
import {FormControl, FormGroup, TextField, Button } from "@material-ui/core";

import "./FromSend.scss";

export default function FormSend(props){
    const{enviarTweet} = props;
    const[formValue, setFormValue] = useState({
        name:"",
        tweet:""
    });

    const onFormChange = event => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }



    return(
        <div className="form-send">
            <h2 className="form-send__title"> Enviar tweeret</h2>
            <form className="form-send__form"
             onSubmit={(event) => enviarTweet (event,formValue)}
             onChange={onFormChange}    
            >
            <FormControl>
                <FormGroup>
                    <TextField
                    className="form-send__form-name"
                    type="text"
                    name="name"
                    placeholder="Nombre de usuario"
                    margin="normal"
                    />

                </FormGroup>
                <FormGroup>
                    <TextField
                    className="form-send__form-textarea"
                    name="tweet"
                    multiline
                    rows="6"
                    placeholder="escritbe tu wea aqwasdasjd ctm jolaperra"
                    margin="normal"
                    />
                </FormGroup>
                <FormGroup>
                    <button type="submit">Enviar chet</button>
                </FormGroup>
            </FormControl>
            </form>


        </div>
    );
}