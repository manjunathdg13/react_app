import React, { useState } from "react";
import * as XLSX from "xlsx";
import {DataGrid} from "react-data-grid";
import 'react-data-grid/lib/styles.css';

const ExcelLikeGrid = () => {
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const maxCols = Math.max(...jsonData.map((row) => row.length));

      const colDefs = Array.from({ length: maxCols }).map((_, i) => ({
        key: `col-${i}`,
        name: `Column ${i + 1}`,
        editable: true,
        formatter: ({ row }) => {
          const value = row[`col-${i}`];
          return value === "£" ? (
            <input type="checkbox" checked readOnly />
          ) : (
            value
          );
        },
        editor: ({ row, onRowChange }) => {
          const value = row[`col-${i}`];
          if (value === "£") {
            return (
              <input
                type="checkbox"
                checked
                onChange={(e) =>
                  onRowChange({ ...row, [`col-${i}`]: e.target.checked ? "£" : "" })
                }
              />
            );
          }
          return (
            <input
              type="text"
              defaultValue={value}
              onChange={(e) =>
                onRowChange({ ...row, [`col-${i}`]: e.target.value })
              }
            />
          );
        },
      }));

      const rowData = jsonData.map((row, rowIndex) => {
        const rowObj = { id: rowIndex };
        for (let i = 0; i < maxCols; i++) {
          rowObj[`col-${i}`] = row[i] || "";
        }
        return rowObj;
      });

      setColumns(colDefs);
      setRows(rowData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Excel to Editable Grid</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleUpload} />
      <div style={{ height: 500, marginTop: 20 }}>
        {columns.length > 0 && rows.length > 0 && (
          <DataGrid columns={columns} rows={rows} />
        )}
      </div>
    </div>
  );
};

export default ExcelLikeGrid;
