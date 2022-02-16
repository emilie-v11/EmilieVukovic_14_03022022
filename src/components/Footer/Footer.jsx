import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-center pb-4">
            <small className="fst-italic fw-lighter text-light">
                © {new Date().getFullYear()} Wealth Health Company, Inc. All rights reserved.
            </small>
        </footer>
    );
};

export default Footer;
