import { getComponent, addRoute } from 'meteor/nova:core';

addRoute([
<<<<<<< HEAD
  {name:'posts.list',     path: '/',                    component: getComponent('PostsHome')}, // index route
  {name:'posts.daily',    path:'daily',                 component: getComponent('PostsDaily')},
  {name:'posts.single',   path:'posts/:_id(/:slug)',    component: getComponent('PostsSingle')},
  {name:'users.single',   path:'users/:slug',           component: getComponent('UsersSingle')},
  {name:'users.account',  path:'account',               component: getComponent('UsersAccount')},
  {name:'resetPassword',  path:'reset-password/:token', component: getComponent('UsersResetPassword')},
  {name:'users.edit',     path:'users/:slug/edit',      component: getComponent('UsersAccount')},
=======
  {name:'posts.list',    path: 'list',                  component: Components.PostsHome }, 
  {name:'posts.daily',    path:'/',                 	component: Components.PostsDaily}, // index route
  {name:'posts.single',   path:'posts/:_id(/:slug)',    component: Components.PostsSingle},
  {name:'users.single',   path:'users/:slug',           component: Components.UsersSingle},
  {name:'users.account',  path:'account',               component: Components.UsersAccount},
  {name:'resetPassword',  path:'reset-password/:token', component: Components.UsersResetPassword},
  {name:'users.edit',     path:'users/:slug/edit',      component: Components.UsersAccount},
>>>>>>> Set daily as default route
]);
