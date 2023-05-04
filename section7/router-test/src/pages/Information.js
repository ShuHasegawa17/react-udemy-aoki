import { useNavigate } from 'react-router-dom';
const Information = () => {
  const navigate = useNavigate();
  const gotToContact = () => {
    navigate('/contact');
  };
  return (
    <>
      <h2>Informationです</h2>
      <button onClick={gotToContact}>お問い合わせへ</button>
    </>
  );
};

export default Information;
