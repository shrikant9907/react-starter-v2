import React, { Component } from 'react';
import { Card } from 'react-bootstrap';  

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.scss';

import './Carousel.scss';

import imgSrc from "../../_assets/images/banner/banner.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Carousel extends Component {

    render() {
      const { heading, hicon, items, type, loading } = this.props;
      SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

      const params = {
        spaceBetween: 10,
        slidesPerGroup:1,
        effect: 'fade',
        observer:true,
        observeParents:true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1920: {
            slidesPerView: 6,
          },
          1366: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
      return (
        <>
          <div className="carousel-slider">
            { heading ? 
              <h2 className="section-heading">
                {hicon ? 
                  <span className="heading-icon"><FontAwesomeIcon icon={hicon} /></span>
                : ''}
                {heading}
                </h2>
              : ''}
          <Swiper {...params}>
            {
              items ? 
              items.map((item, i) => {
              return (
                <SwiperSlide>
                  { type === 'userlist' ? 
                    <Card className="user-card">
                      <Card.Body>
                        <Card.Title>{ item.name }</Card.Title>
                        <Card.Text>{item.email ? item.email : ''}</Card.Text>
                      </Card.Body>
                    </Card>
                  : 
                  <Card>
                    <div className="card-img-box">
                      <Card.Img variant="top" src={imgSrc} />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        Some quick example text to build on the card title an
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  }    
                </SwiperSlide>
              );
            }) 
            : 
              loading ? 'Loading ...' : 'Items not found.'
            }
          </Swiper>
          </div>
        </>
      )
    }
}
