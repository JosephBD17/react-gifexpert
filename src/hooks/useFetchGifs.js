import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setsIsLoading] = useState(category)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setsIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images,
        isLoading
    }

}
