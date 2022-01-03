import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';

const MainLayout = () => {

    let arr = ['react', 'js', 'JQuery']
    let arr1 = ['react1', 'js', 'JQuery']
    let arr2 = ['react2', 'js', 'JQuery']
    let arr3 = ['react3', 'js', 'JQuery']
    return (
        <div className='allPage'>
            <Navbar />
            <Section arr = {arr} arr1 = {arr1} arr2 = {arr2} arr3 = {arr3}/>
            <Footer />
            
        </div>
    );
};

export default MainLayout;