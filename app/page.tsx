import ImageGallery from "@/components/ImageGallery";
import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";

export default async function Home() {
  let images: { src: string, width: number, height: number }[] = [];
  const imagesFolderPath = path.join(process.cwd(), 'public', 'images');

  async function listImagesInFolder(folderPath: string): Promise<{ src: string, width: number, height: number }[]>{
    "use server";
    let allImages: { src: string, width: number, height: number }[] = [];

    try {
      const files = fs.readdirSync(folderPath);
      for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileStat = fs.statSync(filePath);
        if (fileStat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
          const dimensions = sizeOf(filePath);
          if (dimensions.width && dimensions.height) {
            allImages.push({
              src: `/images/${file}`,
              width: dimensions.width,
              height: dimensions.height
            });
          }
        }
      }
    } catch (error) {
      console.error("Error reading images folder:", error);
    }

    // Sort images based on aspect ratio (height / width)
    allImages.sort((a, b) => (b.height / b.width) - (a.height / a.width));

    return allImages;
  }
  images = await listImagesInFolder(imagesFolderPath);

  return (
    <div className="">
      <Navbar />
      <AboutMe/>
      <ImageGallery images={images} /> {/* Ensure that the ImageGallery component returns a valid JSX element */}
    </div>
  );
}
