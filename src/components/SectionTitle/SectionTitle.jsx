import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-8'>
            <p className='text-[#D99904] mb-2'>---{subHeading}---</p>
            <h3 className='text-[#151515] text-2xl md:text-4xl font-semibold py-4 uppercase border-y-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;