import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import featuredImage from '../../assets/home/featured.jpg'
import image from '../../assets/home/featured.jpg'

const Features = () => {
    return (
        <div
            className="hero min-h-screen mb-12"
            style={{
                backgroundImage: `url(${featuredImage})`,
            }}>

            <div className="hero-overlay bg-opacity-60"><SectionTitle heading="From Our Menu" subHeading="Check it out"></SectionTitle></div>
            <div className="hero-content text-neutral-content flex-col md:flex-row">
                <div className='md:w-[468px]'>
                    <img src={image} alt="" />
                </div>
                <div className="max-w-md">
                    <h3 className='text-2xl font-semibold'>March 20, 2028</h3>
                    <h1 className="mb-2 text-2xl font-semibold">WHERE CAN I GET SOME?
                    </h1>
                    <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                        Read More
                    </p>
                    <button className="btn btn-outline btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Features;