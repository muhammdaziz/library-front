
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Temp from "../../pages/page-components/Temp";
import Temp2 from "../../pages/page-components/Temp2";
import './testimonial-owl-carousel.css'
import Frame from "../frame/frame";

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
        <Frame>
            <div className="owl-carousel custome_slide" id="slide-testimonal">
                <div className="test_img">
                    <div className="main-reviewimage">
                        <img
                            src="https://images.unsplash.com/photo-1484241021491-2e3c0cae7165?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                            alt=""/>
                    </div>
                    <div className="testimonial_detail">
                        <h4>Siana H</h4>
                        <p>Perfect for what i needed. Found my Lenders almost instantly. who use again.</p>
                    </div>
                </div>
                <div className="test_img">
                    <div className="main-reviewimage">
                        <img
                            src="https://images.unsplash.com/photo-1483555714914-20a74b6e45f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                            alt=""/>
                    </div>
                    <div className="testimonial_detail">
                        <h4>Siana H</h4>
                        <p>Perfect for what i needed. Found my Lenders almost instantly. who use again. </p>
                    </div>
                </div>
                <div className="test_img">
                    <div className="main-reviewimage">
                        <img
                            src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
                            alt=""/>
                    </div>
                    <div className="testimonial_detail">
                        <h4>Siana H</h4>
                        <p>Perfect for what i needed. Found my Lenders almost instantly. who use again. </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}