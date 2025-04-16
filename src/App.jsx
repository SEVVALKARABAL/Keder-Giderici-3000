import "./styles.css";

import Header from "./components/Header";
import ActivityCard from "./components/ActivityCard";

import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  /* Challenge

    Kullanıcının etkinlikleri Bored API için key olarak kaydedildi. Göreviniz, etkinlik verilerini almak için key'leri aşağıdaki gibi kullanmaktır: 
    
        1. Sayfa yüklendiğinde, aşağıdaki savedActivityKeys array'inde bulunan 20 key'in her biri için Bored API'den aktivite verileri alınmalıdır. Bu veri getirme işlemlerinin nasıl yapılacağını öğrenmek için API_Documentation.md dosyasını okuyun. 
        
        2. Veriler, activities state array'e 20 JavaScript nesnesi (her key/response/activity için bir tane) olarak kaydedilmelidir.  
           
        3. Şu anda activitiesData state olarak ayarlanmış olan placeHolderData'dan kurtulun. Bu veri sadece size gerçek verinin içeriği, biçimi ve faydası hakkında bir fikir vermek içindir. Sonunda, üzerinde API'den gerçek veriler bulunan 20 etkinlik kartı elde etmelisiniz. 
        
    Not: Tek yapmanız gereken activitiesData state'ini yukarıda açıklanan şekilde ayarlamaktır. Bunu doğru bir şekilde yaparsanız, aşağıdaki 33. satırda yer alan activityCardElements değişkeni etkinlik kartlarını sizin için oluşturacaktır. 
*/

  const savedActivityKeys = [
    "abe",
    "mayor",
    "ho",
    "dr",
    "moe",
    "milhouse",
    "lisa",
    "frank",
    "rainier",
    "mr",
    "duffman",
    "ralph",
  ];

  const [activitiesData, setActivitiesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await Promise.all(
          savedActivityKeys.map(async (key) => {
            const resp = await axios.get(
              `https://thesimpsonsquoteapi.glitch.me/quotes?character=${key}`
            );
            return resp.data[0];
          })
        );

        setActivitiesData(allData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(activitiesData);

  const activityCardElements = activitiesData.map((activityData) => {
    return (
      <ActivityCard key={activityData.character} activityData={activityData} />
    );
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="container">{activityCardElements}</div>
    </div>
  );
}