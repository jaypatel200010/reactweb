import React from "react";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
          <a class="navbar-brand" href="zudio.html">
            <img src="logo-v1.png" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="Zstories.html">
                  <span class="site-nav__label">ABOUT US</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="haszudio.html">
                  <span class="site-nav__label">CATAGORIES</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="zudionearyou.html">
                  <span class="site-nav__label">SOCIAL OUTREACH</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Zworld.html">
                  <span class="site-nav__label">PARTNER WITH US</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Zworld.html">
                  <span class="site-nav__label">CARRERS</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Zworld.html">
                  <span class="site-nav__label">FEEDBACK</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Zworld.html">
                  <span class="site-nav__label">
                    <i class="fa-brands fa-square-facebook"></i>
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Zworld.html">
                  <span class="site-nav__label">
                    <i class="fa-brands fa-linkedin"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="marque">
        <marquee className="marquetxt" behavior="" direction="">
          Hello welcome to my site.
        </marquee>
      </div>
      <div className="bgimg">
        <div class="container-fluid">
          <img className="bg" src="7033.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
