import React, { useState, useEffect } from "react";
import { Typography, Button, Grid, Chip } from "@mui/material";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { MDBContainer } from "mdb-react-ui-kit";
// ... (import statements remain unchanged)
import { Provider } from "react-redux";

import { DataSheetGrid } from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
import TableWrapper from "../TableWrapper";
import configStore from "../../store";

import "../../styles.css";

const ExcelEditor = () => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const sheetColumns = sheetData.length > 0 ? sheetData[0] : [];
      console.log("Sheet Data:", sheetData);
      setColumns(sheetColumns);
      setData(sheetData.slice(1)); // Exclude the header row from data
      setSelectedColumns(sheetColumns);
    };

    reader.readAsBinaryString(file);
  };

  const handleDownload = () => {
    const workbook = XLSX.utils.book_new();
    const selectedData = data.map((row) =>
      row.filter((_, index) => selectedColumns.includes(columns[index]))
    );
    const worksheet = XLSX.utils.json_to_sheet([
      selectedColumns,
      ...selectedData,
    ]);

    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    const blob = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "blob",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "edited_excel_file.xlsx";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleColumnToggle = (column) => {
    if (selectedColumns.includes(column)) {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }
  };

  const columnsToShow = columns.filter((col) => selectedColumns.includes(col));
  const rowsToShow = data.map((row) =>
    row.filter((_, index) => selectedColumns.includes(columns[index]))
  );

  const columnsConfig = columnsToShow.map((col) => ({
    key: col,
    name: col,
    editable: true,
  }));

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls",
  });
  const store = configStore();
  return (
    <MDBContainer className="my-5">
      <div>
        <h1>Excel File Editor</h1>
        <hr />        
        <div>
          <Provider store={store}>
            <TableWrapper />
          </Provider>

         
        </div>
      </div>
    </MDBContainer>
  );
};

export default ExcelEditor;
