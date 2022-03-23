import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Your text");

    const handleUpClick = (e) => {
        e.preventDefault();
        // console.log("I was clicked");
        setText(text.toUpperCase());
    }

    const handleLoClick = (e) => {
        e.preventDefault();
        // console.log("I was clicked");
        setText(text.toLowerCase());
    }

    const handleOnChange = (e) => {
        // console.log("Text was changed");
        setText(e.target.value);
    }

    const handleCapClick= (e) => {
        const mySentence = text;
        const words = mySentence.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
        setText(words.join(" "));
    } 
  return (
    <>
        <h1 className="my-3">{props.heading}</h1>
        <div className="form-floating my-3">
            <textarea onChange={handleOnChange} onFocus={()=>setText("")} className="form-control" id="floatingTextarea" rows="30" value={text}></textarea>
            {/* <label for="floatingTextarea">Add Text</label> */}
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleCapClick}>Capitalise Each Word</button>
        </div>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words, {text.length} chars</p>
        <p>{(0.08 * text.split(" ").length).toFixed(2)} minutes to read</p>
    </>
  )
}
