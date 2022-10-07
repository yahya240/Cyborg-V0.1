import './MostPopular.css'
import {Card, SectionHeader} from '../../components/index'
import data from '../../Data/data'

function MostPopular() {

    const cards = data.map((item)=>{
        return <Card key={item.id} title = {item.title} subTitle ={item.subTitle} rating ={item.rating} download={item.download} img={item.img} />
    })
  return (
    <>
        <SectionHeader title='Most Popular' subTitle='Right Now'>
        <div className='most-popular-items'>
                {cards}
            </div>
        </SectionHeader>
        
        {/* <div className='section-wraper'>
            <div className='section-header'>
                <h4>Most Popular </h4><span>Right Now</span>
            </div>
            <div className='most-popular-items'>
                <Card title = 'Fortnite' subTitle ='Sandbox' rating ='4.2' download='2.3' img={popular_01} />
                <Card title = 'PubG' subTitle ='Battle S' rating ='4.8' download='3.5' img={popular_02} />
                <Card title = 'Dota2' subTitle ='Steam-X' rating ='3.9' download='1.6' img={popular_03} />
                <Card title = 'CS-GO' subTitle ='Legendary' rating ='4.5' download='4.1' img={popular_04} />
                <Card title = 'Fortnite' subTitle ='Sandbox' rating ='4.2' download='2.3' img={popular_01} />
                <Card title = 'PubG' subTitle ='Battle S' rating ='4.8' download='3.5' img={popular_02} />
                <Card title = 'Dota2' subTitle ='Steam-X' rating ='3.9' download='1.6' img={popular_03} />
                <Card title = 'CS-GO' subTitle ='Legendary' rating ='4.5' download='4.1' img={popular_04} />
            </div>
        </div> */}
    </>
  )
}

export default MostPopular