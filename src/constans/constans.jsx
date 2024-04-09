export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div
        className='image'
        style={{background: `center/cover no-repeat url(${params.value})`}}
      />
    ),
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'release_date',
    headerName: 'Release date',
    type: 'date',
    width: 130,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'popularity',
    headerName: 'Popularity',
    type: 'number',
    width: 130,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'vote_average',
    headerName: 'Vote Average',
    type: 'number',
    width: 130,
    headerAlign: 'center',
    align: 'center',
  },
];

export const columns_ru = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'image',
    headerName: 'Изображение',
    width: 200,
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div
        className='image'
        style={{background: `center/cover no-repeat url(${params.value})`}}
      />
    ),
  },
  {
    field: 'title',
    headerName: 'Название',
    width: 200,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'release_date',
    headerName: 'Дата релиза',
    type: 'date',
    width: 130,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'popularity',
    headerName: 'Популярность',
    type: 'number',
    width: 130,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'vote_average',
    headerName: 'Средний результат голосования',
    type: 'number',
    width: 300,
    headerAlign: 'center',
    align: 'center',
  },
];
export const themes_ru = [
  {value: 'Светлая', id: 'light', isChecked: true},
  {value: 'Темная', id: 'dark', isChecked: false},
];
export const themes = [
  {value: 'light', id: 'light', isChecked: true},
  {value: 'dark', id: 'dark', isChecked: false},
];
