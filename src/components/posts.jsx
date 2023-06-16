import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(`http://localhost:3001/api/posts`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const {items} = this.state;

        return (
            <div className="post-list">
                <h2 className="post-list-title">Posts</h2>
                {items.map((item) => {
                    return <div key={item.id}>
                        <div className="card">
                            <img className="card-img-top" src={item.image} alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                    <Link to={'post/'+item.id} className="btn btn-primary">Details</Link>
                                </div>
                        </div>
                    </div>
                })}
            </div>)
    }
}

export default Posts;