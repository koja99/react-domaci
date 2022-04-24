
import { color } from '@mui/system';
import { Route, Routes } from 'react-router';
import './App.css';
import KnjigaItemList from './components/knjiga/KnjigaItemList';
import KorpaList from './components/korpa/KorpaList';
import NavBar from './components/navbar/NavBar';

const BOOKS = [
  {
    id:1,
    naslov:"Zivotinjska farma",
    opis:"Povod za nastanak Životinjske farme nalazio se u Orvelovoj analizi posledica Ruske revolucije koja je prerasla u totalitarni režim i diktaturu stvorenu oko kulta ličnosti, kao i u njegovom iskustvu stečenom tokom Španskog građanskog rata.",
    slikaUrl:'https://www.laguna.rs/_img/korice/5208/zivotinjska_farma-dzordz_orvel_v.jpg',
    brojPonavljanja:0
  },
  {
    id:2,
    naslov:"1984",
    opis:"1984 - Roman opisuje ekstremno totalitarno društvo i pojedinca u životu nadziranom 24 časa svakodnevno. Tematika je neposredno povezana sa staljinističkim režimom i kultom ličnosti.",
    slikaUrl:'https://i0.wp.com/knjigeobradovic.com/wp-content/uploads/2020/07/1984.-DZORDZ-ORVEL.jpg?fit=309%2C522&ssl=1',
    brojPonavljanja:0
  },
  {
    id:3,
    naslov:"Sveštenikova kći",
    opis: "SVEŠTENIKOVA KĆI je drugi Orvelov roman, koji je prvi put objavljen 1935. godine. Doroti je kći lokalnog paroha u engleskom provincijskom gradiću, Knajp Hilu. Vreme provodi u pomaganju oko crkvenih i kućnih poslova. ",
    slikaUrl:'http://www.otvorenaknjiga.rs/157/svestenikova-kci.jpg',
    brojPonavljanja:0
  }
]


function App() {
  return (
    <div className="App">
     <NavBar className="navBar"/>
     <p>Džordž Orvel -PONUDA</p>
     <Routes>
       <Route path='/' element={<KnjigaItemList knjige={BOOKS}/>}/>
       <Route path='/korpa' element={<KorpaList/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
