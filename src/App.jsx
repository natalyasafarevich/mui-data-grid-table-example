import './App.css';
import './Normalize.css';
import DataTable from './components/DataTable/DataTable';
import Language from './components/Language/Language';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
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
      <div className='App__lang'>
        Language: <Language />
        <br />
        <br />
        <br />
      </div>

      <DataTable />
    </div>
  );
}

export default App;
