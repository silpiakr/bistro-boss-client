import React from 'react';

const RecommendsCard = ({item}) => {
    const {name, image, recipe } = item;
    return (
        <div className="card bg-base-100 rounded-none">
            <figure className="">
                <img
                    src={image}
                    alt={name}
                    className="object-cover" />
            </figure>
            <div className="card-body p-2 items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn bg-[#1F2937] text-[#BB8506]">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default RecommendsCard;