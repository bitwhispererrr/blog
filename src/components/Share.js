import React from 'react';
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	RedditShareButton,
} from 'react-share';
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from "react-share";

import '../assets/scss/share.scss';

const Share = ({ socialConfig, tags }) => (
	<div className="post-social">
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
			<span className="icon">
                <TwitterIcon size={32} />
			</span>
		</TwitterShareButton>
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
                <FacebookIcon size={32} />
			</span>
		</FacebookShareButton>
		<LinkedinShareButton url={socialConfig.config.url} className="button is-outlined is-rounded linkedin" title={socialConfig.config.title} >
			<span className="icon">
                <LinkedinIcon size={32} />
			</span>
		</LinkedinShareButton>
		<RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
			<span className="icon">
                <RedditIcon size={32} />
			</span>
		</RedditShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;

