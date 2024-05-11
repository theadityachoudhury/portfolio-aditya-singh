"use client";
import Image from "next/image";
import Masonry from 'react-masonry-css';
import SectionName from "./SectionName";
import { useEffect, useState } from "react";

export default function ImageGallery() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const fetchImages = async () => {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImages(data);
            console.log(data);
        }
        fetchImages().then(() => { console.log(images) }).catch((err) => console.error(err));
        setLoading(false);
    }, []);
    return (
        <div className="container px-5 sm:px-48 sm:mx-auto">
            <SectionName name="Image Gallery" side="right" />

            <Masonry
                breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"

            >
                {loading && <p className="text-center">Loading...</p>}
                {images.length === 0 && !loading && <p className="text-center">No Images Found</p>}
                {images.map((image: { src: string, width: number, height: number }, index) => (
                    <div key={index} className="my-masonry-grid_column">
                        <Image
                            src={`https://drive.google.com/uc?id=${image.src}`}
                            alt={`Image ${index}`}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}
