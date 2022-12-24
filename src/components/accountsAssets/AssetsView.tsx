import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { assetsMocks } from '../../mocks/assets'
import { useApiHook } from '../../hooks/useApiHook'

// type AccountAsset = {
//   id: string
//   createdAt: string
//   name: string
//   currency: string
//   category: string
//   startDate: string
//   isActive: boolean
//   deactivationDate?: string
// }

const AssetsView = () => {
  // T0 DO - substitute the result of the API with the mocks
  // TO DO - change url to env variable
  const { data, error, loading } = useApiHook(
    'http://localhost:3001/api/accounts-assets'
  )
  console.log(data)
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <TableContainer sx={{ width: '900px' }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="asset view table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Currency</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Start date</TableCell>
              <TableCell align="left">Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assetsMocks.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.currency}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.startDate}</TableCell>
                <TableCell align="left">{row.isActive}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default AssetsView
