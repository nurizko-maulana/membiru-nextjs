import Image from "next/image";
export default function Home() {
  return (
    <>
      <h1 className="text-center">home</h1>
      <div className="w-24"><Image src="/images/membiru1.jpg" layout='fill'></Image></div>
      {/* <Image src="/images/membiru2.jpg" layout='fill'></Image>
      <Image src="/images/membiru3.jpg" layout='fill'></Image>
      <Image src="/images/membiru4.jpg" layout='fill'></Image>
      <Image src="/images/membiru5.jpg" layout='fill'></Image>
      <Image src="/images/membiru6.jpg" layout='fill'></Image>
      <Image src="/images/membiru7.jpg" layout='fill'></Image>
      <Image src="/images/membiru8.jpg" layout='fill'></Image> */}
    </>
  );
}
