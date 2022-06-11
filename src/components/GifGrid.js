import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loading } from '@nextui-org/react';

export const GifGrid = ({category}) => {

const {loading, data:images} = useFetchGifs(category);   

  return (
      <>
    <h3 className="animate__animated animate__headShake text-center">{category}</h3>

    <div className='text-center'>
        {loading && <Loading/>}
    </div>

    <div className='col-auto p-5 text-center card-grid container'>
            {
                images.map(img => 
                    <GifGridItem
                    key={img.id}
                     {...img} />
                 )
            }
        </div>
    </>
  )
}
