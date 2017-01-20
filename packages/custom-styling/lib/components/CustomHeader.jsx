import React from 'react';
import { withCurrentUser, getSetting, Components, registerComponent, replaceComponent } from 'meteor/nova:core';

const Header = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "Nova");
  const tagline = getSetting("tagline");

  return (
    <div className="header-wrapper">

      <header className="header">

        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        
        <div className="nav">
          
          <div className="nav-new-post">
              {!!props.currentUser ? <Components.PostsNewButton/> : '' }
          </div>

          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>


        </div>

      </header>
    </div>
  )
}

replaceComponent('Header', Header);
