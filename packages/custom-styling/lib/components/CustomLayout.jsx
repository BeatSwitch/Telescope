import { Components, registerComponent, replaceComponent } from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';

class Layout extends Component {

  render() {
    return (
      <div className="wrapper" id="wrapper">

        <Components.HeadTags />

        <div className="masthead">

          <Components.UsersProfileCheck {...this.props} />

          <Components.Header {...this.props}/>
		
			<div className="text">

					<h1>The latest news in the festival industry</h1> 
					<h2>The latest festival technology news, curated by the leaders shaping the industry.</h2>

			</div>

        </div>
      
        <div className="main">

          <Components.FlashMessages />

          <div className="row">

            <div className="col-md-8">

              {this.props.children}

            </div>

            <div className="col-md-4">

              <Components.Newsletter />

              <a className="twitter-timeline" data-height="500" href="https://twitter.com/Festivaltech_io">Tweets by Festivaltech</a> <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>

            </div>

          </div>

        </div>

        <div className="footer-wrapper">

            <Components.Footer {...this.props}/>

        </div>
      
      </div>
    )
  }
}

replaceComponent('Layout', Layout);
