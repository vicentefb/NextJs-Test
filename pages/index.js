import ArticleList from '../components/ArticleList'
import {server} from '../config'

export default function Home({articles}) {
  //console.log(articles)
  return (
    <div>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming'/>
      <ArticleList articles={articles}/>
    </div>
  )
}

// fetch it at build time
export const getStaticProps = async () =>{
  // fetching data 
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}

// fetch it at build time
// export const getStaticProps = async () =>{
  // fetching data 
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//  const articles = await res.json()

//  return {
 //   props:{
 //     articles
  //  }
  //}
//}