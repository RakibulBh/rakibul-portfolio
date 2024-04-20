import Project from "./Project"
import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  return (
    <Carousel>
        <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4"><Project/></CarouselItem>
            <CarouselItem className="pl-4"><Project/></CarouselItem>
            <CarouselItem className="pl-4"><Project/></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>
  )
}
