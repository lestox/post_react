import React from "react";

export default function Article({title, text}) {

    let [title, setTitle] = React.useState("To do");
    
    return (
        <table className="table mb-4" style={{ display: show ? "block" : "none" }}>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Text</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">{title}</th>
                <td>{text}</td>
            </tr>
            </tbody>
        </table>
    )
}