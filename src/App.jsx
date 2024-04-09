import './App.css';

import './Normalize.css';
import DataTable from './components/DataTable/DataTable';
import Language from './components/Language/Language';

import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Theme from './components/Theme/Theme';
import {themes, themes_ru} from './constans/constans';

function App() {
  const lang = useSelector((state) => state.films.lang);
  const column_setting = useSelector((state) => state.localStorage.params);

  useEffect(() => {
    if (Object.keys(column_setting).length) {
      localStorage.setItem('column-setting', JSON.stringify(column_setting));
    }
  }, [column_setting]);

  useEffect(() => {
    if (lang) {
      const currentLang = {
        lang: lang,
      };
      localStorage.setItem('lang', JSON.stringify(currentLang));
    }
  }, [lang]);

  return (
    <div className='App'>
      <div className='App__container'>
        <div className=''>
          <Theme themes={lang === 'ru-RU' ? themes_ru : themes} />
        </div>
        <div className='flex'>
          {lang === 'ru-RU' ? 'Язык' : 'Language'} : <Language />
        </div>
      </div>
      <DataTable />
    </div>
  );
}

export default App;
