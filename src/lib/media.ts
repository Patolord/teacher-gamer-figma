/**
 * Centralized ImageKit media URLs
 *
 * All media assets are hosted on ImageKit CDN for optimal delivery.
 *
 * ImageKit transformation params:
 * - tr=w-{width}    : Resize width
 * - tr=h-{height}   : Resize height
 * - tr=q-{quality}  : Quality (1-100)
 * - tr=f-webp       : Force WebP format
 * - tr=f-auto       : Auto format based on browser
 */

const IMAGEKIT_BASE_URL = "https://ik.imagekit.io/TeacherGamer/Site/";
const IMAGEKIT_GALLERY_URL = "https://ik.imagekit.io/TeacherGamer/Gallery/";

// =============================================================================
// MEDIA ASSETS
// =============================================================================
export const MEDIA = {
  // ===========================================================================
  // VIDEO
  // ===========================================================================
  video: {
    landing: `${IMAGEKIT_BASE_URL}/landing-video.mp4`,
  },

  // ===========================================================================
  // POSTER / FRAME
  // ===========================================================================
  poster: {
    landingFrame: `${IMAGEKIT_BASE_URL}/poster-frame.webp`,
  },

  // ===========================================================================
  // SECTION BACKGROUNDS (bgs/)
  // ===========================================================================
  backgrounds: {
    hero: `${IMAGEKIT_BASE_URL}/hero-section-bg.webp`,
    calendar: `${IMAGEKIT_BASE_URL}/calendar-section-bg.webp`,
    contact: `${IMAGEKIT_BASE_URL}/contact-section-bg.webp`,
    courses: `${IMAGEKIT_BASE_URL}/courses-section-bg.webp`,
    research: `${IMAGEKIT_BASE_URL}/research-section-bg.webp`,
    substack: `${IMAGEKIT_BASE_URL}/substack-section-bg.webp`,
    testimonials: `${IMAGEKIT_BASE_URL}/testimonial-section-bg.webp`,
  },

  // ===========================================================================
  // ASSETS (assets/)
  // ===========================================================================
  assets: {
    bookCover: `${IMAGEKIT_BASE_URL}/book-cover.webp`,
    magicCardBg: `${IMAGEKIT_BASE_URL}/magic-card-bg.webp`,
    magicCardBgAlt: `${IMAGEKIT_BASE_URL}/magic-card-bg-alt.webp`,
  },

  // ===========================================================================
  // TESTIMONIALS (testimonials/)
  // ===========================================================================
  testimonials: {
    testimonial1: `${IMAGEKIT_BASE_URL}/testimonial-1.jpg`,
  },

  // ===========================================================================
  // ROOT IMAGES
  // ===========================================================================
  hero: {
    image: `${IMAGEKIT_BASE_URL}/hero-img`,
  },

  // ===========================================================================
  // ABOUT PAGE
  // ===========================================================================
  about: {
    zachProfile: `${IMAGEKIT_BASE_URL}zach-profile.jpg`,
    classroomRpg: `${IMAGEKIT_BASE_URL}classroom-rpg.jpg`,
  },

  // ===========================================================================
  // GALLERY IMAGES
  // Add your gallery image filenames here
  // ===========================================================================
  gallery: {
    baseUrl: IMAGEKIT_GALLERY_URL,
    // List your gallery image filenames (add more as needed)
    images: [
      "IMG_6022b.JPG",
      // Add more image filenames here:
      // "IMG_6023.JPG",
      // "IMG_6024.JPG",
    ] as const,
  },
} as const;

// Helper to get full gallery image URL
export function getGalleryImageUrl(filename: string): string {
  return `${IMAGEKIT_GALLERY_URL}${filename}`;
}

// =============================================================================
// HELPER: Add ImageKit transformations
// =============================================================================
export function withTransform(
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "jpg" | "png" | "auto";
  },
): string {
  const transforms: string[] = [];

  if (options.width) transforms.push(`w-${options.width}`);
  if (options.height) transforms.push(`h-${options.height}`);
  if (options.quality) transforms.push(`q-${options.quality}`);
  if (options.format) transforms.push(`f-${options.format}`);

  if (transforms.length === 0) return url;

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}tr=${transforms.join(",")}`;
}

// =============================================================================
// TYPE EXPORTS
// =============================================================================
export type MediaKeys = keyof typeof MEDIA;
