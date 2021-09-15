import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className='footer'>
			<MDBBtn
				tag='a'
				color='none'
				className='m-2'
				style={{ color: "#111166" }}
				href='https://github.com/Parham-S'>
				<MDBIcon fab icon='github' size='2x' />
			</MDBBtn>

			<MDBBtn
				tag='a'
				color='none'
				className='m-2'
				style={{ color: "#111166" }}
				href='https://parhamsaniei.com'>
				<MDBIcon fab icon='dev' size='2x' />
			</MDBBtn>

			<MDBBtn
				tag='a'
				color='none'
				className='m-2'
				style={{ color: "#111166" }}
				href='https://www.linkedin.com/in/psaniei/'>
				<MDBIcon fab icon='linkedin-in' size='2x' />
			</MDBBtn>
		</footer>
	);
};

export default Footer;
