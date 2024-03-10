import posts from '../../json/posts.json';
import Cards from '../Cards';
import { FC } from 'react';
import './styleBegin.css'

interface Post {
  id: number;
  tipo: string;
  tipo2?: string;
  tipo3?: string;
  titulo: string;
  texto: string;
}

const Begin: FC = () => {
  return (
    <div className="cards-contaiiner">
      {posts.map((post: Post) => (
        <div key={post.id} className="card-wrapper">
          <Cards post={post} />
        </div>
      ))}
    </div>
  );
};

export default Begin;
