import './GamingLibraryCard.css'

function GamingLibraryCard({id,title,subTitle,img,dateAdded,hoursPlayed,currently}) {
  return (
    <div className='gaming-container'>
        <div className='gaming-item'>
            <img className='gaming-img' src={img} alt={title} />
        </div>
        <div className='gaming-item'>
            <h4 className='gaming-item-title'>{title}</h4>
            <h4 className='gaming-item-subtitle'>{subTitle}</h4>
        </div>
        <div className='gaming-item'>
            <h4 className='gaming-item-title'>Date Added</h4>
            <h4 className='gaming-item-subtitle'>{dateAdded}</h4>
        </div>
        <div className='gaming-item'>
            <h4 className='gaming-item-title'>Hours Played</h4>
            <h4 className='gaming-item-subtitle'>{hoursPlayed}</h4>
        </div>
        <div className='gaming-item'>
            <h4 className='gaming-item-title'>Currently</h4>
            <h4 className='gaming-item-subtitle'>{currently}</h4>
        </div>
        <a href='/' className=' gaming-btn'>Download</a>
    </div>
  )
}

export default GamingLibraryCard