import {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    const {nombre} = category

    useEffect(() => {
        getGifs(nombre).then(image => setImages(image))
    }, []);

    return (
        <div className='sub_section'>
        <h3 className='subtitle'>{category.nombre}</h3>
        <div className="gif_grid">
            {
                images.map( (image) => (
                    <GifGridItem 
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
        </div>
    );
}

export default GifGrid;