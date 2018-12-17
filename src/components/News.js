import React,{Component} from 'react';
import {Link} from 'react-router-dom';
const News = ({news_id,news_thumb,news_title,news_short_text})=>{
    const news_t = news_title;
    return(
        <div className="col-md-4">
            <div key={news_id} className="blog-post">
                <Link to={`/en/BlogPost/${news_id}`} className="post-img">
                    <img src={`http://utf.ut.ac.ir/${news_thumb}`} alt=""/>
                </Link>
                <div className="post-content">
                    <h3 style={{height:"85px"}}>
                    <Link to={`/en/BlogPost/${news_id}`} className="read-more">

<a href="">
{
news_t.substr(0,55)
} ...


</a>


                        </Link>
                    </h3>
                    <p style={{height: "168px"}}>{news_short_text}</p>

                    <Link to={`/en/BlogPost/${news_id}`} className="read-more">
                        Read More <i className="fa fa-angle-right"/>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default News;
