import React from 'react';
import { Post } from '../../shared/api/postsApi';

export const PostItem = ({ userId, id, title, body }: Post) => {
  return (
    <li>
      {' '}
      User ID: {userId}
      <br />
      Id: {id}
      <br />
      Title: {title}
      <br />
      Body: {body}
    </li>
  );
};
