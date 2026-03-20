import { useState } from "react";
import Container from "./Container";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Image {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}

export default function PhotoGallery({ images }: { images: Array<Image> }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  // Convert Cloudinary images into react-grid-gallery format
  const galleryImages = images.map((img, idx) => ({
    src: img.secure_url,
    thumbnail: img.secure_url,
    thumbnailWidth: img.width > 200 ? 200 : img.width, // scale thumbnail width
    thumbnailHeight: Math.floor((img.height / img.width) * (img.width > 200 ? 200 : img.width)),
    alt: img.public_id,
    customIndex: idx, // keep original index for lightbox
  }));

  return (
    <section>
      <Container>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Pictures of Caddo Lake
        </h2>

        {/* Render grid of thumbnails */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {galleryImages.map((img) => (
            <img
              key={img.customIndex}
              src={img.thumbnail}
              alt={img.alt}
              style={{
                width: img.thumbnailWidth,
                height: img.thumbnailHeight,
                // border: "1px solid green",
                objectFit: "cover",
                cursor: "pointer",
              }}
              onClick={() => setLightboxIndex(img.customIndex)}
            />
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <Lightbox
            open={lightboxIndex !== null}
            index={lightboxIndex}
            close={() => setLightboxIndex(null)}
            slides={images.map((img) => ({ src: img.secure_url }))}
          />
        )}
      </div>
      </Container>

    </section>
  );
}