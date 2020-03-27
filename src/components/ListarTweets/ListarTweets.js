import React from "react";
import {Grid } from "@material-ui/core";
import Tweet from "../Tweet";

import "./ListarTweets.scss";
import { green } from "@material-ui/core/colors";

export default function ListarTweets(props){
    const {allTweets, deleteTweet} = props;
    if (!allTweets || allTweets.length === 0 ) {
        return (
            <div className="list-tweets-empty">
                <h2>no Hay ni mierda puto!</h2>
            </div>

        );
    }
    return (
        <Grid container spacing={3} className="list-tweets">
            {allTweets.map((tweet, index) =>(
                <Grid key={index} item xs={4}>
                    <Tweet 
                    //le paso a la funcion que arrastro de tweet el name

                    Tweet={tweet} index ={index} deleteTweet={deleteTweet}
                    />
                    </Grid>

            ))}
        </Grid>
    );
}