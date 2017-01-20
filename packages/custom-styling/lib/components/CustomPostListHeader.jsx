import { Components, registerComponent, replaceComponent } from 'meteor/nova:lib';
import React from 'react';
import Categories from "meteor/nova:categories";

const PostsListHeader = () => {

  return (
    <div>
      <div className="posts-list-header">
        <div className="posts-list-header-categories">
          <Components.CategoriesList />
        </div>
        <Components.SearchForm/>
      </div>
    </div>
  )
}

replaceComponent('PostsListHeader', PostsListHeader);
