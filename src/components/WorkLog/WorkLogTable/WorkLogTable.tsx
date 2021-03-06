import './index.scss';

import React from 'react';
import { Table } from 'react-bootstrap';
import { IWorkLogString } from '../../../types';

const WorkLogTable = ({ data }) => {
  return (
    <div>
      {!data ? (
        <h3 className="worklog__title">Sorry, no data...</h3>
      ) : (
        <>
          <h3 className="worklog__title">{data.title}</h3>
          <Table hover>
            <thead>
              <tr>
                <th scope="col">{data.headers.feature}</th>
                <th scope="col">{data.headers.from}</th>
                <th scope="col">{data.headers.to}</th>
                <th scope="col">{data.headers.spent}</th>
                <th scope="col">{data.headers.who}</th>
              </tr>
            </thead>
            <tbody>
              {data.body
                .sort((a: IWorkLogString, b: IWorkLogString) => {
                  if (a.from < b.from) return -1;
                  if (a.from > b.from) return 1;
                  return 0;
                })
                .map((tableRow: IWorkLogString, i: number) => {
                  return tableRow.feature ? (
                    <tr key={i}>
                      <td data-label={data.headers.feature}>
                        {tableRow.feature}
                      </td>
                      <td data-label={data.headers.from}>{tableRow.from}</td>
                      <td data-label={data.headers.to}>{tableRow.to}</td>
                      <td data-label={data.headers.spent}>{tableRow.spent}</td>
                      <td data-label={data.headers.who}>{tableRow.who}</td>
                    </tr>
                  ) : null;
                })}
            </tbody>
          </Table>
        </>
      )}
    </div>
  );
};

export default WorkLogTable;
