import Link from "next/link";
import articleStyles from "../styles/Posts.module.css";
const ArticleItem = ({ postProps }) => {
  return (
    <div>
      <Link href="/article/[id]" as={`/article/${postProps.id}`}>
        <a className={articleStyles.card}>
          <h3>{postProps.title} &rarr;</h3>
        
        <p>{postProps.body}</p>
        </a>
      </Link>
    </div>
  );
};
export default ArticleItem;
