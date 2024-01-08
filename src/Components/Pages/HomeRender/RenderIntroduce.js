import React, { useState, useEffect } from "react";
import intro from '../../Txt/Introduce.txt';

const RenderIntroduce = () => {
    useEffect(() => {
        readTextFile1();


    }, [])
    const [textintro, settextintro] = useState("");
    const [imgintro, setimgintro] = useState("");
    async function readTextFile1() {
        var text;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", intro, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    text = rawFile.responseText.trim();

                    if (text.includes("|")) {
                        var tachtext = text.split('|');
                        settextintro(tachtext[1]);
                        setimgintro(tachtext[0]);
                    }
                    else {
                        settextintro(text);
                        setimgintro("https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png")
                    }

                }

            }

        }
        rawFile.send(null);
    }
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3" id="imgintro">
                    <img src={imgintro} atl="intro"></img>
                </div>
                <div className="col-sm-8" id="textintro">
                <div dangerouslySetInnerHTML={{ __html: textintro }} />                    
                </div>
            </div>

        </div>
    )
}
export default RenderIntroduce;