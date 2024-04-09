import {useSelector} from 'react-redux';
import React, {useState, useEffect} from 'react';

const Theme = ({themes}) => {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [isUpdate, seIsUpdate] = useState(false);

  useEffect(() => {
    if (isUpdate) {
      document.querySelector('html').setAttribute('data-theme', selectedTheme);
      seIsUpdate(false);
    }
  }, [isUpdate]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setSelectedTheme(savedTheme);
      seIsUpdate(true);
    }
  }, []);

  const changeTheme = (e) => {
    const theme = e.currentTarget.value;
    setSelectedTheme(theme);
    localStorage.setItem('theme', theme);
    seIsUpdate(true);
  };
  const lang = useSelector((state) => state.films.lang);

  return (
    <form className='flex'>
      {lang === 'ru-RU' ? 'Тема' : 'Theme'}
      {themes.map((theme) => (
        <div key={theme.id}>
          <input
            type='radio'
            id={theme.id}
            value={theme.id}
            name='theme'
            checked={selectedTheme === theme.id}
            onChange={changeTheme}
          />
          <label htmlFor={theme.id}>{theme.value}</label>
        </div>
      ))}
    </form>
  );
};

export default Theme;
