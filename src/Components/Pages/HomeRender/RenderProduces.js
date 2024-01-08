import produces from '../../Txt/Produces.txt';
import { Button, Modal } from "react-bootstrap";
import sizetext from '../../Txt/Size.txt';
import React, { useState, useEffect } from "react";
const RenderProduces = () => {
    useEffect(() => {
        readTextFile2();
        readTextFile3();
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}/${month}/${year}`;
        setngaydathang(currentDate);
    }, [])
    const [producesstate, setproducesstate] = useState("");
    const [showform, setshowform] = useState(false);
    const [isImageFullScreen, setIsImageFullScreen] = useState(false);
    const [imageprodurl, setimageprodurl] = useState("");
    const [donvishow, setdonvishow] = useState("");
    const [sanpham, setsanpham] = useState("");
    const [donvi, setdonvi] = useState("Lạng");
    const [anhsanpham, setanhsanpham] = useState("");
    const [soluong, setsoluong] = useState(1);
    const [hovaten, sethovaten] = useState("");
    const [sodienthoai, setsodienthoai] = useState("");
    const [diachinhanhang, setdiachinhanhang] = useState("");
    const [ngaydathang, setngaydathang] = useState("");


    async function readTextFile2() {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", produces, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    setproducesstate(rawFile.responseText.trim());

                }

            }

        }
        rawFile.send(null);
    }
    async function readTextFile3() {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", sizetext, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    setdonvishow(rawFile.responseText.trim());

                }

            }

        }
        rawFile.send(null);
    }

    function renderdonvi() {
        if (donvishow !== "") {
            const tach = donvishow.split('|');
            var listitem = tach.map((item, key) => {

                return (
                    <option value={item} key={key}>{item}</option>
                )

            });
            return (
                <select className="form-control" onChange={(value) => handlerdonvi(value.target.value)}>
                    {listitem}
                </select>
            )
        }

    }



    //googlesheet



    function addRowtoGoogleSheet() {
        var formdata = new FormData();
        formdata.append("Sanpham", sanpham);
        formdata.append("Anhsanpham", anhsanpham)
        formdata.append("Donvi", donvi);
        formdata.append("Soluong", soluong);
        formdata.append("Hovaten", hovaten);
        formdata.append("Sodienthoai", sodienthoai);
        formdata.append("Diachinhanhhang", diachinhanhang);
        formdata.append("Ngaydathang", ngaydathang);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://script.google.com/macros/s/AKfycbwlpUwIx60YBzzoetcQAU4ytD86JN4pJzrNBSM5Tw4i478loJQBP4mRCw1J1Akov1TteQ/exec", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                alert("Cảm ơn bạn đã đặt hàng, đơn hàng của bạn sẽ được xử lý trong thời gian sớm nhất");
                setsanpham("");
                setdonvi("Lạng");
                setsoluong(0);
                sethovaten("");
                setsodienthoai("");
                setdiachinhanhang("");
                setshowform(false);
            })
            .catch(error => console.log('error', error));
    }

    function handlerhovaten(value) {
        sethovaten(value);

    }
    function handlersodienthoai(value) {
        setsodienthoai(value);
    }
    function handlerdiachinhanhang(value) {
        setdiachinhanhang(value);
    }
    function handlerdonvi(value) {
        setdonvi(value);

    }


    function dathang(anhsanpham1, sanpham1) {
        setshowform(true);
        setsanpham(sanpham1);
        setanhsanpham(anhsanpham1);
    }
    function closedathang() {
        setshowform(false);
    }
    function plusprod() {
        setsoluong(soluong + 1);
    }
    function subprod() {
        if (soluong === 0) {

        }
        else {
            setsoluong(soluong - 1);
        }

    }
    function renderModal() {
        if (showform === true) {
            return (
                <div
                    className="modal show"
                    style={{ display: 'block' }}
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Đặt hàng</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <table className="tblform">
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <img className="imgprod" alt="imgshow" src={anhsanpham}></img>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sản phẩm
                                        </td>
                                        <td>
                                            {sanpham}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Đơn vị
                                        </td>
                                        <td>
                                            {renderdonvi()}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Số lượng
                                        </td>
                                        <td>
                                            <div className="inline">
                                                <button className="btn" onClick={subprod}>-</button>
                                                <input type="text" className="form-control" value={soluong} id="txtsoluong" />
                                                <button className="btn" onClick={plusprod}>+</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>

                                        <td>
                                            Họ tên
                                        </td>
                                        <td>
                                            <input type="text" className="form-control" id="txthoten" onChange={(value) => handlerhovaten(value.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại</td>
                                        <td>
                                            <input type="text" className="form-control" id="txtsodienthoai" onChange={(value) => handlersodienthoai(value.target.value)}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Địa chỉ nhận hàng
                                        </td>
                                        <td>
                                            <textarea type="text" multiple="t" className="form-control" id="txtdiachinhanhang" onChange={(value) => handlerdiachinhanhang(value.target.value)}></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Ngày đặt hàng
                                        </td>
                                        <td>
                                            {ngaydathang}
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={closedathang}>Close</Button>
                            <Button variant="dark" onClick={addRowtoGoogleSheet}>Đặt hàng sản phẩm này</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            )
        }

    }
    function renderProduces() {
        var tach = producesstate.split('|');
        const listitems = tach.map((item, key1) => {
            if (item !== '' || item !== null) {
                const tachoftach = item.split('^');

                return (
                    <><div className="col-sm bouderprod" key={key1}>
                        <p>
                            <img src={tachoftach[0]} alt="producs" className='imgprod' onClick={() => showfullimage(tachoftach[0])}></img>

                        </p>
                        <p className="nameprod">
                            {tachoftach[1]}
                        </p>
                        <p className="priceprod">
                            {tachoftach[2]}
                        </p>
                        <p>
                            <button className="btn btn-dark" onClick={() => dathang(tachoftach[0], tachoftach[1])}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                </svg> Đặt hàng
                            </button>
                        </p>

                    </div></>
                )
            }

        })


        return (
            <div>
                {listitems}
            </div>)

    }
    //RenderIMG

    function showfullimage(image) {
        setIsImageFullScreen(true);
        setimageprodurl(image);


    };
    function closefulllimage() {
        setIsImageFullScreen(false);
    }
    function renderfullimga() {
        if (isImageFullScreen === true) {
            return (
                <div>
                    <img src={imageprodurl} alt="imgfull" className="imgprodfull" onClick={closefulllimage}></img>
                </div>
            )

        }
    }
    return (
        <>
            <div className="produces container-fluid">
                <div className='row'>
                    {renderProduces()}
                </div>

            </div>
            <div>
                {renderModal()}

            </div>
            <div>
                {renderfullimga()}
            </div></>
    )
}
export default RenderProduces;
