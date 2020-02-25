import * as React from 'react';
import { Form } from 'react-bootstrap';
import data from './self-check.json';

const WorkLogSelfCheck = ({ language }) => {
  return (
    <Form>
      <h3>{data[language].title}</h3>
      <h5>{data[language].minTitle}</h5>
      <Form.Check label={data[language].min1} checked readOnly />
      <Form.Check label={data[language].min2} checked readOnly />
      <Form.Check label={data[language].min3} readOnly />
      <Form.Check label={data[language].min4} checked readOnly />
      <h5>{data[language].normalTitle}</h5>
      <Form.Check label={data[language].normal1} readOnly />
      <Form.Check label={data[language].normal2} checked readOnly />
      <Form.Check label={data[language].normal3} checked readOnly />
      <Form.Check label={data[language].normal4} readOnly />
      <Form.Check label={data[language].normal5} readOnly />
      <Form.Check label={data[language].normal6} readOnly />
      <Form.Check label={data[language].normal7} checked readOnly />
      <Form.Check label={data[language].normal8} checked readOnly />
      <Form.Check label={data[language].normal9} checked readOnly />
      <Form.Check label={data[language].normal10} checked readOnly />
      <h5>{data[language].extraTitle}</h5>
      <Form.Check label={data[language].extra1} checked readOnly />
      <Form.Check label={data[language].extra2} readOnly />
      <Form.Check label={data[language].extra3} checked readOnly />
      <Form.Check label={data[language].extra4} readOnly />
      <Form.Check label={data[language].extra5} checked readOnly />
      <Form.Check label={data[language].extra6} readOnly />
      <h5>{data[language].finesTitle}</h5>
      <Form.Check label={data[language].fines1} readOnly />
      <Form.Check label={data[language].fines2} readOnly />
      <Form.Check label={data[language].fines3} readOnly />
      <Form.Check label={data[language].fines4} readOnly />
      <h4>{`${data[language].total} 150/230`}</h4>
    </Form>
  );
};

export default WorkLogSelfCheck;