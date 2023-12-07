import { CURRENT_YEAR } from "@/utils/utils";
import Link from "next/link";
import { footerLinks } from "@/data";
import "./Footer.module.scss";
import classes from "./Footer.module.scss";

const Footer = () => {
    const { legal, quick, socialMedia } = footerLinks;
    return (
        <div className='mt-auto'>
            <footer className='mt-20 bg-black py-8'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                        {/* About Us */}
                        <div className='col-span-2 flex flex-col text-white'>
                            <div className='mb-4 text-lg font-semibold'>
                                <h1>Syeda Maham Fahim</h1>
                            </div>
                            <div className='mt-4 flex md:mt-0'>
                                <div className='flex'>
                                    {socialMedia.map((item, index) => {
                                        return (
                                            <a
                                                aria-label={`${item.url}`}
                                                href={item.url}
                                                rel='noreferrer'
                                                target='_blank'
                                                className={
                                                    classes.social_media_icons
                                                }
                                                key={index}
                                            >
                                                {item.icons}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className='flex flex-col text-white'>
                            <div className='mb-4 text-lg font-semibold'>
                                <h6>Quick Links</h6>
                            </div>
                            {quick.map((quickLink, index) => {
                                return (
                                    <div className='mb-2' key={index}>
                                        <Link
                                            href={quickLink.url}
                                            className='footer-links text-sm text-white'
                                        >
                                            {quickLink.name}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Our Services */}
                        <div className='flex flex-col text-white'>
                            <div className='mb-4 font-semibold'>
                                <h6>Legal</h6>
                            </div>
                            {legal.map((legal, index) => {
                                return (
                                    <div className='mb-2' key={index}>
                                        <Link
                                            href={legal.url}
                                            className='footer-links text-sm text-white'
                                        >
                                            {legal.name}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
            </footer>
            <CopyRightFooter />
        </div>
    );
};

const CopyRightFooter = () => {
    return (
        <>
            <section className='bg-slate-900 py-4 text-white'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
                        {/* Column 1 */}
                        <div className='text-center md:text-left'>
                            <p className='text-sm'>
                                &copy; {CURRENT_YEAR} BlogBytes. All rights
                                reserved.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className='text-center'>
                            <p className='text-sm'>
                                <span className='block'>
                                    {"</>"} with 💖 by Mike Abramo{" "}
                                </span>
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div className='text-center md:text-right'>
                            <p className='text-sm'>v1.0.0</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Footer;
