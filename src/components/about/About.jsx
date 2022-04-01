import "./about.css";
import Resume from "../../img/pdf1.png";
import Shubham from "../../img/Shubham.jpg";
import VideoResume from "../../img/play.png";
import Pdf from "./Shubham_Resume.pdf";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <div className="box">
            <div className="imgBox">
          <img
            src={Shubham} alt=""
            className="a-img"
          />
         <div className="content">
				<h2>Shubham Petwal</h2>
				<p>
        “The secret of getting ahead is getting started.” ...
				</p>
			</div>
      </div>
          </div>
          
        </div>
      </div>
      <br></br>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        My name is Shubham Petwal. I am from Rishikesh, Uttarakhand. Currently I am pursuing my Bachelors of Technology in
        Computer Science and Engineering from Lovely Professional University.
        </p>
        <p className="a-desc">
Open minded and life-long learning are the qualities which a person in any 
domain should have and I possess all of them. Along with good interpersonal and communication skills.
My primary language is Python.
 I have good knowledge
 in the domain of development, I also have practical experience in Django Framework, laravel framework and ReactJS 
  as well and have done various certifications and projects based on the experience gained like making a clone website of Imanage, a fully fledged pizza ordering website in Django
   and an ecommerce website in Laravel.
  
 Full details of the following are mentioned in my resume below.</p>
        <div className="a-award">
        <h3 className="a-award-title">My Resume:</h3>
         <a href={Pdf} download="Resume.pdf" className="pdf"><img src={Resume} alt="" className="a-award-img" /></a>
          <div className="a-award-texts">
          
            <p className="a-award-desc">
            <a href="#">
               <img src= {VideoResume} alt="videoresume"></img>
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
