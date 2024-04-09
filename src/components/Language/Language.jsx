import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Select} from '@mui/base/Select';
import {Option} from '@mui/base/Option';
import {getFilmLang} from '../../store/films/actions';

const Language = () => {
  const [lang, setLang] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultValue = 'en-US';
    const value = localStorage.getItem('lang');
    if (value) {
      const parsedValue = JSON.parse(value);
      setLang(parsedValue.lang || defaultValue);
    } else {
      setLang(defaultValue);
    }
  }, []);

  useEffect(() => {
    dispatch(getFilmLang(lang));
  }, [lang]);

  const handleClick = (e) => {
    dispatch(getFilmLang(e.currentTarget.dataset.lang));
    setLang(e.currentTarget.dataset.lang);
  };

  return (
    <div>
      <Select value={lang}>
        <Option data-lang='en-US' onClick={handleClick} value='en-US'>
          EN
        </Option>
        <Option data-lang='ru-RU' onClick={handleClick} value='ru-RU'>
          RU
        </Option>
      </Select>
    </div>
  );
};

export default Language;
