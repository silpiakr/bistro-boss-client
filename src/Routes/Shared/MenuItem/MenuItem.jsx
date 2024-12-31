import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price, } = item;
    return (
        <div className='flex gap-6 items-center'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='bg-base-200 w-[120px] h-[106px]' src={image} alt="" />
            <div>
                <div className='flex justify-between items-center'>
                <h3 className='uppercase font-medium'>{name}------------</h3>
                <p className='text-[#BB8506]'>${price}</p>
                </div>
                <p>{recipe}</p>
                
            </div>
        </div>
    );
};

export default MenuItem;