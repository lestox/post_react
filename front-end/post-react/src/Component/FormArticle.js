import {Component} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import {render} from "react-dom";

export default class FormArticle extends Component {

    setArticles = this.props.setArticles;

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            text: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getTitle = (e) => {
        this.setState({title: e.target.value})
    }

    getText = (e) => {
        this.setState({text: e.target.value})
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.articles)

        const newItem = {
            id: generateUniqueID(),
            title: this.state.title,
            text: this.state.text,
            token: 0,
        }
        this.setArticles(prev => [...prev, newItem]);

        const body = new URLSearchParams({
            /*username: 'Francis',
            password: 'password',*/
        })

        const headers = new Headers({
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization': ''
        })

        fetch('http://localhost:2345', {
            method: 'POST',
            data: newItem,
            body: body,
            headers: headers,
            mode: 'no-cors',
            credentials: 'include'
        })
            // .then(response => response.json())
            // .then(json => console.log(json))
    }

    render()
    {
        {
            return (
                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={this.handleSubmit}>
                    <div className="col-12">
                        <div className="form-outline">
                            <input type="text" id="form1" className="form-control" onChange={this.getTitle}/>
                            <label className="form-label" htmlFor="form1">Title</label>
                        </div>
                        <div className="form-outline">
                            <input type="text" id="form1" className="form-control" onChange={this.getText}/>
                            <label className="form-label" htmlFor="form1">Text</label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            )
        }
    }
}