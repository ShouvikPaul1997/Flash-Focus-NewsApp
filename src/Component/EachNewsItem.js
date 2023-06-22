import React, { Component } from 'react'

export default class EachNewsItem extends Component {
    render() {
        const {title,imageUrl,newsUrl,description,author,date} = this.props;
        return (
           
                <div className="card" style={{}}>
                    <img  style={{height:"150px"}}src={imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <p style={{height:"30px"}} class="card-text"><small class="text-muted">Updated by {author} on {date.substring(0, 10)}</small></p>
                            <h5 style={{height:"100px",overflow:"hidden"}} className="card-title ">{this.props.title}</h5>
                            <p style={{height:"80px",overflow:"hidden"}} className="card-text">{description}</p>
                            <a style={{height:"50"}} href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                        </div>
                </div>
        )
    }
}
