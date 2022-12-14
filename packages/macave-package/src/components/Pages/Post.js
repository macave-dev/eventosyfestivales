import React, {useState,useEffect,useRef} from 'react';
import {connect,styled, decode,Slot} from 'frontity';
import dayjs from "dayjs"
import InterestedPosts from '../InterestedPosts';
import RelatedPosts from '../RelatedPosts';
import RelatedTopics from '../RelatedTopics';
import Author from '../Author';
import { Head } from 'frontity';
import SharePostBar from '../SharePostBar';

import {Adsense} from '@ctrl/react-adsense';
import GoogleAdSense from 'react-simple-adsense';



const Post = ({state, libraries,actions,link}) => {

  const ref = useRef();
 
  const url = 'https://eventosyfestivales.com/wp-json/wp-macave/v1/schema';
  const [information,setInformation] = useState()
  const [windowState, setWindowState] = useState()
  const fetchApi = async() => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      setInformation(responseJSON);
  }

  useEffect(() => {
      fetchApi();      
      setWindowState( false )
  },[])


  
  useEffect(() => {
    if ( ref.current ) {
      setWindowState( true )
    }
  })

  const Html2React = libraries.html2react.Component

  const data = state.source.get(link);
  const post = state.source[data.type][data.id]
  const category_post = state.source.category[post.categories[0]]
  const content = post.content.rendered;
  const content_split = content.split('<p>Twitter</p>')

    return (
      <div >
         
         <Head>
         
          {!information ? '':
            <script type="application/ld+json">{
              `{
                "@context":"https://schema.org",
                "@type":"NewsArticle",
                "mainEntityOfPage":{
                    "@type":"WebPage",
                    "@id":"${post.link}" 
                },
                "headline":"${post.title.rendered}",
                "image":{
                    "@type":"ImageObject",
                    "url":"${post.jetpack_featured_media_url}",
                    "width":1200,
                    "height":652
                },
                "datePublished":"${post.date}", 
                "dateModified":"${post.date_gmt}", 
                "author":{
                    "@type":"Person",
                    "name":"${state.source.author[post.author].name}", 
                    "jobTitle": "Journalist",
                    "url":"${state.source.author[post.author].link}"
                },
                "publisher":{
                    "@type":"Organization",
                    "name":"${information.Name}",
                    "url": "${state.source.url}",
                    "logo":{
                      "@type":"ImageObject",
                      "url":"${information.Logo}" 
                    }
                }
              }`
            }</script>
          }

          <link data-rh="true" rel="preload" as="image" imagesrcset={post.jetpack_featured_media_url}/>
          <meta data-rh="true" name="description" content={post.yoast_head_json.og_description}/>
          <meta data-rh="true" name="twitter:card" content="summary_large_image"/>
          {!information ? '': <meta data-rh="true" name="twitter:site" content={information.Name}/>}
          {!information ? '': <meta data-rh="true" name="twitter:title" content={post.title.rendered}/> }
          <meta data-rh="true" name="twitter:description" content={post.yoast_head_json.og_description}/>
          <meta data-rh="true" name="twitter:image" content={post.jetpack_featured_media_url}/>
          <meta data-rh="true" name="robots" content="max-image-preview:large"/>
          {!information ? '':  <meta data-rh="true" property="fb:pages" content={information.FacebookPages}/>}
          {!information ? '': <meta data-rh="true" property="fb:app_id" content={information.FacebookId}/>  }
          <meta data-rh="true" property="og:type" content="article"/>
          <meta data-rh="true" property="og:title" content={post.title.rendered}/>
          {!information ? '':  <meta data-rh="true" property="og:site_name" content={information.Name}/> }
          <meta data-rh="true" property="og:image" content={post.jetpack_featured_media_url}/>  
          <meta data-rh="true" property="og:description" content={post.yoast_head_json.og_description}/>
          <title data-rh="true">{decode(post.title.rendered)}</title>


          <script type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              window._taboola = window._taboola || [];
              _taboola.push({article:'auto'});
              !function (e, f, u, i) {
              if (!document.getElementById(i)){
              e.async = 1;
              e.src = u;
              e.id = i;
              f.parentNode.insertBefore(e, f);
              }
              }(document.createElement('script'),
              document.getElementsByTagName('script')[0],
              '//cdn.taboola.com/libtrc/macave-network/loader.js',
              'tb_loader_script');
              if(window.performance && typeof window.performance.mark == 'function')
              {window.performance.mark('tbl_ic');}
              `,
            }}
          />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1507048971343506"></script>
            
         </Head>

          

         <SharePostBar props = {windowState}  />
         <Container data-id="post-container" ref={ref}>
          <Title >{decode(post.title.rendered)}</Title>

          <DateWrapper>
              <strong>{dayjs(post.date).format("DD MMMM YYYY")} - {category_post.name}</strong>
              <strong>Autor: {state.source.author[post.author].name} </strong><br/>
            </DateWrapper>

            
            
            <Content>
              <LeftSide>
                <img src = {post.jetpack_featured_media_url} alt = {state.source.attachment[post.featured_media].alt_text}></img>
                <Html2React html={state.source.attachment[post.featured_media].caption.rendered} />

                <div className='Advertisement'>
                  <GoogleAdSense
                    html={
                      `<ins class="staticpubads89354"\n`+
                      `data-sizes-desktop="300x600, 240x600, 200x600, 160x600"\n`+
                      `data-sizes-mobile="300x600, 240x600, 200x600, 160x600"\n`+
                      `data-slot="2"></ins>`
                    }/>
                </div>
                


                <ContentInfo>
                  <Html2React html={content} />
                </ContentInfo>

                <InterestedPosts/>
                  <Adsense
                    client="ca-pub-1507048971343506"
                    slot="9226609320"
                    style={{ display: 'block' }}
                    layout="in-article"
                    format="fluid"
                  />          
              </LeftSide>


              <RightSide>
                <Advertisement>
                  <Adsense
                    client="ca-pub-1507048971343506"
                    slot="7589976484"
                    style={{display: 'inline-block',width:300,height:600}}
                  />                  
                </Advertisement>
                  
                <Advertisement>
                    
                </Advertisement>
              </RightSide>


              </Content>
                {category_post ? <RelatedPosts props = {category_post}/> : null }
              <Content>

              <LeftSide>
                {post.tags && <RelatedTopics tags = {post.tags}/> }
                <Author props = {state.source.author[post.author]}/>
              </LeftSide>

              <RightSide>
                <Advertisement>
                  
                </Advertisement>
              </RightSide>
            </Content>
         </Container>

        
      </div>
    )
    
}

export default connect(Post)

const Container = styled.div`
  max-width: 870px;
  margin: 0 auto;
  width: 95%;
  @media (max-width: 900px){
    width: 90%;
  }
`;     
const LeftSide = styled.div``
const RightSide = styled.div`
  @media (max-width: 900px){
    display: none;
  }
`
const Title = styled.h1`
  margin: 0 0 14px;
  font-size: 28px;
  color: #4C4A58;
  font-weight: 400;
`;

const DateWrapper = styled.p`
  strong{
    font-size: 13px;
    color: #868495;
    font-weight: 400;
    display: block;
    &:first-of-type{
      margin-bottom: 4px;
    }
  }
`;
const Content = styled.div`
  
  display: grid;
  grid-template-columns: calc( 60% - 18px) calc(40% - 18px);
  grid-gap: 36px;
  margin: 24px 0 50px;
  img, figure{
    max-width: 100%;
    height: auto;
  }
  img{
    border-radius: 10px;
    position: relative;
  }
  figure{
    margin: 32px 0;
    figcaption{
      font-size: 13px;
      font-weight: 400;
      line-height: 15px;
      max-height: 60px;
      margin: 0;
      color: #4C4A58;
    }
  }
  *{
    padding: 0;
  }
  @media (max-width: 900px) {
    display: block;
    img, figure{
      max-width: 80%;
      height: auto;
      margin: 20px auto;
      display: block;
    }
    figure{
      text-align: center;
    }
  }
  @media (max-width: 767px) {
    img, figure{
      max-width: 100%;
      height: auto;
      margin: 20px auto;
      display: block;
    }
    figure{
      text-align: center;
      margin-bottom: 40px;
      img{
        margin: 0;
      }
    }
  }
  p{
    color: #4C4A58;
    font-size: 13px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
  }
`;

const ContentInfo = styled.div`
  margin: 32px 0 0;
  font-size: 15px;
  color: #4C4A58;
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
    font-size: 15px;
    margin: 34px 0 30px;
  }
  h2{
    font-size: 22px;
  }
  ul, ol{
    padding: 0 0 0 15px;
    li{
      margin-bottom: 10px;
    }
  }
  a{
    text-decoration: none;
    color: #e22658;
    font-weight: 500;
    &:hover{
      text-decoration: underline;
    }
  }
  strong{
    font-weight: 500;
  }
`
const PostInfo = styled.div`
    background-image: linear-gradient(to right, #f4f4f4f, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;
    & > a{
        margin: 0px;
    }
`
const Advertisement = styled.div`
  img{
      margin-bottom: 16px;
      width: 100%;
      height: auto; 
  }
`
const Paragraph = styled.div`
  display: block;
  margin-bottom: 10px;
`