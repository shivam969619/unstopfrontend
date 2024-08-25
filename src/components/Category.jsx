import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";
const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];
const Category = () => {
  return (
    <>
      <div>
        <Carousel className="md:w-full md:max-w-xl md:mx-auto md:my-20 w-[50%] ml-[150px]">
          <CarouselContent className="">
            {category.map((cate, index) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 w-[200px]"
                key={index}
              >
                <Button variant="outline">{cate}</Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Category;
