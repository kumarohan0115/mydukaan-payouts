/* eslint-disable react/prop-types */
import "./Table.scss"

const Table = ({data}) => {
    const { columns, rows } = data;
  
    return (
      <div className="table-header">
        <table>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className={`odr-${column.toLowerCase().replace(/\s+/g, '-')}`}>
                    {column==="Status" && (row[column]==="Successful"?<div className="done"></div>:<div className="pending"></div>)}
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Table