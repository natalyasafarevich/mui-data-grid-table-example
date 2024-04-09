import {Modal, Button} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getInstantFilm} from '../../store/films/actions';
import './Popup.scss';

const Popup = ({open, handleClose, data}) => {
  const dispatch = useDispatch();

  const current_film = useSelector((state) => state.films.current_film);
  const current_lang = useSelector((state) => state.films.lang);

  useEffect(() => {
    if (current_lang) {
      dispatch(getInstantFilm(data, current_lang));
      return;
    }
    if (data) {
      dispatch(getInstantFilm(data));
    }
  }, [data, current_lang]);

  return (
    <Modal open={open} onClose={handleClose}>
      <div className='popup'>
        <div
          className='popup-img'
          style={{
            background: `url(https://image.tmdb.org/t/p/w400/${current_film?.backdrop_path})`,
          }}
        ></div>
        <h3>
          {current_lang === 'ru-RU' ? 'Язык ' : 'Language'}:
          <b> {current_film?.original_language}</b>
        </h3>
        <br />
        <h3>
          {current_lang === 'ru-RU' ? 'Обзор' : 'Overview'}:
          <b>
            <span>{current_film?.overview}</span>
          </b>
        </h3>

        <br />
        <h3>
          {current_lang === 'ru-RU' ? 'Слоган' : 'Tagline'}:
          {current_film?.tagline}
        </h3>
        <br />
        <Button variant='contained' onClick={handleClose}>
          {current_lang === 'ru-RU' ? 'Закрыть' : 'Close'}
        </Button>
      </div>
    </Modal>
  );
};
export default Popup;
