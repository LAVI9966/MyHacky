import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container max-w-4xl mx-auto p-6">
            {/* <h1 className="text-2xl font-bold mb-6">Hacky Security Course</h1> */}

            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeGnRaj1yVju88VxvdjBo8owrPVCuiOnvhvvhMEiYjSzmju6Q/formResponse?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                className="w-full"
            >
                Loading…
            </iframe>
        </div>
    );
};

export default Contact;