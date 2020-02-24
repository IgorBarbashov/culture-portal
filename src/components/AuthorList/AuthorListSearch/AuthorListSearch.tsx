import React from 'react';
import { FormControl, Form } from "react-bootstrap";
import { FILTER_AUTHOR_LIST } from '../../../constants';
import './AuthorListSearch.scss';

const selectList = Object.values(FILTER_AUTHOR_LIST)[0];

interface AuthorListSearchProps {
    handleFilterSelect: (e: React.ChangeEvent<HTMLInputElement>) => any,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

const AuthorListSearch: React.FC<AuthorListSearchProps> = ({ handleFilterSelect, handleInputChange }) => {
    return (
        <Form.Group className="input-group mb-3">
            <div className="input-group-prepend">
                <Form.Control as="select" onChange={handleFilterSelect}>
                    {selectList.map((value, index) => {
                        return <option key={index}>{value}</option>
                    })}   
                </Form.Control>  
            </div> 
            <FormControl 
                type="text" 
                placeholder="Поиск" 
                onChange={handleInputChange}/>           
        </Form.Group>
    )
}

export { AuthorListSearch };