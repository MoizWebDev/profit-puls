import Head from "next/head";
import Header from "@/Components/Header";
import Script from "next/script";
import Footer from "@/Components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com/"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&amp;family=Nunito:wght@600;700;800&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="/cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="/cdn.jsdelivr.net/npm/bootstrap-icons%401.4.1/font/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="/css/style.css" />
      <link href="/lib/animate/animate.min.css" rel="stylesheet" />
      <link
        href="/lib/owlcarousel/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/css/style.css" rel="stylesheet" />
      <Header />
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-lg-8 text-center">
              <h1 className="display-4 text-white animated slideInDown">
                DASHBOARD
              </h1>
              <h5 className="text-white fs-4 animated slideInDown">
                WELCOME TO THE DASHBOARD.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              WELCOME!
            </h6>
            <h1 className="mb-5">DASHBOARD</h1>
          </div>
          <div className="container-fluid bg-classNameic d-flex justify-content-center mb-5">
            <div
              className="row d-flex align-items-center shadow-lg w-75 p-5"
              style={{ justifyContent: "space-evenly" }}
            >
              <div className="col-md-8">
                <h3 className="text-primary">ASSIGNMENTS </h3>
                <p className="h6">SUBMIT NEW ASSIGNMENTS!</p>
              </div>
              <div className="col-md-3 d-flex justify-content-center mt-lg-0">
                <a
                  className="btn btn-primary btn-lg p-6"
                  href="/assignments-add"
                >
                  <span
                    className="align-middle"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    SUBMIT!<i className="fa fa-arrow-right ms-3"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Script src="/js/jquery.min.js" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/lib/wow/wow.min.js" />
      <Script src="/lib/easing/easing.min.js" />
      <Script src="/lib/waypoints/waypoints.min.js" />
      <Script src="/lib/owlcarousel/owl.carousel.min.js" />
      <Script src="/js/main.js" />
    </>
  );
}
