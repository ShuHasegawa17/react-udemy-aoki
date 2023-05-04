import { useParams } from 'react-router-dom';
import { getBook } from '../functions/book';

const BookDetail = () => {
  const params = useParams();
  console.log(params);
  const book = getBook(parseInt(params.id));
  return (
    <>
      本の詳細ページ
      <p>id: {book.id}</p>
      <p>タイトル: {book.title}</p>
    </>
  );
};

export default BookDetail;
