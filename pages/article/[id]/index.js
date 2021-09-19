import {server} from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'

const article = ({article}) => {
    //const router = useRouter()
    //const {id} = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt}/>
          <h1>{article.title}</h1>  
          <p>{article.body}</p>
          <br/>
          <Link href='/'>Go Back</Link>
        </>
    )
}


export const getStaticProps = async (context) =>{
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return{
        props:{
            article
        }
    }
}

export const getStaticPaths = async() =>{
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params:{id:id.toString()}}))
    //console.log(paths)
    return {
        paths,
        fallback: false
    }
}




// getServerSideProps each time we go to the link we are fetching the data
// get StaticProps Fetch data at build time.
/*
export const getStaticProps = async (context) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return{
        props:{
            article
        }
    }
}*/

// Faster, can be used in static website
// By using static paths it will dynamically generate all paths for /posts
// For instance if you are only fetching 6 but you hardcode the url with id = 20 it will give you the 20th article
/*
export const getStaticPaths = async() =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params:{id:id.toString()}}))
    //console.log(paths)
    return {
        paths,
        fallback: false
    }
}*/
export default article
