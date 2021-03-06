import React from 'react';
import './homescreen.css';
import Nav from './nav';
import Banner from './Banner';
import requests  from './request';
import Row from './Row'; 

export default function HomeScreen() {
    return(
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />


        </div>
    );
}