import { useGetPostsQuery } from '../../shared/api/postsApi';
import { PostItem } from '../../entities/Post/PostItem';
import { FixedSizeList as List } from 'react-window';

export const MainPage = () => {
  const { data: posts, isLoading } = useGetPostsQuery({ limit: 100, start: 0 });

  return (
    <>
      {posts && (
        <div>
          <h1>Example of List Virtualization</h1>
          <List
            innerElementType={'ul'}
            width={800}
            height={550}
            itemData={posts}
            useIsScrolling={true}
            itemSize={150}
            itemCount={posts.length}
          >
            {({ index, style }) => {
              return (
                <PostItem
                  innerStyle={style}
                  userId={posts[index].userId}
                  id={posts[index].id}
                  title={posts[index].title}
                  body={posts[index].body}
                />
              );
            }}
          </List>
        </div>
      )}
      {isLoading && 'Loading...'}
    </>
  );
};
