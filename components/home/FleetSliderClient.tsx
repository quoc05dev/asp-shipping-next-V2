"use client";

import React, { useState } from 'react';

const fleetSlides = [
    {
        name: "ASP LUNA",
        image: "/wp-content/uploads/asp_images/ships/asp-luna-head-on.webp",
        type: "LR2 TANKER",
        dwt: "114,800 DWT",
        built: "BUILT 2026",
        trade: "ASP / WORLD TRADES"
    },
    {
        name: "ASP TITAN",
        image: "/wp-content/uploads/asp_images/ships/asp-titan-sunset.webp",
        type: "AFRAMAX TANKER",
        dwt: "115,000 DWT",
        built: "BUILT 2025",
        trade: "ASP / WORLD TRADES"
    }
];

export default function FleetSliderClient({ vessels }: { vessels: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % fleetSlides.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + fleetSlides.length) % fleetSlides.length);
    };

    return (
        <div style={{ width: "100%" }}>
            <div className="custom-fleet-slider" style={{ position: "relative", width: "100%", aspectRatio: "4/5", overflow: "hidden", borderRadius: "20px" }}>
                {/* Slides Container */}
                <div 
                    className="custom-slider-container" 
                    style={{ 
                        display: "flex", 
                        transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)", 
                        height: "100%", 
                        width: "100%",
                        transform: `translateX(-${currentIndex * 100}%)`
                    }}
                >
                    {fleetSlides.map((slide, index) => (
                        <div key={index} className="custom-slider-slide" style={{ minWidth: "100%", position: "relative", height: "100%" }}>
                            <img 
                                src={slide.image} 
                                alt={slide.name} 
                                style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: "0", left: "0" }} 
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", height: "60%", background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)", pointerEvents: "none" }}></div>
                            <div style={{ position: "absolute", top: "30px", left: "40px", color: "#fff", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: "bold", opacity: 0.8, textTransform: "uppercase" }}>
                                {slide.trade}
                            </div>
                            <div style={{ position: "absolute", bottom: "40px", left: "40px", color: "#fff" }}>
                                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: "bold", marginBottom: "15px", color: "white", lineHeight: "1" }}>
                                    {slide.name}
                                </h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", fontSize: "0.85rem", fontWeight: "bold", letterSpacing: "1px", opacity: 0.9, textTransform: "uppercase" }}>
                                    <span>{slide.type}</span>
                                    <span>{slide.dwt}</span>
                                    <span>{slide.built}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Controls */}
                <div style={{ position: "absolute", bottom: "40px", right: "40px", display: "flex", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "4px", overflow: "hidden", zIndex: 10 }}>
                    <button 
                        id="slider-prev-btn" 
                        onClick={handlePrevious}
                        aria-label="Previous vessel"
                        style={{ background: "rgba(255,255,255,0.1)", border: "right: 1px solid rgba(255,255,255,0.4)", borderTop: "none", borderBottom: "none", borderLeft: "none", color: "white", width: "54px", height: "50px", cursor: "pointer", transition: "background 0.3s", backdropFilter: "blur(5px)", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        ←
                    </button>
                    <button 
                        id="slider-next-btn" 
                        onClick={handleNext}
                        aria-label="Next vessel"
                        style={{ background: "rgba(255,255,255,0.1)", border: "none", color: "white", width: "54px", height: "50px", cursor: "pointer", transition: "background 0.3s", backdropFilter: "blur(5px)", fontSize: "1.2rem", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}
