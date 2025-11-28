import './style.css'
import 'flowbite';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



    let swiper = new Swiper(".mySwiper", {
      modules:[Navigation, Pagination],
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });