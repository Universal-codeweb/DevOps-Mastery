import {useState} from "react";
const emojis = [
  "🤐", "💯", "😯", "😡", "😎", "😂", "😅", "😑", "😞",
  ";)", ":)", "^_^", "U_U", ":-)", "O.O", "~_~", "O_O",
  "😵‍💫", "🫡", "🤣", "🤗", "🤔", "😥", "😮", "😶‍🌫️",
  "🥱", "😪", "🤯", "🥵", "🤪", "😵", "😷", "😡",
  "🥴", "🤠", "🥸", "🥳", "🤬", "🙂‍↔️", "🤓", "🫣",
  "🙂‍↕️", "🧐", "🦄", "🐕", "🐽", "🐍", "🦔"
];


function ChangeEmoji(){
    const[index, setIndex]=useState(0);
    function nextEmoji(){
    if(index===emojis.length-1){
        setIndex(0);
    }else{
        setIndex(index+1);
    }
}
    return(
        <>
        <h1>{emojis[index]}</h1>
        <button onClick={nextEmoji}>Next emoji</button>
        </>
    );
}
export default ChangeEmoji;