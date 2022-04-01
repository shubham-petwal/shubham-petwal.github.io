import "./foot.css";
import React  from "react";
import lk from "../../img/linkdin.png";
import ml from "../../img/mail.png";
import gt from "../../img/github.png";

const Foo = () => {
    return (
        <div className="fo1">
            <br></br>
      <center>
      <a href="https://github.com/shubham-petwal">
      <img
            src={gt} alt=""
            className="a-img2"
          />
      </a>
      <a href="https://www.linkedin.com/in/shubham-petwal/">
      <img
            src={lk} alt=""
            className="a-img3"
          />
       </a>
         
        <a href="mailto:shubhampetwal250@gmail.com">
           <img
            src={ml} alt=""
            className="a-img1"
          />
        </a>
      </center>

            </div>

        );
    };
    
    export default Foo;