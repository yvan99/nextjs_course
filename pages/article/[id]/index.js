import Link from "next/link";
import { useRouter } from "next/router";
const article = ({singleArticle}) => {
    // const router = useRouter()
    // const {id} = router.query  
    // destructure
  return <>
  <h1>{singleArticle.title}</h1>
  <p>{singleArticle.body}</p>
  <Link href='/'>Go back</Link>
  </>;
};
export const getServerSideProps=async(context)=>{
    // getserverside func helps to capture the id of the url
const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
const singleArticle = await response.json()
return{
    props:{singleArticle
}
}
}
export default article
