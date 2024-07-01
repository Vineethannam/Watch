import React, { useRef } from 'react';
import './Carusole.css';
import Slider from 'react-slick'

const Carusole = () => {
    const sliderRef = useRef();
    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScrool:2,
        arrows:false,
        responsive:[{
            breakpoint:769,
            settings:{
                slidesToShow:1,
                slidesToScrool:1,
            },
        },
    ],
    };
    const slideRight = ()=>{
        sliderRef.current.slickNext();
    }
    const slideLeft = ()=>{
        sliderRef.current.slickPrev();
    }
  return (
    <>
       <div className="card-container">
     <h1 className='heading'>EXPLORE</h1>

     <div className="box-container">

        <div className="box">
            <img src="./assets/images/watch23.avif" alt="" />
            <h3>G-SHOCK</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 2000/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch18.avif" alt="" />
            <h3>FOSIL</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 5,605/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch17.avif" alt="" />
            <h3>ANNI KENLEN</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 8,406/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch16.avif" alt="" />
            <h3>QUARTZ</h3>
            <p>GMW-B5100D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 10,830/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch14.webp" alt="" />
            <h3>FOSSIL-X</h3>
            <p>GMW-B5000D-6</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 10,780/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch21.avif" alt="" />
            <h3>TITAN</h3>
            <p>GMW-a5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 9,270/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch25.avif" alt="" />
            <h3>ROLEX-G803</h3>
            <p>GMW-B5000D-5</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 40,100/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch20.avif" alt="" />
            <h3>VICTORINOX</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 4000/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch19.avif" alt="" />
            <h3>TISSOT</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp"style={{fontSize:'9px'}}>MRP</p>
            <p className="price"style={{fontSize:'13px'}}>₹ 31,006/- &#40;incl. of all taxes&#41;</p>  
        </div>
        <div className="box">
            <img src="./assets/images/watch22.avif" alt="" />
            <h3>TISSOT</h3>
            <p>GMW-B5000D-2</p>
            <p className="mrp" style={{fontSize:'9px'}}>MRP</p>
            <p className="price" style={{fontSize:'13px'}}>₹ 12,070/- &#40;incl. of all taxes&#41;</p>  
        </div>

     </div>
   </div>
    </>
    // <div className='carusole-container'>
    //     <h1 style={{textAlign:'center',margin:'3rem 0 0.5rem 0 ',color:'crimson'}}>Our Collections</h1>
    //     <div className="arrow-right" onClick={slideRight}>
    //         <span className='material-symbols-outlined'>chevron_right</span>
    //     </div>
    //     <div className="arrow-left" onClick={slideLeft}>
    //         <span className='material-symbols-outlined'>chevron_left</span>
    //     </div>
    //     <Slider ref={sliderRef} {...settings}>
    //   <div className="content">
    //     <div className="image">
    //         <img src="./assets/images/watch7.jpeg" alt="" />
    //     </div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch8.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch9.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch10.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch7.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch9.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   <div className="content">
    //     <div className="image"><img src="./assets/images/watch10.jpeg" alt="" /></div>
    //     <div className="description">
    //         <h5>FEATURED</h5>
    //         <h3>BEST DRIVE'S WATCHES</h3>
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    //     </div>
    //   </div>
    //   </Slider>
    // </div>
  )
}

export default Carusole
