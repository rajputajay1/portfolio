import Navbar from '@/components/navbar'
import React from 'react'

const Page = () => {
    return (
        <>
            <Navbar page="Contact" />
            <article className="contact active" data-page="contact">

                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                <section className="mapbox" data-mapbox>
                    <figure>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633.2153950955253!2d73.88426396546457!3d29.92104403482896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b51ea1965963%3A0xf417c04630db7391!2sHanuman%20Vatika%20Welfare%20Samiti!5e1!3m2!1sen!2sin!4v1729934610361!5m2!1sen!2sin" width="400" height="300" style={{ border: "0px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </figure>
                </section>

                <section className="contact-form">

                    <h3 className="h3 form-title">Contact Form</h3>

                    <form action="#" className="form" data-form>

                        <div className="input-wrapper">
                            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                            <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                        </div>

                        <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                        <button className="form-btn" type="submit" disabled data-form-btn>
                            <ion-icon name="paper-plane"></ion-icon>
                            <span>Send Message</span>
                        </button>

                    </form>

                </section>

            </article>
        </>
    )
}

export default Page
