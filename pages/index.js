import React from "react";
import {blogPost} from '../constants'


import Layout from "../components/Layout";
import Header from "../components/Header";
import Card from "../components/Card/card";
import Main from "../components/Main";
import useWindowSize from "../hook/useWindowSize";



function HomePage() {
    return <Layout>
        <Header/>
        <Main>
            {blogPost.map(post =>{
               const size = useWindowSize()
               return <Card
                      key={post.id}
                      large={size.width < 1024 ? false : post.primary}
                      photoSrc={post.photo}
                      photoAlt={post.head}
                      head={post.head}
                      article={post.shortArticle}
                      tags={post.tag}
                      time={post.date}
                      read={post.readMin}
                />
            })}
        </Main>

    </Layout>
}

export default HomePage