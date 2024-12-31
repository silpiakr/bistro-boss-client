import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle 
                subHeading={"From 11.00am to 10.00pm"} 
                heading={"Order Online"}
            ></SectionTitle>
            <div className='my-12'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    // Responsive breakpoints for mobile
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide>
                        <img src={slide1} alt="Salad" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Salad</h3>
                    </SwiperSlide>                
                    <SwiperSlide>
                        <img src={slide2} alt="Pizzas" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Soups" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Desserts" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} alt="Salad" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="Soups" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="Pizzas" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} alt="Salad" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="Desserts" />
                        <h3 className='text-4xl uppercase text-center -mt-16 drop-shadow-lg text-white'>Desserts</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Category;
