import { useState } from "react";
import { GALLERY_DATA } from "../data";
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Info,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Lightbox States
  const [selectedItemIdx, setSelectedItemIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const categories = ["All", "Store Front", "Shelves", "Products", "Equipment", "Veterinary", "Customers"];

  // Filter gallery items
  const filteredGallery = GALLERY_DATA.filter(item => {
    return activeFilter === "All" || item.category === activeFilter;
  });

  const handleOpenLightbox = (itemId: string) => {
    // Find index in the CURRENT filtered array
    const idx = filteredGallery.findIndex(item => item.id === itemId);
    if (idx !== -1) {
      setSelectedItemIdx(idx);
      setZoomScale(1);
    }
  };

  const handleCloseLightbox = () => {
    setSelectedItemIdx(null);
    setZoomScale(1);
  };

  const handleNextItem = () => {
    if (selectedItemIdx === null) return;
    setSelectedItemIdx((selectedItemIdx + 1) % filteredGallery.length);
    setZoomScale(1);
  };

  const handlePrevItem = () => {
    if (selectedItemIdx === null) return;
    setSelectedItemIdx(
      selectedItemIdx === 0 ? filteredGallery.length - 1 : selectedItemIdx - 1
    );
    setZoomScale(1);
  };

  const handleZoomIn = () => {
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = () => {
    setZoomScale(prev => Math.max(prev - 0.25, 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans text-gray-800 dark:text-gray-100">
      
      {/* 1. Header Hero */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Visual Tour</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Our Pharmacy Gallery
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Take a look at our clinical storage refrigerators, organized retail shelves, stock range, and veterinary products in Tikari Gaya.
        </p>
      </div>

      {/* 2. Masonry Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-gray-100 dark:border-slate-800 pb-5">
        {categories.map(cat => (
          <button
            key={cat}
            id={`gallery-filter-${cat.replace(/\s+/g, "-")}`}
            onClick={() => {
              setActiveFilter(cat);
              setSelectedItemIdx(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer focus:outline-none ${
              activeFilter === cat
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10"
                : "bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-400 hover:bg-gray-250 dark:hover:bg-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Masonry Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              id={`gallery-item-wrap-${item.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              onClick={() => handleOpenLightbox(item.id)}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-150 dark:border-slate-850 shadow-sm cursor-pointer group hover:shadow-md transition-shadow relative"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Maximize2 className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Tag */}
                <span className="absolute top-3 left-3 px-2 py-0.5 bg-emerald-600 text-white text-[9px] font-bold rounded uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="text-xs font-bold text-gray-900 dark:text-white line-clamp-1">{item.title}</h3>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-normal line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 4. Lightbox Modal Popup */}
      <AnimatePresence>
        {selectedItemIdx !== null && (
          <div 
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-55 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar Controls */}
            <div className="flex items-center justify-between text-white relative z-10 w-full max-w-7xl mx-auto">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {filteredGallery[selectedItemIdx].category}
                </span>
                <span className="text-xs text-slate-500">|</span>
                <span className="text-xs text-slate-300">
                  {selectedItemIdx + 1} of {filteredGallery.length}
                </span>
              </div>

              {/* Zoom & Close actions */}
              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                <button
                  id="lightbox-zoom-in"
                  onClick={handleZoomIn}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  id="lightbox-zoom-out"
                  onClick={handleZoomOut}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  id="lightbox-close-btn"
                  onClick={handleCloseLightbox}
                  className="p-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white font-bold transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle: Left button, main zoomed image, right button */}
            <div className="flex-1 flex items-center justify-between max-w-7xl mx-auto w-full relative">
              
              {/* Prev Button */}
              <button
                id="lightbox-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevItem();
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10 hidden sm:block"
                title="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image container with Zoom scale support */}
              <div className="flex-1 flex items-center justify-center max-h-[60vh] sm:max-h-[70vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={filteredGallery[selectedItemIdx].id}
                  src={filteredGallery[selectedItemIdx].image}
                  alt={filteredGallery[selectedItemIdx].title}
                  style={{ scale: zoomScale }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: zoomScale }}
                  transition={{ duration: 0.2 }}
                  className="max-h-[55vh] sm:max-h-[65vh] max-w-[85vw] sm:max-w-[65vw] object-contain rounded-xl shadow-2xl border border-white/10 select-none pointer-events-none transition-transform duration-100"
                />
              </div>

              {/* Next Button */}
              <button
                id="lightbox-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextItem();
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer z-10 hidden sm:block"
                title="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Metadata Panel */}
            <div 
              className="bg-slate-900/90 border border-slate-800/80 p-4 rounded-2xl w-full max-w-3xl mx-auto text-center space-y-1.5 relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="text-sm font-bold text-white tracking-wide">
                {filteredGallery[selectedItemIdx].title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xl mx-auto">
                {filteredGallery[selectedItemIdx].description}
              </p>
              
              {/* Mobile swipe controls indicator */}
              <div className="flex sm:hidden justify-center gap-6 pt-3 text-slate-400 border-t border-slate-800/60 mt-2">
                <button 
                  id="mobile-prev-btn"
                  onClick={handlePrevItem} 
                  className="text-xs hover:text-white"
                >
                  &larr; Prev
                </button>
                <button 
                  id="mobile-next-btn"
                  onClick={handleNextItem} 
                  className="text-xs hover:text-white"
                >
                  Next &rarr;
                </button>
              </div>
            </div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
