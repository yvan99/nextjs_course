import articleStyles from "../styles/Posts.module.css";
import ArticleItem from "./articleItem";
const ArticleList = ({ posts }) => {
  return (
    <div className={articleStyles.grid}>
      {posts.map((post) => (
        <ArticleItem postProps={post} key={post.id}  />
      ))}
    </div>
  );
};
export default ArticleList;
