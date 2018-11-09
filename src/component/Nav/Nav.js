import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props) {
 if (props.location.pathname !== '/'){
     //(window.location.pathname worked without any imports or extra exports)
    return (
        <div style={{
        
                width: '100px',
                height: '100vh',
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginBottom: '35px',
                boxSizing: 'border-box',
                top: '0',
                left: '0',
                padding: '20px',
                color: '#fff',
                backgroundImage: '-webkit-gradient(linear,left bottom,left top,from(#ff7abe),to(#ff9770))',
                backgroundImage: '-webkit-linear-gradient(bottom,#ff7abe,#ff9770)',
                backgroundImage: '-o-linear-gradient(bottom,#ff7abe,#ff9770)',
                backgroundImage: 'linear-gradient(0deg,#ff7abe,#ff9770)',
                webkitBoxShadow: '10px 0 20px 0 rgba(0,0,0,.1), 5px 0 5px rgba(0,0,0,.2)',
                boxShadow: '10px 0 20px 0 rgba(0,0,0,.1), 5px 0 5px rgba(0,0,0,.2)'
        }}>
        <div style={{
            // display: 'flex',
            // flexDirection: 'column',
            // justifyContent: 'space-between'
        }}>
        <img src={`https://robohash.org/${props.username}`}/>
        <h2>{props.username}</h2>
        <Link to='/dashboard'>
            <button >Home</button>
        </Link>
        <Link to='/new'>
            <button 
            >New Post</button>
        </Link>
        <div style={{
            display: 'flex',
            justifyContent: 'initial'

        }}>
        <Link to='/'>
            <button>Logout</button>
        </Link>
        </div>
        </div>
       </div>
    )
    } else { return null}
}

function mapStateToProps (state) {
    return {
        username: state.username,
        user_image: state.user_image
    }
}

export default connect(mapStateToProps)(withRouter(Nav));

// onClick={() => ()}