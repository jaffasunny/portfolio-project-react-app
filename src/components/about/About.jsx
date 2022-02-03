import React from "react";
import "./about.css";
import Award from "../../img/award.png";
import Disc from "../../img/Me full.png";

const About = () => {
	return (
		<div className="a">
			<div className="a-left">
				<div className="a-card bg"></div>
				<div className="a-card">
					<img className="a-img" src={Disc} alt="" />
				</div>
			</div>
			<div className="a-right">
				<h1 className="a-title">About Me</h1>
				<p className="a-sub">
					It is a long established fact that a reader will be distracted by the
					readable content.
				</p>
				<p className="a-desc">
					A seventh semester Computer Science Undergrad student with a
					background in web design and development. Good amount of experience
					adapting to technologies. Carrying expertise in ReactJS tech stack
					along with strong fundamentals in JavaScript. Also having a good grasp
					of Object Oriented Programming, Relational Database (Sql) and Data
					Structures.
				</p>
				<div className="a-award">
					<img src={Award} alt="" className="a-award-img" />
					<div className="a-award-texts">
						<h4 className="a-award-title">International Design Awards 2021</h4>
						<p className="a-award-desc">
							Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
							and fugit.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
