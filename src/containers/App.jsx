import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App = () => (
    <div className="App">
        <Header />
        <Search />
        <Section />
        <Section />
        <Footer />
    </div>
);

export default App;
