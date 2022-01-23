import Head from 'next/head'
import Image from 'next/image'
import ArticleList  from './../components/ArticleList';
export default function Home({posts}) {
  return (
    <div>
      <Head><title>Web dev newz</title></Head>
      <h1>Articles API FETCH</h1>
      <ArticleList posts={posts}></ArticleList>
    </div>
  )
}
export const getStaticProps=async()=>{
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const posts = await response.json()
  return {
    props:{
      posts
    }
    
  }
}
