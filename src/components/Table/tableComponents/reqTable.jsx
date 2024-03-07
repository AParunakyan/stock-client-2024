import React, { useEffect, useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../constants/MOCK_DATA'
import {COLUMNS} from '../constants/Columns'
import './table.css'
import Ticker from '../constants/Ticker/Ticker'
import { useState } from 'react'


export default function DataTable ({ data }) {
  const headers = Object.keys(data[0])

  return (
    <table border="1" >
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}