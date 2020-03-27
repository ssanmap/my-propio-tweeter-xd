import React, {useState, useEffect} from 'react';
import {Container, Snackbar, Modal} from "@material-ui/core";
import Header from "./components/Header";
import EnviaTweet from "./components/EnviaTweet";
import ListarTweets from "./components/ListarTweets";
import ModalConta from "./components/ModalConta";


import { tweets_storage } from "./utils/constants";


function App() {

  const [toastProps, setToasProps] = useState({
    open: false,
    text: null
  });

  const [allTweets, setAllTweets] = useState([]);
  const [reloadTweets, setReloadTweets] = useState(false);


  useEffect(() =>{
    const AllTweetStorage = localStorage.getItem(tweets_storage);
    const allTweetsArray = JSON.parse(AllTweetStorage);
    setAllTweets(allTweetsArray);
    setReloadTweets(false)
  }, []);

  const deleteTweet = (index) => {
    allTweets.splice(index, 1);
    setAllTweets(allTweets);
    localStorage.setItem(tweets_storage, JSON.stringify(allTweets));
    setReloadTweets(true);
  }


  return (
    <Container className="tweet" maxWidth="false">
      <Header />
      <EnviaTweet setToasProps={setToasProps} allTweets={allTweets}/>
      <ListarTweets allTweets ={allTweets} deleteTweet={deleteTweet} />
      <ModalConta />
      <Snackbar
      anchorOrigin={{
        vertical:"top",
        horizontal:"right"


      }}
      open={toastProps.open}
      autoHideDuration={1000}
      message={<span id= "message-id"> {toastProps.text}  </span>}
      />
    </Container>
  );
}

export default App;
