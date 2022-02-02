import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
	const formRef = useRef();
	const [done, setDone] = useState(false);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_uymt8pr",
				"template_ad9256f",
				formRef.current,
				"user_fD2KHovsETcrLtt8Dhxus"
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Let's discuss your project</h1>
					<div className="c-info">
						<div className="c-info-item">
							<img src={Phone} alt="" className="c-icon" />
							+92 3062542314
						</div>
						<div className="c-info-item">
							<img src={Email} alt="" className="c-icon" />
							jaffer.sunny125@gmail.com
						</div>
						<div className="c-info-item">
							<img src={Address} alt="" className="c-icon" />
							Karachi, Pakistan.
						</div>
					</div>
				</div>
				<div className="c-right">
					<p className="c-desc">
						<b>What’s your story?</b> Get in touch. Always available for
						freelancing if the right project comes along. me.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							style={{ backgroundColor: darkMode && "#333" }}
							name="message"
							id=""
							rows="5"
							placeholder="Message"></textarea>
						<button type="Submit">Submit</button>
						{done && <p className="goodbye">Thank you...</p>}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
