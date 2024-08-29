import { Navbar, Header, SetSection } from '../containers';

const Home = () => {
  return (
    <div className='w-full bg__color-secondary mt-2'>
        <Navbar />
        <Header />
        <div className='w-full lg:h-[170px] max-lg:mt-[-330px]' />
        <SetSection title={"Trending"} id={"trending"}/>
        <div className='w-full h-[60px]' />
        <SetSection title={"Special Offers"} id={"special-offers"} special={true}/>
        <div className='w-full h-[170px]' />
    </div>
  )
}

export default Home
