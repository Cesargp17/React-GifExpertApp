import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Input } from '@nextui-org/react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
          setCategories(categories =>[inputValue, ...categories]);
          setInputValue('');
        }
      
    }

  return (
  <div className='text-center'>
    <form onSubmit={handleSubmit}>
        <Input size="xl" placeholder="xLarge"  labelPlaceholder="Buscar Gifs" type="text" value={inputValue} onChange={handleInputChange}></Input>
    </form>
    </div>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
