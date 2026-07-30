import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GALLERY_PHOTOS } from '../data/galleryData';
import { GalleryPhoto } from '../types';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn, Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'store', label: 'Store Exterior & Front' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'counter', label: 'Consultation Counter' },
    { id: 'devices', label: 'Health Devices' },
    { id: 'products', label: 'Baby & Care Products' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) =>
    selectedCategory === 'all' ? true : photo.category === selectedCategory
  );

  const currentPhoto: GalleryPhoto | null =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <div id="gallery-page" className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <SEOHead
        title="Store Photo Gallery | Sanjay Medical Store Gewalbigha, Gaya"
        description="Explore interior and exterior photos of Sanjay Medical Store in Gewalbigha, Gaya. View our medicine shelves, diagnostic device displays, and clean pharmacy environment."
      />

      <Breadcrumbs />

      {/* Header Banner */}
      <section id="gallery-hero" className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
            <ImageIcon className="w-4 h-4" />
            <span>Clean & Organized Pharmacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Sanjay Medical Store Gallery
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Take a visual tour of our clean store premises in Gewalbigha, organized medicine inventories, temperature-controlled storage facilities, and health monitoring equipment.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-6 scrollbar-none">
            <span className="text-xs font-bold text-slate-400 flex items-center shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid of Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {filteredPhotos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 rounded-full bg-emerald-600 text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-900">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup Modal */}
      {lightboxIndex !== null && currentPhoto && (
        <div
          id="lightbox-modal-overlay"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800">
              <div>
                <h3 className="font-bold text-lg">{currentPhoto.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{currentPhoto.description}</p>
              </div>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
