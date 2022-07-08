import React from 'react';
import '../../assets/scss/footer.css';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import "../../assets/css/aem-grid.css";

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--3">
                            <div className='footer__list1'>
                                <h4>Account</h4>
                                <ul>
                                    <li><a href='#'>Sign In</a></li>
                                    <li><a href='#'>Register</a></li>
                                    <li><a href='#'>Order Status</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3">
                            <div className='footer__list2'>
                                <h4>About Us</h4>
                                <ul>
                                    <li><a href='#'>Our Story</a></li>
                                    <li><a href='#'>Careers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3">
                            <div className='footer__list3'>
                                <h4>Help</h4>
                                <ul>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Order Status</a></li>
                                    <li><a href='#'>Returns</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3">
                            <div className='footer__list4'>
                                <h4>Follow Us!</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <ul className='footer__social-links'>
                                    <li><a href="#"><img src={instagram} alt="instagram-img" /></a></li>
                                    <li><a href="#"><img src={facebook} alt="facebook-img"/></a></li>
                                    <li><a href="#"><img src={twitter} alt="twitter-img"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__copyrights'>
                    <div className='container'>
                        <div className='copyrights__content'>
                        <img src='' alt="logo" />
                            <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
                            <ul>
                                <li><a href='#'>Terms of Use</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
export default Footer;