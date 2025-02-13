"use client";
import React, { useState } from "react";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaChevronDown, FaRegEye } from "react-icons/fa";
const Sidebar = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <aside className={`sidebar ${isToggle && "active"}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src="./assets/images/my-avatar.png"
            alt="Uttam Singhal"
            width="80"
          />
        </figure>

        <div className="info-content tracking-wide">
          <h1 className="name tracking-wide" title="Uttam Singhal">
            Ajay Rajput
          </h1>

          <p className="title">Full Stack Developer</p>
        </div>

        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={() => setIsToggle(!isToggle)}
        >
          <span>Show Contacts</span>
          <FaChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdOutlineEmail />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:uttamg61001@gmail.com" className="contact-link">
                rajputboy9306@1@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdOutlinePhoneInTalk />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+917062467187" className="contact-link">
                +91 9306630750
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <LiaBirthdayCakeSolid />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">January 21, 2002</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CiLocationOn />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Sri Ganganagar , Rajasthan</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list-side">
          <li className="social-item-side">
            <a
              target="-blank"
              href="https://www.linkedin.com/in/ajay-rajput-200776224/"
              className="social-link-side"
            >
              <FaLinkedinIn />
              <img src="/media/linked.png" alt="" />
            </a>
          </li>

          <li className="social-item-side">
            <a
              target="-blank"
              href="https://github.com/rajputajay1"
              className="social-link-side"
            >
              <BsGithub />
              <img src="/media/github.png" alt="" />
            </a>
          </li>

          <li className="social-item-side">
            <a
              target="-blank"
              href="https://www.instagram.com/attitude_boy.1238/"
              className="social-link-side"
            >
              <FaInstagram />
              <img src="/media/instagram.png" alt="" />
            </a>
          </li>

          <li className="social-item-side">
            <a
              target="-blank"
              href="https://wa.me/+919306630750"
              className="social-link-side"
            >
              <FaWhatsapp />
              <img src="/media/Whatsapp.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
