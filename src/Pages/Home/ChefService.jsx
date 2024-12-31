import React from 'react';
import chefImg from '../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div
            className="hero min-h-96 md:min-h-[572px] mb-8"
            style={{
                backgroundImage: `url(${chefImg})`,
            }}>
            <div className="hero-overlay  bg-opacity-60"></div>
            <div className="hero-content text-black-content bg-slate-50 text-center px-6 md:py-28 md:px-8 ">
                <div className="max-w-screen-sm md:max-w-screen-lg px-6 md:px-12">
                    <h1 className="mb-5 text-4xl font-bold">Bistro Boss</h1>
                    <p className="text-center">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;