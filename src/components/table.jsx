import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function TableVentas() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Datos',
        columns: [
          {
            Header: 'Check',
            accessor: 'check',
          },
          {
            Header: 'ID Cliente',
            accessor: 'idCliente',
          },
          {
            Header: 'Cliente',
            accessor: 'cliente',
          },
          {
            Header: 'Producto',
            accessor: 'producto',
          },
          {
            Header: 'CUSID de venta',
            accessor: 'CUSIDdeventa',
          },
          {
            Header: 'Fecha Inicial',
            accessor: 'fechaInicial',
          },
          {
            Header: 'Fecha Final',
            accessor: 'fechafinal',
          },
          {
            Header: 'Estado',
            accessor: 'estado',
          },
          {
            Header: 'Vendedor',
            accessor: 'vendedor',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(5), [])

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  )
}

export default TableVentas;