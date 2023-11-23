import React, { useEffect, useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import language from "./data";

const App = () => {
  const { transcript, resetTranscript, browserSupportSpeechRecognition } =
    useSpeechRecognition();
    const [languageCode, setLanguageCode] = useState("en-US");
  const isOnline = () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://www.sthamanoj.com.np";
    return fetch(proxyUrl + targetUrl)
      .then((response) => true)
      .catch((err) => false);
  };
  const startListening = async () => {
    const online = await isOnline();
    if (online) {
      if (!browserSupportSpeechRecognition) {
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true });
          SpeechRecognition.startListening({
            continuous: true,
            language: languageCode,
          });
        } catch (err) {
          window.alert("Microphone access denied.");
        }
      } else {
        window.alert("Browser may not support speech recognition");
      }
    } else {
      window.alert("You are offline to use this feature.");
    }
  };
  const stopListening = () => {
    SpeechRecognition.abortListening();
    window.alert("Stopped Listening");
  };
  const resetText = () => {
    resetTranscript();
  };
  const copyText = () => {
    navigator.clipboard.writeText(transcript);
    if (transcript === "") {
      window.alert("Nothing to copy");
    }else{
      window.alert("Copied"); 
    }
      
  };
  const handleLanguageCode = (event) =>{
    setLanguageCode(event.target.value);
  }
  useEffect(() =>{
    SpeechRecognition.startListening({
      continuous: true,
      language: languageCode,
    });
  },[languageCode]);
  return (
    <div className="main-container">
      <h1>Nepali Speech to Text Converter</h1>
      <p>A React hook that converts the Speech to the Text.</p>
      <div className="main-content">{transcript}</div>
      <div className="btn">
        <select onChange={handleLanguageCode}>
          {language.map((lang) => (
            <option value={lang.code} key={lang.id}>{lang.name}</option>
          ))}
        </select>
        <button onClick={copyText}>Copy</button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={stopListening}>Stop Listening</button>
        <button onClick={resetText}>Reset</button>
      </div>
    </div>
  );
};

export default App;
