"use client";
import Image from "next/image";
import Masonry from 'react-masonry-css';
import SectionName from "./SectionName";

export default function ImageGallery({ images }: { images: { src: string, width: number, height: number }[] }) {
    console.log(images);
    return (
        <div className="container px-5 sm:px-48 sm:mx-auto">
            <SectionName name="Image Gallery" side="right" />

            <Masonry
                breakpointCols={{ default: 3, 700: 2, 500: 1 }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images.map((image, index) => (
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
