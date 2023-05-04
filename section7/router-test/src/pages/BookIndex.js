import { getBooks } from '../functions/book';
import { Link } from 'react-router-dom';

const BookIndex = () => {
  const books = getBooks();
  return (
    <>
      本の一覧です。
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book-list/${book.id}`}>
              {book.id}: {book.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookIndex;
