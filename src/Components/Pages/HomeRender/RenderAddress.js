import React, { useState, useEffect } from "react";
import address from '../../Txt/Address.txt';


const RenderAddress = () => {
    useEffect(() => {
        readTextFile1();
        getlocation();

    }, [])
    const [textadd, settextadd] = useState("");
    const [imgadd, setimgadd] = useState("");
    const [toado, settoado] = useState({ latitude: null, longitude: null });
    const [position, setPosition] = useState({ latitude: null, longitude: null });
    function getlocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setPosition({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            });
        } else {
            console.log("Geolocation is not available in your browser.");
        }
    }

    async function readTextFile1() {
        var text;
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", address, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    text = rawFile.responseText.trim();

                    if (text.includes("|")) {
                        var tachtext = text.split('|');

                        settextadd(tachtext[1]);
                        setimgadd(tachtext[0]);
                        var mytoado = tachtext[2];
                        var tachtoado = mytoado.split(',');
                        settoado({
                            latitude: tachtoado[0],
                            longitude: tachtoado[1],
                        });
                    }
                    else {
                        settextadd(text);
                        setimgadd("https://static-00.iconduck.com/assets.00/no-image-icon-512x512-lfoanl0w.png")
                    }

                }

            }

        }
        rawFile.send(null);
    }
    function timduong() {
        var lattu = position.latitude;
        var lontu = position.longitude;
        var latden = toado.latitude;
        var londen = toado.longitude;
        var url = 'https://www.google.com/maps/dir/?api=1&origin=' + lattu + ',' + lontu + '&destination=' + latden + ',' + londen;
        //console.log(url);
        window.open(url, '_blank');
    }
    return (
        <div>
            <div className="container-fluid" id="bouderadd">
                <div className="row">
                    <div className="col-sm-8" id="textadd">
                        <div dangerouslySetInnerHTML={{ __html: textadd }} />
                        <div>
                            <button className="btn btn-dark" id="btnloaction" onClick={timduong}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg> Tìm đường đi
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-3" id="imgadd">
                        <img src={imgadd} atl="intro"></img>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default RenderAddress;