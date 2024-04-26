import { Link } from 'react-router-dom';

type Props = {
  innerStyle: any;
  userId: string;
  id: string;
  title: string;
  body: string;
};

export const PostItem = ({ innerStyle, userId, id, title, body }: Props) => {
  return (
    <li style={innerStyle}>
      User ID: {userId}
      <br />
      Id: {id}
      <Link to={`/${id}`}>
        <h3>{title}</h3>
        <p>{body}</p>
      </Link>
      <hr />
    </li>
  );
};
