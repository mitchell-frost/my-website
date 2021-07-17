import React from 'react';
import blog from './Blog/Blog';
import { Container } from 'react-bootstrap';
import { Route} from "react-router-dom";

class Blog extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className="blog">
                <Route path="/blog" exact component={blog}></Route>
            </div>
        )
    }
}
export default Blog;