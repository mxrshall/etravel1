import Homepage from "./Pages/Homepage";
import Location from "./Pages/Location";
import Catalog from "./Pages/Catalog";
import Landmark from "./Pages/Landmark";
import Gallery from "./Pages/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import header1 from "../public/images/header/header1.jpg"
import header2 from "../public/images/header/header2.jpg"
import header3 from "../public/images/header/header3.jpg"
import header4 from "../public/images/header/header4.jpg"

import korea from "../public/images/flags/korea.png";
import svajciarsko from "../public/images/flags/switzerland.png";
import kanada from "../public/images/flags/canada.png";
import afrika from "../public/images/flags/africa.png";

//Južná Kórea
import Seoul from "../public/images/photos/Seoul/Seoul.webp";
import Seoul1 from "../public/images/photos/Seoul/Seoul1.webp"
import Seoul2 from "../public/images/photos/Seoul/Seoul2.webp"
import Seoul3 from "../public/images/photos/Seoul/Seoul3.webp"
import SeoulMap from "../public/images/map/SeoulMap.png"
import BukchonHanokVillage from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage.webp"
import BukchonHanokVillage2 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage2.webp"
import BukchonHanokVillage3 from "../public/images/photos/BukchonHanokVillage/BukchonHanokVillage3.webp"
import BukchonHanokVillageMap from "../public/images/map/SeoulMap.png"
import Gyeongju from "../public/images/photos/Gyeongju/Gyeongju.webp"
import Gyeongju1 from "../public/images/photos/Gyeongju/Gyeongju1.webp"
import Gyeongju2 from "../public/images/photos/Gyeongju/Gyeongju2.webp"
import GyeongjuMap from "../public/images/map/GyeongjuMap.png"
//Švajčiarsko
import ChateaudeChillon from "../public/images/photos/ChateaudeChillon/ChateaudeChillon.webp"
import ChateaudeChillon1 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon1.webp"
import ChateaudeChillon2 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon2.webp"
import ChateaudeChillon3 from "../public/images/photos/ChateaudeChillon/ChateaudeChillon3.webp"
import ChateaudeChillonMap from "../public/images/map/ChateaudeChillonMap.png"
import TheMatterhorn from "../public/images/photos/TheMatterhorn/TheMatterhorn.webp"
import TheMatterhorn1 from "../public/images/photos/TheMatterhorn/TheMatterhorn1.webp"
import TheMatterhorn2 from "../public/images/photos/TheMatterhorn/TheMatterhorn2.webp"
import TheMatterhorn3 from "../public/images/photos/TheMatterhorn/TheMatterhorn3.webp"
import TheMatterhornMap from "../public/images/map/TheMatterhornMap.png"
import RhineFalls from "../public/images/photos/RhineFalls/RhineFalls.webp"
import RhineFalls1 from "../public/images/photos/RhineFalls/RhineFalls1.webp"
import RhineFalls2 from "../public/images/photos/RhineFalls/RhineFalls2.webp"
import RhineFallsMap from "../public/images/map/RhineFallsMap.png"
//Kanada
import TorngatMountains from "../public/images/photos/TorngatMountains/TorngatMountains.webp"
import TorngatMountains1 from "../public/images/photos/TorngatMountains/TorngatMountains1.webp"
import TorngatMountains2 from "../public/images/photos/TorngatMountains/TorngatMountains2.webp"
import TorngatMountainsMap from "../public/images/map/TorngatMountainsMap.png"
import QuebecCity from "../public/images/photos/QuebecCity/QuebecCity.webp"
import QuebecCity1 from "../public/images/photos/QuebecCity/QuebecCity1.webp"
import QuebecCity2 from "../public/images/photos/QuebecCity/QuebecCity2.webp"
import QuebecCity3 from "../public/images/photos/QuebecCity/QuebecCity3.webp"
import QuebecCityMap from "../public/images/map/QuebecCityMap.png"
import JoffreLakesPark from "../public/images/photos/JoffreLakesPark/JoffreLakesPark.webp"
import JoffreLakesPark1 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark1.webp"
import JoffreLakesPark2 from "../public/images/photos/JoffreLakesPark/JoffreLakesPark2.webp"
import JoffreLakesParkMap from "../public/images/map/JoffreLakesParkMap.png"
//Južná Afrika
import BlydeRiverCanyon from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon.webp"
import BlydeRiverCanyon1 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon1.webp"
import BlydeRiverCanyon2 from "../public/images/photos/BlydeRiverCanyon/BlydeRiverCanyon2.webp"
import BlydeRiverCanyonMap from "../public/images/map/BlydeRiverCanyonMap.png"
import KrugerNationalPark from "../public/images/photos/KrugerNationalPark/KrugerNationalPark.webp"
import KrugerNationalPark1 from "../public/images/photos/KrugerNationalPark/KrugerNationalPark1.webp"
import KrugerNationalPark2 from "../public/images/photos/KrugerNationalPark/KrugerNationalPark2.webp"
import TableMountain from "../public/images/photos/TableMountain/TableMountain.webp"
import TableMountain1 from "../public/images/photos/TableMountain/TableMountain1.webp"
import TableMountain2 from "../public/images/photos/TableMountain/TableMountain2.webp"
import TableMountainMap from "../public/images/map/TableMountainMap.png"

function App() {
  const list = [
    {
        id: 0,
        title: "South Korea",
        description: "South Korea is a country where modern technology meets rich tradition. The capital, Seoul, is filled with innovative architecture, bustling markets, and historical landmarks, while cities like Busan offer stunning beaches and breathtaking scenery. South Korea is known for its unique culture, delicious cuisine, and beautiful temples nestled in the mountains. An ideal destination for those who want to experience the perfect blend of tradition and modernity. Visitors can also immerse themselves in the vibrant world of K-pop, Korean dramas, and cutting-edge fashion, making South Korea a truly dynamic and unforgettable destination.",
        short_description: "South Korea is a country where modern technology meets rich tradition. The capital, Seoul, is filled with innovative architecture, bustling markets, and historical landmarks, while cities like Busan offer stunning beaches and breathtaking scenery.",
        background: header1,
        flag: korea,
        tag: "korea",
    },
    {
        id: 1,
        title: "Switzerland",
        description: "Switzerland is a picturesque country in the heart of Europe, known for its stunning Alps, pristine lakes, and charming villages. Cities like Zurich, Geneva, and Bern blend modern elegance with rich history and an exceptional quality of life. Switzerland is a paradise for skiers, hikers, and nature lovers who appreciate its peaceful environment and breathtaking views. The country's world-famous chocolate, cheese, and efficient public transport system add to its charm, making it a dream destination for travelers.",
        short_description: "Switzerland is a picturesque country in the heart of Europe, known for its stunning Alps, pristine lakes, and charming villages. Cities like Zurich, Geneva, and Bern blend modern elegance with rich history and an exceptional quality of life.",
        background: header2,
        flag: svajciarsko,
        tag: "svajciarsko",
    },
    {
        id: 2,
        title: "Canada",
        description: "Canada is a vast country with stunning nature and diverse culture. It offers breathtaking landscapes, from majestic Rocky Mountains to picturesque lakes and endless forests. Canada is the ideal destination for nature lovers, winter sports enthusiasts, hikers, and those seeking cultural experiences. Its vibrant cities, like Toronto, Vancouver, and Montreal, offer a unique blend of modernity, multiculturalism, and rich history, making Canada a truly captivating place to explore.",
        short_description: "Canada is a vast country with stunning nature and diverse culture. It offers breathtaking landscapes, from majestic Rocky Mountains to picturesque lakes and endless forests. Canada is the ideal destination for nature lovers, winter sports enthusiasts, hikers, and those seeking cultural experiences.",
        background: header3,
        flag: kanada,
        tag: "kanada",
    },
    {
        id: 3,
        title: "South Africa",
        description: "South Africa is a country at the southern tip of the African continent, known for its diverse landscapes, rich culture, and history. It is home to iconic places like Cape Town, Table Mountain, and Kruger National Park, where you can experience an African safari. South Africa has three main capitals—Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial). The country's main industries are mining, agriculture, and tourism. South Africa also boasts a unique flora and fauna. With its warm hospitality, vibrant cities, and delicious cuisine, South Africa offers an unforgettable experience for every traveler.",
        short_description: "South Africa is a country at the southern tip of the African continent, known for its diverse landscapes, rich culture, and history. It is home to iconic places like Cape Town, Table Mountain, and Kruger National Park, where you can experience an African safari.",
        background: header4,
        flag: afrika,
        tag: "afrika",
    },
  ]

  const slider = [
    {
      title: "Seoul",
      background: Seoul,
      description: "Seoul is a vibrant city that blends rich history with modern urban life. As the capital of South Korea, it is a breathtaking metropolis offering countless experiences for visitors from around the world. Seoul is home to a rich Korean culture and arts scene. Enjoy traditional Korean tea in one of the many teahouses or try authentic Korean dishes like kimchi, bulgogi, or bibimbap in local restaurants. Additionally, you can visit stunning theaters and galleries that showcase the country’s rich cultural heritage.",
      photo: [Seoul1, Seoul2, Seoul3],
      map: SeoulMap,
      tag: ["all", "korea", "mesto"],
    },
    {
      title: "Gyeongju",
      background: Gyeongju,
      description: "Gyeongju is a beautiful historic city in South Korea, a treasure trove of cultural and historical gems, offering ancient landmarks, stunning natural scenery, and unique Korean culture, including Toham Cliff with panoramic views and Namsan National Park with historical sites.",
      photo: [Gyeongju, Gyeongju1, Gyeongju2],
      map: GyeongjuMap,
      tag: ["all", "korea", "pamiatka", "mesto", "priroda"],
    },
    {
      title: "Bukchon Hanok Village",
      background: BukchonHanokVillage,
      description: "Bukchon Hanok Village is a fascinating historic district in the heart of Seoul, South Korea, offering a unique glimpse into traditional Korean architecture and lifestyle. It is a place rich in culture and history, where walking through its narrow streets feels like stepping back in time. Visitors can see locals preserving traditional Korean customs and crafts, and some houses even offer the opportunity to explore their interiors and learn more about traditional Korean life.",
      photo: [BukchonHanokVillage, BukchonHanokVillage2, BukchonHanokVillage3],
      map: BukchonHanokVillageMap,
      tag: ["all", "korea", "pamiatka"], 
    },
    {
      title: "Rhine Falls",
      background: RhineFalls,
      description: "Rheinfall, also known as Rhine Falls, is the largest waterfall in Europe, located on the Rhine River near Schaffhausen, Switzerland. It is one of the country's most popular natural attractions, offering breathtaking scenery and unforgettable experiences. Rheinfall is a stunning sight, with powerful waters crashing down into the gorge with a thunderous roar, surrounded by magnificent nature. Its impressive size and force make it an unforgettable landmark for all visitors.",
      photo: [RhineFalls, RhineFalls1, RhineFalls2],
      map: RhineFallsMap,
      tag: ["all", "svajciarsko", "priroda"],
    },
    {
      title: "Chateau de Chillon",
      background: ChateaudeChillon,
      description: "Château de Chillon is a stunning castle located on the shores of Lake Geneva near Montreux, Switzerland. It is a fascinating historical landmark that offers a unique glimpse into the past and breathtaking views of the Alps. Château de Chillon provides magnificent panoramas of Lake Geneva and the surrounding mountains, allowing visitors to enjoy spectacular views from its windows and towers, making the visit truly unforgettable.",
      photo: [ChateaudeChillon1, ChateaudeChillon2, ChateaudeChillon3],
      map: ChateaudeChillonMap,
      tag: ["all", "svajciarsko", "pamiatka", "priroda"],
    },
    {
      title: "The Matterhorn",
      background: TheMatterhorn,
      description: "Matterhorn is a majestic peak located in the Alps on the border between Switzerland and Italy, and it is one of the most famous and iconic mountains in the world. It is a fascinating destination for tourists and visitors, offering breathtaking natural scenery, hiking, and unforgettable experiences. Beyond its natural beauty, Matterhorn is also part of the rich cultural heritage of the Alpine region. Visitors can explore traditional mountain villages, local festivals, and cultural events that reflect the life and traditions of the Alpine people.",
      photo: [TheMatterhorn1, TheMatterhorn2, TheMatterhorn3],
      map: TheMatterhornMap,
      tag: ["all", "svajciarsko", "priroda", "studena"],
    },
    {
      title: "Joffre Lakes Park",
      background: JoffreLakesPark,
      description: "Joffre Lakes Provincial Park is a stunning natural park in the Coast Mountains of British Columbia, Canada. It is a fascinating destination for tourists and visitors, offering breathtaking scenery, hiking, fishing, and opportunities for relaxation in nature. The park’s main attraction is a trio of lakes—Lower, Middle, and Upper Joffre Lake—famous for their vibrant turquoise color, created by fine glacial silt. Visitors can enjoy spectacular views of the lakes and surrounding mountain landscapes.",
      photo: [JoffreLakesPark, JoffreLakesPark1, JoffreLakesPark2],
      map: JoffreLakesParkMap,
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Torngat Mountains",
      background: TorngatMountains,
      description: "Torngat Mountains is a national park in northeastern Canada, located on the Labrador Peninsula in Newfoundland and Labrador. This remote and wild park is home to stunning natural scenery, diverse wildlife, and the cultural heritage of Indigenous peoples. For tourists and visitors, Torngat Mountains offer an immersive wilderness experience with unforgettable natural and cultural encounters. The park features breathtaking landscapes, including towering cliffs, massive glaciers, lakes, waterfalls, and wild rivers. This isolated park is home to some of Canada’s most remarkable natural wonders, giving visitors the chance to explore a truly pristine wilderness.",
      photo: [TorngatMountains, TorngatMountains1, TorngatMountains2],
      map: TorngatMountainsMap,
      tag: ["all", "kanada", "priroda", "studena"],
    },
    {
      title: "Quebec City",
      background: QuebecCity, 
      description: "Québec City is one of the most distinctive and beautiful historic cities in North America. Located on the banks of the St. Lawrence River in the Canadian province of Québec, it is a fascinating destination with a rich cultural heritage, stunning architecture, and a unique atmosphere. In addition to its historical significance, Québec City offers breathtaking natural beauty. Visitors can stroll through scenic parks like the Plains of Abraham or take a trip to the nearby Île d'Orléans, where they will find picturesque countryside and charming vineyards.",
      photo: [QuebecCity1, QuebecCity2, QuebecCity3],
      map: QuebecCityMap,
      tag: ["all", "kanada", "mesto"],
    },
    {
      title: "Blyde River Canyon",
      background: BlydeRiverCanyon,
      description: "Blyde River Canyon is one of the most beautiful natural formations in South Africa and one of the largest canyons in the world. It is a fascinating destination for tourists and visitors, offering breathtaking scenery, natural beauty, and a variety of experiences. Blyde River Canyon is perfect for outdoor enthusiasts, with hiking trails that provide opportunities for wildlife and flora observation. Visitors can also enjoy fishing, rafting on the Blyde River, and mountain biking adventures.",
      photo: [BlydeRiverCanyon, BlydeRiverCanyon1, BlydeRiverCanyon2],
      map: BlydeRiverCanyonMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Kruger National Park",
      background: KrugerNationalPark,
      description: "Kruger National Park is the largest and most famous national park in South Africa, located in the northeast of the country, covering over 19,000 km². It is home to the Big Five (lion, elephant, rhino, buffalo, and leopard) as well as hundreds of other animal and bird species. The park is an ideal safari destination with a well-developed infrastructure, including roads, accommodations, and guided tours. Kruger is considered one of the best locations for wildlife viewing in Africa.",
      photo: [KrugerNationalPark, KrugerNationalPark1, KrugerNationalPark2],
      map: BlydeRiverCanyonMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
    {
      title: "Table Mountain",
      background: TableMountain,
      description: "Table Mountain is an iconic flat-topped mountain overlooking Cape Town, South Africa. As one of the New Seven Wonders of Nature, it offers panoramic views of the city, ocean, and surrounding mountains. The summit is accessible by cable car or hiking trails. The mountain is part of a national park and is known for its rich biodiversity, including many endemic plant species. Table Mountain is one of the most visited landmarks in South Africa.",
      photo: [TableMountain, TableMountain1, TableMountain2],
      map: TableMountainMap,
      tag: ["all", "afrika", "priroda", "tropicka"],
    },
  ];

  return (
      <Routes>
        <Route path="/etravel1/" element={<Homepage slider={slider} list={list} />} />
        <Route path="/pamiatka" element={<Landmark />} />
        <Route path="/lokacia" element={<Location />} />
        <Route path="/etravel1/katalog" element={<Catalog slider={slider}/>} />
        <Route path="/etravel1/galeria" element={<Gallery slider={slider}/>} />
      </Routes>
  );
}

export default App;
