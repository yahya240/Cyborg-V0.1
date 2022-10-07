import './Card.css'
import {FaStar, FaDownload} from "react-icons/fa";

function Card({img,title,subTitle,download,rating}) {
    // const {img} = props;
  return (
    <div className='most-popular-item'>
    <div className='card-wrapper'>
        <img className='most-popular-item-img' src={img} alt='img' />
        <div className='most-popular-item-content'>
            <h4 className='most-popular-item-title'>
                {title} <br />
                <span>{subTitle}</span>
            </h4>
            <ul>
                <li><FaStar  className='star-icon'/><span> {rating}</span></li>
                <li><FaDownload className='download-icon'/><span>{download}M</span></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Card