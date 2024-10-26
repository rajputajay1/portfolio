"use client"
import Navbar from '@/components/navbar'
import media from '@/data/media'
import Image from 'next/image'
import React, { useState } from 'react'

const About = () => {
    const [isMedia, setIsMedia] = useState(true)
    return (
        <>
            <Navbar page="About" />
            <article className="about  active" data-page="about">

                <header>
                    <h2 className="h2 article-title">About me</h2>
                </header>

                <section className="about-text">
                    <p>
                        Experienced UI/UX Designer specializing in creating intuitive,
                        user-centered designs for web and mobile platforms.
                    </p>

                    <p>
                        Skilled in wireframing, prototyping, and responsive design, delivering functional and visually appealing
                        interfaces. Adept at aligning
                        user needs with business goals to enhance digital experiences.
                    </p>
                </section>



                <section className="service">

                    <h3 className="h3 service-title">What I&rsquo;m doing</h3>

                    <ul className="service-list">

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="/assets/images/icon-design.svg " alt="design icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web design</h4>

                                <p className="service-item-text">
                                    The most modern and high-quality design made at a professional level.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Web development</h4>

                                <p className="service-item-text">
                                    High-quality development of sites at the professional level.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Mobile apps</h4>

                                <p className="service-item-text">
                                    Professional development of applications for iOS and Android.
                                </p>
                            </div>

                        </li>

                        <li className="service-item">

                            <div className="service-icon-box">
                                <img src="/assets/images/icon-photo.svg" alt="camera icon" width="40" />
                            </div>

                            <div className="service-content-box">
                                <h4 className="h4 service-item-title">Photography</h4>

                                <p className="service-item-text">
                                    I make high-quality photos of any category at a professional level.
                                </p>
                            </div>

                        </li>

                    </ul>

                </section>

                <div className="modal-container" data-modal-container>

                    <div className="overlay" data-overlay></div>

                    <section className="testimonials-modal">

                        <button className="modal-close-btn" data-modal-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>

                        <div className="modal-img-wrapper">
                            <figure className="modal-avatar-box">
                                <img src="/assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                            </figure>

                            <img src="/assets/images/icon-quote.svg" alt="quote icon" />
                        </div>

                        <div className="modal-content">

                            <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

                            <time dateTime="2021-06-14">14 June, 2021</time>

                            <div data-modal-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>

                    </section>

                </div>
                {/* <div className="social-link-list d-flex justify-content-center m-auto">
                    <div className={`wrapper-media ${isMedia && 'isMedia'}`}>
                        {
                            media?.map((item, index) => {
                                return <div className='list' key={index} style={{ transitionDelay: isMedia ? `${index * 0.1}s` : '0s' }}>
                                    <a href={item?.link} className={`social-link icon ${item?.title}`} target='_blank'>
                                        <span className="tooltip">{item?.title}</span>
                                        <span>
                                            <Image src={item?.icon} alt={"Mukesh Singh Kabawat's" + item?.title} width={50} height={50} />
                                        </span>
                                    </a>
                                </div>
                            })
                        }

                    </div>
                </div> */}
            </article>
        </>
    )
}

export default About
