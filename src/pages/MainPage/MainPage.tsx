import { useNavigate } from 'react-router-dom';
import { Post, useGetPostsQuery } from '../../shared/api/postsApi';
import { PostList } from '../../entities/PostList/PostList';
import { PostItem } from '../../entities/Post/PostItem';

export default function MainPage() {
  const { data: posts, isLoading, isError } = useGetPostsQuery(1);

  const navigate = useNavigate();
  if (isError) {
    navigate('/error');
  }

  if (!posts) {
    return;
  }

  const postList = posts.map((post: Post) => (
    <PostItem
      key={post.id}
      userId={post.userId}
      id={post.id}
      title={post.title}
      body={post.body}
    />
  ));

  console.log(postList);

  return <div>{posts && <PostList>{postList}</PostList>}</div>;
}
