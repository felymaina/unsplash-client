import React from 'react';

function DocumentationPage() {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Unsplash API Documentation</h1>

            {/* Authentication Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
                <p>To use the Unsplash API, you need to authenticate your request by including your access key in the header:</p>
                <code className="block bg-gray-100 p-4 my-4 rounded">
                    Authorization: Client-ID YOUR_ACCESS_KEY
                </code>
                <p>Replace <strong>YOUR_ACCESS_KEY</strong> with your actual Unsplash Access Key.</p>
            </section>

            {/* Making a Request Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Making a Request</h2>
                <p>Requests can be made to different endpoints of the Unsplash API. Here's an example of fetching a list of photos:</p>
                <code className="block bg-gray-100 p-4 my-4 rounded">
                    GET /photos
                </code>
            </section>

            {/* Photos Endpoint Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Using the Photos Endpoint</h2>
                <p>The photos endpoint allows you to retrieve a single photo, a list of photos, or a random photo. Here are some examples:</p>
                <div className="bg-gray-100 p-4 my-4 rounded">
                    <p className="mb-2"><strong>List of Photos:</strong></p>
                    <code>
                        GET /photos
                    </code>
                    <p className="my-2"><strong>Single Photo:</strong></p>
                    <code>
                        GET /photos/:id
                    </code>
                    <p className="my-2"><strong>Random Photo:</strong></p>
                    <code>
                        GET /photos/random
                    </code>
                </div>
            </section>

            {/* Further Reading */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Further Reading</h2>
                <p>For more detailed documentation, visit the <a href="https://unsplash.com/documentation" className="text-blue-500">official Unsplash API documentation</a>.</p>
            </section>
        </div>
    );
}

export default DocumentationPage;
