import React from "react";
import {Card, CardContent} from "@material-ui/core";
//extraemos de la libreria el inono qlo de eliminar ctm
import DeleteTwoWoneIcon from "@material-ui/icons/DeleteTwoTone";
import moment from "moment";

import "./Tweet.scss";
//destructuring qlo maomeno cacho esta mierda pero vamo alla
export default function Tweet(props){
    // son los datos qlos q llegan me cago
    // se pueden leer con un console.log
    const {
        Tweet:{name, tweet , time }, 
        index,
        deleteTweet
     } = props;

    return (
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h4>{name}</h4>
                    <DeleteTwoWoneIcon onClick={() =>deleteTweet(index)} />

                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add">
                    {moment(time).format('DD/MM/YYYY HH:mm')}

                </div>
            </CardContent>
        </Card>
    )
}