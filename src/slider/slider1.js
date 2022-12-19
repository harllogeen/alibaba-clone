import { Carousel } from 'antd';
import Dropdown1 from './dropdown';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';
import Dropdown4 from './dropdown4';
import Dropdown5 from './dropdown5';
import Dropdown6 from './dropdown6';
import Dropdown7 from './dropdown7';
import Dropdown8 from './dropdown8';
import img1 from '../slider/images/img1.jpg';
import img2 from '../slider/images/img2.jpg';
import img3 from '../slider/images/img3.jpg';
import img4 from '../slider/images/img4.jpg';
import img5 from '../slider/images/img5.png';
import img6 from '../slider/images/img6.jpg'

function Slider1() {
  // const contentStyle = {
  //   height: '160px',
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  // };

  return (
    <>
      <div className="slider1">
        <div className="slider2">
          <div className="slider3">
            <h6 className="slider10-h6-label-1" >MY MARKETS</h6>
            <span className="slider-dropdown-span-p-1"></span>
            <div className="slider-dropdown-paragraph-h-1">
              <Dropdown1 />
              <Dropdown2 />
              <Dropdown3 />
              <Dropdown4 />
              <Dropdown5 />
              <Dropdown6 />
              <Dropdown7 />
              <Dropdown8 />
            </div>
          </div>
          <div className="slider4" >
            <Carousel autoplay>
              <div>
                <img className="slid-img" src={img1} alt="okok" />
              </div>
              <div>
                <img className="slid-img" src={img6}  alt="okok"/>
              </div>
              <div>
                <img className="slid-img" src={img2} alt="okok"/>

              </div>
              <div>
                <img className="slid-img" src={img3} alt="okok"/>
              </div>
              <div>
                <img className="slid-img" src={img4} alt="okok"/>
              </div>
              <div>
                <img className="slid-img" src={img5} alt="okok"/>
              </div>
            </Carousel>
          </div>
          <div className="slider6">
            <div className="slider7">
              <span className="slispan" >
                <img className="sl-img" src="	https://img.alicdn.com/imgextra/i1/O1CN01h1du8I1IZRwJhj11v_!!6000000000907-2-tps-102-36.png" alt='power'/>
                Pro Buyer Exclusive</span>
              <span className="slispan2" >Get payment terms and much more</span>
              <button className="slibtn">Upgrade</button>
            </div>
            <div className="orange">Home & Garden 2022 Online Trade</div>
            <div className="slider9">
              <p className="orange2">Home & Garden 2022 Online Trade Show</p>
              <img className="sliimg" src="https://i.alicdn.com/img/imgextra/i3/O1CN01rHG3DG1wp66sdIKKe_!!6000000006356-2-tps-350-350.png_100x100.jpg"alt='power' />
            </div>
            <div className="slider9">
              <p className="orange2">Digital Booths</p>
              <img className="sliimg" src="https://i.alicdn.com/img/imgextra/i3/O1CN01i1pN3924J3K92CAMq_!!6000000007369-2-tps-350-350.png_100x100.jpg" alt='power'/>
            </div>
            <div className="slider9">
              <p className="orange2">Top-Ranking Products</p>
              <img className="sliimg" src="https://i.alicdn.com/img/imgextra/i2/O1CN01IlZLHL1h7O4Zn6rIX_!!6000000004230-2-tps-350-350.png_100x100.jpg" alt='power'/>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Slider1
