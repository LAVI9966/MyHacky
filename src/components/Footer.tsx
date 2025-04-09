'use client';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 px-2 border-t text-center">
            <p className="text-base text-gray-600">
                Copyright © 2025 <span className="font-medium">Hacky</span> | Powered by{' '}
                {/* <a
                    href="https://wpastra.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                > */}
                Astra WordPress Theme
                {/* </a> */}
            </p>
        </footer>
    );
};

export default Footer;
