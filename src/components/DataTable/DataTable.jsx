import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useDispatch, useSelector} from 'react-redux';
import {getAllFilms} from '../../store/films/actions';
import {getParams} from '../../store/localstorage/actions';
import {columns} from '../../constans/constans';
import {parseCustomDate} from '../../helper/parseCustomDate';
import Popup from '../Popup/Popup';

const defaultFilter = {
  items: [],
  logicOperator: 'and',
  quickFilterValues: [],
  quickFilterLogicOperator: 'and',
};

const DataTable = () => {
  const [currentId, setCurrentId] = useState();
  const [prevFilms, setPrevFilms] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [params, setParams] = useState({
    filter: defaultFilter,
  });
  useEffect(() => {
    Object.keys(params) && dispatch(getParams(params));
  }, [params]);

  const films_lang = useSelector((state) => state.films.lang);
  const films = useSelector((state) => state.films.films);

  const dispatch = useDispatch();

  useEffect(() => {
    if (films) {
      setPrevFilms(
        films.map((film) => ({
          id: film.id,
          title: film.title,
          popularity: film.popularity,
          release_date: parseCustomDate(film.release_date),
          vote_average: film.vote_average,
          image: `https://image.tmdb.org/t/p/w500` + film.poster_path,
        })),
      );
    }
  }, [films]);

  useEffect(() => {
    dispatch(getAllFilms());
    const savedFilterModel = localStorage.getItem('column-setting');
    if (savedFilterModel) {
      setParams(JSON.parse(savedFilterModel));
    }
  }, []);

  useEffect(() => {
    if (films_lang) {
      dispatch(getAllFilms(films_lang));
      setParams((prev) => ({...prev, filter: defaultFilter}));
    }
  }, [films_lang]);

  const handleRowClick = (params) => {
    setCurrentId(params.id);
    setOpenModal(true);
  };

  const handleFilterModelChange = (newFilterModel) => {
    if (newFilterModel) {
      setParams((prev) => ({...prev, filter: newFilterModel}));
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleSortModelChange = (newSortModel) => {
    setParams((prev) => ({...prev, sort: newSortModel}));
  };

  const columnVisible = (value) => {
    setParams((prev) => ({...prev, hideColumn: value}));
  };
  return (
    <div style={{height: 400, width: '100%'}}>
      <DataGrid
        onFilterModelChange={handleFilterModelChange}
        onSortModelChange={handleSortModelChange}
        rows={prevFilms}
        filterModel={params.filter}
        sortModel={params.sort}
        columnVisibilityModel={params.hideColumn}
        onColumnVisibilityModelChange={columnVisible}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        onRowClick={handleRowClick}
        getRowHeight={() => 'auto'}
        getEstimatedRowHeight={() => 300}
        getRowClassName={(params) => `data-table--column`}
      />
      {openModal && (
        <Popup
          open={openModal}
          handleClose={handleCloseModal}
          data={currentId}
        />
      )}
    </div>
  );
};

export default DataTable;
