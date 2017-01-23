import React from 'react';
import { IndexLink } from 'react-router';
import { replaceComponent } from 'meteor/nova:core';

const Logo = ({logoUrl, siteTitle}) => {
  if (logoUrl) {
    return (
      <h1 className="logo-image ">
        <IndexLink to={{pathname: "/"}}>
			<svg width="240px" height="38px" viewBox="0 0 240 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<rect id="Rectangle-6" stroke="none" fill="#0CD3AB" fillRule="evenodd" x="0" y="0.8" width="14" height="4"></rect>
				<rect id="Rectangle-6-Copy" stroke="none" fill="#0CD3AB" fillRule="evenodd" x="0" y="8.05769231" width="10.6666667" height="4"></rect>
				<rect id="Rectangle-6-Copy-2" stroke="none" fill="#0CD3AB" fillRule="evenodd" x="0" y="15.1153846" width="6" height="4"></rect>
				<text id="A-BEATSWITCH-COMPANY" stroke="none" fill="none" fontFamily="Helvetica" fontSize="10" fontWeight="normal">
					<tspan x="190" y="8" fill="#FFFFFF">BETA </tspan>
				</text>
				<text id="ESTIVALTECH" stroke="none" fill="none" fontFamily="Helvetica-Bold, Helvetica" fontSize="25" fontWeight="bold">
					<tspan x="15.6113281" y="19" fill="#0CD3AB">ESTIVAL</tspan>
				    <tspan x="119.334473" y="19" fontFamily="Helvetica" fontWeight="normal" fill="#FFFFFF">TECH</tspan>
				</text>
			</svg>
        </IndexLink>
      </h1>
    )
  } else {
    return (
      <h1 className="logo-text">
        <IndexLink to={{pathname: "/"}}>{siteTitle}</IndexLink>
      </h1>
    )
  }
}

replaceComponent('Logo', Logo);
