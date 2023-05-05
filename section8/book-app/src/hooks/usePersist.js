import { useEffect, useState } from 'react';

export const usePersist = (STORAGE_KEY) => {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  // // 初回localstorageがあったら表示データを設定
  // useEffect(() => {
  //   if (localStorage.getItem(STORAGE_KEY)) {
  //     try {
  //       setBooks(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }, []);

  // booksが変更されたらlocalstrageに設定
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
    // eslint-disable-next-line
  }, [books]);
  return [books, setBooks];
};
