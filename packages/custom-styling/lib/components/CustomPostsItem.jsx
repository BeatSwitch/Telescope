import { Components, replaceComponent } from 'meteor/nova:lib';
import React, { PropTypes, Component } from 'react';
import { FormattedMessage, FormattedRelative } from 'react-intl';
import { ModalTrigger } from "meteor/nova:core";
import { Link } from 'react-router';
import Posts from "meteor/nova:posts";
// import { withCurrentUser } from 'meteor/nova:core';

class PostsItem extends Component {

  renderCategories() {
    return this.props.post.categories && this.props.post.categories.length > 0 ? <Components.PostsCategories post={this.props.post} /> : "";
  }

  renderCommenters() {
    return this.props.post.commenters && this.props.post.commenters.length > 0 ? <Components.PostsCommenters post={this.props.post}/> : "";
  }

  renderActions() {
    return (
      <div className="post-actions">
        <ModalTrigger title="Edit Post" component={<a className="posts-action-edit"><FormattedMessage id="posts.edit"/></a>}>
          <Components.PostsEditForm post={this.props.post} />
        </ModalTrigger>
      </div>
    )
  }
  
  render() {

    const {post} = this.props;

    let postClass = "posts-item";
    if (post.sticky) postClass += " posts-sticky";

    return (
      <div className={postClass}>
        {post.thumbnailUrl ? <Components.PostsThumbnail post={post}/> : null}

        <div className="posts-item-content">

          <h3 className="posts-item-title">
            <Link to={Posts.getLink(post)} className="posts-item-title-link" target={Posts.getLinkTarget(post)}>
              {post.title}
            </Link>
          </h3>

          <div className="posts-item-meta">
		    <img src="https://s2.googleusercontent.com/s2/favicons?domain=\{Posts.getLink(post)\}" />
            <div className="posts-item-date">{post.postedAt ? <FormattedRelative value={post.postedAt}/> : <FormattedMessage id="posts.dateNotDefined"/>}</div>
            {this.props.currentUser && this.props.currentUser.isAdmin ? <Components.PostsStats post={post} /> : null}
            {Posts.options.mutations.edit.check(this.props.currentUser, post) ? this.renderActions() : null}
            {this.renderCategories()}
          </div>

        </div>

      </div>
    )
  }
}

replaceComponent('PostsItem', PostsItem);

