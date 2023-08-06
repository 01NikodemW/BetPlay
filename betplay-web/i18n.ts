import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {},
  },
  pl: {
    translation: {
      Email: "Email",
      Password: "Hasło",
      Live: "Na żywo",
      "My club": "Mój klub",
      Bets: "Zakłady",
      "BetPlay | All rights reserved": "BetPlay | Wszelkie prawa zastrzeżone",
      "Contact us": "Skontaktuj się z nami",
      "The most popular": "Najpopularniejsze",
      All: "Wszystkie",
      "View details": "Zobacz szczegóły",
      Albania: "Albania",
      Algeria: "Algieria",
      Andorra: "Andora",
      Angola: "Angola",
      Argentina: "Argentyna",
      Armenia: "Armenia",
      Aruba: "Aruba",
      Australia: "Australia",
      Austria: "Austria",
      Azerbaidjan: "Azerbejdżan",
      Bahrain: "Bahrajn",
      Bangladesh: "Bangladesz",
      Barbados: "Barbados",
      Belarus: "Białoruś",
      Belgium: "Belgia",
      Belize: "Belize",
      Benin: "Benin",
      Bermuda: "Bermudy",
      Bhutan: "Bhutan",
      Bolivia: "Boliwia",
      Bosnia: "Bośnia i Hercegowina",
      Botswana: "Botswana",
      Brazil: "Brazylia",
      Bulgaria: "Bułgaria",
      "Burkina-Faso": "Burkina Faso",
      Burundi: "Burundi",
      Cambodia: "Kambodża",
      Cameroon: "Kamerun",
      Canada: "Kanada",
      Chile: "Chile",
      China: "Chiny",
      "Chinese-Taipei": "Tajpej Chiński",
      Colombia: "Kolumbia",
      Congo: "Kongo",
      "Congo-DR": "Demokratyczna Rep. Konga",
      "Costa-Rica": "Kostaryka",
      Crimea: "Krym",
      Croatia: "Chorwacja",
      Cuba: "Kuba",
      Curacao: "Curaçao",
      Cyprus: "Cypr",
      "Czech-Republic": "Czechy",
      Denmark: "Dania",
      "Dominican-Republic": "Republika Dominikańska",
      Ecuador: "Ekwador",
      Egypt: "Egipt",
      "El-Salvador": "Salwador",
      England: "Anglia",
      Estonia: "Estonia",
      Eswatini: "Eswatini",
      Ethiopia: "Etiopia",
      "Faroe-Islands": "Wyspy Owcze",
      Fiji: "Fidżi",
      Finland: "Finlandia",
      France: "Francja",
      Gabon: "Gabon",
      Gambia: "Gambia",
      Georgia: "Gruzja",
      Germany: "Niemcy",
      Ghana: "Ghana",
      Gibraltar: "Gibraltar",
      Greece: "Grecja",
      Guadeloupe: "Gwadelupa",
      Guatemala: "Gwatemala",
      Guinea: "Gwinea",
      Haiti: "Haiti",
      Honduras: "Honduras",
      "Hong-Kong": "Hongkong",
      Hungary: "Węgry",
      Iceland: "Islandia",
      India: "Indie",
      Indonesia: "Indonezja",
      Iran: "Iran",
      Iraq: "Irak",
      Ireland: "Irlandia",
      Israel: "Izrael",
      Italy: "Włochy",
      "Ivory-Coast": "Wybrzeże Kości Słoniowej",
      Jamaica: "Jamajka",
      Japan: "Japonia",
      Jordan: "Jordania",
      Kazakhstan: "Kazachstan",
      Kenya: "Kenia",
      Kosovo: "Kosowo",
      Kuwait: "Kuwejt",
      Kyrgyzstan: "Kirgistan",
      Laos: "Laos",
      Latvia: "Łotwa",
      Lebanon: "Liban",
      Lesotho: "Lesotho",
      Liberia: "Liberia",
      Libya: "Libia",
      Liechtenstein: "Liechtenstein",
      Lithuania: "Litwa",
      Luxembourg: "Luksemburg",
      Macao: "Makau",
      Macedonia: "Macedonia",
      Malawi: "Malawi",
      Malaysia: "Malezja",
      Maldives: "Malediwy",
      Mali: "Mali",
      Malta: "Malta",
      Mauritania: "Mauretania",
      Mauritius: "Mauritius",
      Mexico: "Meksyk",
      Moldova: "Mołdawia",
      Mongolia: "Mongolia",
      Montenegro: "Czarnogóra",
      Morocco: "Maroko",
      Myanmar: "Mjanma (Birma)",
      Namibia: "Namibia",
      Nepal: "Nepal",
      Netherlands: "Holandia",
      "New-Zealand": "Nowa Zelandia",
      Nicaragua: "Nikaragua",
      Nigeria: "Nigeria",
      "Northern-Ireland": "Irlandia Północna",
      Norway: "Norwegia",
      Oman: "Oman",
      Pakistan: "Pakistan",
      Palestine: "Palestyna",
      Panama: "Panama",
      Paraguay: "Paragwaj",
      Peru: "Peru",
      Philippines: "Filipiny",
      Poland: "Polska",
      Portugal: "Portugalia",
      Qatar: "Katar",
      Romania: "Rumunia",
      Russia: "Rosja",
      Rwanda: "Rwanda",
      "San-Marino": "San Marino",
      "Saudi-Arabia": "Arabia Saudyjska",
      Scotland: "Szkocja",
      Senegal: "Senegal",
      Serbia: "Serbia",
      Singapore: "Singapur",
      Slovakia: "Słowacja",
      Slovenia: "Słowenia",
      Somalia: "Somalia",
      "South-Africa": "Republika Południowej Afryki",
      "South-Korea": "Korea Południowa",
      Spain: "Hiszpania",
      Sudan: "Sudan",
      Surinam: "Surinam",
      Sweden: "Szwecja",
      Switzerland: "Szwajcaria",
      Syria: "Syria",
      Tajikistan: "Tadżykistan",
      Tanzania: "Tanzania",
      Thailand: "Tajlandia",
      "Trinidad-And-Tobago": "Trynidad i Tobago",
      Tunisia: "Tunezja",
      Turkey: "Turcja",
      Turkmenistan: "Turkmenistan",
      Uganda: "Uganda",
      Ukraine: "Ukraina",
      "United-Arab-Emirates": "ZEA",
      Uruguay: "Urugwaj",
      USA: "Stany Zjednoczone",
      Uzbekistan: "Uzbekistan",
      Venezuela: "Wenezuela",
      Vietnam: "Wietnam",
      Wales: "Walia",
      Zambia: "Zambia",
      Zimbabwe: "Zimbabwe",
      "1H": "P1",
      "2H": "P2",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

i18n.language = "pl";

export default i18n;