import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({asset}) => {
    return (
        <div>
            <h2>Father</h2>
            <section className="flex">
                <MySelf asset={asset}></MySelf>
                <Brother ></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;