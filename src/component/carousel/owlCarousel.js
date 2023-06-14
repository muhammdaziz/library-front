
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl-carousel.css'

export default function CustomOwlCarousel({
    loop,
    nav,
    center,
    margin,
    autoplay,
    dots,
    items,
    children
                                             }) {
    // const state= {
    //     responsive:{
    //         0: {
    //             items: 1,
    //         },
    //         450: {
    //             items: 2,
    //         },
    //         600: {
    //             items: 3,
    //         },
    //         1000: {
    //             items: 4,
    //         },
    //     },
    // }


    return (
        <OwlCarousel
            className="owl-theme"
            loop={loop}
            center={center}
            margin={margin}
            autoplay={autoplay}
            dots={dots}
            items={items}
            nav={nav}
            // touchDrag={true}
            // lazyLoad={true}
            // responsive={state.responsive}// add this line
            animateOut={'fadeOut'}
            animateIn={'flipInX'}
        >
            {children}
        </OwlCarousel>
    );
}