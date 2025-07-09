import React from "react";

const Table = ({ columns, renderRow, data }) => {
  return (
    <table className="w-full mt-4 h-[200px] overflow-y-scroll overflow-x-scroll">
      <thead className="">
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col, i) => (
            <th key={i} className={`${col.className} pb-3`}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-20">
        {data.map((item, i) => renderRow(item, i))}
      </tbody>
    </table>
  );
};

export default Table;
