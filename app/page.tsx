import ImageGallery from "@/components/ImageGallery";
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";

export default async function Home() {

  return (
    <div className="">
      <Navbar />
      <AboutMe/>
      <ImageGallery/> {/* Ensure that the ImageGallery component returns a valid JSX element */}
    </div>
  );
}
