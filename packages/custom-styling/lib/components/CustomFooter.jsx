import { registerComponent } from 'meteor/nova:lib';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { replaceComponent } from 'meteor/nova:core'

const Footer = props => {
  return (
  	<div className="footer">Festivaltech.io is an initiative from <a href="https://www.beatswitch.com" target="_blank">Beatswitch - Festival Management Technology</a>. <a href="http://telescopeapp.org" target="_blank"><FormattedMessage id="app.powered_by"/></a></div>
  )
}

replaceComponent('Footer', Footer);