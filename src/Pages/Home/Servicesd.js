import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import teeth from '../../assets/images/whitening.png'
import Servic from './Servic';

const Servicesd = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: teeth
        }
    ]
    return (
        <div className='my-28 '>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold'>Our Service</h3>
                <h2>services with provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Servic
                        key={service._id}
                        service={service}
                    ></Servic>)
                }
            </div>
        </div>
    );
};

export default Servicesd;