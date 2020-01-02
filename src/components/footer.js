import React from "react"
import footerStyles from "./footer.module.scss"

const SocialLinks = props => {
	const SOCIAL_ARR = ["github", "linkedin-in"];
	const SOCIAL_LINKS = SOCIAL_ARR.map(app => (
		<li key={app.toString()} className={`social__link link--${app.toString()}`}>
			<a href={`https://${app.toString()}.com/beyonce`} target="blank_" />
			<i className={`fab fa-3x fa-${app.toString()}`} />
		</li>
	));
	return (
		<>
			<ul className="social-links">{SOCIAL_LINKS}</ul>
		</>
	);
};

function Footer() {
  return (
    <div className={footerStyles.footerWrapper}>
      <footer>
        <div className="footer">Created by V.Kopylov</div>
        <SocialLinks />
      </footer>
    </div>
  )
}

export default Footer
