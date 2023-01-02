import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/Movie.context';

const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const { movie } = useContext(MovieContext);

    const genres = movie.genres?.map(({ name }) => name).join(", ");

    const rentMovie = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovie = () => {
        setIsOpen(true);
        setPrice(599);
    }
    return (
        <>
            {/* <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} /> */}
            <div className='flex flex-col gap-8'>
                <h1 className='text-white text-5xl font-bold'>{movie.original_title}</h1>
                <div className='text-white flex flex-col gap-2'>
                    <h4>5K ratings</h4>
                    <h4>Hindi, Gujarati, English, Telugu</h4>
                    <h4>
                        {movie.runtime} min | {genres}
                    </h4>
                </div>

                <div className='flex items-center gap-3 w-full'>
                    <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Rent ₹ 149
                    </button>
                    <button className='bg-red-500 w-full py-3 text-white font-semibold rounded-lg'>Buy ₹ 159
                    </button>
            </div>
            </div>
        </>
    );
};

export default MovieInfo;