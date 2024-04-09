export const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 200,
    align: 'center',
    headerAlign: 'center',
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
