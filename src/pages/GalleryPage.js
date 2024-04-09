import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../services/UnsplashService';

function GalleryPage() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true); // Start with loading state as true
    const [error, setError] = useState('');

    useEffect(() => {
        // Async function to load photos from Unsplash
        const loadPhotos = async () => {
            setLoading(true);
            setError('');
            try {
                const data = await fetchPhotos(); // Fetch photos using the service
                setPhotos(data); // Set fetched photos in state
            } catch (error) {
                console.error("Error fetching photos:", error);
                setError('Failed to fetch photos. Please try again later.'); // Setting error message in state
            } finally {
                setLoading(false); //  loading is set to false once operation is complete
            }
        };

        loadPhotos(); // Calling the loadPhotos function
    }, []);

    // Render loading state UI
    if (loading) {
        return <div className="text-center p-10">Loading photos...</div>;
    }

    // Render error state UI
    if (error) {
        return <div className="text-center text-red-500 p-10">{error}</div>;
    }

    // Render the photo gallery
    return (
        <div className="p-10">
            <h1 className="text-4xl font-bold">Photo Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {photos.map(photo => (
                    <div key={photo.id} className="max-w-sm">
                        <img src={photo.urls.small} alt={photo.alt_description} className="w-full h-auto shadow-lg rounded" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;
