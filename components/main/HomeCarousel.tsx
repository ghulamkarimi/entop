"use client";
 
import { div } from "framer-motion/client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselItem  = [
    
    {
        id: 2,
        image: "/one.jpg",
    },
    {
        id: 3,
        image: "three.jpg",
    },
    {
        id: 4,
        image: "four.jpg",
    }
   
]

const HomeCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    
    return (
        <div className="w-full mt-10 ">
        <Carousel
          responsive={responsive}
          swipeable={true}
          className="w-full md:h-[600px]  "
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
            {CarouselItem.map((item) => (
            <img className="w-full h-full object-cover "
                
                key={item.id} src={item.image} alt="carousel" />
            ))}
        </Carousel>
        </div>
    );
}

export default HomeCarousel;