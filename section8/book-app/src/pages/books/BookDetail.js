import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ja from 'date-fns/locale/ja';
import { useState } from 'react';
import { format } from 'date-fns';

const BookDetail = ({ books, setBooks }) => {
  const params = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => {
    return book.id === parseInt(params.id);
  });
  const [value, setValue] = useState(book.readDate);
  const [memo, setMemo] = useState(book.memo);

  const setNewValue = (newValue) => {
    setValue(format(newValue, 'yyyy/MM/dd'));
  };

  const updateBookInfo = (bookId) => {
    const newList = books.filter((book) => {
      if (book.id === bookId) {
        book.readDate = value;
        book.memo = memo;
        return book;
      } else {
        return book;
      }
    });
    setBooks(newList);
    navigate('/');
  };
  return (
    <>
      <Container component="section" maxWidth="md" sx={{ mt: 5 }}>
        <Card sx={{ height: '100%' }}>
          <Grid container>
            <Grid item sm={4}>
              <CardMedia component="img" image={book.image} alt={book.title} />
            </Grid>
            <Grid item sm={8}>
              <CardContent>
                <Typography sx={{ mb: 2, fontSize: '18px' }}>
                  {book.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  読んだ日：
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ja} //日本語対応
                    dateFormats={{ monthAndYear: 'yyyy年 MM月' }} // カレンダー上部の表示変更
                  >
                    <DatePicker
                      label="日付"
                      value={value}
                      maxDate={new Date()} // 当日以降を選べないように
                      onChange={(newValue) => {
                        setNewValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  感想：
                  <br />
                  <TextField
                    multiline
                    fullWidth
                    rows={8}
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                  />
                </Box>
              </CardContent>
              <CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item sm={6}>
                      <Button
                        component={Link}
                        to="/"
                        color="secondary"
                        variant="contained"
                      >
                        一覧に戻る
                      </Button>
                    </Grid>
                    <Grid item sm={6}>
                      <Button
                        color="info"
                        variant="contained"
                        onClick={() => updateBookInfo(book.id)}
                      >
                        保存する
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};
export default BookDetail;
