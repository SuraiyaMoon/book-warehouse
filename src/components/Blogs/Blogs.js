import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Blogs</h3>
            <article>
                <h5>Question: Whats the Difference Between Javascript and Node js?</h5>
                <p>1. Javascript Is a programming Language. On the other side Node js is a runtime environment. <br />
                    2. Js can only run in browser .Node js can be run outside the browser.
                </p>
            </article>
            <article>
                <h5>Question: Whats the Difference Between SQL and NoSQL?</h5>
                <p>1. A NoSQL database has dynamic schema for unstructured data.On the other hand SQL data is Structured.
                    <br />
                    2. SQL databases are table-based.
                    NoSQL databases are either key-value pairs
                </p>
            </article>
        </div>
    );
};

export default Blogs;