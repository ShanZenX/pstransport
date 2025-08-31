import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const TariffTable = ({ headers, rows }) => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
      <Table>
        {/* Table Head */}
        <TableHead sx={{ bgcolor: "#f5f5f5" }}>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "#333",
                  borderBottom: "2px solid #ddd",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                "&:nth-of-type(odd)": { bgcolor: "#fafafa" },
                "&:hover": { bgcolor: "#f1faff" },
              }}
            >
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  sx={{ fontSize: "0.95rem", py: 1.5 }}
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TariffTable;
