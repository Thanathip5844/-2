import Image from "next/image";
import Menu from "@/components/menu";
import Banner from "@/components/banner";
import Content from "@/components/content";
import Footer from "@/components/footer";
import MyCard from "@/components/mycard";

export default function Home() {
  return (
    <main className="flex-col items-center ">
      <Banner/>
      <Menu/>
      <Content/>
      <div className="flex gap-0">
      <MyCard cardHeader="เพลงที่ชอบ" imgUrl="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/61/a3/9b/61a39b82-19a7-883d-5c93-84d4d239cc13/00606949012427.rgb.jpg/1200x1200bb.jpg"/>
      <MyCard cardHeader="หนังที่ชอบ" imgUrl="https://m.media-amazon.com/images/S/pv-target-images/ee36e1b2c68685dc3d3c5815800e8628ba09223fb196acb83baaa885dea3c39c.jpg"/>
      <MyCard cardHeader="ดาราที่ชอบ" imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqrGIF8Y2IS0VdPvqCJqvIwAoQmWJ-j2fmg&s"/>
      <MyCard cardHeader="สัตว์เลี้ยงที่ชอบ" imgUrl="https://cdn.prod.website-files.com/61c1522cd03553569e619b01/649bea677ec0e0d990ac1b90_%E0%B8%A3%E0%B8%A7%E0%B8%A1%203%20%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%E0%B8%99%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%84%E0%B8%A3%20%E0%B9%86%20%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81-01.jpg"/>

      </div>
      <Footer/>
    </main>
  );
}
