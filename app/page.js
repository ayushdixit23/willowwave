
import Image from "next/image";
import Sliders from "./assets/images/slider/slider1.png"
import Blog1 from "./assets/images/blog/398x258.png"
import van from "./assets/images/brand/van.svg"
import slack from "./assets/images/brand/slack.svg"
import pana from "./assets/images/brand/pana.svg"
import shang from "./assets/images/brand/shang.svg"
import spotify from "./assets/images/brand/spotify.svg"
import fiveHud from "./assets/images/avatar/540x370.png"
import threehub from "./assets/images/component/392x280.png"

export default function Home() {
  return (
    <>
      <div id="header">
        <div class="header-menu style-one style-two">
          <div class="container"> <a class="logo" href="">
            <svg width="148" height="36" viewbox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7015_1134)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5918 15.4774L13.0001 12.9447L10.4083 15.4774C8.98899 16.8643 8.98899 19.1357 10.4083 20.5427L13.0001 23.0754L15.5918 20.5427C17.0111 19.1357 17.0111 16.8643 15.5918 15.4774ZM12.9795 0L3.80544 8.96482C1.27538 11.4372 6.10352e-05 14.7136 6.10352e-05 17.9698C6.10352e-05 21.2261 1.27538 24.5025 3.80544 26.9749L6.39721 29.5075L11.8687 24.1608L9.27696 21.6281C8.24848 20.6231 7.73424 19.2965 7.73424 17.9698C7.73424 16.6432 8.24848 15.3166 9.27696 14.3116L18.4716 5.34673L12.9795 0ZM13.0001 36L22.1741 27.0352C24.7247 24.5427 26.0001 21.2663 26.0001 18.01C26.0001 14.7538 24.7247 11.4774 22.1947 9.00502L19.6029 6.47236L14.1314 11.8191L16.7232 14.3518C17.7516 15.3568 18.2659 16.6834 18.2659 18.01C18.2659 19.3367 17.7516 20.6633 16.7232 21.6683L7.54911 30.6332L13.0001 36Z" fill="#0C1228"></path>
              </g>

              <defs>
                <clippath id="clip0_7015_1134">
                  <rect width="26" height="36" fill="white"></rect>
                </clippath>
              </defs>
            </svg></a>
            <div class="menu-main">
              <ul class="flex-center">
                <li> <a class="active" href="#!">Home</a>
                  <ul class="sub-nav">
                    <li class="sub-nav-item active"><a class="sub-nav-link" href="index.html">Home IT Services</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home2.html">Home Business Consulting</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home3.html">Home IoT Services</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home4.html">Home Digital Agency</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home5.html">Home Finance</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home6.html">Home Digital SEO Marketing</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="home7.html">Home Helpdesk</a></li>
                  </ul>
                </li>
                <li> <a href="#!">Solutions</a>
                  <div class="sub-nav sub-nav-solution">
                    <div class="container">
                      <div class="content-main">
                        <div class="row">
                          <div class="col-9">
                            <div class="item">
                              <div class="service-cate heading6">IT Solutions </div>
                              <div class="list-service mt-8">
                                <div class="row">
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution1" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-phone-sync fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Managed IT Services</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution2" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-user-sync fs-28"></i></div>
                                    <div class="service-name text-button pl-8">IT Consulting</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution3" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-device-cloud fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Cloud Computing</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution4" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-cloud-dots fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Cybersecurity Solutions</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution5" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-phone-cloud fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Data Analytics</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution6" data-cate="IT Solutions">
                                    <div class="icon"> <i class="icon-device-sync fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Software Development</div></a></div>
                                </div>
                              </div>
                            </div>
                            <div class="item mt-20">
                              <div class="service-cate heading6">Business Consulting </div>
                              <div class="list-service mt-8">
                                <div class="row">
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution7" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-coin-user fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Business Strategy Analysis</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution8" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-user-time fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Project Management</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution9" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-hand-up fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Operational Optimization</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution10" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-device-cloud fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Digital Consulting</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution11" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-target-chart fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Marketing Strategy</div></a></div>
                                  <div class="col-4"><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution12" data-cate="Business Consulting">
                                    <div class="icon"> <i class="icon-user-chart fs-28"></i></div>
                                    <div class="service-name text-button pl-8">Leadership Development</div></a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-3">
                            <div class="content bg-linear bora-8 p-24">
                              <div class="heading6">Explore All Services</div>
                              <div class="caption1 text-on-surface-variant1 mt-4">Unlocking the Full Spectrum of IT Solutions and Business Consulting for your needs</div>
                              <div class="block-button mt-20"> <a class="button-blue button-blue-hover text-button-small" href="service-detail.html">Explore Now </a></div>
                              <div class="more-infor mt-32">
                                <div class="mail flex-item-center"><i class="ph ph-envelope fs-18"> </i>
                                  <div class="caption1 pl-8">hi.avitex@gmail.com</div>
                                </div>
                                <div class="call flex-item-center mt-16"> <i class="ph-fill ph-phone fs-14 p-4 bg-blue text-white bora-50"></i>
                                  <div class="text-title pl-8">123 456 7890</div>
                                </div>
                                <div class="list-social flex-item-center gap-10 mt-28"><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.facebook.com/" target="_blank"><i class="icon-facebook"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.linkedin.com/" target="_blank"><i class="icon-linkedin"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.twitter.com/" target="_blank"><i class="icon-twitter"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.youtube.com/" target="_blank"><i class="icon-youtube"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.instagram.com/" target="_blank"><i class="icon-instagram fs-14"></i></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li> <a href="#!">Company</a>
                  <ul class="sub-nav">
                    <li class="sub-nav-item"><a class="sub-nav-link" href="about-us.html">About Us</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="our-team.html">Our Teams</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="team-detail.html">Team Details</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="pricing-plan.html">Pricing Plan</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="list-testimonials.html">Testimonials</a></li>
                  </ul>
                </li>
                <li> <a href="#!">Case Studies</a>
                  <ul class="sub-nav">
                    <li class="sub-nav-item"><a class="sub-nav-link" href="case-studies-one.html">Case Studies 1</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="case-studies-two.html">Case Studies 2</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="case-studies-three.html">Case Studies 3</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="case-studies-four.html">Case Studies 4</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="case-studies-detail.html">Single Studies 1</a></li>
                    <li class="sub-nav-item"> <a class="sub-nav-link" href="case-studies-detail-two.html">Single Studies 2</a></li>
                  </ul>
                </li>
                <li> <a href="#!">Blog</a>
                  <ul class="sub-nav">
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-grid.html">Blog Grid</a></li>
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-list.html">Blog List</a></li>
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-standard.html">Blog Standard</a></li>
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-modern.html">Blog Modern</a></li>
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-detail.html">Blog Detail 1</a></li>
                    <li class="sub-nav-item"><a class="sub-nav-link" href="blog-detail-two.html">Blog Detail 2</a></li>
                  </ul>
                </li>
                <li> <a href="#!">Pages</a>
                  <div class="sub-nav d-flex">
                    <ul class="left">
                      <li class="sub-nav-item"><a class="sub-nav-link" href="contact-us.html">Contact Us</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="faqs.html">FAQs</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="error-404.html">Error 404</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="login.html">Login/Register</a></li>
                    </ul>
                    <ul class="right">
                      <li class="sub-nav-item"><a class="sub-nav-link" href="shop.html">Our Shop</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="product-detail.html">Products Detail</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="cart.html">Shopping Cart</a></li>
                      <li class="sub-nav-item"><a class="sub-nav-link" href="checkout.html">Checkout</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div class="right-block flex-item-center">
              <div class="call-block flex-item-center"><i class="ph ph-phone-call"></i><span>123 456 7890</span></div><a class="button hover-button bg-blue text-white border-none text-button-small" href="contact-us.html"> <span>Contact</span></a>
              <div class="search-icon"> <i class="ph ph-magnifying-glass"></i></div>
              <div class="bag-icon"><i class="ph ph-handbag"></i><span class="bg-blue">0</span></div>
              <div class="menu-humburger"><i class="ph ph-list"></i></div>
            </div>
          </div>
          <div class="search-block">
            <div class="container flex-between h-100">
              <div class="left flex-item-center gap-16">
                <div class="icon-search"> <i class="ph ph-magnifying-glass fs-24 pointer"></i></div>
                <div class="input-block w-100">
                  <input class="w-100" type="text" placeholder="Search..." />
                </div>
              </div>
              <div class="right">
                <div class="icon-close"> <i class="ph-bold ph-x fs-24 pointer"></i></div>
              </div>
            </div>
          </div>
          <div id="menu-mobile-block">
            <div class="menu-mobile-main">
              <div class="container">
                <div class="heading flex-between"><a class="logo-mobile" href="">
                  <svg width="148" height="36" viewbox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7015_1125)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5918 15.4774L13.0001 12.9447L10.4083 15.4774C8.98899 16.8643 8.98899 19.1357 10.4083 20.5427L13.0001 23.0754L15.5918 20.5427C17.0111 19.1357 17.0111 16.8643 15.5918 15.4774ZM12.9795 0L3.80544 8.96482C1.27538 11.4372 6.10352e-05 14.7136 6.10352e-05 17.9698C6.10352e-05 21.2261 1.27538 24.5025 3.80544 26.9749L6.39721 29.5075L11.8687 24.1608L9.27696 21.6281C8.24848 20.6231 7.73424 19.2965 7.73424 17.9698C7.73424 16.6432 8.24848 15.3166 9.27696 14.3116L18.4716 5.34673L12.9795 0ZM13.0001 36L22.1741 27.0352C24.7247 24.5427 26.0001 21.2663 26.0001 18.01C26.0001 14.7538 24.7247 11.4774 22.1947 9.00502L19.6029 6.47236L14.1314 11.8191L16.7232 14.3518C17.7516 15.3568 18.2659 16.6834 18.2659 18.01C18.2659 19.3367 17.7516 20.6633 16.7232 21.6683L7.54911 30.6332L13.0001 36Z" fill="#0C1228"></path>
                    </g>

                    <defs>
                      <clippath id="clip0_7015_1125">
                        <rect width="26" height="36" fill="white"></rect>
                      </clippath>
                    </defs>
                  </svg></a>
                  <div class="close-block"> <i class="ph-bold ph-x"></i></div>
                </div>
                <ul class="menu-nav-mobile">
                  <li class="nav-item-mobile flex-column gap-8 pt-8 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Home <i class="ph ph-caret-right fs-12"></i></a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8 active"><a class="sub-nav-link" href="index.html">Home IT Services</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home2.html">Home Business Consulting</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home3.html">Home IoT Services</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home4.html">Home Business Consulting</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home5.html">Home Finance</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home6.html">Home Digital SEO Marketing</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="home7.html">Home Helpdesk</a></li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Solutions <i class="ph ph-caret-right fs-12"></i></a>
                    <div class="sub-nav-mobile">
                      <div class="row flex-between gap-16 flex-wrap">
                        <div class="item">
                          <div class="heading6 fw-600">IT Consulting </div>
                          <div class="list-service d-flex flex-column gap-16 mt-16"> <a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution1" data-cate="IT Solutions">
                            <div class="icon"> <i class="icon-phone-sync fs-28 d-block"></i></div>
                            <div class="text-button pl-12">Managed IT Services</div></a><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution2" data-cate="IT Solutions">
                              <div class="icon"> <i class="icon-user-sync fs-28"></i></div>
                              <div class="text-button pl-12">IT Consulting</div></a><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution3" data-cate="IT Solutions">
                              <div class="icon"> <i class="icon-device-cloud fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Cloud Computing</div></a><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution4" data-cate="IT Solutions">
                              <div class="icon"> <i class="icon-cloud-dots fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Cybersecurity Solutions</div></a><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution5" data-cate="IT Solutions">
                              <div class="icon"> <i class="icon-phone-cloud fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Data Analytics</div></a><a class="nav-item-main service-item flex-item-center" href="service-detail.html" data-item="solution6" data-cate="IT Solutions">
                              <div class="icon"> <i class="icon-device-sync fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Software Development</div></a></div>
                        </div>
                        <div class="item">
                          <div class="heading6 fw-600">Business Consulting </div>
                          <div class="list-service d-flex flex-column gap-16 mt-16"> <a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution7" data-cate="Business Consulting">
                            <div class="icon"> <i class="icon-coin-user fs-28 d-block"></i></div>
                            <div class="text-button pl-12">Business Strategy Analysis</div></a><a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution8" data-cate="Business Consulting">
                              <div class="icon"> <i class="icon-user-time fs-28"></i></div>
                              <div class="text-button pl-12">Project Management</div></a><a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution9" data-cate="Business Consulting">
                              <div class="icon"> <i class="icon-hand-up fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Operational Optimization</div></a><a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution10" data-cate="Business Consulting">
                              <div class="icon"> <i class="icon-device-cloud fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Digital Consulting</div></a><a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution11" data-cate="Business Consulting">
                              <div class="icon"> <i class="icon-target-chart fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Marketing Strategy</div></a><a class="nav-item-main service-item flex-item-center" href="#!" data-item="solution12" data-cate="Business Consulting">
                              <div class="icon"> <i class="icon-user-chart fs-28 d-block"></i></div>
                              <div class="text-button pl-12">Leadership Development</div></a></div>
                        </div>
                        <div class="content bg-linear bora-8 p-24">
                          <div class="heading6">Explore All Services</div>
                          <div class="fs-14 text-on-surface-variant1 mt-4">Unlocking the Full Spectrum of IT Solutions and Business Consulting for your needs</div>
                          <div class="block-button mt-20"> <a class="button-blue button-blue-hover text-button-small" href="service-detail.html">Explore Now </a></div>
                          <div class="more-infor mt-20">
                            <div class="mail flex-item-center"><i class="ph ph-envelope fs-18"> </i>
                              <div class="fs-14 pl-8">hi.avitex@gmail.com</div>
                            </div>
                            <div class="call flex-item-center mt-12"> <i class="ph-fill ph-phone fs-14 p-4 bg-blue text-white bora-50"></i>
                              <div class="text-title pl-8">123 456 7890</div>
                            </div>
                            <div class="list-social flex-item-center gap-10 mt-28"><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.facebook.com/" target="_blank"><i class="icon-facebook"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.linkedin.com/" target="_blank"><i class="icon-linkedin"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.twitter.com/" target="_blank"><i class="icon-twitter"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.youtube.com/" target="_blank"><i class="icon-youtube"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.instagram.com/" target="_blank"><i class="icon-instagram fs-14"></i></a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Company <i class="ph ph-caret-right fs-12"></i></a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"><a class="sub-nav-link" href="about-us.html">About Us</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="our-team.html">Our Team</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="team-detail.html">Team Detail</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="pricing-plan.html">Pricing Plan</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="list-testimonials.html">Testimonials</a></li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Case Studies <i class="ph ph-caret-right fs-12"></i></a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"><a class="sub-nav-link" href="case-studies-one.html">Case Studies 1</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="case-studies-two.html">Case Studies 2</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="case-studies-three.html">Case Studies 3</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="case-studies-four.html">Case Studies 4</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="case-studies-detail.html">Single Studies 1</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="case-studies-detail-two.html">Single Studies 2</a></li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Blog <i class="ph ph-caret-right fs-12"></i></a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"><a class="sub-nav-link" href="blog-grid.html">Blog Grid</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="blog-list.html">Blog List</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="blog-standard.html">Blog Standard</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="blog-modern.html">Blog Modern</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="blog-detail.html">Blog Detail 1</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="blog-detail-two.html">Blog Detail 2</a></li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer"><a class="nav-link-mobile" href="#!">Pages <i class="ph ph-caret-right fs-12"></i></a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"><a class="sub-nav-link" href="contact-us.html">Contact Us</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="faqs.html">FAQs</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="error-404.html">Error 404</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="login.html">Login/Register</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"><a class="sub-nav-link" href="shop.html">Our Shop</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="product-detail.html">Product Detail</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="cart.html">Shopping Cart</a></li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8"> <a class="sub-nav-link" href="checkout.html">Checkout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div class="slider-block style-one mt-60">
          <div class="container">
            <div class="row row-gap-32">
              <div class="col-xl-4 col-12">
                <div class="text">
                  <div class="heading2 pr-55">IT services for small to mid-Sized companies</div>
                  <div class="body2 mt-16">We provide custom software solutions for any industry. Creating high - value software and technology for your business. </div>
                </div>
                <div class="block-button mt-40 d-flex gap-16 flex-wrap"><a class="button hover-button bg-blue text-white border-none" href="about-us.html"> <span>Explore More</span></a><a class="button hover-button bg-grey border-none" href="contact-us.html"> <span>Contact</span></a></div>
              </div>
              <div class="col-xl-8 col-12">
                <div class="bg-img w-100"><Image class="w-100" src={Sliders} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-about mt-60">
          <div class="container">
            <div class="content">
              <div class="row row-gap-12 pb-40">
                <div class="col-12 col-xl-5 col-md-6">
                  <div class="text-label text-white bg-blue">About Us</div>
                  <div class="heading3 text-white mt-16">We solve technology challenges.</div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="desc text-white">Your IT Services Partner! We offer customized IT solutions, from managed services to cloud computing and cybersecurity. Empower your business with our expertise for growth and efficiency. </div><a class="text-button-small text-white border-underline-white-2px mt-16" href="about-us.html">Join us today!</a>
                </div>
              </div>
              <div class="line"></div>
              <div class="counter row row-gap-24 pt-40">
                <div class="col-6 col-md-3">
                  <div class="counter-item">
                    <div class="count-number heading3 text-white">20</div>
                    <div class="body1 mt-4 text-white">Years experiences</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="counter-item">
                    <div class="flex-item-center">
                      <div class="count-number heading3 text-white">1.8</div><span class="heading3 text-white">k</span>
                    </div>
                    <div class="body1 mt-4 text-white">Happy customers</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="counter-item">
                    <div class="count-number heading3 text-white">460</div>
                    <div class="body1 mt-4 text-white">Project completed</div>
                  </div>
                </div>
                <div class="col-6 col-md-3">
                  <div class="counter-item">
                    <div class="count-number heading3 text-white">15</div>
                    <div class="body1 mt-4 text-white">Awards achievement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-benefit mt-80">
          <div class="container">
            <div class="row row-gap-40">
              <div class="col-12 col-lg-3 col-sm-6">
                <div class="benefit-item ">
                  <div class="block-icon"> <i class="ph ph-medal fs-42"></i></div>
                  <div class="heading6 mt-8">Expertise</div>
                  <div class="text-on-surface-variant1 mt-8">Access to specialized knowledge and technology expertise for effective IT solutions.</div>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-sm-6">
                <div class="benefit-item ">
                  <div class="block-icon"> <i class="ph ph-money fs-42"></i></div>
                  <div class="heading6 mt-8">Cost Savings</div>
                  <div class="text-on-surface-variant1 mt-8">Avoiding expenses associated with maintaining an in-house IT department.</div>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-sm-6">
                <div class="benefit-item ">
                  <div class="block-icon"> <i class="ph ph-fingerprint fs-42"></i></div>
                  <div class="heading6 mt-8">Enhanced Security</div>
                  <div class="text-on-surface-variant1 mt-8">Robust measures to protect against cyber threats and ensure data security.</div>
                </div>
              </div>
              <div class="col-12 col-lg-3 col-sm-6">
                <div class="benefit-item ">
                  <div class="block-icon"> <i class="ph ph-chart-line-up fs-42"></i></div>
                  <div class="heading6 mt-8">Increased Efficiency</div>
                  <div class="text-on-surface-variant1 mt-8">Streamlined operations, automation, and proactive monitoring for improved productivity.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-solution bg-linear mt-80 pt-80 pb-80">
          <div class="container text-center">
            <div class="text-label text-blue text-center pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">How we do</div>
            <div class="heading3 text-center mt-12">Our solutions</div>
            <div class="row row-gap-40 mt-40 sub-nav-solution">
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution1"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-phone-sync fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">Managed IT Services</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12">Outsourcing IT management and maintenance, including network monitoring, data backup, cybersecurity, help desk support.</div></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Services" data-item="solution2"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-user-sync fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">IT Consulting</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12">Strategic guidance on IT strategy, digital transformation, software implementation, and project management.</div></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Services" data-item="solution3"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-device-cloud fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">Cloud Computing</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12">Access to remote servers and infrastructure for data storage, application hosting, and scalable resources.</div></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution4"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-cloud-dots fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">Cybersecurity Solutions</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12">Protecting businesses from cyber threats through measures like network security, encryption, and training.</div></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Services" data-item="solution5"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-phone-cloud fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">Data Analytics</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12">Services for data storage, backup, integration, governance, and analytics to drive insights and informed decisions.</div></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-sm-6">
                <div class="solution-item service-item nav-item-main p-40 bora-20 bg-white h-100" data-cate="IT Solutions" data-item="solution5"><a class="main-item flex-column-item-center" href="service-detail.html"><i class="icon-device-sync fs-60 text-blue"></i>
                  <div class="service-name heading5 text-center mt-24">Software Development</div>
                  <div class="service-desc text-on-surface-variant1 text-center mt-12"> Custom software development and integration services to meet specific business needs.</div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-service mt-80">
          <div class="container">
            <div class="row gy-2 flex-between">
              <div class="col-xl-8 col-md-9 col-12">
                <div class="text-label text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">What we do</div>
                <div class="heading3 mt-12">Solve technology problems in every industry that customers need.</div>
              </div>
              <div class="col-lg-2 col-md-3 col-12 text-end"><a class="text-button border-underline-blue display-inline-block" href="service-detail.html">View All industries</a></div>
            </div>
            <div class="row mt-40 row-gap-12 sub-nav-solution">
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Finance Consulting" data-item=""><i class="ph ph-bank fs-24"></i>
                <div class="service-name heading6 pl-12">Finance & Banking</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="IT Services" data-item=""><i class="ph ph-rocket fs-24"></i>
                <div class="service-name heading6 pl-12">Information Technology & Telecommunications</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Medical Solutions" data-item=""><i class="ph ph-first-aid-kit fs-24"></i>
                <div class="service-name heading6 pl-12">Healthcare & Pharmaceuticals</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Transportation Solutions" data-item=""><i class="ph ph-airplane-takeoff fs-24"></i>
                <div class="service-name heading6 pl-12">Transportation & Logistics</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="IT Services" data-item=""><i class="ph ph-warehouse fs-24"></i>
                <div class="service-name heading6 pl-12">Real Estate</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Future Industry" data-item=""><i class="ph ph-wrench fs-24"></i>
                <div class="service-name heading6 pl-12">Manufacturing & Industry 4.0</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Education Solutions" data-item=""><i class="ph ph-basket fs-24"></i>
                <div class="service-name heading6 pl-12">Education & Training</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Environmental Resources" data-item=""><i class="ph ph-lightbulb-filament fs-24"></i>
                <div class="service-name heading6 pl-12">Energy & Environment</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Electronic Commerce" data-item=""><i class="ph ph-graduation-cap fs-24"></i>
                <div class="service-name heading6 pl-12">E-commerce & Retail</div></a></div>
              <div class="col-sm-6 col-12"> <a class="service-item nav-item-main bg-surface pt-16 pb-16 pl-20 pr-20 flex-item-center bora-8 h-100" href="service-detail.html" data-cate="Multimedia Communication" data-item=""><i class="ph ph-youtube-logo fs-24"></i>
                <div class="service-name heading6 pl-12">Entertainment and Media</div></a></div>
            </div>
          </div>
        </div>
        <div class="section-case-studies section-news section-slide-shared bg-linear mt-80 pt-80 pb-80">
          <div class="container">
            <div class="cursor flex-center gap-12"><i class="ph ph-caret-left text-white"></i><i class="ph ph-caret-right text-white"></i></div>
            <div class="row gy-1 flex-between">
              <div class="col-xl-5 col-md-4 col-12">
                <div class="text-label text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-2 display-inline-block">Why we do</div>
                <div class="heading3 mt-12">Case studies</div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-7 col-12">
                <div class="body2">Case studies that showcase the agency's approach, process, and results for specific clients.</div>
              </div>
            </div>
            <div class="list-news mt-40">
              <div class="item">
                <div class="blog-item blog-item-filter hover-box-shadow case-studies-item-main"><a class="main-item" href="case-studies-detail.html">
                  <div class="bg-img w-100 overflow-hidden"><Image class="w-100 h-100 display-block" src={Blog1} alt="Demystifying IT Services: Exploring Tech Trends &amp; Solutions" /></div>
                  <div class="infor mt-28">
                    <div class="category text-button-small text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-8 display-inline-block">Performance Enhancement</div>
                    <div class="title heading5 mt-12">Demystifying IT Services: Exploring Tech Trends & Solutions</div>
                    <div class="desc text-on-surface-variant1 mt-12">Enhanced performance for a manufacturing firm by optimizing their database structure, resulting in improved efficiency and competitiveness.</div>
                    <div class="date text-label text-on-surface-variant1 mt-16">September 18, 2023</div>
                  </div></a>
                </div>
              </div>
              <div class="item">
                <div class="blog-item blog-item-filter hover-box-shadow case-studies-item-main"><a class="main-item" href="case-studies-detail.html">
                  <div class="bg-img w-100 overflow-hidden"><Image class="w-100 h-100 display-block" src={Blog1} alt="Unlocking Business Potential: The Role of IT Services Today" /></div>
                  <div class="infor mt-28">
                    <div class="category text-button-small text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-8 display-inline-block">Cloud Solutions</div>
                    <div class="title heading5 mt-12">Unlocking Business Potential: The Role of IT Services Today</div>
                    <div class="desc text-on-surface-variant1 mt-12">Secured sensitive data during a financial company's cloud migration by designing a hybrid solution combining cloud flexibility and on-premises control.</div>
                    <div class="date text-label text-on-surface-variant1 mt-16">September 11, 2023</div>
                  </div></a>
                </div>
              </div>
              <div class="item">
                <div class="blog-item blog-item-filter hover-box-shadow case-studies-item-main"><a class="main-item" href="case-studies-detail.html">
                  <div class="bg-img w-100 overflow-hidden"><Image class="w-100 h-100 display-block" src={Blog1} alt="Tech Insights: How IT Services Drive Modern Business" /></div>
                  <div class="infor mt-28">
                    <div class="category text-button-small text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-8 display-inline-block">Application Development</div>
                    <div class="title heading5 mt-12">Tech Insights: How IT Services Drive Modern Business</div>
                    <div class="desc text-on-surface-variant1 mt-12">Enabled a startup to launch a successful mobile app by providing end-to-end development, leading to high downloads and recognition.</div>
                    <div class="date text-label text-on-surface-variant1 mt-16">August 20, 2023</div>
                  </div></a>
                </div>
              </div>
              <div class="item">
                <div class="blog-item blog-item-filter hover-box-shadow case-studies-item-main"><a class="main-item" href="case-studies-detail.html">
                  <div class="bg-img w-100 overflow-hidden"><Image class="w-100 h-100 display-block" src={Blog1} alt="Exploring Trendy Technologies Shaping the IT Landscape" /></div>
                  <div class="infor mt-28">
                    <div class="category text-button-small text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-8 display-inline-block">Trendy Technologies</div>
                    <div class="title heading5 mt-12">Exploring Trendy Technologies Shaping the IT Landscape</div>
                    <div class="desc text-on-surface-variant1 mt-12">Explore the trending technologies that are reshaping the IT industry, discover how they are transforming our interactions with the digital world.</div>
                    <div class="date text-label text-on-surface-variant1 mt-16">August 12, 2023</div>
                  </div></a>
                </div>
              </div>
              <div class="item">
                <div class="blog-item blog-item-filter hover-box-shadow case-studies-item-main"><a class="main-item" href="case-studies-detail.html">
                  <div class="bg-img w-100 overflow-hidden"><Image class="w-100 h-100 display-block" src={Blog1} alt="Unveiling Cybersecurity Best Practices for a Safer IT World" /></div>
                  <div class="infor mt-28">
                    <div class="category text-button-small text-blue pt-4 pb-4 pl-12 pr-12 bg-grey bora-8 display-inline-block">Cybersecurity</div>
                    <div class="title heading5 mt-12">Unveiling Cybersecurity Best Practices for a Safer IT World</div>
                    <div class="desc text-on-surface-variant1 mt-12">Immerse yourself in the realm of network security with leading principles to safeguard personal information and critical data.</div>
                    <div class="date text-label text-on-surface-variant1 mt-16">August 10, 2023</div>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-banner">
          <div class="list">
            <div class="heading4 text-uppercase text-white">Experience Seamless IT Solutions</div><i class="icon-icon-logo fs-36 text-white"></i>
            <div class="heading4 text-uppercase text-white">Request IT Consultation</div><i class="icon-icon-logo fs-36 text-white"></i>
            <div class="heading4 text-uppercase text-white">Experience Seamless IT Solutions</div><i class="icon-icon-logo fs-36 text-white"></i>
            <div class="heading4 text-uppercase text-white">Request IT Consultation</div><i class="icon-icon-logo fs-36 text-white"></i>
          </div>
        </div>
        <div class="section-brand bg-white pt-80 pb-80">
          <div class="container">
            <div class="heading5 text-center">Trusted by specialists all around the world</div>
            <div class="row mt-28 flex-center">
              <div class="col-11">
                <div class="row">
                  <div class="col-xl-2-4 col-md-4 col-6"><Image class="w-100" src={van} alt="img" /></div>
                  <div class="col-xl-2-4 col-md-4 col-6"><Image class="w-100" src={slack} alt="img" /></div>
                  <div class="col-xl-2-4 col-md-4 col-6"><Image class="w-100" src={pana} alt="img" /></div>
                  <div class="col-xl-2-4 col-md-4 col-6"><Image class="w-100" src={shang} alt="img" /></div>
                  <div class="col-xl-2-4 col-md-4 col-6"><Image class="w-100" src={spotify} alt="img" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-testimonial section-testimonial-shared style-one pb-80">
          <div class="container">
            <div class="cursor-testimonials flex-center gap-12"><i class="ph ph-caret-left text-white"></i><i class="ph ph-caret-right text-white"></i></div>
            <div class="row flex-center">
              <div class="col-md-11 col-12">
                <div class="testimonial-item bg-linear list-testimonials">
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i></div>
                    <div class="heading4 mt-24">Bytewave exceeded our expectations with their cloud computing solutions. Highly recommended!</div>
                    <div class="infor mt-16">
                      <div class="heading6">Christina Smith</div>
                      <div class="text-on-surface-variant1">CEO Digital Avitex</div>
                    </div>
                  </div>
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i></div>
                    <div class="heading4 mt-24">Their mastery of market analysis and tailored solutions drove our growth and competive advantage.</div>
                    <div class="infor mt-16">
                      <div class="heading6">Alexander Parker</div>
                      <div class="text-on-surface-variant1">Designer FPT</div>
                    </div>
                  </div>
                  <div class="content-main">
                    <div class="star flex-item-center gap-1"><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i><i class="ph-fill ph-star text-blue fs-20"></i></div>
                    <div class="heading4 mt-24">These consultants are true partners in success. Their thorough understanding of industry coupled.</div>
                    <div class="infor mt-16">
                      <div class="heading6">Georgina Rodriguez </div>
                      <div class="text-on-surface-variant1">CEO AliTechnology</div>
                    </div>
                  </div>
                </div>
                <div class="list-avatar">
                  <div class="bg-img active" data-name="0"><Image src={fiveHud} alt="avatar" /></div>
                  <div class="bg-img" data-name="1"><Image src={fiveHud} alt="avatar" /></div>
                  <div class="bg-img" data-name="2"><Image src={fiveHud} alt="avatar" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-contact bg-linear-grey pt-60 pb-60">
          <div class="container">
            <div class="row flex-between row-gap-40">
              <div class="col-12 col-xl-7 text-white">
                <div class="text-label text-white pt-4 pb-4 pl-12 pr-12 bg-blue bora-2 display-inline-block">Contact us</div>
                <div class="heading3 text-white mt-12">Free consultation - discover IT solutions for your business</div>
                <p class="desc mt-24">Unlock the full potential of your business with our free consultation. Our expert team will assess your IT needs, recommend tailored solutions, and chart a path to success. Book your consultation now and take the first step towards empowering your business with cutting-edge technology.</p>
                <div class="list-features gy-2 mt-16">
                  <div class="item flex-item-center"> <i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Confirmation of appointment details</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Research and preparation by the IT services company</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Consultation to discuss technology solutions</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Needs assessment for tailored solutions</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Presentation of proposed solutions</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Project execution and ongoing support</div>
                  </div>
                  <div class="item flex-item-center mt-8"><i class="ph ph-check fs-20"></i>
                    <div class="body2 pl-12">Follow-up to evaluate effectiveness and satisfaction</div>
                  </div>
                </div>
                <div class="line mt-24"></div>
                <div class="flex-item-center mt-24"><i class="ph ph-envelope fs-20"></i>
                  <div class="body2 pl-12">hi.avitex@gmail.com</div>
                </div>
                <div class="flex-item-center mt-8"><i class="ph ph-phone-call fs-20"></i>
                  <div class="body2 pl-12">1-333-345-6868</div>
                </div>
                <div class="flex-item-center mt-8"><i class="ph ph-map-pin fs-20"></i>
                  <div class="body2 pl-12">101 E 129th St, East Chicago, IN 46312, US</div>
                </div>
              </div>
              <div class="col-12 col-xl-4">
                <div class="form-block bora-16 bg-white pt-24 pb-24 pl-28 pr-28 d-flex flex-column gap-20">
                  <div class="heading5">Schedule a free consultation</div>
                  <div class="row gy-2">
                    <div class="col-12 col-sm-6">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="firstName">First Name</label>
                      <input class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="firstName" placeholder="" />
                    </div>
                    <div class="col-12 col-sm-6">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="lastName">Last Name</label>
                      <input class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="lastName" placeholder="" />
                    </div>
                    <div class="col-12">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="phone">Phone</label>
                      <input class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="number" id="phone" placeholder="" />
                    </div>
                    <div class="col-12">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="companyEmail">Company Email</label>
                      <input class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="email" id="companyEmail" placeholder="" />
                    </div>
                    <div class="col-12">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="company">Company/ Organization</label>
                      <input class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline" type="text" id="company" placeholder="" />
                    </div>
                    <div class="col-12">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="cate">How can we help you?</label>
                      <select class="w-100 bg-white pl-16 pr-24 pt-8 pb-8 bora-4 border-outline" name="form" id="cate">
                        <option value="Financial Planning">Financial Planning</option>
                        <option value="Business Planning">Business Planning</option>
                        <option value="Development Planning">Development Planning</option>
                      </select><i class="ph ph-caret-down"></i>
                    </div>
                    <div class="col-12">
                      <label class="caption1 text-on-surface-variant1 pb-8" for="message">Your message</label>
                      <textarea class="w-100 bg-white pl-16 pr-16 pt-8 pb-8 bora-4 border-outline display-block" name="message" rows="3" id="message" placeholder=""></textarea>
                    </div>
                  </div>
                  <div class="block-button">
                    <button class="button-blue button-blue-hover w-100">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div class="footer-block bg-white pt-60">
          <div class="container">
            <div class="row row-gap-32">
              <div class="col-xl-3 col-md-6">
                <div class="footer-company-infor d-flex flex-column gap-20"><a class="logo" href="index.html">
                  <svg width="148" height="36" viewbox="0 0 148 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_7015_1136)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5918 15.4774L13.0001 12.9447L10.4083 15.4774C8.98899 16.8643 8.98899 19.1357 10.4083 20.5427L13.0001 23.0754L15.5918 20.5427C17.0111 19.1357 17.0111 16.8643 15.5918 15.4774ZM12.9795 0L3.80544 8.96482C1.27538 11.4372 6.10352e-05 14.7136 6.10352e-05 17.9698C6.10352e-05 21.2261 1.27538 24.5025 3.80544 26.9749L6.39721 29.5075L11.8687 24.1608L9.27696 21.6281C8.24848 20.6231 7.73424 19.2965 7.73424 17.9698C7.73424 16.6432 8.24848 15.3166 9.27696 14.3116L18.4716 5.34673L12.9795 0ZM13.0001 36L22.1741 27.0352C24.7247 24.5427 26.0001 21.2663 26.0001 18.01C26.0001 14.7538 24.7247 11.4774 22.1947 9.00502L19.6029 6.47236L14.1314 11.8191L16.7232 14.3518C17.7516 15.3568 18.2659 16.6834 18.2659 18.01C18.2659 19.3367 17.7516 20.6633 16.7232 21.6683L7.54911 30.6332L13.0001 36Z" fill="#0C1228"></path>
                    </g>

                    <defs>
                      <clippath id="clip0_7015_1136">
                        <rect width="26" height="36" fill="white"></rect>
                      </clippath>
                    </defs>
                  </svg></a>
                  <div class="caption1">Welcome to Bytewave! We provide diverse IT solutions with a team of experts. From IT management to cloud solutions, we have you covered. </div>
                  <div class="caption1">Mon - Fri: 9:00 - 19:00 <br />Closed on Weekends</div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="footer-navigate">
                  <div class="footer-nav-item">
                    <div class="item-heading text-button">Company</div>
                    <ul class="list-nav mt-12">
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="about-us.html">About us</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="our-team.html">Our Team</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="about-us.html">Careers</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="blog-grid.html">Blog</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="case-studies-one.html">Case Studies</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="contact-us.html">Contact</a></li>
                    </ul>
                  </div>
                  <div class="footer-nav-item">
                    <div class="item-heading text-button">Solutions</div>
                    <ul class="list-nav mt-12">
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">Managed IT Services</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">IT Consulting</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">Cloud Computing</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">Cybersecurity Solutions</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">Data Analytics</a></li>
                      <li class="mt-8"><a class="caption1 text-line hover-underline" href="service-detail.html">Software Development</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="company-contact">
                  <div class="heading text-button">Newsletter</div>
                  <div class="send-block mt-20 flex-item-center"><i class="ph ph-envelope"></i>
                    <input class="caption1" type="text" placeholder="Your email address" />
                    <button><i class="ph ph-paper-plane-tilt"></i></button>
                  </div>
                  <div class="list-social flex-item-center gap-10 mt-28"><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.facebook.com/" target="_blank"><i class="icon-facebook"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.linkedin.com/" target="_blank"><i class="icon-linkedin"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.twitter.com/" target="_blank"><i class="icon-twitter"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.youtube.com/" target="_blank"><i class="icon-youtube"></i></a><a class="item bora-50 w-40 h-40 flex-center border-on-surface" href="https://www.instagram.com/" target="_blank"><i class="icon-instagram fs-14"></i></a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="border-line mt-60"></div>
          <div class="bg-white">
            <div class="container bg-white">
              <div class="footer-bottom flex-between pt-8 pb-8">
                <div class="left-block flex-item-center">
                  <div class="copy-right text-on-surface-variant1 caption1">©2023 ByteWave. All Rights Reserved.</div>
                </div>
                <div class="nav-link flex-item-center gap-10"><a class="text-on-surface-variant1 caption1 hover-underline" href="#!">Terms Of Services</a><span class="text-on-surface-variant1 caption1">|</span><a class="text-on-surface-variant1 caption1 hover-underline" href="#!">Privacy Policy</a><span class="text-on-surface-variant1 caption1">|</span><a class="text-on-surface-variant1 caption1 hover-underline" href="#!">Cookie Policy</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="popup-newsletter-block">
        <div class="popup-newsletter-main">
          <div class="bg-img"> <Image class="w-100 h-100" src={threehub} alt="" /></div>
          <div class="content">
            <div class="close-block text-end"><i class="ph-bold ph-x d-block fs-18 pointer"></i></div>
            <div class="heading4">Get Our Newsletter</div>
            <div class="caption1 text-on-surface-variant1 mt-16">Gain access to in-depth articles and analysis from our team of IT experts.</div>
            <form class="mt-32">
              <div class="form-input">
                <input type="text" placeholder="Email" />
                <button><i class="ph ph-paper-plane-tilt text-on-surface-variant1"></i></button>
              </div>
              <div class="flex-item-center gap-8 mt-12">
                <input class="prevent-popup-input" type="checkbox" name="prevent" />
                <div class="caption1 text-on-surface-variant1">Prevent this Pop-up</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="cart-modal js-cart-modal">
        <div class="cart-modal-container js-cart-modal-container">
          <div class="cart-modal-header">
            <div class="header-title">Shopping Cart</div>
            <div class="header-close js-modal-close">Close </div>
          </div>
          <div class="cart-modal-list list-product-main"> </div>
          <div class="cart-modal-footer">
            <div class="footer-heading">
              <div class="heading-title">Subtotal</div>
              <div class="heading-price">$30.0</div>
            </div>
            <div class="footer-btn-block"> <a class="button view-cart-btn" href="cart.html"> View cart</a></div>
          </div>
        </div>
      </div>
      <div class="confirm-delete-modal">
        <div class="confirm-delete-modal-container flex-center p-40 bg-white bora-24">
          <div class="main-content">
            <div class="body2 text-center">Are you sure you want to delete this product?</div>
            <div class="flex-item-center gap-12 mt-16">
              <div class="delete button bg-critical text-white border-none pointer">Delete </div>
              <div class="cancel button bg-surface border-none pointer">Cancel </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
