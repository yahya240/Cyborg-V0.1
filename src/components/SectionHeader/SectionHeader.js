import './SectionHeader.css'

function SectionHeader(props) {
  return (
    <div className='section-wraper'>
            <div className='section-header'>
                <h4>{props.title} </h4><span>{props.subTitle}</span>
            </div>
            {props.children}
        </div>
  )
}

export default SectionHeader