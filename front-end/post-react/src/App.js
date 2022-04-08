import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormArticle from "./Component/FormArticle";
import Article from "./Component/Article";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default function App () {

  /*    useEffect(() => {
    const body = new URLSearchParams({
        username: 'Francis',
        password: 'password',
    })

    const headers = new Headers({
        'Content-Type':'application/x-www-form-urlencoded',
        'Authorization': Basic ${btoa('Francis:password')}
    })

    fetch('http://localhost:2345', {
    method: 'POST',
    body: body,
    headers: headers,
    mode: 'cors',
    credentials: 'include'
    })
    .then(res => res.json())
        .then(data => console.log(data))
    }, [])*/


  const [articles, setArticles] = useState( [] );

  return (
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">Poster un article</h4>

                  <FormArticle setArticles={setArticles} articles={articles}/>

                  {articles.map((article) => (
                      (<Article title={article.title} text={article.text} key={article.id}/>)
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}