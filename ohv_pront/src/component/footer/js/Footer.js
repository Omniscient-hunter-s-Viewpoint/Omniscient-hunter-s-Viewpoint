import React from 'react';
import '../scss/Footer.scss'
import {FaGithubSquare, FaInstagram} from "react-icons/fa";
import { FaSteamSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <section className="footerNav">
                <div className="footerName">
                    <div className="footerEmail">
                        <b>asdf1234@gmail.com</b>
                        <b>qwer1234@gmail.com</b>
                    </div>
                    <div className="footerLogoBox">
                            <a href="http://github.com"><FaGithubSquare className="footerGithubIcon" size="30" color="white"/></a>
                            <a href="https://store.steampowered.com/"><FaSteamSquare className="footerSteamIcon" size="30" color="white"/></a>
                            <a href="http://discord.com"><IoLogoDiscord className="footerDiscordIcon" size="30" color="white"/></a>
                            <a href="http://instagram.com"><FaInstagram className="footerInstagramIcon" size="30" color="white"/></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;