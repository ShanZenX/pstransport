"use client";

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
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        borderRadius: 3,
        overflow: "hidden",
        my: 4,
      }}
    >
      <Table>
        {/* Header */}
        <TableHead>
          <TableRow
            sx={{
              background: "linear-gradient(135deg, #1976d2, #42a5f5)",
            }}
          >
            {headers.map((header, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  py: 2,
                  borderBottom: "none",
                }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* Body */}
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                backgroundColor: rowIndex % 2 === 0 ? "#fafafa" : "white",
                "&:hover": {
                  backgroundColor: "#e3f2fd",
                  transform: "scale(1.01)",
                  transition: "0.3s",
                },
              }}
            >
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  sx={{
                    fontSize: "0.95rem",
                    py: 2,
                    color: "#444",
                    borderBottom: "1px solid #eee",
                  }}
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
