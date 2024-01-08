import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useRef} from "react";
import '../Css/Page.css';
import RenderProduces from "./HomeRender/RenderProduces";
import RenderIntroduce from "./HomeRender/RenderIntroduce";
import RenderAddress from "./HomeRender/RenderAddress";

const Home = () => {
   
  
 
    return (
        <>
            <hr></hr>
            <div>
                Yến sào
            </div>
            <div>
                <RenderIntroduce></RenderIntroduce>
            </div>
            <hr></hr>
            <div>
                Sản phẩm
            </div>
            <div>
                <RenderProduces></RenderProduces>
            </div>
            <hr></hr>
            <div>
                Cửa hàng
            </div>
            <div>
                <RenderAddress></RenderAddress>
            </div>
          
          
        </>
    )

}


export default Home;