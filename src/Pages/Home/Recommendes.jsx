import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RecommendsCard from './RecommendsCard';

const Recommendes = () => {
    const [recommends, setRecommends] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const recomendsMenu = data.filter(item => item.category === 'popular')
            setRecommends(recomendsMenu)
        })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle heading="CHEF RECOMMENDS" subHeading="---Should Try---"></SectionTitle>
           <div className='grid md:grid-cols-4 gap-8'>
            {
                recommends.map(item => <RecommendsCard key={item._id} item={item}></RecommendsCard>)
            }
           </div>
        </section>
    );
};

export default Recommendes;