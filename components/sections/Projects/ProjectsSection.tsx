"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const PROJECTS = Array(12).fill(null);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 2xl:px-20 py-8 md:py-12 xl:px-56 space-y-4">
      {/* Header */}
      <div className="space-y-2 max-w-7xl mx-auto">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          Projects
        </h1>
        <p className="text-base sm:text-lg text-white/40">
          Using my technical abilities to solve problems.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto">
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...Array(Math.ceil(PROJECTS.length / 6))].map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-full lg:basis-11/12 xl:basis-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {PROJECTS.slice(index * 6, (index + 1) * 6).map((_, i) => (
                    <ProjectComponent key={`${index}-${i}`} />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-4 md:-left-6 h-8 w-8 md:h-10 md:w-10 border-white/20 hover:border-white/40" />
            <CarouselNext className="-right-4 md:-right-6 h-8 w-8 md:h-10 md:w-10 border-white/20 hover:border-white/40" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

const ProjectComponent = () => {
  return (
    <div className="bg-card flex flex-col rounded-lg border border-white/20 hover:border-white/30 transition-all h-full">
      {/* Video placeholder */}
      <div className="aspect-video w-full rounded-t-lg bg-gradient-to-br from-white/10 to-white/5" />

      {/* Info */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2">
        <h1 className="text-white font-semibold text-sm sm:text-base truncate">
          System Prompt Generator
        </h1>
        <p className="text-white/40 text-xs sm:text-sm line-clamp-3">
          A modern web application that helps users create effective AI system
          prompts with intelligent assistance, featuring real-time generation
          and preview capabilities.
        </p>
      </div>
    </div>
  );
};

export default Projects;
