import {Modal, Button} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import './Popup.scss';
import {useEffect} from 'react';
import {getInstantFilm} from '../../store/films/actions';

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
        <h3>Language: {current_film?.original_language}</h3>
        <h3>
          Overview <span>{current_film?.overview}</span>{' '}
        </h3>
        <h3>tagline: {current_film?.tagline} </h3>
        <Button variant='contained' onClick={handleClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};
export default Popup;
