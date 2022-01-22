import articleStyles from '../styles/Posts.module.css'
export const ArticleList = ({posts}) => {
  return <div className={articleStyles.grid}>
 {posts.map((post)=>(
        <h3>{post.title}</h3>))
      }
  </div>;
};
