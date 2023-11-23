import React from "react";
import logoWhite from '../../images/logo2.png'
import Image from "next/image";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <div id="footer" className="bg-[#7C9C30]">
                <footer className="footer container pt-10 pb-10 mx-auto lg:justify-items-center justify-items-center  text-[#003333] gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
                    <div className="text-left flex flex-col justify-center">
                        <figure>
                            <Image src={logoWhite}
                                width={120}
                                alt="" />
                        </figure>
                        <p className="w-40 text-white text-[11px] p-1 border-b-2  border-white  mb-4">
                            <b>The KOW Company</b> is one of the
                            leading image and video editing
                            company for businesses all over
                            the world.
                        </p>
                        <div className="flex text-[#003333] justify-center gap-1 mb-2">
                            <a href="https://www.facebook.com/cutoutwiz" target="_blank">
                                <FaFacebook className="h-4 w-4 mr-2 text-white cursor-pointer"></FaFacebook>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"
                                target="_blank"
                            >
                                <FaYoutube className="h-4 w-4 mr-2 text-white cursor-pointer"></FaYoutube>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/cutoutwiz-ltd/"
                                target="_blank"
                            >
                                <FaLinkedinIn className="h-4 w-4 mr-2 text-white cursor-pointer"></FaLinkedinIn>
                            </a>
                            <a href="https://twitter.com/cut_wiz?s=09" target="_blank">
                                <FaTwitter className="h-4 w-4 mr-2 text-white cursor-pointer"></FaTwitter>
                            </a>
                            <a
                                href="https://www.instagram.com/accounts/login/"
                                target="_blank"
                            >
                                <FaInstagram className="h-4 w-4 mr-2 text-white cursor-pointer"></FaInstagram>
                            </a>
                        </div>

                        <button className="bg-white  px-6 py-2 mt-2 gap-2 rounded-3xl text-xs">Language <i class="fa-solid pb-1 fa-sort-down"></i></button>
                    </div>

                    <div className="flex flex-col text-white lg:items-start md:-ml-16 md:items-start text-start gap-1">
                        <span className="text-lg font-semibold text-[white] mb-2 ">HOME</span>
                        <a className="link link-hover text-xs">2D</a>
                        <a className="link link-hover text-xs">3D</a>
                        <a className="link link-hover text-xs">AI</a>
                        <a className="link link-hover text-xs">Integrations</a>
                        <a className="link link-hover text-xs">Blueprint</a>
                        <a className="link link-hover text-xs">Industry Trends</a>
                        <a className="link link-hover text-xs">Blog</a>

                    </div>
                    <div className="flex lg:items-start text-white md:items-start flex-col md:-ml-16 text-start  gap-1  lg:-ml-0">
                        <span className="text-lg font-semibold mb-2">Learn more</span>
                        <a className="link link-hover text-xs">Magic Brush</a>
                        <a className="link link-hover text-xs">Individuals</a>
                        <a className="link link-hover text-xs">Photographers</a>
                        <a className="link link-hover text-xs">Marketing</a>
                        <a className="link link-hover text-xs">Developers</a>
                        <a className="link link-hover text-xs">Ecommerce</a>
                    </div>
                    <div className="flex text-white lg:items-start md:items-start md:-ml-16 flex-col text-left gap-1  lg:-ml-0">
                        <span className="text-lg font-semibold mb-2">Support</span>
                        <a className="link link-hover text-xs">Help & FAQs</a>
                        <a className="link link-hover text-xs">Refunds</a>
                        <a className="link link-hover text-xs">Platform Status</a>
                        <a className="link link-hover text-xs">Privacy Policy</a>
                        <a className="link link-hover text-xs">Terms & Conditions</a>
                        <a className="link link-hover text-xs">Contact us</a>
                        <a className="link link-hover text-xs">Sign up</a>
                    </div>
                    <div className="text-center ml-20 md:ml-0 lg:ml-0">
                        <span className="font-bold text-white text-lg mb-4 ml-8 lg:-ml-16">
                            Our Address
                        </span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
                            width="70%"
                            height="70%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </footer>


            </div>
        </div>
    )
}

export default Footer;