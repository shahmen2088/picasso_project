import { Link, useParams } from 'react-router-dom';
import { Post, useGetPostQuery } from '../../shared/api/postsApi';
import { PostItem } from '../../entities/Post/PostItem';

export const ItemPage = () => {
  const params = useParams();
  const { data: post, isLoading } = useGetPostQuery(params.id ?? '1');
  if (!post) {
    return;
  }
  const { userId, id, title, body }: Post = post;

  return (
    <>
      {post && (
        <div>
          <h2>The page of the post</h2>
          <PostItem
            innerStyle={undefined}
            userId={userId}
            id={id}
            title={title}
            body={body}
          />
          <Link to={'/'}>Назад</Link>
        </div>
      )}
      {isLoading && 'Loading...'}
    </>
  );
};
