import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


const initialRows = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 30 },
  { id: 3, name: 'Alice Johnson', age: 28 },
];

export default function Table() {
  const [rows, setRows] = React.useState(initialRows);
  const [editRowId, setEditRowId] = React.useState(null);
  const [editRow, setEditRow] = React.useState({});
  const [editError, setEditError] = React.useState("");

  const handleEditClick = (id) => {
    setEditRowId(id);
    setEditRow(rows.find(row => row.id === id));
  };

  const handleDeleteClick = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleSaveClick = () => {
    // Validation: name required, age must be a number between 1 and 120
    if (!editRow.name || editRow.name.trim() === "") {
      setEditError("Name is required.");
      return;
    }
    const ageNum = Number(editRow.age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      setEditError("Age must be a number between 1 and 120.");
      return;
    }
    setRows(rows.map(row => row.id === editRowId ? { ...editRow, age: ageNum } : row));
    setEditRowId(null);
    setEditRow({});
    setEditError("");
  };

  const handleEditChange = (field, value) => {
    setEditRow({ ...editRow, [field]: value });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
      editable: true,
      renderCell: (params) =>
        editRowId === params.row.id ? (
          <input
            value={editRow.name}
            onChange={e => handleEditChange('name', e.target.value)}
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        ),
    },
    {
      field: 'age',
      headerName: 'Age',
      width: 120,
      editable: true,
      renderCell: (params) =>
        editRowId === params.row.id ? (
          <input
            type="number"
            value={editRow.age}
            onChange={e => handleEditChange('age', e.target.value)}
            style={{ width: '100%' }}
          />
        ) : (
          params.value
        ),
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 180,
      getActions: (params) => [
        editRowId === params.row.id ? (
          <GridActionsCellItem
            icon={<span style={{color: 'blue', fontWeight: 'bold'}}>Save</span>}
            label="Save"
            onClick={handleSaveClick}
            color="primary"
          />
        ) : (
          <GridActionsCellItem
            icon={<span style={{color: 'green', fontWeight: 'bold'}}>Edit</span>}
            label="Edit"
            onClick={() => handleEditClick(params.row.id)}
            color="inherit"
          />
        ),
        <GridActionsCellItem
          icon={<span style={{color: 'red', fontWeight: 'bold'}}>Delete</span>}
          label="Delete"
          onClick={() => handleDeleteClick(params.row.id)}
          color="error"
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', mt: 4 }}>
      {editError && (
        <Box sx={{ color: 'red', mb: 2 }}>{editError}</Box>
      )}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </Box>
  );
}
