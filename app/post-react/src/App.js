import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Component/Form";
import Article from "./Component/Article";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export default function App () {

  const [articles, setArticles] = useState( [
    {
      title: "Article exemple",
      text: "bdsfjdfllkdflk",
      key : generateUniqueID()
    },
  ] );

  return (
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">Poster un article</h4>

                  <Form setArticles={setArticles} articles={articles}/>

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