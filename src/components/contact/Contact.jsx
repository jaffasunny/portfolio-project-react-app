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

	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;

		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", toggleVisible);

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
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "white",
							}}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "white",
							}}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "white",
							}}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							style={{
								backgroundColor: darkMode && "#333",
								color: darkMode && "white",
							}}
							name="message"
							id=""
							rows="5"
							placeholder="Message"></textarea>
						<button type="Submit">Submit</button>
						{done && <p className="goodbye">Thank you...</p>}
					</form>
					<svg
						width="75"
						height="75"
						viewBox="0 0 75 75"
						fill="none"
						stroke="black"
						className="i-scroll"
						onClick={scrollToTop}
						styles={{
							display: visible ? "inline" : "none",
						}}
						xmlns="http://www.w3.org/2000/svg">
						<g id="scroll">
							<path
								id="Vector"
								d="M40.5 15L34.5 9L28.5 15"
								stroke-width="3"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								id="Vector_2"
								d="M28.5 24L34.5 30L40.5 24"
								stroke-width="3"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<g id="Group">
								<path
									id="Vector_3"
									d="M9 37.5H60"
									stroke-width="3"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
							<path
								id="Vector_4"
								d="M34.5 27V9"
								stroke-width="2.9895"
								stroke-miterlimit="10"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<g id="Group_2">
								<path
									id="Vector_5"
									d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
									stroke-width="3"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</g>
						</g>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Contact;
