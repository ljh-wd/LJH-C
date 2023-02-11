import Nav from "../layouts/nav";
import Footer from "../layouts/footer";
import CategoryCard from "../Components/category-card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

const Categories = () => {
  let categories: {
    title: string;
    imgUrl: string;
    href: string;
    id: string;
  }[] = [
    {
      title: "Tops",
      imgUrl:
        "https://media.istockphoto.com/id/1048695348/photo/cheerful-young-man-pointing-at-himself.jpg?s=612x612&w=0&k=20&c=36UH2zZDheSZM4FykeDBVYCpi9MtibK6HYptC2B0aNs=",
      href: "/tops",
      id: crypto.randomUUID(),
    },
    {
      title: "Coats",
      imgUrl:
        "https://media.istockphoto.com/id/874876866/photo/cool-calm-and-corporate.jpg?s=612x612&w=0&k=20&c=Yn_eFwhcH4Ri6p9lDcNYuH2da4qtWsCNOGEPxLGuB04=",
      href: "/coats",
      id: crypto.randomUUID(),
    },
    {
      title: "Jumpers",
      imgUrl:
        "https://media.istockphoto.com/id/1350728166/photo/mature-man-at-home-for-christmas.jpg?s=612x612&w=0&k=20&c=AFENsl0ZzEwN73QYUEeX3rw3ZDJMWZNcFChR-oPC1Gc=",
      href: "/jumpers",
      id: crypto.randomUUID(),
    },
    {
      title: "Legwear",
      imgUrl:
        "https://media.istockphoto.com/id/1386060583/photo/girl-in-black-leather-pants-in-a-chic-jacket-and-classic-shoes-with-a-stylish-brown-handbag.jpg?s=612x612&w=0&k=20&c=_xJludreY3ZMtdwPvuJMSB2h_vWzUY-jmpeAJnTGl8g=",
      href: "/legwear",
      id: crypto.randomUUID(),
    },
    {
      title: "Tailoring",
      imgUrl:
        "https://media.istockphoto.com/id/1425640665/photo/fashion-style-and-confidence-with-a-handsome-man-model-in-a-green-suit-in-studio-on-a-gray.jpg?s=612x612&w=0&k=20&c=9y5nJq0jazMPdxVVpRrOhz2E8ovNFYVvqkVACFT4v7I=",
      href: "/tailoring",
      id: crypto.randomUUID(),
    },
    {
      title: "Gymwear",
      imgUrl:
        "https://media.istockphoto.com/id/542197916/photo/running-on-treadmill.jpg?s=612x612&w=0&k=20&c=CYywmb71uOepSHWa534hG9230AzawSa4i3sA89o4qCQ=",
      href: "/gymwear",
      id: crypto.randomUUID(),
    },
    {
      title: "Footwear",
      imgUrl:
        "https://media.istockphoto.com/id/1413670923/photo/fashion-girl-in-a-fancy-dress-tights-and-white-sneakers-womens-street-style-and-beauty.jpg?s=612x612&w=0&k=20&c=qJCFp8_JHZCIPyEi2ERjjDGoTa4m_qgvGRqEiZEmcnM=",
      href: "/footwear",
      id: crypto.randomUUID(),
    },
  ];

  const [element, setElement] = useState<number>(1);

  return (
    <div className="w-full h-screen flex flex-col">
      <Nav />
      <div className="h-full flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="w-[1000px] flex justify-center items-center bg-slate-100 rounded shadow">
          <Carousel
            width={900}
            centerMode={true}
            centerSlidePercentage={45}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            emulateTouch={true}
            selectedItem={element}
          >
            {categories.map((category) => (
              <CategoryCard
                imgUrl={category.imgUrl}
                title={category.title}
                key={category.id}
                href={category.href}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
