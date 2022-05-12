import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl my-36">
            <figure><img src={treatment} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div class="card-actions justify-end">
                    <PrimaryButton>GertStard</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;