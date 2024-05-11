"use client";
import Image from "next/image";
import Masonry from 'react-masonry-css';
import SectionName from "./SectionName";
import { useEffect, useState } from "react";

export default function ImageGallery() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        const fetchImages = async () => {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImages(data);
            console.log(data);
        }
        fetchImages().then(() => { console.log(images) }).catch((err) => console.error(err));
    },[]);
    return (
        <div className="container px-5 sm:px-48 sm:mx-auto">
            <SectionName name="Image Gallery" side="right" />

            <Masonry
                breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image: { src: string, width: number, height: number }, index) => (
                    <div key={index} className="my-masonry-grid_column">
                        <Image
                            src={image.src}
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
