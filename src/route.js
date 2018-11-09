import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Auth from './component/Auth/Auth';
import Form from './component/Form/Form';
import Post from './component/Post/Post';

export default(
<Switch>
    <Route exact path='/' component={Auth}/>
    <Route path='/dashboard' component={Dashboard}/>
    <Route path='/post/:postid' component={Post}/>
    <Route path='/new' component={Form}/>
</Switch>
)

