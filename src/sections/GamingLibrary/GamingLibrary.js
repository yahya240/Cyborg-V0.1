import './GamingLibrary.css'
import { SectionHeader,GamingLibraryCard } from '../../components/index'
import data from '../../Data/data2'

function GamingLibrary() {

    const gamingCards = data.map((item)=>{
        return <GamingLibraryCard key={item.id} {...item} />
    })
  return (
    <SectionHeader title='Your Gaming' subTitle='Library'>
        {gamingCards}
    </SectionHeader>
  )
}

export default GamingLibrary