import React from "react";
import Article from "./Article.js";
import blogData from "../data/blog";

 function ArticleList () {
    const blogList = blogData.posts.map((blogInfo) => {
     return (
       
         <Article
          key={blogInfo.id}
          title={blogInfo.title}
          date={blogInfo.date}
          preview={blogInfo.preview}
          minutes={blogInfo.minutes}
          />
        
        );
    });

    return (
       <main>{ blogList }</main>
)
 }
export default ArticleList;