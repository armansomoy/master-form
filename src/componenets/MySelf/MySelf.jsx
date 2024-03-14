import React from 'react';
import Special from '../Special/Special';

const MySelf = ({asset}) => {
    return (
        <div>
            <h2>MySelf Arman</h2>
            <section className="felx">
                <Special asset={asset}></Special>
            </section>
        </div>
    );
};

export default MySelf;