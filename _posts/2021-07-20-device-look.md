---
layout: post
title: Device Look
date: 2021-07-20 10:47 +0800
category: [demo, guide]
tags: [responsive design, devices]
permalink: /device-look/
image: 
   path: /assets/images/responsive-1622825_730.png
excerpt: 
css:
   custom: >-
      .device-wrapper {
        margin: 24px auto;
        --scale: .45;
        --ratio: calc(1 - var(--scale));
        --offset: -55%;
      }

      .device-wrapper h3 {
        font-family: cursive;
      }

      .smartphone, .tablet, .laptop {
        transform-origin: center;
        transform: scale(var(--scale)) translateY(var(--offset));
      }

      @media only screen and (min-width:768px) and (max-width:1199px) {
        .device-wrapper { --scale: .3; --offset: -105%;}
      }

      @media only screen and (min-width:576px) and (max-width:767px) {
        .device-wrapper { --scale: .25; --offset: -140%;}
      }

      @media only screen and (min-width:360px) and (max-width:575px) {
        .device-wrapper { --scale: .21; --offset: -175%;}
      }
      
      
      /* Reference: How To Create a Device Look with CSS https://www.w3schools.com/howto/howto_css_devices.asp */
      .smartphone {
        position: relative;
        width: 392px;
        height: 760px;
        margin: 2em calc(-392px * var(--ratio) / 2) calc(-760px * var(--ratio));
        border: 16px black solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        border-radius: 36px;
      }

      .smartphone:before, .tablet:before {
        content: '';
        display: block;
        width: 60px;
        height: 5px;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 10px;
      }

      .smartphone:after, .tablet:after {
        content: '';
        display: block;
        width: 35px;
        height: 35px;
        position: absolute;
        left: 50%;
        bottom: -65px;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 50%;
      }

      .smartphone .content {
        width: 360px;
        height: 640px;
        background: white;
      }

      .tablet {
        position: relative;
        width: 800px;
        height: 1144px;
        margin: 0 calc(-800px * var(--ratio) / 2) calc(-1144px * var(--ratio));
        border: 16px black solid;
        border-top-width: 60px;
        border-bottom-width: 60px;
        border-radius: 36px;
      }

      .tablet .content {
        width: 768px;
        height: 1024px;
        background: white;
        margin: -1px;
      }

      .laptop {
        position: relative;
        width: 1414px;
        height: 908px;
        margin: 0 calc(-1414px * var(--ratio) / 2) calc(-908px * var(--ratio) + 1em);
        border-radius: 6px;
        border-style: solid;
        border-color: black;
        border-width: 24px 24px 80px;
        background-color: black;
      }

      .laptop:after {
        content: '';
        display: block;
        position: absolute;
        width: 1600px;
        height: 60px;
        margin: 80px 0 0 -110px;
        background: black;
        border-radius: 6px;
      }

      .laptop:before {
        content: '';
        display: block;
        position: absolute;
        width: 250px;
        height: 30px;
        bottom: -110px;
        left: 50%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        background: #f1f1f1;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        z-index: 1;
      }

      .laptop .content {
        width: 1366px;
        height: 800px;
        overflow: hidden;
        border: none;
      }

featured: true
---

<div style="display:flex;flex-wrap:wrap;">

  <div class="device-wrapper">
    <div class="smartphone">
      <div class="content">
        <amp-iframe
          width="360"
          height="640"
          layout="responsive"
          sandbox="allow-scripts"
          frameborder="0"
          src="/amp-affiliately-jekyll-theme/scroll/"
        >
        </amp-iframe>
      </div>
    </div>
    <h3 class="text-center">Phone</h3>
  </div>

  <div class="device-wrapper">
    <div class="tablet">
      <div class="content">
        <amp-iframe
          width="768"
          height="1024"
          layout="responsive"
          sandbox="allow-scripts"
          frameborder="0"
          src="/amp-affiliately-jekyll-theme/scroll/"
        >
        </amp-iframe>
      </div>
    </div>
    <h3 class="text-center">Tablet</h3>
  </div>

  <div class="device-wrapper">
    <div class="laptop">
      <div class="content">
        <amp-iframe
          width="1366"
          height="800"
          layout="responsive"
          sandbox="allow-scripts"
          frameborder="0"
          src="/amp-affiliately-jekyll-theme/scroll/"
        >
        </amp-iframe>
      </div>
    </div>
    <h3 class="text-center">Laptop</h3>
  </div>

</div>