/* global kakao */
import { get } from 'fast-levenshtein';
import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Markerdata from '../static/kakao_markerdata';
import '../styles/pages/Map.css';

const { kakao } = window;

const Map = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    let container = document.getElementById('map');

    let options = {
      center: new window.kakao.maps.LatLng(37.512186, 126.996333),
      level: 7,
    };
    let map = new window.kakao.maps.Map(container, options);
    Markerdata.forEach(el => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.store_lat, el.store_lng),
      });

      const customOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(el.store_lat, el.store_lng),
        content: `<div class ="label"><span class="left"></span><span class="center">${el.store_name}</span><span class="right"></span></div>`,
      });
      kakao.maps.event.addListener(marker, 'click', function () {
        customOverlay.setMap(map);
      });
      // kakao.maps.event.addListener(map, 'click', function () {
      //   infowindow.close();
      // });
    });
  });
  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <div className="kakaomap-pagecontainer">
        <div className="kakaomap-searchbox">
          <input className="kakaomap-search-input" placeholder="가게를 검색하세요" />
          <i className="fas fa-search"></i>
        </div>
        <div className="kakaomap-container" id="map" />
      </div>
      <Footer />
    </>
  );
};

export default Map;
