import { useSwiper } from "swiper/react";
import "./SwiperButtons.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";


function SwiperButtons() {
const swiper = useSwiper()

  return(
    <div className="swiperBtns">
        <button onClick={() => swiper.slidePrev()}><GrNext /></button>
        <button onClick={() => swiper.slideNext()}><GrPrevious /></button>
    </div>

  );
}

export default SwiperButtons;
