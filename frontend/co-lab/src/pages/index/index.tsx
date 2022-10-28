import React from 'react'
import { CarouselItem } from '../../components/carousel-item/carousel-item'
import { Footer } from '../../components/footer/footer'
import icons from '../../assets/assets.json';
import { completeIcon, homeSVG } from '../../assets/assets';
import './index.scss'
import TopNavBar from '../../components/top-navigation-bar/top-nav-bar';

const iconList: any[] = [];
for (let i in icons) {
    //@ts-ignore
    iconList.push(icons[i]);
}
export const Index = () => {
    const goToForm = () => {
        window.location.href = '/setup'
    }

    const carouselItems = iconList.map((icon) =>
        <CarouselItem id={icon.image} src={completeIcon} {...icon} />)

    return (
        <React.Fragment key="index">
            <TopNavBar />
            <section className='banner box'>
                <section>
                    <h1 className='heading'>Co-Lab<br /><span className='heading-sub'>Collaborative Learning Lab</span></h1>
                    <p>The lab for coders to collaborate</p>
                    <button type='submit' className='btn-main' onClick={goToForm}>Get Started</button>
                </section>
                <section>
                    <img className='svg' src={homeSVG} alt='home-svg' />
                </section>
            </section>

            <section className='carousel box'>
                {carouselItems}
            </section>
            <Footer />
        </React.Fragment>
    )
}
