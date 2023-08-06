import { Fixture } from "@/types/fixture";
import { FixtureDetails } from "@/types/fixture-details/fixture-details";

export const countries = [
  {
    name: "Albania",
    code: "AL",
    flag: "https://media-1.api-sports.io/flags/al.svg",
  },
  {
    name: "Algeria",
    code: "DZ",
    flag: "https://media-1.api-sports.io/flags/dz.svg",
  },
  {
    name: "Andorra",
    code: "AD",
    flag: "https://media-3.api-sports.io/flags/ad.svg",
  },
  {
    name: "Angola",
    code: "AO",
    flag: "https://media-3.api-sports.io/flags/ao.svg",
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "https://media-1.api-sports.io/flags/ar.svg",
  },
  {
    name: "Armenia",
    code: "AM",
    flag: "https://media-3.api-sports.io/flags/am.svg",
  },
  {
    name: "Aruba",
    code: "AW",
    flag: "https://media-3.api-sports.io/flags/aw.svg",
  },
  {
    name: "Australia",
    code: "AU",
    flag: "https://media-1.api-sports.io/flags/au.svg",
  },
  {
    name: "Austria",
    code: "AT",
    flag: "https://media-1.api-sports.io/flags/at.svg",
  },
  {
    name: "Azerbaidjan",
    code: "AZ",
    flag: "https://media-2.api-sports.io/flags/az.svg",
  },
  {
    name: "Bahrain",
    code: "BH",
    flag: "https://media-3.api-sports.io/flags/bh.svg",
  },
  {
    name: "Bangladesh",
    code: "BD",
    flag: "https://media-3.api-sports.io/flags/bd.svg",
  },
  {
    name: "Barbados",
    code: "BB",
    flag: "https://media-2.api-sports.io/flags/bb.svg",
  },
  {
    name: "Belarus",
    code: "BY",
    flag: "https://media-1.api-sports.io/flags/by.svg",
  },
  {
    name: "Belgium",
    code: "BE",
    flag: "https://media-3.api-sports.io/flags/be.svg",
  },
  {
    name: "Belize",
    code: "BZ",
    flag: "https://media-1.api-sports.io/flags/bz.svg",
  },
  {
    name: "Benin",
    code: "BJ",
    flag: "https://media-3.api-sports.io/flags/bj.svg",
  },
  {
    name: "Bermuda",
    code: "BM",
    flag: "https://media-2.api-sports.io/flags/bm.svg",
  },
  {
    name: "Bhutan",
    code: "BT",
    flag: "https://media-2.api-sports.io/flags/bt.svg",
  },
  {
    name: "Bolivia",
    code: "BO",
    flag: "https://media-2.api-sports.io/flags/bo.svg",
  },
  {
    name: "Bosnia",
    code: "BA",
    flag: "https://media-2.api-sports.io/flags/ba.svg",
  },
  {
    name: "Botswana",
    code: "BW",
    flag: "https://media-3.api-sports.io/flags/bw.svg",
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "https://media-3.api-sports.io/flags/br.svg",
  },
  {
    name: "Bulgaria",
    code: "BG",
    flag: "https://media-2.api-sports.io/flags/bg.svg",
  },
  {
    name: "Burkina-Faso",
    code: "BF",
    flag: "https://media-1.api-sports.io/flags/bf.svg",
  },
  {
    name: "Burundi",
    code: "BI",
    flag: "https://media-2.api-sports.io/flags/bi.svg",
  },
  {
    name: "Cambodia",
    code: "KH",
    flag: "https://media-3.api-sports.io/flags/kh.svg",
  },
  {
    name: "Cameroon",
    code: "CM",
    flag: "https://media-2.api-sports.io/flags/cm.svg",
  },
  {
    name: "Canada",
    code: "CA",
    flag: "https://media-2.api-sports.io/flags/ca.svg",
  },
  {
    name: "Chile",
    code: "CL",
    flag: "https://media-1.api-sports.io/flags/cl.svg",
  },
  {
    name: "China",
    code: "CN",
    flag: "https://media-2.api-sports.io/flags/cn.svg",
  },
  {
    name: "Chinese-Taipei",
    code: "TW",
    flag: "https://media-1.api-sports.io/flags/tw.svg",
  },
  {
    name: "Colombia",
    code: "CO",
    flag: "https://media-3.api-sports.io/flags/co.svg",
  },
  {
    name: "Congo",
    code: "CD",
    flag: "https://media-1.api-sports.io/flags/cd.svg",
  },
  {
    name: "Congo-DR",
    code: "CG",
    flag: "https://media-2.api-sports.io/flags/cg.svg",
  },
  {
    name: "Costa-Rica",
    code: "CR",
    flag: "https://media-2.api-sports.io/flags/cr.svg",
  },
  {
    name: "Crimea",
    code: "UA",
    flag: "https://media-2.api-sports.io/flags/ua.svg",
  },
  {
    name: "Croatia",
    code: "HR",
    flag: "https://media-3.api-sports.io/flags/hr.svg",
  },
  {
    name: "Cuba",
    code: "CU",
    flag: "https://media-2.api-sports.io/flags/cu.svg",
  },
  {
    name: "Curacao",
    code: "CW",
    flag: "https://media-3.api-sports.io/flags/cw.svg",
  },
  {
    name: "Cyprus",
    code: "CY",
    flag: "https://media-3.api-sports.io/flags/cy.svg",
  },
  {
    name: "Czech-Republic",
    code: "CZ",
    flag: "https://media-1.api-sports.io/flags/cz.svg",
  },
  {
    name: "Denmark",
    code: "DK",
    flag: "https://media-2.api-sports.io/flags/dk.svg",
  },
  {
    name: "Dominican-Republic",
    code: "DO",
    flag: "https://media-2.api-sports.io/flags/do.svg",
  },
  {
    name: "Ecuador",
    code: "EC",
    flag: "https://media-2.api-sports.io/flags/ec.svg",
  },
  {
    name: "Egypt",
    code: "EG",
    flag: "https://media-2.api-sports.io/flags/eg.svg",
  },
  {
    name: "El-Salvador",
    code: "SV",
    flag: "https://media-2.api-sports.io/flags/sv.svg",
  },
  {
    name: "England",
    code: "GB",
    flag: "https://media-1.api-sports.io/flags/gb.svg",
  },
  {
    name: "Estonia",
    code: "EE",
    flag: "https://media-3.api-sports.io/flags/ee.svg",
  },
  {
    name: "Eswatini",
    code: "SZ",
    flag: "https://media-3.api-sports.io/flags/sz.svg",
  },
  {
    name: "Ethiopia",
    code: "ET",
    flag: "https://media-3.api-sports.io/flags/et.svg",
  },
  {
    name: "Faroe-Islands",
    code: "FO",
    flag: "https://media-2.api-sports.io/flags/fo.svg",
  },
  {
    name: "Fiji",
    code: "FJ",
    flag: "https://media-3.api-sports.io/flags/fj.svg",
  },
  {
    name: "Finland",
    code: "FI",
    flag: "https://media-3.api-sports.io/flags/fi.svg",
  },
  {
    name: "France",
    code: "FR",
    flag: "https://media-1.api-sports.io/flags/fr.svg",
  },
  {
    name: "Gabon",
    code: "GA",
    flag: "https://media-2.api-sports.io/flags/ga.svg",
  },
  {
    name: "Gambia",
    code: "GM",
    flag: "https://media-2.api-sports.io/flags/gm.svg",
  },
  {
    name: "Georgia",
    code: "GE",
    flag: "https://media-3.api-sports.io/flags/ge.svg",
  },
  {
    name: "Germany",
    code: "DE",
    flag: "https://media-3.api-sports.io/flags/de.svg",
  },
  {
    name: "Ghana",
    code: "GH",
    flag: "https://media-2.api-sports.io/flags/gh.svg",
  },
  {
    name: "Gibraltar",
    code: "GI",
    flag: "https://media-2.api-sports.io/flags/gi.svg",
  },
  {
    name: "Greece",
    code: "GR",
    flag: "https://media-3.api-sports.io/flags/gr.svg",
  },
  {
    name: "Guadeloupe",
    code: "GP",
    flag: "https://media-2.api-sports.io/flags/gp.svg",
  },
  {
    name: "Guatemala",
    code: "GT",
    flag: "https://media-1.api-sports.io/flags/gt.svg",
  },
  {
    name: "Guinea",
    code: "GN",
    flag: "https://media-2.api-sports.io/flags/gn.svg",
  },
  {
    name: "Haiti",
    code: "HT",
    flag: "https://media-2.api-sports.io/flags/ht.svg",
  },
  {
    name: "Honduras",
    code: "HN",
    flag: "https://media-1.api-sports.io/flags/hn.svg",
  },
  {
    name: "Hong-Kong",
    code: "HK",
    flag: "https://media-3.api-sports.io/flags/hk.svg",
  },
  {
    name: "Hungary",
    code: "HU",
    flag: "https://media-1.api-sports.io/flags/hu.svg",
  },
  {
    name: "Iceland",
    code: "IS",
    flag: "https://media-3.api-sports.io/flags/is.svg",
  },
  {
    name: "India",
    code: "IN",
    flag: "https://media-3.api-sports.io/flags/in.svg",
  },
  {
    name: "Indonesia",
    code: "ID",
    flag: "https://media-2.api-sports.io/flags/id.svg",
  },
  {
    name: "Iran",
    code: "IR",
    flag: "https://media-1.api-sports.io/flags/ir.svg",
  },
  {
    name: "Iraq",
    code: "IQ",
    flag: "https://media-1.api-sports.io/flags/iq.svg",
  },
  {
    name: "Ireland",
    code: "IE",
    flag: "https://media-1.api-sports.io/flags/ie.svg",
  },
  {
    name: "Israel",
    code: "IL",
    flag: "https://media-3.api-sports.io/flags/il.svg",
  },
  {
    name: "Italy",
    code: "IT",
    flag: "https://media-2.api-sports.io/flags/it.svg",
  },
  {
    name: "Ivory-Coast",
    code: "CI",
    flag: "https://media-2.api-sports.io/flags/ci.svg",
  },
  {
    name: "Jamaica",
    code: "JM",
    flag: "https://media-2.api-sports.io/flags/jm.svg",
  },
  {
    name: "Japan",
    code: "JP",
    flag: "https://media-3.api-sports.io/flags/jp.svg",
  },
  {
    name: "Jordan",
    code: "JO",
    flag: "https://media-2.api-sports.io/flags/jo.svg",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flag: "https://media-2.api-sports.io/flags/kz.svg",
  },
  {
    name: "Kenya",
    code: "KE",
    flag: "https://media-3.api-sports.io/flags/ke.svg",
  },
  {
    name: "Kosovo",
    code: "XK",
    flag: "https://media-3.api-sports.io/flags/xk.svg",
  },
  {
    name: "Kuwait",
    code: "KW",
    flag: "https://media-1.api-sports.io/flags/kw.svg",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flag: "https://media-1.api-sports.io/flags/kg.svg",
  },
  {
    name: "Laos",
    code: "LA",
    flag: "https://media-3.api-sports.io/flags/la.svg",
  },
  {
    name: "Latvia",
    code: "LV",
    flag: "https://media-1.api-sports.io/flags/lv.svg",
  },
  {
    name: "Lebanon",
    code: "LB",
    flag: "https://media-3.api-sports.io/flags/lb.svg",
  },
  {
    name: "Lesotho",
    code: "LS",
    flag: "https://media-1.api-sports.io/flags/ls.svg",
  },
  {
    name: "Liberia",
    code: "LR",
    flag: "https://media-3.api-sports.io/flags/lr.svg",
  },
  {
    name: "Libya",
    code: "LY",
    flag: "https://media-2.api-sports.io/flags/ly.svg",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flag: "https://media-1.api-sports.io/flags/li.svg",
  },
  {
    name: "Lithuania",
    code: "LT",
    flag: "https://media-2.api-sports.io/flags/lt.svg",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flag: "https://media-3.api-sports.io/flags/lu.svg",
  },
  {
    name: "Macao",
    code: "MO",
    flag: "https://media-3.api-sports.io/flags/mo.svg",
  },
  {
    name: "Macedonia",
    code: "MK",
    flag: "https://media-1.api-sports.io/flags/mk.svg",
  },
  {
    name: "Malawi",
    code: "MW",
    flag: "https://media-2.api-sports.io/flags/mw.svg",
  },
  {
    name: "Malaysia",
    code: "MY",
    flag: "https://media-2.api-sports.io/flags/my.svg",
  },
  {
    name: "Maldives",
    code: "MV",
    flag: "https://media-1.api-sports.io/flags/mv.svg",
  },
  {
    name: "Mali",
    code: "ML",
    flag: "https://media-1.api-sports.io/flags/ml.svg",
  },
  {
    name: "Malta",
    code: "MT",
    flag: "https://media-2.api-sports.io/flags/mt.svg",
  },
  {
    name: "Mauritania",
    code: "MR",
    flag: "https://media-3.api-sports.io/flags/mr.svg",
  },
  {
    name: "Mauritius",
    code: "MU",
    flag: "https://media-1.api-sports.io/flags/mu.svg",
  },
  {
    name: "Mexico",
    code: "MX",
    flag: "https://media-3.api-sports.io/flags/mx.svg",
  },
  {
    name: "Moldova",
    code: "MD",
    flag: "https://media-1.api-sports.io/flags/md.svg",
  },
  {
    name: "Mongolia",
    code: "MN",
    flag: "https://media-1.api-sports.io/flags/mn.svg",
  },
  {
    name: "Montenegro",
    code: "ME",
    flag: "https://media-3.api-sports.io/flags/me.svg",
  },
  {
    name: "Morocco",
    code: "MA",
    flag: "https://media-1.api-sports.io/flags/ma.svg",
  },
  {
    name: "Myanmar",
    code: "MM",
    flag: "https://media-3.api-sports.io/flags/mm.svg",
  },
  {
    name: "Namibia",
    code: "NA",
    flag: "https://media-2.api-sports.io/flags/na.svg",
  },
  {
    name: "Nepal",
    code: "NP",
    flag: "https://media-3.api-sports.io/flags/np.svg",
  },
  {
    name: "Netherlands",
    code: "NL",
    flag: "https://media-1.api-sports.io/flags/nl.svg",
  },
  {
    name: "New-Zealand",
    code: "NZ",
    flag: "https://media-1.api-sports.io/flags/nz.svg",
  },
  {
    name: "Nicaragua",
    code: "NI",
    flag: "https://media-3.api-sports.io/flags/ni.svg",
  },
  {
    name: "Nigeria",
    code: "NG",
    flag: "https://media-1.api-sports.io/flags/ng.svg",
  },
  {
    name: "Northern-Ireland",
    code: "GB",
    flag: "https://media-2.api-sports.io/flags/gb.svg",
  },
  {
    name: "Norway",
    code: "NO",
    flag: "https://media-3.api-sports.io/flags/no.svg",
  },
  {
    name: "Oman",
    code: "OM",
    flag: "https://media-1.api-sports.io/flags/om.svg",
  },
  {
    name: "Pakistan",
    code: "PK",
    flag: "https://media-3.api-sports.io/flags/pk.svg",
  },
  {
    name: "Palestine",
    code: "PS",
    flag: "https://media-2.api-sports.io/flags/ps.svg",
  },
  {
    name: "Panama",
    code: "PA",
    flag: "https://media-3.api-sports.io/flags/pa.svg",
  },
  {
    name: "Paraguay",
    code: "PY",
    flag: "https://media-2.api-sports.io/flags/py.svg",
  },
  {
    name: "Peru",
    code: "PE",
    flag: "https://media-3.api-sports.io/flags/pe.svg",
  },
  {
    name: "Philippines",
    code: "PH",
    flag: "https://media-3.api-sports.io/flags/ph.svg",
  },
  {
    name: "Poland",
    code: "PL",
    flag: "https://media-1.api-sports.io/flags/pl.svg",
  },
  {
    name: "Portugal",
    code: "PT",
    flag: "https://media-1.api-sports.io/flags/pt.svg",
  },
  {
    name: "Qatar",
    code: "QA",
    flag: "https://media-1.api-sports.io/flags/qa.svg",
  },
  {
    name: "Romania",
    code: "RO",
    flag: "https://media-1.api-sports.io/flags/ro.svg",
  },
  {
    name: "Russia",
    code: "RU",
    flag: "https://media-2.api-sports.io/flags/ru.svg",
  },
  {
    name: "Rwanda",
    code: "RW",
    flag: "https://media-2.api-sports.io/flags/rw.svg",
  },
  {
    name: "San-Marino",
    code: "SM",
    flag: "https://media-2.api-sports.io/flags/sm.svg",
  },
  {
    name: "Saudi-Arabia",
    code: "SA",
    flag: "https://media-2.api-sports.io/flags/sa.svg",
  },
  {
    name: "Scotland",
    code: "GB",
    flag: "https://media-3.api-sports.io/flags/gb.svg",
  },
  {
    name: "Senegal",
    code: "SN",
    flag: "https://media-2.api-sports.io/flags/sn.svg",
  },
  {
    name: "Serbia",
    code: "RS",
    flag: "https://media-1.api-sports.io/flags/rs.svg",
  },
  {
    name: "Singapore",
    code: "SG",
    flag: "https://media-1.api-sports.io/flags/sg.svg",
  },
  {
    name: "Slovakia",
    code: "SK",
    flag: "https://media-2.api-sports.io/flags/sk.svg",
  },
  {
    name: "Slovenia",
    code: "SI",
    flag: "https://media-1.api-sports.io/flags/si.svg",
  },
  {
    name: "Somalia",
    code: "SO",
    flag: "https://media-2.api-sports.io/flags/so.svg",
  },
  {
    name: "South-Africa",
    code: "ZA",
    flag: "https://media-3.api-sports.io/flags/za.svg",
  },
  {
    name: "South-Korea",
    code: "KR",
    flag: "https://media-1.api-sports.io/flags/kr.svg",
  },
  {
    name: "Spain",
    code: "ES",
    flag: "https://media-3.api-sports.io/flags/es.svg",
  },
  {
    name: "Sudan",
    code: "SD",
    flag: "https://media-3.api-sports.io/flags/sd.svg",
  },
  {
    name: "Surinam",
    code: "SR",
    flag: "https://media-1.api-sports.io/flags/sr.svg",
  },
  {
    name: "Sweden",
    code: "SE",
    flag: "https://media-2.api-sports.io/flags/se.svg",
  },
  {
    name: "Switzerland",
    code: "CH",
    flag: "https://media-3.api-sports.io/flags/ch.svg",
  },
  {
    name: "Syria",
    code: "SY",
    flag: "https://media-3.api-sports.io/flags/sy.svg",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flag: "https://media-1.api-sports.io/flags/tj.svg",
  },
  {
    name: "Tanzania",
    code: "TZ",
    flag: "https://media-3.api-sports.io/flags/tz.svg",
  },
  {
    name: "Thailand",
    code: "TH",
    flag: "https://media-1.api-sports.io/flags/th.svg",
  },
  {
    name: "Trinidad-And-Tobago",
    code: "TT",
    flag: "https://media-2.api-sports.io/flags/tt.svg",
  },
  {
    name: "Tunisia",
    code: "TN",
    flag: "https://media-1.api-sports.io/flags/tn.svg",
  },
  {
    name: "Turkey",
    code: "TR",
    flag: "https://media-3.api-sports.io/flags/tr.svg",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flag: "https://media-3.api-sports.io/flags/tm.svg",
  },
  {
    name: "Uganda",
    code: "UG",
    flag: "https://media-3.api-sports.io/flags/ug.svg",
  },
  {
    name: "Ukraine",
    code: "UA",
    flag: "https://media-1.api-sports.io/flags/ua.svg",
  },
  {
    name: "United-Arab-Emirates",
    code: "AE",
    flag: "https://media-2.api-sports.io/flags/ae.svg",
  },
  {
    name: "Uruguay",
    code: "UY",
    flag: "https://media-1.api-sports.io/flags/uy.svg",
  },
  {
    name: "USA",
    code: "US",
    flag: "https://media-1.api-sports.io/flags/us.svg",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flag: "https://media-3.api-sports.io/flags/uz.svg",
  },
  {
    name: "Venezuela",
    code: "VE",
    flag: "https://media-2.api-sports.io/flags/ve.svg",
  },
  {
    name: "Vietnam",
    code: "VN",
    flag: "https://media-3.api-sports.io/flags/vn.svg",
  },
  {
    name: "Wales",
    code: "GB",
    flag: "https://media-3.api-sports.io/flags/gb.svg",
  },
  {
    name: "Zambia",
    code: "ZM",
    flag: "https://media-1.api-sports.io/flags/zm.svg",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flag: "https://media-3.api-sports.io/flags/zw.svg",
  },
];

export const albaniaLeagues = [
  {
    id: 708,
    name: "Super Cup",
    type: "Cup",
    logo: "https://media-3.api-sports.io/football/leagues/708.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 310,
    name: "Superliga",
    type: "League",
    logo: "https://media-3.api-sports.io/football/leagues/310.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 311,
    name: "1st Division",
    type: "League",
    logo: "https://media-2.api-sports.io/football/leagues/311.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 707,
    name: "Cup",
    type: "Cup",
    logo: "https://media-3.api-sports.io/football/leagues/707.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 513,
    name: "2nd Division - Group B",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/513.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 512,
    name: "2nd Division - Group A",
    type: "League",
    logo: "https://media-2.api-sports.io/football/leagues/512.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
  {
    id: 978,
    name: "2nd Division - Play-offs",
    type: "League",
    logo: "https://media-2.api-sports.io/football/leagues/978.png",
    country: {
      name: "Albania",
      code: "AL",
      flag: "https://media-1.api-sports.io/flags/al.svg",
    },
  },
];

export const popularLeagues = [
  {
    id: 140,
    name: "La Liga",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/140.png",
    country: {
      name: "Spain",
      code: "ES",
      flag: "https://media-2.api-sports.io/flags/es.svg",
    },
  },
  {
    id: 39,
    name: "Premier League",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/39.png",
    country: {
      name: "England",
      code: "GB",
      flag: "https://media-2.api-sports.io/flags/gb.svg",
    },
  },
  {
    id: 135,
    name: "Serie A",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/135.png",
    country: {
      name: "Italy",
      code: "IT",
      flag: "https://media-2.api-sports.io/flags/it.svg",
    },
  },
  {
    id: 78,
    name: "Bundesliga",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/78.png",
    country: {
      name: "Germany",
      code: "DE",
      flag: "https://media-2.api-sports.io/flags/de.svg",
    },
  },
  {
    id: 61,
    name: "Ligue 1",
    type: "League",
    logo: "https://media-1.api-sports.io/football/leagues/61.png",
    country: {
      name: "France",
      code: "FR",
      flag: "https://media-2.api-sports.io/flags/fr.svg",
    },
  },
];

export const leagueFixtures: Fixture[] = [
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 10,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 2,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035830,
    referee: "Piotr Lasyk, Poland",
    timezone: "UTC",
    date: "2023-08-05T15:30:00+00:00",
    timestamp: 1691249400,
    long: "First Half",
    short: "1H",
    elapsed: 6,
    homeName: "Gornik Zabrze",
    awayName: "Piast Gliwice",
    homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
    goalsHomeTeam: 0,
    goalsAwayTeam: 0,
    venue: {
      name: "Stadion im. Ernesta Pohla",
      address: "ul. Roosevelta 81",
      city: "Zabrze",
      capacity: 31871,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18625.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035835,
    referee: "J. Przybył",
    timezone: "UTC",
    date: "2023-08-05T18:00:00+00:00",
    timestamp: 1691258400,
    long: "Not Started",
    short: "NS",
    elapsed: null,
    homeName: "Radomiak Radom",
    awayName: "Cracovia Krakow",
    homeLogo: "https://media-3.api-sports.io/football/teams/4248.png",
    awayLogo: "https://media-3.api-sports.io/football/teams/350.png",
    goalsHomeTeam: null,
    goalsAwayTeam: null,
    venue: null,
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
  {
    fixtureId: 1035836,
    referee: "Karol Arys, Poland",
    timezone: "UTC",
    date: "2023-08-05T13:00:00+00:00",
    timestamp: 1691240400,
    long: "Match Finished",
    short: "FT",
    elapsed: 90,
    homeName: "Raków Częstochowa",
    awayName: "Warta Poznań",
    homeLogo: "https://media-2.api-sports.io/football/teams/3491.png",
    awayLogo: "https://media-1.api-sports.io/football/teams/3496.png",
    goalsHomeTeam: 2,
    goalsAwayTeam: 2,
    venue: {
      name: "Miejski Stadion Piłkarski Raków",
      address: "ul. Limanowskiego 83",
      city: "Częstochowa",
      capacity: 5500,
      surface: "grass",
      image: "https://media-1.api-sports.io/football/venues/18633.png",
    },
    fixtureLeague: {
      league: {
        leagueId: 140,
        name: "Ekstraklasa",
        type: "League",
        logo: "https://media-3.api-sports.io/football/leagues/106.png",
        country: {
          name: "Poland",
          code: "PL",
          flag: "https://media-3.api-sports.io/flags/pl.svg",
        },
      },
      round: "Regular Season - 3",
      season: 2023,
    },
  },
];

export const exampleFixture = {
  fixtureId: 1035830,
  referee: "Piotr Lasyk, Poland",
  timezone: "UTC",
  date: "2023-08-05T15:30:00+00:00",
  timestamp: 1691249400,
  long: "First Half",
  short: "1H",
  elapsed: 6,
  homeName: "Gornik Zabrze",
  awayName: "Piast Gliwice",
  homeLogo: "https://media-2.api-sports.io/football/teams/340.png",
  awayLogo: "https://media-1.api-sports.io/football/teams/349.png",
  goalsHomeTeam: 0,
  goalsAwayTeam: 0,
  venue: {
    name: "Stadion im. Ernesta Pohla",
    address: "ul. Roosevelta 81",
    city: "Zabrze",
    capacity: 31871,
    surface: "grass",
    image: "https://media-1.api-sports.io/football/venues/18625.png",
  },
  fixtureLeague: {
    league: {
      leagueId: 140,
      name: "Ekstraklasa",
      type: "League",
      logo: "https://media-3.api-sports.io/football/leagues/106.png",
      country: {
        name: "Poland",
        code: "PL",
        flag: "https://media-3.api-sports.io/flags/pl.svg",
      },
    },
    round: "Regular Season - 3",
    season: 2023,
  },
};

export const exampleLiveFixture = {
  fixtureId: 994803,
  referee: "Hayato Shimizu, Japan",
  timezone: "UTC",
  date: "2023-08-06T09:30:00+00:00",
  timestamp: 1691314200,
  long: "First Half",
  short: "1H",
  elapsed: 27,
  homeName: "Yokohama FC",
  awayName: "Vissel Kobe",
  homeLogo: "https://media-3.api-sports.io/football/teams/307.png",
  awayLogo: "https://media-2.api-sports.io/football/teams/289.png",
  goalsHomeTeam: 1,
  goalsAwayTeam: 0,
  venue: {
    name: "NHK Spring Mitsuzawa Football Stadium",
    address: "Mitsuzawanishi cho 3-1, Kanagawa-ku",
    city: "Yokohama",
    capacity: 15440,
    surface: "grass",
    image: "https://media-3.api-sports.io/football/venues/11579.png",
  },
  fixtureLeague: {
    league: {
      name: "J1 League",
      type: "League",
      logo: "https://media-3.api-sports.io/football/leagues/98.png",
      country: {
        name: "Japan",
        code: "JP",
        flag: "https://media-3.api-sports.io/flags/jp.svg",
      },
    },
    round: "Regular Season - 22",
    season: 2023,
  },
};

export const exampleFixtureDetails: FixtureDetails = {
  fixture: {
    id: 878192,
    referee: "José Munuera",
    timezone: "UTC",
    date: "2023-03-18T20:00:00+00:00",
    timestamp: 1679169600,
    periods: {
      first: 1679169600,
      second: 1679173200,
    },
    venue: {
      id: 19217,
      name: "Estádio Cívitas Metropolitano",
      city: "Madrid",
    },
    status: {
      long: "Match Finished",
      short: "FT",
      elapsed: 90,
    },
    league: null,
  },
  league: {
    id: 140,
    name: "La Liga",
    country: "Spain",
    logo: "https://media-1.api-sports.io/football/leagues/140.png",
    flag: "https://media-1.api-sports.io/flags/es.svg",
    season: 2022,
    round: "Regular Season - 26",
  },
  teams: {
    home: {
      id: 530,
      name: "Atletico Madrid",
      logo: "https://media-2.api-sports.io/football/teams/530.png",
      winner: true,
    },
    away: {
      id: 532,
      name: "Valencia",
      logo: "https://media-2.api-sports.io/football/teams/532.png",
      winner: false,
    },
  },
  goals: {
    home: 3,
    away: 0,
  },
  score: {
    halftime: {
      home: 1,
      away: 0,
    },
    fulltime: {
      home: 3,
      away: 0,
    },
    extratime: {
      home: null,
      away: null,
    },
    penalty: {
      home: null,
      away: null,
    },
  },
  events: [
    {
      time: {
        elapsed: 4,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 56,
        name: "Antoine Griezmann",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 23,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 56,
        name: "A. Griezmann",
      },
      assist: {
        id: 753,
        name: "Marcos Llorente",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 42,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 753,
        name: "Marcos Llorente",
      },
      assist: {
        id: null,
        name: null,
      },
      type: "Card",
      detail: "Yellow Card",
      comments: "Foul",
    },
    {
      time: {
        elapsed: 49,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2923,
        name: "Y. Carrasco",
      },
      assist: {
        id: 2472,
        name: "R. De Paul",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-3.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 162106,
        name: "Y. Musah",
      },
      assist: {
        id: 162123,
        name: "I. Moriba",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 63,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 1482,
        name: "Thierry Correia",
      },
      assist: {
        id: 126936,
        name: "Samuel Lino",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2472,
        name: "R. De Paul",
      },
      assist: {
        id: 45,
        name: "T. Lemar",
      },
      type: "subst",
      detail: "Substitution 1",
      comments: null,
    },
    {
      time: {
        elapsed: 64,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 667,
        name: "M. Depay",
      },
      assist: {
        id: 59,
        name: "Álvaro Morata",
      },
      type: "subst",
      detail: "Substitution 2",
      comments: null,
    },
    {
      time: {
        elapsed: 67,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 45,
        name: "T. Lemar",
      },
      assist: {
        id: 59,
        name: "Álvaro Morata",
      },
      type: "Goal",
      detail: "Normal Goal",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 753,
        name: "Marcos Llorente",
      },
      assist: {
        id: 336594,
        name: "Pablo Barrios",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 2923,
        name: "Y. Carrasco",
      },
      assist: {
        id: 53,
        name: "Á. Correa",
      },
      type: "subst",
      detail: "Substitution 4",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-2.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 161933,
        name: "Nico González",
      },
      assist: {
        id: 41157,
        name: "André Almeida",
      },
      type: "subst",
      detail: "Substitution 3",
      comments: null,
    },
    {
      time: {
        elapsed: 70,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 47264,
        name: "Hugo Duro",
      },
      assist: {
        id: 274,
        name: "E. Cavani",
      },
      type: "subst",
      detail: "Substitution 4",
      comments: null,
    },
    {
      time: {
        elapsed: 77,
        extra: null,
      },
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-2.api-sports.io/football/teams/530.png",
      },
      player: {
        id: 50,
        name: "Koke",
      },
      assist: {
        id: 20,
        name: "A. Witsel",
      },
      type: "subst",
      detail: "Substitution 5",
      comments: null,
    },
    {
      time: {
        elapsed: 77,
        extra: null,
      },
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-3.api-sports.io/football/teams/532.png",
      },
      player: {
        id: 792,
        name: "J. Kluivert",
      },
      assist: {
        id: 1641,
        name: "Samu Castillejo",
      },
      type: "subst",
      detail: "Substitution 5",
      comments: null,
    },
  ],
  lineups: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
        colors: {
          player: {
            primary: "f00000",
            number: "ffffff",
            border: "f00000",
          },
          goalkeeper: {
            primary: "ccff00",
            number: "000000",
            border: "ccff00",
          },
        },
      },
      coach: {
        id: 1595,
        name: "D. Simeone",
        photo: "https://media-3.api-sports.io/football/coachs/1595.png",
      },
      formation: "5-3-2",
      startXI: [
        {
          player: {
            id: 29,
            name: "J. Oblak",
            number: 13,
            pos: "G",
            grid: "1:1",
          },
        },
        {
          player: {
            id: 6503,
            name: "N. Molina",
            number: 16,
            pos: "D",
            grid: "2:5",
          },
        },
        {
          player: {
            id: 39,
            name: "S. Savić",
            number: 15,
            pos: "D",
            grid: "2:4",
          },
        },
        {
          player: {
            id: 31,
            name: "J. Giménez",
            number: 2,
            pos: "D",
            grid: "2:3",
          },
        },
        {
          player: {
            id: 2669,
            name: "Hermoso",
            number: 22,
            pos: "D",
            grid: "2:2",
          },
        },
        {
          player: {
            id: 2923,
            name: "Y. Carrasco",
            number: 21,
            pos: "D",
            grid: "2:1",
          },
        },
        {
          player: {
            id: 753,
            name: "Marcos Llorente",
            number: 14,
            pos: "M",
            grid: "3:3",
          },
        },
        {
          player: {
            id: 50,
            name: "Koke",
            number: 6,
            pos: "M",
            grid: "3:2",
          },
        },
        {
          player: {
            id: 2472,
            name: "R. De Paul",
            number: 5,
            pos: "M",
            grid: "3:1",
          },
        },
        {
          player: {
            id: 667,
            name: "M. Depay",
            number: 9,
            pos: "F",
            grid: "4:2",
          },
        },
        {
          player: {
            id: 56,
            name: "A. Griezmann",
            number: 8,
            pos: "F",
            grid: "4:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 45,
            name: "T. Lemar",
            number: 11,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 59,
            name: "Álvaro Morata",
            number: 19,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 336594,
            name: "Pablo Barrios",
            number: 24,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 53,
            name: "Á. Correa",
            number: 10,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 20,
            name: "A. Witsel",
            number: 20,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 48,
            name: "Saúl",
            number: 17,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 18742,
            name: "M. Doherty",
            number: 12,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 315604,
            name: "Alejandro Iturbe",
            number: 33,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 14382,
            name: "I. Grbić",
            number: 1,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 926,
            name: "G. Kondogbia",
            number: 4,
            pos: "M",
            grid: null,
          },
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
        colors: {
          player: {
            primary: "ffffff",
            number: "040404",
            border: "ffffff",
          },
          goalkeeper: {
            primary: "6666ff",
            number: "ffffff",
            border: "6666ff",
          },
        },
      },
      coach: {
        id: 3234,
        name: "Rubén Baraja",
        photo: "https://media-2.api-sports.io/football/coachs/3234.png",
      },
      formation: "4-5-1",
      startXI: [
        {
          player: {
            id: 24760,
            name: "G. Mamardashvili",
            number: 25,
            pos: "G",
            grid: "1:1",
          },
        },
        {
          player: {
            id: 47251,
            name: "D. Foulquier",
            number: 20,
            pos: "D",
            grid: "2:4",
          },
        },
        {
          player: {
            id: 48372,
            name: "E. Cömert",
            number: 24,
            pos: "D",
            grid: "2:3",
          },
        },
        {
          player: {
            id: 72048,
            name: "C. Özkacar",
            number: 15,
            pos: "D",
            grid: "2:2",
          },
        },
        {
          player: {
            id: 918,
            name: "José Gayà",
            number: 14,
            pos: "D",
            grid: "2:1",
          },
        },
        {
          player: {
            id: 1482,
            name: "Thierry Correia",
            number: 2,
            pos: "M",
            grid: "3:5",
          },
        },
        {
          player: {
            id: 162106,
            name: "Y. Musah",
            number: 4,
            pos: "M",
            grid: "3:4",
          },
        },
        {
          player: {
            id: 919,
            name: "Hugo Guillamón",
            number: 6,
            pos: "M",
            grid: "3:3",
          },
        },
        {
          player: {
            id: 161933,
            name: "Nico González",
            number: 17,
            pos: "M",
            grid: "3:2",
          },
        },
        {
          player: {
            id: 792,
            name: "J. Kluivert",
            number: 9,
            pos: "M",
            grid: "3:1",
          },
        },
        {
          player: {
            id: 47264,
            name: "Hugo Duro",
            number: 19,
            pos: "F",
            grid: "4:1",
          },
        },
      ],
      substitutes: [
        {
          player: {
            id: 162123,
            name: "I. Moriba",
            number: 8,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 126936,
            name: "Samuel Lino",
            number: 16,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 41157,
            name: "André Almeida",
            number: 18,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 274,
            name: "E. Cavani",
            number: 7,
            pos: "F",
            grid: null,
          },
        },
        {
          player: {
            id: 1641,
            name: "Samu Castillejo",
            number: 11,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 162931,
            name: "Fran Pérez",
            number: 29,
            pos: "M",
            grid: null,
          },
        },
        {
          player: {
            id: 162175,
            name: "Jesús Vázquez",
            number: 21,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 333682,
            name: "Cristhian Mosquera",
            number: 33,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 916,
            name: "M. Diakhaby",
            number: 12,
            pos: "D",
            grid: null,
          },
        },
        {
          player: {
            id: 913,
            name: "Cristian Rivero",
            number: 13,
            pos: "G",
            grid: null,
          },
        },
        {
          player: {
            id: 47267,
            name: "Iago Herrerín",
            number: 1,
            pos: "G",
            grid: null,
          },
        },
      ],
    },
  ],
  statistics: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-1.api-sports.io/football/teams/530.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 6,
        },
        {
          type: "Shots off Goal",
          value: 7,
        },
        {
          type: "Total Shots",
          value: 14,
        },
        {
          type: "Blocked Shots",
          value: 1,
        },
        {
          type: "Shots insidebox",
          value: 12,
        },
        {
          type: "Shots outsidebox",
          value: 2,
        },
        {
          type: "Fouls",
          value: 12,
        },
        {
          type: "Corner Kicks",
          value: 4,
        },
        {
          type: "Offsides",
          value: null,
        },
        {
          type: "Ball Possession",
          value: "56%",
        },
        {
          type: "Yellow Cards",
          value: 2,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 1,
        },
        {
          type: "Total passes",
          value: 566,
        },
        {
          type: "Passes accurate",
          value: 488,
        },
        {
          type: "Passes %",
          value: "86%",
        },
        {
          type: "expected_goals",
          value: "2.23",
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
      },
      statistics: [
        {
          type: "Shots on Goal",
          value: 1,
        },
        {
          type: "Shots off Goal",
          value: 5,
        },
        {
          type: "Total Shots",
          value: 9,
        },
        {
          type: "Blocked Shots",
          value: 3,
        },
        {
          type: "Shots insidebox",
          value: 4,
        },
        {
          type: "Shots outsidebox",
          value: 5,
        },
        {
          type: "Fouls",
          value: 9,
        },
        {
          type: "Corner Kicks",
          value: 2,
        },
        {
          type: "Offsides",
          value: 1,
        },
        {
          type: "Ball Possession",
          value: "44%",
        },
        {
          type: "Yellow Cards",
          value: null,
        },
        {
          type: "Red Cards",
          value: null,
        },
        {
          type: "Goalkeeper Saves",
          value: 3,
        },
        {
          type: "Total passes",
          value: 440,
        },
        {
          type: "Passes accurate",
          value: 358,
        },
        {
          type: "Passes %",
          value: "81%",
        },
        {
          type: "expected_goals",
          value: "0.95",
        },
      ],
    },
  ],
  players: [
    {
      team: {
        id: 530,
        name: "Atletico Madrid",
        logo: "https://media-3.api-sports.io/football/teams/530.png",
        update: "2023-06-06T04:12:54+00:00",
      },
      players: [
        {
          player: {
            id: 29,
            name: "Jan Oblak",
            photo: "https://media-1.api-sports.io/football/players/29.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 13,
                position: "G",
                rating: "7.2",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: 1,
              },
              passes: {
                total: 28,
                key: null,
                accuracy: "21",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 6503,
            name: "Nahuel Molina",
            photo: "https://media-3.api-sports.io/football/players/6503.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 16,
                position: "D",
                rating: "6.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 49,
                key: 1,
                accuracy: "38",
              },
              tackles: {
                total: 1,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 2,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 2,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 39,
            name: "Stefan Savić",
            photo: "https://media-3.api-sports.io/football/players/39.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: "D",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 61,
                key: null,
                accuracy: "54",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 9,
                won: 7,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 31,
            name: "José María Giménez",
            photo: "https://media-3.api-sports.io/football/players/31.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 2,
                position: "D",
                rating: "7.2",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 53,
                key: null,
                accuracy: "44",
              },
              tackles: {
                total: 2,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 4,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2669,
            name: "Mario Hermoso",
            photo: "https://media-2.api-sports.io/football/players/2669.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 22,
                position: "D",
                rating: "7.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 69,
                key: 1,
                accuracy: "57",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 5,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2923,
            name: "Yannick Carrasco",
            photo: "https://media-2.api-sports.io/football/players/2923.png",
          },
          statistics: [
            {
              games: {
                minutes: 70,
                number: 21,
                position: "D",
                rating: "7.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 3,
                on: 2,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 35,
                key: null,
                accuracy: "30",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 4,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 2,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 753,
            name: "Marcos Llorente",
            photo: "https://media-1.api-sports.io/football/players/753.png",
          },
          statistics: [
            {
              games: {
                minutes: 70,
                number: 14,
                position: "M",
                rating: "7.5",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 31,
                key: 2,
                accuracy: "29",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 4,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 2,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 50,
            name: "Koke",
            photo: "https://media-3.api-sports.io/football/players/50.png",
          },
          statistics: [
            {
              games: {
                minutes: 77,
                number: 6,
                position: "M",
                rating: "7.5",
                captain: true,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 77,
                key: null,
                accuracy: "72",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 6,
                won: 5,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 2472,
            name: "Rodrigo de Paul",
            photo: "https://media-1.api-sports.io/football/players/2472.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 5,
                position: "M",
                rating: "7.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 46,
                key: 2,
                accuracy: "40",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 5,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 667,
            name: "Memphis Depay",
            photo: "https://media-1.api-sports.io/football/players/667.png",
          },
          statistics: [
            {
              games: {
                minutes: 64,
                number: 9,
                position: "F",
                rating: "5.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 4,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 14,
                key: 1,
                accuracy: "13",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 10,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: null,
              },
              fouls: {
                drawn: 3,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 56,
            name: "Antoine Griezmann",
            photo: "https://media-2.api-sports.io/football/players/56.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 8,
                position: "F",
                rating: "7.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 2,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 48,
                key: 2,
                accuracy: "42",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 11,
                won: 5,
              },
              dribbles: {
                attempts: 2,
                success: 2,
                past: 2,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 1,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 14382,
            name: "Ivo Grbić",
            photo: "https://media-1.api-sports.io/football/players/14382.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 1,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 315604,
            name: "Alejandro Iturbe",
            photo: "https://media-1.api-sports.io/football/players/315604.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 33,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 45,
            name: "Thomas Lemar",
            photo: "https://media-2.api-sports.io/football/players/45.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 11,
                position: "M",
                rating: "7.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: 1,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 13,
                key: 1,
                accuracy: "12",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 4,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 20,
            name: "Axel Witsel",
            photo: "https://media-3.api-sports.io/football/players/20.png",
          },
          statistics: [
            {
              games: {
                minutes: 13,
                number: 20,
                position: "M",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 15,
                key: null,
                accuracy: "14",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 336594,
            name: "Pablo Barrios",
            photo: "https://media-3.api-sports.io/football/players/336594.png",
          },
          statistics: [
            {
              games: {
                minutes: 20,
                number: 24,
                position: "M",
                rating: "6.9",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 10,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: null,
                blocks: 1,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 18742,
            name: "Matt Doherty",
            photo: "https://media-3.api-sports.io/football/players/18742.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 12,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 926,
            name: "Geoffrey Kondogbia",
            photo: "https://media-3.api-sports.io/football/players/926.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 4,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 48,
            name: "Saúl Ñíguez",
            photo: "https://media-1.api-sports.io/football/players/48.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 17,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 53,
            name: "Ángel Correa",
            photo: "https://media-1.api-sports.io/football/players/53.png",
          },
          statistics: [
            {
              games: {
                minutes: 20,
                number: 10,
                position: "F",
                rating: "6.3",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 9,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 7,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 59,
            name: "Álvaro Morata",
            photo: "https://media-3.api-sports.io/football/players/59.png",
          },
          statistics: [
            {
              games: {
                minutes: 26,
                number: 19,
                position: "F",
                rating: "7.2",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: 1,
                saves: null,
              },
              passes: {
                total: 8,
                key: 1,
                accuracy: "6",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
    {
      team: {
        id: 532,
        name: "Valencia",
        logo: "https://media-1.api-sports.io/football/teams/532.png",
        update: "2023-06-06T04:12:54+00:00",
      },
      players: [
        {
          player: {
            id: 24760,
            name: "Giorgi Mamardashvili",
            photo: "https://media-2.api-sports.io/football/players/24760.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 25,
                position: "G",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 3,
                assists: null,
                saves: 3,
              },
              passes: {
                total: 20,
                key: null,
                accuracy: "7",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: 0,
              },
            },
          ],
        },
        {
          player: {
            id: 47251,
            name: "Dimitri Foulquier",
            photo: "https://media-1.api-sports.io/football/players/47251.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 20,
                position: "D",
                rating: "5.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 56,
                key: null,
                accuracy: "41",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 1,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 48372,
            name: "Eray Cömert",
            photo: "https://media-2.api-sports.io/football/players/48372.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 24,
                position: "D",
                rating: "6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: 1,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 43,
                key: null,
                accuracy: "40",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 4,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 3,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 72048,
            name: "Cenk Özkaçar",
            photo: "https://media-3.api-sports.io/football/players/72048.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 15,
                position: "D",
                rating: "6.6",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 48,
                key: 1,
                accuracy: "38",
              },
              tackles: {
                total: 2,
                blocks: 1,
                interceptions: 1,
              },
              duels: {
                total: 8,
                won: 7,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 918,
            name: "José Luis Gayà",
            photo: "https://media-1.api-sports.io/football/players/918.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 14,
                position: "D",
                rating: "6.6",
                captain: true,
                substitute: false,
              },
              offsides: 1,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 44,
                key: 1,
                accuracy: "37",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 2,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1482,
            name: "Thierry Correia",
            photo: "https://media-3.api-sports.io/football/players/1482.png",
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 2,
                position: "M",
                rating: "7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 24,
                key: null,
                accuracy: "17",
              },
              tackles: {
                total: 3,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 7,
                won: 6,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 2,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162106,
            name: "Yunus Musah",
            photo: "https://media-2.api-sports.io/football/players/162106.png",
          },
          statistics: [
            {
              games: {
                minutes: 63,
                number: 4,
                position: "M",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 29,
                key: 1,
                accuracy: "24",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 4,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 919,
            name: "Hugo Guillamón",
            photo: "https://media-2.api-sports.io/football/players/919.png",
          },
          statistics: [
            {
              games: {
                minutes: 90,
                number: 6,
                position: "M",
                rating: "6.7",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 67,
                key: null,
                accuracy: "60",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: 2,
              },
              duels: {
                total: 7,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 161933,
            name: "Nicolás González",
            photo: "https://media-2.api-sports.io/football/players/161933.png",
          },
          statistics: [
            {
              games: {
                minutes: 71,
                number: 17,
                position: "M",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 29,
                key: null,
                accuracy: "25",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: 1,
              },
              duels: {
                total: 9,
                won: 3,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: 3,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 792,
            name: "Justin Kluivert",
            photo: "https://media-2.api-sports.io/football/players/792.png",
          },
          statistics: [
            {
              games: {
                minutes: 77,
                number: 9,
                position: "M",
                rating: "5.9",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 11,
                key: 2,
                accuracy: "7",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 11,
                won: 2,
              },
              dribbles: {
                attempts: 5,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: 2,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 47264,
            name: "Hugo Duro",
            photo: "https://media-2.api-sports.io/football/players/47264.png",
          },
          statistics: [
            {
              games: {
                minutes: 71,
                number: 19,
                position: "F",
                rating: "6.3",
                captain: false,
                substitute: false,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 8,
                key: null,
                accuracy: "8",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 17,
                won: 3,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 2,
                committed: 1,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 913,
            name: "Cristian Rivero",
            photo: "https://media-3.api-sports.io/football/players/913.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 13,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 47267,
            name: "Iago Herrerín",
            photo: "https://media-3.api-sports.io/football/players/47267.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 1,
                position: "G",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 916,
            name: "Mouctar Diakhaby",
            photo: "https://media-2.api-sports.io/football/players/916.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 12,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162175,
            name: "Jesús Vázquez",
            photo: "https://media-3.api-sports.io/football/players/162175.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 21,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 333682,
            name: "Cristhian Mosquera",
            photo: "https://media-1.api-sports.io/football/players/333682.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 33,
                position: "D",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 41157,
            name: "André Almeida",
            photo: "https://media-3.api-sports.io/football/players/41157.png",
          },
          statistics: [
            {
              games: {
                minutes: 19,
                number: 18,
                position: "M",
                rating: "6.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 16,
                key: null,
                accuracy: "16",
              },
              tackles: {
                total: 1,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 6,
                won: 3,
              },
              dribbles: {
                attempts: 3,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162123,
            name: "Ilaix Moriba",
            photo: "https://media-3.api-sports.io/football/players/162123.png",
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 8,
                position: "M",
                rating: "6.6",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 1,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 20,
                key: 1,
                accuracy: "19",
              },
              tackles: {
                total: 2,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 5,
                won: 2,
              },
              dribbles: {
                attempts: 1,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 1641,
            name: "Samu Castillejo",
            photo: "https://media-1.api-sports.io/football/players/1641.png",
          },
          statistics: [
            {
              games: {
                minutes: 13,
                number: 11,
                position: "M",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 6,
                key: 1,
                accuracy: "4",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 3,
                won: 1,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: 1,
              },
              fouls: {
                drawn: 1,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 126936,
            name: "Samuel Lino",
            photo: "https://media-2.api-sports.io/football/players/126936.png",
          },
          statistics: [
            {
              games: {
                minutes: 27,
                number: 16,
                position: "F",
                rating: "6.5",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: 2,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 16,
                key: null,
                accuracy: "13",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 2,
                won: 1,
              },
              dribbles: {
                attempts: 2,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 274,
            name: "Edinson Cavani",
            photo: "https://media-3.api-sports.io/football/players/274.png",
          },
          statistics: [
            {
              games: {
                minutes: 19,
                number: 7,
                position: "F",
                rating: "6.7",
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: 3,
                key: null,
                accuracy: "2",
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: 1,
                won: 1,
              },
              dribbles: {
                attempts: 1,
                success: 1,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
        {
          player: {
            id: 162931,
            name: "Francisco Pérez",
            photo: "https://media-3.api-sports.io/football/players/162931.png",
          },
          statistics: [
            {
              games: {
                minutes: null,
                number: 29,
                position: "M",
                rating: null,
                captain: false,
                substitute: true,
              },
              offsides: null,
              shots: {
                total: null,
                on: null,
              },
              goals: {
                total: null,
                conceded: 0,
                assists: null,
                saves: null,
              },
              passes: {
                total: null,
                key: null,
                accuracy: null,
              },
              tackles: {
                total: null,
                blocks: null,
                interceptions: null,
              },
              duels: {
                total: null,
                won: null,
              },
              dribbles: {
                attempts: null,
                success: null,
                past: null,
              },
              fouls: {
                drawn: null,
                committed: null,
              },
              cards: {
                yellow: 0,
                red: 0,
              },
              penalty: {
                won: null,
                committed: null,
                scored: 0,
                missed: 0,
                saved: null,
              },
            },
          ],
        },
      ],
    },
  ],
};
