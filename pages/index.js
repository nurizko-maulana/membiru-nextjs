import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="MEMBIRU STUDIO : Photo studio based on Tanjung Balai Karimun"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Membiru Studio : Photography and PhotoBook</title>
        {/* <!-- OG --> */}
        <meta
          property="og:title"
          content="MEMBIRU STUDIO : We're a team of creative phtografers and and developers who love to make content, build, and provide memorable moment for you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://membiru.studio" />
        <meta property="og:img" content="./image/og-image.jpg" />
        <meta
          property="og:image:alt"
          content="We're a team of creative photografers and and developers who love to make content, build, and provide memorable moment for you."
        />
        <meta property="og:image:width" content="2300" />
        <meta property="og:image:height" content="1650" />
        {/* <!-- OG Twitter --> */}
        <meta
          name="twitter:title"
          content="MEMBIRU STUDIO : Photo studio based on Tanjung Balai Karimun "
        />
        <meta
          name="twitter:description"
          content=" We're a team of creative phtografers and and developers who love to make content, build, and provide memorable moment for you."
        />
        <meta
          name="twitter:image"
          content=" http://membiru.studio/images/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <!-- Style --> */}
        <link rel="stylesheet" href="tailwind.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        {/* <!-- Favicon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="../public/site.webmanifest" />
      </Head>

      <nav class="bg-gray-800 w-screen">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-center h-16">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-yellow-200">MEMBIRU STUDIO</h1>
            </div>
          </div>
        </div>
      </nav>

      <div class="flex justify-center my-10 text-2xl">LIST HARGA</div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5 ">
        <div class="flex relative justify-center p-5 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl rounded-xl w-52  -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={750} src="/images/sesi-keluarga.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Sesi</div>
          <div class="text-yellow-900 font-bold text-4xl">Keluarga</div>
          <div class="mt-4 text-right text-gray-500">
            <p>Sesi Foto 45 menit</p>
            <p>20 file edit</p>
            <p>Dapat semua file foto</p>
            <p>*2 Backgorund</p>
            <p>Bisa ganti baju</p>
          </div>
          <div class="mt-4 text-left">
            <p class="text-xs text-yellow-900 ">GOLD - maximal 5 orang</p>
            <h1 class="flex font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">350</span>
              <span class="self-end">.000</span>
            </h1>
            <p class="text-xs mt-3 text-yellow-900">
              PLATINUM - maximal 8 orang
            </p>
            <h1 class="flex  font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">550</span>
              <span class="self-end">.000</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5">
        <div class="flex relative justify-center p-5 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl w-52 rounded-xl -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={740} class="rounded-xl " src="/images/sesi-single.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Sesi Single</div>
          <div class="text-yellow-900 font-bold text-4xl">Couple</div>
          <div class="mt-4 text-right text-gray-500">
            <p>Sesi Foto 45 menit</p>
            <p>20 file edit</p>
            <p>Dapat semua file foto</p>
            <p>*2 Backgorund</p>
          </div>
          <div class="my-4  text-left">
            <h1 class="flex mr-12 font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">350</span>
              <span class="self-end">.000</span>
            </h1>
          </div>
          <div class="flex flex-row text-gray-500">
            <p class="">Sesi Garden</p>
          </div>
          <div class="flex flec-row text-gray-500">
            <p>Sesi Studio</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5">
        <div class="flex relative justify-center p-5 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl w-52 rounded-xl -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={740} class="rounded-xl " src="/images/sesi-group.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Sesi Fun</div>
          <div class="text-yellow-900 font-bold text-4xl">Group</div>
          <div class="mt-4 text-right text-gray-500">
            <p>Sesi Foto 45 menit</p>
            <p>20 file edit</p>
            <p>*2 Backgorund</p>
            <p>Maksimal 4 orang</p>
          </div>
          <div class="my-4  text-left">
            <h1 class="flex mr-12 font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">350</span>
              <span class="self-end">.000</span>
            </h1>
          </div>
          <div class="flex flex-row text-gray-500">
            <p class="">Sesi Garden</p>
          </div>
          <div class="flex flec-row text-gray-500">
            <p>Sesi Studio</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5">
        <div class="flex relative justify-center p-5 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl w-52 rounded-xl -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={740} class="rounded-xl " src="/images/sesi-fun.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Sesi</div>
          <div class="text-yellow-900 font-bold text-4xl">Foto Fun</div>
          <div class="mt-4 text-right text-gray-500">
            <p>Sesi Foto 30 menit</p>
            <p>20 file edit</p>
            <p>Maksimal 4 orang</p>
          </div>
          <div class="my-4  text-left">
            <h1 class="flex mr-12 font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">350</span>
              <span class="self-end">.000</span>
            </h1>
          </div>
          <div class="flex flex-row text-gray-500">
            <p class="">Sesi Garden</p>
          </div>
          <div class="flex flec-row text-gray-500">
            <p>Sesi Studio</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5">
        <div class="flex relative justify-center p-5 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl w-52 rounded-xl -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={740} class="rounded-xl " src="/images/sesi-sitter.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Sitter</div>
          <div class="text-yellow-900 font-bold text-4xl">Session</div>
          <div class="mt-4 text-right text-gray-500">
            <p>Tema :</p>
            <p>Bubble Bath -</p>
            <p class="mb-5"> Cake Smash -</p>

            <p>Durasi max 60 menit</p>
            <p>Semua file terbaik</p>
            <p>20 file edit</p>
            <p>Termasuk foto bersama </p>
            <p>Ayah & Bunda</p>
          </div>
          <div class="my-4  text-left">
            <h1 class="flex mr-12 font-bold text-yellow-900">
              <span>Rp</span>
              <span class="text-4xl">550</span>
              <span class="self-end">.000</span>
            </h1>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-10 transform scale-75 translate-x-5">
        <div class="flex relative justify-center p-5 pb-24 items-end flex-col bg-gray-50 rounded-3xl w-96">
          <div class="absolute filter drop-shadow-2xl w-52 rounded-xl -left-12 -top-4">
            <Image class="rounded-xl" width={500} height={750} class="rounded-xl " src="/images/cetak-foto.png"></Image>
            <div class="flex justify-center mt-2">
              <div class="bg-gray-800 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 mr-3 rounded-full w-3 h-3"></div>
              <div class="bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
          </div>
          <div class="text-yellow-900 font-bold text-4xl">Paket</div>
          <div class="text-yellow-900 font-bold text-4xl">Cetak Foto</div>
          <div class="mt-4 text-right text-gray-500">
            <table class="table-auto text-center ">
              <thead class="px-4 py-8 border-b-2">
                <tr>
                  <th class="px-1 py-2">Ukuran</th>
                  <th class="px-1 py-2">Inch</th>
                  <th class="px-1 py-2">Qtt</th>
                  <th class="px-1 py-2">harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>4R</td>
                  <td>4x6</td>
                  <td>5lbr</td>
                  <td class="text-yellow-900">25K</td>
                </tr>
                <tr>
                  <td>5R</td>
                  <td>5x7</td>
                  <td>2lbr</td>
                  <td class="text-yellow-900">20K</td>
                </tr>
                <tr>
                  <td>6R</td>
                  <td>6x8</td>
                  <td>2lbr</td>
                  <td class="text-yellow-900">30K</td>
                </tr>
                <tr>
                  <td>8R+</td>
                  <td>8x12</td>
                  <td>2lbr</td>
                  <td class="text-yellow-900">50K</td>
                </tr>
                <tr>
                  <td>10R</td>
                  <td>10x12</td>
                  <td>1lbr</td>
                  <td class="text-yellow-900">35K</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
