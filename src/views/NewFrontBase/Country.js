const countries = [
  {
    name: "Afghanistan",
    flag: "🇦🇫",
    currency: {
      code: "AFN",
      name: "Afghani",
      symbol: "؋"
    },
    states: [
      {
        name: "Badakhshan",
        cities: ["Eshkashem", "Fayzabad", "Jurm", "Khandud", "Qal''eh-ye Panjeh"]
      },
      {
        name: "Badgis",
        cities: ["Bala Morghab", "Qal''eh-ye Naw"]
      },
      {
        name: "Baglan",
        cities: ["Andarab", "Baghlan", "Dahaneh-ye Ghawri", "Nahrin", "Pol-e Khumri"]
      },
      {
        name: "Balkh",
        cities: ["Balkh", "Dawlatabad", "Mazar-e Sharif", "Qarchi Gak", "Shulgara", "Tash Gozar"]
      },
      {
        name: "Bamiyan",
        cities: ["Bamiyan", "Panjab", "Qil Qal''eh"]
      },
      {
        name: "Farah",
        cities: ["Anar Darreh", "Farah", "Shindand"]
      },
      {
        name: "Faryab",
        cities: ["Andkhvoy", "Darzi Ab", "Dawlatabad", "Maymanah"]
      },
      {
        name: "Gawr",
        cities: ["Chaghcharan", "Shahrak", "Taywarah"]
      },
      {
        name: "Gazni",
        cities: ["Ghazni"]
      },
      {
        name: "Herat",
        cities: ["Awbeh", "Eslam Qal''eh", "Ghurian", "Herat", "Karukh", "Kuhestan", "Kushk", "Qarabagh", "Tawraghudi", "Tir Pol", "Zendejan"]
      },
      {
        name: "Hilmand",
        cities: ["Baghran", "Darwishan", "Deh Shu", "Gereshk", "Lashkar Gah", "Sangin"]
      },
      {
        name: "Jawzjan",
        cities: ["Aqchah", "Qarqin", "Sang-e Charak", "Shibarghan"]
      },
      {
        name: "Kabul",
        cities: ["Baghrami", "Kabul", "Mir Bachchekut", "Paghman", "Qarabagh", "Sarawbi"]
      },
      {
        name: "Kapisa",
        cities: ["Mahmud-e Raqi", "Taghab"]
      },
      {
        name: "Khawst",
        cities: ["Khawst"]
      },
      {
        name: "Kunar",
        cities: ["Asadabad", "Asmar"]
      },
      {
        name: "Lagman",
        cities: ["Mehtar Lam"]
      },
      {
        name: "Lawghar",
        cities: ["Azraw", "Baraki Barak", "Pol-e Alam"]
      },
      {
        name: "Nangarhar",
        cities: ["Achin", "Batsawul", "Hugyani", "Jalalabad", "Nader Shah Kawt"]
      },
      {
        name: "Nimruz",
        cities: ["Chahar Burjak", "Chakhansur", "Khash", "Mirabad", "Rudbar", "Zaranj"]
      },
      {
        name: "Nuristan",
        cities: ["Nuristan"]
      },
      {
        name: "Paktika",
        cities: ["Orgun", "Zareh Sharan", "Zarghun Shahr"]
      },
      {
        name: "Paktiya",
        cities: ["Ali Khayl", "Ghardez"]
      },
      {
        name: "Parwan",
        cities: ["Charikar", "Jabal-os-Saraj"]
      },
      {
        name: "Qandahar",
        cities: ["Qandahar"]
      },
      {
        name: "Qunduz",
        cities: ["Dasht-e Archa", "Emam Saheb", "Hazart Imam", "Khanabad", "Qal''eh-ye Zal", "Qunduz"]
      },
      {
        name: "Samangan",
        cities: ["Aybak", "Kholm"]
      },
      {
        name: "Sar-e Pul",
        cities: []
      },
      {
        name: "Takhar",
        cities: ["Chah Ab", "Eshkamesh", "Farkhar", "Khwajeh Ghar", "Rostaq", "Taloqan", "Yangi Qal''eh"]
      },
      {
        name: "Uruzgan",
        cities: ["Deh Rawud", "Gaz Ab", "Tarin Kawt", "Uruzgan"]
      },
      {
        name: "Wardag",
        cities: ["Gardan Diwal", "Maydanshahr"]
      },
      {
        name: "Zabul",
        cities: ["Qalat-e Ghilzay"]
      }
    ],
    isoAlpha2: "AF",
    isoAlpha3: "AFG",
    isoNumeric: 4
  },
  {
    name: "Albania",
    flag: "🇦🇱",
    currency: {
      code: "ALL",
      name: "Lek",
      symbol: "Lek"
    },
    states: [
      {
        name: "Berat",
        cities: ["Berat", "Polican", "Ure Vajgurore"]
      },
      {
        name: "Bulqize",
        cities: ["Bulqize"]
      },
      {
        name: "Delvine",
        cities: ["Delvine"]
      },
      {
        name: "Devoll",
        cities: ["Bilisht"]
      },
      {
        name: "Dibre",
        cities: ["Maqellare", "Peshkopi"]
      },
      {
        name: "Durres",
        cities: ["Durres", "Shijak"]
      },
      {
        name: "Elbasan",
        cities: ["Cerrik", "Elbasan", "Kerrabe"]
      },
      {
        name: "Fier",
        cities: ["Fier", "Patos", "Roskovec"]
      },
      {
        name: "Gjirokaster",
        cities: ["Gjirokaster", "Libohove"]
      },
      {
        name: "Gramsh",
        cities: ["Gramsh"]
      },
      {
        name: "Has",
        cities: ["Krume"]
      },
      {
        name: "Kavaje",
        cities: ["Kavaje"]
      },
      {
        name: "Kolonje",
        cities: ["Erseke", "Leskovik"]
      },
      {
        name: "Korce",
        cities: ["Korce", "Maliq"]
      },
      {
        name: "Kruje",
        cities: ["Fushe-Kruje", "Kruje", "Mamurras", "Milot"]
      },
      {
        name: "Kucove",
        cities: ["Kucove"]
      },
      {
        name: "Kukes",
        cities: ["Kukes"]
      },
      {
        name: "Kurbin",
        cities: ["Lac"]
      },
      {
        name: "Lezhe",
        cities: ["Lezhe", "Shengjin"]
      },
      {
        name: "Librazhd",
        cities: ["Librazhd", "Perrenjas"]
      },
      {
        name: "Lushnje",
        cities: ["Lushnje", "Rrogozhine"]
      },
      {
        name: "Mallakaster",
        cities: ["Ballsh"]
      },
      {
        name: "Malsi e Madhe",
        cities: []
      },
      {
        name: "Mat",
        cities: ["Burrel", "Klos", "Kraste", "Ulze"]
      },
      {
        name: "Mirdite",
        cities: ["Kurbnesh", "Rreshen", "Rubik"]
      },
      {
        name: "Peqin",
        cities: ["Peqin"]
      },
      {
        name: "Permet",
        cities: ["Kelcyre", "Permet"]
      },
      {
        name: "Pogradec",
        cities: ["Pogradec"]
      },
      {
        name: "Puke",
        cities: ["Fierze", "Fushe-Arrez", "Puke"]
      },
      {
        name: "Sarande",
        cities: ["Konispol", "Sarande"]
      },
      {
        name: "Shkoder",
        cities: ["Shkoder"]
      },
      {
        name: "Skrapar",
        cities: ["Corovode"]
      },
      {
        name: "Tepelene",
        cities: ["Memaliaj", "Tepelene"]
      },
      {
        name: "Tirane",
        cities: ["Kamze", "Paskuqan", "Tirane", "Vore"]
      },
      {
        name: "Tropoje",
        cities: ["Bajram Curri"]
      },
      {
        name: "Vlore",
        cities: ["Himare", "Orikum", "Selenice", "Vlore"]
      }
    ],
    isoAlpha2: "AL",
    isoAlpha3: "ALB",
    isoNumeric: 8
  },
  {
    name: "Algeria",
    flag: "🇩🇿",
    currency: {
      code: "DZD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Ayn Daflah",
        cities: []
      },
      {
        name: "Ayn Tamushanat",
        cities: []
      },
      {
        name: "Adrar",
        cities: ["Adrar", "Awlaf", "Rijan", "Timimun"]
      },
      {
        name: "Algiers",
        cities: ["Hydra", "Kouba"]
      },
      {
        name: "Annabah",
        cities: ["Annabah", "Birrahhal", "Saraydih", "Sidi Amar", "al-Buni", "al-Hajar"]
      },
      {
        name: "Bashshar",
        cities: ["Abadlah", "Bani Wanif", "Bashshar", "Qanadsan", "Taghit"]
      },
      {
        name: "Batnah",
        cities: ["Aris", "Ayn Tutah", "Barikah", "Batnah", "Marwanah", "Naghaus", "Ra''s-al-''Ayun", "Tazult"]
      },
      {
        name: "Bijayah",
        cities: ["Ayt Rizin", "Akbu", "Amizur", "Barbasha", "Bijayah", "Farrawn", "Ighram", "Sadduk", "Shamini", "Sidi ''Aysh", "Taskaryut", "Tazmalt", "Timazrit", "Uz-al-Laqin", "al-Qasr"]
      },
      {
        name: "Biskrah",
        cities: ["Awlad Jallal", "Biskrah", "Sidi Khalid", "Sidi Ukbah", "Tulja", "Um''ash", "Zaribat-al-Wad"]
      },
      {
        name: "Blidah",
        cities: ["Awlad Salam", "Awlad Yaysh", "Bani Khalil", "Bani Marad", "Bani Tamu", "Blidah", "Bu Arfa", "Bufarik", "Buinan", "Buqara", "Maftah", "Muzayah", "Shabli", "Shari''ah", "Shiffa", "Sidi Mussa", "Suma", "Wadi al-Allagh", "al-''Afrun", "al-Arba''a"]
      },
      {
        name: "Buirah",
        cities: ["Ayn Bissim", "Aghbalu", "Bi''r Ghabalu", "Buirah", "Lakhdariyah", "Shurfa", "Sur-al-Ghuzlan"]
      },
      {
        name: "Bumardas",
        cities: ["Ayn Tayah", "Awlad Haddaj", "Awlad Mussa", "Bani Amran", "Budwawu", "Budwawu al-Bahri", "Bumardas", "Burj Minayal", "Dalis", "Hammadi", "Issar", "Khamis-al-Khashnah", "Nasiriyah", "Raghayah", "Sa''abat", "Tinyah", "al-Arba''a Tash", "ar-Ruwibah"]
      },
      {
        name: "Burj Bu Arririj",
        cities: []
      },
      {
        name: "Ghalizan",
        cities: ["Ammi Mussa", "Ghalizan", "Jidiwiyah", "Mazunah", "Sidi Muhammad Ban ''Ali", "Wadi Rahiyu", "Zammurah"]
      },
      {
        name: "Ghardayah",
        cities: ["Biryan", "Bu Nura", "Ghardaia", "Ghardayah", "Matlili", "al-Ghuli''ah", "al-Qararah"]
      },
      {
        name: "Ilizi",
        cities: ["Ilizi"]
      },
      {
        name: "Jijili",
        cities: ["Amir ''Abd-al-Qadar", "Jijili", "Shifka", "Tahar", "al-Miliyah"]
      },
      {
        name: "Jilfah",
        cities: ["Ayn Wissarah", "Ayn-al-Ibil", "Birin", "Dar Shiyukh", "Hassi Bahbah", "Jilfah", "Mis''ad", "Sharif", "al-Idrisiyah"]
      },
      {
        name: "Khanshalah",
        cities: ["Khanshalah", "Sharshar", "Tawziyanat", "al-Mahmal"]
      },
      {
        name: "Masilah",
        cities: ["Ayn-al-Hajal", "Ayn-al-Milh", "Bu Sa''adah", "Hammam Dhala''a", "Ma''adid", "Maghra", "Masilah", "Sidi ''Aysa", "Wanugha"]
      },
      {
        name: "Midyah",
        cities: ["Ayn Bu Sif", "Birwaghiyah", "Midyah", "Qasr-al-Bukhari", "Shillalah", "Tablat"]
      },
      {
        name: "Milah",
        cities: ["Farjiwah", "Milah", "Qararam Quqa", "Ruwashad", "Salghum-al-''Ayd", "Sidi Maruf", "Sidi Marwan", "Tajananah", "Talighmah", "Wadi Athmaniyah"]
      },
      {
        name: "Muaskar",
        cities: ["Bu Khanifiyah", "Muaskar", "Muhammadiyah", "Siq", "Tighinnif", "Wadi al-Abtal", "Zahana"]
      },
      {
        name: "Mustaghanam",
        cities: ["Ayn Tadalas", "Hassi Mamash", "Mazaghran", "Mustaghanam", "Sidi Ali"]
      },
      {
        name: "Naama",
        cities: ["Ayn Safra", "Mishriyah", "Naama"]
      },
      {
        name: "Oran",
        cities: ["Oran"]
      },
      {
        name: "Ouargla",
        cities: ["Ouargla"]
      },
      {
        name: "Qalmah",
        cities: ["Ayn Bardah", "Bumahra Ahmad", "Hamman Awlad ''Ali", "Qalmah", "Wadi Zinati"]
      },
      {
        name: "Qustantinah",
        cities: ["Ayn Abid", "Ayn Samara", "Didush Murad", "Hamma Bu Ziyan", "Qustantinah", "Zighut Yusuf", "al-Khurub"]
      },
      {
        name: "Sakikdah",
        cities: ["Azzabah", "Amjaz Adshish", "Fil Fila", "Karkira", "Ramadan Jamal", "Sakikdah", "Shataybih", "Tamalus", "al-Harush", "al-Qull"]
      },
      {
        name: "Satif",
        cities: ["Ayn ''Azl", "Ayn Arnat", "Ayn Taqrut", "Ayn Wilman", "Ayn-al-Khabira", "Bouira", "Buq''ah", "Salah Bay", "Satif", "Setif", "Ziyama Mansuriyah", "al-''Ulmah"]
      },
      {
        name: "Sayda",
        cities: ["Ayn-al-Hajar", "Sayda"]
      },
      {
        name: "Sidi ban-al-''Abbas",
        cities: []
      },
      {
        name: "Suq Ahras",
        cities: []
      },
      {
        name: "Tamanghasat",
        cities: ["Ayn Qazzan", "Ayn Salah", "Tamanghasat"]
      },
      {
        name: "Tibazah",
        cities: ["Ayn Binyan", "Bu Isma''il", "Bu Midfar''ah", "Damus", "Duwirah", "Hajut", "Hammam Righa", "Sawlah", "Shiragha", "Shirshall", "Sidi Farj", "Stawali", "Tibazah", "Ziralda", "al-Qull''ah"]
      },
      {
        name: "Tibissah",
        cities: ["Bi''r-al-''Itir", "Hammamat", "Mursut", "Shariyah", "Tibissah", "Winzah", "al-''Awaynat"]
      },
      {
        name: "Tilimsan",
        cities: ["Awlad Mimun", "Bani Mastar", "Bani Sikran", "Ghazawat", "Hannayah", "Maghniyah", "Nidruma", "Ramsh", "Sabra", "Shatwan", "Sibdu", "Sidi ''Abdallah", "Tilimsan", "al-Mansurah"]
      },
      {
        name: "Tinduf",
        cities: ["Tinduf"]
      },
      {
        name: "Tisamsilt",
        cities: ["Thaniyat-al-Had", "Tisamsilt"]
      },
      {
        name: "Tiyarat",
        cities: ["Ayn Dhahab", "Firindah", "Mahdiyah", "Mashra''a Asfa", "Qasr Shillalah", "Rahuyah", "Sughar", "Takhamarat", "Tiyarat"]
      },
      {
        name: "Tizi Wazu",
        cities: []
      },
      {
        name: "Umm-al-Bawaghi",
        cities: ["Ayn Bayda", "Ayn Fakrun", "Ayn Kirshah", "Ayn Malilah", "Bi''r Shuhada", "Miskyanah", "Shamurah", "Umm-al-Bawaghi"]
      },
      {
        name: "Wahran",
        cities: ["Ayn Biya", "Ayn-at-Turk", "Arzu", "Bi''r-al-Jir", "Butlilis", "Hassi Bu Nif", "Mars-al-Kabir", "Qadayal", "Sidi ash-Shami", "Wadi Thalatha", "Wahran", "al-Ansur", "as-Saniyah"]
      },
      {
        name: "Warqla",
        cities: ["Hassi Mas''ud", "Nazla", "Ruwisiyat", "Tabisbast", "Tamalhat", "Tamasin", "Tayabat-al-Janubiyah", "Tughghurt", "Warqla", "al-Hajirah"]
      },
      {
        name: "Wilaya d Alger",
        cities: []
      },
      {
        name: "Wilaya de Bejaia",
        cities: []
      },
      {
        name: "Wilaya de Constantine",
        cities: []
      },
      {
        name: "al-Aghwat",
        cities: ["Aflu", "Hassi al-Raml", "al-Aghwat"]
      },
      {
        name: "al-Bayadh",
        cities: ["Brizyanah", "al-Abyad Sidi Shaykh", "al-Bayadh"]
      },
      {
        name: "al-Jaza''ir",
        cities: ["Bab Azwar", "Baraki", "Bir Murad Rais", "Birkhadam", "Burj-al-Kiffan", "Dar-al-Bayda", "al-Jaza''ir"]
      },
      {
        name: "al-Wad",
        cities: ["Bayadha", "Dabilah", "Hassan ''Abd-al-Karim", "Hassi Halifa", "Jama''a", "Maqran", "Qamar", "Raqiba", "Rubbah", "Sidi Amran", "al-Mighair", "al-Wad"]
      },
      {
        name: "ash-Shalif",
        cities: ["Ayn Maran", "Abu al-Hassan", "Bani Hawa", "Bu Qadir", "Sidi Ukaskah", "Tanas", "Wadi Sali", "Wadi al-Fiddah", "ash-Shalif", "ash-Shattiyah"]
      },
      {
        name: "at-Tarif",
        cities: ["Ban Mahdi", "Bani Amar", "Basbas", "Dariyan", "Saba''ita Muk", "al-Qal''ah", "at-Tarif"]
      }
    ],
    isoAlpha2: "DZ",
    isoAlpha3: "DZA",
    isoNumeric: 12
  },
  {
    name: "American Samoa",
    flag: "🇦🇸",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Eastern",
        cities: ["Afono", "Alao", "Alofau", "Amouli", "Aoa", "Atu''u", "Aua", "Aunu''u", "Faga''alu", "Faga''itua", "Fagasa", "Fagatogo", "Lauli''i", "Leloaloa", "Nu''uuli", "Pago Pago", "Tula", "Utulei", "Vatia"]
      },
      {
        name: "Manu''a",
        cities: ["Ofu"]
      },
      {
        name: "Swains Island",
        cities: []
      },
      {
        name: "Western",
        cities: ["Aoloau", "Faleniu", "Futiga", "Ili''ili", "Leone", "Malaeimi", "Malaeloa-Aitulagi", "Malaeloa-Ituau", "Mapusagafou", "Mesepa", "Pava''ia''i", "Tafuna", "Taputimu", "Vailoatai", "Vaitogi"]
      }
    ],
    isoAlpha2: "AS",
    isoAlpha3: "ASM",
    isoNumeric: 16
  },
  {
    name: "Andorra",
    flag: "🇦🇩",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Andorra la Vella",
        cities: []
      },
      {
        name: "Canillo",
        cities: ["Canillo"]
      },
      {
        name: "Encamp",
        cities: ["Encamp"]
      },
      {
        name: "La Massana",
        cities: []
      },
      {
        name: "Les Escaldes",
        cities: []
      },
      {
        name: "Ordino",
        cities: ["Ordino"]
      },
      {
        name: "Sant Julia de Loria",
        cities: []
      }
    ],
    isoAlpha2: "AD",
    isoAlpha3: "AND",
    isoNumeric: 20
  },
  {
    name: "Angola",
    flag: "🇦🇴",
    currency: {
      code: "AOA",
      name: "Kwanza",
      symbol: "Kz"
    },
    states: [
      {
        name: "Bengo",
        cities: ["Caxito"]
      },
      {
        name: "Benguela",
        cities: ["Benguela", "Lobito"]
      },
      {
        name: "Bie",
        cities: ["Camacupa", "Catabola", "Catumbela", "Chissamba", "Kuito"]
      },
      {
        name: "Cabinda",
        cities: ["Cabinda"]
      },
      {
        name: "Cunene",
        cities: ["Ondjiva"]
      },
      {
        name: "Huambo",
        cities: ["Caala", "Catchiungo", "Huambo", "Longonjo"]
      },
      {
        name: "Huila",
        cities: ["Caconda", "Caluquembe", "Lubango"]
      },
      {
        name: "Kuando-Kubango",
        cities: ["Menongue"]
      },
      {
        name: "Kwanza Norte",
        cities: []
      },
      {
        name: "Kwanza Sul",
        cities: []
      },
      {
        name: "Luanda",
        cities: ["Luanda"]
      },
      {
        name: "Lunda Norte",
        cities: []
      },
      {
        name: "Lunda Sul",
        cities: []
      },
      {
        name: "Malanje",
        cities: ["Malanje"]
      },
      {
        name: "Moxico",
        cities: ["Cazaje", "Leua", "Luau", "Luena", "Lumeje"]
      },
      {
        name: "Namibe",
        cities: ["Namibe"]
      },
      {
        name: "Uige",
        cities: ["Camabatela", "Uige"]
      },
      {
        name: "Zaire",
        cities: ["M''banza-Kongo", "N''zeto", "Soyo"]
      }
    ],
    isoAlpha2: "AO",
    isoAlpha3: "AGO",
    isoNumeric: 24
  },
  {
    name: "Anguilla",
    flag: "🇦🇮",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Other Provinces",
        cities: []
      }
    ],
    isoAlpha2: "AI",
    isoAlpha3: "AIA",
    isoNumeric: 660
  },
  {
    name: "Antarctica",
    flag: "🇦🇶",
    currency: {
      code: "",
      name: "",
      symbol: false
    },
    states: [
      {
        name: "Sector claimed by Argentina/Ch",
        cities: []
      },
      {
        name: "Sector claimed by Argentina/UK",
        cities: []
      },
      {
        name: "Sector claimed by Australia",
        cities: []
      },
      {
        name: "Sector claimed by France",
        cities: []
      },
      {
        name: "Sector claimed by New Zealand",
        cities: []
      },
      {
        name: "Sector claimed by Norway",
        cities: []
      },
      {
        name: "Unclaimed Sector",
        cities: []
      }
    ],
    isoAlpha2: "AQ",
    isoAlpha3: "ATA",
    isoNumeric: 10
  },
  {
    name: "Antigua and Barbuda",
    flag: "🇦🇬",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Barbuda",
        cities: ["Codrington"]
      },
      {
        name: "Saint George",
        cities: []
      },
      {
        name: "Saint John",
        cities: []
      },
      {
        name: "Saint Mary",
        cities: []
      },
      {
        name: "Saint Paul",
        cities: []
      },
      {
        name: "Saint Peter",
        cities: []
      },
      {
        name: "Saint Philip",
        cities: []
      }
    ],
    isoAlpha2: "AG",
    isoAlpha3: "ATG",
    isoNumeric: 28
  },
  {
    name: "Argentina",
    flag: "🇦🇷",
    currency: {
      code: "ARS",
      name: "Peso",
      symbol: "$"
    },
    states: [
      {
        name: "Buenos Aires",
        cities: []
      },
      {
        name: "Catamarca",
        cities: ["Catamarca"]
      },
      {
        name: "Chaco",
        cities: ["Presidencia Roque Saenz Pena", "Resistencia"]
      },
      {
        name: "Chubut",
        cities: ["Comodoro Rivadavia", "Puerto Madryn", "Rawson", "Trelew"]
      },
      {
        name: "Cordoba",
        cities: ["Alta Gracia", "Bell Ville", "Cordoba", "Rio Cuarto", "Rio Tercero", "San Francisco", "Villa Carlos Paz", "Villa Maria"]
      },
      {
        name: "Corrientes",
        cities: ["Corrientes", "Goya", "Mercedes", "San Lorenzo"]
      },
      {
        name: "Distrito Federal",
        cities: []
      },
      {
        name: "Entre Rios",
        cities: []
      },
      {
        name: "Formosa",
        cities: ["Formosa"]
      },
      {
        name: "Jujuy",
        cities: ["Jujuy", "Libertador General San Martin", "San Pedro"]
      },
      {
        name: "La Pampa",
        cities: []
      },
      {
        name: "La Rioja",
        cities: []
      },
      {
        name: "Mendoza",
        cities: ["Godoy Cruz", "Lujan", "Mendoza", "Rivadavia", "San Martin", "San Rafael"]
      },
      {
        name: "Misiones",
        cities: ["Eldorado", "Obera", "Posadas"]
      },
      {
        name: "Neuquen",
        cities: ["Cutral Co", "Neuquen"]
      },
      {
        name: "Rio Negro",
        cities: []
      },
      {
        name: "Salta",
        cities: ["Salta", "San Ramon de la Nueva Oran", "Tartagal"]
      },
      {
        name: "San Juan",
        cities: []
      },
      {
        name: "San Luis",
        cities: []
      },
      {
        name: "Santa Cruz",
        cities: []
      },
      {
        name: "Santa Fe",
        cities: []
      },
      {
        name: "Santiago del Estero",
        cities: []
      },
      {
        name: "Tierra del Fuego",
        cities: []
      },
      {
        name: "Tucuman",
        cities: ["Tucuman"]
      }
    ],
    isoAlpha2: "AR",
    isoAlpha3: "ARG",
    isoNumeric: 32
  },
  {
    name: "Armenia",
    flag: "🇦🇲",
    currency: {
      code: "AMD",
      name: "Dram",
      symbol: false
    },
    states: [
      {
        name: "Aragatsotn",
        cities: ["Ashtarak", "Talin"]
      },
      {
        name: "Ararat",
        cities: ["Ararat", "Artashat"]
      },
      {
        name: "Armavir",
        cities: ["Armavir", "Vagharshapat"]
      },
      {
        name: "Gegharkunik",
        cities: ["Gavar", "Martuni", "Sevan", "Vardenis"]
      },
      {
        name: "Kotaik",
        cities: ["Abovyan", "Arzni", "Charentsavan", "Hrazdan"]
      },
      {
        name: "Lori",
        cities: ["Akhtala", "Alaverdi", "Spitak", "Stepanavan", "Tashir", "Vanadzor"]
      },
      {
        name: "Shirak",
        cities: ["Artik", "Gyumri"]
      },
      {
        name: "Stepanakert",
        cities: ["Stepanakert"]
      },
      {
        name: "Syunik",
        cities: ["Angeghakot", "Goris", "Kajaran", "Kapan", "Meghri", "Sisian"]
      },
      {
        name: "Tavush",
        cities: ["Dilijan", "Ijevan"]
      },
      {
        name: "Vayots Dzor",
        cities: []
      },
      {
        name: "Yerevan",
        cities: ["Yerevan"]
      }
    ],
    isoAlpha2: "AM",
    isoAlpha3: "ARM",
    isoNumeric: 51
  },
  {
    name: "Aruba",
    flag: "🇦🇼",
    currency: {
      code: "AWG",
      name: "Guilder",
      symbol: "ƒ"
    },
    states: [
      {
        name: "Aruba",
        cities: ["Aruba"]
      }
    ],
    isoAlpha2: "AW",
    isoAlpha3: "ABW",
    isoNumeric: 533
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Australian Capital Territory",
        cities: []
      },
      {
        name: "New South Wales",
        cities: ["Balgolah", "Balmain", "Bankstown", "Baulkham Hills", "Bonnet Bay", "Castle Hill", "Chatswood", "Cherrybrook", "Frenchs Forest", "Jannali", "Wheeler"]
      },
      {
        name: "Northern Territory",
        cities: []
      },
      {
        name: "Queensland",
        cities: ["Acacia Ridge", "Aitkenvale", "Alderley", "Alexander Hills", "Archerfield", "Ashmore", "Atherton", "Ayr", "Beachmere", "Beenleigh", "Beerwah", "Bell", "Belmont", "Biloela", "Birkdale", "Blackwater", "Bongaree", "Bonogin", "Boonah", "Bowen", "Brendale", "Brisbane", "Buddina", "Buderim", "Bundaberg", "Bundall", "Burleigh Heads", "Burpengary", "Cabaland", "Caboolture", "Cairns", "Cairns Northern Beaches", "Caloundra", "Capalaba", "Charters Towers", "Childers", "Cleveland", "Coolum Beach", "Coopers Plain", "Dalby", "Deception Bay", "Eagle Farm", "Eagleby", "Emerald", "Emundi", "Forest Lake", "Gatton", "Gladstone", "Gold Coast", "Gympie", "Helensvale", "Hervey Bay", "Ingham", "Innisfail", "Ipswich", "Jindalee", "Julatten", "Kawana Waters", "Kingaroy", "Lawnton", "Loganholme", "Mackay", "Mareeba", "Maroochydore", "Maroochydore-Mooloolaba", "Maryborough", "Miami", "Milton", "Molendinar", "Moranbah", "Morayfield", "Mossman", "Mount Glorious", "Mount Isa", "Murarrie", "Nairand Kay", "Nambour", "Nerang", "Nobby Beach", "Noosa Heads", "Noosaville", "Paddington", "Port Douglas", "Robina", "Rockhampton", "Rocklea", "Roma", "Rubyvale", "Sanctuary Cove", "Slade Point", "Southport", "Suburb", "Sunshine Coast", "Tewantin-Noosa", "The Summit", "Toowong", "Toowoomba", "Townsville", "Victoria Point", "Warwick", "Willawong", "Yatala", "Yeppoon", "Zillmere", "Carole Park"]
      },
      {
        name: "South Australia",
        cities: []
      },
      {
        name: "Tasmania",
        cities: ["Bridgewater-Gagebrook", "Burnie", "Burnie-Devonport", "Glenorchy", "Hobart", "Kingston-Blackmans Bay", "Launceston", "New Norfolk", "Rowella", "Sheffield", "Ulverstone"]
      },
      {
        name: "Victoria",
        cities: ["Albion", "Ararat", "Avenel", "Avondale Heights", "Baccus Marsh", "Bairnsdale", "Ballarat", "Balwyn", "Batman", "Bayswater", "Belmont", "Benalla", "Bendigo", "Bentleigh East", "Berwick", "Blackburn", "Blue Mountains", "Boonah", "Boronia", "Box Hill", "Brighton East", "Bundoora", "Campbellfield", "Carlton South", "Caroline Springs", "Castle Hill", "Castlemaine", "Caulfield", "Cheltenham", "Chester", "Clayton South", "Clifton Springs", "Coburg", "Colac", "Collingwood", "Craigieburn", "Cranbourne", "Crib Point", "Dandenong", "Devon Meadows", "Diamond Creek", "Doncaster East", "Doncester", "Donvale", "Echuca-Moama", "Elsternwick", "Eltham", "Fairfield", "Fitzroy", "Frnakston", "Geelong", "Glen Waverley", "Glenorchy", "Hallam", "Hamilton", "Hastings", "Healesville", "Horsham", "Hughesdale", "Ivanhoe", "Keilor", "Kensington", "Kerang", "Kilmore", "Kilsyth", "Kyabram", "Lakes Entrance", "Lalor", "Lara", "Laverton North", "Leopold", "Lower Templestowe", "Maidstone", "Malvern", "Maryborough", "Melbourne", "Melton", "Middle Park", "Mildura", "Mitcham", "Moe-Yallourn", "Moorabbin", "Mordialloc", "Morwell", "Mulgrave", "Murrumbeena", "Neerim South", "Noble Park North", "Notting Hill", "Oak Park", "Ocean Grove-Barwon Heads", "Olinda", "Pakenham", "Park Orchards", "Port Melbourne", "Portland", "Prahran", "Preston", "Pritbourne", "Queenscliff", "Reservoir", "Ringwood", "Rowville", "Sale", "Sandringham", "Scoresby", "Sebastopol", "Seymour", "Shepparton-Mooroopna", "Somerville", "South Yarra", "Southbank", "St. Albans", "St. Kilda East", "Stawell", "Sunbury", "Sunshine West", "Swan Hill", "Tatura", "Thomastown", "Thornbury", "Tongala", "Torquay", "Traralgon", "Tullamarine", "Vermont", "Wangaratta", "Wantirna", "Warragul", "Warrnambool", "Welshpool", "Wendouree", "Wonthaggi", "Woodend", "Yarrawonga-Mulwala", "Yea", "Clayton", "Camberwell", "Caulfield", "Cheltenham", "Collingwood", "Hawthorn", "Knoxfield", "Melbourne", "Templestowe", "Werribee South", "Balwyn North", "Balwyn East", "Croydon"]
      },
      {
        name: "Western Australia",
        cities: ["Perth"]
      }
    ],
    isoAlpha2: "AU",
    isoAlpha3: "AUS",
    isoNumeric: 36
  },
  {
    name: "Austria",
    flag: "🇦🇹",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Bundesland Salzburg",
        cities: []
      },
      {
        name: "Bundesland Steiermark",
        cities: []
      },
      {
        name: "Bundesland Tirol",
        cities: []
      },
      {
        name: "Burgenland",
        cities: ["Eisenstadt", "GroBpetersdorf", "Jennersdorf", "Kemeten", "Mattersburg", "Neudorfl", "Neusiedl am See", "Oberwart", "Pinkafeld", "Rust"]
      },
      {
        name: "Carinthia",
        cities: ["Maria Rain", "Poggersdorf"]
      },
      {
        name: "Karnten",
        cities: ["Althofen", "Arnoldstein", "Bad Sankt Leonhard", "Bleiburg", "Ebenthal", "Eberndorf", "Feldkirchen", "Ferlach", "Finkenstein", "Friesach", "Hermagor", "Klagenfurt", "Klagenfurt", "Lohnsburg", "Moosburg", "Paternion", "Radentheim", "Sankt Andra", "Sankt Jakob", "Sankt Veit", "Seeboden", "Spittal", "Velden am Worthersee", "Villach", "Volkermarkt", "Wernberg", "Wolfsberg"]
      },
      {
        name: "Liezen",
        cities: []
      },
      {
        name: "Lower Austria",
        cities: []
      },
      {
        name: "Niederosterreich",
        cities: ["Amstetten", "Bad Voslau", "Baden", "Berndorf", "Boheimkirchen", "Bruck an der Leitha", "Brunn", "Deutsch-Wagram", "Ebreichsdorf", "Eggendorf", "Fischamend", "Gablitz", "Ganserndorf", "Gerasdorf", "Gloggnitz", "Gmund", "Greifenstein", "GroB-Enzersdorf", "GroB-Gerungs", "Guntramsdorf", "Haag", "Hainburg", "Heidenreichstein", "Herzogenburg", "Himberg", "Hollabrunn", "Horn", "Klosterneuburg", "Korneuburg", "Kottingbrunn", "Krems", "Laa", "Langenlois", "Langenzersdorf", "Leobendorf", "Leopoldsdorf", "Lilienfeld", "Loipersdorf", "Maria Enzersdorf", "Melk", "Mistelbach", "Modling", "Neulengbach", "Neunkirchen", "Niederleis", "Ober-Grabendorf", "Perchtoldsdorf", "Pernitz", "Pottendorf", "Poysdorf", "Pressbaum", "Purgstall", "Purkersdorf", "Reichenau", "Retz", "Sankt Andra-Wordern", "Sankt Peter in der Au", "Sankt Polten", "Sankt Valentin", "Scheibbs", "Schrems", "Schwechat", "Seitenstetten", "Sollenau", "Stockerau", "Strasshof", "Ternitz", "Traiskirchen", "Traismauer", "Tulln", "Vosendorf", "Waidhofen", "Wiener Neudorf", "Wiener Neustadt", "Wieselburg", "Wilhelmsburg", "Wolkersdorf", "Ybbs", "Ybbsitz", "Zistersdorf", "Zwettl"]
      },
      {
        name: "Oberosterreich",
        cities: ["Alkoven", "Altheim", "Altmunster", "Andorf", "Ansfelden", "Asten", "Attnang-Puchheim", "Aurolzmunster", "Bad Goisern", "Bad Hall", "Bad Ischl", "Braunau", "Breitenfurt", "Ebensee", "Eferding", "Engerwitzdorf", "Enns", "Feldkirchen an der Donau", "Frankenburg", "Freistadt", "Gallneukirchen", "Garsten", "Gmunden", "Gramastetten", "Grieskirchen", "Gunskirchen", "Horsching", "Kirchdorf an der Krems", "Kremsmunster", "Krenglbach", "Laakirchen", "Lenzing", "Leonding", "Linz", "Loibichl", "Marchtrenk", "Mattighofen", "Mauthausen", "Micheldorf", "Neuhofen an der Krems", "Ohlsdorf", "Ottensheim", "Pasching", "Perg", "Pettenbach", "Pram", "Pregarten", "Puchenau", "Regau", "Ried", "Rohrbach in Oberosterreich", "Rutzenmoos", "Sankt Florian", "Sankt Georgen", "Sankt Marien", "Scharding", "Scharnstein", "Schwertberg", "Seewalchen", "Sierning", "Stadl-Paura", "Steyr", "Steyregg", "Steyrermuhl", "Thalheim", "Timelkam", "Traun", "Vocklabruck", "Vocklamarkt", "Vorchdorf", "Wels", "Wilhering"]
      },
      {
        name: "Salzburg",
        cities: ["Abtenau", "Anif", "Bad Gastein", "Bad Hofgastein", "Bergheim", "Bischofshofen", "Bruck an der GroBglocknerstraB", "Burmoos", "Elsbethen", "Eugendorf", "Forstau", "Grodig", "Hallein", "Hallwang", "Henndorf", "Kuchl", "Mayrhofen", "Mittersill", "Neumarkt", "Oberndorf", "Obertrum am See", "Piesendorf", "Puch", "Radstadt", "Saalfelden", "Salzburg", "Sankt Johann im Pongau", "Seekirchen", "Sieghartskirchen", "StraBwalchen", "Strobl", "Tamsweg", "Thalgau", "Wals-Siezenheim", "Wolfgangsee", "Zell am See"]
      },
      {
        name: "Schleswig-Holstein",
        cities: ["Albersdorf"]
      },
      {
        name: "Steiermark",
        cities: ["Bad Aussee", "Barnbach", "Bruck an der Mur", "Deutschlandsberg", "Eisenerz", "Feldbach", "Feldkirchen bei Graz", "Fohnsdorf", "Frohnleiten", "Furstenfeld", "Gleisdorf", "Gratkorn", "Graz", "Hartberg", "Judenburg", "Judendorf-StraBengel", "Kapfenberg", "Karlsdorf", "Kindberg", "Knittelfeld", "Koflach", "Krieglach", "Lannach", "Leibnitz", "Leoben", "Liezen", "Murzzuschlag", "Rottenmann", "Schladming", "Seiersberg", "Spielberg", "Trofaiach", "Voitsberg", "Wagna", "Weiz", "Zeltweg"]
      },
      {
        name: "Styria",
        cities: ["Deutschfeistritz", "Liezen", "Sankt Bartholoma"]
      },
      {
        name: "Tirol",
        cities: ["Absam", "Axams", "Ebbs", "Fugen", "Hall", "Haselgehr", "Hopfgarten", "Imst", "Innsbruck", "Jenbach", "Kirchberg", "Kirchbichl", "Kitzbuhel", "Kramsach", "Kufstein", "Landeck", "Lienz", "Matrei", "Neustift im Stubaital", "Reutte", "Rum", "Sankt Johann in Tirol", "Scheffau", "Schwaz", "St. Johann Am Walde", "Telfs", "Vols", "Vomp", "Wattens", "Worgl", "Zirl"]
      },
      {
        name: "Upper Austria",
        cities: []
      },
      {
        name: "Vorarlberg",
        cities: ["Altach", "Bludenz", "Bregenz", "Chassieu", "Dietmannsried", "Dornbirn", "Feldkirch", "Frastanz", "Gotzis", "Hard", "Hochst", "Hohenems", "Horbranz", "Hufingen", "Lauterach", "Lochau", "Lustenau", "Mittelberg", "Nenzing", "Nuziders", "Rankweil", "Schruns", "Thuringen", "Wolfurt"]
      },
      {
        name: "Wien",
        cities: ["Vienna", "Wien"]
      }
    ],
    isoAlpha2: "AT",
    isoAlpha3: "AUT",
    isoNumeric: 40
  },
  {
    name: "Azerbaijan",
    flag: "🇦🇿",
    currency: {
      code: "AZN",
      name: "Manat",
      symbol: "ман"
    },
    states: [
      {
        name: "Abseron",
        cities: ["Alat", "Artyom", "Baki", "Bakixanov", "Balaxani", "Bilacari", "Bilqax", "Bina", "Buzovna", "Haci Zeynalabdin", "Hovsan", "Lokbatan", "Mastaga", "Puta", "Qarasuxur", "Qobustan", "Rasulzada", "Sabuncu", "Sanqacal", "Sumqayit", "Suraxani", "Xirdalan", "Zirya"]
      },
      {
        name: "Baki Sahari",
        cities: []
      },
      {
        name: "Ganca",
        cities: ["Daskasan", "Ganca", "Xanlar"]
      },
      {
        name: "Ganja",
        cities: ["Ganja"]
      },
      {
        name: "Kalbacar",
        cities: ["Cabrayil", "Kalbacar", "Lacin"]
      },
      {
        name: "Lankaran",
        cities: ["Astara", "Goytapa", "Lankaran", "Masalli", "Neftcala"]
      },
      {
        name: "Mil-Qarabax",
        cities: ["Agcabadi", "Agdam", "Barda", "Mingacevir", "Tartar", "Yevlax"]
      },
      {
        name: "Mugan-Salyan",
        cities: ["Ali Bayramli", "Bilasuvar", "Calilabad", "Qarasu", "Qazimammad", "Saatli", "Sabirabad", "Salyan"]
      },
      {
        name: "Nagorni-Qarabax",
        cities: ["Susa", "Xankandi", "Xocavand"]
      },
      {
        name: "Naxcivan",
        cities: ["Culfa", "Naxcivan", "Ordubad", "Sadarak", "Sarur"]
      },
      {
        name: "Priaraks",
        cities: ["Beylaqan", "Fuzuli", "Imisli"]
      },
      {
        name: "Qazax",
        cities: ["Agstafa", "Gadabay", "Kovlar", "Qaracamirli", "Qazax", "Samkir", "Tovuz"]
      },
      {
        name: "Saki",
        cities: ["Amircan", "Balakan", "Katex", "Oguz", "Qabala", "Qax", "Saki", "Zaqatala"]
      },
      {
        name: "Sirvan",
        cities: ["Agdas", "Agsu", "Goycay", "Ismayilli", "Kurdamir", "Samaxi", "Ucar", "Zardab"]
      },
      {
        name: "Xacmaz",
        cities: ["Davaci", "Quba", "Qusar", "Siyazan", "Xacmaz", "Xudat"]
      }
    ],
    isoAlpha2: "AZ",
    isoAlpha3: "AZE",
    isoNumeric: 31
  },
  {
    name: "Bahamas",
    flag: "🇧🇸",
    currency: {
      code: "BSD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Abaco",
        cities: ["Coopers Town", "Marsh Harbour"]
      },
      {
        name: "Acklins Island",
        cities: []
      },
      {
        name: "Andros",
        cities: ["Andros Town", "Nicholls Town"]
      },
      {
        name: "Berry Islands",
        cities: []
      },
      {
        name: "Biminis",
        cities: ["Alice Town"]
      },
      {
        name: "Cat Island",
        cities: []
      },
      {
        name: "Crooked Island",
        cities: []
      },
      {
        name: "Eleuthera",
        cities: ["Freetown", "Rock Sound"]
      },
      {
        name: "Exuma and Cays",
        cities: []
      },
      {
        name: "Grand Bahama",
        cities: []
      },
      {
        name: "Inagua Islands",
        cities: []
      },
      {
        name: "Long Island",
        cities: []
      },
      {
        name: "Mayaguana",
        cities: ["Pirates Well"]
      },
      {
        name: "New Providence",
        cities: []
      },
      {
        name: "Ragged Island",
        cities: []
      },
      {
        name: "Rum Cay",
        cities: []
      },
      {
        name: "San Salvador",
        cities: []
      }
    ],
    isoAlpha2: "BS",
    isoAlpha3: "BHS",
    isoNumeric: 44
  },
  {
    name: "Bahrain",
    flag: "🇧🇭",
    currency: {
      code: "BHD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Isa",
        cities: ["Isa"]
      },
      {
        name: "Badiyah",
        cities: ["Badiyah"]
      },
      {
        name: "Hidd",
        cities: ["Hidd"]
      },
      {
        name: "Jidd Hafs",
        cities: []
      },
      {
        name: "Mahama",
        cities: ["Mahama"]
      },
      {
        name: "Manama",
        cities: ["Manama"]
      },
      {
        name: "Sitrah",
        cities: ["Sitrah"]
      },
      {
        name: "al-Manamah",
        cities: ["al-Manamah"]
      },
      {
        name: "al-Muharraq",
        cities: ["al-Muharraq"]
      },
      {
        name: "ar-Rifa''a",
        cities: ["ar-Rifa''a"]
      }
    ],
    isoAlpha2: "BH",
    isoAlpha3: "BHR",
    isoNumeric: 48
  },
  {
    name: "Bangladesh",
    flag: "🇧🇩",
    currency: {
      code: "BDT",
      name: "Taka",
      symbol: false
    },
    states: [
      {
        name: "Bagar Hat",
        cities: []
      },
      {
        name: "Bandarban",
        cities: ["Bandarban"]
      },
      {
        name: "Barguna",
        cities: ["Barguna"]
      },
      {
        name: "Barisal",
        cities: ["Barisal", "Gaurnadi", "Mehendiganj", "Nalchiti"]
      },
      {
        name: "Bhola",
        cities: ["Bhola", "Burhanuddin", "Char Fasson", "Lalmohan"]
      },
      {
        name: "Bogora",
        cities: ["Adamighi", "Bogora", "Sherpur"]
      },
      {
        name: "Brahman Bariya",
        cities: []
      },
      {
        name: "Chandpur",
        cities: ["Chandpur", "Hajiganj"]
      },
      {
        name: "Chattagam",
        cities: ["Boalkhali", "Chattagam", "Fatikchhari", "Lohagara", "Patiya", "Rangunia", "Raozan", "Sandip", "Satkaniya"]
      },
      {
        name: "Chittagong Division",
        cities: []
      },
      {
        name: "Chuadanga",
        cities: ["Alamdanga", "Chuadanga", "Damurhuda"]
      },
      {
        name: "Dhaka",
        cities: ["Dhaka", "Dhamrai", "Dohar"]
      },
      {
        name: "Dinajpur",
        cities: ["Bochanganj", "Dinajpur", "Fulbari", "Parbatipur"]
      },
      {
        name: "Faridpur",
        cities: ["Bhanga", "Char Bhadrasan", "Faridpur"]
      },
      {
        name: "Feni",
        cities: ["Chhagalnaiya", "Feni"]
      },
      {
        name: "Gaybanda",
        cities: ["Gaybanda"]
      },
      {
        name: "Gazipur",
        cities: ["Gazipur", "Tungi"]
      },
      {
        name: "Gopalganj",
        cities: ["Gopalganj", "Tungi Para"]
      },
      {
        name: "Habiganj",
        cities: ["Baniachang", "Habiganj"]
      },
      {
        name: "Jaipur Hat",
        cities: []
      },
      {
        name: "Jamalpur",
        cities: ["Jamalpur", "Sarishabari"]
      },
      {
        name: "Jessor",
        cities: ["Abhaynagar", "Jessor", "Jhikargachha", "Keshabpur"]
      },
      {
        name: "Jhalakati",
        cities: ["Jhalakati"]
      },
      {
        name: "Jhanaydah",
        cities: ["Jhanaydah", "Kaliganj", "Kotchandpur", "Shailkupa"]
      },
      {
        name: "Khagrachhari",
        cities: ["Khagrachari", "Manikchhari", "Ramgarh"]
      },
      {
        name: "Khulna",
        cities: ["Khulna", "Phultala"]
      },
      {
        name: "Kishorganj",
        cities: ["Bajitpur", "Bhairab Bazar", "Itna", "Kishorganj"]
      },
      {
        name: "Koks Bazar",
        cities: []
      },
      {
        name: "Komilla",
        cities: ["Komilla", "Laksham"]
      },
      {
        name: "Kurigram",
        cities: ["Chilmari", "Kurigram", "Nageshwari", "Ulipur"]
      },
      {
        name: "Kushtiya",
        cities: ["Bheramara", "Kushtiya"]
      },
      {
        name: "Lakshmipur",
        cities: ["Lakshmipur", "Ramganj", "Ramgati", "Raypur"]
      },
      {
        name: "Lalmanir Hat",
        cities: []
      },
      {
        name: "Madaripur",
        cities: ["Madaripur"]
      },
      {
        name: "Magura",
        cities: ["Magura"]
      },
      {
        name: "Maimansingh",
        cities: ["Bhaluka", "Fulbaria", "Gafargaon", "Ishwarganj", "Maimansingh", "Muktagachha", "Trishal"]
      },
      {
        name: "Manikganj",
        cities: ["Manikganj"]
      },
      {
        name: "Maulvi Bazar",
        cities: []
      },
      {
        name: "Meherpur",
        cities: ["Meherpur"]
      },
      {
        name: "Munshiganj",
        cities: ["Munshiganj"]
      },
      {
        name: "Naral",
        cities: ["Kalia", "Naral"]
      },
      {
        name: "Narayanganj",
        cities: ["Narayanganj", "Rupganj"]
      },
      {
        name: "Narsingdi",
        cities: ["Narsingdi", "Roypura"]
      },
      {
        name: "Nator",
        cities: ["Gurudaspur", "Nator"]
      },
      {
        name: "Naugaon",
        cities: ["Naugaon"]
      },
      {
        name: "Nawabganj",
        cities: ["Gomastapur", "Nawabganj", "Shibganj"]
      },
      {
        name: "Netrakona",
        cities: ["Netrakona"]
      },
      {
        name: "Nilphamari",
        cities: ["Domar", "Nilphamari", "Sa''idpur"]
      },
      {
        name: "Noakhali",
        cities: ["Begamganj", "Noakhali", "Senbagh"]
      },
      {
        name: "Pabna",
        cities: ["Bera", "Bhangura", "Ishurdi", "Pabna"]
      },
      {
        name: "Panchagarh",
        cities: ["Panchagarh"]
      },
      {
        name: "Patuakhali",
        cities: ["Patuakhali"]
      },
      {
        name: "Pirojpur",
        cities: ["Bhandaria", "Mathbaria", "Nesarabad", "Pirojpur"]
      },
      {
        name: "Rajbari",
        cities: ["Pangsha", "Rajbari"]
      },
      {
        name: "Rajshahi",
        cities: ["Rajshahi"]
      },
      {
        name: "Rangamati",
        cities: ["Kaptai", "Rangamati"]
      },
      {
        name: "Rangpur",
        cities: ["Badarganj", "Kaunia", "Rangpur"]
      },
      {
        name: "Satkhira",
        cities: ["Satkhira"]
      },
      {
        name: "Shariatpur",
        cities: ["Palang"]
      },
      {
        name: "Sherpur",
        cities: ["Nalitabari", "Sherpur"]
      },
      {
        name: "Silhat",
        cities: ["Silhat"]
      },
      {
        name: "Sirajganj",
        cities: ["Shahjadpur", "Sirajganj"]
      },
      {
        name: "Sunamganj",
        cities: ["Chhatak", "Sunamganj"]
      },
      {
        name: "Tangayal",
        cities: ["Gopalpur", "Mirzapur", "Sakhipur", "Tangayal"]
      },
      {
        name: "Thakurgaon",
        cities: ["Pirganj", "Thakurgaon"]
      }
    ],
    isoAlpha2: "BD",
    isoAlpha3: "BGD",
    isoNumeric: 50
  },
  {
    name: "Barbados",
    flag: "🇧🇧",
    currency: {
      code: "BBD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Christ Church",
        cities: []
      },
      {
        name: "Saint Andrew",
        cities: []
      },
      {
        name: "Saint George",
        cities: []
      },
      {
        name: "Saint James",
        cities: []
      },
      {
        name: "Saint John",
        cities: []
      },
      {
        name: "Saint Joseph",
        cities: []
      },
      {
        name: "Saint Lucy",
        cities: []
      },
      {
        name: "Saint Michael",
        cities: []
      },
      {
        name: "Saint Peter",
        cities: []
      },
      {
        name: "Saint Philip",
        cities: []
      },
      {
        name: "Saint Thomas",
        cities: []
      }
    ],
    isoAlpha2: "BB",
    isoAlpha3: "BRB",
    isoNumeric: 52
  },
  {
    name: "Belarus",
    flag: "🇧🇾",
    currency: {
      code: "BYR",
      name: "Ruble",
      symbol: "p."
    },
    states: [
      {
        name: "Brest",
        cities: ["Baranavichy", "Bjaroza", "Bjeloozersk", "Brest", "David-Haradok", "Drahichyn", "Hancavichy", "Ivacevichy", "Ivanava", "Kamjenec", "Kobryn", "Kosava", "Ljahavichy", "Luninjec", "Malaryta", "Mikashevichy", "Pinsk", "Pruzhany", "Stolin", "Vysokoje", "Zhabinka"]
      },
      {
        name: "Homjel",
        cities: ["Buda Kosheljovo", "Chechersk", "Dobrush", "Hojniki", "Homjel", "Jel''sk", "Kalinkavichy", "Kascjukovka", "Mazyr", "Narovlja", "Pjetrykav", "Rahachow", "Rechyca", "Svetlahorsk", "Vasilevichy", "Vjetka", "Zhlobin", "Zhytkavichy"]
      },
      {
        name: "Hrodna",
        cities: ["Ashmjany", "Berjozovka", "Hrodna", "Lida", "Masty", "Navahrudak", "Shchuchyn", "Skidel", "Slonim", "Smarhon", "Vawkavysk"]
      },
      {
        name: "Mahiljow",
        cities: ["Asipovichy", "Babrujsk", "Byhau", "Chausy", "Cherikov", "Horki", "Kascjukovichy", "Klimavichy", "Krychaw", "Mahiljow", "Mstislav", "Shklov", "Slaeuharad"]
      },
      {
        name: "Mahilyowskaya Voblasts",
        cities: []
      },
      {
        name: "Minsk",
        cities: ["Minsk"]
      },
      {
        name: "Minskaja Voblasts",
        cities: []
      },
      {
        name: "Petrik",
        cities: ["Petrikov"]
      },
      {
        name: "Vicebsk",
        cities: ["Baran", "Braslav", "Chashniki", "Disna", "Dokshicy", "Dubrovna", "Haradok", "Hlybokaje", "Ljepjel", "Mjory", "Navapolack", "Novalukoml", "Orsha", "Pastavy", "Polack", "Polotsk", "Senno", "Talachyn", "Verhnjadzvimsk", "Vicebsk"]
      }
    ],
    isoAlpha2: "BY",
    isoAlpha3: "BLR",
    isoNumeric: 112
  },
  {
    name: "Belgium",
    flag: "🇧🇪",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Antwerpen",
        cities: ["Aartselaar", "Antwerpen", "Arendonk", "Baarle-Hertog", "Balen", "Beerse", "Berlaar", "Boechout", "Bonheiden", "Boom", "Bornem", "Borsbeek", "Brasschaat", "Brecht", "Dessel", "Deurne", "Duffel", "Edegem", "Ekeren", "Essen", "Geel", "Geluvele", "Grobbendonk", "Heist-op-den-Berg", "Hemiksem", "Herentals", "Herenthout", "Herselt", "Hoogstraten", "Hove", "Hulshout", "Kalmpthout", "Kalmthout", "Kapellen", "Kasterlee", "Kontich", "Laakdal", "Lier", "Lille", "Lint", "Malle", "Mechelen", "Meerhout", "Merksplas", "Mol", "Mortsel", "Niel", "Nijlen", "Olen", "Oud-Turnhout", "Putte", "Puurs", "Ranst", "Ravels", "Retie", "Rijkevorsel", "Robrechts", "Rumst", "Schelle", "Schilde", "Schoten", "Sint-Amands", "Sint-Katelijne-Waver", "Stabroek", "Turnhout", "Vorselaar", "Vosselaar", "Westerlo", "Wijnegem", "Willebroek", "Wilrijk", "Wommelgem", "Wuustwezel", "Zandhoven", "Zoersel", "Zwijndrecht"]
      },
      {
        name: "Berchem",
        cities: ["Berchem"]
      },
      {
        name: "Brabant",
        cities: ["Alsemberg", "Asse Zellik", "Brussels", "Bruxelles", "Diegem"]
      },
      {
        name: "Brabant Wallon",
        cities: ["Alsemberg", "Asse Zellik", "Brussels", "Bruxelles", "Diegem"]
      },
      {
        name: "Brussel",
        cities: ["Brussel"]
      },
      {
        name: "East Flanders",
        cities: []
      },
      {
        name: "Hainaut",
        cities: ["Aiseau-Presles", "Anderlues", "Antoing", "Ath", "Beaumont", "Beloeil", "Bernissart", "Binche", "Boussu", "Braine-le-Comte", "Brugelette", "Brunehaut", "Celles", "Chapelle-lez-Herlaimont", "Charleroi", "Chatelet", "Chievres", "Chimay", "Colfontaine", "Comines-Warneton", "Courcelles", "Dour", "Ecaussinnes", "Ellezelles", "Enghien", "Erquelinnes", "Estaimpuis", "Estinnes", "Farciennes", "Fleurus", "Flobecq", "Fontaine-l''Eveque", "Frameries", "Frasnes-lez-Anvaing", "Froidchapelle", "Gerpinnes", "Haine-Saint-Pierre", "Ham-sur-Heure-Nalinnes", "Hensies", "Honnelles", "Jurbise", "La Louviere", "Le Roeulx", "Lens", "Les Bons Villers", "Lessines", "Leuze-en-Hainaut", "Lobbes", "Manage", "Merbes-le-Chateau", "Momignies", "Mons", "Mont-de-l''Enclus", "Montigny-le-Tilleul", "Morlanwelz", "Mouscron", "Pecq", "Peruwelz", "Pont-a-Celles", "Quaregnon", "Quevy", "Quievrain", "Rumes", "Saint-Ghislain", "Seneffe", "Silly", "Sivry-Rance", "Soignies", "Thuin", "Tournai"]
      },
      {
        name: "Liege",
        cities: ["Amay", "Amel", "Angleur", "Ans", "Anthisnes", "Aubel", "Awans", "Aywaille", "Baelen", "Bassenge", "Berloz", "Beyne-Heusay", "Blegny", "Braives", "Bullingen", "Burdinne", "Burg-Reuland", "Butgenbach", "Chaudfontaine", "Clavier", "Comblain-au-Pont", "Crisnee", "Dalhem", "Dison", "Donceel", "Engis", "Esneux", "Eupen", "Faimes", "Ferrieres", "Fexhe-le-Haut-Clocher", "Flemalle", "Fleron", "Geer", "Grace-Hollogne", "Hamoir", "Hannut", "Heron", "Herstal", "Herve", "Huy", "Jalhay", "Juprelle", "Kelmis", "Liege", "Lierneux", "Limbourg", "Lincent", "Lontzen", "Malmedy", "Marchin", "Modave", "Montzen", "Nandrin", "Neupre", "Olne", "Oreye", "Ouffet", "Oupeye", "Pepinster", "Plombieres", "Racour", "Raeren", "Remicourt", "Saint-Georges-sur-Meuse", "Saint-Nicolas", "Sankt Vith", "Seraing", "Soumagne", "Spa", "Sprimont", "Stavelot", "Stoumont", "Theux", "Thimister-Clermont", "Tinlot", "Trois-Ponts", "Trooz", "Verlaine", "Verviers", "Villers-le-Bouillet", "Vise", "Waimes", "Wanze", "Waremme", "Wasseiges", "Welkenraedt"]
      },
      {
        name: "Limburg",
        cities: ["Alken", "As", "Beringen", "Bilzen", "Bocholt", "Borgloon", "Bree", "Diepenbeek", "Dilsen-Stokkem", "Genk", "Gingelom", "Halen", "Ham", "Hamont-Achel", "Hasselt", "Hechtel-Eksel", "Heers", "Herk-de-Stad", "Herstappe", "Heusden-Zolder", "Hoeselt", "Houthalen-Helchteren", "Kinrooi", "Kortessem", "Kuringen", "Lanaken", "Leopoldsburg", "Lommel", "Lummen", "Maaseik", "Maasmechelen", "Meeuwen-Gruitrode", "Neerpelt", "Nieuwerkerken", "Opglabbeek", "Overpelt", "Peer", "Riemst", "Sint-Truiden", "Tessenderlo", "Tongeren", "Voeren", "Wellen", "Zonhoven", "Zutendaal"]
      },
      {
        name: "Luxembourg",
        cities: ["Arlon", "Attert", "Aubange", "Bastogne", "Bertogne", "Bertrix", "Bouillon", "Chiny", "Daverdisse", "Durbuy", "Erezee", "Etalle", "Fauvillers", "Florenville", "Gouvy", "Grapfontaine", "Habay", "Herbeumont", "Hotton", "Houffalize", "La Roche-en-Ardenne", "Leglise", "Libin", "Libramont-Chevigny", "Manhay", "Marche-en-Famenne", "Marloie", "Martelange", "Meix-devant-Virton", "Messancy", "Musson", "Nassogne", "Neufchateau", "Paliseul", "Rendeux", "Rouvroy", "Saint-Hubert", "Saint-Leger", "Sainte-Ode", "Tellin", "Tenneville", "Tintigny", "Vaux-sur-Sure", "Vielsalm", "Virton", "Wellin"]
      },
      {
        name: "Namur",
        cities: ["Andenne", "Anhee", "Assesse", "Beauraing", "Bievre", "Cerfontaine", "Ciney", "Couvin", "Dinant", "Doische", "Eghezee", "Fernelmont", "Floreffe", "Florennes", "Fosses-la-Ville", "Gedinne", "Gembloux", "Gesves", "Hamois", "Hastiere", "Havelange", "Houyet", "Jambes", "Jemeppe-sur-Sambre", "La Bruyere", "Malonne", "Mettet", "Namur", "Ohey", "Onhaye", "Philippeville", "Profondeville", "Rochefort", "Sambreville", "Sombreffe", "Somme-Leuze", "Suarlee", "Viroinval", "Vresse-sur-Semois", "Walcourt", "Yvoir"]
      },
      {
        name: "Ontario",
        cities: ["Gullegem", "Langdorp"]
      },
      {
        name: "Oost-Vlaanderen",
        cities: ["Aalst", "Aalter", "Assenede", "Berlare", "Beveren", "Brakel", "Buggenhout", "De Pinte", "Deinze", "Denderleeuw", "Dendermonde", "Destelbergen", "Drongen", "Eeklo", "Erembodegem", "Erpe-Mere", "Evergem", "Gavere", "Gent", "Geraardsbergen", "Ghent", "Haaltert", "Hamme", "Herzele", "Horebeke", "Kaprijke", "Kerksken", "Kluisbergen", "Knesselare", "Kruibeke", "Kruishoutem", "Laarne", "Lebbeke", "Lede", "Lierde", "Lochristi", "Lokeren", "Lovendegem", "Maarkedal", "Maldegem", "Melle", "Merelbeke", "Moerbeke", "Nazareth", "Nevele", "Ninove", "Oosterzele", "Oudenaarde", "Ronse", "Semmerzake", "Sint-Gillis-Waas", "Sint-Laureins", "Sint-Lievens-Houtem", "Sint-Martens-Latem", "Sint-Niklaas", "Stekene", "Temse", "Waarschoot", "Waasmunster", "Wachtebeke", "Wetteren", "Wichelen", "Wortegem-Petegem", "Zele", "Zelzate", "Zingem", "Zomergem", "Zottegem", "Zulte", "Zwalm", "Zwijnaarde"]
      },
      {
        name: "Provincie Brabant",
        cities: []
      },
      {
        name: "Vlaams-Brabant",
        cities: ["Aarschot", "Affligem", "Asse", "Beersel", "Begijnendijk", "Bekkevoort", "Bertem", "Bever", "Bierbeek", "Boortmeerbeek", "Boutersem", "Diest", "Dilbeek", "Drogenbos", "Galmaarden", "Geetbets", "Glabbeek", "Gooik", "Grimbergen", "Haacht", "Halle", "Herent", "Herne", "Hoegaarden", "Hoeilaart", "Holsbeek", "Huldenberg", "Kampenhout", "Kapelle-op-den-Bos", "Keerbergen", "Kortenaken", "Kortenberg", "Kraainem", "Landen", "Lennik", "Leuven", "Liedekerke", "Linkebeek", "Linter", "Londerzeel", "Lubbeek", "Machelen", "Meise", "Merchtem", "Opwijk", "Oud-Heverlee", "Overijse", "Pepingen", "Roosdaal", "Rotselaar", "Scherpenheuvel-Zichem", "Sint-Genesius-Rode", "Sint-Pieters-Leeuw", "Steenokkerzeel", "Ternat", "Tervuren", "Tielt-Winge", "Tienen", "Tremelo", "Vilvoorde", "Wemmel", "Wezembeek-Oppem", "Zaventem", "Zemst", "Zoutleeuw"]
      },
      {
        name: "Wallonne",
        cities: ["Callenelle", "Marcinelle", "Strepy-Bracquegnies"]
      },
      {
        name: "West-Vlaanderen",
        cities: ["Alveringem", "Anzegem", "Ardooie", "Avelgem", "Beernem", "Blankenberge", "Bredene", "Brugge", "Damme", "De Haan", "De Panne", "Deerlijk", "Dentergem", "Diksmuide", "Geluveld", "Gistel", "Harelbeke", "Heuvelland", "Hooglede", "Houthulst", "Ichtegem", "Ieper", "Ingelmunster", "Ingooigem", "Izegem", "Jabbeke", "Knokke-Heist", "Koekelare", "Koksijde", "Kortemark", "Kortrijk", "Kuurne", "Langemark-Poelkapelle", "Ledegem", "Lendelede", "Lichtervelde", "Lo-Reninge", "Menen", "Mesen", "Meulebeke", "Middelkerke", "Moorslede", "Nieuwpoort", "Oostende", "Oostkamp", "Oostrozebeke", "Oudenburg", "Pittem", "Poperinge", "Roeselare", "Ruiselede", "Spiere-Helkijn", "Staden", "Tielt", "Torhout", "Veurne", "Vleteren", "Waregem", "Wervik", "Wevelgem", "Wielsbeke", "Wingene", "Zedelgem", "Zeebrugge", "Zonnebeke", "Zuienkerke", "Zwevegem"]
      }
    ],
    isoAlpha2: "BE",
    isoAlpha3: "BEL",
    isoNumeric: 56
  },
  {
    name: "Belize",
    flag: "🇧🇿",
    currency: {
      code: "BZD",
      name: "Dollar",
      symbol: "BZ$"
    },
    states: [
      {
        name: "Belize",
        cities: ["Belize", "San Pedro"]
      },
      {
        name: "Cayo",
        cities: ["Belmopan", "Benque Viejo", "San Ignacio"]
      },
      {
        name: "Corozal",
        cities: ["Corozal"]
      },
      {
        name: "Orange Walk",
        cities: []
      },
      {
        name: "Stann Creek",
        cities: []
      },
      {
        name: "Toledo",
        cities: ["Punta Gorda"]
      }
    ],
    isoAlpha2: "BZ",
    isoAlpha3: "BLZ",
    isoNumeric: 84
  },
  {
    name: "Benin",
    flag: "🇧🇯",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Alibori",
        cities: ["Kandi", "Malanville"]
      },
      {
        name: "Atacora",
        cities: ["Batia", "Boukombe", "Kouande", "Natitingou"]
      },
      {
        name: "Atlantique",
        cities: ["Allada", "Cotonou", "Ouidah", "Tanguiete"]
      },
      {
        name: "Borgou",
        cities: ["Bembereke", "Nikki", "Parakou", "Tchaourou"]
      },
      {
        name: "Collines",
        cities: ["Dassa", "Savalou", "Save"]
      },
      {
        name: "Couffo",
        cities: ["Aplahoue", "Dogbo"]
      },
      {
        name: "Donga",
        cities: ["Djougou"]
      },
      {
        name: "Littoral",
        cities: ["Cotonou"]
      },
      {
        name: "Mono",
        cities: ["Athieme", "Come", "Grand Popo", "Lokossa"]
      },
      {
        name: "Oueme",
        cities: ["Adjohoun", "Porto Novo"]
      },
      {
        name: "Plateau",
        cities: ["Ketou", "Pobe", "Sakete"]
      },
      {
        name: "Zou",
        cities: ["Abomey", "Bohicon", "Cove", "Zagnanado"]
      }
    ],
    isoAlpha2: "BJ",
    isoAlpha3: "BEN",
    isoNumeric: 204
  },
  {
    name: "Bermuda",
    flag: "🇧🇲",
    currency: {
      code: "BMD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Hamilton",
        cities: ["Hamilton"]
      },
      {
        name: "Saint George",
        cities: []
      }
    ],
    isoAlpha2: "BM",
    isoAlpha3: "BMU",
    isoNumeric: 60
  },
  {
    name: "Bhutan",
    flag: "🇧🇹",
    currency: {
      code: "BTN",
      name: "Ngultrum",
      symbol: false
    },
    states: [
      {
        name: "Bumthang",
        cities: ["Jakar"]
      },
      {
        name: "Chhukha",
        cities: ["Chhukha", "Phuentsholing"]
      },
      {
        name: "Chirang",
        cities: ["Damphu"]
      },
      {
        name: "Daga",
        cities: ["Taga Dzong"]
      },
      {
        name: "Geylegphug",
        cities: ["Geylegphug"]
      },
      {
        name: "Ha",
        cities: ["Ha"]
      },
      {
        name: "Lhuntshi",
        cities: ["Lhuntshi"]
      },
      {
        name: "Mongar",
        cities: ["Mongar"]
      },
      {
        name: "Pemagatsel",
        cities: ["Pemagatsel"]
      },
      {
        name: "Punakha",
        cities: ["Gasa", "Punakha"]
      },
      {
        name: "Rinpung",
        cities: ["Paro"]
      },
      {
        name: "Samchi",
        cities: ["Phuntsholing", "Samchi"]
      },
      {
        name: "Samdrup Jongkhar",
        cities: []
      },
      {
        name: "Shemgang",
        cities: ["Shemgang"]
      },
      {
        name: "Tashigang",
        cities: ["Tashigang"]
      },
      {
        name: "Timphu",
        cities: ["Thimphu", "Timphu"]
      },
      {
        name: "Tongsa",
        cities: ["Tongsa"]
      },
      {
        name: "Wangdiphodrang",
        cities: ["Wangdiphodrang"]
      }
    ],
    isoAlpha2: "BT",
    isoAlpha3: "BTN",
    isoNumeric: 64
  },
  {
    name: "Bolivia",
    flag: "🇧🇴",
    currency: {
      code: "BOB"
    },
    states: [
      {
        name: "Beni",
        cities: ["Guayaramerin", "Magdalena", "Reyes", "Riberalta", "Rurrenabaque", "San Borja", "San Ignacio", "San Ramon", "Santa Ana", "Santa Rosa", "Trinidad"]
      },
      {
        name: "Chuquisaca",
        cities: ["Camargo", "Monteagudo", "Muyupampa", "Padilla", "Sucre", "Tarabuco", "Villa Serano"]
      },
      {
        name: "Cochabamba",
        cities: ["Aiquile", "Arani", "Capinota", "Chimore", "Cliza", "Cochabamba", "Colomi", "Entre Rios", "Irpa Irpa", "Ivirgarzama", "Mizque", "Punata", "Shinahota", "Sipe Sipe", "Tarata", "Ucurena"]
      },
      {
        name: "La Paz",
        cities: []
      },
      {
        name: "Oruro",
        cities: ["Caracollo", "Challapata", "Eucaliptus", "Huanuni", "Machacamarca", "Oruro", "Poopo", "Santiago de Huari", "Totoral"]
      },
      {
        name: "Pando",
        cities: ["Cobija"]
      },
      {
        name: "Potosi",
        cities: ["Atocha", "Betanzos", "Colquechaca", "Llallagua", "Potosi", "Santa Barbara", "Tupiza", "Uncia", "Uyuni", "Villazon"]
      },
      {
        name: "Santa Cruz",
        cities: []
      },
      {
        name: "Tarija",
        cities: ["Bermejo", "Entre Rios", "San Lorenzo", "Tarija", "Villamontes", "Yacuiba"]
      }
    ]
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "🇧🇦",
    currency: {
      code: "BAM",
      name: "Marka",
      symbol: "KM"
    },
    states: [
      {
        name: "Federacija Bosna i Hercegovina",
        cities: []
      },
      {
        name: "Republika Srpska",
        cities: []
      }
    ],
    isoAlpha2: "BA",
    isoAlpha3: "BIH",
    isoNumeric: 70
  },
  {
    name: "Botswana",
    flag: "🇧🇼",
    currency: {
      code: "BWP",
      name: "Pula",
      symbol: "P"
    },
    states: [
      {
        name: "Central Bobonong",
        cities: []
      },
      {
        name: "Central Boteti",
        cities: []
      },
      {
        name: "Central Mahalapye",
        cities: []
      },
      {
        name: "Central Serowe-Palapye",
        cities: []
      },
      {
        name: "Central Tutume",
        cities: []
      },
      {
        name: "Chobe",
        cities: ["Kachikau", "Kasane", "Kavimba", "Kazungula", "Lesoma", "Muchinje-Mabale", "Pandamatenga", "Pandamatenga Botswana Defence", "Parakarungu", "Satau"]
      },
      {
        name: "Francistown",
        cities: ["Francistown"]
      },
      {
        name: "Gaborone",
        cities: ["Gaborone"]
      },
      {
        name: "Ghanzi",
        cities: ["Bere", "Charles Hill", "Chobokwane", "Dekar", "East Hanahai", "Ghanzi", "Groote Laagte", "Kacgae", "Karakobis", "Kuke Quarantine Camp", "Kule", "Makunda", "Ncojane", "New Xade", "New Xanagas", "Qabo", "Tsootsha", "West Hanahai"]
      },
      {
        name: "Jwaneng",
        cities: ["Jwaneng"]
      },
      {
        name: "Kgalagadi North",
        cities: []
      },
      {
        name: "Kgalagadi South",
        cities: []
      },
      {
        name: "Kgatleng",
        cities: ["Artisia", "Bokaa", "Dikgonye", "Dikwididi", "Kgomodiatshaba", "Khurutshe", "Leshibitse", "Mabalane", "Malolwane", "Malotwana Siding", "Matebeleng", "Mmamashia", "Mmathubudukwane", "Mochudi", "Modipane", "Morwa", "Oliphants Drift", "Oodi", "Pilane", "Ramonaka", "Ramotlabaki", "Rasesa", "Sikwane"]
      },
      {
        name: "Kweneng",
        cities: ["Boatlaname", "Botlhapatlou", "Diagane", "Diphudugodu", "Diremogolo Lands", "Ditshegwane", "Ditshukudu", "Dumadumane", "Dutlwe", "Gabane", "Gakgatla", "Gakuto", "Galekgatshwane", "Gamodubu", "Gaphatshwa", "Hatsalatladi", "Kamenakwe", "Kaudwane", "Kgaphamadi", "Kgope", "Khekhenya-Chepetese", "Khudumelapye", "Kopong", "Kotolaname", "Kubung", "Kumakwane", "Kweneng", "Lentsweletau", "Lephepe", "Lesirane", "Letlhakeng", "Losilakgokong", "Maboane", "Mahetlwe", "Makabanyane-Dikgokong", "Malwelwe", "Mamhiko", "Manaledi", "Mantshwabisi", "Marejwane", "Masebele", "Medie", "Metsibotlhoko", "Metsimotlhaba", "Mmakanke", "Mmankgodi", "Mmanoko", "Mmokolodi", "Mmopane", "Mmopane Lands", "Mogoditshane", "Mogoditshane Botswana Defence", "Mogoditshane Lands", "Mogonono", "Molepolole", "Mononyane", "Monwane", "Morabane", "Morope", "Moshaweng", "Mosokotswe", "Motokwe", "Ngware", "Nkoyaphiri", "Ramaphatlhe", "Salajwe", "Serinane", "Sesung", "Shadishadi", "Sojwe", "Sorilatholo", "Suping", "Takatokwane", "Thamaga", "Thebephatshwa", "Tlowaneng", "Tsetseng", "Tswaane"]
      },
      {
        name: "Lobatse",
        cities: ["Lobatse"]
      },
      {
        name: "Ngamiland",
        cities: ["Bodibeng", "Boro", "Botlhatlogo", "Chanoga", "Chuchubega", "Daonara", "Ditshiping", "Habu", "Jao", "Kareng", "Katamaga", "Kgakge", "Khwai Camp", "Komana", "Legotlhwana", "Mababe", "Makalamabedi", "Matlapana", "Matsaudi", "Mawana", "Mokgalo-Haka", "Morutsha", "Nxharaga", "Phuduhudu", "Samodupi", "Sankuyo", "Sehithwa", "Semboyo", "Sexaxa", "Shakawe", "Shorobe", "Somela", "Toteng", "Tsanekona", "Tsao", "Xaxaba", "Xhobe"]
      },
      {
        name: "Ngwaketse",
        cities: ["Bethel", "Borobadilepe", "Diabo", "Digawana", "Dikhukhung", "Dinatshana", "Dipotsana", "Ditlharapa", "Gamajalela", "Gasita", "Gathwane", "Good Hope", "Goora-seno", "Gopong", "Hebron", "Itholoke", "Kanaku", "Kangwe", "Kanye", "Keng", "Kgomokasitwa", "Kgoro", "Khakhea", "Khonkhwa", "Kokong", "Lehoko", "Lejwana", "Lekgolobotlo", "Leporung", "Logagane", "Lorolwana", "Lorwana", "Lotlhakane", "Lotlhakane West", "Mabule", "Mabutsane", "Madingwana", "Magoriapitse", "Magotlhawane", "Mahotshwane", "Maisane", "Makokwe", "Malokaganyane", "Manyana", "Maokane", "Marojane", "Maruswa", "Metlobo", "Metlojane", "Mmakgori", "Mmathethe", "Mogojogojo", "Mogonye", "Mogwalale", "Mokatako", "Mokgomane", "Mokhomba", "Molapowabojang", "Molete", "Morwamosu", "Moshaneng", "Moshupa", "Motlhwatse", "Motsentshe", "Musi", "Ngwatsau", "Ntlhantlhe", "Papatlo", "Phihitshwane", "Pitsana-Potokwe", "Pitsane", "Pitseng-Ralekgetho", "Pitshane Molopo", "Rakhuna", "Ralekgetho", "Ramatlabama", "Ranaka", "Sedibeng", "Segakwana", "Segwagwa", "Seherelela", "Sekhutlane", "Sekoma", "Selokolela", "Semane", "Sese", "Sesung", "Sheep Farm", "Tlhankane", "Tlhareseleele", "Tshidilamolomo", "Tshwaane", "Tsonyane", "Tswaaneng", "Tswagare-Lothoje-Lokalana", "Tswanyaneng"]
      },
      {
        name: "North East",
        cities: []
      },
      {
        name: "Okavango",
        cities: ["Beetsha", "Eretsha", "Etsha 1", "Etsha 13", "Etsha 6", "Etsha 8", "Etsha 9", "Gane", "Gonutsuga", "Gowe", "Gudingwa", "Gumare", "Ikoga", "Kajaja", "Kapotora Lands", "Kauxwhi", "Matswee", "Maun", "Moaha", "Mohembo East", "Mohembo West", "Mokgacha", "Ngarange", "Nokaneng", "Nxamasere", "Nxaunxau", "Nxwee", "Qangwa", "Roye", "Samochema", "Sekondomboro", "Sepopa", "Seronga", "Shaowe", "Tobere Lands", "Tubu", "Tubu Lands", "Xadau", "Xakao", "Xaxa", "Xhauga", "Xurube"]
      },
      {
        name: "Orapa",
        cities: ["Orapa"]
      },
      {
        name: "Selibe Phikwe",
        cities: []
      },
      {
        name: "South East",
        cities: []
      },
      {
        name: "Sowa",
        cities: ["Sowa"]
      }
    ],
    isoAlpha2: "BW",
    isoAlpha3: "BWA",
    isoNumeric: 72
  },
  {
    name: "Bouvet Island",
    flag: "🇧🇻",
    currency: {
      code: "NOK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Bouvet Island",
        cities: []
      }
    ],
    isoAlpha2: "BV",
    isoAlpha3: "BVT",
    isoNumeric: 74
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    currency: {
      code: "BRL",
      name: "Real",
      symbol: "R$"
    },
    states: [
      {
        name: "Acre",
        cities: ["Acrelandia", "Brasileia", "Cruzeiro do Sul", "Epitaciolandia", "Feijo", "Mancio Lima", "Manoel Urbano", "Marechal Thaumaturgo", "Placido de Castro", "Porto Walter", "Rio Branco", "Rodrigues Alves", "Sena Madureira", "Senador Guiomard", "Tarauaca", "Xapuri"]
      },
      {
        name: "Alagoas",
        cities: ["Agua Branca", "Anadia", "Arapiraca", "Atalaia", "Barra de Santo Antonio", "Batalha", "Boca da Mata", "Cacimbinhas", "Cajueiro", "Campo Alegre", "Campo Grande", "Canapi", "Capela", "Coite do Noia", "Colonia Leopoldina", "Coruripe", "Craibas", "Delmiro Gouveia", "Dois Riachos", "Estrela de Alagoas", "Feira Grande", "Flexeiras", "Girau do Ponciano", "Ibateguara", "Igaci", "Igreja Nova", "Inhapi", "Joaquim Gomes", "Jundia", "Junqueiro", "Lagoa da Canoa", "Limoeiro de Anadia", "Maceio", "Major Isidoro", "Maragogi", "Maravilha", "Marechal Deodoro", "Maribondo", "Mata Grande", "Matriz de Camaragibe", "Messias", "Minador do Negrao", "Murici", "Novo Lino", "Olho d''Agua das Flores", "Olivenca", "Palmeira dos Indios", "Pao de Acucar", "Passo de Camaragibe", "Penedo", "Piacabucu", "Pilar", "Piranhas", "Poco das Trincheiras", "Porto Calvo", "Porto Real do Colegio", "Quebrangulo", "Rio Largo", "Santana do Ipanema", "Santana do Mundau", "Sao Jose da Laje", "Sao Jose da Tapera", "Sao Luis do Quitunde", "Sao Miguel dos Campos", "Sao Sebastiao", "Satuba", "Senador Rui Palmeira", "Taquarana", "Teotonio Vilela", "Traipu", "Uniao dos Palmares", "Vicosa"]
      },
      {
        name: "Amapa",
        cities: ["Amapa", "Laranjal do Jari", "Macapa", "Mazagao", "Oiapoque", "Santana"]
      },
      {
        name: "Amazonas",
        cities: ["Alvaraes", "Anori", "Apui", "Autazes", "Barcelos", "Barreirinha", "Benjamin Constant", "Boca do Acre", "Borba", "Canutama", "Carauari", "Careiro", "Careiro da Varzea", "Coari", "Codajas", "Eirunepe", "Envira", "Fonte Boa", "Guajara", "Humaita", "Ipixuna", "Iranduba", "Itacoatiara", "Japura", "Jutai", "Labrea", "Manacapuru", "Manaquiri", "Manaus", "Manicore", "Maraa", "Maues", "Nhamunda", "Nova Olinda do Norte", "Novo Airao", "Novo Aripuana", "Parintins", "Pauini", "Rio Preto da Eva", "Santa Isabel do Rio Negro", "Santo Antonio do Ica", "Sao Gabriel da Cachoeira", "Sao Paulo de Olivenca", "Tabatinga", "Tapaua", "Tefe", "Tonantins", "Uarini", "Urucara", "Urucurituba"]
      },
      {
        name: "Bahia",
        cities: ["Acajutiba", "Alagoinhas", "Amargosa", "Amelia Rodrigues", "America Dourada", "Anage", "Araci", "Aurelino Leal", "Baixa Grande", "Barra", "Barra da Estiva", "Barra do Choca", "Barreiras", "Belmonte", "Boa Vista do Tupim", "Bom Jesus da Lapa", "Boquira", "Brumado", "Buerarema", "Cachoeira", "Cacule", "Caetite", "Cafarnaum", "Camacan", "Camacari", "Camamu", "Campo Alegre de Lourdes", "Campo Formoso", "Canarana", "Canavieiras", "Candeias", "Candido Sales", "Cansancao", "Capim Grosso", "Caravelas", "Carinhanha", "Casa Nova", "Castro Alves", "Catu", "Cicero Dantas", "Cipo", "Coaraci", "Conceicao da Feira", "Conceicao do Almeida", "Conceicao do Coite", "Conceicao do Jacuipe", "Conde", "Coracao de Maria", "Coronel Joao Sa", "Correntina", "Cruz das Almas", "Curaca", "Dias d''Avila", "Encruzilhada", "Entre Rios", "Esplanada", "Euclides da Cunha", "Eunapolis", "Feira de Santana", "Filadelfia", "Formosa do Rio Preto", "Gandu", "Guanambi", "Guaratinga", "Iacu", "Ibicarai", "Ibicui", "Ibirapitanga", "Ibirataia", "Ibotirama", "Iguai", "Ilheus", "Inhambupe", "Ipiau", "Ipira", "Iraquara", "Irara", "Irece", "Itabela", "Itaberaba", "Itabuna", "Itacare", "Itagi", "Itagiba", "Itajuipe", "Itamaraju", "Itambe", "Itanhem", "Itaparica", "Itapetinga", "Itapicuru", "Itarantim", "Itirucu", "Itiuba", "Itororo", "Ituacu", "Itubera", "Jacobina", "Jaguaquara", "Jaguarari", "Jequie", "Jeremoabo", "Jitauna", "Joao Dourado", "Juazeiro", "Jussara", "Laje", "Lapao", "Lauro de Freitas", "Livramento", "Macarani", "Macaubas", "Madre de Deus", "Mairi", "Maracas", "Maragogipe", "Marau", "Mascote", "Mata de Sao Joao", "Medeiros Neto", "Miguel Calmon", "Milagres", "Monte Santo", "Morro de Chapeu", "Mucuri", "Mundo Novo", "Muritiba", "Mutuipe", "Nazare", "Nova Soure", "Nova Vicosa", "Olindina", "Oliveira dos Brejinhos", "Palmas de Monte Alto", "Paramirim", "Paratinga", "Paripiranga", "Pau Brasil", "Paulo Afonso", "Pilao Arcado", "Pindobacu", "Piritiba", "Planalto", "Pocoes", "Pojuca", "Ponto Novo", "Porto Seguro", "Prado", "Presidente Tancredo Neves", "Queimadas", "Quijingue", "Rafael Jambeiro", "Remanso", "Riachao das Neves", "Riachao do Jacuipe", "Riacho de Santana", "Ribeira do Pombal", "Rio Real", "Ruy Barbosa", "Salvador", "Santa Cruz Cabralia", "Santa Ines", "Santa Maria da Vitoria", "Santa Rita de Cassia", "Santaluz", "Santana", "Santo Amaro", "Santo Antonio de Jesus", "Santo Estevao", "Sao Desiderio", "Sao Felipe", "Sao Francisco do Conde", "Sao Gabriel", "Sao Goncalo dos Campos", "Sao Sebastiao do Passe", "Saubara", "Seabra", "Senhor do Bonfim", "Sento Se", "Serra Dourada", "Serra do Ramalho", "Serrinha", "Simoes Filho", "Sobradinho", "Souto Soares", "Tanhacu", "Taperoa", "Tapiramuta", "Teixeira de Freitas", "Teofilandia", "Terra Nova", "Tremedal", "Tucano", "Uaua", "Ubaira", "Ubaitaba", "Ubata", "Una", "Urucuca", "Utinga", "Valenca", "Valente", "Vera Cruz", "Vitoria da Conquista", "Wenceslau Guimaraes", "Xique-Xique"]
      },
      {
        name: "Ceara",
        cities: ["Acarau", "Acopiara", "Amontada", "Aquiraz", "Aracati", "Aracoiaba", "Araripe", "Assare", "Aurora", "Barbalha", "Barro", "Barroquinha", "Baturite", "Beberibe", "Bela Cruz", "Boa Viagem", "Brejo Santo", "Camocim", "Campos Sales", "Caninde", "Carire", "Caririacu", "Cascavel", "Caucaia", "Cedro", "Chorozinho", "Coreau", "Crateus", "Crato", "Cruz", "Eusebio", "Farias Brito", "Forquilha", "Fortaleza", "Granja", "Guaiuba", "Guaraciaba do Norte", "Hidrolandia", "Horizonte", "Ibiapina", "Ico", "Iguatu", "Independencia", "Ipu", "Ipueiras", "Iraucuba", "Itaitinga", "Itapage", "Itapipoca", "Itarema", "Jaguaribe", "Jaguaruana", "Jardim", "Juazeiro do Norte", "Jucas", "Lavras da Mangabeira", "Limoeiro do Norte", "Maracanau", "Maranguape", "Marco", "Massape", "Mauriti", "Milagres", "Missao Velha", "Mombaca", "Morada Nova", "Nova Russas", "Novo Oriente", "Ocara", "Oros", "Pacajus", "Pacatuba", "Paracuru", "Paraipaba", "Parambu", "Pedra Branca", "Pentecoste", "Quixada", "Quixeramobim", "Quixere", "Redencao", "Reriutaba", "Russas", "Santa Quiteria", "Santana do Acarau", "Sao Benedito", "Sao Goncalo do Amarante", "Senador Pompeu", "Sobral", "Tabuleiro do Norte", "Tamboril", "Taua", "Tiangua", "Trairi", "Ubajara", "Umirim", "Uruburetama", "Varjota", "Varzea Alegre", "Vicosa do Ceara"]
      },
      {
        name: "Distrito Federal",
        cities: []
      },
      {
        name: "Espirito Santo",
        cities: []
      },
      {
        name: "Estado de Sao Paulo",
        cities: []
      },
      {
        name: "Goias",
        cities: ["Abadiania", "Acreuna", "Aguas Lindas de Goias", "Alexania", "Anapolis", "Anicuns", "Aparecida de Goiania", "Aragarcas", "Bela Vista de Goias", "Bom Jesus de Goias", "Buriti Alegre", "Cacu", "Caiaponia", "Caldas Novas", "Campos Belos", "Campos Verdes", "Carmo do Rio Verde", "Catalao", "Cavalcante", "Ceres", "Cidade Ocidental", "Cocalzinho de Coias", "Cristalina", "Crixas", "Doverlandia", "Edeia", "Firminopolis", "Formosa", "Goianapolis", "Goianesia", "Goiania", "Goianira", "Goias", "Goiatuba", "Guapo", "Hidrolandia", "Iaciara", "Indiara", "Inhumas", "Ipameri", "Ipora", "Itaberai", "Itapaci", "Itapirapua", "Itapuranga", "Itumbiara", "Jaragua", "Jatai", "Jussara", "Luziania", "Mara Rosa", "Minacu", "Mineiros", "Morrinhos", "Mozarlandia", "Neropolis", "Niquelandia", "Nova Crixas", "Novo Gama", "Orizona", "Padre Bernardo", "Palmeiras de Goias", "Parauna", "Petrolina de Goias", "Piracanjuba", "Piranhas", "Pirenopolis", "Pires do Rio", "Planaltina", "Pontalina", "Porangatu", "Posse", "Quirinopolis", "Rialma", "Rio Verde", "Rubiataba", "Santa Helena de Goias", "Santa Terezinha de Goias", "Santo Antonio do Descoberto", "Sao Domingos", "Sao Luis de Montes Belos", "Sao Miguel do Araguaia", "Sao Simao", "Senador Canedo", "Silvania", "Trindade", "Uruacu", "Uruana", "Valparaiso de Goias", "Vianopolis"]
      },
      {
        name: "Maranhao",
        cities: ["Acailandia", "Alcantara", "Aldeias Altas", "Alto Alegre do Pindare", "Amarante do Maranhao", "Anajatuba", "Araioses", "Arame", "Arari", "Bacabal", "Balsas", "Barra do Corda", "Barreirinhas", "Bequimao", "Bom Jardim", "Brejo", "Buriti", "Buriti Bravo", "Buriticupu", "Candido Mendes", "Cantanhede", "Carolina", "Carutapera", "Caxias", "Chapadinha", "Codo", "Coelho Neto", "Colinas", "Coroata", "Cururupu", "Davinopolis", "Dom Pedro", "Esperantinopolis", "Estreito", "Fortuna", "Godofredo Viana", "Governador Eugenio Barros", "Governador Nunes Freire", "Grajau", "Humberto de Campos", "Icatu", "Imperatriz", "Itapecuru Mirim", "Itinga do Maranhao", "Joao Lisboa", "Lago da Pedra", "Lago do Junco", "Maracacume", "Matinha", "Matoes", "Mirador", "Miranda do Norte", "Moncao", "Montes Altos", "Morros", "Nova Olinda do Maranhao", "Olho d''Agua das Cunhas", "Paco do Lumiar", "Paraibano", "Parnarama", "Passagem Franca", "Pastos Bons", "Paulo Ramos", "Pedreiras", "Penalva", "Pindare Mirim", "Pinheiro", "Pio XII", "Pirapemas", "Pocao de Pedras", "Porto Franco", "Presidente Dutra", "Raposa", "Riachao", "Rosario", "Santa Helena", "Santa Ines", "Santa Luzia", "Santa Luzia do Parua", "Santa Quiteria do Maranhao", "Santa Rita", "Sao Benedito do Rio Preto", "Sao Bento", "Sao Bernardo", "Sao Domingos do Maranhao", "Sao Joao Batista", "Sao Joao dos Patos", "Sao Jose de Ribamar", "Sao Luis", "Sao Luis Gonzaga do Maranhao", "Sao Mateus do Maranhao", "Sao Pedro da Agua Branca", "Sao Raimundo das Mangabeiras", "Timbiras", "Timon", "Trizidela do Vale", "Tuntum", "Turiacu", "Tutoia", "Urbano Santos", "Vargem Grande", "Viana", "Vitoria do Mearim", "Vitorino Freire", "Ze Doca"]
      },
      {
        name: "Mato Grosso",
        cities: []
      },
      {
        name: "Mato Grosso do Sul",
        cities: []
      },
      {
        name: "Minas Gerais",
        cities: []
      },
      {
        name: "Para",
        cities: ["Abaetetuba", "Acara", "Afua", "Agua Azul do Norte", "Alenquer", "Almeirim", "Altamira", "Ananindeua", "Augusto Correa", "Baiao", "Barcarena", "Belem", "Benevides", "Braganca", "Breu Branco", "Breves", "Bujaru", "Cameta", "Capanema", "Capitao Poco", "Castanhal", "Conceicao do Araguaia", "Concordia do Para", "Curionopolis", "Curuca", "Dom Eliseu", "Eldorado dos Carajas", "Garrafao do Norte", "Goianesia do Para", "Gurupa", "Igarape-Acu", "Igarape-Miri", "Irituia", "Itaituba", "Itupiranga", "Jacareacanga", "Jacunda", "Juruti", "Limoeiro do Ajuru", "Mae do Rio", "Maraba", "Maracana", "Marapanim", "Marituba", "Medicilandia", "Mocajuba", "Moju", "Monte Alegre", "Muana", "Novo Progresso", "Novo Repartimento", "Obidos", "Oeiras do Para", "Oriximina", "Ourem", "Ourilandia", "Pacaja", "Paragominas", "Parauapebas", "Portel", "Porto de Moz", "Prainha", "Redencao", "Rio Maria", "Rondon do Para", "Ruropolis", "Salinopolis", "Santa Isabel do Para", "Santa Luzia do Para", "Santa Maria do Para", "Santana do Araguaia", "Santarem", "Santo Antonio do Taua", "Sao Caetano de Odivelas", "Sao Domingos do Araguaia", "Sao Domingos do Capim", "Sao Felix do Xingu", "Sao Geraldo do Araguaia", "Sao Joao de Pirabas", "Sao Miguel do Guama", "Senador Jose Porfirio", "Soure", "Tailandia", "Terra Santa", "Tome-Acu", "Tucuma", "Tucurui", "Ulianopolis", "Uruara", "Vigia", "Viseu", "Xinguara"]
      },
      {
        name: "Paraiba",
        cities: ["Alagoa Grande", "Alagoa Nova", "Alagoinha", "Alhandra", "Aracagi", "Arara", "Araruna", "Areia", "Aroeiras", "Bananeiras", "Barra de Santa Rosa", "Bayeux", "Belem", "Boqueirao", "Brejo do Cruz", "Caapora", "Cabedelo", "Cacimba de Dentro", "Cajazeiras", "Campina Grande", "Catole do Rocha", "Conceicao", "Conde", "Coremas", "Cruz do Espirito Santo", "Cuite", "Desterro", "Dona Ines", "Esperanca", "Fagundes", "Guarabira", "Gurinhem", "Imaculada", "Inga", "Itabaiana", "Itaporanga", "Itapororoca", "Itatuba", "Jacarau", "Joao Pessoa", "Juazeirinho", "Juripiranga", "Juru", "Lagoa Seca", "Mamanguape", "Manaira", "Mari", "Massaranduba", "Mogeiro", "Monteiro", "Mulungu", "Natuba", "Nova Floresta", "Patos", "Paulista", "Pedras de Fogo", "Pianco", "Picui", "Pilar", "Pirpirituba", "Pitimbu", "Pocinhos", "Pombal", "Princesa Isabel", "Puxinana", "Queimadas", "Remigio", "Rio Tinto", "Salgado de Sao Felix", "Santa Luzia", "Santa Rita", "Sao Bento", "Sao Joao do Rio do Peixe", "Sao Jose de Piranhas", "Sao Sebastiao de Lagoa de Roca", "Sape", "Serra Branca", "Solanea", "Soledade", "Sousa", "Sume", "Taperoa", "Tavares", "Teixeira", "Triunfo", "Uirauna", "Umbuzeiro"]
      },
      {
        name: "Parana",
        cities: ["Almirante Tamandare", "Alto Parana", "Alto Piquiri", "Altonia", "Ampere", "Andira", "Antonina", "Apucarana", "Arapongas", "Arapoti", "Araucaria", "Assai", "Assis Chateaubriand", "Astorga", "Bandeirantes", "Barbosa Ferraz", "Bela Vista do Paraiso", "Cambara", "Cambe", "Campina Grande do Sul", "Campina da Lagoa", "Campo Largo", "Campo Murao", "Candido de Abreu", "Capitao Leonidas Marques", "Carambei", "Cascavel", "Castro", "Centenario do Sul", "Chopinzinho", "Cianorte", "Clevelandia", "Colombo", "Colorado", "Contenda", "Corbelia", "Cornelio Procopio", "Coronel Vivida", "Cruzeiro do Oeste", "Curitiba", "Dois Vizinhos", "Engenheiro Beltrao", "Faxinal", "Fazenda Rio Grande", "Florestopolis", "Foz do Iguacu", "Francisco Beltrao", "Goioere", "Guaira", "Guaraniacu", "Guarapuava", "Guaratuba", "Ibaiti", "Ibipora", "Imbituva", "Ipora", "Irati", "Itaperucu", "Ivaipora", "Jacarezinho", "Jaguariaiva", "Jandaia do Sul", "Jataizinho", "Lapa", "Laranjeiras do Sul", "Loanda", "Londrina", "Mandaguacu", "Mandaguari", "Marechal Candido Rondon", "Marialva", "Maringa", "Matelandia", "Matinhos", "Medianeira", "Moreira Sales", "Nova Aurora", "Nova Esperanca", "Nova Londrina", "Ortigueira", "Paicandu", "Palmas", "Palmeira", "Palotina", "Paranagua", "Paranavai", "Pato Branco", "Peabiru", "Pinhais", "Pinhao", "Pirai do Sul", "Piraquara", "Pitanga", "Ponta Grossa", "Pontal do Parana", "Porecatu", "Primero de Maio", "Prudentopolis", "Quatro Barras", "Quedas do Iguacu", "Realeza", "Reserva", "Ribeirao do Pinhal", "Rio Branco do Sul", "Rio Negro", "Rolandia", "Santa Helena", "Santa Terezinha de Itaipu", "Santo Antonio da Platina", "Santo Antonio do Sudoeste", "Sao Joao do Ivai", "Sao Jose dos Pinhais", "Sao Mateus do Sul", "Sao Miguel do Iguacu", "Sarandi", "Senges", "Sertanopolis", "Siquera Campos", "Tapejara", "Telemaco Borba", "Terra Boa", "Terra Rica", "Terra Roxa", "Tibagi", "Toledo", "Ubirata", "Umuarama", "Uniao da Victoria", "Wenceslau Braz"]
      },
      {
        name: "Pernambuco",
        cities: ["Abreu e Lima", "Afogados da Ingazeira", "Agrestina", "Agua Preta", "Aguas Belas", "Alianca", "Altinho", "Amaraji", "Aracoiaba", "Araripina", "Arcoverde", "Barra de Guabiraba", "Barreiros", "Belem de Sao Francisco", "Belo Jardim", "Bezerros", "Bodoco", "Bom Conselho", "Bom Jardim", "Bonito", "Brejo da Madre de Deus", "Buique", "Cabo de Santo Agostinho", "Cabrobo", "Cachoeirinha", "Caetes", "Camaragibe", "Camocim de Sao Felix", "Canhotinho", "Capoeiras", "Carnaiba", "Carpina", "Caruaru", "Catende", "Cha Grande", "Condado", "Cumaru", "Cupira", "Custodia", "Escada", "Exu", "Feira Nova", "Fernando de Noronha", "Flores", "Floresta", "Gameleira", "Garanhuns", "Gloria do Goita", "Goiana", "Gravata", "Ibimirim", "Igarassu", "Inaja", "Ipojuca", "Ipubi", "Itaiba", "Itamaraca", "Itambe", "Itapissuma", "Itaquitinga", "Jaboatao", "Joao Alfredo", "Joaquim Nabuco", "Lagoa do Itaenga", "Lajedo", "Limoeiro", "Macaparana", "Maraial", "Moreno", "Nazare da Mata", "Olinda", "Orobo", "Ouricuri", "Palmares", "Panelas", "Parnamirim", "Passira", "Paudalho", "Paulista", "Pedra", "Pesqueira", "Petrolandia", "Petrolina", "Pombos", "Quipapa", "Recife", "Ribeirao", "Rio Formoso", "Salgueiro", "Santa Cruz do Capibaribe", "Santa Maria da Boa Vista", "Sao Bento do Una", "Sao Caitano", "Sao Joao", "Sao Joaquim do Monte", "Sao Jose da Coroa Grande", "Sao Jose do Belmonte", "Sao Jose do Egito", "Sao Lourenco da Mata", "Serra Talhada", "Sertania", "Sirinhaem", "Surubim", "Tabira", "Tamandare", "Taquaritinga do Norte", "Timbauba", "Toritama", "Trindade", "Triunfo", "Tupanatinga", "Vicencia", "Vitoria de Santo Antao"]
      },
      {
        name: "Piaui",
        cities: ["Agua Branca", "Alto Longa", "Altos", "Amarante", "Avelino Lopes", "Barras", "Batalha", "Beneditinos", "Bom Jesus", "Buriti dos Lopes", "Campo Maior", "Canto do Buriti", "Castelo do Piaui", "Cocal", "Corrente", "Demerval Lobao", "Elesbao Veloso", "Esperantina", "Floriano", "Gilbues", "Guadalupe", "Inhuma", "Itainopolis", "Itaueira", "Jaicos", "Joaquim Pires", "Jose de Freitas", "Luis Correia", "Luzilandia", "Matias Olimpio", "Miguel Alves", "Monsenhor Gil", "Oeiras", "Palmeirais", "Parnaiba", "Pedro II", "Picos", "Pimenteiras", "Pio IX", "Piracuruca", "Piripiri", "Porto", "Regeneracao", "Sao Joao do Piaui", "Sao Miguel do Tapuio", "Sao Pedro do Piaui", "Sao Raimundo Nonato", "Simoes", "Simplicio Mendes", "Teresina", "Uniao", "Urucui", "Valenca do Piaui"]
      },
      {
        name: "Rio Grande do Norte",
        cities: []
      },
      {
        name: "Rio Grande do Sul",
        cities: []
      },
      {
        name: "Rio de Janeiro",
        cities: []
      },
      {
        name: "Rondonia",
        cities: ["Alta Floresta d''Oeste", "Alto Alegre do Parecis", "Alto Paraiso", "Alvorada d''Oeste", "Ariquemes", "Buritis", "Cacoal", "Candeias do Jamari", "Cerejeiras", "Colorado do Oeste", "Corumbiara", "Espigao d''Oeste", "Governador Jorge Teixeira", "Guajara-Mirim", "Jaru", "Ji-Parana", "Machadinho d''Oeste", "Ministro Andreazza", "Mirante da Serra", "Nova Brasilandia d''Oeste", "Nova Mamore", "Novo Horizonte do Oeste", "Ouro Preto do Oeste", "Pimenta Bueno", "Porto Velho", "Presidente Medici", "Rolim de Moura", "Santa Luzia d''Oeste", "Sao Miguel do Guapore", "Urupa", "Vale do Paraiso", "Vilhena"]
      },
      {
        name: "Roraima",
        cities: ["Alto Alegre", "Boa Vista", "Bonfim", "Caracarai", "Mucajai", "Normandia", "Sao Joao da Baliza", "Sao Luiz"]
      },
      {
        name: "Santa Catarina",
        cities: []
      },
      {
        name: "Sao Paulo",
        cities: []
      },
      {
        name: "Sergipe",
        cities: ["Aquidaba", "Aracaju", "Araua", "Areia Branca", "Barra dos Coqueiros", "Boquim", "Campo do Brito", "Caninde de Sao Francisco", "Capela", "Carira", "Cristinapolis", "Estancia", "Frei Paulo", "Gararu", "Indiaroba", "Itabaiana", "Itabaianinha", "Itaporanga d''Ajuda", "Japaratuba", "Japoata", "Lagarto", "Laranjeiras", "Malhador", "Maruim", "Moita Bonita", "Monte Alegre de Sergipe", "Neopolis", "Nossa Senhora da Gloria", "Nossa Senhora das Dores", "Nossa Senhora do Socorro", "Pacatuba", "Poco Verde", "Porto da Folha", "Propria", "Riachao do Dantas", "Ribeiropolis", "Salgado", "Santa Luzia do Itanhy", "Santo Amaro das Brotas", "Sao Cristovao", "Simao Dias", "Tobias Barreto", "Tomar do Geru", "Umbauba"]
      },
      {
        name: "Tocantins",
        cities: ["Alvorada", "Ananas", "Araguacu", "Araguaina", "Araguatins", "Arraias", "Augustinopolis", "Axixa do Tocantins", "Colinas do Tocantins", "Dianopolis", "Formoso do Araguaia", "Goiatins", "Guarai", "Gurupi", "Miracema do Tocantins", "Miranorte", "Palmas", "Paraiso", "Parana", "Porto Nacional", "Sitio Novo do Tocantins", "Taguatinga", "Tocantinopolis", "Wanderlandia", "Xambioa"]
      }
    ],
    isoAlpha2: "BR",
    isoAlpha3: "BRA",
    isoNumeric: 76
  },
  {
    name: "British Indian Ocean Territory",
    flag: "🇮🇴",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "British Indian Ocean Territory",
        cities: []
      }
    ],
    isoAlpha2: "IO",
    isoAlpha3: "IOT",
    isoNumeric: 86
  },
  {
    name: "British Virgin Islands",
    flag: "🇻🇬",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Anegada",
        cities: ["Settlement"]
      },
      {
        name: "Jost van Dyke",
        cities: []
      },
      {
        name: "Tortola",
        cities: ["East End-Long Look", "Road Town", "West End"]
      }
    ]
  },
  {
    name: "Brunei",
    flag: "🇧🇳",
    currency: {
      code: "BND",
      name: "Brunei Dollar",
      symbol: "B$"
    },
    states: [
      {
        name: "Belait",
        cities: ["Kuala Belait", "Seria"]
      },
      {
        name: "Brunei-Muara",
        cities: ["Bandar Seri Begawan"]
      },
      {
        name: "Temburong",
        cities: ["Bangar"]
      },
      {
        name: "Tutong",
        cities: ["Tutong"]
      }
    ]
  },
  {
    name: "Bulgaria",
    flag: "🇧🇬",
    currency: {
      code: "BGN",
      name: "Lev",
      symbol: "лв"
    },
    states: [
      {
        name: "Blagoevgrad",
        cities: ["Bansko", "Belica", "Blagoevgrad", "Goce Delchev", "Hadzhidimovo", "Jakoruda", "Kresna", "Melnik", "Petrich", "Razlog", "Sandanski", "Simitli"]
      },
      {
        name: "Burgas",
        cities: ["Ahtopol", "Ajtos", "Balgarovo", "Bourgas", "Burgas", "Carevo", "Kableshkovo", "Kameno", "Karnobat", "Malko Tarnovo", "Nesebar", "Obzor", "Pomorie", "Primorsko", "Sozopol", "Sredec", "Sungurlare", "Tvardica"]
      },
      {
        name: "Dobrich",
        cities: ["Balchik", "Dobrich", "General-Toshevo", "Kavarna", "Loznica", "Shabla", "Tervel"]
      },
      {
        name: "Gabrovo",
        cities: ["Drjanovo", "Gabrovo", "Plachkovci", "Sevlievo", "Trjavna"]
      },
      {
        name: "Haskovo",
        cities: ["Dimitrovgrad", "Harmanli", "Haskovo", "Ivajlovgrad", "Ljubimec", "Madzharovo", "Merichleri", "Simeonovgrad", "Svilengrad"]
      },
      {
        name: "Jambol",
        cities: ["Boljarovo", "Elhovo", "Jambol", "Straldzha", "Topolovgrad"]
      },
      {
        name: "Kardzhali",
        cities: ["Ardino", "Dzhebel", "Kardzhali", "Krumovgrad", "Momchilgrad"]
      },
      {
        name: "Kjustendil",
        cities: ["Boboshevo", "Bobovdol", "Dupnica", "Kjustendil", "Kocherinovo", "Rila", "Sapareva Banja", "Zemen"]
      },
      {
        name: "Lovech",
        cities: ["Aprilci", "Jablanica", "Letnica", "Lovech", "Lukovit", "Sopot", "Teteven", "Trojan", "Ugarchin"]
      },
      {
        name: "Montana",
        cities: ["Berkovica", "Bojchinovci", "Brusarci", "Chiprovci", "Lom", "Montana", "Valchedram", "Varshec"]
      },
      {
        name: "Oblast Sofiya-Grad",
        cities: []
      },
      {
        name: "Pazardzhik",
        cities: ["Batak", "Belovo", "Bracigovo", "Koprivshtica", "Panagjurishte", "Pazardzhik", "Peshtera", "Rakitovo", "Septemvri", "Strelcha", "Velingrad"]
      },
      {
        name: "Pernik",
        cities: ["Bankja", "Batanovci", "Breznik", "Pernik", "Radomir", "Tran"]
      },
      {
        name: "Pleven",
        cities: ["Belene", "Cherven Brjag", "Dolna Mitropolija", "Dolni Dabnik", "Guljanci", "Levski", "Nikopol", "Pleven", "Pordim", "Slavjanovo", "Trashtenik", "Varbica"]
      },
      {
        name: "Plovdiv",
        cities: ["Asenovgrad", "Brezovo", "Car Kalojan", "Hisarja", "Kalofer", "Karlovo", "Klisura", "Krichim", "Parvomaj", "Perushtica", "Plovdiv", "Rakovski", "Sadovo", "Saedinenie", "Stambolijski"]
      },
      {
        name: "Razgrad",
        cities: ["Isperih", "Kubrat", "Razgrad", "Senovo", "Zavet"]
      },
      {
        name: "Ruse",
        cities: ["Bjala", "Borovo", "Dve Mogili", "Ruse", "Russe", "Vetovo"]
      },
      {
        name: "Shumen",
        cities: ["Kaolinovo", "Kaspichan", "Novi Pazar", "Pliska", "Shumen", "Smjadovo", "Veliki Preslav"]
      },
      {
        name: "Silistra",
        cities: ["Alfatar", "Dulovo", "Glavinica", "Silistra", "Tutrakan"]
      },
      {
        name: "Sliven",
        cities: ["Kermen", "Kotel", "Nova Zagora", "Shivachevo", "Sliven"]
      },
      {
        name: "Smoljan",
        cities: ["Chepelare", "Devin", "Dospat", "Laki", "Madan", "Nedelino", "Rudozem", "Smoljan", "Zlatograd"]
      },
      {
        name: "Sofija grad",
        cities: []
      },
      {
        name: "Sofijska oblast",
        cities: []
      },
      {
        name: "Stara Zagora",
        cities: []
      },
      {
        name: "Targovishte",
        cities: ["Antonovo", "Omurtag", "Opaka", "Popovo", "Targovishte"]
      },
      {
        name: "Varna",
        cities: ["Beloslav", "Bjala", "Dalgopol", "Devnja", "Iskar", "Provadija", "Suvorovo", "Valchi Dol", "Varna"]
      },
      {
        name: "Veliko Tarnovo",
        cities: []
      },
      {
        name: "Vidin",
        cities: ["Belogradchik", "Bregovo", "Dimovo", "Dolni Chiflik", "Dunavci", "Gramada", "Kula", "Vidin"]
      },
      {
        name: "Vraca",
        cities: ["Bjala Slatina", "Knezha", "Kojnare", "Kozloduj", "Krivodol", "Mezdra", "Mizija", "Orjahovo", "Roman", "Vraca"]
      },
      {
        name: "Yablaniza",
        cities: ["Yablaniza"]
      }
    ],
    isoAlpha2: "BG",
    isoAlpha3: "BGR",
    isoNumeric: 100
  },
  {
    name: "Burkina Faso",
    flag: "🇧🇫",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Bale",
        cities: ["Boromo"]
      },
      {
        name: "Bam",
        cities: ["Kongoussi"]
      },
      {
        name: "Bazega",
        cities: ["Kombissiri"]
      },
      {
        name: "Bougouriba",
        cities: ["Diebougou", "Pa"]
      },
      {
        name: "Boulgou",
        cities: ["Garango", "Tenkodogo"]
      },
      {
        name: "Boulkiemde",
        cities: ["Koudougou"]
      },
      {
        name: "Comoe",
        cities: ["Banfora"]
      },
      {
        name: "Ganzourgou",
        cities: ["Zorgo"]
      },
      {
        name: "Gnagna",
        cities: ["Bogande"]
      },
      {
        name: "Gourma",
        cities: ["Fada N''gourma"]
      },
      {
        name: "Houet",
        cities: ["Bekuy", "Bobo Dioulasso"]
      },
      {
        name: "Ioba",
        cities: ["Dano"]
      },
      {
        name: "Kadiogo",
        cities: ["Ouagadougou"]
      },
      {
        name: "Kenedougou",
        cities: ["Koalla", "Koloko", "Orodara"]
      },
      {
        name: "Komandjari",
        cities: ["Gayeri"]
      },
      {
        name: "Kompienga",
        cities: ["Pama"]
      },
      {
        name: "Kossi",
        cities: ["Nouna"]
      },
      {
        name: "Kouritenga",
        cities: ["Koupela"]
      },
      {
        name: "Kourweogo",
        cities: ["Bousse"]
      },
      {
        name: "Leraba",
        cities: ["Sindou"]
      },
      {
        name: "Mouhoun",
        cities: ["Dedougou"]
      },
      {
        name: "Nahouri",
        cities: ["Po"]
      },
      {
        name: "Namentenga",
        cities: ["Boulsa"]
      },
      {
        name: "Noumbiel",
        cities: ["Batie"]
      },
      {
        name: "Oubritenga",
        cities: ["Ziniare"]
      },
      {
        name: "Oudalan",
        cities: ["Gorom-Gorom"]
      },
      {
        name: "Passore",
        cities: ["Yako"]
      },
      {
        name: "Poni",
        cities: ["Gaoua", "Kampti", "Loropeni"]
      },
      {
        name: "Sanguie",
        cities: ["Reo"]
      },
      {
        name: "Sanmatenga",
        cities: ["Kaya"]
      },
      {
        name: "Seno",
        cities: ["Dori"]
      },
      {
        name: "Sissili",
        cities: ["Gao", "Leo"]
      },
      {
        name: "Soum",
        cities: ["Aribinda", "Djibo"]
      },
      {
        name: "Sourou",
        cities: ["Louta", "Tougan"]
      },
      {
        name: "Tapoa",
        cities: ["Diapaga", "Kantchari"]
      },
      {
        name: "Tuy",
        cities: ["Hounde"]
      },
      {
        name: "Yatenga",
        cities: ["Ouahigouya"]
      },
      {
        name: "Zondoma",
        cities: ["Gourcy"]
      },
      {
        name: "Zoundweogo",
        cities: ["Manga"]
      }
    ],
    isoAlpha2: "BF",
    isoAlpha3: "BFA",
    isoNumeric: 854
  },
  {
    name: "Burundi",
    flag: "🇧🇮",
    currency: {
      code: "BIF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Bubanza",
        cities: ["Bubanza"]
      },
      {
        name: "Bujumbura",
        cities: ["Bujumbura"]
      },
      {
        name: "Bururi",
        cities: ["Bururi"]
      },
      {
        name: "Cankuzo",
        cities: ["Cankuzo"]
      },
      {
        name: "Cibitoke",
        cities: ["Cibitoke"]
      },
      {
        name: "Gitega",
        cities: ["Gitega"]
      },
      {
        name: "Karuzi",
        cities: ["Karuzi"]
      },
      {
        name: "Kayanza",
        cities: ["Kayanza"]
      },
      {
        name: "Kirundo",
        cities: ["Kirundo"]
      },
      {
        name: "Makamba",
        cities: ["Makamba"]
      },
      {
        name: "Muramvya",
        cities: ["Muramvya"]
      },
      {
        name: "Muyinga",
        cities: ["Muyinga"]
      },
      {
        name: "Ngozi",
        cities: ["Ngozi"]
      },
      {
        name: "Rutana",
        cities: ["Rutana"]
      },
      {
        name: "Ruyigi",
        cities: ["Ruyigi"]
      }
    ],
    isoAlpha2: "BI",
    isoAlpha3: "BDI",
    isoNumeric: 108
  },
  {
    name: "Cambodia",
    flag: "🇰🇭",
    currency: {
      code: "KHR",
      name: "Riels",
      symbol: "៛"
    },
    states: [
      {
        name: "Banteay Mean Chey",
        cities: []
      },
      {
        name: "Bat Dambang",
        cities: []
      },
      {
        name: "Kampong Cham",
        cities: []
      },
      {
        name: "Kampong Chhnang",
        cities: []
      },
      {
        name: "Kampong Spoeu",
        cities: []
      },
      {
        name: "Kampong Thum",
        cities: []
      },
      {
        name: "Kampot",
        cities: ["Kampot"]
      },
      {
        name: "Kandal",
        cities: ["Ta Khmau"]
      },
      {
        name: "Kaoh Kong",
        cities: []
      },
      {
        name: "Kracheh",
        cities: ["Kracheh"]
      },
      {
        name: "Krong Kaeb",
        cities: []
      },
      {
        name: "Krong Pailin",
        cities: []
      },
      {
        name: "Krong Preah Sihanouk",
        cities: []
      },
      {
        name: "Mondol Kiri",
        cities: []
      },
      {
        name: "Otdar Mean Chey",
        cities: []
      },
      {
        name: "Phnum Penh",
        cities: []
      },
      {
        name: "Pousat",
        cities: ["Pousat"]
      },
      {
        name: "Preah Vihear",
        cities: []
      },
      {
        name: "Prey Veaeng",
        cities: []
      },
      {
        name: "Rotanak Kiri",
        cities: []
      },
      {
        name: "Siem Reab",
        cities: []
      },
      {
        name: "Stueng Traeng",
        cities: []
      },
      {
        name: "Svay Rieng",
        cities: []
      },
      {
        name: "Takaev",
        cities: ["Phumi Takaev"]
      }
    ],
    isoAlpha2: "KH",
    isoAlpha3: "KHM",
    isoNumeric: 116
  },
  {
    name: "Cameroon",
    flag: "🇨🇲",
    currency: {
      code: "XAF",
      name: "Franc",
      symbol: "FCF"
    },
    states: [
      {
        name: "Adamaoua",
        cities: ["Banyo", "Meiganga", "Ngaoundere", "Tibati", "Tignere"]
      },
      {
        name: "Centre",
        cities: ["Akonolinga", "Bafia", "Eseka", "Mbalmayo", "Mfou", "Monatele", "Nanga Eboko", "Obala", "Ombesa", "Saa", "Yaounde"]
      },
      {
        name: "Est",
        cities: ["Abong Mbang", "Batouri", "Bertoua", "Betare Oya", "Djoum", "Doume", "Lomie", "Yokadouma"]
      },
      {
        name: "Littoral",
        cities: ["Bonaberi", "Dibombari", "Douala", "Edea", "Loum", "Manjo", "Mbanga", "Nkongsamba", "Yabassi"]
      },
      {
        name: "Nord",
        cities: ["Figuif", "Garoua", "Guider", "Lagdo", "Poli", "Rey Bouba", "Tchollire"]
      },
      {
        name: "Nord Extreme",
        cities: ["Figuif", "Garoua", "Guider", "Lagdo", "Poli", "Rey Bouba", "Tchollire"]
      },
      {
        name: "Nordouest",
        cities: ["Bamenda", "Kumbo", "Mbengwi", "Mme", "Njinikom", "Nkambe", "Wum"]
      },
      {
        name: "Ouest",
        cities: ["Bafang", "Bafoussam", "Bafut", "Bali", "Bana", "Bangangte", "Djang", "Fontem", "Foumban", "Foumbot", "Mbouda"]
      },
      {
        name: "Sud",
        cities: ["Akom", "Ambam", "Ebolowa", "Kribi", "Lolodorf", "Moloundou", "Mvangue", "Sangmelima"]
      },
      {
        name: "Sudouest",
        cities: ["Buea", "Idenao", "Kumba", "Limbe", "Mamfe", "Muyuka", "Tiko"]
      }
    ],
    isoAlpha2: "CM",
    isoAlpha3: "CMR",
    isoNumeric: 120
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    currency: {
      code: "CAD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Alberta",
        cities: ["Airdrie", "Athabasca", "Banff", "Barrhead", "Bassano", "Beaumont", "Beaverlodge", "Black Diamond", "Blackfalds", "Blairmore", "Bon Accord", "Bonnyville", "Bow Island", "Brooks", "Calgary", "Calmar", "Camrose", "Canmore", "Cardston", "Carstairs", "Chateau Lake Louise", "Chestermere", "Clairmont", "Claresholm", "Coaldale", "Coalhurst", "Cochrane", "Crossfield", "Devon", "Didsbury", "Drayton Valley", "Drumheller", "Edmonton", "Edson", "Elk Point", "Fairview", "Falher", "Fort MacLeod", "Fox Creek", "Gibbons", "Grand Centre", "Grande Cache", "Grande Prairie", "Grimshaw", "Hanna", "High Level", "High Prairie", "High River", "Hinton", "Irricana", "Jasper", "Killam", "La Crete", "Lac la Biche", "Lacombe", "Lamont", "Leduc", "Lethbridge", "Lloydminster", "Magrath", "Manning", "Mayerthorpe", "McMurray", "Medicine Hat", "Millet", "Morinville", "Nanton", "Okotoks", "Olds", "Peace River", "Penhold", "Picture Butte", "Pincher Creek", "Ponoka", "Provost", "Raymond", "Red Deer", "Redwater", "Rimbey", "Rocky Mountain House", "Rocky View", "Saint Paul", "Sexsmith", "Sherwood Park", "Slave Lake", "Smoky Lake", "Spirit River", "Spruce Grove", "Stettler", "Stony Plain", "Strathmore", "Sundre", "Swan Hills", "Sylvan Lake", "Taber", "Three Hills", "Tofield", "Two Hills", "Valleyview", "Vegreville", "Vermilion", "Viking", "Vulcan", "Wainwright", "Wembley", "Westlock", "Wetaskiwin", "Whitecourt", "Wood Buffalo"]
      },
      {
        name: "British Columbia",
        cities: []
      },
      {
        name: "Manitoba",
        cities: ["Altona", "Beausejour", "Boissevain", "Brandon", "Carberry", "Carman", "Dauphin", "Deloraine", "Dugald", "Flin Flon", "Gimli", "Hamiota", "Killarney", "Lac du Bonnet", "Leaf Rapids", "Lorette", "Melita", "Minnedosa", "Morden", "Morris", "Neepawa", "Niverville", "Pinawa", "Portage la Prairie", "Ritchot", "Rivers", "Roblin", "Saint Adolphe", "Sainte Anne", "Sainte Rose du Lac", "Selkirk", "Shilo", "Snow Lake", "Souris", "Springfield", "Steinbach", "Stonewall", "Stony Mountain", "Swan River", "The Pas", "Thompson", "Virden", "Winkler", "Winnipeg"]
      },
      {
        name: "New Brunswick",
        cities: []
      },
      {
        name: "Newfoundland and Labrador",
        cities: []
      },
      {
        name: "Northwest Territories",
        cities: []
      },
      {
        name: "Nova Scotia",
        cities: []
      },
      {
        name: "Nunavut",
        cities: ["Clyde River", "Iqaluit", "Kangerdlinerk", "Oqsuqtooq", "Pangnirtung", "Tununirusiq"]
      },
      {
        name: "Ontario",
        cities: ["Acton", "Ajax", "Alexandria", "Alfred", "Alliston", "Almonte", "Amherstburg", "Amigo Beach", "Angus-Borden", "Arnprior", "Arthur", "Athens", "Atikokan", "Attawapiskat", "Aurora", "Aylmer", "Ayr", "Barrie", "Barry''s Bay", "Beamsville", "Beaverton", "Beeton", "Belleville", "Belmont", "Blenheim", "Blind River", "Bobcaygeon", "Bolton", "Bourget", "Bowmanville-Newcastle", "Bracebridge", "Bradford", "Brampton", "Brantford", "Bridgenorth-Chemong Park Area", "Brighton", "Brockville", "Brooklin", "Brussels", "Burford", "Burlington", "Caledon", "Caledon East", "Caledonia", "Cambridge", "Campbellford", "Campbellville", "Cannington", "Capreol", "Cardinal", "Carleton Place", "Carlisle", "Casselman", "Cayuga", "Chalk River", "Chapleau", "Chatham", "Chesley", "Chesterville", "Clinton", "Cobourg", "Cochrane", "Colborne", "Colchester", "Collingwood", "Concord", "Constance Bay", "Cookstown", "Cornwall", "Creemore", "Crystal Beach", "Deep River", "Delhi", "Deseronto", "Downsview", "Drayton", "Dresden", "Dryden", "Dundalk", "Dunnville", "Durham", "Dutton", "Eganville", "Elliot Lake", "Elmira", "Elmvale", "Embrun", "Englehart", "Erin", "Espanola", "Essex", "Etobicoke", "Everett", "Exeter", "Fenelon Falls", "Fergus", "Forest", "Fort Erie", "Fort Frances", "Frankford", "Gananoque", "Georgetown", "Georgina", "Geraldton", "Glencoe", "Goderich", "Golden", "Gormley", "Grand Bend", "Grand Valley", "Gravenhurst", "Guelph", "Hagersville", "Haileybury", "Hamilton", "Hanover", "Harriston", "Harrow", "Hastings", "Havelock", "Hawkesbury", "Hearst", "Hensall", "Hillsburgh", "Hornepayne", "Huntsville", "Ingersoll", "Innisfil", "Iroquois", "Iroquois Falls", "Jarvis", "Kanata", "Kapuskasing", "Kars", "Kemptville", "Kenora", "Kincardine", "Kingston", "Kirkland Lake", "Kitchener", "L''Original", "Lakefield", "Lanark", "Leamington", "Lindsay", "Listowel", "Little Current", "Lively", "London", "Longlac", "Lucan", "Lucknow", "Madoc", "Manitouwadge", "Maple", "Marathon", "Markdale", "Markham", "Marmora", "Mattawa", "Meaford", "Metcalfe", "Midland", "Mildmay", "Millbrook", "Milton", "Milverton", "Mississauga", "Mississauga Beach", "Mitchell", "Moose Factory", "Morrisburg", "Mount Albert", "Mount Brydges", "Mount Forest", "Munster", "Nanticoke", "Napanee", "Nepean", "New Hamburg", "Newmarket", "Newtonville", "Nobleton", "North Bay", "North Gower", "North York", "Norwich", "Norwood", "Oakville", "Omemee", "Onaping-Levack", "Ontario", "Orangeville", "Orillia", "Orono", "Osgoode", "Oshawa", "Ottawa", "Owen Sound", "Paisley", "Palmerston", "Paris", "Parkhill", "Parry Sound", "Pembroke", "Perth", "Petawawa", "Peterborough", "Petrolia", "Pickering", "Picton", "Porcupine", "Port Credit", "Port Dover", "Port Elgin", "Port Hope", "Port Perry", "Port Stanley", "Powassan", "Prescott", "Queensville", "Renfrew", "Richmond", "Richmond Hill", "Ridgetown", "Rockland", "Rockwood", "Rodney", "Saint Catharines", "Saint Catharines-Niagara", "Saint George", "Saint Jacobs", "Saint Marys", "Saint Thomas", "Sarnia", "Sault Sainte Marie", "Scarborough", "Schomberg", "Seaforth", "Shelburne", "Simcoe", "Sioux Lookout", "Smiths Falls", "Smithville", "South River", "Southampton", "Stayner", "Stirling", "Stoney Creek", "Stoney Point", "Stouffville", "Stratford", "Strathroy", "Sturgeon Falls", "Sudbury", "Sutton", "Tavistock", "Teeswater", "Terrace Bay", "Thamesford", "Thessalon", "Thornbury", "Thornhill", "Thunder Bay", "Tilbury", "Tilsonburg", "Timmins", "Toronto", "Tory Hill", "Tottenham", "Tweed", "Uxbridge", "Valley East", "Vankleek Hill", "Vaughan", "Vineland", "Walkerton", "Wallaceburg", "Wasaga Beach", "Waterdown", "Waterford", "Waterloo", "Watford", "Wawa", "Welland", "Wellesley", "Wellington", "West Lorne", "Wheatley", "Whitby", "Whitchurch-Stouffville", "Wiarton", "Wikwemikong", "Willowdale", "Winchester", "Windsor", "Wingham", "Woodbridge", "Woodstock", "Wyoming"]
      },
      {
        name: "Prince Edward Island",
        cities: []
      },
      {
        name: "Quebec",
        cities: ["Acton Vale", "Albanel", "Alencon", "Alma", "Amos", "Amqui", "Anjou", "Asbestos", "Bagotville", "Baie-Comeau", "Baie-Saint-Paul", "Barraute", "Beauceville", "Beaupre", "Bedford", "Beloeil", "Bernierville", "Berthierville", "Betsiamites", "Boisbriand", "Bonaventure", "Boucherville", "Bromont", "Brossard", "Brownsburg", "Buckingham", "Cabano", "Candiac", "Cap-Chat", "Cap-aux-Meules", "Carleton", "Causapscal", "Chandler", "Chapais", "Charlesbourg", "Chateau-Richer", "Chibougamou", "Chicoutimi-Jonquiere", "Chisasibi", "Chute-aux-Outardes", "Clermont", "Coaticook", "Coleraine", "Contrecoeur", "Cookshire", "Cowansville", "Crabtree", "Danville", "Daveluyville", "Degelis", "Desbiens", "Disraeli", "Dolbeau", "Donnacona", "Dorval", "Drummondville", "East Angus", "East Broughton", "Farnham", "Ferme-Neuve", "Fermont", "Filion", "Forestville", "Fort-Coulonge", "Gaspe", "Gentilly", "Granby", "Grande-Riviere", "Grenville", "Ham Nord", "Hampstead", "Hauterive", "Havre-Saint-Pierre", "Hebertville", "Huntingdon", "Joliette", "Kingsey Falls", "L''Annonciation", "L''Ascension-de-Notre-Seigneur", "L''Epiphanie", "La Malbaie", "La Pocatiere", "La Sarre", "La Tuque", "Labelle", "Lac-Etchemin", "Lac-Lapierre", "Lac-Megantic", "Lac-au-Saumon", "Lachine", "Lachute", "Lacolle", "Lasalle", "Laurentides", "Laurier-Station", "Laval", "Lavaltrie", "Le Bic", "Lebel-sur-Quevillon", "Les Cedres", "Les Coteaux", "Les Escoumins", "Liniere", "Longueuil", "Louiseville", "Luceville", "Macamic", "Magog", "Malartic", "Maniwaki", "Marieville", "Maskinonge", "Matagami", "Matane", "Metabetchouan", "Mirabel", "Mistissini", "Mont-Joli", "Mont-Laurier", "Montmagny", "Montreal", "Murdochville", "Napierville", "New Richmond", "Nicolet", "Normandin", "Notre-Dame-du-Bon-Conseil", "Notre-Dame-du-Lac", "Notre-Dame-du-Mont-Carmel", "Oka-Kanesatake", "Ormstown", "Papineauville", "Pierreville", "Plessisville", "Pointe-Claire", "Pont-Rouge", "Port-Alfred-Bagotville", "Port-Cartier", "Portneuf", "Price", "Princeville", "Quebec", "Rawdon", "Repentigny", "Richmond", "Rigaud", "Rimouski", "Riviere-au-Renard", "Riviere-du-Loup", "Roberval", "Rougemont", "Rouyn-Noranda", "Saint-Agapit", "Saint-Alexandre", "Saint-Alexis-des-Monts", "Saint-Ambroise", "Saint-Andre-Avellin", "Saint-Anselme", "Saint-Apollinaire", "Saint-Augustin", "Saint-Basile-Sud", "Saint-Bruno", "Saint-Canut", "Saint-Cesaire", "Saint-Cyrill-de-Wendover", "Saint-Damien-de-Buckland", "Saint-Denis", "Saint-Donat-de-Montcalm", "Saint-Ephrem-de-Tring", "Saint-Fabien", "Saint-Felicien", "Saint-Felix-de-Valois", "Saint-Gabriel", "Saint-Gedeon", "Saint-Georges", "Saint-Germain-de-Grantham", "Saint-Gregoire", "Saint-Henri-de-Levis", "Saint-Honore", "Saint-Hyacinthe", "Saint-Jacques", "Saint-Jean-Port-Joli", "Saint-Jean-de-Dieu", "Saint-Jean-sur-Richelieu", "Saint-Jerome", "Saint-Josephe-de-Beauce", "Saint-Josephe-de-Lanoraie", "Saint-Josephe-de-la-Riviere-Bl", "Saint-Jovite", "Saint-Laurent", "Saint-Liboire", "Saint-Marc-des-Carrieres", "Saint-Martin", "Saint-Michel-des-Saints", "Saint-Pacome", "Saint-Pascal", "Saint-Pie", "Saint-Prosper", "Saint-Raphael", "Saint-Raymond", "Saint-Remi", "Saint-Roch-de-l''Achigan", "Saint-Sauveur-des-Monts", "Saint-Tite", "Sainte-Adele", "Sainte-Agathe-des-Monts", "Sainte-Anne-des-Monts", "Sainte-Anne-des-Plaines", "Sainte-Catherine", "Sainte-Claire", "Sainte-Julienne", "Sainte-Justine", "Sainte-Madeleine", "Sainte-Marie", "Sainte-Martine", "Sainte-Sophie", "Sainte-Thecle", "Sainte-Therese", "Salaberry-de-Valleyfield", "Sayabec", "Senneterre", "Sept-Iles", "Shawinigan", "Shawville", "Sherbrooke", "Sorel", "St Faustin", "St. Hubert", "St. Jean Chrysostome", "Temiscaming", "Terrebonne", "Thetford Mines", "Thurso", "Trois-Pistoles", "Trois-Rivieres", "Val-David", "Val-d''Or", "Valcourt", "Vallee-Jonction", "Vaudreuil", "Vercheres", "Victoriaville", "Ville-Marie", "Warwick", "Waterloo", "Weedon Centre", "Westmount", "Wickham", "Windsor", "Yamachiche"]
      },
      {
        name: "Saskatchewan",
        cities: ["Assiniboia", "Biggar", "Canora", "Carlyle", "Carnduff", "Caronport", "Carrot", "Dalmeny", "Davidson", "Esterhazy", "Estevan", "Eston", "Foam Lake", "Fort Qu''Appelle", "Gravelbourg", "Grenfell", "Gull Lake", "Hudson Bay", "Humboldt", "Indian Head", "Kamsack", "Kelvington", "Kerrobert", "Kindersley", "Kipling", "La Ronge", "Langenburg", "Langham", "Lanigan", "Lloydminster", "Lumsden", "Macklin", "Maple Creek", "Martensville", "Meadow Lake", "Melfort", "Melville", "Moose Jaw", "Moosomin", "Nipawin", "North Battleford", "Outlook", "Oxbow", "Pilot Butte", "Preeceville", "Prince Albert", "Regina", "Rosetown", "Rosthem", "Saskatoon", "Shaunavon", "Shellbrook", "Swift Current", "Tisdale", "Unity", "Wadena", "Warman", "Watrous", "Weyburn", "White City", "Wilkie", "Wynyard", "Yorkton"]
      },
      {
        name: "Yukon",
        cities: ["Haines Junction", "Mayo", "Whitehorse"]
      }
    ],
    isoAlpha2: "CA",
    isoAlpha3: "CAN",
    isoNumeric: 124
  },
  {
    name: "Cape Verde",
    flag: "🇨🇻",
    currency: {
      code: "CVE",
      name: "Escudo",
      symbol: false
    },
    states: [
      {
        name: "Boavista",
        cities: ["Sal Rei"]
      },
      {
        name: "Brava",
        cities: ["Nova Sintra"]
      },
      {
        name: "Fogo",
        cities: ["Mosteiros", "Sao Filipe"]
      },
      {
        name: "Maio",
        cities: ["Vila do Maio"]
      },
      {
        name: "Sal",
        cities: ["Santa Maria"]
      },
      {
        name: "Santo Antao",
        cities: []
      },
      {
        name: "Sao Nicolau",
        cities: []
      },
      {
        name: "Sao Tiago",
        cities: []
      },
      {
        name: "Sao Vicente",
        cities: []
      }
    ],
    isoAlpha2: "CV",
    isoAlpha3: "CPV",
    isoNumeric: 132
  },
  {
    name: "Cayman Islands",
    flag: "🇰🇾",
    currency: {
      code: "KYD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Grand Cayman",
        cities: []
      }
    ],
    isoAlpha2: "KY",
    isoAlpha3: "CYM",
    isoNumeric: 136
  },
  {
    name: "Central African Republic",
    flag: "🇨🇫",
    currency: {
      code: "XAF",
      name: "Franc",
      symbol: "FCF"
    },
    states: [
      {
        name: "Bamingui-Bangoran",
        cities: ["Ndele"]
      },
      {
        name: "Bangui",
        cities: ["Bangui"]
      },
      {
        name: "Basse-Kotto",
        cities: ["Alindao", "Kembe", "Mobaye"]
      },
      {
        name: "Haut-Mbomou",
        cities: ["Obo", "Zemio"]
      },
      {
        name: "Haute-Kotto",
        cities: ["Bria", "Ouadda"]
      },
      {
        name: "Kemo",
        cities: ["Dekoa", "Sibut"]
      },
      {
        name: "Lobaye",
        cities: ["Boda", "Mbaiki", "Mongoumba"]
      },
      {
        name: "Mambere-Kadei",
        cities: ["Berberati", "Carnot", "Gamboula"]
      },
      {
        name: "Mbomou",
        cities: ["Bangassou", "Gambo", "Ouango", "Rafai"]
      },
      {
        name: "Nana-Gribizi",
        cities: ["Kaga-Bandoro"]
      },
      {
        name: "Nana-Mambere",
        cities: ["Baboua", "Baoro", "Bouar"]
      },
      {
        name: "Ombella Mpoko",
        cities: []
      },
      {
        name: "Ouaka",
        cities: ["Bambari", "Grimari", "Ippy", "Kouango"]
      },
      {
        name: "Ouham",
        cities: ["Batangafo", "Bossangoa", "Bouca", "Kabo"]
      },
      {
        name: "Ouham-Pende",
        cities: ["Bocaranga", "Bozoum", "Paoua"]
      },
      {
        name: "Sangha-Mbaere",
        cities: ["Nola"]
      },
      {
        name: "Vakaga",
        cities: ["Birao"]
      }
    ],
    isoAlpha2: "CF",
    isoAlpha3: "CAF",
    isoNumeric: 140
  },
  {
    name: "Chad",
    flag: "🇹🇩",
    currency: {
      code: "XAF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Batha",
        cities: ["Ati", "Oum Hadjer"]
      },
      {
        name: "Biltine",
        cities: ["Biltine"]
      },
      {
        name: "Bourkou-Ennedi-Tibesti",
        cities: ["Aouzou", "Bardai", "Fada", "Faya"]
      },
      {
        name: "Chari-Baguirmi",
        cities: ["Bokoro", "Bousso", "Dourbali", "Massaguet", "Massakory", "Massenya", "N''Djamena", "Ngama"]
      },
      {
        name: "Guera",
        cities: ["Bitkine", "Melfi", "Mongo"]
      },
      {
        name: "Kanem",
        cities: ["Mao", "Moussoro", "Rig-Rig"]
      },
      {
        name: "Lac",
        cities: ["Bol"]
      },
      {
        name: "Logone Occidental",
        cities: []
      },
      {
        name: "Logone Oriental",
        cities: []
      },
      {
        name: "Mayo-Kebbi",
        cities: ["Bongor", "Fianga", "Gounou Gaya", "Guelengdeng", "Lere", "Pala"]
      },
      {
        name: "Moyen-Chari",
        cities: ["Goundi", "Koumra", "Kyabe", "Moissala", "Sarh"]
      },
      {
        name: "Ouaddai",
        cities: ["Abeche", "Adre", "Am Dam"]
      },
      {
        name: "Salamat",
        cities: ["Abou Deia", "Am Timan", "Mangueigne"]
      },
      {
        name: "Tandjile",
        cities: ["Benoy", "Bere", "Kelo", "Lai"]
      }
    ],
    isoAlpha2: "TD",
    isoAlpha3: "TCD",
    isoNumeric: 148
  },
  {
    name: "Chile",
    flag: "🇨🇱",
    currency: {
      code: "CLP",
      name: "Peso",
      symbol: false
    },
    states: [
      {
        name: "Aisen",
        cities: ["Aisen", "Chile Chico", "Cisnes", "Cochrane", "Coihaique", "Guaitecas", "Lago Verde", "O''Higgins", "Rio Ibanez", "Tortel"]
      },
      {
        name: "Antofagasta",
        cities: ["Antofagasta", "Calama", "Maria Elena", "Mejilones", "Ollague", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"]
      },
      {
        name: "Araucania",
        cities: ["Angol", "Carahue", "Collipulli", "Cunco", "Curacautin", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquen", "Pucon", "Puren", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Tolten", "Traiguen", "Victoria", "Vilcun", "Villarica"]
      },
      {
        name: "Atacama",
        cities: ["Alto del Carmen", "Caldera", "Chanaral", "Copiapo", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"]
      },
      {
        name: "Bio Bio",
        cities: []
      },
      {
        name: "Coquimbo",
        cities: ["Andacollo", "Canela", "Combarbala", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paiguano", "Punitaci", "Rio Hurtado", "Salamanca", "Vicuna"]
      },
      {
        name: "Libertador General Bernardo O",
        cities: []
      },
      {
        name: "Los Lagos",
        cities: []
      },
      {
        name: "Magellanes",
        cities: ["Cabo de Horno", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Rio Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
      },
      {
        name: "Maule",
        cities: ["Cauquenes", "Chanco", "Colbun", "Constitucion", "Curepto", "Curico", "Empedrado", "Hualane", "Licanten", "Linares", "Longavi", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Rio Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquen", "Villa Alegre", "Yerbas Buenas"]
      },
      {
        name: "Metropolitana",
        cities: ["Alhue", "Buin", "Calera de Tango", "Colina", "Curacavi", "El Monte", "Isla de Maipo", "Lampa", "Maria Pinto", "Melipilla", "Padre Hurtado", "Paine", "Penaflor", "Pirque", "Puente Alto", "Quilicura", "San Bernardo", "San Jose de Maipo", "San Pedro", "Santiago", "Talagante", "Tiltil"]
      },
      {
        name: "Metropolitana de Santiago",
        cities: ["Alhue", "Buin", "Calera de Tango", "Colina", "Curacavi", "El Monte", "Isla de Maipo", "Lampa", "Maria Pinto", "Melipilla", "Padre Hurtado", "Paine", "Penaflor", "Pirque", "Puente Alto", "Quilicura", "San Bernardo", "San Jose de Maipo", "San Pedro", "Santiago", "Talagante", "Tiltil"]
      },
      {
        name: "Tarapaca",
        cities: ["Arica", "Camarones", "Camina", "Colchane", "General Lagos", "Huara", "Iquique", "Pica", "Pozo Almonte", "Putre"]
      },
      {
        name: "Valparaiso",
        cities: ["Algarrobo", "Cabildo", "Calera", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concon", "El Quisco", "El Tabo", "Hijuelas", "La Cruz", "La Ligua", "Limache", "Llaillay", "Los Andes", "Nogales", "Olmue", "Panquehue", "Papudo", "Petorca", "Puchuncavi", "Putaendeo", "Quillota", "Quilpue", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa Maria", "Santo Domingo", "Valparaiso", "Villa Alemana", "Vina del Mar", "Zapallar"]
      }
    ],
    isoAlpha2: "CL",
    isoAlpha3: "CHL",
    isoNumeric: 152
  },
  {
    name: "China",
    flag: "🇨🇳",
    currency: {
      code: "CNY",
      name: "YuanRenminbi",
      symbol: "¥"
    },
    states: [
      {
        name: "Anhui",
        cities: ["Fengyang", "Guangde", "Liuan", "Ningguo", "Shucheng", "Xinchang", "Xuancheng"]
      },
      {
        name: "Anhui Province",
        cities: ["Fengyang", "Guangde", "Liuan", "Ningguo", "Shucheng", "Xinchang", "Xuancheng"]
      },
      {
        name: "Anhui Sheng",
        cities: ["Fengyang", "Guangde", "Liuan", "Ningguo", "Shucheng", "Xinchang", "Xuancheng"]
      },
      {
        name: "Aomen",
        cities: ["Aomen"]
      },
      {
        name: "Beijing",
        cities: ["Beijing", "Changping", "Fangshan", "Huangcun", "Liangxiang", "Mentougou", "Shunyi", "Tongzhou"]
      },
      {
        name: "Beijing Shi",
        cities: ["Beijing", "Changping", "Fangshan", "Huangcun", "Liangxiang", "Mentougou", "Shunyi", "Tongzhou"]
      },
      {
        name: "Chongqing",
        cities: ["Beibei", "Chongqing", "Fuling", "Longhua", "Nantongkuang", "Wanxian", "Xiuma", "Yubei", "Yudong"]
      },
      {
        name: "Fujian",
        cities: ["Bantou", "Dongshan", "Fuan", "Fujian", "Fuqing", "Fuzhou", "Gantou", "Hanyang", "Jiangkou", "Jiaocheng", "Jinjiang", "Jinshang", "Longhai", "Longyan", "Luoyang", "Nanan", "Nanping", "Nanpu", "Putian", "Qingyang", "Quanzhou", "Rongcheng", "Sanming", "Shaowu", "Shima", "Shishi", "Tantou", "Tongshan", "Xiamen", "Xiapu", "Xiapu Ningde", "Ximei", "Yongan", "Zhangzhou", "Zhicheng"]
      },
      {
        name: "Fujian Sheng",
        cities: ["Bantou", "Dongshan", "Fuan", "Fujian", "Fuqing", "Fuzhou", "Gantou", "Hanyang", "Jiangkou", "Jiaocheng", "Jinjiang", "Jinshang", "Longhai", "Longyan", "Luoyang", "Nanan", "Nanping", "Nanpu", "Putian", "Qingyang", "Quanzhou", "Rongcheng", "Sanming", "Shaowu", "Shima", "Shishi", "Tantou", "Tongshan", "Xiamen", "Xiapu", "Xiapu Ningde", "Ximei", "Yongan", "Zhangzhou", "Zhicheng"]
      },
      {
        name: "Gansu",
        cities: ["Baiyin", "Baoji", "Beidao", "Jiayuguan", "Jinchang", "Jiuquan", "Lanzhou", "Linxia", "Pingliang", "Qincheng", "Wuwei", "Yaojie", "Yumen", "Zhangye", "Zhuanglang"]
      },
      {
        name: "Guangdong",
        cities: ["Anbu", "Chaozhou", "Chenghai", "Chuncheng", "Daliang", "Danshui", "Dongguan", "Donghai", "Dongli", "Dongzhen", "Ducheng", "Encheng", "Foahn", "Foshan", "Gaozhou", "Guangdong", "Guangzhou", "Guanjiao", "Haicheng", "Haimen", "Hepo", "Houpu", "Huaicheng", "Huanggang", "Huangpu", "Huazhou", "Huicheng", "Huizhou", "Humen", "Jiangmen", "Jiazi", "Jieshi", "Jieyang", "Lecheng", "Leicheng", "Liancheng", "Lianzhou", "Licheng", "Liusha", "Longgang", "Lubu", "Luocheng", "Luohu", "Luoyang", "Maba", "Maoming", "Mata", "Meilu", "Meizhou", "Mianchang", "Nanfeng", "Nanhai", "Pingshan", "Qingtang", "Qingyuan", "Rongcheng", "Sanbu", "Shantou", "Shanwei", "Shaoguan", "Shaping", "Shenzhen", "Shilong", "Shiqiao", "Shiwan", "Shuizhai", "Shunde", "Suicheng", "Taicheng", "Tangping", "Xiaolan", "Xinan", "Xingcheng", "Xiongzhou", "Xucheng", "Yangjiang", "Yingcheng", "Yuancheng", "Yuncheng", "Yunfu", "Zengcheng", "Zhanjiang", "Zhaoqing", "Zhilong", "Zhongshan", "Zhuhai"]
      },
      {
        name: "Guangdong Sheng",
        cities: ["Anbu", "Chaozhou", "Chenghai", "Chuncheng", "Daliang", "Danshui", "Dongguan", "Donghai", "Dongli", "Dongzhen", "Ducheng", "Encheng", "Foahn", "Foshan", "Gaozhou", "Guangdong", "Guangzhou", "Guanjiao", "Haicheng", "Haimen", "Hepo", "Houpu", "Huaicheng", "Huanggang", "Huangpu", "Huazhou", "Huicheng", "Huizhou", "Humen", "Jiangmen", "Jiazi", "Jieshi", "Jieyang", "Lecheng", "Leicheng", "Liancheng", "Lianzhou", "Licheng", "Liusha", "Longgang", "Lubu", "Luocheng", "Luohu", "Luoyang", "Maba", "Maoming", "Mata", "Meilu", "Meizhou", "Mianchang", "Nanfeng", "Nanhai", "Pingshan", "Qingtang", "Qingyuan", "Rongcheng", "Sanbu", "Shantou", "Shanwei", "Shaoguan", "Shaping", "Shenzhen", "Shilong", "Shiqiao", "Shiwan", "Shuizhai", "Shunde", "Suicheng", "Taicheng", "Tangping", "Xiaolan", "Xinan", "Xingcheng", "Xiongzhou", "Xucheng", "Yangjiang", "Yingcheng", "Yuancheng", "Yuncheng", "Yunfu", "Zengcheng", "Zhanjiang", "Zhaoqing", "Zhilong", "Zhongshan", "Zhuhai"]
      },
      {
        name: "Guangxi",
        cities: ["Babu", "Baihe", "Baise", "Beihai", "Binzhou", "Bose", "Fangchenggang", "Guicheng", "Guilin", "Guiping", "Jinchengjiang", "Jinji", "Laibin", "Lianzhou", "Liuzhou", "Luorong", "Matong", "Nandu", "Nanning", "Pingnan", "Pumiao", "Qinzhou", "Songhua", "Wuzhou", "Yashan", "Yulin"]
      },
      {
        name: "Guizhou",
        cities: ["Anshun", "Bijie", "Caohai", "Duyun", "Guiyang", "Kaili", "Liupanshui", "Luoyang", "Pingzhai", "Tongren", "Tongzi", "Xiaoweizhai", "Xingyi", "Zunyi"]
      },
      {
        name: "Hainan",
        cities: ["Chengmai", "Dingan", "Haikou", "Lingao", "Qiongshan", "Sansha", "Sanya", "Wanning"]
      },
      {
        name: "Hebei",
        cities: ["Anping", "Baoding", "Botou", "Cangzhou", "Changli", "Chengde", "Dingzhou", "Fengfeng", "Fengrun", "Guye", "Handan", "Hebei", "Hecun", "Hejian", "Hengshui", "Huanghua", "Jingxingkuang", "Jinzhou", "Langfang", "Lianzhou", "Linshui", "Linxi", "Longyao County", "Nangong", "Pengcheng", "Qinhuangdao", "Renqiu", "Shahe", "Shijiazhuang", "Tangjiazhuang", "Tangshan", "Wuan", "Xian County", "Xingtai", "Xinji", "Xinle", "Xuanhua", "Zhangjiakou", "Zhaogezhuang", "Zhuozhou"]
      },
      {
        name: "Heilongjiang",
        cities: ["Acheng", "Anda", "Angangxi", "Baiquan", "Bamiantong", "Baoqing", "Baoshan", "Bayan", "Beian", "Binzhou", "Boli", "Chaihe", "Chengzihe", "Cuiluan", "Daqing", "Didao", "Dongning", "Fujin", "Fuli", "Fulitun", "Fuyu", "Gannan", "Hailin", "Hailun", "Harbin", "Hegang", "Heihe", "Hengshan", "Honggang", "Huanan", "Hulan", "Hulan Ergi", "Jiamusi", "Jidong", "Jixi", "Keshan", "Langxiang", "Lanxi", "Lingdong", "Linkou", "Lishu", "Longfeng", "Longjiang", "Mingshui", "Mishan", "Mudanjiang", "Nancha", "Nehe", "Nenjiang", "Nianzishan", "Ningan", "Qingan", "Qinggang", "Qiqihar", "Qitaihe", "Ranghulu", "Saertu", "Shangzhi", "Shanhetun", "Shuangcheng", "Shuangyashan", "Sifantan", "Suifenhe", "Suihua", "Suileng", "Tahe", "Taikang", "Tailai", "Tieli", "Wangkui", "Weihe", "Wuchang", "Xinglongzhen", "Xinqing", "Yian", "Yichun", "Yilan", "Youhao", "Zhaodong", "Zhaoyuan", "Zhaozhou"]
      },
      {
        name: "Henan",
        cities: ["Anyang", "Changying", "Dancheng", "Daokou", "Dengzhou", "Gongyi", "Gushi", "Hebi", "Huaidian", "Huangchuan", "Huangzhai", "Jiaozuo", "Jishui", "Kaifeng", "Liupen", "Luohe", "Luoyang", "Luyang", "Mengzhou", "Minggang", "Nandun", "Nanyang", "Pingdingshan", "Puyang", "Sanmenxia", "Shangqiu", "Tanghe", "Xiaoyi", "Xihua", "Xinxiang", "Xinyang", "Xinye", "Xixiang", "Xuanwu", "Xuchang", "Yigou", "Yima", "Yinzhuang", "Yunyang", "Yuzhou", "Zhecheng", "Zhengzhou", "Zhenping", "Zhoukou", "Zhumadian"]
      },
      {
        name: "Hubei",
        cities: ["Anlu", "Baisha", "Buhe", "Caidian", "Caohe", "Danjiangkou", "Daye", "Duobao", "Enshi", "Ezhou", "Fengkou", "Guangshui", "Gucheng", "Hanchuan", "Hongan", "Honghu", "Huangmei", "Huangpi", "Huangshi", "Huangzhou", "Jingmen", "Jingzhou", "Laohekou", "Lichuan", "Macheng", "Nanhai", "Nanzhang", "Puqi", "Qianjiang", "Qingquan", "Qixingtai", "Rongcheng", "Shashi", "Shishou", "Shiyan", "Suizhou", "Tianmen", "Tongcheng", "Wuhan", "Wuxue", "Xiangfan", "Xianning", "Xiantao", "Xiaogan", "Xiaoxita", "Xiaxindian", "Xihe", "Xinpu", "Xinshi", "Xinzhou", "Yichang", "Yicheng", "Yingcheng", "Yingzhong", "Zaoyang", "Zhengchang", "Zhicheng", "Zhifang", "Zhongxiang"]
      },
      {
        name: "Hunan",
        cities: ["Anjiang", "Anxiang", "Changde", "Changsha", "Chenzhou", "Dayong", "Hengyang", "Hongjiang", "Huaihua", "Jinshi", "Jishou", "Leiyang", "Lengshuijiang", "Lengshuitan", "Lianyuan", "Liling", "Liuyang", "Loudi", "Matian", "Nanzhou", "Ningxiang", "Qidong", "Qiyang", "Shaoyang", "Xiangtan", "Xiangxiang", "Xiangyin", "Xinhua", "Yiyang", "Yongfeng", "Yongzhou", "Yuanjiang", "Yueyang", "Zhuzhou"]
      },
      {
        name: "Jiangsu",
        cities: ["Baoying", "Changzhou", "Dachang", "Dafeng", "Danyang", "Dingshu", "Dongkan", "Dongtai", "Fengxian", "Gaogou", "Gaoyou", "Guiren", "Haian", "Haizhou", "Hede", "Huaicheng", "Huaiyin", "Huilong", "Hutang", "Jiangdu", "Jiangyan", "Jiangyin", "Jiangyuan", "Jianhu", "Jingcheng", "Jinsha", "Jintan", "Juegang", "Jurong", "Kunshan", "Lianyungang", "Liucheng", "Liyang", "Luodu", "Mudu", "Nanjing", "Nantong", "Pecheng", "Pukou", "Qidong", "Qinnan", "Qixia", "Rucheng", "Songling", "Sucheng", "Suicheng", "Suqian", "Suzhou", "Taicang", "Taixing", "Wujiang", "Wuxi", "Xiaolingwei", "Xiaoshi", "Xinan", "Xinpu", "Xuzhou", "Yancheng", "Yangshe", "Yangzhou", "Yizheng", "Yunhe", "Yunyang", "Yushan", "Zhangjiagang", "Zhangjiangang", "Zhaoyang", "Zhenjiang", "Zhongxing"]
      },
      {
        name: "Jiangsu Sheng",
        cities: ["Baoying", "Changzhou", "Dachang", "Dafeng", "Danyang", "Dingshu", "Dongkan", "Dongtai", "Fengxian", "Gaogou", "Gaoyou", "Guiren", "Haian", "Haizhou", "Hede", "Huaicheng", "Huaiyin", "Huilong", "Hutang", "Jiangdu", "Jiangyan", "Jiangyin", "Jiangyuan", "Jianhu", "Jingcheng", "Jinsha", "Jintan", "Juegang", "Jurong", "Kunshan", "Lianyungang", "Liucheng", "Liyang", "Luodu", "Mudu", "Nanjing", "Nantong", "Pecheng", "Pukou", "Qidong", "Qinnan", "Qixia", "Rucheng", "Songling", "Sucheng", "Suicheng", "Suqian", "Suzhou", "Taicang", "Taixing", "Wujiang", "Wuxi", "Xiaolingwei", "Xiaoshi", "Xinan", "Xinpu", "Xuzhou", "Yancheng", "Yangshe", "Yangzhou", "Yizheng", "Yunhe", "Yunyang", "Yushan", "Zhangjiagang", "Zhangjiangang", "Zhaoyang", "Zhenjiang", "Zhongxing"]
      },
      {
        name: "Jiangxi",
        cities: ["Fengxin", "Fenyi", "Ganzhou", "Jian", "Jiangguang", "Jingdezhen", "Jiujiang", "Leping", "Linchuan", "Nanchang", "Pingxiang", "Poyang", "Shangrao", "Xiangdong", "Xingan", "Xinjian", "Xinyu", "Xiongshi", "Yichun", "Yingtai", "Yingtan", "Zhangshui"]
      },
      {
        name: "Jilin",
        cities: ["Badaojiang", "Baicheng", "Baishishan", "Changchun", "Changling", "Chaoyang", "Daan", "Dashitou", "Dehui", "Dongchang", "Dongfeng", "Dunhua", "Erdaojiang", "Fuyu", "Gongzhuling", "Helong", "Hongmei", "Huadian", "Huangnihe", "Huinan", "Hunchun", "Jiaohe", "Jilin", "Jishu", "Jiutai", "Kaitong", "Kouqian", "Liaoyuan", "Linjiang", "Lishu", "Liuhe", "Longjing", "Meihekou", "Mingyue", "Nongan", "Panshi", "Pizhou", "Qianan", "Qianguo", "Sanchazi", "Shuangyang", "Shulan", "Siping", "Songjianghe", "Taonan", "Tumen", "Wangou", "Wangqing", "Xinglongshan", "Yanji", "Yantongshan", "Yushu", "Zhengjiatun", "Zhenlai"]
      },
      {
        name: "Liaoning",
        cities: ["Anshan", "Beipiao", "Benxi", "Changtu", "Chaoyang", "Dalian", "Dalianwan", "Dalinghe", "Dandong", "Dashiqiao", "Dongling", "Fengcheng", "Fushun", "Fuxin", "Haicheng", "Heishan", "Huanren", "Huludao", "Hushitai", "Jinxi", "Jinzhou", "Jiupu", "Kaiyuan", "Kuandian", "Langtou", "Liaoyang", "Liaozhong", "Lingyuan", "Liuerbao", "Lushunkou", "Nantai", "Panjin", "Pulandian", "Shenyang", "Sujiatun", "Tieling", "Wafangdian", "Xiaoshi", "Xifeng", "Xinchengxi", "Xingcheng", "Xinmin", "Xiongyue", "Xiuyan", "Yebaishou", "Yingkou", "Yuhong", "Zhuanghe"]
      },
      {
        name: "Liaoning Sheng",
        cities: ["Anshan", "Beipiao", "Benxi", "Changtu", "Chaoyang", "Dalian", "Dalianwan", "Dalinghe", "Dandong", "Dashiqiao", "Dongling", "Fengcheng", "Fushun", "Fuxin", "Haicheng", "Heishan", "Huanren", "Huludao", "Hushitai", "Jinxi", "Jinzhou", "Jiupu", "Kaiyuan", "Kuandian", "Langtou", "Liaoyang", "Liaozhong", "Lingyuan", "Liuerbao", "Lushunkou", "Nantai", "Panjin", "Pulandian", "Shenyang", "Sujiatun", "Tieling", "Wafangdian", "Xiaoshi", "Xifeng", "Xinchengxi", "Xingcheng", "Xinmin", "Xiongyue", "Xiuyan", "Yebaishou", "Yingkou", "Yuhong", "Zhuanghe"]
      },
      {
        name: "Nei Monggol",
        cities: []
      },
      {
        name: "Ningxia Hui",
        cities: []
      },
      {
        name: "Qinghai",
        cities: ["Qiatou", "Xining"]
      },
      {
        name: "Shaanxi",
        cities: ["Ankang", "Baoji", "Guozhen", "Hancheng", "Hanzhong", "Lishan", "Qili", "Tongchuan", "Weinan", "Xian", "Xianyang", "Yanan", "Yanliang", "Yulin", "Yuxia"]
      },
      {
        name: "Shandong",
        cities: ["Anqiu", "Bianzhuang", "Binzhou", "Boshan", "Boxing County", "Caocheng", "Changqing", "Chengyang", "Dengzhou", "Dezhou", "Dingtao", "Dongcun", "Dongdu", "Donge County", "Dongying", "Feicheng", "Fushan", "Gaomi", "Haiyang", "Hanting", "Hekou", "Heze", "Jiaonan", "Jiaozhou", "Jiehu", "Jimo", "Jinan", "Jining", "Juxian", "Juye", "Kunlun", "Laiwu", "Laiyang", "Laizhou", "Leling", "Liaocheng", "Licung", "Linqing", "Linqu", "Linshu", "Linyi", "Longkou", "Mengyin", "Mingshui", "Nanchou", "Nanding", "Nanma", "Ninghai", "Ningyang", "Pingdu", "Pingyi", "Pingyin", "Qingdao", "Qingzhou", "Qixia", "Qufu", "Rizhao", "Rongcheng", "Shancheng", "Shanting", "Shengzhuang", "Shenxian", "Shizilu", "Shouguang", "Shuiji", "Sishui", "Suozhen", "Taian", "Tancheng", "Taozhuang", "Tengzhou", "Weifang", "Weihai", "Wencheng", "Wendeng", "Wenshang", "Wudi", "Xiazhen", "Xincheng", "Xindian", "Xintai", "Yanggu", "Yangshan", "Yantai", "Yanzhou", "Yatou", "Yidu", "Yishui", "Yucheng", "Yuncheng", "Zaozhuang", "Zhangdian", "Zhangjiawa", "Zhangqiu", "Zhaocheng", "Zhoucheng", "Zhoucun", "Zhucheng", "Zhuwang", "Zicheng", "Zouping", "Zouxian"]
      },
      {
        name: "Shandong Sheng",
        cities: ["Anqiu", "Bianzhuang", "Binzhou", "Boshan", "Boxing County", "Caocheng", "Changqing", "Chengyang", "Dengzhou", "Dezhou", "Dingtao", "Dongcun", "Dongdu", "Donge County", "Dongying", "Feicheng", "Fushan", "Gaomi", "Haiyang", "Hanting", "Hekou", "Heze", "Jiaonan", "Jiaozhou", "Jiehu", "Jimo", "Jinan", "Jining", "Juxian", "Juye", "Kunlun", "Laiwu", "Laiyang", "Laizhou", "Leling", "Liaocheng", "Licung", "Linqing", "Linqu", "Linshu", "Linyi", "Longkou", "Mengyin", "Mingshui", "Nanchou", "Nanding", "Nanma", "Ninghai", "Ningyang", "Pingdu", "Pingyi", "Pingyin", "Qingdao", "Qingzhou", "Qixia", "Qufu", "Rizhao", "Rongcheng", "Shancheng", "Shanting", "Shengzhuang", "Shenxian", "Shizilu", "Shouguang", "Shuiji", "Sishui", "Suozhen", "Taian", "Tancheng", "Taozhuang", "Tengzhou", "Weifang", "Weihai", "Wencheng", "Wendeng", "Wenshang", "Wudi", "Xiazhen", "Xincheng", "Xindian", "Xintai", "Yanggu", "Yangshan", "Yantai", "Yanzhou", "Yatou", "Yidu", "Yishui", "Yucheng", "Yuncheng", "Zaozhuang", "Zhangdian", "Zhangjiawa", "Zhangqiu", "Zhaocheng", "Zhoucheng", "Zhoucun", "Zhucheng", "Zhuwang", "Zicheng", "Zouping", "Zouxian"]
      },
      {
        name: "Shanghai",
        cities: ["Jiading", "Minhang", "Shanghai", "Songjiang", "Trencin"]
      },
      {
        name: "Shanxi",
        cities: ["Changzhi", "Datong", "Houma", "Jiexiu", "Jincheng", "Linfen", "Taiyuan", "Xian", "Xinzhi", "Xinzhou", "Yangquan", "Yuanping", "Yuci", "Yuncheng"]
      },
      {
        name: "Sichuan",
        cities: ["Anju", "Baoning", "Chengdu", "Daan", "Dawan", "Daxian", "Deyang", "Dujiangyan City", "Guangkou", "Guangyuan", "Guihu", "Heyang", "Huayang", "Jiancheng", "Jiangyou", "Jijiang", "Leshan", "Linqiong", "Luocheng", "Luzhou", "Mianyang", "Nanchong", "Nanlong", "Neijiang", "Panzhihua", "Shifang", "Suining", "Taihe", "Tianpeng", "Tongchuan", "Xichang", "Xunchang", "Yaan", "Yibin", "Yongchang", "Zhonglong", "Zigong", "Ziyang"]
      },
      {
        name: "Tianjin",
        cities: ["Beichen", "Gangdong", "Hangu", "Jinghai", "Nankai", "Tanggu", "Tianjin", "Xianshuigu", "Yangcun", "Yangliuqing"]
      },
      {
        name: "Xianggang",
        cities: ["Guiqing", "Jiulong", "Quanwan", "Saigong", "Shatin", "Taipo", "Tuanmun", "Xianggang", "Yuanlong"]
      },
      {
        name: "Xinjiang",
        cities: ["Aksu", "Baijiantan", "Changji", "Dongshan", "Hami", "Hetian", "Karamay", "Kashi", "Korla", "Kuche", "Kuytun", "Shache", "Shihezi", "Shuimogou", "Toutunhe", "Urumqi", "Yining"]
      },
      {
        name: "Xizang",
        cities: ["Lasa"]
      },
      {
        name: "Yunnan",
        cities: ["Dali", "Gejiu", "Haikou", "Heilin", "Jinma", "Kaihua", "Kaiyuan", "Kunming", "Lianran", "Longquan", "Lucheng", "Mabai", "Majie", "Miyang", "Qujing", "Rongcheng", "Simao", "Wufeng", "Yunjinghong", "Yuxi Municipal", "Zhaotong", "Zhenhai", "Zhongshu", "Zhoucheng", "Zhuocheng"]
      },
      {
        name: "Zhejiang",
        cities: ["Aojiang", "Choucheng", "Cixi", "Daqiao", "Deqing", "Dinghai", "Dongyang", "Fuyang", "Haining", "Haiyan", "Hangzhou", "Huangyan", "Hushan", "Huzhou", "Jiaojiang", "Jiaxing", "Jinhua", "Jinxiang", "Kaihua", "Kunyang", "Lanxi", "Linan City", "Linhai", "Linping", "Lishui", "Liushi", "Ningbo", "Ninghai", "Pinghu", "Quzhou", "Ruian", "Shangyu", "Shaoxing", "Shenjiamen", "Taizhou City", "Tonglu", "Wenling", "Wenzhou", "Wuning", "Wuyi", "Xianju", "Xiaoshan", "Xiashi", "Xushan", "Yiwu", "Yongkang", "Yueqing", "Yuhuan", "Yuyao", "Zhejiang", "Zhenhai", "Zhicheng", "Zhuji", "fenghua", "jiashan"]
      },
      {
        name: "Zhejiang Sheng",
        cities: ["Aojiang", "Choucheng", "Cixi", "Daqiao", "Deqing", "Dinghai", "Dongyang", "Fuyang", "Haining", "Haiyan", "Hangzhou", "Huangyan", "Hushan", "Huzhou", "Jiaojiang", "Jiaxing", "Jinhua", "Jinxiang", "Kaihua", "Kunyang", "Lanxi", "Linan City", "Linhai", "Linping", "Lishui", "Liushi", "Ningbo", "Ninghai", "Pinghu", "Quzhou", "Ruian", "Shangyu", "Shaoxing", "Shenjiamen", "Taizhou City", "Tonglu", "Wenling", "Wenzhou", "Wuning", "Wuyi", "Xianju", "Xiaoshan", "Xiashi", "Xushan", "Yiwu", "Yongkang", "Yueqing", "Yuhuan", "Yuyao", "Zhejiang", "Zhenhai", "Zhicheng", "Zhuji", "fenghua", "jiashan"]
      }
    ],
    isoAlpha2: "CN",
    isoAlpha3: "CHN",
    isoNumeric: 156
  },
  {
    name: "Christmas Island",
    flag: "🇨🇽",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Christmas Island",
        cities: []
      }
    ],
    isoAlpha2: "CX",
    isoAlpha3: "CXR",
    isoNumeric: 162
  },
  {
    name: "Cocos [Keeling] Islands",
    flag: "🇨🇨",
    currency: {
      code: "AUD"
    },
    states: [
      {
        name: "Cocos (Keeling) Islands",
        cities: []
      }
    ]
  },
  {
    name: "Colombia",
    flag: "🇨🇴",
    currency: {
      code: "COP",
      name: "Peso",
      symbol: "$"
    },
    states: [
      {
        name: "Amazonas",
        cities: ["Leticia", "Puerto Narino"]
      },
      {
        name: "Antioquia",
        cities: ["Abejorral", "Abriaqui", "Alejandria", "Amaga", "Amalfi", "Andes", "Angelopolis", "Angostura", "Anori", "Antioquia", "Anza", "Apartado", "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Bolivar", "Briceno", "Buritica", "Caceres", "Caicedo", "Caldas", "Campamento", "Canasgordas", "Caracoli", "Caramanta", "Carepa", "Carmen de Viboral", "Carolina", "Caucasia", "Chigorodo", "Cisneros", "Cocorna", "Concepcion", "Concordia", "Copacabana", "Dabeiba", "Don Matias", "Ebejico", "El Bagre", "Entrerrios", "Envigado", "Fredonia", "Frontino", "Giraldo", "Girardota", "Gomez Plata", "Granada", "Guadalupe", "Guarne", "Guatape", "Heliconia", "Hispania", "Itagui", "Ituango", "Jardin", "Jerico", "La Ceja", "La Estrella", "La Pintada", "La Union", "Liborina", "Maceo", "Marinilla", "Medellin", "Montebello", "Murindo", "Mutata", "Narino", "Nechi", "Necocli", "Olaya", "Penol", "Peque", "Pueblorrico", "Puerto Berrio", "Puerto Nare", "Puerto Triunfo", "Remedios", "Retiro", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar", "San Andres", "San Carlos", "San Francisco", "San Jeronimo", "San Jose de la Montana", "San Juan de Uraba", "San Luis", "San Pedro", "San Pedro de Uraba", "San Rafael", "San Roque", "San Vicente", "Santa Barbara", "Santa Rosa de Osos", "Santo Domingo", "Santuario", "Segovia", "Sonson", "Sopetran", "Tamesis", "Taraza", "Tarso", "Titiribi", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaiso", "Vegachi", "Venecia", "Vigia del Fuerte", "Yali", "Yarumal", "Yolombo", "Yondo", "Zaragoza"]
      },
      {
        name: "Arauca",
        cities: ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondon", "Saravena", "Tame"]
      },
      {
        name: "Atlantico",
        cities: ["Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manati", "Palmar de Varela", "Piojo", "Polo Nuevo", "Ponedera", "Puerto Colombia", "Repelon", "Sabanagrande", "Sabanalarga", "Santa Lucia", "Santo Tomas", "Soledad", "Suan", "Tubara", "Usiacuri"]
      },
      {
        name: "Bogota",
        cities: ["Bogota"]
      },
      {
        name: "Bolivar",
        cities: ["Achi", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Calamar", "Cantagallo", "Cartagena", "Cicuco", "Clemencia", "Cordoba", "El Carmen de Bolivar", "El Guamo", "El Penon", "Hatillo de Loba", "Magangue", "Mahates", "Margarita", "Maria la Baja", "Mompos", "Montecristo", "Morales", "Pinillos", "Regidor", "Rio Viejo", "San Cristobal", "San Estanislao", "San Fernando", "San Jacinto", "San Jacinto del Cauca", "San Juan Nepomuceno", "San Martin de Loba", "San Pablo", "Santa Catalina", "Santa Rosa", "Santa Rosa del Sur", "Simiti", "Soplaviento", "Talaigua Nuevo", "Tiquisio", "Turbaco", "Turbana", "Villanueva", "Zambrano"]
      },
      {
        name: "Boyaca",
        cities: ["Almeida", "Aquitania", "Arcabuco", "Belen", "Berbeo", "Beteitiva", "Boavita", "Boyaca", "Briceno", "Buenavista", "Busbanza", "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquira", "Chiquiza", "Chiscas", "Chita", "Chitaraque", "Chivata", "Chivor", "Cienega", "Combita", "Coper", "Corrales", "Covarachia", "Cubara", "Cucaita", "Cuitiva", "Duitama", "El Cocuy", "El Espino", "Firavitoba", "Floresta", "Gachantiva", "Gameza", "Garagoa", "Guacamayas", "Guateque", "Guayata", "Guican", "Iza", "Jenesano", "Jerico", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande", "Leiva", "Macanal", "Maripi", "Miraflores", "Mongua", "Mongui", "Moniquira", "Motavita", "Muzo", "Nobsa", "Nuevo Colon", "Oicata", "Otanche", "Pachavita", "Paez", "Paipa", "Pajarito", "Panqueba", "Pauna", "Paya", "Paz del Rio", "Pesca", "Pisba", "Puerto Boyaca", "Quipama", "Ramiriqui", "Raquira", "Rondon", "Saboya", "Sachica", "Samaca", "San Eduardo", "San Jose de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema", "Santa Maria", "Santa Rosa de Viterbo", "Santa Sofia", "Santana", "Sativanorte", "Sativasur", "Siachoque", "Soata", "Socha", "Socota", "Sogamoso", "Somondoco", "Sora", "Soraca", "Sotaquira", "Susacon", "Sutamarchan", "Sutatenza", "Tasco", "Tenza", "Tibana", "Tibasosa", "Tinjaca", "Tipacoque", "Toca", "Togui", "Topaga", "Tota", "Tunja", "Tunungua", "Turmeque", "Tuta", "Tutasa", "Umbita", "Ventaquemada", "Viracacha", "Zetaquira"]
      },
      {
        name: "Caldas",
        cities: ["Aguadas", "Anserma", "Aranzazu", "Belalcazar", "Chinchina", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares", "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pacora", "Palestina", "Pensilvania", "Riosucio", "Risaralda", "Salamina", "Samana", "San Jose", "Supia", "Victoria", "Villamaria", "Viterbo"]
      },
      {
        name: "Caqueta",
        cities: ["Albania", "Belen Andaquies", "Cartagena del Chaira", "Curillo", "El Doncello", "El Paujil", "Florencia", "La Montanita", "Milan", "Morelia", "Puerto Rico", "San Jose de Fragua", "San Vicente del Caguan", "Solano", "Solita", "Valparaiso"]
      },
      {
        name: "Casanare",
        cities: ["Aguazul", "Chameza", "Hato Corozal", "La Salina", "Mani", "Monterrey", "Nunchia", "Orocue", "Paz de Ariporo", "Pore", "Recetor", "Sabanalarga", "Sacama", "San Luis de Palenque", "Tamara", "Tauramena", "Trinidad", "Villanueva", "Yopal"]
      },
      {
        name: "Cauca",
        cities: ["Almaguer", "Argelia", "Balboa", "Bolivar", "Buenos Aires", "Cajibio", "Caldono", "Caloto", "Corinto", "El Bordo", "El Tambo", "Florencia", "Guapi", "Inza", "Jambalo", "La Sierra", "La Vega", "Lopez", "Mercaderes", "Miranda", "Morales", "Padilla", "Paez", "Piamonte", "Piendamo", "Popayan", "Puerto Tejada", "Purace", "Rosas", "San Sebastian", "Santa Rosa", "Santander de Quilichao", "Silvia", "Sotara", "Suarez", "Sucre", "Timbio", "Timbiqui", "Toribio", "Totoro", "Villa Rica"]
      },
      {
        name: "Cesar",
        cities: ["Aguachica", "Agustin Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguana", "Curumani", "El Copey", "El Paso", "Gamarra", "Gonzalez", "La Gloria", "La Jagua Ibirico", "Manaure", "Pailitas", "Pelaya", "Pueblo Bello", "Rio de Oro", "Robles la Paz", "San Alberto", "San Diego", "San Martin", "Tamalameque", "Valledupar"]
      },
      {
        name: "Choco",
        cities: ["Acandi", "Alto Baudo", "Atrato", "Bagado", "Bahia Solano", "Bajo Baudo", "Bojaya", "Canton de San Pablo", "Carmen del Darien", "Certegui", "Condoto", "El Carmen", "Istmina", "Jurado", "Litoral del San Juan", "Lloro", "Medio Atrato", "Medio Baudo", "Medio San Juan", "Novita", "Nuqui", "Quibdo", "Rio Iro", "Rio Quito", "Riosucio", "San Jose del Palmar", "Sipi", "Tado", "Unguia", "Union Panamericana"]
      },
      {
        name: "Cordoba",
        cities: ["Ayapel", "Buenavista", "Canalete", "Cerete", "Chima", "Chinu", "Cienaga de Oro", "Cotorra", "La Apartada", "Lorica", "Los Cordobas", "Momil", "Monitos", "Montelibano", "Monteria", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador", "Purisima", "Sahagun", "San Andres Sotavento", "San Antero", "San Bernardo Viento", "San Carlos", "San Pelayo", "Tierralta", "Valencia"]
      },
      {
        name: "Cundinamarca",
        cities: ["Agua de Dios", "Alban", "Anapoima", "Anolaima", "Arbelaez", "Beltran", "Bituima", "Bojaca", "Cabrera", "Cachipay", "Cajica", "Caparrapi", "Caqueza", "Carmen de Carupa", "Chaguani", "Chia", "Chipaque", "Choachi", "Choconta", "Cogua", "Cota", "Cucunuba", "El Colegio", "El Penon", "El Rosal", "Facatativa", "Fomeque", "Fosca", "Funza", "Fuquene", "Fusagasuga", "Gachala", "Gachancipa", "Gacheta", "Gama", "Girardot", "Granada", "Guacheta", "Guaduas", "Guasca", "Guataqui", "Guatavita", "Guayabal de Siquima", "Guayabetal", "Gutierrez", "Jerusalen", "Junin", "La Calera", "La Mesa", "La Palma", "La Pena", "La Vega", "Lenguazaque", "Macheta", "Madrid", "Manta", "Medina", "Mosquera", "Narino", "Nemocon", "Nilo", "Nimaima", "Nocaima", "Ospina Perez", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Puli", "Quebradanegra", "Quetame", "Quipile", "Rafael Reyes", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco", "San Juan de Rioseco", "Sasaima", "Sesquile", "Sibate", "Silvania", "Simijaca", "Soacha", "Sopo", "Subachoque", "Suesca", "Supata", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima", "Tocancipa", "Topaipi", "Ubala", "Ubaque", "Ubate", "Une", "Utica", "Vergara", "Viani", "Villagomez", "Villapinzon", "Villeta", "Viota", "Yacopi", "Zipacon", "Zipaquira"]
      },
      {
        name: "Guainia",
        cities: ["Inirida"]
      },
      {
        name: "Guaviare",
        cities: ["Calamar", "El Retorno", "Miraflores", "San Jose del Guaviare"]
      },
      {
        name: "Huila",
        cities: ["Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elias", "Garzon", "Gigante", "Guadalupe", "Hobo", "Iquira", "Isnos", "La Argentina", "La Plata", "Nataga", "Neiva", "Oporapa", "Paicol", "Palermo", "Palestina", "Pital", "Pitalito", "Rivera", "Saladoblanco", "San Agustin", "Santa Maria", "Suaza", "Tarqui", "Tello", "Teruel", "Tesalia", "Timana", "Villavieja", "Yaguara"]
      },
      {
        name: "La Guajira",
        cities: []
      },
      {
        name: "Magdalena",
        cities: ["Algarrobo", "Aracataca", "Ariguani", "Cerro San Antonio", "Chivolo", "Cienaga", "Concordia", "El Banco", "El Pinon", "El Reten", "Fundacion", "Guamal", "Nueva Granada", "Pedraza", "Pijino del Carmen", "Pivijay", "Plato", "Puebloviejo", "Remolino", "Sabanas de San Angel", "Salamina", "San Sebastian", "San Zenon", "Santa Ana", "Santa Barbara de Pinto", "Santa Marta", "Sitionuevo", "Tenerife", "Zapayan", "Zona Bananera"]
      },
      {
        name: "Meta",
        cities: ["Acacias", "Barranca de Upia", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado", "Fuente de Oro", "Granada", "Guamal", "La Macarena", "La Uribe", "Lejanias", "Mapiripan", "Mesetas", "Puerto Concordia", "Puerto Gaitan", "Puerto Lleras", "Puerto Lopez", "Puerto Rico", "Restrepo", "San Carlos Guaroa", "San Juan de Arama", "San Juanito", "San Martin", "Villavicencio", "Vista Hermosa"]
      },
      {
        name: "Narino",
        cities: ["Alban", "Aldana", "Ancuya", "Arboleda", "Barbacoas", "Belen", "Buesaco", "Chachagui", "Colon", "Consaca", "Contadero", "Cordoba", "Cuaspud", "Cumbal", "Cumbitara", "El Charco", "El Penol", "El Rosario", "El Tablon", "El Tambo", "Funes", "Guachucal", "Guaitarilla", "Gualmatan", "Iles", "Imues", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Union", "Leiva", "Linares", "Los Andes", "Magui", "Mallama", "Mosquera", "Narino", "Olaya Herrera", "Ospina", "Pasto", "Pizarro", "Policarpa", "Potosi", "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payan", "Samaniego", "San Bernardo", "San Lorenzo", "San Pablo", "San Pedro de Cartago", "Sandona", "Santa Barbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Tuquerres", "Yacuanquer"]
      },
      {
        name: "Norte de Santander",
        cities: []
      },
      {
        name: "Putumayo",
        cities: ["Colon", "Mocoa", "Orito", "Puerto Asis", "Puerto Caycedo", "Puerto Guzman", "Puerto Leguizamo", "San Francisco", "San Miguel", "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzon"]
      },
      {
        name: "Quindio",
        cities: ["Armenia", "Buenavista", "Calarca", "Circasia", "Cordoba", "Filandia", "Genova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"]
      },
      {
        name: "Risaralda",
        cities: ["Apia", "Balboa", "Belen de Umbria", "Dos Quebradas", "Guatica", "La Celia", "La Virginia", "Marsella", "Mistrato", "Pereira", "Pueblo Rico", "Quinchia", "Santa Rosa de Cabal", "Santuario"]
      },
      {
        name: "San Andres y Providencia",
        cities: []
      },
      {
        name: "Santander",
        cities: ["Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolivar", "Bucaramanga", "Cabrera", "California", "Capitanejo", "Carcasi", "Cepita", "Cerrito", "Charala", "Charta", "Chima", "Chipata", "Cimitarra", "Concepcion", "Confines", "Contratacion", "Coromoro", "Curiti", "El Carmen", "El Guacamayo", "El Penon", "El Playon", "Encino", "Enciso", "Florian", "Floridablanca", "Galan", "Gambita", "Giron", "Guaca", "Guadalupe", "Guapota", "Guavata", "Guepsa", "Hato", "Jesus Maria", "Jordan", "La Belleza", "La Paz", "Landazuri", "Lebrija", "Los Santos", "Macaravita", "Malaga", "Matanza", "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Paramo", "Piedecuesta", "Pinchote", "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andres", "San Benito", "San Gil", "San Joaquin", "San Jose de Miranda", "San Miguel", "San Vicente de Chucuri", "Santa Barbara", "Santa Helena", "Simacota", "Socorro", "Suaita", "Sucre", "Surata", "Tona", "Valle San Jose", "Velez", "Vetas", "Villanueva", "Zapatoca"]
      },
      {
        name: "Sucre",
        cities: ["Buenavista", "Caimito", "Chalan", "Coloso", "Corozal", "El Roble", "Galeras", "Guaranda", "La Union", "Los Palmitos", "Majagual", "Morroa", "Ovejas", "Palmito", "Sampues", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre", "San Pedro", "Since", "Sincelejo", "Sucre", "Tolu", "Toluviejo"]
      },
      {
        name: "Tolima",
        cities: ["Alpujarra", "Alvarado", "Ambalema", "Anzoategui", "Ataco", "Cajamarca", "Carmen de Apicala", "Casabianca", "Chaparral", "Coello", "Coyaima", "Cunday", "Dolores", "Espinal", "Falan", "Flandes", "Fresno", "Guamo", "Guayabal", "Herveo", "Honda", "Ibague", "Icononzo", "Lerida", "Libano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas", "Prado", "Purificacion", "Rioblanco", "Roncesvalles", "Rovira", "Saldana", "San Antonio", "San Luis", "Santa Isabel", "Suarez", "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"]
      },
      {
        name: "Valle del Cauca",
        cities: []
      },
      {
        name: "Vaupes",
        cities: ["Acaricuara", "Mitu", "Papunaua", "Taraira", "Villa Fatima", "Yavarate"]
      },
      {
        name: "Vichada",
        cities: ["Cumaribo", "La Primavera", "Puerto Carreno", "Santa Rosalia"]
      }
    ],
    isoAlpha2: "CO",
    isoAlpha3: "COL",
    isoNumeric: 170
  },
  {
    name: "Comoros",
    flag: "🇰🇲",
    currency: {
      code: "KMF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Mwali",
        cities: ["Fomboni"]
      },
      {
        name: "Njazidja",
        cities: ["Mitsamiouli", "Moroni"]
      },
      {
        name: "Nzwani",
        cities: ["Domoni", "Mutsamudu"]
      }
    ],
    isoAlpha2: "KM",
    isoAlpha3: "COM",
    isoNumeric: 174
  },
  {
    name: "Cook Islands",
    flag: "🇨🇰",
    currency: {
      code: "NZD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Aitutaki",
        cities: ["Amuri"]
      },
      {
        name: "Atiu",
        cities: ["Atiu"]
      },
      {
        name: "Mangaia",
        cities: ["Mangaia"]
      },
      {
        name: "Manihiki",
        cities: ["Tauhunu"]
      },
      {
        name: "Mauke",
        cities: ["Mauke"]
      },
      {
        name: "Mitiaro",
        cities: ["Mitiaro"]
      },
      {
        name: "Nassau",
        cities: ["Nassau"]
      },
      {
        name: "Pukapuka",
        cities: ["Roto"]
      },
      {
        name: "Rakahanga",
        cities: ["Rakahanga"]
      },
      {
        name: "Rarotonga",
        cities: ["Avarua"]
      },
      {
        name: "Tongareva",
        cities: ["Omoka"]
      }
    ],
    isoAlpha2: "CK",
    isoAlpha3: "COK",
    isoNumeric: 184
  },
  {
    name: "Costa Rica",
    flag: "🇨🇷",
    currency: {
      code: "CRC",
      name: "Colon",
      symbol: "₡"
    },
    states: [
      {
        name: "Alajuela",
        cities: ["Alajuela", "Atenas", "Bijagua", "Buenos Aires", "Carrillos", "Desemparados", "Dos Rios", "Esquipulas", "Florencia", "Fortuna", "Grecia", "Guacimo", "Laguna", "Los Chiles", "Mastate", "Naranjo", "Orotina", "Palmares", "Piedades Norte", "Pital", "Pocosol", "Quesada", "Rio Segundo", "Sabanilla", "San Antonio", "San Jose", "San Juan", "San Mateo", "San Pedro", "San Rafael", "San Ramon", "San Roque", "Santiago", "Sarchi Norte", "Sarchi Sur", "Tigra", "Turricares", "Upala", "Venado", "Zarcero"]
      },
      {
        name: "Cartago",
        cities: ["Aguacaliente", "Capellades", "Carmen", "Cartago", "Concepcion", "Cot", "Dulce Nombre", "El Tejar", "Guadalupe", "Juan Vinas", "La Suiza", "Orosi", "Pacayas", "Paraiso", "Pejibaye", "San Diego", "San Isidro", "San Juan", "San Nicolas", "San Rafael", "San Ramon", "Tierra Blanca", "Tobosi", "Tres Rios", "Tucurrique", "Turrialba"]
      },
      {
        name: "Guanacaste",
        cities: ["Bagaces", "Belen", "Canas", "Filadeldia", "Fortuna", "Hojancha", "Juntas", "La Cruz", "Liberia", "Mogote", "Nandayure", "Nicoya", "Samara", "Santa Cruz", "Sardinal", "Tilaran"]
      },
      {
        name: "Heredia",
        cities: ["Angeles", "Asuncion", "Barrantes", "Barva", "Heredia", "Horquetas", "Llorente", "Mercedes", "Puerto Viejo", "Rivera", "San Antonio", "San Francisco", "San Isidro", "San Joaquin", "San Jose", "San Josecito", "San Juan", "San Miguel", "San Pablo", "San Pedro", "San Rafael", "San Roque", "San Vicente", "Santa Barbara", "Santa Lucia", "Santa Rosa", "Santiago", "Santo Domingo", "Santo Tomas", "Ulloa"]
      },
      {
        name: "Limon",
        cities: ["Batan", "Cahuita", "Cariari", "Guacimo", "Guapiles", "Jimenez", "Limon", "Matina", "Pocora", "Rita", "Roxana", "Siquirres", "Sixaola", "Valle la Estrella"]
      },
      {
        name: "Puntarenas",
        cities: ["Buenos Aires", "Canoas", "Chacarita", "Corredor", "Esparta", "Espiritu Santo", "Golfito", "Guaycara", "Jaco", "La Cuesta", "Macacona", "Manzanillo", "Miramar", "Palmar", "Paquera", "Parrita", "Puerto Cortes", "Puerto Jimenez", "Puntarenas", "Quepos", "San Vito"]
      },
      {
        name: "San Jose",
        cities: []
      }
    ],
    isoAlpha2: "CR",
    isoAlpha3: "CRI",
    isoNumeric: 188
  },
  {
    name: "Croatia",
    flag: "🇭🇷",
    currency: {
      code: "HRK",
      name: "Kuna",
      symbol: "kn"
    },
    states: [
      {
        name: "Bjelovar-Bilogora",
        cities: ["Bjelovar", "Brezovac", "Chazma", "Daruvar", "Daruvarski Brestovac", "Dezhanovac", "Dhulovac", "Gareshnica", "Gareshnichki Brestovac", "Grubishno Polje", "Gudovac", "Hercegovac", "Ivanska", "Klokochevac", "Konchanica", "Predavac", "Rovishce", "Shandrovac", "Sirach", "Trojstveni Markovac", "Velika Pisanica", "Veliki Grdhevac", "Veliki Zdenci", "Veliko Trojstvo", "Zhdralovi"]
      },
      {
        name: "Dubrovnik-Neretva",
        cities: ["Blato", "Cavtat", "Chibacha", "Chilipi", "Dubrovnik", "Komin", "Korchula", "Lumbarda", "Metkovic", "Mlini", "Mokoshica", "Nova Mokoshica", "Opuzen", "Orebic", "Otrich-Seoci", "Ploche", "Smokvica", "Stashevica", "Vela Luka", "Zaton", "Zhrnovo"]
      },
      {
        name: "Grad Zagreb",
        cities: []
      },
      {
        name: "Istra",
        cities: ["Bale", "Banjole", "Brtonigla", "Buje", "Buzet", "Fazhana", "Funtana", "Galizhana", "Labin", "Lizhnjan", "Marchana", "Medulin", "Novigrad", "Pazin", "Porech", "Premantura", "Pula", "Rabac", "Rasha", "Rovinj", "Sveti Petar u Shumi", "Tar", "Umag", "Vinezh", "Vodnjan", "Vrsar"]
      },
      {
        name: "Karlovac",
        cities: ["Cerovac Vukmansichki", "Draganic", "Duga Resa", "Josipdol", "Karlovac", "Mrezhnichki Varosh", "Ogulin", "Oshtarije", "Ozalj", "Plashki", "Slunj", "Vojnic"]
      },
      {
        name: "Koprivnica-Krizhevci",
        cities: ["Dhelekovec", "Dhurdhevac", "Drnje", "Ferdinandovac", "Glogovac", "Gola", "Hlebine", "Kalinovac", "Kloshtar Podravski", "Koprivnica", "Koprivnichki Bregi", "Koprivnichki Ivanec", "Krizhevci", "Legrad", "Molve", "Novigrad Podravski", "Novo Virje", "Peteranec", "Podravske Sesvete", "Rasinja", "Reka", "Sigetec", "Starigrad", "Sveti Ivan Zhabno", "Trema", "Virje"]
      },
      {
        name: "Krapina-Zagorje",
        cities: ["Andrashevec", "Bedekovchina", "Dhurmanec", "Donja Pachetina", "Donja Shemnica", "Donja Stubica", "Dubrovchan", "Gornja Stubica", "Hum na Sutli", "Klanjec", "Konjishchina", "Krapina", "Krapinske Toplice", "Laz Bistrichki", "Marija Bistrica", "Mihovljan", "Oroslavje", "Podgorje Bistrichko", "Poznanovec", "Pregrada", "Radoboj", "Shkaricevo", "Shpichkovina", "Stubichke Toplice", "Sveti Krizh Zachretje", "Veliko Trgovishce", "Zabok", "Zlatar", "Zlatar-Bistrica"]
      },
      {
        name: "Lika-Senj",
        cities: ["Brinje", "Donji Lapac", "Gospic", "Korenica", "Lichki Osik", "Lichko Leshce", "Novalja", "Otochac", "Perushic", "Prozor", "Senj"]
      },
      {
        name: "Medhimurje",
        cities: ["Belica", "Chakovec", "Cirkovljan", "Dekanovec", "Domashinec", "Donja Dubrava", "Donji Kraljevec", "Donji Vidovec", "Drzhimurec", "Dunjkovec", "Gardinovec", "Gorichan", "Gornji Hrashcan", "Hodoshan", "Ivanovec", "Kotoriba", "Kurshanec", "Lopatinec", "Machkovec", "Mala Subotica", "Mihovljan", "Mursko Sredishce", "Nedelishce", "Novakovec", "Novo Selo Rok", "Orehovica", "Palovec", "Peklenica", "Podturen", "Prelog", "Pribislavec", "Pushcine", "Savska Ves", "Selnica", "Shenkovec", "Strahoninec", "Sveta Marija", "Trnovec", "Vratishinec", "Zasadbreg"]
      },
      {
        name: "Medimurska Zupanija",
        cities: []
      },
      {
        name: "Osijek-Baranja",
        cities: ["Antunovac", "Batina", "Beli Manastir", "Belishce", "Beljevina", "Bijelo Brdo", "Bilje", "Bistrinci", "Bizovac", "Branjin Vrh", "Brijeshce", "Brijest", "Ceminac", "Chepin", "Crnkovci", "Dalj", "Darda", "Dhakovo", "Dhurdhenovac", "Donja Motichina", "Donji Miholac", "Erdut", "Ernestinovo", "Ferichanci", "Gashinci", "Gorjani", "Grabovac", "Ivanovac", "Ivanovci Gorjanski", "Jagodnjak", "Jelisavac", "Josipovac", "Josipovac Punitovachki", "Karanac", "Keshinci", "Knezhevi Vinogradi", "Knezhevo", "Koritna", "Koshka", "Kushevac", "Ladimirevci", "Laslovo", "Lug", "Marijanci", "Markovac Nashichki", "Martin", "Mece", "Moslavina Podravska", "Nashice", "Osijek", "Ovchara", "Petlovac", "Petrijevci", "Pishkorevci", "Podgorach", "Popvac", "Rakitovica", "Sarvash", "Satnica Dhakovachka", "Selci Dhakovacki", "Semeljci", "Shiroko Polje", "Strizivojna", "Sveti Dhuradh", "Tenja", "Valpovo", "Velimirovac", "Viljevo", "Vishkovci", "Vishnjevac", "Vladislavci", "Vuka", "Vukojevci", "Zmajevac", "Zoljan"]
      },
      {
        name: "Osjecko-Baranjska Zupanija",
        cities: []
      },
      {
        name: "Pozhega-Slavonija",
        cities: ["Badljevina", "Brodski Drenovac", "Dervishaga", "Gradac", "Jakshic", "Kaptol", "Kutjevo", "Lipik", "Pakrac", "Pleternica", "Pozhega", "Prekopkra", "Trenkovo", "Velika", "Vetovo", "Vidovci"]
      },
      {
        name: "Primorje-Gorski Kotar",
        cities: []
      },
      {
        name: "Shibenik-Knin",
        cities: ["Bilice", "Brodarica", "Drnish", "Dubrava kod Shibenika", "Grebashtica", "Jezera", "Kistanje", "Knin", "Kovachic", "Murter", "Pirovac", "Primoshten", "Rogoznica", "Shibenik", "Skradin", "Tisno", "Tribunj", "Vodice", "Vrpolje", "Zaton"]
      },
      {
        name: "Sisak-Moslavina",
        cities: ["Brestacha", "Brochice", "Budashevo", "Donja Grachenica", "Dvor", "Glina", "Gornja Grachenica", "Gornja Jelenska", "Greda", "Gvozd", "Hrastelnica", "Hrvatska Dubica", "Hrvatska Kostajnica", "Husain", "Ilova", "Kutina", "Lekenik", "Lipovljani", "Moshchenica", "Novska", "Odra Sisachka", "Osekovo", "Peshcenica", "Petrinja", "Popovacha", "Potok", "Rajic", "Repushnica", "Sisak", "Staro Prachno", "Sunja", "Topolovac", "Voloder"]
      },
      {
        name: "Slavonski Brod-Posavina",
        cities: []
      },
      {
        name: "Split-Dalmacija",
        cities: ["Bashka Voda", "Bol", "Brela", "Brnaze", "Cista Velika", "Donji Prolozhac", "Donji Vinjani", "Duce", "Dugi Rat", "Dugopolje", "Gala", "Glavice", "Glavina Donja", "Gornji Vincjani", "Gradac", "Grubine", "Hrvace", "Hvar", "Imotski", "Jelsa", "Jesenice", "Kamen", "Kashtel Gambelovac", "Kashtel Gomilica", "Kashtel Lukshic", "Kashtel Novi", "Kashtel Shtafilic", "Kashtel Stari", "Kashtel Sucurac", "Katuni", "Klis", "Komizha", "Koshute", "Lovrec", "Makarska", "Marina", "Mastrinka", "Milna", "Mravince", "Neoric", "Obrovac Sinjski", "Okrug Gornji", "Omish", "Otok", "Podgora", "Podstrana", "Poljica", "Postira", "Postranje", "Potravlje", "Primorski Dolac", "Puchishca", "Ruda", "Runovic", "Seget Donji", "Seget Vranjica", "Selca", "Sinj", "Slatine", "Solin", "Split", "Srinjine", "Stari Grad", "Stobrech", "Supetar", "Trilj", "Trogir", "Tuchepi", "Turjaci", "Vinishce", "Vis", "Vranjic", "Vrgorac", "Vrlika", "Zagvozd", "Zhrnovnica", "Zmijavci"]
      },
      {
        name: "Varazhdin",
        cities: ["Bedenec", "Beletinec", "Beretinec", "Breznica", "Chreshnjevo", "Donja Voca", "Donje Ladanje", "Gornje Ladanje", "Gornje Vratno", "Gornji Kneginec", "Gornji Kucan", "Hrashcica", "Hrastovsko", "Hrzhenica", "Ivanec", "Jalkovec", "Jalzhabet", "Jerovec", "Klenovnik", "Kljuch", "Kucan Marof", "Lepoglava", "Ljubeshcica", "Ludbreg", "Madzharevo", "Mali Bukovec", "Nedeljanec", "Nova Ves Petrijanec", "Novi Marof", "Petrijanec", "Podevchevo", "Presechno", "Remetinec", "Selnik", "Shemovec", "Srachinec", "Sveti Petar", "Svibovec Podravski", "Trnovec", "Turchin", "Tuzhno", "Varazhdin", "Varazhdin Breg", "Varazhdinske Toplice", "Vidovec", "Vinica", "Zavrshje Podbelsko", "Zharovnica"]
      },
      {
        name: "Virovitica-Podravina",
        cities: ["Borova", "Busetina", "Cabuna", "Chachinci", "Gradina", "Korija", "Mikleush", "Milanovac", "Nova Bukovica", "Orahovica", "Pitomacha", "Podgorje", "Rezovac", "Shpishic Bukovica", "Slatina", "Suhopolje", "Turanovac", "Virovitica", "Vocin", "Zdenci"]
      },
      {
        name: "Vukovar-Srijem",
        cities: ["Andrijashevci", "Antin", "Babina Greda", "Bapska", "Bobota", "Bogdanovci", "Borovo", "Boshnjaci", "Brshadin", "Ceric", "Cerna", "Drenovci", "Gradishte", "Gunja", "Ilacha", "Ilok", "Ivankovo", "Jarmina", "Komletinci", "Lipovac", "Lovas", "Markushica", "Mirkovci", "Negoslavci", "Nijemci", "Novi Jankovci", "Nushtar", "Otok", "Petrovci", "Posavski Podgajci", "Privlaka", "Rachinovci", "Rajevo Selo", "Retkovci", "Rokovci", "Sharengrad", "Shishkovci", "Shtitar", "Slakovci", "Soljani", "Sotin", "Stari Jankovci", "Stari Mikanovci", "Tordinci", "Tovarnik", "Trpinja", "Vinkovci", "Vodhinci", "Vrbanja", "Vukovar", "Zhupanja"]
      },
      {
        name: "Zadar",
        cities: ["Benkovac", "Bibinje", "Biograd na Moru", "Debeljak", "Galovac", "Gorica", "Gornji Karin", "Grachac", "Jasenice", "Kali", "Krushevo", "Nin", "Obrovac", "Pag", "Pakoshtane", "Polacha", "Polichnik", "Poljica", "Posedarje", "Preko", "Pridraga", "Privlaka", "Razhanac", "Shkabrnja", "Slivnica", "Starigrad", "Sukoshan", "Sveti Filip i Jakov", "Turanj", "Ugljan", "Vir", "Vrsi", "Zadar", "Zemunik Donji"]
      },
      {
        name: "Zagreb",
        cities: ["Bestovje", "Bishkupec Zelinski", "Brckovljani", "Brdovec", "Bregana", "Brezje", "Bushevec", "Celine", "Domaslovec", "Donja Bistra", "Donja Kupchina", "Donja Lomnica", "Donja Zdenchina", "Donji Desinec", "Donji Stupnik", "Dubrava", "Dugo Selo", "Gornja Bistra", "Gornji Laduch", "Gornji Stupnik", "Grachec", "Gradici", "Ivan Bistranski", "Ivanic-Grad", "Jablanovec", "Jakovlje", "Jastrebarsko", "Kerestinec", "Klincha Sela", "Kloshtar Ivanic", "Kozinshchak", "Krizh", "Kuche", "Kupinec", "Lonjica", "Luka", "Lukarishce", "Lukavec", "Lupoglav", "Michevec", "Mraclin", "Novaki", "Novo Chiche", "Novoselec", "Oborovo Bistranski", "Oreshje", "Pojatno", "Poljanica Bistranska", "Prigorje Brdovechko", "Rakitje", "Rakov Potok", "Rude", "Samobor", "Strmec", "Sveta Nedelja", "Sveti Ivan Zelina", "Turopolje", "Velika Gorica", "Velika Mlaka", "Velika Ostrna", "Vrbovec", "Vukovina", "Zapreshic", "Zdenci Brdovechki"]
      }
    ],
    isoAlpha2: "HR",
    isoAlpha3: "HRV",
    isoNumeric: 191
  },
  {
    name: "Cuba",
    flag: "🇨🇺",
    currency: {
      code: "CUP",
      name: "Peso",
      symbol: "₱"
    },
    states: [
      {
        name: "Camaguey",
        cities: ["Camaguey", "Caney", "Carlos Manuel de Cespedes", "Esmeralda", "Florida", "Guaimaro", "Minas", "Nuevitas", "Santa Cruz del Sur", "Sibanicu", "Vertientes"]
      },
      {
        name: "Ciego de Avila",
        cities: []
      },
      {
        name: "Cienfuegos",
        cities: ["Cienfuegos", "Cruces", "Cumanayagua", "Palmira", "Rodas"]
      },
      {
        name: "Ciudad de la Habana",
        cities: []
      },
      {
        name: "Granma",
        cities: ["Bayamo", "Campechuela", "Guisa", "Jiguani", "Manzanillo", "Media Luna", "Niquero", "Pilon", "Rio Cauto", "Yara"]
      },
      {
        name: "Guantanamo",
        cities: ["Baracoa", "Guantanamo", "Yateras"]
      },
      {
        name: "Habana",
        cities: ["Havana"]
      },
      {
        name: "Holguin",
        cities: ["Antilla", "Baguanos", "Banes", "Cacocum", "Cauto Cristo", "Cueto", "Gibara", "Holguin", "Jobabo", "Moa", "Sagua de Tanamo"]
      },
      {
        name: "Isla de la Juventud",
        cities: []
      },
      {
        name: "La Habana",
        cities: []
      },
      {
        name: "Las Tunas",
        cities: []
      },
      {
        name: "Matanzas",
        cities: ["Abreus", "Agramonte", "Aguacate", "Aguada de Pasajeros", "Alacranes", "Bolondron", "Calimete", "Cardenas", "Carlos Rojas", "Colon", "Corralillo", "Jaguey Grande", "Jovellanos", "Juan Gualberto Gomez", "Los Arabos", "Manguito", "Marti", "Matanzas", "Maximo Gomez", "Pedro Betancourt", "Perico", "Union de Reyes", "Varadero"]
      },
      {
        name: "Pinar del Rio",
        cities: []
      },
      {
        name: "Sancti Spiritus",
        cities: []
      },
      {
        name: "Santiago de Cuba",
        cities: []
      },
      {
        name: "Villa Clara",
        cities: []
      }
    ],
    isoAlpha2: "CU",
    isoAlpha3: "CUB",
    isoNumeric: 192
  },
  {
    name: "Cyprus",
    flag: "🇨🇾",
    currency: {
      code: "CYP",
      name: "Pound",
      symbol: false
    },
    states: [
      {
        name: "Government controlled area",
        cities: []
      },
      {
        name: "Limassol",
        cities: ["Limassol"]
      },
      {
        name: "Nicosia District",
        cities: []
      },
      {
        name: "Paphos",
        cities: ["Paphos"]
      },
      {
        name: "Turkish controlled area",
        cities: []
      }
    ],
    isoAlpha2: "CY",
    isoAlpha3: "CYP",
    isoNumeric: 196
  },
  {
    name: "Czech Republic",
    flag: "🇨🇿",
    currency: {
      code: "CZK",
      name: "Koruna",
      symbol: "Kč"
    },
    states: [
      {
        name: "Central Bohemian",
        cities: []
      },
      {
        name: "Frycovice",
        cities: ["Frycovice"]
      },
      {
        name: "Jihocesky Kraj",
        cities: []
      },
      {
        name: "Jihochesky",
        cities: ["Bechyne", "Blatna", "Cheske Budejovice", "Chesky Krumlov", "Dachice", "Jindrichuv Hradec", "Kaplice", "Milevsko", "Pisek", "Prachatice", "Protivin", "Sezimovo Usti", "Sobeslav", "Strakonice", "Tabor", "Trebon", "Tyn nad Vltavou", "Veseli nad Luzhnici", "Vimperk", "Vodnany"]
      },
      {
        name: "Jihomoravsky",
        cities: ["Adamov", "Blansko", "Boskovice", "Breclav", "Brno", "Buchovice", "Dubnany", "Hodonin", "Hrusky", "Hustopeche", "Ivanchice", "Kurim", "Kyjov", "Letovice", "Mikulov", "Moravsky Krumlov", "Namesht'' nad Oslavou", "Rosice", "Shlapanice", "Slavkov u Brna", "Tishnov", "Vyshkov", "Znojmo"]
      },
      {
        name: "Karlovarsky",
        cities: ["Ash", "Bozicany", "Cheb", "Chodov", "Frantishkovy Lazne", "Horni Slavkov", "Karlovy Vary", "Kraslice", "Kynshperk nad Ohri", "Marianske Lazne", "Nejdek", "Ostrov", "Sokolov"]
      },
      {
        name: "Klecany",
        cities: ["Klecany"]
      },
      {
        name: "Kralovehradecky",
        cities: ["Broumov", "Cherveny Kostelec", "Cheska Skalice", "Chlumec nad Cidlinou", "Dobrushka", "Dvur Kralove", "Habartov", "Holice", "Horice", "Hostinne", "Hradec Kralove", "Hronov", "Jaromer", "Jichin", "Kostelec nad Orlici", "Nachod", "Nova Paka", "Nove Mesto nad Metuji", "Novy Bydzhov", "Rychnov nad Knezhnou", "Trebechovice pod Orebem", "Trutnov", "Tynishte nad Orlici", "Upice", "Vrchlabi"]
      },
      {
        name: "Liberecky",
        cities: ["Ceska Lipa", "Cheska Kamenice", "Cheska Lipa", "Chrastava", "Doksy", "Frydlant", "Hradek", "Jablonec", "Jilemnice", "Liberec", "Lomnice nad Popelkou", "Mimon", "Novy Bor", "Semily", "Tanvald", "Turnov", "Zhelezny Brod"]
      },
      {
        name: "Lipov",
        cities: ["Lipov"]
      },
      {
        name: "Moravskoslezsky",
        cities: ["Bilovec", "Bohumin", "Bruntal", "Chesky Teshin", "Frenshtat", "Frydek-Mistek", "Frydlant nad Ostravici", "Fulnek", "Havirov", "Hluchin", "Hradec nad Moravice", "Jablunkov", "Karvina", "Koprivnice", "Kravare", "Krnov", "Novy Jichin", "Odry", "Opava", "Orlova", "Ostrava", "Petrvald", "Pribor", "Rychvald", "Rymarov", "Shenov", "Studenka", "Trinec", "Vitkov", "Vratimov", "Vrbno pod Pradedem"]
      },
      {
        name: "Olomoucky",
        cities: ["Hranice", "Jesenik", "Kojetin", "Lipnik nad Becvou", "Litovel", "Mohelnice", "Olomouc", "Prerov", "Prostejov", "Shternberk", "Shumperk", "Unichov", "Zabreh"]
      },
      {
        name: "Olomoucky Kraj",
        cities: ["Hranice", "Jesenik", "Kojetin", "Lipnik nad Becvou", "Litovel", "Mohelnice", "Olomouc", "Prerov", "Prostejov", "Shternberk", "Shumperk", "Unichov", "Zabreh"]
      },
      {
        name: "Pardubicky",
        cities: ["Cheska Trebova", "Chocen", "Chrudim", "Chvaletice", "Hermanuv Mestec", "Hlinsko", "Lanshkroun", "Letohrad", "Litomyshl", "Moravska Trebova", "Pardubice", "Polichka", "Policka", "Prelouch", "Skutech", "Svitavy", "Usti nad Orlici", "Vysoke Myto", "Zhamberk"]
      },
      {
        name: "Plzensky",
        cities: ["Dobrany", "Domazhlice", "Horazhd''ovice", "Horshovky Tyn", "Kdyne", "Klatovy", "Nyrany", "Nyrsko", "Plana", "Plzen", "Preshtice", "Radnice", "Rokycany", "Stribro", "Sushice", "Tachov"]
      },
      {
        name: "Praha",
        cities: ["Prague", "Praha"]
      },
      {
        name: "Rajhrad",
        cities: ["Rajhrad"]
      },
      {
        name: "Smirice",
        cities: ["Smirice"]
      },
      {
        name: "South Moravian",
        cities: []
      },
      {
        name: "Straz nad Nisou",
        cities: []
      },
      {
        name: "Stredochesky",
        cities: ["Benatky nad Jizerou", "Beneshov", "Beroun", "Brandys nad Labem-Stara Bolesl", "Chaslav", "Chavaletice", "Chelakovice", "Chesky Brod", "Dobrish", "Horovice", "Kladno", "Kolin", "Kralupy nad Vltavou", "Kutna Hora", "Lysa nad Labem", "Melnik", "Mlada Boleslav", "Mnichovo Hradishte", "Neratovice", "Nove Strasheci", "Nymburk", "Podebrady", "Pribram", "Rakovnik", "Richany", "Rousinov", "Roztoky", "Sedlcany", "Slany", "Stochov", "Vlashim", "Zruch nad Sazavou"]
      },
      {
        name: "Unicov",
        cities: ["Unicov"]
      },
      {
        name: "Ustecky",
        cities: ["Bilina", "Chomutov", "Dechin", "Dubi", "Duchcov", "Jilove", "Kadan", "Klasterec nad Ohri", "Krupka", "Litomerice", "Litvinov", "Louny", "Lovosice", "Mezibori", "Most", "Osek", "Podborany", "Roudnice", "Rumburk", "Shluknov", "Shteti", "Teplice", "Usti", "Varnsdorf", "Zatec"]
      },
      {
        name: "Valletta",
        cities: ["Valletta"]
      },
      {
        name: "Velesin",
        cities: ["Velesin"]
      },
      {
        name: "Vysochina",
        cities: ["Bystrice nad Pernshtejnem", "Chotebor", "Havlichkuv Brod", "Humpolec", "Jihlava", "Ledech", "Moravske Budejovice", "Nove Mesto na Morave", "Okrisky", "Pacov", "Pelhrimov", "Polna", "Svetla nad Sazavou", "Telch", "Trebich", "Tresht", "Velke Mezirichi", "Zhd''ar"]
      },
      {
        name: "Zlinsky",
        cities: ["Brumov", "Bystrice pod Hostynem", "Chropyne", "Holeshov", "Hulin", "Kromerizh", "Kunovice", "Napajedla", "Otrokovice", "Rozhnov", "Roznov pod Radhostem", "Slavicin", "Slusovice", "Stare Mesto", "Strazhnice", "Uherske Hradishte", "Uhersky Brod", "Valashske Klobouky", "Valashske Mezirichi", "Veseli nad Moravou", "Vsetin", "Zborovice", "Zlin"]
      }
    ],
    isoAlpha2: "CZ",
    isoAlpha3: "CZE",
    isoNumeric: 203
  },
  {
    name: "Democratic Republic of the Congo",
    flag: "🇨🇩",
    currency: {
      code: "CDF"
    },
    states: [
      {
        name: "Bandundu",
        cities: ["Bandundu", "Bolobo", "Bulungu", "Gungu", "Idiofa", "Inongo", "Kahemba", "Kasongo-Lunda", "Kenge", "Kikwit", "Kiri", "Kutu", "Lusanga", "Mangai", "Mushie", "Nioki"]
      },
      {
        name: "Bas-Congo",
        cities: ["Boma", "Kasangulu", "Kimpese", "Madimba", "Matadi", "Mbanza-Ngungu", "Muanda", "Tshela"]
      },
      {
        name: "Equateur",
        cities: ["Basankusu", "Binga", "Bodalangi", "Boende", "Bongandanga", "Bosobolo", "Bumba", "Businga", "Gbadolite", "Gemena", "Ikela", "Libenge", "Lisala", "Makanza", "Mbandaka", "Mobayi-Mbongo", "Yakoma", "Yandongi", "Yumbi", "Zongo"]
      },
      {
        name: "Haut-Congo",
        cities: ["Aba", "Aketi", "Bafwasende", "Banalia", "Basoko", "Bondo", "Bunia", "Buta", "Djugu", "Faradje", "Gwane", "Isiro", "Itoko", "Kisangani", "Mambasa", "Mongbwalu", "Niangara", "Poko", "Simba", "Titule", "Ubundu", "Wamba", "Watsa", "Yangambi"]
      },
      {
        name: "Kasai-Occidental",
        cities: ["Demba", "Dibaya", "Ilebo", "Kananga", "Kazumba", "Luebo", "Mweka", "Tshikapa"]
      },
      {
        name: "Kasai-Oriental",
        cities: ["Gandajika", "Kabinda", "Katako-Kombe", "Kole", "Lodja", "Lubao", "Lubefu", "Lusambo", "Mbuji-Mayi", "Mwene-Ditu", "Tshilenge", "Tshofa"]
      },
      {
        name: "Katanga",
        cities: ["Bukama", "Dilolo", "Kabalo", "Kalemie", "Kambove", "Kamina", "Kaniama", "Kikondjo", "Kipushi", "Kolwezi", "Kongolo", "Le Marinel", "Likasi", "Lubudi", "Lubumbashi", "Malemba-Nkulu", "Manono", "Moba", "Mulongo", "Mwanza", "Nyunzu", "Sakania", "Shinkolobwe"]
      },
      {
        name: "Kinshasa",
        cities: ["Kinshasa"]
      },
      {
        name: "Maniema",
        cities: ["Kalima", "Kasongo", "Kindu"]
      },
      {
        name: "Nord-Kivu",
        cities: ["Beni", "Butembo", "Goma"]
      },
      {
        name: "Sud-Kivu",
        cities: ["Bukavu", "Kabare", "Kama", "Kampene", "Kibombo", "Uvira"]
      }
    ]
  },
  {
    name: "Denmark",
    flag: "🇩🇰",
    currency: {
      code: "DKK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Arhus",
        cities: ["Aarhus", "Allingabro", "Arhus", "Assentoft", "Auning", "Beder", "Brabrand", "Ebeltoft", "Framlev", "Galten", "Grenaa", "Hadsten", "Hammel", "Hinnerup", "Hjortshoj", "Horning", "Hornslet", "Kolt", "Langa", "Logten", "Lystrup", "Malling", "Mariager", "Marslet", "Odder", "Randers", "Risskov", "Ronde", "Ry", "Ryomgard", "Sabro", "Silkeborg", "Skanderborg", "Skovby", "Soften", "Solbjerg", "Spentrup", "Stavtrup", "Stilling", "Svejbak", "Tranbjerg", "Trige", "Virklund"]
      },
      {
        name: "Bornholm",
        cities: ["Aakirkeby", "Allinge-Sandvig", "Nexo", "Ronne"]
      },
      {
        name: "Frederiksborg",
        cities: ["Allerod", "Birkerod", "Blovstrod", "Espergarde", "Farum", "Fredensborg", "Frederikssund", "Frederiksvark", "Ganlose", "Gilleleje", "Grasted", "Hellebak", "Helsinge", "Helsingor", "Hillerod", "Hornbak", "Horsholm", "Humlebak", "Hundested", "Jagerspris", "Kvistgaard", "Lillerod", "Liseleje", "Lynge", "Niva", "Nodebo", "Olstykke", "Skibby", "Slangerup", "Stavnsholt", "Stenlose", "Valby", "Vekso"]
      },
      {
        name: "Fyn",
        cities: ["Aarup", "Arslev", "Assens", "Bellinge", "Blommenslyst", "Bogense", "Brenderup", "Broby", "Bullerup", "Ejby", "Faaborg", "Glamsbjerg", "Haarby", "Hojby", "Kerteminde", "Langeskov", "Marstal", "Middelfart", "Munkebo", "Neder Holluf", "Norre Aaby", "Nyborg", "Odense", "Otterup", "Ringe", "Rudkobing", "Sankt Klemens", "Seden", "Sonderso", "Stige", "Strib", "Svendborg", "Thuro", "Tommerup", "Ullerslev", "Vindeby", "Vissenbjerg"]
      },
      {
        name: "Hovedstaden",
        cities: ["Ballerup", "Brondby", "Stenlose", "Vallensbaek"]
      },
      {
        name: "Kobenhavn",
        cities: ["Dragor", "Flong", "Gentofte", "Glostrup", "Herlev", "Hvidovre", "Ishoj", "Kastrup", "Lyngby", "Malov", "Smorumnedre", "Taastrup", "Trorod", "Vanlose", "Varlose"]
      },
      {
        name: "Kobenhavns Amt",
        cities: []
      },
      {
        name: "Kobenhavns Kommune",
        cities: []
      },
      {
        name: "Nordjylland",
        cities: ["Aabybro", "Aalborg", "Aars", "Arden", "Bindslev", "Bronderslev", "Brovst", "Dronninglund", "Farso", "Fjerritslev", "Frederikshavn", "Frejlev", "Gistrup", "Gorlose", "Hadsund", "Hals", "Hirtshals", "Hjallerup", "Hjorring", "Hobro", "Kas", "Klarup", "Logstor", "Nibe", "Norresundby", "NÃƒÂƒÃ‚Â¸rresundby", "Pandrup", "Saby", "Sindal", "Skagen", "Skorping", "Storvorde", "Stovring", "Strandby", "Sulsted", "Svenstrup", "Tars", "Tranekaer", "Vadum", "Vestbjerg", "Vester Hassing", "Vodskov", "Vra"]
      },
      {
        name: "Ribe",
        cities: ["Ansager", "Billund", "Bramming", "Brorup", "Esbjerg", "Grindsted", "Holsted", "Nordby", "Oksbol", "Olgod", "Ribe", "Tjareborg", "Varde", "Vejen", "Vorbasse"]
      },
      {
        name: "Ringkobing",
        cities: ["Aulum", "Bording", "Brande", "Gjellerup Kirkeby", "Hammerum", "Harboore", "Herning", "Holstebro", "Hvide Sande", "Ikast", "Kibak", "Lemvig", "Lind", "Ringkobing", "Skaerbaek", "Skjern", "Snejbjerg", "Struer", "Sunds", "Tarm", "Thyboron", "Ulfborg", "Videbak", "Vildbjerg", "Vinderup"]
      },
      {
        name: "Roervig",
        cities: ["Roervig"]
      },
      {
        name: "Roskilde",
        cities: ["Bjaverskov", "Borup", "Ejby", "Greve Strand", "Gundsomagle", "Harlev", "Havdrup", "Hvalso", "Jyllinge", "Koge", "Lejre", "Osted", "Roskilde", "Solrod", "Stroby Egede", "Svogerslev", "Tune", "Viby", "Vindinge"]
      },
      {
        name: "Roslev",
        cities: ["Glyngore"]
      },
      {
        name: "Sjaelland",
        cities: ["Karise", "Naestved"]
      },
      {
        name: "Soeborg",
        cities: ["Soeborg"]
      },
      {
        name: "Sonderjylland",
        cities: ["Aabenraa", "Aarsleve", "Augustenborg", "Broager", "Christiansfeld", "Dybbol", "Gram", "Grasten", "Guderup", "Haderslev", "Horuphav", "Krusa", "Logumkloster", "Lojt Kirkeby", "Nordborg", "Padborg", "Rodding", "Rodekro", "Skarbak", "Sonderborg", "Starup", "Tinglev", "Toftlund", "Tonder", "Vojens"]
      },
      {
        name: "Storstrom",
        cities: ["Fakse", "Fakse Ladeplads", "Fensmark", "Holeby", "Maribo", "Nakskov", "Nastved", "Neder Vindinge", "Norre Alslev", "Nykobing", "Nyrad", "Orslev", "Prasto", "Rodby", "Rodbyhavn", "Ronnede", "Sakskobing", "Stege", "Store Heddinge", "Stubbekobing", "Sundby", "Vordingborg"]
      },
      {
        name: "Syddanmark",
        cities: ["Bylderup-Bov", "Fovling"]
      },
      {
        name: "Toelloese",
        cities: ["Toelloese"]
      },
      {
        name: "Vejle",
        cities: ["Borkop", "Bradstrup", "Brejning", "Egtved", "Fredericia", "Give", "Hedensted", "Horsens", "Jelling", "Juelsminde", "Kolding", "Lunderskov", "Snoghoj", "Sonder Bjert", "Taulov", "Torring", "Vamdrup", "Vejle"]
      },
      {
        name: "Vestsjalland",
        cities: ["Asnas", "Dianalund", "Forlev", "Frederiksberg", "Fuglebjerg", "Gorlev", "Haslev", "Holbaek", "Hong", "Horve", "Jyderup", "Kalundborg", "Korsor", "Nykobing", "Ringsted", "Skalskor", "Slagelse", "Soro", "Svebolle", "Svinninge", "Tollose", "Vipperod"]
      },
      {
        name: "Viborg",
        cities: ["Aalestrup", "Bjerringbro", "Hanstholm", "Hojslev", "Hurup", "Karup", "Kjellerup", "Nykobing", "Skive", "Stoholm", "Thisted", "Ulstrup", "Viborg"]
      }
    ],
    isoAlpha2: "DK",
    isoAlpha3: "DNK",
    isoNumeric: 208
  },
  {
    name: "Djibouti",
    flag: "🇩🇯",
    currency: {
      code: "DJF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Ali Sabih",
        cities: []
      },
      {
        name: "Dikhil",
        cities: ["Dikhil"]
      },
      {
        name: "Jibuti",
        cities: ["Jibuti"]
      },
      {
        name: "Tajurah",
        cities: ["Tajurah"]
      },
      {
        name: "Ubuk",
        cities: ["Ubuk"]
      }
    ],
    isoAlpha2: "DJ",
    isoAlpha3: "DJI",
    isoNumeric: 262
  },
  {
    name: "Dominica",
    flag: "🇩🇲",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Saint Andrew",
        cities: []
      },
      {
        name: "Saint David",
        cities: []
      },
      {
        name: "Saint George",
        cities: []
      },
      {
        name: "Saint John",
        cities: []
      },
      {
        name: "Saint Joseph",
        cities: []
      },
      {
        name: "Saint Luke",
        cities: []
      },
      {
        name: "Saint Mark",
        cities: []
      },
      {
        name: "Saint Patrick",
        cities: []
      },
      {
        name: "Saint Paul",
        cities: []
      },
      {
        name: "Saint Peter",
        cities: []
      }
    ],
    isoAlpha2: "DM",
    isoAlpha3: "DMA",
    isoNumeric: 212
  },
  {
    name: "Dominican Republic",
    flag: "🇩🇴",
    currency: {
      code: "DOP",
      name: "Peso",
      symbol: "RD$"
    },
    states: [
      {
        name: "Azua",
        cities: ["Azua", "Sabana Yegua"]
      },
      {
        name: "Bahoruco",
        cities: ["Neyba", "Tamayo"]
      },
      {
        name: "Barahona",
        cities: ["Barahona", "Cabral", "El Penon"]
      },
      {
        name: "Dajabon",
        cities: ["Dajabon"]
      },
      {
        name: "Distrito Nacional",
        cities: []
      },
      {
        name: "Duarte",
        cities: ["Las Guaranas", "Pimentel", "San Francisco de Macoris"]
      },
      {
        name: "El Seybo",
        cities: []
      },
      {
        name: "Elias Pina",
        cities: []
      },
      {
        name: "Espaillat",
        cities: ["Moca"]
      },
      {
        name: "Hato Mayor",
        cities: []
      },
      {
        name: "Independencia",
        cities: ["Duverge", "Jimani"]
      },
      {
        name: "La Altagracia",
        cities: []
      },
      {
        name: "La Romana",
        cities: []
      },
      {
        name: "La Vega",
        cities: []
      },
      {
        name: "Maria Trinidad Sanchez",
        cities: []
      },
      {
        name: "Monsenor Nouel",
        cities: []
      },
      {
        name: "Monte Cristi",
        cities: []
      },
      {
        name: "Monte Plata",
        cities: []
      },
      {
        name: "Pedernales",
        cities: ["Pedernales"]
      },
      {
        name: "Peravia",
        cities: ["Bani", "Ocoa"]
      },
      {
        name: "Puerto Plata",
        cities: []
      },
      {
        name: "Salcedo",
        cities: ["Salcedo"]
      },
      {
        name: "Samana",
        cities: ["Samana", "Sanchez"]
      },
      {
        name: "San Cristobal",
        cities: []
      },
      {
        name: "San Juan",
        cities: []
      },
      {
        name: "San Pedro de Macoris",
        cities: []
      },
      {
        name: "Sanchez Ramirez",
        cities: []
      },
      {
        name: "Santiago",
        cities: ["Santiago", "Tamboril", "Villa Bisono"]
      },
      {
        name: "Santiago Rodriguez",
        cities: ["Santiago", "Tamboril", "Villa Bisono"]
      },
      {
        name: "Valverde",
        cities: ["Esperanza", "Mao"]
      }
    ],
    isoAlpha2: "DO",
    isoAlpha3: "DOM",
    isoNumeric: 214
  },
  {
    name: "Ecuador",
    flag: "🇪🇨",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Azuay",
        cities: ["Cuenca", "Gualaceo"]
      },
      {
        name: "Bolivar",
        cities: ["Guaranda", "San Miguel"]
      },
      {
        name: "Canar",
        cities: ["Azogues", "Canar", "La Troncal"]
      },
      {
        name: "Carchi",
        cities: ["El Angel", "San Gabriel", "Tulcan"]
      },
      {
        name: "Chimborazo",
        cities: ["Alausi", "Guano", "Riobamba"]
      },
      {
        name: "Cotopaxi",
        cities: ["La Mana", "Latacunga", "Pujili", "San Miguel", "Saquisili"]
      },
      {
        name: "El Oro",
        cities: []
      },
      {
        name: "Esmeraldas",
        cities: ["Esmeraldas", "Muisne", "Rosa Zarate", "San Lorenzo", "Valdez"]
      },
      {
        name: "Galapagos",
        cities: ["Puerto Ayora", "Puerto Baquerizo Moreno", "San Cristobal"]
      },
      {
        name: "Guayas",
        cities: ["Alfredo Baquerizo Moreno", "Balao", "Balzar", "Colimes", "Coronel Mariduena", "Daule", "El Salitre", "El Triunfo", "Eloy Alfaro", "Guayaquil", "La Libertad", "Lomas de Sargentillo", "Mapasingue", "Milagro", "Naranjal", "Naranjito", "Palestina", "Pedro Carbo", "Playas", "Salinas", "Samborondon", "Santa Elena", "Santa Lucia", "Velasco Ibarra", "Yaguachi"]
      },
      {
        name: "Imbabura",
        cities: ["Atuntaqui", "Cotacachi", "Ibarra", "Otavalo", "Pimampiro"]
      },
      {
        name: "Loja",
        cities: ["Alamor", "Cariamanga", "Catacocha", "Catamayo", "Celica", "Loja", "Macara"]
      },
      {
        name: "Los Rios",
        cities: []
      },
      {
        name: "Manabi",
        cities: ["Bahia de Caraquez", "Calceta", "Chone", "El Carmen", "Jipijapa", "Junin", "Manta", "Montecristi", "Pajan", "Pedernales", "Portoviejo", "Rocafuerte", "Santa Ana", "Sucre", "Tosagua"]
      },
      {
        name: "Morona Santiago",
        cities: []
      },
      {
        name: "Napo",
        cities: ["Archidona", "Tena"]
      },
      {
        name: "Orellana",
        cities: ["Orellana"]
      },
      {
        name: "Pastaza",
        cities: ["Puyo"]
      },
      {
        name: "Pichincha",
        cities: ["Cayambe", "Machachi", "Quito", "Sangolqui", "Santo Domingo"]
      },
      {
        name: "Sucumbios",
        cities: ["Nueva Loja", "Shushufindi"]
      },
      {
        name: "Tungurahua",
        cities: ["Ambato", "Banos", "Pelileo", "Pillaro"]
      },
      {
        name: "Zamora Chinchipe",
        cities: []
      }
    ],
    isoAlpha2: "EC",
    isoAlpha3: "ECU",
    isoNumeric: 218
  },
  {
    name: "Egypt",
    flag: "🇪🇬",
    currency: {
      code: "EGP",
      name: "Pound",
      symbol: "£"
    },
    states: [
      {
        name: "Aswan",
        cities: ["Aswan", "Daraw", "Kawm Umbu", "an-Nasir"]
      },
      {
        name: "Asyut",
        cities: ["Abnub", "Abu Tij", "Asyut", "Bani Muhammadiyat", "Dayrut", "Dayrut-ash-Sharif", "Manfalut", "Musha", "Sahil Salim", "Sanabu", "Umm-al-Qusur", "al-Badari", "al-Qusiyah", "an-Nukhaylah"]
      },
      {
        name: "Bani Suwayf",
        cities: []
      },
      {
        name: "Bur Sa''id",
        cities: []
      },
      {
        name: "Cairo",
        cities: ["6th of October City", "Ataba", "Cairo", "Nasr", "Nasr City", "Obour City"]
      },
      {
        name: "Dumyat",
        cities: ["Izbat-al-Burj", "Damietta", "Dumyat", "El-Zarka", "Faraskur", "Kafr Sa''d", "Kafr-al-Battikh", "az-Zarqa"]
      },
      {
        name: "Kafr-ash-Shaykh",
        cities: ["Biyala", "Disuq", "Fuwah", "Kafr-al-Jara''idah", "Kafr-ash-Shaykh", "Mutubis", "Qallin", "Sidi Salim", "al-Burj", "al-Burullus", "al-Haddadi", "al-Hamul"]
      },
      {
        name: "Matruh",
        cities: ["Marsa Matruh", "Nasr", "Sidi Barrani", "Zawiyat Shammas", "ad-Da''ba"]
      },
      {
        name: "Muhafazat ad Daqahliyah",
        cities: []
      },
      {
        name: "Muhafazat al Fayyum",
        cities: []
      },
      {
        name: "Muhafazat al Gharbiyah",
        cities: []
      },
      {
        name: "Muhafazat al Iskandariyah",
        cities: []
      },
      {
        name: "Muhafazat al Qahirah",
        cities: []
      },
      {
        name: "Qina",
        cities: ["Armant", "Asfun-al-Mata''inah", "Dandarah", "Dishna", "Farshut", "Hijazah", "Hiw", "Idfu", "Isna", "Kiman-al-Mata''inah", "Naj'' Hammadi", "Naqadah", "Qift", "Qina", "Qus", "ad-Dabbiyah", "ad-Dayr", "al-Ballas", "al-Karnak", "al-Waqf", "ar-Radisiyat-al-Bahriyah"]
      },
      {
        name: "Sawhaj",
        cities: ["Akhmim", "Awlad Tawq Sharq", "Dar-as-Salam", "Jirja", "Juhaynah", "Sawhaj", "Tahta", "Tima", "al-Balyana", "al-Manshah", "al-Maragah"]
      },
      {
        name: "Sina al-Janubiyah",
        cities: []
      },
      {
        name: "Sina ash-Shamaliyah",
        cities: []
      },
      {
        name: "ad-Daqahliyah",
        cities: ["Aja", "Bahut", "Bilqas", "Dikirnis", "Minyat-an-Nasr", "Mit Gamr", "Shirbin", "Talkha", "al-Jamaliyah", "al-Ma''sarah", "al-Mansurah", "al-Manzilah", "al-Matariyah", "as-Sinbillawayn"]
      },
      {
        name: "al-Bahr-al-Ahmar",
        cities: ["Ras Gharib", "Safaja", "al-Ghardaqah", "al-Qusayr"]
      },
      {
        name: "al-Buhayrah",
        cities: ["Abu Hummus", "Abu al-Matamir", "Buturis", "Damanhur", "Edfina", "Hawsh ''Isa", "Idku", "Ityay-al-Barud", "Kafr Salim", "Kafr-ad-Dawwar", "Kawm Hamada", "Nubaria", "Rashid", "Shubra Khit", "Zawiyat Sidi Gazi", "ad-Dilinjat", "al-Kawm-al-Akhdar", "al-Mahmudiyah", "ar-Rahmaniyah"]
      },
      {
        name: "al-Fayyum",
        cities: ["Fidimin", "Ibshaway", "Itsa", "Qasr Qarun", "Sanhur", "Sinnuris", "Tamiyah", "al-Fayyum"]
      },
      {
        name: "al-Gharbiyah",
        cities: ["Abyar", "Basyun", "Kafr-az-Zayyat", "Mahallat Marhum", "Nisf Thani Bashbish", "Qutur", "Samannud", "Tanta", "Zifta", "ad-Daljamun", "al-Mahallah al-Kubra", "as-Santah"]
      },
      {
        name: "al-Iskandariyah",
        cities: ["Agamy", "al-Iskandariyah", "al-Maks"]
      },
      {
        name: "al-Ismailiyah",
        cities: ["Fa''id", "Sarabiyum", "al-Ismailiyah"]
      },
      {
        name: "al-Jizah",
        cities: ["Atfih", "Awsim", "Giza", "Madinat Sittah Uktubar", "Nahya", "Saqqarah", "al-''Ayyat", "al-Badrashayn", "al-Hawamidiyah", "al-Jizah", "al-Mansuriyah", "al-Wahat-al-Bahriyah", "as-Saff"]
      },
      {
        name: "al-Minufiyah",
        cities: ["Ashmun", "Birkat-as-Sab", "Milij", "Minuf", "Quwaysina", "Shibin-al-Kawm", "Sirs-al-Layyanah", "Tala", "al-Bajur", "al-Batanun", "ash-Shuhada"]
      },
      {
        name: "al-Minya",
        cities: ["Abu Qurqas", "Bani Mazar", "Dayr Mawas", "Magagah", "Mallawi", "Matay", "Samalut", "Tallah", "Tandah", "al-Anayim", "al-Fikriyah", "al-Minya", "ar-Rawdah"]
      },
      {
        name: "al-Qahira",
        cities: ["Badr City", "Heliopolis", "al-Qahira"]
      },
      {
        name: "al-Qalyubiyah",
        cities: ["Abu Za''bal", "Banha", "Qalyub", "Shubra al-Khaymah", "Sibin-al-Qanatir", "Tukh", "al-Khankah", "al-Qanatir-al-Khayriyah"]
      },
      {
        name: "al-Uqsur",
        cities: ["al-Uqsur"]
      },
      {
        name: "al-Wadi al-Jadid",
        cities: []
      },
      {
        name: "as-Suways",
        cities: ["as-Suways"]
      },
      {
        name: "ash-Sharqiyah",
        cities: ["Abu Hammad", "Abu Kabir", "Bilbays", "Diyarb Najm", "Faqus", "Hihya", "Kafr Saqr", "Mashtul-as-Suq", "Minyat-al-Qamh", "al-Ashir mir-Ramadan", "al-Husayniyah", "al-Ibrahimiyah", "al-Qanayat", "al-Qassasin", "al-Qurayn", "as-Salihiyah", "at-Tall-al-Kabir", "az-Zaqaziq"]
      }
    ],
    isoAlpha2: "EG",
    isoAlpha3: "EGY",
    isoNumeric: 818
  },
  {
    name: "El Salvador",
    flag: "🇸🇻",
    currency: {
      code: "SVC",
      name: "Colone",
      symbol: "$"
    },
    states: [
      {
        name: "Ahuachapan",
        cities: ["Ahuachapan", "Atiquizaya", "Concepcion de Ataco", "Guaymango", "Jujutla", "San Francisco Menendez", "Tacuba"]
      },
      {
        name: "Cabanas",
        cities: ["Ilobasco", "Sensuntepeque", "Victoria"]
      },
      {
        name: "Chalatenango",
        cities: ["Chalatenango", "La Palma", "Nueva Concepcion", "San Francisco Morazan"]
      },
      {
        name: "Cuscatlan",
        cities: ["Cojutepeque", "San Pedro Perulapan", "Suchitoto", "Tecoluca", "Tenancingo"]
      },
      {
        name: "La Libertad",
        cities: []
      },
      {
        name: "La Paz",
        cities: []
      },
      {
        name: "La Union",
        cities: []
      },
      {
        name: "Morazan",
        cities: ["Cacaopera", "Corinto", "Gotera", "Guatajiagua", "Jocoro", "Sociedad"]
      },
      {
        name: "San Miguel",
        cities: []
      },
      {
        name: "San Salvador",
        cities: []
      },
      {
        name: "San Vicente",
        cities: []
      },
      {
        name: "Santa Ana",
        cities: []
      },
      {
        name: "Sonsonate",
        cities: ["Acajutla", "Armenia", "Izalco", "Juayua", "Nahuizalco", "San Antonio del Monte", "San Julian", "Sonsonate", "Sonzacate"]
      },
      {
        name: "Usulutan",
        cities: ["Berlin", "Concepcion Batres", "Estanzuelas", "Jiquilisco", "Jucuapa", "Jucuaran", "Ozatlan", "Puerto El Triunfo", "San Agustin", "Santa Elena", "Santiago de Maria", "Usulutan"]
      }
    ],
    isoAlpha2: "SV",
    isoAlpha3: "SLV",
    isoNumeric: 222
  },
  {
    name: "Equatorial Guinea",
    flag: "🇬🇶",
    currency: {
      code: "XAF",
      name: "Franc",
      symbol: "FCF"
    },
    states: [
      {
        name: "Annobon",
        cities: ["Pale"]
      },
      {
        name: "Bioko Norte",
        cities: []
      },
      {
        name: "Bioko Sur",
        cities: []
      },
      {
        name: "Centro Sur",
        cities: []
      },
      {
        name: "Kie-Ntem",
        cities: ["Ebebiyin", "Mikomeseng"]
      },
      {
        name: "Litoral",
        cities: ["Bata", "Mbini"]
      },
      {
        name: "Wele-Nzas",
        cities: ["Aconibe", "Anisoc", "Mongomo", "Nsok"]
      }
    ],
    isoAlpha2: "GQ",
    isoAlpha3: "GNQ",
    isoNumeric: 226
  },
  {
    name: "Eritrea",
    flag: "🇪🇷",
    currency: {
      code: "ERN",
      name: "Nakfa",
      symbol: "Nfk"
    },
    states: [
      {
        name: "Anseba",
        cities: ["Keren"]
      },
      {
        name: "Debub",
        cities: ["Addi Kwala", "Addi Ugri"]
      },
      {
        name: "Debub-Keih-Bahri",
        cities: ["Asseb", "Beylul", "Edd", "Mersa Fatma"]
      },
      {
        name: "Gash-Barka",
        cities: ["Ak''ordat", "Barentu", "Teseney"]
      },
      {
        name: "Maekel",
        cities: ["Asmara", "Ginda", "Himbirti", "Nefasit"]
      },
      {
        name: "Semien-Keih-Bahri",
        cities: ["Addi K''eyih", "Dek''emhare", "Mitsiwa", "Sen''afe"]
      }
    ],
    isoAlpha2: "ER",
    isoAlpha3: "ERI",
    isoNumeric: 232
  },
  {
    name: "Estonia",
    flag: "🇪🇪",
    currency: {
      code: "EEK",
      name: "Kroon",
      symbol: "kr"
    },
    states: [
      {
        name: "Harju",
        cities: ["Aasmae", "Aaviku", "Aegviidu", "Aigrumae", "Aila", "Alavere", "Alliku", "Amari", "Anija", "Ardu", "Arukula", "Aruvalla", "Assaku", "Ellamaa", "Haabneeme", "Habaja", "Haiba", "Haljava", "Hara", "Harju-Risti", "Harku", "Harkujarve", "Harma", "Huuru", "Ilmandu", "Iru", "Jagala", "Jalgimae", "Jarsi", "Jarvekula", "Jogisoo", "Juri", "Kaasiku", "Kaberneeme", "Kahala", "Kalesi", "Kallavere", "Karjakula", "Karla", "Kasepere", "Kasispea", "Kehra", "Keila", "Keila-Joa", "Kelvingi", "Kiia", "Kiili", "Kiisa", "Kiiu", "Klooga", "Kloogaranna", "Kohatu", "Kolga", "Kolga-Aabla", "Kolgakula", "Konnu", "Kose", "Kose-Uuemoisa", "Kostivere", "Krei", "Kuivajoe", "Kumna", "Kurtna", "Kuusalu", "Laabi", "Laagri", "Lagedi", "Laitse", "Laulasmaa", "Lehetu", "Lehola", "Lehtmetsa", "Leppneeme", "Liikva", "Lilli", "Lohusalu", "Loksa", "Lokuti", "Loo", "Lubja", "Luige", "Maardu", "Maidla", "Manniku", "Metsakasti", "Metsanurme", "Miiduranna", "Munalaskme", "Muraste", "Muuga", "Nabala", "Neeme", "Ohtu", "Ojasoo", "Oru", "Padise", "Pae", "Paekna", "Pajupea", "Paldiski", "Palvere", "Parispea", "Patika", "Paunkula", "Peetri", "Peningi", "Perila", "Pikva", "Pillapalu", "Pringi", "Puunsi", "Raasiku", "Rae", "Randvere", "Rannamoisa", "Ravila", "Riisipere", "Rohuneeme", "Roobuka", "Ruila", "Rummu", "Saha", "Saku", "Saue", "Saula", "Saunja", "Suurpea", "Suurupi", "Tabasalu", "Tagadi", "Tagametsa", "Tallinn", "Tammneeme", "Tiskre", "Todva", "Turba", "Turisalu", "Tutermaa", "Tuula", "Tuulna", "Uksnurme", "Ulejoe", "Uuri", "Uuskula", "Vaana", "Vaana-Joesuu", "Vaida", "Vaidasoo", "Valingu", "Valkla", "Vanamoisa", "Vardja", "Vasalemma", "Vaskjala", "Vatsla", "Veskikula", "Vihasoo", "Viimsi", "Viinistu", "Viti"]
      },
      {
        name: "Hiiu",
        cities: ["Emmaste", "Jausa", "Kaina", "Kardla", "Korgessaare", "Lauka", "Lope", "Mannamaa", "Putkaste", "Suuremoisa"]
      },
      {
        name: "Ida-Viru",
        cities: ["Aa", "Alajoe", "Aseri", "Avinurme", "Edise", "Erra", "Iisaku", "Jarve", "Johvi", "Kahula", "Kiikla", "Kivioli", "Kohtla-Jarve", "Kohtla-Nomme", "Konju", "Kose", "Kuremae", "Kurtna", "Lohusuu", "Luganuse", "Maetaguse", "Maidla", "Narva", "Narva-Joesuu", "Olgina", "Pagari", "Puhajoe", "Purtse", "Pussi", "Rannu", "Saka", "Savala", "Sillamae", "Sinimae", "Soldina", "Sompa", "Sonda", "Tammiku", "Toila", "Tudulinna", "Ulvi", "Vaivara", "Varja", "Vasavere", "Voka"]
      },
      {
        name: "Jarva",
        cities: ["Ahula", "Aiamaa", "Albu", "Ambla", "Anari", "Anna", "Aravete", "Ervita", "Imavere", "Janeda", "Jarva-Jaani", "Jogisoo", "Jootme", "Kaalepi", "Kabala", "Kahala", "Karavete", "Karevere", "Karinu", "Kasukonna", "Kirna", "Koeru", "Koigi", "Kolu", "Kuksema", "Laupa", "Lehtse", "Lokuta", "Loola", "Muusleri", "Oisu", "Paide", "Painurme", "Peetri", "Poikva", "Reopalu", "Retla", "Roa", "Roosna", "Roosna-Alliku", "Sarevere", "Sargvere", "Taikse", "Tarbja", "Turi", "Turi-Alliku", "Vaatsa", "Vahukula", "Vao", "Viisu", "Villevere"]
      },
      {
        name: "Jogeva",
        cities: ["Adavere", "Esku", "Harjanurme", "Jogeva", "Kaarepere", "Kalana", "Kalme", "Kamari", "Karde", "Kasepaa", "Kassinurme", "Konnu", "Kudina", "Kukita", "Kuremaa", "Kurista", "Lahavere", "Laiuse", "Laiusevalja", "Leedi", "Lustivere", "Luua", "Maarja", "Mallikvere", "Metsakula", "Mohkula", "Mustvee", "Neanurme", "Nova", "Omedu", "Ouna", "Painkula", "Pajusi", "Pala", "Palamuse", "Pataste", "Pauastvere", "Pikkjarve", "Pikknurme", "Pisisaare", "Poltsamaa", "Poora", "Puurmani", "Raabise", "Raja", "Saare", "Sadala", "Sadukula", "Siimusti", "Tabivere", "Tahkvere", "Tiheda", "Toikvere", "Torma", "Umbusi", "Vagari", "Vaiatu", "Vaike-Kamari", "Vaimastvere", "Valgma", "Visusti", "Voduvere", "Vohmanomme", "Voisiku", "Voldi", "Voore", "Votikvere"]
      },
      {
        name: "Laane",
        cities: ["Haapsalu", "Hullo", "Joodre", "Kirbla", "Kirimae", "Koluvere", "Komsi", "Kullamaa", "Lihula", "Liivi", "Linnamae", "Martna", "Nigula", "Nova", "Palivere", "Palli", "Panga", "Paralepa", "Piirsalu", "Purksi", "Rannakula", "Risti", "Roude", "Sutlepa", "Taebla", "Tuudi", "Uuemoisa", "Variku", "Vatla", "Virtsu"]
      },
      {
        name: "Laane-Viru",
        cities: ["Aaspere", "Ama", "Arkna", "Assamalla", "Avanduse", "Avispea", "Ebavere", "Eipri", "Essu", "Haljala", "Hulja", "Imastu", "Inju", "Kadapiku", "Kadila", "Kadrina", "Kakumae", "Karitsa", "Karu", "Kasmu", "Kihlevere", "Kiku", "Kiltsi", "Kohala", "Kunda", "Kuti", "Laekvere", "Lasila", "Lepna", "Levala", "Liigvalla", "Modriku", "Moe", "Moora", "Muuga", "Napi", "Paasvere", "Pajusti", "Pandivere", "Piira", "Pikevere", "Podrangu", "Podruse", "Porkuni", "Rahkla", "Rakke", "Rakvere", "Ridakula", "Roela", "Roodevalja", "Saase", "Salda", "Salla", "Simuna", "Someru", "Taaravainu", "Tamsalu", "Tapa", "Torma", "Torremae", "Triigi", "Tudu", "Ubja", "Udriku", "Uhtna", "Ulvi", "Undla", "Ussimae", "Uudekula", "Vaekula", "Vahakulmu", "Vaiatu", "Vaike-Maarja", "Vajangu", "Vao", "Veltsi", "Venevere", "Vergi", "Vetiku", "Vihula", "Viitna", "Vinni", "Viru-Jaagupi", "Viru-Kabala", "Viru-Nigula", "Vohnja", "Vosu", "Vosupere"]
      },
      {
        name: "Parnu",
        cities: ["Ahaste", "Aluste", "Are", "Arumetsa", "Audru", "Eametsa", "Haademeeste", "Halinga", "Ikla", "Ilvese", "Jaamakula", "Jaarja", "Joesuu", "Joopre", "Kaansoo", "Kabli", "Kadjaste", "Kaisma", "Kalita", "Kanakula", "Kergu", "Kihlepa", "Kilingi-Nomme", "Kilksama", "Koima", "Koonga", "Krundikula", "Laadi", "Langerma", "Lavassaare", "Leipste", "Lemmetsa", "Lemsi", "Libatse", "Linakula", "Lindi", "Liu", "Lodja", "Lope", "Malda", "Mannikuste", "Massiaru", "Metsaaare", "Metsapoole", "Moisakula", "Muraka", "Niidu", "Nurme", "Oara", "Oidrema", "Paikuse", "Papsaare", "Parnjoe", "Parnu", "Parnu-Jaagupi", "Penu", "Piistaoja", "Pohara", "Poldeotsa", "Pootsi", "Pulli", "Rannametsa", "Ratsepa", "Reiu", "Ridalepa", "Rootsikula", "Saarde", "Saare", "Sauga", "Seliste", "Selja", "Seljametsa", "Silla", "Sindi", "Soeva", "Soometsa", "Suigu", "Surju", "Suurejoe", "Taali", "Tahkuranna", "Tali", "Tammiste", "Tammuru", "Tihemetsa", "Tolla", "Tootsi", "Tori", "Tostamaa", "Tousi", "Treimani", "Urge", "Uulu", "Vahenurme", "Vaki", "Vandra", "Varbla", "Veelikse", "Vihtra", "Voidu", "Voiste"]
      },
      {
        name: "Polva",
        cities: ["Aarna", "Ahja", "Erastvere", "Himma", "Himmaste", "Holvandi", "Ihamaru", "Jaanimoisa", "Kanepi", "Karilatsi", "Karsa", "Karste", "Kauksi", "Kiidjarve", "Kostrimae", "Krootuse", "Leevaku", "Leevi", "Leevijoe", "Linte", "Lootvina", "Maaritsa", "Mammaste", "Metste", "Mikitamae", "Mooste", "Naha", "Orava", "Pahtpaa", "Partsi", "Peri", "Piigandi", "Polgaste", "Polva", "Prangli", "Puuri", "Raadama", "Rahumae", "Raigla", "Rapina", "Rasina", "Ristipalo", "Rosma", "Ruusa", "Saverna", "Sillapaa", "Soodoma", "Suurkula", "Taevaskoja", "Tannassilma", "Tilsi", "Treski", "Vaike-Rosna", "Valgjarve", "Vana-Koiola", "Vardja", "Varska", "Vastse-Kuuste", "Veriora", "Viluste", "Voopsu"]
      },
      {
        name: "Rapla",
        cities: ["Aespa", "Alu", "Eidapere", "Hageri", "Hagudi", "Haimre", "Hertu", "Iira", "Ingliste", "Jarlepa", "Jarvakandi", "Juuru", "Kaerepere", "Kaiu", "Kalbu", "Karu", "Kasti", "Keava", "Kehtna", "Kivi-Vigala", "Kodila", "Kohila", "Kuimetsa", "Kuusiku", "Laukna", "Lelle", "Lipa", "Lohu", "Lokuta", "Maidla", "Marjamaa", "Masti", "Moisamaa", "Naravere", "Orgita", "Paardu", "Pae", "Pahkla", "Pihali", "Pirgu", "Prillimae", "Purila", "Purku", "Rabivere", "Raikkula", "Rangu", "Rapla", "Salutaguse", "Sipa", "Sotke", "Sutlema", "Tamme", "Teenuse", "Uuskula", "Vahastu", "Valgu", "Valtu", "Vana-Kaiu", "Vana-Vigala", "Varbola", "Vilivere"]
      },
      {
        name: "Saare",
        cities: ["Arandi", "Aste", "Eikla", "Hellamaa", "Kao", "Karja", "Karla", "Kihelkonna", "Koimla", "Koljala", "Korkkula", "Korkvere", "Kudjape", "Kuressaare", "Laatsa", "Lahekula", "Laimjala", "Leisi", "Liiva", "Lumanda", "Metskula", "Mustjala", "Nasva", "Nommkula", "Orissaare", "Pahkla", "Parsama", "Pihtla", "Sakla", "Salme", "Sandla", "Tagavere", "Tornimae", "Valjala", "Vohma"]
      },
      {
        name: "Tartu",
        cities: ["Aardla", "Aksi", "Alasoo", "Alatskivi", "Annikoru", "Aravu", "Elva", "Erala", "Ervu", "Haage", "Haaslava", "Ignase", "Illi", "Ilmatsalu", "Kaagvere", "Kaardi", "Kaarlijarve", "Kallaste", "Kalme", "Kambja", "Kandikula", "Karevere", "Karkna", "Kasepaa", "Kavastu", "Kirepi", "Kodukula", "Kokora", "Kolkja", "Konguta", "Koosa", "Koruste", "Korvekula", "Kulitse", "Kurekula", "Kurista", "Laaniste", "Laeva", "Lahte", "Lalli", "Lapetukme", "Lemmatsi", "Lohkva", "Lossimae", "Luke", "Luunja", "Maksa", "Maramaa", "Marja", "Meeksi", "Meeri", "Mehikoorma", "Melliste", "Metsakivi", "Metsalaane", "Moisanurme", "Nina", "Nogiaru", "Noo", "Pilka", "Poka", "Pooritsa", "Puhja", "Rahinge", "Raigaste", "Ramsi", "Rani", "Rannu", "Rebase", "Reola", "Rohu", "Roiu", "Rongu", "Saadjarve", "Sinikula", "Sirgu", "Soinaste", "Sojamaa", "Tahtvere", "Tammiste", "Tammistu", "Tartu", "Teedla", "Tilga", "Toravere", "Torvandi", "Tuki", "Uderna", "Uhti", "Ulenurme", "Ulila", "Unikula", "Vahi", "Vaike-Rakke", "Valguta", "Vana-Kuuste", "Vara", "Varnja", "Vasula", "Vedu", "Vesneri", "Vissi", "Voibla", "Voika", "Vonnu", "Voopste", "Vorbuse"]
      },
      {
        name: "Valga",
        cities: ["Aakre", "Ala", "Hargla", "Hellenurme", "Helme", "Hummuli", "Jeti", "Jogeveste", "Kaagjarve", "Kalme", "Karjatnurme", "Karula", "Keeni", "Koikkula", "Laanemetsa", "Laatre", "Laukula", "Leebiku", "Linna", "Lossikula", "Lullemae", "Moldre", "Nouni", "Nupli", "Oru", "Oruste", "Otepaa", "Paidla", "Paju", "Palupera", "Patkula", "Piiri", "Pikasilla", "Pilkuse", "Puhajarve", "Puka", "Restu", "Riidaja", "Sangaste", "Sihva", "Sooru", "Taagepera", "Tagula", "Taheva", "Tiidu", "Tolliste", "Torva", "Tsirguliina", "Valga", "Vana-Otepaa"]
      },
      {
        name: "Viljandi",
        cities: ["Abja-Paluoja", "Abja-Vanamoisa", "Aidu", "Angi", "Anikatsi", "Arikula", "Halliste", "Heimtali", "Holstre", "Intsu", "Jamejala", "Jaska", "Kaavere", "Kamara", "Karksi", "Karksi-Nuia", "Karstna", "Karula", "Kobruvere", "Koidama", "Koksvere", "Kolga-Jaani", "Koo", "Kopu", "Kulla", "Lalsi", "Leie", "Lilli", "Lohavere", "Loodi", "Maeltkula", "Matapera", "Meleski", "Metskula", "Moisakula", "Monnaste", "Mustivere", "Mustla", "Navesti", "Odiste", "Oisu", "Olustvere", "Pahuvere", "Paistu", "Parakula", "Pari", "Parsti", "Peetrimoisa", "Pilistvere", "Pinska", "Polde", "Polli", "Puiatu", "Ramsi", "Reegoldi", "Saarepeedi", "Savikoti", "Sinialliku", "Soe", "Soomevere", "Sudiste", "Suislepa", "Sultsi", "Supsi", "Surgavere", "Suure-Jaani", "Taaksi", "Tanassilma", "Tinnikuru", "Tohvri", "Tuhalaane", "Tusti", "Ulde", "Ulensi", "Uusna", "Valgita", "Valma", "Valuste", "Vana-Kariste", "Vana-Voidu", "Vardi", "Vardja", "Vastemoisa", "Veelikse", "Verilaske", "Veskimae", "Viiratsi", "Viljandi", "Villa", "Vohma", "Voivaku", "Vooru"]
      },
      {
        name: "Voru",
        cities: ["Antsla", "Haanja", "Jarvere", "Kaapa", "Kirumpaa", "Kobela", "Kollino", "Kose", "Kraavi", "Krabi", "Kulaoru", "Kuldre", "Kuutsi", "Lasva", "Loosu", "Lusti", "Meegomae", "Meremae", "Misso", "Moniste", "Navi", "Nursi", "Obinitsa", "Osula", "Otsa", "Parksepa", "Puiga", "Raiste", "Rimmi", "Rouge", "Ruusmae", "Saru", "Somerpalu", "Sulbi", "Taberlaane", "Tagakula", "Tsolgo", "Tsooru", "Urvaste", "Uue-Antsla", "Vaabina", "Vagula", "Vaimela", "Vana-Antsla", "Vana-Roosa", "Vana-Vastseliina", "Varstu", "Vastseliina", "Verijarve", "Viitina", "Viitka", "Visela", "Voru", "Vorumoisa"]
      }
    ],
    isoAlpha2: "EE",
    isoAlpha3: "EST",
    isoNumeric: 233
  },
  {
    name: "Ethiopia",
    flag: "🇪🇹",
    currency: {
      code: "ETB",
      name: "Birr",
      symbol: false
    },
    states: [
      {
        name: "Addis Abeba",
        cities: []
      },
      {
        name: "Afar",
        cities: ["Asayita", "Awash", "Dubti", "Gewane"]
      },
      {
        name: "Amhara",
        cities: ["Addi Ark''ay", "Addis ''Alem", "Addis Zemen", "Adet", "Bahir Dar", "Bati", "Bichena", "Bure", "Chagni", "Dabat", "Dangla", "Debark", "Debre Birhan", "Debre Mark''os", "Debre Sina", "Debre Tabor", "Debre Werk", "Dejen", "Dese", "Finote Selam", "Gondar", "K''obo", "Kembolcha", "Kemise", "Lalibela", "Mott''a", "Nefas Mewcha", "Sek''ot''a", "Shewa Robit", "Weldiya", "Were Ilu", "Werota"]
      },
      {
        name: "Benishangul",
        cities: ["Asosa"]
      },
      {
        name: "Diredawa",
        cities: ["Dire Dawa"]
      },
      {
        name: "Gambella",
        cities: ["Gambela"]
      },
      {
        name: "Harar",
        cities: ["Harer"]
      },
      {
        name: "Jigjiga",
        cities: ["Jigjiga"]
      },
      {
        name: "Mekele",
        cities: []
      },
      {
        name: "Oromia",
        cities: ["Alem Maya", "Abomsa", "Agaro", "Asasa", "Asbe Teferi", "Assela", "Bako", "Bedele", "Bedesa", "Burayu", "Debre Zeyit", "Deder", "Dembi Dolo", "Dodola", "Fiche", "Gebre Guracha", "Gedo", "Gelemso", "Gimbi", "Ginch''i", "Ginir", "Giyon", "Goba", "Gore", "Guder", "Hagere Hiywet", "Hagere Maryam", "Hirna", "Holeta Genet", "Huruta", "Jimma", "Kibre Mengist", "Kofele", "Mega", "Mek''i", "Mendi", "Metehara", "Metu", "Mojo", "Moyale", "Nazret", "Nedjo", "Negele", "Nek''emte", "Robe", "Sebeta", "Sendafa", "Shakiso", "Shambu", "Shashemenne", "Sheh Hussen", "Sire", "Tulu Bolo", "Welench''iti", "Welk''it''e", "Wonji", "Yabelo", "Ziway"]
      },
      {
        name: "Somali",
        cities: ["Bircot", "Degeh Bur", "Dollo Odo", "Imi", "Jijiga", "Werder"]
      },
      {
        name: "Southern",
        cities: ["Alaba Kulito", "Arba Minch", "Areka", "Awassa", "Bako", "Boditi", "Bonga", "Butajira", "Ch''ench''a", "Dilla", "Gidole", "Hossa''ina", "Jinka", "Leku", "Mizan Teferi", "Sawla", "Soddo", "Teppi", "Wendo", "Yirga Alem", "Yirga Ch''efe"]
      },
      {
        name: "Tigray",
        cities: ["Abiy Adi", "Addigrat", "Adwa", "Aksum", "Alamat''a", "Endasilasie", "Hagere Selam", "Himora", "Korem", "Maych''ew", "Mek''ele", "Mekele", "Wik''ro"]
      }
    ],
    isoAlpha2: "ET",
    isoAlpha3: "ETH",
    isoNumeric: 231
  },
  {
    name: "Falkland Islands",
    flag: "🇫🇰",
    currency: {
      code: "FKP"
    },
    states: [
      {
        name: "Falkland Islands",
        cities: []
      },
      {
        name: "South Georgia",
        cities: []
      }
    ]
  },
  {
    name: "Faroe Islands",
    flag: "🇫🇴",
    currency: {
      code: "DKK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Klaksvik",
        cities: ["Hvannasund", "Klaksvik"]
      },
      {
        name: "Nor ara Eysturoy",
        cities: []
      },
      {
        name: "Nor oy",
        cities: []
      },
      {
        name: "Sandoy",
        cities: ["Husavik", "Sands", "Skalavik", "Skopun", "Skuvoy"]
      },
      {
        name: "Streymoy",
        cities: ["Haldarsvik", "Hests", "Hosvik", "Hvalvik", "Kirkjubo", "Kollafjar", "Kvivik", "Nolsoy", "Saksun", "Torshavn", "Vestmanna"]
      },
      {
        name: "Su uroy",
        cities: []
      },
      {
        name: "Sy ra Eysturoy",
        cities: []
      },
      {
        name: "Torshavn",
        cities: ["Torshavn"]
      },
      {
        name: "Vaga",
        cities: ["Biggjar", "Midvags", "Mykines", "Sandavags", "Sorvags"]
      }
    ],
    isoAlpha2: "FO",
    isoAlpha3: "FRO",
    isoNumeric: 234
  },
  {
    name: "Fiji",
    flag: "🇫🇯",
    currency: {
      code: "FJD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Central",
        cities: ["Deuba", "Korovou", "Lami", "Namosi", "Nausori", "Navua", "Suva"]
      },
      {
        name: "Eastern",
        cities: ["Levuka", "Malhaha", "Tubou", "Vunisea"]
      },
      {
        name: "Northern",
        cities: ["Korokade", "Labasa", "Savusavu"]
      },
      {
        name: "South Pacific",
        cities: []
      },
      {
        name: "Western",
        cities: ["Ba", "Lautoka", "Nadi", "Rakiraki", "Sigatoka", "Tavua", "Vatukoula"]
      }
    ],
    isoAlpha2: "FJ",
    isoAlpha3: "FJI",
    isoNumeric: 242
  },
  {
    name: "Finland",
    flag: "🇫🇮",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Ahvenanmaa",
        cities: ["Maarianhamina"]
      },
      {
        name: "Etela-Karjala",
        cities: ["Imatra", "Joutseno", "Lappeenranta"]
      },
      {
        name: "Etela-Pohjanmaa",
        cities: ["Hyllykallio", "Ilmajoki", "Kauhajoki", "Kurikka", "Lapua", "Seinajoki"]
      },
      {
        name: "Etela-Savo",
        cities: ["Mikkeli", "Savonlinna"]
      },
      {
        name: "Etela-Suomen Laani",
        cities: []
      },
      {
        name: "Ita-Suomen Laani",
        cities: []
      },
      {
        name: "Ita-Uusimaa",
        cities: ["Loviisa", "Orimattila", "Porvoo"]
      },
      {
        name: "Kainuu",
        cities: ["Kajaani"]
      },
      {
        name: "Kanta-Hame",
        cities: ["Forssa", "Hameenlinna", "Janakkala", "Riihimaki"]
      },
      {
        name: "Keski-Pohjanmaa",
        cities: ["Kokkola"]
      },
      {
        name: "Keski-Suomi",
        cities: ["Aanekoski", "Jamsa", "Jyvaskyla", "Keuruu", "Laukaa", "Lieto"]
      },
      {
        name: "Kymenlaakso",
        cities: ["Hamina", "Kotka", "Kouvola", "Kuusankoski", "Valkeala", "Vehkalahti"]
      },
      {
        name: "Lansi-Suomen Laani",
        cities: []
      },
      {
        name: "Lappi",
        cities: ["Kemi", "Kemijarvi", "Rovaniemi", "Sonka", "Tornio"]
      },
      {
        name: "Northern Savonia",
        cities: []
      },
      {
        name: "Ostrobothnia",
        cities: ["Jakobstad", "Oulunsalo"]
      },
      {
        name: "Oulun Laani",
        cities: []
      },
      {
        name: "Paijat-Hame",
        cities: ["Heinola", "Hollola", "Lahti", "Nastola"]
      },
      {
        name: "Pirkanmaa",
        cities: ["Kangasala", "Lempaala", "Nokia", "Pirkkala", "Sastamala", "Tampere", "Valkeakoski", "Ylojarvi"]
      },
      {
        name: "Pohjanmaa",
        cities: ["Kristiinankaupunki", "Mustasaari", "Pietarsaari", "Uusikarlepyy", "Vaasa"]
      },
      {
        name: "Pohjois-Karjala",
        cities: ["Joensuu", "Lieksa"]
      },
      {
        name: "Pohjois-Pohjanmaa",
        cities: ["Haukipudas", "Kempele", "Kuusamo", "Muhos", "Nivala", "Oulainen", "Oulu", "Raahe", "Ylivieska"]
      },
      {
        name: "Pohjois-Savo",
        cities: ["Iisalmi", "Kuopio", "Sillinjarvi", "Varkaus"]
      },
      {
        name: "Saarijarvi",
        cities: ["Saarijarvi"]
      },
      {
        name: "Satakunta",
        cities: ["Eura", "Eurajoki", "Harjavalta", "Huittinen", "Kankaanpaa", "Kokemaki", "Lappi", "Nakkila", "Noormarkku", "Pori", "Rauma", "Sakyla", "Ulvila", "Vammala"]
      },
      {
        name: "Southern Savonia",
        cities: []
      },
      {
        name: "Tavastia Proper",
        cities: []
      },
      {
        name: "Uleaborgs Lan",
        cities: []
      },
      {
        name: "Uusimaa",
        cities: ["Espoo", "Hanko", "Helsinki", "Hyvinkaa", "Jarvenpaa", "Kauniainen", "Kerava", "Kirkkonummi", "Lohja", "Mantsala", "Nurmijarvi", "Sipoo", "Tammisaari", "Tuusula", "Vantaa", "Vihti"]
      },
      {
        name: "Varsinais-Suomi",
        cities: ["Kaarina", "Naantali", "Parainen", "Raisio", "Salo", "Turku", "Uusikaupunki"]
      }
    ],
    isoAlpha2: "FI",
    isoAlpha3: "FIN",
    isoNumeric: 246
  },
  {
    name: "France",
    flag: "🇫🇷",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Ain",
        cities: ["Amberieu-en-Bugey", "Bellegarde-sur-Valserine", "Bourg-en-Bresse", "Oyonnax"]
      },
      {
        name: "Aisne",
        cities: ["Chateau-Thierry", "Chauny", "Hirson", "Laon", "Saint-Quentin", "Soissons", "Strassbourg", "Tergnier"]
      },
      {
        name: "Albi Le Sequestre",
        cities: []
      },
      {
        name: "Allier",
        cities: ["Cusset", "Montlucon", "Moulins", "Vichy", "Yzeure"]
      },
      {
        name: "Alpes-Cote dAzur",
        cities: []
      },
      {
        name: "Alpes-Maritimes",
        cities: ["Antibes", "Beausoleil", "Cagnes-sur-Mer", "Cannes", "Carros", "Grasse", "La Trinite", "Le Cannet", "Mandelieu-la-Napoule", "Menton", "Mougins", "Nice", "Roquebrune-Cap-Martin", "Saint-Laurent-du-Var", "Valbonne", "Vallauris", "Vence", "Villeneuve-Loubet"]
      },
      {
        name: "Alpes-de-Haute-Provence",
        cities: ["Digne-les-Bains", "Manosque"]
      },
      {
        name: "Alsace",
        cities: ["Adainville", "Alby-sur-Cheran", "Aubervilliers", "Auterive", "Baillet", "Beaune", "Beauzelle", "Bonnet De Mure", "Bormes-les-Mimosas", "Brindas", "Burlats", "Buzancais", "Candillargues", "Carry-le-Rouet", "Cassis", "Cessenon-Sur-Orb", "Chanac", "Chevigny", "Cogolin", "Collioure", "Cremieu", "Drulingen", "Ecouen", "Eschau", "Feignies", "Ferus", "Fourqueux", "Franqueville", "Gignac", "Gravigny", "Hangenbieten", "Hunspach", "Kilstett", "La Chevroliere", "La-Fare-Les-Oliviers", "Lanvellec", "Le Faget", "Lesigny", "Lesquin", "Limonest", "Messein", "Morgat", "Mundolsheim", "Nantiat", "Niederbronn-les-Bain", "Nimes", "Opoul", "Pance", "Peronne", "Ploneour Lanvern", "Realmont", "Reichstett", "Saint Aubin", "Saint Christophe", "Saint Martin dÃƒÂ¢Ã‚Â€Ã‚Â™Here", "Saint-Berthevin", "Saint-Cergues", "Sancerre", "Sarzeau", "Seltz", "Seyssins", "Souffelweyersheim", "Vireux-Molhain", "Voves", "Wambrechies", "Wervocq Sud"]
      },
      {
        name: "Aquitaine",
        cities: ["Abzac", "Bidart", "Biganos", "Buzet-sur-Baise", "Coursac", "Hasparren", "Landiras", "Le Haillan", "Ledat", "Martillac", "Puyoo", "Saint-Jean-dIllac", "Seignosse", "Tresses"]
      },
      {
        name: "Ardeche",
        cities: ["Annonay", "Aubenas", "Guilherand-Granges", "Privas", "Tournon-sur-Rhone"]
      },
      {
        name: "Ardennes",
        cities: ["Charleville-Mezieres", "Les Hautes-Rivieres", "Revin", "Sedan"]
      },
      {
        name: "Ariege",
        cities: ["Foix", "Pamier"]
      },
      {
        name: "Aube",
        cities: ["Bar-sur-Seine", "Romilly-sur-Seine", "Saint-Andre-les-Vergers", "Sainte-Savine", "Troyes"]
      },
      {
        name: "Aude",
        cities: ["Carcassonne", "Castelnaudary", "Limoux", "Narbonne"]
      },
      {
        name: "Auvergne",
        cities: ["Ambert", "Creuzier-le-Vieux", "Ferrieres", "Peschadoires", "Riotord", "Saint-Pal-de-Chalencon", "Saint-Romain-Lachalm", "Saint-Vidal", "Sainte-Sigolene"]
      },
      {
        name: "Aveyron",
        cities: ["Millau", "Onet-le-Chataeu", "Rodez", "Villefranche-de-Rouergue"]
      },
      {
        name: "Bas-Rhin",
        cities: ["Bischheim", "Bischwiller", "Haguenau", "Hoenheim", "Illkirch-Graffenstaden", "Lingolsheim", "Obernai", "Ostwald", "Saverne", "Schiltigheim", "Selestat", "Strasbourg"]
      },
      {
        name: "Basse-Normandie",
        cities: ["Deauville"]
      },
      {
        name: "Bouches-du-Rhone",
        cities: ["Aix-en-Provence", "Allauch", "Arles", "Aubagne", "Berre-l''Etang", "Bouc-Bel-Air", "Chateauneuf-les-Martigues", "Chateaurenard", "Fos-sur-Mer", "Gardanne", "Istres", "La Ciotat", "Les Pennes-Mirabeau", "Maillane", "Marignane", "Marseille", "Martigues", "Miramas", "Plan-de-Cuques", "Port-de-Bouc", "Rognac", "Saint-Martin-de-Crau", "Saint-Remy-de-Provence", "Salon-de-Provence", "Septemes-les-Vallons", "Tarascon", "Vitrolles"]
      },
      {
        name: "Bourgogne",
        cities: ["Migennes"]
      },
      {
        name: "Bretagne",
        cities: ["Javene", "Plouha"]
      },
      {
        name: "Brittany",
        cities: ["Brehan", "Broons", "Guipry", "Miniac-Morvan", "Ploudaniel", "Vern-sur-Seiche"]
      },
      {
        name: "Burgundy",
        cities: ["Aillant-sur-Tholon"]
      },
      {
        name: "Calvados",
        cities: ["Bayeux", "Caen", "Herouville-Saint-Clair", "Lisieux", "Mondeville", "Vire"]
      },
      {
        name: "Cantal",
        cities: ["Aurillac"]
      },
      {
        name: "Cedex",
        cities: ["Brumath", "Courtaboeuf", "Iregny", "cedex"]
      },
      {
        name: "Centre",
        cities: ["Azay-le-Rideau", "Chevillon-sur-Huillard", "Cloyes-sur-le-Loir", "Gellainville", "La Chaussse-Saint-Victor", "La Ville-aux-Clercs", "Ladon", "Le Chatelet"]
      },
      {
        name: "Charente",
        cities: ["Angouleme", "Cognac", "Lencloitre", "Soyaux"]
      },
      {
        name: "Charente-Maritime",
        cities: ["La Rochelle", "Rochefort", "Royan", "Saintes"]
      },
      {
        name: "Cher",
        cities: ["Bourges", "Saint-Amand-Montrond", "Saint-Doulchard", "Vierzon"]
      },
      {
        name: "Correze",
        cities: ["Brive-la-Gaillarde", "Tulle", "Ussel"]
      },
      {
        name: "Corse-du-Sud",
        cities: ["Ajaccio", "Porto-Vecchio"]
      },
      {
        name: "Cote-d''Or",
        cities: ["Beaune", "Chenove", "Dijon", "Quetigny", "Talant"]
      },
      {
        name: "Cotes-d''Armor",
        cities: ["Dinan", "Lamballe", "Lannion", "Loudeac", "Plerin", "Ploufragan", "Saint-Brieuc"]
      },
      {
        name: "Creuse",
        cities: ["Gueret"]
      },
      {
        name: "Crolles",
        cities: ["Crolles"]
      },
      {
        name: "Deux-Sevres",
        cities: ["Bressuire", "Niort", "Parthenay", "Thouars"]
      },
      {
        name: "Dordogne",
        cities: ["Bergerac", "Perigueux", "Sarlat-la-Caneda"]
      },
      {
        name: "Doubs",
        cities: ["Audincourt", "Besancon", "Beure", "Montbeliard", "Pontarlier", "Valentigney"]
      },
      {
        name: "Drome",
        cities: ["Bourg-les-Valence", "Montelimar", "Pierrelatte", "Romans-sur-Isere", "Valence"]
      },
      {
        name: "Essonne",
        cities: ["Athis-Mons", "Bretigny-sur-Orge", "Brunoy", "Bures-sur-Yvette", "Chilly-Mazarin", "Corbeil-Essonnes", "Courcouronnes", "Dourdan", "Draveil", "Epinay-sous-Senart", "Epinay-sur-Orge", "Etampes", "Evry", "Fleury-Merogis", "Gif-sur-Yvette", "Grigny", "Igny", "Juvisy-sur-Orge", "Les Ulis", "Longjumeau", "Massy", "Mennecy", "Montgeron", "Morangis", "Morsang-sur-Orge", "Orsay", "Palaiseau", "Ris-Orangis", "Saint-Michel-sur-Orge", "Sainte-Genevieve-des-Bois", "Savigny-sur-Orge", "Verrieres-le-Buisson", "Vigneux-sur-Seine", "Villebon-sur-Yvette", "Viry-Chatillon", "Yerres"]
      },
      {
        name: "Eure",
        cities: ["Bernay", "Evreux", "Gisors", "Louviers", "Pont-Audemer", "Val-de-Reuil", "Vernon"]
      },
      {
        name: "Eure-et-Loir",
        cities: ["Chartres", "Chateaudun", "Dreux", "Luce", "Mainvillier", "Nogent-le-Rotrou", "Vernouillet"]
      },
      {
        name: "Feucherolles",
        cities: ["Feucherolles"]
      },
      {
        name: "Finistere",
        cities: ["Brest", "Concarneau", "Douarnenez", "Guipavas", "Landerneau", "Le Relecq-Kerhoun", "Morlaix", "Plougastel-Daoulas", "Plouzane", "Quimper", "Quimperle"]
      },
      {
        name: "Franche-Comte",
        cities: ["Charquemont", "Chemaudin", "Pelousey", "Perrigny", "Pirey", "Villers-le-Lac"]
      },
      {
        name: "Gard",
        cities: ["Ales", "Bagnols-sur-Ceze", "Beaucaire", "Nimes", "Pont-Saint-Esprit", "Saint-Gilles", "Vauvert", "Villeneuve-les-Avignon"]
      },
      {
        name: "Gers",
        cities: ["Auch", "Beraut"]
      },
      {
        name: "Gironde",
        cities: ["Ambares-et-Lagrave", "Arcachon", "Begles", "Blanquefort", "Bordeaux", "Bruges", "Cenon", "Cestas", "Eysines", "Floirac", "Gradignan", "Gujan-Mestras", "La Teste-de-Buch", "Le Bouscat", "Libourne", "Lormont", "Merignac", "Pessac", "Saint-Medard-en-Jalles", "Talence", "Villenave-d''Ornon"]
      },
      {
        name: "Haut-Rhin",
        cities: ["Cernay", "Colmar", "Guebwiller", "Illzach", "Kingersheim", "Mulhouse", "Riediesheim", "Rixheim", "Saint-Louis", "Wittelsheim", "Wittenheim"]
      },
      {
        name: "Haute-Corse",
        cities: ["Bastia"]
      },
      {
        name: "Haute-Garonne",
        cities: ["Balma", "Blagnac", "Colomiers", "Cugnaux", "L''Union", "Muret", "Plaisance-du-Touch", "Ramonville-Saint-Agne", "Saint-Gaudens", "Saint-Orens-de-Gameville", "Toulouse", "Tournefeuille"]
      },
      {
        name: "Haute-Loire",
        cities: ["Blanzac", "Le Puy-en-Velay"]
      },
      {
        name: "Haute-Marne",
        cities: ["Chaumont", "Langres", "Saint-Dizier"]
      },
      {
        name: "Haute-Saone",
        cities: ["Hericourt", "Lure", "Luxeuil-les-Bains", "Vesoul"]
      },
      {
        name: "Haute-Savoie",
        cities: ["Annecy", "Annecy-le-Vieux", "Annemasse", "Archamps", "Bonneville", "Chamonix-Mont-Blanc", "Cluses", "Contamine sur Arve", "Cran-Gevrier", "Passy", "Rumilly", "Sallanches", "Seynod", "Thonon-les-Bains"]
      },
      {
        name: "Haute-Vienne",
        cities: ["Gaillard", "Limoges", "Saint-Junien"]
      },
      {
        name: "Hautes-Alpes",
        cities: ["Briancon", "Gap"]
      },
      {
        name: "Hautes-Pyrenees",
        cities: ["Lourdes", "Tarbes"]
      },
      {
        name: "Hauts-de-Seine",
        cities: ["Antony", "Asnieres-sur-Seine", "Bagneux", "Bois-Colombes", "Boulogne-Billancourt", "Bourg-la-Reine", "Chatenay-Malabry", "Chatillon", "Chaville", "Clamart", "Clichy", "Colombes", "Courbevoie", "Fontenay-aux-Roses", "Garches", "Gennevillers", "Issy-les-Moulineaux", "La Garenne-Colombes", "Le Plessis-Robinson", "Levallois-Perret", "Malakoff", "Meudon", "Montrouge", "Nanterre", "Neuilly-sur-Seine", "Puteaux", "Rueil-Malmaison", "Saint-Cloud", "Sceaux", "Sevres", "Suresnes", "Vanves", "Ville-d''Avray", "Villeneuve-la-Garenne"]
      },
      {
        name: "Herault",
        cities: ["Agde", "Beziers", "Castelnau-le-Lez", "Frontignan", "Lattes", "Lunel", "Mauguio", "Montpellier", "Sete"]
      },
      {
        name: "Ile-de-France",
        cities: ["Champagne-sur-Oise", "Croissy-Beaubourg", "Gennevilliers", "Le Mesnil-le-Roi", "Le Plessis-Bouchard", "Rebais", "Saint-Thibault-des-Vignes"]
      },
      {
        name: "Ille-et-Vilaine",
        cities: ["Cesson-Sevigne", "Dinard", "Fougeres", "Rennes", "Saint-Malo", "Vitre"]
      },
      {
        name: "Indre",
        cities: ["Chateauroux", "Issoudun"]
      },
      {
        name: "Indre-et-Loire",
        cities: ["Amboise", "Joue-les-Tours", "Saint-Avertin", "Saint-Cyr-sur-Loire", "Saint-Pierre-des-Corps", "Tours"]
      },
      {
        name: "Isere",
        cities: ["Bourgoin-Jallieu", "Crolles", "Echirolles", "Fontaine", "Grenoble", "Le Pont-de-Claix", "Meylan", "Saint-Egreve", "Saint-Martin-d''Heres", "Seyssinet-Pariset", "Vienne", "Villefontaine", "Voiron"]
      },
      {
        name: "Jura",
        cities: ["Champagnole", "Dole", "Lons-le-Saunier", "Saint-Claude"]
      },
      {
        name: "Klagenfurt",
        cities: ["Sebastiangasse"]
      },
      {
        name: "Landes",
        cities: ["Biscarrosse", "Dax", "Hagetmau", "Landes", "Mont-de-Marsan", "Saint-Paul-les-Dax", "Tarnos"]
      },
      {
        name: "Languedoc-Roussillon",
        cities: ["Codolet", "Cuxac-d''Aude", "Gigean", "Grabels", "Lamalou-les-Bains", "Perols", "Peyrens", "Tuchan"]
      },
      {
        name: "Larcay",
        cities: ["Larcay"]
      },
      {
        name: "Le Castellet",
        cities: []
      },
      {
        name: "Le Creusot",
        cities: []
      },
      {
        name: "Limousin",
        cities: ["Voutezac"]
      },
      {
        name: "Loir-et-Cher",
        cities: ["Blois", "Romorantin-Lanthenay", "Vendome"]
      },
      {
        name: "Loire",
        cities: ["Andrezieux-Boutheon", "Firminy", "La Ricamarie", "Le Chambon-Feugerolles", "Montbrison", "Riorges", "Rive-de-Gier", "Roanne", "Roche-la-Moliere", "Saint-Chamond", "Saint-Etienne", "Saint-Just-Saint-Rambert"]
      },
      {
        name: "Loire-Atlantique",
        cities: ["Bouguenais", "Carquefou", "Chateaubriant", "Coueron", "Guerande", "La Baule-Escoublac", "La Chapelle-sur-Erdre", "Nantes", "Orvault", "Reze", "Saint Etienne de Mer Morte", "Saint-Herblain", "Saint-Nazaire", "Saint-Sebastien-sur-Loire", "Sainte-Luce-sur-Loire", "Vertou"]
      },
      {
        name: "Loiret",
        cities: ["Amilly", "Chalette-sur-Loing", "Fleury-les-Aubrais", "Gien", "Montargis", "Olivet", "Orleans", "Pithiviers", "Saint-Jean-de-Braye", "Saint-Jean-de-la-Ruelle", "Saran"]
      },
      {
        name: "Lorraine",
        cities: ["Montbronn"]
      },
      {
        name: "Lot",
        cities: ["Cahors", "Figeac"]
      },
      {
        name: "Lot-et-Garonne",
        cities: ["Agen", "Le Passage", "Marmande", "Tonneins", "Villeneuve-sur-Lot"]
      },
      {
        name: "Lower Normandy",
        cities: []
      },
      {
        name: "Lozere",
        cities: ["Mende"]
      },
      {
        name: "Maine-et-Loire",
        cities: ["Angers", "Avrille", "Cholet", "Les Ponts-de-Ce", "Saint-Barthelemy-d''Anjou", "Saumur", "Torfou", "Trelaze"]
      },
      {
        name: "Manche",
        cities: ["Cherbourg", "Coutances", "Equeurdreville-Hainneville", "Granville", "Octeville", "Saint-Lo", "Tourlaville"]
      },
      {
        name: "Marne",
        cities: ["Chalons-en-Champagne", "Epernay", "Reims", "Tinqueux", "Vitry-le-Francois"]
      },
      {
        name: "Mayenne",
        cities: ["Chateau-Gontier", "Laval", "Mayenne", "Montsurs"]
      },
      {
        name: "Meurthe-et-Moselle",
        cities: ["Dombasle-sur-Meurthe", "Jarville-la-Malgrange", "Laxou", "Longwy", "Luneville", "Nancy", "Pont-a-Mousson", "Saint-Max", "Toul", "Vandoeuvre-les-Nancy", "Villers-les-Nancy", "Villerupt"]
      },
      {
        name: "Meuse",
        cities: ["Bar-le-Duc", "Verdun"]
      },
      {
        name: "Midi-Pyrenees",
        cities: ["Boissezon", "Hauterive", "Launaguet", "Mauleon", "Maurens-Scopont"]
      },
      {
        name: "Morbihan",
        cities: ["Auray", "Guidel", "Hennebont", "Lanester", "Lorient", "Ploemeur", "Pontivy", "Vannes"]
      },
      {
        name: "Moselle",
        cities: ["Amneville", "Behren-les-Forbach", "Creutzwald", "Fameck", "Florange", "Forbach", "Freyming-Merlebach", "Hagondange", "Hayange", "Hombourg-Haut", "Maizieres-les-Metz", "Marly", "Metz", "Montigny-les-Metz", "Moyeuvre-Grande", "Rombas", "Saint-Avold", "Sarrebourg", "Sarreguemines", "Stiring-Wendel", "Thionville", "Uckange", "Woippy", "Yutz"]
      },
      {
        name: "Nievre",
        cities: ["Cosne-Cours-sur-Loire", "Nevers", "Varennes-Vauzelles"]
      },
      {
        name: "Nord",
        cities: ["Aniche", "Annoeullin", "Anzin", "Armentieres", "Aulnoye-Aymeries", "Bailleul", "Bondues", "Bruay-sur-l''Escaut", "Cambrai", "Cappelle-la-Grande", "Caudry", "Comines", "Conde-sur-l''Escaut", "Coudekerque-Branche", "Croix", "Denain", "Douai", "Douchy-les-Mines", "Dunkerque", "Escaudain", "Fache-Thumesnil", "Fourmies", "Grande-Synthe", "Graveline", "Halluin", "Haubourdin", "Hautmont", "Hazebrouck", "Hem", "Hulluch", "Jeumont", "La Madeleine", "Lambersart", "Leers", "Lille", "Lomme", "Loos", "Lys-lez-Lannoy", "Marcq-en-Baroeul", "Marennes", "Marly", "Marquette-lez-Lille", "Maubeuge", "Merville", "Mons-en-Baroeul", "Mouvaux", "Neuville-en-Ferrain", "Onnaing", "Raismes", "Ronchin", "Roncq", "Roubaix", "Saint-Amand-les-Eaux", "Saint-Andre-lez-Lille", "Saint-Pol-sur-Mer", "Saint-Saulve", "Seclin", "Sin-le-Noble", "Somain", "Tourcoing", "Valenciennes", "Vieux-Conde", "Villeneuve-d''Ascq", "Wasquehal", "Wattignies", "Wattrelos", "Waziers"]
      },
      {
        name: "Nord-Pas-de-Calais",
        cities: ["Esquelbecq"]
      },
      {
        name: "Oise",
        cities: ["Beauvais", "Chantilly", "Clermont", "Compiegne", "Creil", "Crepy-en-Valois", "Gouvieux", "Meru", "Montataire", "Nogent-sur-Oise", "Noyon", "Pont-Sainte-Maxence", "Senlis"]
      },
      {
        name: "Orne",
        cities: ["Alencon", "Argentan", "Flers", "L''Aigle"]
      },
      {
        name: "Paris",
        cities: ["Paris"]
      },
      {
        name: "Pas-de-Calais",
        cities: ["Aire-sur-la-Lys", "Arras", "Auchel", "Avion", "Berck", "Bethune", "Boulogne-sur-Mer", "Bruay-la-Brussiere", "Bully-les-Mines", "Calais", "Carvin", "Courrieres", "Etaples", "Harnes", "Henin-Beaumont", "Le Portel", "Lens", "Libercourt", "Lievin", "Lillers", "Longuenesse", "Marck", "Mericourt", "Montigny-en-Gohelle", "Noeux-les-Mines", "Oignies", "Outreau", "Rouvroy", "Saint-Martin-Boulogne", "Saint-Omer", "Sallaumines", "Vendin-le-Vieil"]
      },
      {
        name: "Pays de la Loire",
        cities: []
      },
      {
        name: "Pays-de-la-Loire",
        cities: ["Loiron", "Marolles-les-Braults", "Mortagne-sur-Sevre", "Mouzillon", "Noirmoutier-en-l''ÃƒÂŽle"]
      },
      {
        name: "Picardy",
        cities: ["Friville", "Liancourt", "Maizy", "Oust-Marest", "Puiseux-le-Hauberger", "Saint-Crepin-Ibouvillers"]
      },
      {
        name: "Puy-de-Dome",
        cities: ["Aubiere", "Beaumont", "Chamalieres", "Clermont-Ferrand", "Cournon-d''Auvergne", "Gerzat", "Issoire", "Riom", "Thiers"]
      },
      {
        name: "Pyrenees-Atlantiques",
        cities: ["Anglet", "Bayonne", "Biarritz", "Billere", "Hendaye", "Lons", "Oloron-Sainte-Marie", "Orthez", "Pau", "Saint-Jean-de-Luz"]
      },
      {
        name: "Pyrenees-Orientales",
        cities: ["Perpignan", "Saint-Esteve"]
      },
      {
        name: "Quelmes",
        cities: ["Quelmes"]
      },
      {
        name: "Rhone",
        cities: ["Brignais", "Bron", "Caluire-et-Cuire", "Decines-Charpieu", "Ecully", "Francheville", "Genas", "Genay", "Givors", "Lyon", "Meyzieu", "Mions", "Oullins", "Pierre-Benite", "Rillieux-la-Pape", "Saint-Fons", "Saint-Genis-Laval", "Saint-Priest", "Sainte-Foy-les-Lyon", "Tarare", "Tassin-la-Demi-Lune", "Vaulx-en-Velin", "Venissieux", "Villefranche-sur-Saone", "Villeurbanne"]
      },
      {
        name: "Rhone-Alpes",
        cities: ["Beauvoir-en-Royans", "Belley", "Bons-en-Chablais", "Chalain-d''Uzore", "Chassieu", "Chavanod", "Chazay-d-Azergues", "Chimilin", "Civrieux-d Azergues", "Corbas", "Courzieu", "Dardilly", "Guereins", "Izernore", "La Talaudiere", "La Tronche", "La Verpilliere", "Le Cheylard", "Le Cheylas", "Mery", "Moirans", "Montalieu-Vercieu", "Montmiral", "Peronnas", "Poncin", "Quincie-en-Beaujolais", "Saint-Quentin-sur-Isere", "Sainte Agathe la Bouteresse", "Sainte-Consorce", "Sisteron", "Trevoux", "Villard-Bonnot"]
      },
      {
        name: "Saint Ouen",
        cities: []
      },
      {
        name: "Saint Viatre",
        cities: []
      },
      {
        name: "Saone-et-Loire",
        cities: ["Autun", "Chalon-sur-Saone", "Digoin", "Gueugnon", "Le Creusot", "Macon", "Montceau-les-Mines", "Paray-le-Monial", "Saint-Vallier"]
      },
      {
        name: "Sarthe",
        cities: ["Allonnes", "La Ferte-Bernard", "La Fleche", "Le Mans", "Sable-sur-Sarthe"]
      },
      {
        name: "Savoie",
        cities: ["Aix-les-Bains", "Albertville", "Chambery", "La Motte-Servolex", "Saint-Jean-de-Maurienne"]
      },
      {
        name: "Seine-Maritime",
        cities: ["Barentin", "Bihorel", "Bois-Guillaume", "Bolbec", "Canteleu", "Caudebec-les-Elbeuf", "Darnetal", "Deville-les-Rouen", "Dieppe", "Elbeuf", "Fecamp", "Gonfreville-l''Orcher", "Grand-Couronne", "Harfleur", "Le Grand-Quevilly", "Le Havre", "Le Petit-Quevilly", "Lillebonne", "Maromme", "Mont-Saint-Aignan", "Montivilliers", "Notre-Dame-de-Gravenchon", "Oissel", "Rouen", "Saint-Etienne-du-Rouvray", "Sotteville-les-Rouen", "Yvetot"]
      },
      {
        name: "Seine-Saint-Denis",
        cities: ["Aubervillers", "Aulnay-sous-Bois", "Bagnolet", "Bobigny", "Bondy", "Clichy-sous-Bois", "Drancy", "Epinay-sur-Seine", "Gagny", "La Courneuve", "Le Blanc-Mesnil", "Le Bourget", "Le Pre-Saint-Gervais", "Le Raincy", "Les Lilas", "Les Pavillons-sous-Bois", "Livry-Gargan", "Montfermeil", "Montreuil", "Neuilly-Plaisance", "Neuilly-sur-Marne", "Noisy-le-Grand", "Noisy-le-Sec", "Pantin", "Pierrefitte-sur-Seine", "Romainville", "Rosny-sous-Bois", "Saint-Denis", "Saint-Ouen", "Sevran", "Stains", "Tremblay-en-France", "Villemomble", "Villepinte", "Villetaneuse"]
      },
      {
        name: "Seine-et-Marne",
        cities: ["Avon", "Brie-Comte-Robert", "Champs-sur-Marne", "Chelles", "Claye-Souilly", "Combs-la-Ville", "Coulommiers", "Dammarie-les-Lys", "Fontainebleau", "Lagny-sur-Marne", "Le Mee-sur-Seine", "Lognes", "Meaux", "Melun", "Mitry-Mory", "Moissy-Cramayel", "Montereau-Fault-Yonne", "Nemours", "Noisiel", "Ozoir-la-Ferriere", "Pontault-Combault", "Provins", "Roissy-en-Brie", "Saint-Fargeau-Ponthierry", "Savigny-le-Temple", "Torcy", "Vaires-sur-Marne", "Veneux", "Villeparisis"]
      },
      {
        name: "Somme",
        cities: ["Abbeville", "Albert", "Amiens"]
      },
      {
        name: "Sophia Antipolis",
        cities: []
      },
      {
        name: "Souvans",
        cities: ["Souvans"]
      },
      {
        name: "Tarn",
        cities: ["Albi", "Carmaux", "Castres", "Gaillac", "Graulhet", "Mazamet"]
      },
      {
        name: "Tarn-et-Garonne",
        cities: ["Castelsarassin", "Moissac", "Montauban"]
      },
      {
        name: "Territoire de Belfort",
        cities: []
      },
      {
        name: "Treignac",
        cities: ["Chamberet"]
      },
      {
        name: "Upper Normandy",
        cities: []
      },
      {
        name: "Val-d''Oise",
        cities: ["Argenteuil", "Arnouville-les-Gonesse", "Beauchamps", "Bezons", "Cergy", "Cormeilles-en-Parisis", "Deuil-la-Barre", "Domont", "Eaubonne", "Enghien-les-Bains", "Eragny", "Ermont", "Ezanville", "Fosses", "Franconville", "Garges-les-Gonesse", "Gonesse", "Goussainville", "Herblay", "Jouy-le-Moutier", "L''Isle-Adam", "Montigny-les-Cormeilles", "Montmagny", "Montmorency", "Osny", "Persan", "Pontoise", "Saint-Brice-sous-Foret", "Saint-Gratien", "Saint-Leu-la-Foret", "Saint-Ouen-l''Aumone", "Sannois", "Sarcelles", "Soisy-sous-Montmorency", "Taverny", "Vaureal", "Villiers-le-Bel"]
      },
      {
        name: "Val-de-Marne",
        cities: ["Alfortville", "Arcueil", "Boissy-Saint-Leger", "Bonneuil", "Bry-sur-Marne", "Cachan", "Champigny-sur-Marne", "Charenton-le-Pont", "Chennevieres-sur-Marne", "Chevilly-Larue", "Choisy-le-Roi", "Creteil", "Fontenay-sous-Bois", "Fresnes", "Gentilly", "Ivry-sur-Seine", "Joinville-le-Pont", "L''Hay-les-Roses", "La Queue-en-Brie", "Le Kremlin-Bicetre", "Le Perreux-sur-Marne", "Le Plessis-Trevise", "Limeil-Brevannes", "Maisons-Alfort", "Nogent-sur-Marne", "Orly", "Ormesson-sur-Marne", "Saint-Mande", "Saint-Maur-des-Fosses", "Saint-Maurice", "Sucy-en-Brie", "Thiais", "Valenton", "Villejuif", "Villeneuve-Saint-Georges", "Villeneuve-le-Roi", "Villiers-sur-Marne", "Vincennes", "Vitry-sur-Seine"]
      },
      {
        name: "Var",
        cities: ["Brignoles", "Draguignan", "Frejus", "Hyeres", "La Crau", "La Garde", "La Seyne-sur-Mer", "La Valette-du-Var", "Le Pradet", "Ollioules", "Roquebrune-sur-Argens", "Saint-Maximin-la-Sainte-Baume", "Saint-Raphael", "Sainte-Maxime", "Sanary-sur-Mer", "Six-Fours-les-Plages", "Sollies-Pont", "Toulon"]
      },
      {
        name: "Vaucluse",
        cities: ["Apt", "Avignon", "Bollene", "Carpentras", "Cavaillon", "L''Isle-sur-la-Sorgue", "Le Pontet", "Orange", "Pertuis", "Sorgues", "Valreas"]
      },
      {
        name: "Vellise",
        cities: ["Vellise"]
      },
      {
        name: "Vendee",
        cities: ["Challans", "Chateau-d''Olonne", "Fontenay-le-Comte", "La Chasnis", "La Roche-sur-Yon", "Les Herbiers", "Les Sables-d''Olonne", "Longeville-sur-Mer"]
      },
      {
        name: "Vienne",
        cities: ["Chatellerault", "Poitiers"]
      },
      {
        name: "Vosges",
        cities: ["Epinal", "Gerardmer", "Remiremont", "Saint-Die"]
      },
      {
        name: "Yonne",
        cities: ["Auxerre", "Avallon", "Joigny", "Sens"]
      },
      {
        name: "Yvelines",
        cities: ["Acheres", "Andresy", "Aubergenville", "Bois-d''Arcy", "Carrieres-sous-Poissy", "Carrieres-sur-Seine", "Chanteloup-les-Vignes", "Chatou", "Conflans-Sainte-Honorine", "Croissy-sur-Seine", "Elancourt", "Fontenay-le-Fleury", "Guyancourt", "Houilles", "La Celle-Saint-Cloud", "Le Chesnay", "Le Pecq", "Le Vesinet", "Les Clayes-sous-Bois", "Les Mureaux", "Limay", "Maisons-Laffitte", "Mantes-la-Jolie", "Mantes-la-Ville", "Marly-le-Roi", "Maurepas", "Montesson", "Montigny-le-Bretonneux", "Plaisir", "Poissy", "Rambouillet", "Saint-Cyr-l''Ecole", "Saint-Germain-en-Laye", "Sartrouville", "Trappes", "Triel-sur-Seine", "Velizy-Villacoublay", "Verneuil-sur-Seine", "Versailles", "Viroflay", "Voisins-le-Bretonneux"]
      }
    ],
    isoAlpha2: "FR",
    isoAlpha3: "FRA",
    isoNumeric: 250
  },
  {
    name: "French Guiana",
    flag: "🇬🇫",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Cayenne",
        cities: ["Camopi", "Cayenne", "Iracoubo", "Kourou", "Macouria", "Matoury", "Remire-Montjoly", "Roura", "Saint-Georges", "Sinnamary"]
      },
      {
        name: "Saint-Laurent-du-Maroni",
        cities: ["Apatou", "Grand-Santi", "Mana", "Maripasoula", "Saint-Laurent-du-Maroni"]
      }
    ],
    isoAlpha2: "GF",
    isoAlpha3: "GUF",
    isoNumeric: 254
  },
  {
    name: "French Polynesia",
    flag: "🇵🇫",
    currency: {
      code: "XPF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Iles du Vent",
        cities: []
      },
      {
        name: "Iles sous le Vent",
        cities: []
      },
      {
        name: "Marquesas",
        cities: ["Atuona", "Fatu-Hiva", "Hakahao", "Hakamaii", "Hatiheu", "Tahuata", "Taiohae", "Taipivai", "Ua-Huka"]
      },
      {
        name: "Tuamotu",
        cities: ["Ahe", "Amanu", "Anaa", "Apataki", "Arutua", "Faaite", "Fakahima", "Fakarava", "Fangatau", "Hao", "Hereheretue", "Hikueru", "Katiu", "Kauehi", "Kaukura", "Makatea", "Makemo", "Manihi", "Marokau", "Napuka", "Niau", "Nukutavake", "Puamau", "Pukapuka", "Pukarua", "Rangiroa", "Raroia", "Reao", "Rikitea", "Taenga", "Takapoto", "Takaroa", "Tatakoto", "Tepoto", "Tikehau", "Tureia", "Vahitahi", "Vairaatea"]
      },
      {
        name: "Tubuai",
        cities: ["Amaru", "Anapoto", "Anatonu", "Auti", "Avera", "Mahu", "Mataura", "Moerai", "Mutuaura", "Rairua", "Rapa", "Taahuaia", "Vaiuru"]
      }
    ],
    isoAlpha2: "PF",
    isoAlpha3: "PYF",
    isoNumeric: 258
  },
  {
    name: "French Southern Territories",
    flag: "🇹🇫",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Amsterdam",
        cities: ["Martin-de-Vivies"]
      },
      {
        name: "Crozet Islands",
        cities: []
      },
      {
        name: "Kerguelen",
        cities: ["Port-aux-Francais"]
      }
    ],
    isoAlpha2: "TF",
    isoAlpha3: "ATF",
    isoNumeric: 260
  },
  {
    name: "Gabon",
    flag: "🇬🇦",
    currency: {
      code: "XAF",
      name: "Franc",
      symbol: "FCF"
    },
    states: [
      {
        name: "Estuaire",
        cities: ["Cocobeach", "Kango", "Libreville", "Nkan", "Ntoum"]
      },
      {
        name: "Haut-Ogooue",
        cities: ["Lekoni", "Masuku", "Moanda", "Mounana", "Okandja"]
      },
      {
        name: "Moyen-Ogooue",
        cities: ["Lambarene", "Ndjole"]
      },
      {
        name: "Ngounie",
        cities: ["Fougamou", "Mbigou", "Mimongo", "Mouila", "Ndende"]
      },
      {
        name: "Nyanga",
        cities: ["Mayumba", "Tchibanga", "Tsogni"]
      },
      {
        name: "Ogooue-Ivindo",
        cities: ["Booue", "Makokou", "Mekambo"]
      },
      {
        name: "Ogooue-Lolo",
        cities: ["Koulamoutou", "Lastoursville"]
      },
      {
        name: "Ogooue-Maritime",
        cities: ["Gamba", "Omboue", "Port-Gentil", "Sette Cama"]
      },
      {
        name: "Woleu-Ntem",
        cities: ["Bitam", "Lalara", "Medouneu", "Minvoul", "Mitzic", "Oyem"]
      }
    ],
    isoAlpha2: "GA",
    isoAlpha3: "GAB",
    isoNumeric: 266
  },
  {
    name: "Gambia",
    flag: "🇬🇲",
    currency: {
      code: "GMD",
      name: "Dalasi",
      symbol: "D"
    },
    states: [
      {
        name: "Banjul",
        cities: ["Banjul"]
      },
      {
        name: "Basse",
        cities: ["Basse", "Gambissara", "Sabi", "Salikeni"]
      },
      {
        name: "Brikama",
        cities: ["Brikama", "Brufut", "Gunjur", "Sukuta"]
      },
      {
        name: "Janjanbureh",
        cities: ["Bansang", "Janjanbureh"]
      },
      {
        name: "Kanifing",
        cities: ["Bakau", "Serekunda"]
      },
      {
        name: "Kerewan",
        cities: ["Barra", "Essau", "Farafenni", "Kerewan", "Lamin"]
      },
      {
        name: "Kuntaur",
        cities: ["Kuntaur"]
      },
      {
        name: "Mansakonko",
        cities: ["Mansakonko"]
      }
    ],
    isoAlpha2: "GM",
    isoAlpha3: "GMB",
    isoNumeric: 270
  },
  {
    name: "Georgia",
    flag: "🇬🇪",
    currency: {
      code: "GEL",
      name: "Lari",
      symbol: false
    },
    states: [
      {
        name: "Abhasia",
        cities: ["Ahali Atoni", "Bihvinta", "Gagra", "Gali", "Gudauta", "Gulripshi", "Ochamchira", "Suhumi", "Tkvarcheli"]
      },
      {
        name: "Ajaria",
        cities: ["Batumi", "Dioknisi", "Kobuleti", "Mahindzhauri"]
      },
      {
        name: "Guria",
        cities: ["Lanchhuti", "Ozurgeti"]
      },
      {
        name: "Imereti",
        cities: ["Bagdadi", "Chaltubo", "Chiatura", "Honi", "Kutaisi", "Sachhere", "Samtredia", "Terzhola", "Tkibuli", "Vani", "Zestaponi"]
      },
      {
        name: "Kaheti",
        cities: ["Ahmeta", "Cnori", "Dedoplisckaro", "Gurdzhaani", "Kvareli", "Lagodehi", "Sagaredzho", "Signahi", "Telavi"]
      },
      {
        name: "Kvemo Kartli",
        cities: []
      },
      {
        name: "Mcheta-Mtianeti",
        cities: ["Dusheti", "Mcheta"]
      },
      {
        name: "Racha",
        cities: ["Ambrolauri", "Cageri", "Oni"]
      },
      {
        name: "Samagrelo-Zemo Svaneti",
        cities: []
      },
      {
        name: "Samche-Zhavaheti",
        cities: ["Ahalcihe", "Ahalkalaki", "Borzhomi", "Ninocminda", "Vale"]
      },
      {
        name: "Shida Kartli",
        cities: []
      },
      {
        name: "Tbilisi",
        cities: ["Tbilisi"]
      }
    ],
    isoAlpha2: "GE",
    isoAlpha3: "GEO",
    isoNumeric: 268
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Auvergne",
        cities: []
      },
      {
        name: "Baden-Wurttemberg",
        cities: ["Aalen", "Achern", "Aichtal", "Albstadt", "Aldingen", "Allmersbach", "Alpirsbach", "Altensteig", "Altlussheim", "Ammerbuch", "Appenweier", "Asperg", "Backnang", "Bad Durrheim", "Bad Friedrichshall", "Bad Krozingen", "Bad Liebenzell", "Bad Mergentheim", "Bad Rappenau", "Bad Sackingen", "Bad Schonborn", "Bad Urach", "Bad Waldsee", "Bad Wurzach", "Baden-Baden", "Bahlingen", "Baiersbronn", "Balgheim", "Balingen", "Ballrechten-Dottingen", "Besigheim", "Biberach", "Bietigheim-Bissingen", "Binzen", "Birkenfeld", "Bisingen", "Bitz", "Blaubeuren", "Blaustein", "Blumberg", "Boblingen", "Bodelshausen", "Bonndorf", "Bonnigheim", "Bopfingen", "Bottingen", "Brackenheim", "Breisach", "Bretten", "Bretzfeld", "Bruchsal", "Bruhl", "Buchen", "Buchenbach", "Buhl", "Burgstetten", "Burladingen", "Calw", "Crailsheim", "Denkendorf", "Denzlingen", "Dettingen", "Dietenheim", "Ditzingen", "Donaueschingen", "Donzdorf", "Dornhan", "Dornstadt", "Dornstetten", "Dossenheim", "Durbheim", "Durmersheim", "Eberbach", "Ebersbach", "Edingen", "Edingen-Neckarhausen", "Eggenstein-Leopoldshafen", "Ehingen", "Eislingen", "Ellhofen", "Ellwangen", "Emmendingen", "Emmingen-Liptingen", "Engen", "Eningen", "Eppelheim", "Eppingen", "Erbach", "Eriskirch", "Eschach", "Esslingen", "Ettenheim", "Ettlingen", "Fellbach", "Filderstadt", "Freiberg", "Freiburg", "Freudenstadt", "Frickenhausen", "Fridingen", "Friedrichshafen", "Friesenheim", "Frittlingen", "Furtwangen", "Gaggenau", "Gaildorf", "Gartringen", "Gaufelden", "Geislingen", "Gengenbach", "Gerlingen", "Gernsbach", "Gerstetten", "Giengen", "Goppingen", "Gottmadingen", "Graben-Neudorf", "Grafenberg", "Grafenhausen", "Grenzach-Wyhlen", "GroBbettlingen", "Grunkraut", "Gschwend", "Guglingen", "Gundelfingen", "Gutach", "Haigerloch", "Haiterbach", "Harmersabch", "Hausach", "Hechingen", "Heddesheim", "Heidelberg", "Heidenheim", "Heilbronn", "Hemsbach", "Herbrechtingen", "Herrenberg", "Heubach", "Hirschberg", "Hockenheim", "Holzgerlingen", "Horb", "Hufingen", "Huttlingen", "Isny", "Ispringen", "Jungingen", "Karlsbad", "Karlsruhe", "Kehl", "Kernen", "Ketsch", "Kieselbronn", "Kirchberg an der Jagst", "Kirchheim", "Kirchzarten", "Kisslegg", "Klettgau", "Kongen", "Konigsbach-Stein", "Konigsbronn", "Konstanz", "Korb", "Korntal-Munchingen", "Kornwestheim", "Kraichtal", "Kressbronn an Bodensee", "Kronau", "Kuessaberg", "Kunzelsau", "Ladenburg", "Lahr", "Laichingen", "Langenau", "Lauda-Konigshofen", "Lauffen", "Laupheim", "Leimen", "Leinfelden-Echterdingen", "Leingarten", "Lenningen", "Lenzkirch", "Leonberg", "Leutenbach", "Leutkirch", "Lichtenstein", "Linkenheim-Hochstetten", "Lorch", "Lorrach", "Ludwigsburg", "Malsch", "Mannheim", "Marbach", "Markdorf", "Markgroningen", "Maulburg", "MeBstetten", "Meckenbeuren", "Meckesheim", "Meersburg", "Mengen", "Metzingen", "Mockmuhl", "Moglingen", "Monsheim", "Mosbach", "Mossingen", "Muhlacker", "Mullheim", "Munsingen", "Murrhardt", "Nagold", "Neckargemund", "Neckarsulm", "Neresheim", "Neuenburg", "Neuhausen", "Niederstetten", "Niefern-Oschelbronn", "NuBloch", "Nurtingen", "Oberhausen-Rheinhausen", "Oberkirch", "Oberndorf", "Oberstenfeld", "Obersulm", "Ochsenhausen", "Offenburg", "Ofterdingen", "Oftersheim", "Oggelshausen", "Ohringen", "Olbronn-Durrn", "Oppenweiler", "Ostfildern", "Ostringen", "Otisheim", "Pfalzgrafenweiler", "Pfinztal", "Pforzheim", "Pfullendorf", "Pfullingen", "Philippsburg", "Plankstadt", "Pleidelsheim", "Pliezhausen", "Plochingen", "Pluderhausen", "Radolfzell", "Rastatt", "Ravensburg", "Reilingen", "Remchingen", "Remseck", "Remshalden", "Renchen", "Renningen", "Reutlingen", "Rheinau", "Rheinfelden", "Rheinmunster", "Rheinstetten", "Riederich", "Riedlingen", "Rielasingen-Worblingen", "Rosenfeld", "Rottenburg", "Rottweil", "Rudersberg", "Rutesheim", "Sachsenheim", "Salem", "Sandhausen", "Sankt Georgen", "Sankt Leon-Rot", "Saulgau", "Scheer", "Schlierbach", "Schonaich", "Schopfheim", "Schorndorf", "Schramberg", "Schriesheim", "Schwabisch Gmund", "Schwabisch Hall", "Schwaigern", "Schwetzingen", "Schwieberdingen", "Seitingen-Oberflacht", "Sexau", "Sigmaringen", "Sindelfingen", "Singen", "Sinsheim", "Sinzheim", "Sonnenbuhl", "Sontheim", "Spaichingen", "Stegen", "Steinen", "Steinheim", "Steinmauern", "Stockach", "Straubenhardt", "Stutensee", "Stuttgart", "SuBen", "Sulz", "Sulzfeld", "Tamm", "Tauberbischofsheim", "Teningen", "Tettnang", "Titisee-Neustadt", "Trossingen", "Tubingen", "Tuningen", "Tuttlingen", "Uberlingen", "Ubstadt-Weiher", "Uhingen", "Ulm", "Umkirch", "Vaihingen", "Villingen-Schwenningen", "Villingendorf", "Waghausel", "Waiblingen", "Waldbronn", "Waldkirch", "Waldlaubersheim", "Waldshut-Tiengen", "Walldorf", "Walldurn", "Walzbachtal", "Wangen", "Wehr", "Weikersheim", "Weil", "Weil am Rhein", "Weil der Stadt", "Weil im Schonbuch", "Weilheim", "Weingarten", "Weinheim", "Weinsberg", "Weinstadt", "Wellendingen", "Welzheim", "Wendlingen", "Wernau", "Wertheim", "Wiesloch", "Wildbad", "Wildberg", "Winnenden", "Wolpertshausen", "Zuzenhausen"]
      },
      {
        name: "Bavaria",
        cities: ["Ahorn", "Allershausen", "Attenhofen", "Bad Birnbach", "Bad Endorf", "Bad Gronenbach", "Barbing", "Benediktbeuern", "Breitenberg", "Bruckberg", "Brunnthal", "Burgheim", "Chiemsee", "Emersacker", "Eresing", "Fahrenzhausen", "Faulbach", "Finning", "Forstinning", "Georgensgmund", "Haldenwang", "Heideck", "Heimenkirch", "Hergensweiler", "Hirschau", "Iffeldorf", "Karlstein", "Kleinheubach", "Kleinwallstadt", "Kotz", "Krailling", "Langenbach", "Laudenbach", "Leutershausen", "Mammendorf", "Mombris", "Munnerstadt", "Neu-Ulm", "Niederlauer", "Obernburg", "Oberpfaffenhofen", "Ostallgau", "Prittriching", "Prutting", "Pullach", "Putzbrunn", "Randersacker", "Rednitzhembach", "Ronsberg", "Ruckersdorf", "Schaufling", "Schonberg", "Seefeld", "Sengenthal", "Sondheim v.d.Rhon", "Steinwiesen", "Stockheim", "Tagmersheim", "Uettingen", "Unterfohring", "Weibensberg", "Wiesthal", "Wildflecken", "Wolfertschwenden", "Zorneding"]
      },
      {
        name: "Bayern",
        cities: ["Abensberg", "Aichach", "Ainring", "Altdorf", "Altotting", "Altusried", "Alzenau", "Amberg", "Amerang", "Aschaffenburg", "Augsburg", "Bad Aibling", "Bad Kissingen", "Bad Neustadt", "Bad Reichenhall", "Bad Tolz", "Bad Windsheim", "Bad Worishofen", "Bamberg", "Bayreuth", "Bobingen", "Bogen", "Bruckmuhl", "Buchloe", "Burghausen", "Burgkirchen", "Burglengenfeld", "Burgthann", "Buttenheim", "Cadolzburg", "Castell", "Cham", "Coburg", "Dachau", "Deggendorf", "DieBen", "Diedorf", "Dietmannsried", "Dietramszell", "Dillingen", "Dingolfing", "Dinkelsbuhl", "Dombuhl", "Donauworth", "Dorfen", "Ebersberg", "Eching", "Eckental", "Eggenfelden", "Eichenau", "Eichstatt", "Elchingen", "Erding", "Ergolding", "Erlangen", "Erlenbach", "Essenbach", "Feldafing", "Feldkirchen-Westerham", "Feucht", "Feuchtwangen", "Forchheim", "Freilassing", "Freising", "Fridolfing", "Friedberg", "Furstenfeldbruck", "Furth", "Furth im Wald", "Fussen", "Gachenbach", "Gaimersheim", "Garching", "Garmisch-Partenkirchen", "Gauting", "Gemunden", "Geretsried", "Germering", "Gersthofen", "Gilching", "Goldbach", "Grafelfing", "Grafenau", "Grafing", "GroBostheim", "Grobenstadt", "Grobenzell", "Grunwald", "Gunzburg", "Gunzenhausen", "HaBfurt", "Haar", "Hammelburg", "Hasloch", "Hauzenberg", "Helmbrechts", "Henfenfeld", "Hersbruck", "Herzogenaurach", "Hilpoltstein", "Hirschaid", "Hochstadt", "Hof", "Holzkirchen", "Hosbach", "Illertissen", "Immenstadt", "Ingolstadt", "Inning", "Ismaning", "Karlsfeld", "Karlstadt", "Kaufbeuren", "Kelheim", "Kempten", "Kiefersfelden", "Kirchheim", "Kissing", "Kitzingen", "Kleinostheim", "Klingenberg", "Kolbermoor", "Konigsbrunn", "Kreuzwertheim", "Kronach", "Krumbach", "Kulmbach", "Kummersbruck", "Landau", "Landsberg", "Landshut", "Langenzenn", "Lappersdorf", "Lauf", "Lauingen", "Leinburg", "Lenggries", "Lichtenfels", "Lindach", "Lindau", "Lindenberg", "Lohr", "Mainburg", "Maisach", "Manching", "Markt Schwaben", "Marktheidenfeld", "Marktoberdorf", "Marktredwitz", "Maxhutte-Haidhof", "Meitingen", "Memmingen", "Mering", "Miesbach", "Miltenberg", "Mindelheim", "Moosburg", "Muhldorf", "Munchberg", "Munchen", "Munningen", "Murnau", "Naila", "Neubiberg", "Neuburg", "Neufahrn", "Neumarkt", "Neuried", "NeusaB", "Neustadt", "Neutraubling", "Nordlingen", "Nuremberg", "Nurnberg", "Oberasbach", "Oberhaching", "OberschleiBheim", "Oberstdorf", "Ochsenfurt", "Olching", "Osterhofen", "Ostheim", "Ottobrunn", "Parsberg", "Passau", "Pegnitz", "PeiBenberg", "Peiting", "Pentling", "Penzberg", "Pfaffenhofen", "Pfarrkirchen", "Planegg", "Plattling", "Pocking", "Poing", "Polling", "Pommelsbrunn", "Prien", "Puchheim", "Rannersdorf", "Raubling", "Regen", "Regensburg", "Regenstauf", "Rehau", "Rodental", "Roding", "Rosenheim", "Roth", "Rothenbach", "Rothenburg", "Ruhstorf", "Schnelldorf", "Schongau", "Schrobenhausen", "Schwabach", "Schwabmunchen", "Schwandorf", "Schwarzenbach", "Schweinfurt", "Selb", "Selbitz", "Senden", "Simbach", "Sonthofen", "Spalt", "Stadtbergen", "Staffelstein", "Starnberg", "Stein", "Stephanskirchen", "Straubing", "Sulzbach-Rosenberg", "Taufkirchen", "Thansau", "Tirschenreuth", "Toging", "Traunreut", "Traunstein", "Treuchtlingen", "Trostberg", "Tutzing", "Unterbergen", "Unterhaching", "UnterschleiBheim", "Valley", "Vaterstetten", "Veitshochheim", "Viechtach", "Vilgertshofen", "Vilsbiburg", "Vilshofen", "Vohringen", "Volkach", "Waldkirchen", "Waldkraiburg", "Walkertshofen", "Wasserburg", "WeiBenburg", "WeiBenhorn", "Weiden", "Weidenberg", "Weilheim", "Wendelstein", "Werneck", "Wessling", "Wolfratshausen", "Wolnzach", "Wunsiedel", "Wurzburg", "Zirndorf", "Zwiesel"]
      },
      {
        name: "Beilstein Wurtt",
        cities: []
      },
      {
        name: "Berlin",
        cities: ["Berlin", "Panketal", "Steinfeld"]
      },
      {
        name: "Brandenburg",
        cities: ["Angermunde", "Bad Freienwalde", "Bad Liebenwerda", "Barnim", "Beeskow", "Bernau", "Blankenfelde", "Brandenburg", "Brieselang", "Cottbus", "Dahlewitz", "Dahme", "Eberswalde", "Eisenhuttenstadt", "Elsterwerda", "Erkner", "Falkensee", "Finsterwalde", "Forst", "Frankfurt", "Fredersdorf-Vogelsdorf", "Furstenwalde", "Glienicke", "Gransee", "GroBraschen", "Guben", "Heidesee", "Hennigsdorf", "Herzberg", "Hohen Neuendorf", "Jacobsdorf", "Juterbog", "Kleinmachnow", "Kolkwitz", "Konigs Wusterhausen", "Kyritz", "Lauchhammer", "Lubben", "Lubbenau", "Luckenwalde", "Ludwigsfelde", "Nauen", "Neuenhagen", "Neuruppin", "Oranienburg", "Perleberg", "Petershagen-Eggersdorf", "Potsdam", "Premnitz", "Prenzlau", "Pritzwalk", "Rathenow", "Rudersdorf", "Schonefeld", "Schoneiche", "Schwedt", "Schwielowsee", "Senftenberg", "Spremberg", "Strausberg", "Teltow", "Templin", "Velten", "Werder", "Wildau", "Wittenberge", "Wittstock", "Zehdenick", "Zepernick"]
      },
      {
        name: "Bremen",
        cities: ["Bremen", "Bremerhaven"]
      },
      {
        name: "Dreisbach",
        cities: []
      },
      {
        name: "Freistaat Bayern",
        cities: []
      },
      {
        name: "Hamburg",
        cities: ["Berne", "Hamburg"]
      },
      {
        name: "Hannover",
        cities: ["Diekholzen"]
      },
      {
        name: "Heroldstatt",
        cities: ["Heroldstatt"]
      },
      {
        name: "Hessen",
        cities: ["ABlar", "Alsbach-HÃƒÂ¤hnlein", "Alsfeld", "Altenstadt", "Angelburg", "Arolsen", "Asslar", "Babenhausen", "Bad Camberg", "Bad Hersfeld", "Bad Homburg", "Bad Nauheim", "Bad Orb", "Bad Schwalbach", "Bad Soden", "Bad Soden-Salmunster", "Bad Sooden-Allendorf", "Bad Vilbel", "Bad Wildungen", "Baunatal", "Bebra", "Beerfelden", "Bensheim", "Berkatal", "Biblis", "Bickenbach", "Biebertal", "Biedenkopf", "Birkenau", "Bischofsheim", "Borken", "Braunfels", "Breidenbach", "Bruchkobel", "Budingen", "Burstadt", "Buseck", "Buttelborn", "Butzbach", "Darmstadt", "Dautphetal", "Dieburg", "Dietzenbach", "Dillenburg", "Dreieich", "Egelsbach", "Eichenzell", "Eltville", "Eppstein", "Erbach", "Erlensee", "Erzhausen", "Eschborn", "Eschenburg", "Eschwege", "Felsberg", "Fernwald", "Florsheim", "Frankenberg", "Frankfurt", "Freigericht", "Friedberg", "Friedrichsdorf", "Fritzlar", "Fulda", "Fuldabruck", "Fuldatal", "Geisenheim", "Gelnhausen", "Gernsheim", "GieBen", "Giessen", "Ginsheim-Gustavsburg", "Gladenbach", "Griesheim", "GroB-Gerau", "GroB-Umstadt", "GroB-Zimmern", "Grossenluder", "Gruenberg", "Grunberg", "Grundau", "Hadamar", "Haiger", "Hainburg", "Hanau", "Hattersheim", "Heppenheim", "Herborn", "Hessisch Lichtenau", "Heuchelheim", "Heusenstamm", "Hochheim", "Hochst", "Hofbieber", "Hofgeismar", "Hofheim", "Homberg", "Hunfeld", "Hunfelden", "Hungen", "Huttenberg", "Idstein", "Karben", "Kassel", "Kaufungen", "Kelkheim", "Kelsterbach", "Kirchhain", "Konigstein", "Korbach", "Kriftel", "Kronberg", "Kunzell", "Lahnau", "Lahntal", "Lampertheim", "Langen", "Langenselbold", "Langgons", "Laubach", "Lauterbach", "Lich", "Limburg", "Linden", "Lindenholzhausen", "Linsengericht", "Lohfelden", "Lollar", "Lorsch", "Maintal", "Marburg", "Melsungen", "Mengerskirchen", "Michelstadt", "Morfelden-Walldorf", "Morlenbach", "Mucke", "Muhlheim", "Muhltal", "Munster", "Nauheim", "Neu-Anspach", "Neu-Isenburg", "Neuhof", "Neustadt", "Nidda", "Niddatal", "Nidderau", "Niederdorfelden", "Niedernhausen", "Niestetal", "Ober-Ramstedt", "Obertshausen", "Oberursel", "Oestrich-Winkel", "Offenbach", "Petersberg", "Pfungstadt", "Pohlheim", "Raunheim", "Reichelsheim", "Reinheim", "Reiskirchen", "Riedstadt", "Rimbach", "RoBdorf", "Rodenbach", "Rodermark", "Rodgau", "Rosbach", "Rotenburg", "Rudesheim", "Runkel", "Russelsheim", "Schauenburg", "Schlangenbad", "Schlitz", "Schluchtern", "Schoneck", "Schotten", "Schwalbach", "Schwalbach am Taunus", "Schwalmstadt", "Seeheim-Jugenheim", "Seligenstadt", "Selters", "Sinntal", "Solms", "Sontra", "Spangenberg", "Stadtallendorf", "Steinau", "Steinbach", "Taunusstein", "Trebur", "Ulrichstein", "Usingen", "Vellmar", "Viernheim", "Volkmarsen", "Wachtersbach", "Wald-Michelbach", "Waldbrunn", "Waldems", "Wehrheim", "Weilburg", "Weilmunster", "Weiterstadt", "Wettenberg", "Wetter", "Wetzlar", "Wiesbaden", "Witzenhausen", "Wolfersheim", "Wolfhagen", "Zwingenberg"]
      },
      {
        name: "Kortenberg",
        cities: ["Kortenberg"]
      },
      {
        name: "Laasdorf",
        cities: ["Laasdorf"]
      },
      {
        name: "Land Baden-Wurttemberg",
        cities: []
      },
      {
        name: "Land Bayern",
        cities: []
      },
      {
        name: "Land Brandenburg",
        cities: []
      },
      {
        name: "Land Hessen",
        cities: []
      },
      {
        name: "Land Mecklenburg-Vorpommern",
        cities: []
      },
      {
        name: "Land Nordrhein-Westfalen",
        cities: []
      },
      {
        name: "Land Rheinland-Pfalz",
        cities: []
      },
      {
        name: "Land Sachsen",
        cities: []
      },
      {
        name: "Land Sachsen-Anhalt",
        cities: []
      },
      {
        name: "Land Thuringen",
        cities: []
      },
      {
        name: "Lower Saxony",
        cities: []
      },
      {
        name: "Mecklenburg-Vorpommern",
        cities: ["Anklam", "Bad Doberan", "Barth", "Bergen", "Boizenburg", "Butzow", "Demmin", "Gagelow", "Gallin", "Grabow", "Greifswald", "Grevesmuhlen", "Grimmen", "Gustrow", "Hagenow", "Konigsee", "Lubtheen", "Ludersdorf", "Ludwigslust", "Malchin", "Neubrandenburg", "Neustrelitz", "Parchim", "Pasewalk", "Ribnitz-Damgarten", "Rostock", "SaBnitz", "Schweina", "Schwerin", "Selmsdorf", "Stralsund", "Teterow", "Torgelow", "Ueckermunde", "Waren", "Wismar", "Wolgast", "Zarrentin"]
      },
      {
        name: "Mulfingen",
        cities: ["Mulfingen"]
      },
      {
        name: "Munich",
        cities: ["Grafing bei Munchen"]
      },
      {
        name: "Neubeuern",
        cities: ["Neubeuern"]
      },
      {
        name: "Niedersachsen",
        cities: ["Achim", "Adendorf", "Aerzen", "Alfeld", "Ankum", "Apen", "Aurich", "Bad Bentheim", "Bad Bevensen", "Bad Essen", "Bad Gandersheim", "Bad Harzburg", "Bad Iburg", "Bad Laer", "Bad Lauterberg", "Bad Munder", "Bad Nenndorf", "Bad Pyrmont", "Bad Sachsa", "Bad Salzdetfurth", "Bad Zwischenahn", "BarBel", "Barsinghausen", "Bassum", "Beesten", "Belm", "Bergen", "Bissendorf", "Bleckede", "Bockenem", "Bohmte", "Bovenden", "Brake", "Bramsche", "Braunschweig", "Bremervorde", "Brockel", "Brunswick", "Buchholz", "Buckeburg", "Burgdorf", "Burgwedel", "Buxtehude", "Celle", "Clausthal-Zellerfeld", "Clenze", "Cloppenburg", "Cremlingen", "Cuxhaven", "Dahlenburg", "Damme", "Dannenberg", "Dassel", "Deinste", "Delmenhorst", "Diepholz", "Dinklage", "Dorverden", "Dransfeld", "Drochtersen", "Duderstadt", "Edemissen", "Edewecht", "Einbeck", "Elsfleth", "Elze", "Emden", "Emlichheim", "Emmerthal", "Emsburen", "Eppendorf", "Fallingbostel", "Frellstedt", "Friedeburg", "Friedland", "Friesoythe", "Ganderkesee", "Garbsen", "Garrel", "Geeste", "Gehrden", "Georgsmarienhutte", "Gifhorn", "Gleichen", "Goslar", "Gottingen", "GroBefehn", "GroBenkneten", "Hagen", "Hambergen", "Hameln", "Hannover", "Hannoversch Munden", "Haren", "Harsum", "Hasbergen", "Haselunne", "Hatten", "Hauslingen", "Helmstedt", "Hemmingen", "Herzberg", "Hessisch Oldendorf", "Hildesheim", "Hilter", "Hittfeld", "Holzminden", "Hoya", "Hude", "Ihlow", "Ilsede", "Isernhagen", "Jade", "Jever", "Jork", "Kalefeld", "Kirchlinteln", "Knesebeck", "Konigslutter", "Krummhorn", "Laatzen", "Lahstedt", "Langelsheim", "Langen", "Langenhagen", "Langwedel", "Lastrup", "Leer", "Lehre", "Lehrte", "Lemforde", "Lengede", "Liebenburg", "Lilienthal", "Lingen", "Lohne", "Loningen", "Lorup", "Loxstedt", "Luchow", "Luneburg", "Melle", "Meppen", "Moormerland", "Munster", "Neu Wulmstorf", "Neustadt", "Nienburg", "Norden", "Nordenham", "Nordhorn", "Nordstemmen", "Norten-Hardenberg", "Northeim", "Obernkirchen", "Oldenburg", "Osnabruck", "Ostercappeln", "Osterholz-Scharmbeck", "Osterode", "Ostrhauderfehn", "Ottersberg", "Oyten", "Papenburg", "Pattensen", "Peine", "Quakenbruck", "Rastede", "Rehburg-Loccum", "Rhauderfehn", "Rinteln", "Ritterhude", "Ronnenberg", "Rosdorf", "Rosengarten", "Rotenburg", "Salzgitter", "Salzhemmendorf", "Sarstedt", "Saterland", "ScheeBel", "Schiffdorf", "Schneverdingen", "Schoningen", "Schortens", "Schuttorf", "Schwanewede", "Seelze", "Seesen", "Seevetal", "Sehnde", "Soltau", "Springe", "Stade", "Stadthagen", "Stadtoldendorf", "Stelle", "Stuhr", "Sudbrookmerland", "Sulingen", "Syke", "Tarmstedt", "Tostedt", "Twistringen", "Uchte", "Uelzen", "Uetze", "Uplengen", "Uslar", "Varel", "Vechelde", "Vechta", "Verden", "Vienenburg", "Visselhovede", "Walkenried", "Wallenhorst", "Walsrode", "Wangerland", "Wardenburg", "Wedemark", "Weener", "Wendeburg", "Wennigsen", "Westerstede", "Westoverledingen", "Weyhe", "Wiefelstede", "Wiesmoor", "Wildeshausen", "Wilhelmshaven", "Winsen", "Wittingen", "Wittmund", "Wolfenbuttel", "Wolfsburg", "Worpswede", "Wunstorf", "Zetel", "Zeven"]
      },
      {
        name: "Noord-Holland",
        cities: ["Middenbeemster"]
      },
      {
        name: "Nordrhein-Westfalen",
        cities: ["Aachen", "Ahaus", "Ahlen", "Aldenhoven", "Alfter", "Alpen", "Alsdorf", "Altena", "Altendorf", "Anrochte", "Arnsberg", "Ascheberg", "Attendorn", "Augustdorf", "Bad Berleburg", "Bad Driburg", "Bad Honnef", "Bad Laasphe", "Bad Lippspringe", "Bad Munstereifel", "Bad Oeynhausen", "Bad Salzuflen", "Bad Sassendorf", "Baesweiler", "Balve", "Barntrup", "Beckum", "Bedburg", "Bedburg-Hau", "Bergheim", "Bergisch Gladbach", "Bergkamen", "Bergneustadt", "Bestwig", "Beverungen", "Bielefeld", "Billerbeck", "Blomberg", "Bocholt", "Bochum", "Bocket", "Bonen", "Bonn", "Borchen", "Borgentreich", "Borgholzhausen", "Borken", "Bornheim", "Bottrop", "Brakel", "Brilon", "Bruggen", "Bruhl", "Bunde", "Burbach", "Buren", "Burscheid", "Castrop-Rauxel", "Coesfeld", "Cologne", "Datteln", "Delbruck", "Denklingen", "Detmold", "Dingden", "Dinslaken", "Dormagen", "Dorsten", "Dortmund", "Drensteinfurt", "Drolshagen", "Duisburg", "Dulmen", "Duren", "Dusseldorf", "Eitorf", "Elsdorf", "Emmerich", "Emsdetten", "Engelskirchen", "Enger", "Ennepetal", "Ennigerloh", "Ense", "Erftstadt", "Erkelenz", "Erkrath", "Erwitte", "Espelkamp", "Essen", "Euskirchen", "Extertal", "Finnentrop", "Frechen", "Freudenberg", "Frondenberg", "Gangelt", "Geilenkirchen", "Geldern", "Gelsenkirchen", "Gescher", "Geseke", "Gevelsberg", "Gladbeck", "Goch", "Grefrath", "Greven", "Grevenbroich", "Gronau", "Gummersbach", "Gutersloh", "Haan", "Hagen", "Halle", "Haltern", "Halver", "Hamm", "Hamminkeln", "Harsewinkel", "Hattingen", "Havixbeck", "Heiligenhaus", "Heinsberg", "Hemer", "Hennef", "Herdecke", "Herford", "Herne", "Herten", "Herzebrock-Clarholz", "Herzogenrath", "Hiddenhausen", "Hilchenbach", "Hilden", "Hille", "Holzwickede", "Horn-Bad Meinberg", "Horstel", "Hovelhof", "Hoxter", "Huckelhoven", "Huckeswagen", "Hullhorst", "Hunxe", "Hurth", "Ibbenburen", "Iserlohn", "Isselburg", "Issum", "Juchen", "Julich", "Kaarst", "Kalkar", "Kall", "Kalletal", "Kamen", "Kamp-Lintfort", "Kempen", "Kerken", "Kerpen", "Kevelaer", "Kierspe", "Kirchhundem", "Kirchlengern", "Kleve", "Koln", "Konigswinter", "Korschenbroich", "Krefeld", "Kreuzau", "Kreuztal", "Kurten", "Lage", "Langenfeld", "Langerwehe", "Leichlingen", "Lemgo", "Lengerich", "Lennestadt", "Leopoldshohe", "Leverkusen", "Lichtenau", "Lindlar", "Linnich", "Lippetal", "Lippstadt", "Lohmar", "Lohne", "Lotte", "Lubbecke", "Ludenscheid", "Ludinghausen", "Lugde", "Lunen", "Marienheide", "Marl", "Marsberg", "Mechernich", "Meckenheim", "Meerbusch", "Meinerzhagen", "Menden", "Meschede", "Mettingen", "Mettmann", "Minden", "Moers", "Mohnesee", "Monchengladbach", "Monheim", "Monschau", "Morsbach", "Much", "Mulheim", "Munster", "Netphen", "Nettetal", "Neuenkirchen", "Neuenrade", "Neukirchen-Vluyn", "Neunkirchen", "Neunkirchen-Seelscheid", "Neuss", "Nideggen", "Niederkassel", "Niederkruchten", "Niederzier", "Nordkirchen", "Norvenich", "Nottuln", "Numbrecht", "Oberhausen", "Ochtrup", "Odenthal", "Oelde", "Oer-Erkenschwick", "Oerlinghausen", "Olfen", "Olpe", "Olsberg", "Overath", "Paderborn", "Petershagen", "Plettenberg", "Porta Westfalica", "PreuBisch Oldendorf", "Pulheim", "Radevormwald", "Raesfeld", "Rahden", "Ratingen", "Recke", "Recklinghausen", "Rees", "Reichshof", "Reken", "Remscheid", "Rheda-Wiedenbruck", "Rhede", "Rheinbach", "Rheinberg", "Rheine", "Rietberg", "Rommerskirchen", "Rosendahl", "Rosrath", "Ruthen", "Salzkotten", "Sassenberg", "Schalksmuhle", "Schermbeck", "Schieder-Schwalenberg", "Schleiden", "SchloB Holte-Stukenbrock", "Schmallenberg", "Schwalmtal", "Schwelm", "Schwerte", "Selm", "Senden", "Sendenhorst", "Siegburg", "Siegen", "Simmerath", "Soest", "Solingen", "Sonsbeck", "Spenge", "Sprockhovel", "Stadtlohn", "Steinfurt", "Steinhagen", "Steinheim", "Stemwede", "Stolberg", "Straelen", "Sundern", "Swisttal", "Tecklenburg", "Telgte", "Tonisvorst", "Troisdorf", "Ubach-Palenberg", "Unna", "Velbert", "Velen", "Verl", "Versmold", "Viersen", "Vlotho", "Voerde", "Vreden", "Wachtberg", "Wachtendonk", "Wadersloh", "Waldbrol", "Waltrop", "Warburg", "Warendorf", "Warstein", "Wassenberg", "Weeze", "Wegberg", "Weilerswist", "Welver", "Wenden", "Werdohl", "Werl", "Wermelskirchen", "Werne", "Werther", "Wesel", "Wesseling", "Westerkappeln", "Wetter", "Wickede", "Wiehl", "Willich", "Wilnsdorf", "Windeck", "Winterberg", "Wipperfurth", "Witten", "Wulfrath", "Wunnenberg", "Wuppertal", "Wurselen", "Xanten", "Zulpich"]
      },
      {
        name: "North Rhine-Westphalia",
        cities: []
      },
      {
        name: "Osterode",
        cities: ["Herzberg am Harz"]
      },
      {
        name: "Rheinland-Pfalz",
        cities: ["Alzey", "Andernach", "Bad Durkheim", "Bad Ems", "Bad Kreuznach", "Bad Neuenahr-Ahrweiler", "Bendorf", "Betzdorf", "Bingen", "Bitburg", "Bobenheim-Roxheim", "Bohl-Iggelheim", "Boppard", "Daun", "Diez", "Eisenberg", "Essingen", "Frankenthal", "Gau-Odernheim", "Germersheim", "Grunstadt", "HaBloch", "Hahnstatten", "Hallschlag", "Herschbach", "Herxheim", "Hirschhorn", "Hohr-Grenzhausen", "Holzheim", "Idar-Oberstein", "Ingelheim", "Kaisersesch", "Kaiserslautern", "Kastellaun", "Kindsbach", "Kirchen", "Kirn", "Koblenz", "Lahnstein", "Landau", "Limburgerhof", "Luckenburg", "Ludwigshafen", "Mainz", "Mayen", "Montabaur", "Morbach", "Mulheim-Karlich", "Mundersbach", "Mutterstadt", "Nassau", "Neitersen", "Neustadt", "Neuwied", "Niederzissen", "Pirmasens", "Plaidt", "Remagen", "Schifferstadt", "Schoenenberg Kuebelberg", "Sinzig", "Speyer", "St. Goar", "Trier", "Vallendar", "Winterbach", "Wittlich", "Worms", "Worth", "Zweibrucken"]
      },
      {
        name: "Rhineland-Palatinate",
        cities: ["Adenau", "Anhausen", "Barbelroth", "Berndroth", "Bernkastel-Kues", "Burgbrohl", "Dieblich", "Dierdorf", "Dreisbach", "Elsoff", "Enkenbach-Alsenborn", "Etzbach", "Flonheim", "Fohren", "Grafschaft", "Hochspeyer", "Leiningen", "Moschheim", "Murlenbach", "Neuhofen", "Nievern", "Norken", "Oberlahr", "Otterstadt", "Rennerod", "Rheinbreitbach", "Rieschweiler-Muhlbach", "Saarburg", "Stahlhofen", "Steinebach", "Weinsheim", "Winnweiler", "Wissen"]
      },
      {
        name: "Saarland",
        cities: ["Beckingen", "Bexbach", "Blieskastel", "Dillingen", "Duppenweiler", "Eppelborn", "Friedrichsthal", "GroBrosseln", "Heusweiler", "Homburg", "Illingen", "Kirkel", "Kleinblittersdorf", "Lebach", "Losheim", "Mandelbachtal", "Marpingen", "Merchweiler", "Merzig", "Mettlach", "Nalbach", "Neunkirchen", "Nohfelden", "Nonnweiler", "Oberthal", "Ottweiler", "Puttlingen", "Quierschied", "Rehlingen-Siersburg", "Riegelsberg", "Saarbrucken", "Saarlouis", "Saarwellingen", "Sankt Ingbert", "Sankt Wendel", "Schiffweiler", "Schmelz", "Schwalbach", "Spiesen-Elversberg", "Sulzbach", "Tholey", "Uberherrn", "Volklingen", "Wadern", "Wadgassen", "Wallerfangen", "Weiskirchen"]
      },
      {
        name: "Sachsen",
        cities: ["Annaberg-Buchholz", "Aue", "Auerbach", "Bautzen", "Bischofswerda", "Borna", "Brand-Erbisdorf", "Burgstadt", "Chemnitz", "Coswig", "Crimmitschau", "Delitzsch", "Dobeln", "Dresden", "Ebersbach", "Eilenburg", "Falkenstein", "Floha", "Frankenberg", "Freiberg", "Freital", "Friedewald", "Glauchau", "Gorlitz", "Grimma", "GroBenhain", "Groditz", "Hainichen", "Heidenau", "Hirschstein", "Hohenstein-Ernstthal", "Hoyerswerda", "Kamenz", "Klingenthal", "Leipzig", "Lichtenstein", "Limbach-Oberfrohna", "LoBnitz", "Lobau", "Lugau", "Marienberg", "Markkleeberg", "Meerane", "MeiBen", "Mittweida", "Muldenhammer", "Neustadt", "Niesky", "Oelsnitz", "Olbernhau", "Olbersdorf", "Oschatz", "Pirna", "Plauen", "Radeberg", "Radebeul", "Reichenbach", "Riesa", "Rietschen", "Schkeuditz", "Schneeberg", "Schwarzenberg", "Sebnitz", "Stollberg", "Taubenheim", "Taucha", "Thalheim", "Torgau", "Waldheim", "WeiBwasser", "Werdau", "Wilkau-HaBlau", "Wurzen", "Zittau", "Zschopau", "Zwickau", "Zwonitz"]
      },
      {
        name: "Sachsen-Anhalt",
        cities: ["Aken", "Aschersleben", "Bad Durrenberg", "Bebitz", "Bernburg", "Bitterfeld", "Blankenburg", "Braunsbedra", "Burg", "Calbe", "Coswig", "Dessau", "Eisleben", "Gardelegen", "Genthin", "Gommern", "Grafenhainichen", "Halberstadt", "Haldensleben", "Halle", "Hettstedt", "Heyrothsberge", "Hotensleben", "Kothen", "Leuna", "Magdeburg", "Merseburg", "Naumburg", "Oschersleben", "Osterburg", "Osterwieck", "Quedlinburg", "Querfurt", "Raguhn", "RoBlau", "Salzwedel", "Sangerhausen", "Schonebeck", "StaBfurt", "Stendal", "Tangermunde", "Thale", "WeiBenfels", "Wittenberg", "Wolfen", "Wolmirstedt", "Zeitz", "Zerbst"]
      },
      {
        name: "Saxony",
        cities: ["Bad Lausick", "Bernsdorf", "Borde-Hakel", "Gelenau", "Groberkmannsdorf", "Hartha", "Kreischa", "Malschwitz", "Naunhof", "Pausa", "Seiffen", "Stutzengrun"]
      },
      {
        name: "Schleswig-Holstein",
        cities: ["Ahrensbok", "Ahrensburg", "Altenholz", "Alveslohe", "Ammersbek", "Bad Bramstedt", "Bad Oldesloe", "Bad Schwartau", "Bad Segeberg", "Bargteheide", "Barmstedt", "Barsbuttel", "Bredstedt", "Brunsbuttel", "Budelsdorf", "Eckernforde", "Eddelak", "Elmshorn", "Eutin", "Flensburg", "Friedrichstadt", "Geesthacht", "Glinde", "Gluckstadt", "Grob Pampau", "Halstenbek", "Hamfelde", "Harrislee", "Hartenholm", "Heide", "Heiligenhafen", "Henstedt-Ulzburg", "Honenwestedt", "Husum", "Itzehoe", "Kaltenkirchen", "Kappeln", "Kiel", "Kronshagen", "Lauenburg", "Lensahn", "Lubeck", "Malente", "Mielkendorf", "Molfsee", "Molln", "Neuenbrook", "Neumunster", "Neustadt", "Norderstedt", "Oldenburg", "Oststeinbek", "Pinneberg", "Plon", "Preetz", "Quickborn", "Ratekau", "Ratzeburg", "Reinbek", "Reinfeld", "Rellingen", "Rendsburg", "Rethwisch", "Satrup", "Scharbeutz", "Schenefeld", "Schleswig", "Schmalfeld", "Schoenkirchen", "Schwarzenbek", "Seefeld", "Sievershutten", "Stockelsdorf", "Tangstedt", "Timmendorfer Strand", "Tornesch", "Travemunde", "Uetersen", "Wahlstedt", "Wedel", "Wentorf", "Westerland", "Westerronfeld", "Wohltorf", "Wotersen"]
      },
      {
        name: "Thuringia",
        cities: ["Altenburg", "Apolda", "Arnstadt", "Bad Frankenhausen", "Bad Langensalza", "Bad Salzungen", "Cursdorf", "Dornburg", "Eisenach", "Eisenberg", "Erfurt", "Gera", "Geschwenda", "Gotha", "Greiz", "Heiligenstadt", "Hermsdorf", "Hildburghausen", "Ilmenau", "Immelborn", "Jena", "Leinefelde", "Leutenberg", "Meiningen", "Meuselwitz", "Muhlhausen", "Neustadt", "Nordhausen", "PoBneck", "Rosenthal", "Rositz", "Rudolstadt", "Ruhla", "Saalfeld", "Schmalkalden", "Schmolln", "Sommerda", "Sondershausen", "Sonneberg", "Suhl", "Triptis", "Uhlstadt", "Waltershausen", "Weida", "Weimar", "Wernigerode", "Wormstedt", "Zella-Mehlis", "Zeulenroda"]
      },
      {
        name: "Webling",
        cities: ["Webling"]
      },
      {
        name: "Weinstrabe",
        cities: ["Neustadt"]
      },
      {
        name: "schlobborn",
        cities: ["Schlobborn"]
      }
    ],
    isoAlpha2: "DE",
    isoAlpha3: "DEU",
    isoNumeric: 276
  },
  {
    name: "Ghana",
    flag: "🇬🇭",
    currency: {
      code: "GHC",
      name: "Cedi",
      symbol: "¢"
    },
    states: [
      {
        name: "Ashanti",
        cities: ["Agogo", "Bekwai", "Konongo", "Kumasi", "Mampong", "Mankranso", "Obuasi", "Ofinso", "Tafo"]
      },
      {
        name: "Brong-Ahafo",
        cities: ["Bechem", "Berekum", "Duayaw Nkwanta", "Kintampo", "Sunyani", "Techiman", "Wenchi"]
      },
      {
        name: "Central",
        cities: ["Apam", "Cape Coast", "Dunkwa", "Elmina", "Foso", "Komenda", "Mauri", "Mumford", "Nyakrom", "Okitsiu", "Saltpond", "Swedru", "Winneba"]
      },
      {
        name: "Eastern",
        cities: ["Aburi", "Ada", "Akim Swedru", "Akropong", "Asamankese", "Begoro", "Kade", "Kibi", "Koforidua", "Mpraeso", "Nkawkaw", "Nsawam", "Oda", "Somanya", "Suhum"]
      },
      {
        name: "Greater Accra",
        cities: ["Accra", "Ada Foah", "Sege", "Adenta", "Ashaiman", "Sowutuom", "Abokobi", "Weija", "Amasaman", "Kapone", "La", "Madina", "Nungua", "Prampram", "Dodowa", "Tema"]
      },
      {
        name: "Northern",
        cities: ["Kpandae", "Salaga", "Savelugu", "Tamale", "Yendi"]
      },
      {
        name: "Upper East",
        cities: []
      },
      {
        name: "Upper West",
        cities: []
      },
      {
        name: "Volta",
        cities: ["Aflao", "Anloga", "Ho", "Hohoe", "Keta", "Kete-Krachi", "Kpandu"]
      },
      {
        name: "Western",
        cities: ["Aboso", "Anomabu", "Axim", "Bibiani", "Prestea", "Sekondi", "Shama", "Takoradi", "Tarkwa"]
      }
    ],
    isoAlpha2: "GH",
    isoAlpha3: "GHA",
    isoNumeric: 288
  },
  {
    name: "Gibraltar",
    flag: "🇬🇮",
    currency: {
      code: "GIP",
      name: "Pound",
      symbol: "£"
    },
    states: [
      {
        name: "Gibraltar",
        cities: ["Gibraltar"]
      }
    ],
    isoAlpha2: "GI",
    isoAlpha3: "GIB",
    isoNumeric: 292
  },
  {
    name: "Greece",
    flag: "🇬🇷",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Acharnes",
        cities: ["Elassonos"]
      },
      {
        name: "Ahaia",
        cities: ["Aiyion", "Patra"]
      },
      {
        name: "Aitolia kai Akarnania",
        cities: []
      },
      {
        name: "Argolis",
        cities: ["Argos", "Navplion"]
      },
      {
        name: "Arkadia",
        cities: ["Tripoli"]
      },
      {
        name: "Arta",
        cities: ["Arta"]
      },
      {
        name: "Attica",
        cities: ["Acharnes", "Agios Ioannis Rentis", "Drapetsona", "Koropi", "Lavrion", "Mandra", "Spata"]
      },
      {
        name: "Attiki",
        cities: ["Aharna", "Aiyaleo", "Alimos", "Amarousion", "Ano Liosia", "Aryiroupoli", "Aspropirgos", "Athina", "Athinai", "Ayia Barbara", "Ayia Paraskevi", "Ayios Anaryiros", "Ayios Dimitrios", "Dafne", "Elevsis", "Ellenikon", "Galatsion", "Glifada", "Haidarion", "Halandrion", "Holargos", "Ilioupoli", "Iraklion", "Kaisariani", "Kallithea", "Kamateron", "Keratea", "Keratsinion", "Kifisia", "Koridallos", "Kropion", "Markopoulos Mesogaia", "Maroussi", "Megara", "Melission", "Metamorfosios", "Moshatos", "Nea Filedelfia", "Nea Ionia", "Nea Liosia", "Nea Smirni", "Nikaia", "Palaion Faliron", "Perama", "Peristerion", "Petroupoli", "Pevka", "Piraeus", "Salamis", "Tavros", "Viron", "Voula", "Vrilission", "Zografos"]
      },
      {
        name: "Ayion Oros",
        cities: []
      },
      {
        name: "Crete",
        cities: ["Heraklion"]
      },
      {
        name: "Dodekanisos",
        cities: ["Arhangelos", "Ialysos", "Kos", "Rodos"]
      },
      {
        name: "Drama",
        cities: ["Drama"]
      },
      {
        name: "Evia",
        cities: ["Chalkis"]
      },
      {
        name: "Evritania",
        cities: ["Karpenisi"]
      },
      {
        name: "Evros",
        cities: ["Alexandroupoli", "Orestias"]
      },
      {
        name: "Evvoia",
        cities: ["Halkida"]
      },
      {
        name: "Florina",
        cities: ["Florina"]
      },
      {
        name: "Fokis",
        cities: ["Amfissa"]
      },
      {
        name: "Fthiotis",
        cities: ["Lamia"]
      },
      {
        name: "Grevena",
        cities: ["Grevena"]
      },
      {
        name: "Halandri",
        cities: ["Halandri"]
      },
      {
        name: "Halkidiki",
        cities: ["Lakkoma", "N. Kallikrateia", "Poliyiros"]
      },
      {
        name: "Hania",
        cities: ["Hania"]
      },
      {
        name: "Heraklion",
        cities: ["Crete"]
      },
      {
        name: "Hios",
        cities: ["Hios"]
      },
      {
        name: "Ilia",
        cities: ["Pirgos"]
      },
      {
        name: "Imathia",
        cities: ["Veroia"]
      },
      {
        name: "Ioannina",
        cities: ["Ioannina"]
      },
      {
        name: "Iraklion",
        cities: []
      },
      {
        name: "Karditsa",
        cities: ["Karditsa"]
      },
      {
        name: "Kastoria",
        cities: ["Kastoria"]
      },
      {
        name: "Kavala",
        cities: ["Kavala"]
      },
      {
        name: "Kefallinia",
        cities: ["Agioi Theodoroi", "Argostolion"]
      },
      {
        name: "Kerkira",
        cities: ["Kerkira"]
      },
      {
        name: "Kiklades",
        cities: ["Ermoupoli", "Fira", "Mikonos"]
      },
      {
        name: "Kilkis",
        cities: ["Kilkis"]
      },
      {
        name: "Korinthia",
        cities: ["Korinthos"]
      },
      {
        name: "Kozani",
        cities: ["Kozani", "Ptolemais"]
      },
      {
        name: "Lakonia",
        cities: ["Sparti"]
      },
      {
        name: "Larisa",
        cities: ["Larisa", "Larissa"]
      },
      {
        name: "Lasithi",
        cities: ["Ayios Nikolaos", "Ierapetra", "Sitia"]
      },
      {
        name: "Lesvos",
        cities: ["Mitilini"]
      },
      {
        name: "Levkas",
        cities: ["Levkas"]
      },
      {
        name: "Magnisia",
        cities: ["Volos"]
      },
      {
        name: "Messinia",
        cities: ["Kalamata"]
      },
      {
        name: "Nomos Attikis",
        cities: []
      },
      {
        name: "Nomos Zakynthou",
        cities: []
      },
      {
        name: "Pella",
        cities: ["Edessa", "Yiannitsa"]
      },
      {
        name: "Pieria",
        cities: ["Katerini"]
      },
      {
        name: "Piraios",
        cities: ["Acharne", "Pallini"]
      },
      {
        name: "Preveza",
        cities: ["Preveza"]
      },
      {
        name: "Rethimni",
        cities: ["Rethimnon"]
      },
      {
        name: "Rodopi",
        cities: ["Komotini"]
      },
      {
        name: "Samos",
        cities: ["Samos"]
      },
      {
        name: "Serrai",
        cities: ["Serrai"]
      },
      {
        name: "Thesprotia",
        cities: ["Igoumenitsa"]
      },
      {
        name: "Thessaloniki",
        cities: ["Ampelokipa", "Kalamaria", "Neapoli", "Oristiada", "Thessaloniki"]
      },
      {
        name: "Trikala",
        cities: ["Trikala"]
      },
      {
        name: "Voiotia",
        cities: ["Levadia", "Thivai"]
      },
      {
        name: "West Greece",
        cities: []
      },
      {
        name: "Xanthi",
        cities: ["Xanthi"]
      },
      {
        name: "Zakinthos",
        cities: ["Zakinthos"]
      }
    ],
    isoAlpha2: "GR",
    isoAlpha3: "GRC",
    isoNumeric: 300
  },
  {
    name: "Greenland",
    flag: "🇬🇱",
    currency: {
      code: "DKK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Aasiaat",
        cities: ["Aasiaat", "Akunnaaq", "Kitsissuarsuit"]
      },
      {
        name: "Ammassalik",
        cities: ["Ikkatteq", "Isortoq", "Kulusuk", "Kuumiut", "Qernertuarssuit", "Sermiligaaq", "Tasiilaq", "Tiniteqilaaq"]
      },
      {
        name: "Illoqqortoormiut",
        cities: ["Illoqqortoormiut", "Itterajivit", "Uunarteq"]
      },
      {
        name: "Ilulissat",
        cities: ["Ilimanaq", "Ilulissat", "Oqaatsut", "Qeqertaq", "Saqqaq"]
      },
      {
        name: "Ivittuut",
        cities: ["Ivittuut", "Kangilinnguit"]
      },
      {
        name: "Kangaatsiaq",
        cities: ["Attu", "Iginniarfik", "Ikerasaarsuk", "Kangaatsiaq", "Niaqornaarsuk"]
      },
      {
        name: "Maniitsoq",
        cities: ["Atammik", "Kangaamiut", "Maniitsoq", "Napasoq"]
      },
      {
        name: "Nanortalik",
        cities: ["Aappilattoq", "Akuliaruseq", "Alluitsoq", "Alluitsup Paa", "Ammassivik", "Ikerasassuaq", "Nanortalik", "Narsarmijit", "Nuugaarsuk", "Qallimiut", "Qortortorsuaq", "Tasiusaq"]
      },
      {
        name: "Narsaq",
        cities: ["Amannguit", "Atarnaatsoq", "Eqaluit Ilua", "Igaliku", "Igaliku Kujalleq", "Inneruulalik", "Issormiut", "Iterlak", "Kangerlua", "Narsaq", "Narsarsuaq", "Nunataaq", "Qassiarsuk", "Qinngua", "Qinngua Kangilleq", "Qolortup Itinnera", "Sillisit", "Tasiusaq", "Timerliit", "Uummannartuuaraq"]
      },
      {
        name: "Nuuk",
        cities: ["Kangerluarsoruseq", "Kapisillit", "Neriunaq", "Nuuk", "Qeqertarsuatsiaat", "Qooqqut", "Qoornoq"]
      },
      {
        name: "Paamiut",
        cities: ["Arsuk", "Paamiut"]
      },
      {
        name: "Qaanaaq",
        cities: ["Moriusaq", "Qaanaaq", "Qeqertarsuaq", "Qeqertat", "Savissivik", "Siorapaluk"]
      },
      {
        name: "Qaqortoq",
        cities: ["Eqalugaarsuit", "Illorsuit", "Kangerluarsorujuk", "Kangerluarsorujuup Qinngua", "Qanisartuut", "Qaqortokolook", "Qaqortoq", "Qassimiut", "Saarloq", "Saqqamiut", "Tasiluk", "Upernaviarsuk"]
      },
      {
        name: "Qasigiannguit",
        cities: ["Ikamiut", "Qasigiannguit"]
      },
      {
        name: "Qeqertarsuaq",
        cities: ["Kangerluk", "Qeqertarsuaq"]
      },
      {
        name: "Sisimiut",
        cities: ["Itilleq", "Kangerlussuaq", "Sarfannguit", "Sisimiut"]
      },
      {
        name: "Udenfor kommunal inddeling",
        cities: []
      },
      {
        name: "Upernavik",
        cities: ["Aappilattoq", "Ikerakuuk", "Innarsuit", "Kangersuatsiaq", "Kullorsuaq", "Naajaat", "Nutaarmiut", "Nuusuaq", "Tasiusaq", "Upernavik"]
      },
      {
        name: "Uummannaq",
        cities: ["Ikerasak", "Illorsuit", "Niaqornat", "Nuugaatsiaq", "Qaarsut", "Saattut", "Ukkusissat", "Uummannaq"]
      }
    ],
    isoAlpha2: "GL",
    isoAlpha3: "GRL",
    isoNumeric: 304
  },
  {
    name: "Grenada",
    flag: "🇬🇩",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Carriacou-Petite Martinique",
        cities: []
      },
      {
        name: "Saint Andrew",
        cities: []
      },
      {
        name: "Saint Davids",
        cities: []
      },
      {
        name: "Saint George''s",
        cities: []
      },
      {
        name: "Saint John",
        cities: []
      },
      {
        name: "Saint Mark",
        cities: []
      },
      {
        name: "Saint Patrick",
        cities: []
      }
    ],
    isoAlpha2: "GD",
    isoAlpha3: "GRD",
    isoNumeric: 308
  },
  {
    name: "Guadeloupe",
    flag: "🇬🇵",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Basse-Terre",
        cities: ["Baie-Mahault", "Baillif", "Basse-Terre", "Bouillante", "Capesterre-Belle-Eau", "Gourbeyre", "Lamentin", "Petit-Bourg", "Pointe-Noire", "Saint-Claude", "Sainte-Rose", "Trois-Rivieres", "Vieux-Habitants"]
      },
      {
        name: "Grande-Terre",
        cities: ["Anse-Bertrand", "Le Gosier", "Le Moule", "Les Abymes", "Morne-a-l''Eau", "Petit-Canal", "Point-a-Pitre", "Port-Louis", "Saint-Francois", "Sainte-Anne"]
      },
      {
        name: "Iles des Saintes",
        cities: []
      },
      {
        name: "La Desirade",
        cities: []
      },
      {
        name: "Marie-Galante",
        cities: ["Grand-Bourg"]
      },
      {
        name: "Saint Barthelemy",
        cities: []
      },
      {
        name: "Saint Martin",
        cities: []
      }
    ],
    isoAlpha2: "GP",
    isoAlpha3: "GLP",
    isoNumeric: 312
  },
  {
    name: "Guam",
    flag: "🇬🇺",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Agana Heights",
        cities: []
      },
      {
        name: "Agat",
        cities: ["Agat"]
      },
      {
        name: "Barrigada",
        cities: ["Barrigada", "Barrigada Heights"]
      },
      {
        name: "Chalan-Pago-Ordot",
        cities: ["Chalan Pago", "Ordot"]
      },
      {
        name: "Dededo",
        cities: ["Astumbo", "Dededo", "Finegayan Station"]
      },
      {
        name: "Hagatna",
        cities: ["Agana", "Agana Station"]
      },
      {
        name: "Inarajan",
        cities: ["Inarajan"]
      },
      {
        name: "Mangilao",
        cities: ["Mangilao"]
      },
      {
        name: "Merizo",
        cities: ["Merizo"]
      },
      {
        name: "Mongmong-Toto-Maite",
        cities: ["Mongmong", "Toto"]
      },
      {
        name: "Santa Rita",
        cities: []
      },
      {
        name: "Sinajana",
        cities: ["Sinajana"]
      },
      {
        name: "Talofofo",
        cities: ["Talofofo"]
      },
      {
        name: "Tamuning",
        cities: ["Tamuning"]
      },
      {
        name: "Yigo",
        cities: ["Anderson Air Force Base", "Yigo"]
      },
      {
        name: "Yona",
        cities: ["Yona"]
      }
    ],
    isoAlpha2: "GU",
    isoAlpha3: "GUM",
    isoNumeric: 316
  },
  {
    name: "Guatemala",
    flag: "🇬🇹",
    currency: {
      code: "GTQ",
      name: "Quetzal",
      symbol: "Q"
    },
    states: [
      {
        name: "Alta Verapaz",
        cities: []
      },
      {
        name: "Baja Verapaz",
        cities: []
      },
      {
        name: "Chimaltenango",
        cities: ["Chimaltenango", "Comalapa", "Itzapa", "Patzun"]
      },
      {
        name: "Chiquimula",
        cities: ["Chiquimula", "Esquipulas"]
      },
      {
        name: "El Progreso",
        cities: []
      },
      {
        name: "Escuintla",
        cities: ["Cotzumalguapa", "Escuintla", "Palin", "San Jose", "Tiquisate"]
      },
      {
        name: "Guatemala",
        cities: ["Amatitlan", "Chinautla", "Guatemala", "Mixco", "Petapa", "Villa Nueva"]
      },
      {
        name: "Huehuetenango",
        cities: ["Huehuetenango"]
      },
      {
        name: "Izabal",
        cities: ["Puerto Barrios"]
      },
      {
        name: "Jalapa",
        cities: ["Jalapa"]
      },
      {
        name: "Jutiapa",
        cities: ["Asuncion Mita", "Jutiapa"]
      },
      {
        name: "Peten",
        cities: ["Flores", "San Benito"]
      },
      {
        name: "Quezaltenango",
        cities: ["Quezaltenango"]
      },
      {
        name: "Quiche",
        cities: ["Quiche"]
      },
      {
        name: "Retalhuleu",
        cities: ["Retalhuleu"]
      },
      {
        name: "Sacatepequez",
        cities: ["Antigua", "Ciudad Vieja", "Jocotenango", "Santa Maria de Jesus", "Sumpango"]
      },
      {
        name: "San Marcos",
        cities: []
      },
      {
        name: "Santa Rosa",
        cities: []
      },
      {
        name: "Solola",
        cities: ["Atitlan", "Solola"]
      },
      {
        name: "Suchitepequez",
        cities: ["Mazatenango"]
      },
      {
        name: "Totonicapan",
        cities: ["Totonicapan"]
      },
      {
        name: "Zacapa",
        cities: ["Zacapa"]
      }
    ],
    isoAlpha2: "GT",
    isoAlpha3: "GTM",
    isoNumeric: 320
  },
  {
    name: "Guinea",
    flag: "🇬🇳",
    currency: {
      code: "GNF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Beyla",
        cities: ["Beyla"]
      },
      {
        name: "Boffa",
        cities: ["Boffa"]
      },
      {
        name: "Boke",
        cities: ["Boke"]
      },
      {
        name: "Conakry",
        cities: ["Conakry"]
      },
      {
        name: "Coyah",
        cities: ["Coyah"]
      },
      {
        name: "Dabola",
        cities: ["Dabola"]
      },
      {
        name: "Dalaba",
        cities: ["Dalaba"]
      },
      {
        name: "Dinguiraye",
        cities: ["Dinguiraye"]
      },
      {
        name: "Faranah",
        cities: ["Faranah"]
      },
      {
        name: "Forecariah",
        cities: ["Forecariah"]
      },
      {
        name: "Fria",
        cities: ["Fria"]
      },
      {
        name: "Gaoual",
        cities: ["Gaoual"]
      },
      {
        name: "Gueckedou",
        cities: ["Guekedou"]
      },
      {
        name: "Kankan",
        cities: ["Kankan"]
      },
      {
        name: "Kerouane",
        cities: ["Kerouane"]
      },
      {
        name: "Kindia",
        cities: ["Kindia"]
      },
      {
        name: "Kissidougou",
        cities: ["Kissidougou"]
      },
      {
        name: "Koubia",
        cities: ["Koubia"]
      },
      {
        name: "Koundara",
        cities: ["Koundara"]
      },
      {
        name: "Kouroussa",
        cities: ["Kouroussa"]
      },
      {
        name: "Labe",
        cities: ["Labe"]
      },
      {
        name: "Lola",
        cities: ["Lola"]
      },
      {
        name: "Macenta",
        cities: ["Macenta"]
      },
      {
        name: "Mali",
        cities: ["Mali"]
      },
      {
        name: "Mamou",
        cities: ["Mamou"]
      },
      {
        name: "Mandiana",
        cities: ["Mandiana"]
      },
      {
        name: "Nzerekore",
        cities: ["Nzerekore"]
      },
      {
        name: "Pita",
        cities: ["Pita"]
      },
      {
        name: "Siguiri",
        cities: ["Siguiri"]
      },
      {
        name: "Telimele",
        cities: ["Telimele"]
      },
      {
        name: "Tougue",
        cities: ["Tougue"]
      },
      {
        name: "Yomou",
        cities: ["Yomou"]
      }
    ],
    isoAlpha2: "GN",
    isoAlpha3: "GIN",
    isoNumeric: 324
  },
  {
    name: "Guinea-Bissau",
    flag: "🇬🇼",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Bafata",
        cities: ["Bafata"]
      },
      {
        name: "Bissau",
        cities: ["Bissau"]
      },
      {
        name: "Bolama",
        cities: ["Bolama", "Bubaque"]
      },
      {
        name: "Cacheu",
        cities: ["Cacheu", "Canchungo"]
      },
      {
        name: "Gabu",
        cities: ["Gabu"]
      },
      {
        name: "Oio",
        cities: ["Bissora", "Farim", "Mansoa"]
      },
      {
        name: "Quinara",
        cities: ["Buba", "Fulacunda", "Quebo"]
      },
      {
        name: "Tombali",
        cities: ["Catio"]
      }
    ],
    isoAlpha2: "GW",
    isoAlpha3: "GNB",
    isoNumeric: 624
  },
  {
    name: "Guyana",
    flag: "🇬🇾",
    currency: {
      code: "GYD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Barima-Waini",
        cities: ["Mabaruma", "Morawhanna"]
      },
      {
        name: "Cuyuni-Mazaruni",
        cities: ["Bartica", "Issano", "Kamarang"]
      },
      {
        name: "Demerara-Mahaica",
        cities: ["Georgetown", "Mahaica", "Paradise", "Queenstown"]
      },
      {
        name: "East Berbice-Corentyne",
        cities: []
      },
      {
        name: "Essequibo Islands-West Demerar",
        cities: []
      },
      {
        name: "Mahaica-Berbice",
        cities: ["Fort Wellington", "Mahaicony", "Rosignol"]
      },
      {
        name: "Pomeroon-Supenaam",
        cities: ["Anna Regina", "Charity", "Suddie"]
      },
      {
        name: "Potaro-Siparuni",
        cities: ["Mahdia", "Tumatumari"]
      },
      {
        name: "Upper Demerara-Berbice",
        cities: []
      },
      {
        name: "Upper Takutu-Upper Essequibo",
        cities: []
      }
    ],
    isoAlpha2: "GY",
    isoAlpha3: "GUY",
    isoNumeric: 328
  },
  {
    name: "Haiti",
    flag: "🇭🇹",
    currency: {
      code: "HTG",
      name: "Gourde",
      symbol: "G"
    },
    states: [
      {
        name: "Artibonite",
        cities: ["Desdunes", "Dessalines", "Gonaives", "Gros-Morne", "L''Artibonite", "Saint-Marc", "Saint-Michel-de-l''Atalaye", "Saint-Raphael", "Verrettes"]
      },
      {
        name: "Centre",
        cities: ["Hinche", "Mirebalais"]
      },
      {
        name: "Grand''Anse",
        cities: ["Anse-d''Hainault", "Dame Marie", "Jeremie", "Miragoane"]
      },
      {
        name: "Nord",
        cities: ["Cap-Haitien", "Croix-des-Bouquets", "Grande Riviere du Nord", "Limbe", "Pignon"]
      },
      {
        name: "Nord-Est",
        cities: ["Derac", "Fort-Liberte", "Ouanaminthe", "Trou-du-Nord"]
      },
      {
        name: "Nord-Ouest",
        cities: ["Port-de-Paix", "Saint-Louis-du-Nord"]
      },
      {
        name: "Ouest",
        cities: ["Anse-a-Galets", "Carrefour", "Delmas", "Kenscoff", "Lascahobas", "Leogane", "Petionville", "Petit Goave", "Port-au-Prince"]
      },
      {
        name: "Sud",
        cities: ["Aquin", "Les Cayes"]
      },
      {
        name: "Sud-Est",
        cities: ["Jacmel"]
      }
    ],
    isoAlpha2: "HT",
    isoAlpha3: "HTI",
    isoNumeric: 332
  },
  {
    name: "Heard Island and McDonald Islands",
    flag: "🇭🇲",
    currency: {
      code: "AUD"
    },
    states: [
      {
        name: "Heard and McDonald Islands",
        cities: []
      }
    ]
  },
  {
    name: "Honduras",
    flag: "🇭🇳",
    currency: {
      code: "HNL",
      name: "Lempira",
      symbol: "L"
    },
    states: [
      {
        name: "Atlantida",
        cities: ["La Ceiba", "Olanchito", "Tela"]
      },
      {
        name: "Choluteca",
        cities: ["Choluteca", "El Triunfo", "Pespire"]
      },
      {
        name: "Colon",
        cities: ["Sonaguera", "Tocoa", "Trujillo"]
      },
      {
        name: "Comayagua",
        cities: ["Comayagua", "Siguatepeque"]
      },
      {
        name: "Copan",
        cities: ["Copan", "Corquin", "Dulce Nombre", "El Paraiso", "San Antonio", "San Nicolas", "Santa Rosa de Copan"]
      },
      {
        name: "Cortes",
        cities: ["Choloma", "La Lima", "Omoa", "Puerto Cortes", "San Pedro Sula"]
      },
      {
        name: "Distrito Central",
        cities: []
      },
      {
        name: "El Paraiso",
        cities: []
      },
      {
        name: "Francisco Morazan",
        cities: []
      },
      {
        name: "Gracias a Dios",
        cities: []
      },
      {
        name: "Intibuca",
        cities: ["Intibuca", "La Esperanza", "Utila"]
      },
      {
        name: "Islas de la Bahia",
        cities: []
      },
      {
        name: "La Paz",
        cities: []
      },
      {
        name: "Lempira",
        cities: ["Gracias"]
      },
      {
        name: "Ocotepeque",
        cities: ["Ocotepeque", "San Marcos", "Sinuapa"]
      },
      {
        name: "Olancho",
        cities: ["Catacamas", "Juticalpa"]
      },
      {
        name: "Santa Barbara",
        cities: []
      },
      {
        name: "Valle",
        cities: ["Amapala", "Langue", "Nacaome", "San Lorenzo"]
      },
      {
        name: "Yoro",
        cities: ["El Progreso", "Morazan", "Santa Rita", "Yoro"]
      }
    ],
    isoAlpha2: "HN",
    isoAlpha3: "HND",
    isoNumeric: 340
  },
  {
    name: "Hong Kong",
    flag: "🇭🇰",
    currency: {
      code: "HKD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Hong Kong",
        cities: []
      }
    ],
    isoAlpha2: "HK",
    isoAlpha3: "HKG",
    isoNumeric: 344
  },
  {
    name: "Hungary",
    flag: "🇭🇺",
    currency: {
      code: "HUF",
      name: "Forint",
      symbol: "Ft"
    },
    states: [
      {
        name: "Bacs-Kiskun",
        cities: ["Akaszto", "Bacsalmas", "Bacsbokod", "Baja", "Bugac", "Davod", "Dunapataj", "Dunavecse", "Fulopszallas", "Hajos", "Harta", "Izsak", "Jakabszallas", "Janoshalma", "Kalocsa", "Kecel", "Kecskemet", "Kiskoros", "Kiskunfelegyhaza", "Kiskunhalas", "Kiskunmajsa", "Kunfeherto", "Kunszentmiklos", "Lajosmizse", "Lakitelek", "Madaras", "Melykut", "Nagybaracska", "Orgovany", "Palmonostora", "Solt", "Soltvadkert", "Sukosd", "Szabadszallas", "Szalkszentmarton", "Tass", "Tiszakecske", "Tompa"]
      },
      {
        name: "Baranya",
        cities: ["Beremend", "Boly", "Dunaszekcso", "Harkany", "Hosszuheteny", "Komlo", "Magocs", "Mohacs", "Pecs", "Pecsvarad", "Sasd", "Sellye", "Siklos", "Szentlorinc", "Szigetvar", "Vajszlo", "Villany"]
      },
      {
        name: "Bekes",
        cities: ["Battonya", "Bekes", "Bekescsaba", "Bekessamson", "Bekesszentandras", "Csorvas", "Devavanya", "Doboz", "Elek", "Endrod", "Fuzesgyarmat", "Gyula", "Ketegyhaza", "Kondoros", "Korosladany", "Kunagota", "Lokoshaza", "Mezobereny", "Mezohegyes", "Mezokovacshaza", "Nagyszenas", "Oroshaza", "Sarkad", "Szabadkigyos", "Szarvas", "Szeghalom", "Totkomlos", "Veszto"]
      },
      {
        name: "Borsod-Abauj-Zemplen",
        cities: ["Abaujszanto", "Arlo", "Bogacs", "Cigand", "Edeleny", "Emod", "Encs", "Gonc", "Karcsa", "Kazincbarcika", "Mad", "Megyaszo", "Mezokeresztes", "Mezokovesd", "Miskolc", "Monok", "Nyekladhaza", "Olaszliszka", "Onod", "Ozd", "Putnok", "Rudabanya", "Sajokaza", "Sajolad", "Sajoszentpeter", "Saly", "Sarospatak", "Satoraljaujhely", "Szendro", "Szentistvan", "Szerencs", "Szihalom", "Szikszo", "Taktaharkany", "Taktaszada", "Tallya", "Tarcal", "Tiszaluc", "Tiszaujvaros", "Tokaj", "Tolcsva"]
      },
      {
        name: "Budapest",
        cities: ["Budapest"]
      },
      {
        name: "Csongrad",
        cities: ["Csongrad", "Fabiansebestyen", "Foldeak", "Hodmezovasarhely", "Kiskundorozsma", "Kistelek", "Kiszombor", "Mako", "Mindszent", "Morahalom", "Pusztaszer", "Roszke", "Sandorfalva", "Szatymaz", "Szeged", "Szegvar", "Szekkutas", "Szentes"]
      },
      {
        name: "Fejer",
        cities: ["Aba", "Adony", "Alap", "Apostag", "Bakonycsernye", "Bicske", "Bodajk", "Cece", "Csakvar", "Deg", "Dios", "Dunaujvaros", "Enying", "Ercsi", "Etyek", "Fehervarcsurgo", "Lovasbereny", "Martonvasar", "Mezofalva", "Mezoszilas", "Mor", "Pazmand", "Polgardi", "Pusztavam", "Rackeresztur", "Sarbogard", "Seregelyes", "Soponya", "Szabadbattyan", "Szekesfehervar", "Val"]
      },
      {
        name: "Gyor-Moson-Sopron",
        cities: ["Asvanyraro", "Beled", "Bosarkany", "Csorna", "Fertod", "Fertorakos", "Fertoszentmiklos", "Gyor", "Gyorujbarat", "Hunyadi u.", "Kapuvar", "Lebeny", "Mihalyi", "Mosonmagyarovar", "Nyul", "Pannonhalma", "Rajka", "Sopron", "Szany", "Tet"]
      },
      {
        name: "Hajdu-Bihar",
        cities: ["Balmazujvaros", "Barand", "Berettyoujfalu", "Biharkeresztes", "Biharnagybajom", "Debrecen", "Derecske", "Egyek", "Foldes", "Hajduboszormeny", "Hajdudorog", "Hajduhadhaz", "Hajdusamson", "Hajduszoboszlo", "Hajduszovat", "Hortobagy", "Hosszupalyi", "Kaba", "Komadi", "Mikepercs", "Monostorpalyi", "Nadudvar", "Nagyleta", "Nyirabrany", "Nyiracsad", "Nyiradony", "Polgar", "Puspokladany", "Sarretudvari", "Tiszacsege", "Ujfeherto", "Vamospercs"]
      },
      {
        name: "Heves",
        cities: ["Abasar", "Andornaktalya", "Belapatfalva", "Domoszlo", "Eger", "Erdotelek", "Felsotarkany", "Fuzesabony", "Gyongyos", "Gyongyospata", "Gyongyossolymos", "Gyongyostarjan", "Hatvan", "Heves", "Kal", "Lorinci", "Matraderecske", "Parad", "Petervasara", "Recsk", "Sirok", "Tarnalelesz", "Verpelet"]
      },
      {
        name: "Jasz-Nagykun-Szolnok",
        cities: ["Abadszalok", "Besenyszog", "Cserkeszolo", "Fegyvernek", "Hegyeshalom", "Jaszalsoszentgyorgy", "Jaszapati", "Jaszarokszallas", "Jaszbereny", "Jaszfenyzaru", "Jaszjakohalma", "Jaszkiser", "Jaszladany", "Jaszszentandras", "Karcag", "Kenderes", "Kisujszallas", "Kunhegyes", "Kunmadaras", "Kunszentmarton", "Martfu", "Mezotur", "Ocsod", "Szolnok", "Tiszabura", "Tiszafoldvar", "Tiszafured", "Tiszapuspoki", "Tiszaroff", "Tiszasuly", "Torokszentmiklos", "Toszeg", "Turkeve", "Ujszasz"]
      },
      {
        name: "Komarom-Esztergom",
        cities: ["Acs", "Almasfuzito", "Babolna", "Bajna", "Dorog", "Esztergom", "Kesztolc", "Kisber", "Komarom", "Kornye", "Labatlan", "Mocsa", "Nagyigmand", "Nyergesujfalu", "Oroszlany", "Sarisap", "Tardos", "Tarjan", "Tata", "Tatabanya", "Tokod", "Vertesszolos"]
      },
      {
        name: "Nograd",
        cities: ["Balassagyarmat", "Batonyterenye", "Bercel", "Bujak", "Diosjeno", "Karancskeszi", "Matraverebely", "Nagyoroszi", "Paszto", "Retsag", "Romhany", "Salgotarjan", "Szecseny", "Tar"]
      },
      {
        name: "Pest",
        cities: ["Abony", "Albertirsa", "Aszod", "Biatorbagy", "Budakalasz", "Budakeszi", "Budaors", "Bugyi", "Cegled", "Csobanka", "Dabas", "Domsod", "Dunabogdany", "Dunaharaszti", "Dunakeszi", "Erd", "Forro", "Fot", "Galgaheviz", "God", "Godollo", "Gyomro", "Hevizgyork", "Isaszeg", "Jaszkarajeno", "Kiskunlachaza", "Kocser", "Koka", "Kosd", "Maglod", "Monor", "Nagykata", "Nagykoros", "Nagykovacsi", "Nagymaros", "Nagytarcsa", "Nyaregyhaza", "Ocsa", "Orbottyan", "Orkeny", "Paty", "Pecel", "Perbal", "Pilis", "Pilisborosjeno", "Piliscsaba", "Pilisszanto", "Pilisszentivan", "Pilisszentkereszt", "Pilisvorosvar", "Pomaz", "Racalmas", "Rackeve", "Solymar", "Soskut", "Szada", "Szazhalombatta", "Szentendre", "Szentmartonkata", "Szigetcsep", "Szigetszentmiklos", "Szigetujfalu", "Szob", "Tahitofalu", "Tapiobicske", "Tapioszecso", "Tapioszele", "Toalmas", "Torokbalint", "Tortel", "Tura", "Ullo", "Uri", "Urom", "Vac", "Vecses", "Veresegyhaz", "Verocemaros", "Visegrad", "Zsambek", "Zsambok"]
      },
      {
        name: "Somogy",
        cities: ["Adand", "Balatonfoldvar", "Balatonoszod", "Balatonszabadi", "Balatonszarszo", "Barcs", "Berzence", "Boglarlelle", "Bohonye", "Csurgo", "Fonyod", "Kaposvar", "Karad", "Kethely", "Lengyeltoti", "Marcali", "Nagyatad", "Nagybajom", "Siofok", "Somogyvar", "Tab", "Zamardi"]
      },
      {
        name: "Szabolcs-Szatmar-Bereg",
        cities: ["Ajak", "Baktaloranthaza", "Balkany", "Buj", "Demecser", "Dombrad", "Fehergyarmat", "Ibrany", "Kemecse", "Kisvarda", "Kotaj", "Mandok", "Mariapocs", "Mateszalka", "Nagyecsed", "Nagyhalasz", "Nagykallo", "Nyirbator", "Nyirbeltek", "Nyiregyhaza", "Nyirmada", "Nyirpazony", "Nyirtelek", "Ofeherto", "Rakamaz", "Tarpa", "Tiszabercel", "Tiszalok", "Tiszavasvari", "Tuzser", "Vaja", "Vasarosnameny", "Zahony"]
      },
      {
        name: "Tolna",
        cities: ["Bataszek", "Bonyhad", "Decs", "Dombovar", "Dunafoldvar", "Fadd", "Gyonk", "Hogyesz", "Iregszemcse", "Madocsa", "Nagymagocs", "Nagymanyok", "Ozora", "Paks", "Pincehely", "Simontornya", "Szekszard", "Szentgal", "Tamasi", "Tengelic", "Tolna", "Zomba"]
      },
      {
        name: "Vas",
        cities: ["Buk", "Celldomolk", "Csepreg", "Gencsapati", "Jak", "Janoshaza", "Kormend", "Koszeg", "Sarvar", "Szentgotthard", "Szombathely", "Vasvar", "Vep"]
      },
      {
        name: "Veszprem",
        cities: ["Ajka", "Badacsonytomaj", "Balatonalmadi", "Balatonfured", "Balatonfuzfo", "Balatonkenese", "Band", "Berhida", "Csabrendek", "Devecser", "Herend", "Papa", "Sumeg", "Tapolca", "Urkut", "Varpalota", "Veszprem", "Zirc"]
      },
      {
        name: "Zala",
        cities: ["Becsehely", "Heviz", "Keszthely", "Lenti", "Letenye", "Nagykanizsa", "Sarmellek", "Turje", "Zalaegerszeg", "Zalakomar", "Zalalovo", "Zalaszentgrot"]
      }
    ],
    isoAlpha2: "HU",
    isoAlpha3: "HUN",
    isoNumeric: 348
  },
  {
    name: "Iceland",
    flag: "🇮🇸",
    currency: {
      code: "ISK",
      name: "Krona",
      symbol: "kr"
    },
    states: [
      {
        name: "Austurland",
        cities: ["Bakkafjor ur", "Borgarfjor ur", "Brei dalsvik", "Djupivogur", "Egilssta ir", "Eskifjor ur", "Faskru sfjor ur", "Fellabar", "Hallormssta ur", "Hofn", "Nesjakauptun", "Neskaupsta ur", "Rey arfjor ur", "Sey isfjor ur", "Sto varfjor ur", "Vopnafjor ur"]
      },
      {
        name: "Gullbringusysla",
        cities: []
      },
      {
        name: "Hofu borgarsva i",
        cities: []
      },
      {
        name: "Nor urland eystra",
        cities: []
      },
      {
        name: "Nor urland vestra",
        cities: []
      },
      {
        name: "Su urland",
        cities: []
      },
      {
        name: "Su urnes",
        cities: []
      },
      {
        name: "Vestfir ir",
        cities: []
      },
      {
        name: "Vesturland",
        cities: ["Akranes", "Borgarnes", "Bu ardalur", "Grundarfjor ur", "Hellissandur", "Hvanneyri", "Olafsvik", "Rif", "Stykkisholmur"]
      }
    ],
    isoAlpha2: "IS",
    isoAlpha3: "ISL",
    isoNumeric: 352
  },
  {
    name: "India",
    flag: "🇮🇳",
    currency: {
      code: "INR",
      name: "Rupee",
      symbol: "₹"
    },
    states: [
      {
        name: "Andaman and Nicobar Islands",
        cities: ["Bombuflat", "Garacharma", "Port Blair", "Rangat"]
      },
      {
        name: "Andhra Pradesh",
        cities: ["Addanki", "Adivivaram", "Adoni", "Aganampudi", "Ajjaram", "Akividu", "Akkarampalle", "Akkayapalle", "Akkireddipalem", "Alampur", "Amalapuram", "Amudalavalasa", "Amur", "Anakapalle", "Anantapur", "Andole", "Atmakur", "Attili", "Avanigadda", "Badepalli", "Badvel", "Balapur", "Bandarulanka", "Banganapalle", "Bapatla", "Bapulapadu", "Belampalli", "Bestavaripeta", "Betamcherla", "Bhattiprolu", "Bhimavaram", "Bhimunipatnam", "Bobbili", "Bombuflat", "Bommuru", "Bugganipalle", "Challapalle", "Chandur", "Chatakonda", "Chemmumiahpet", "Chidiga", "Chilakaluripet", "Chimakurthy", "Chinagadila", "Chinagantyada", "Chinnachawk", "Chintalavalasa", "Chipurupalle", "Chirala", "Chittoor", "Chodavaram", "Choutuppal", "Chunchupalle", "Cuddapah", "Cumbum", "Darnakal", "Dasnapur", "Dauleshwaram", "Dharmavaram", "Dhone", "Dommara Nandyal", "Dowlaiswaram", "East Godavari Dist.", "Eddumailaram", "Edulapuram", "Ekambara kuppam", "Eluru", "Enikapadu", "Fakirtakya", "Farrukhnagar", "Gaddiannaram", "Gajapathinagaram", "Gajularega", "Gajuvaka", "Gannavaram", "Garacharma", "Garimellapadu", "Giddalur", "Godavarikhani", "Gopalapatnam", "Gopalur", "Gorrekunta", "Gudivada", "Gudur", "Guntakal", "Guntur", "Guti", "Hindupur", "Hukumpeta", "Ichchapuram", "Isnapur", "Jaggayyapeta", "Jallaram Kamanpur", "Jammalamadugu", "Jangampalli", "Jarjapupeta", "Kadiri", "Kaikalur", "Kakinada", "Kallur", "Kalyandurg", "Kamalapuram", "Kamareddi", "Kanapaka", "Kanigiri", "Kanithi", "Kankipadu", "Kantabamsuguda", "Kanuru", "Karnul", "Katheru", "Kavali", "Kazipet", "Khanapuram Haveli", "Kodar", "Kollapur", "Kondapalem", "Kondapalle", "Kondukur", "Kosgi", "Kothavalasa", "Kottapalli", "Kovur", "Kovurpalle", "Kovvur", "Krishna", "Kuppam", "Kurmannapalem", "Kurnool", "Lakshettipet", "Lalbahadur Nagar", "Machavaram", "Macherla", "Machilipatnam", "Madanapalle", "Madaram", "Madhuravada", "Madikonda", "Madugule", "Mahabubnagar", "Mahbubabad", "Malkajgiri", "Mamilapalle", "Mancheral", "Mandapeta", "Mandasa", "Mangalagiri", "Manthani", "Markapur", "Marturu", "Metpalli", "Mindi", "Mirpet", "Moragudi", "Mothugudam", "Nagari", "Nagireddipalle", "Nandigama", "Nandikotkur", "Nandyal", "Narasannapeta", "Narasapur", "Narasaraopet", "Narayanavanam", "Narsapur", "Narsingi", "Narsipatnam", "Naspur", "Nathayyapalem", "Nayudupeta", "Nelimaria", "Nellore", "Nidadavole", "Nuzvid", "Omerkhan daira", "Ongole", "Osmania University", "Pakala", "Palakole", "Palakurthi", "Palasa", "Palempalle", "Palkonda", "Palmaner", "Pamur", "Panjim", "Papampeta", "Parasamba", "Parvatipuram", "Patancheru", "Payakaraopet", "Pedagantyada", "Pedana", "Peddapuram", "Pendurthi", "Penugonda", "Penukonda", "Phirangipuram", "Pithapuram", "Ponnur", "Port Blair", "Pothinamallayyapalem", "Prakasam", "Prasadampadu", "Prasantinilayam", "Proddatur", "Pulivendla", "Punganuru", "Puttur", "Qutubullapur", "Rajahmundry", "Rajamahendri", "Rajampet", "Rajendranagar", "Rajoli", "Ramachandrapuram", "Ramanayyapeta", "Ramapuram", "Ramarajupalli", "Ramavarappadu", "Rameswaram", "Rampachodavaram", "Ravulapalam", "Rayachoti", "Rayadrug", "Razam", "Razole", "Renigunta", "Repalle", "Rishikonda", "Salur", "Samalkot", "Sattenapalle", "Seetharampuram", "Serilungampalle", "Shankarampet", "Shar", "Singarayakonda", "Sirpur", "Sirsilla", "Sompeta", "Sriharikota", "Srikakulam", "Srikalahasti", "Sriramnagar", "Sriramsagar", "Srisailam", "Srisailamgudem Devasthanam", "Sulurpeta", "Suriapet", "Suryaraopet", "Tadepalle", "Tadepalligudem", "Tadpatri", "Tallapalle", "Tanuku", "Tekkali", "Tenali", "Tigalapahad", "Tiruchanur", "Tirumala", "Tirupati", "Tirvuru", "Trimulgherry", "Tuni", "Turangi", "Ukkayapalli", "Ukkunagaram", "Uppal Kalan", "Upper Sileru", "Uravakonda", "Vadlapudi", "Vaparala", "Vemalwada", "Venkatagiri", "Venkatapuram", "Vepagunta", "Vetapalem", "Vijayapuri", "Vijayapuri South", "Vijayawada", "Vinukonda", "Visakhapatnam", "Vizianagaram", "Vuyyuru", "Wanparti", "West Godavari Dist.", "Yadagirigutta", "Yarada", "Yellamanchili", "Yemmiganur", "Yenamalakudru", "Yendada", "Yerraguntla"]
      },
      {
        name: "Arunachal Pradesh",
        cities: ["Along", "Basar", "Bondila", "Changlang", "Daporijo", "Deomali", "Itanagar", "Jairampur", "Khonsa", "Naharlagun", "Namsai", "Pasighat", "Roing", "Seppa", "Tawang", "Tezu", "Ziro"]
      },
      {
        name: "Assam",
        cities: ["Abhayapuri", "Ambikapur", "Amguri", "Anand Nagar", "Badarpur", "Badarpur Railway Town", "Bahbari Gaon", "Bamun Sualkuchi", "Barbari", "Barpathar", "Barpeta", "Barpeta Road", "Basugaon", "Bihpuria", "Bijni", "Bilasipara", "Biswanath Chariali", "Bohori", "Bokajan", "Bokokhat", "Bongaigaon", "Bongaigaon Petro-chemical Town", "Borgolai", "Chabua", "Chandrapur Bagicha", "Chapar", "Chekonidhara", "Choto Haibor", "Dergaon", "Dharapur", "Dhekiajuli", "Dhemaji", "Dhing", "Dhubri", "Dhuburi", "Dibrugarh", "Digboi", "Digboi Oil Town", "Dimaruguri", "Diphu", "Dispur", "Doboka", "Dokmoka", "Donkamokan", "Duliagaon", "Duliajan", "Duliajan No.1", "Dum Duma", "Durga Nagar", "Gauripur", "Goalpara", "Gohpur", "Golaghat", "Golakganj", "Gossaigaon", "Guwahati", "Haflong", "Hailakandi", "Hamren", "Hauli", "Hauraghat", "Hojai", "Jagiroad", "Jagiroad Paper Mill", "Jogighopa", "Jonai Bazar", "Jorhat", "Kampur Town", "Kamrup", "Kanakpur", "Karimganj", "Kharijapikon", "Kharupetia", "Kochpara", "Kokrajhar", "Kumar Kaibarta Gaon", "Lakhimpur", "Lakhipur", "Lala", "Lanka", "Lido Tikok", "Lido Town", "Lumding", "Lumding Railway Colony", "Mahur", "Maibong", "Majgaon", "Makum", "Mangaldai", "Mankachar", "Margherita", "Mariani", "Marigaon", "Moran", "Moranhat", "Nagaon", "Naharkatia", "Nalbari", "Namrup", "Naubaisa Gaon", "Nazira", "New Bongaigaon Railway Colony", "Niz-Hajo", "North Guwahati", "Numaligarh", "Palasbari", "Panchgram", "Pathsala", "Raha", "Rangapara", "Rangia", "Salakati", "Sapatgram", "Sarthebari", "Sarupathar", "Sarupathar Bengali", "Senchoagaon", "Sibsagar", "Silapathar", "Silchar", "Silchar Part-X", "Sonari", "Sorbhog", "Sualkuchi", "Tangla", "Tezpur", "Tihu", "Tinsukia", "Titabor", "Udalguri", "Umrangso", "Uttar Krishnapur Part-I"]
      },
      {
        name: "Bihar",
        cities: ["Amarpur", "Ara", "Araria", "Areraj", "Asarganj", "Aurangabad", "Bagaha", "Bahadurganj", "Bairgania", "Bakhtiyarpur", "Banka", "Banmankhi", "Bar Bigha", "Barauli", "Barauni Oil Township", "Barh", "Barhiya", "Bariapur", "Baruni", "Begusarai", "Behea", "Belsand", "Bettiah", "Bhabua", "Bhagalpur", "Bhimnagar", "Bhojpur", "Bihar", "Bihar Sharif", "Bihariganj", "Bikramganj", "Birpur", "Bodh Gaya", "Buxar", "Chakia", "Chanpatia", "Chhapra", "Chhatapur", "Colgong", "Dalsingh Sarai", "Darbhanga", "Daudnagar", "Dehri", "Dhaka", "Dighwara", "Dinapur", "Dinapur Cantonment", "Dumra", "Dumraon", "Fatwa", "Forbesganj", "Gaya", "Gazipur", "Ghoghardiha", "Gogri Jamalpur", "Gopalganj", "Habibpur", "Hajipur", "Hasanpur", "Hazaribagh", "Hilsa", "Hisua", "Islampur", "Jagdispur", "Jahanabad", "Jamalpur", "Jamhaur", "Jamui", "Janakpur Road", "Janpur", "Jaynagar", "Jha Jha", "Jhanjharpur", "Jogbani", "Kanti", "Kasba", "Kataiya", "Katihar", "Khagaria", "Khagaul", "Kharagpur", "Khusrupur", "Kishanganj", "Koath", "Koilwar", "Lakhisarai", "Lalganj", "Lauthaha", "Madhepura", "Madhubani", "Maharajganj", "Mahnar Bazar", "Mairwa", "Makhdumpur", "Maner", "Manihari", "Marhaura", "Masaurhi", "Mirganj", "Mohiuddinagar", "Mokama", "Motihari", "Motipur", "Munger", "Murliganj", "Muzaffarpur", "Nabinagar", "Narkatiaganj", "Nasriganj", "Natwar", "Naugachhia", "Nawada", "Nirmali", "Nokha", "Paharpur", "Patna", "Phulwari", "Piro", "Purnia", "Pusa", "Rafiganj", "Raghunathpur", "Rajgir", "Ramnagar", "Raxaul", "Revelganj", "Rusera", "Sagauli", "Saharsa", "Samastipur", "Sasaram", "Shahpur", "Shaikhpura", "Sherghati", "Shivhar", "Silao", "Sitamarhi", "Siwan", "Sonepur", "Sultanganj", "Supaul", "Teghra", "Tekari", "Thakurganj", "Vaishali", "Waris Aliganj"]
      },
      {
        name: "Chandigarh",
        cities: ["Chandigarh"]
      },
      {
        name: "Chhattisgarh",
        cities: ["Ahiwara", "Akaltara", "Ambagarh Chauki", "Ambikapur", "Arang", "Bade Bacheli", "Bagbahara", "Baikunthpur", "Balod", "Baloda", "Baloda Bazar", "Banarsi", "Basna", "Bemetra", "Bhanpuri", "Bhatapara", "Bhatgaon", "Bhilai", "Bilaspur", "Bilha", "Birgaon", "Bodri", "Champa", "Charcha", "Charoda", "Chhuikhadan", "Chirmiri", "Dantewada", "Deori", "Dhamdha", "Dhamtari", "Dharamjaigarh", "Dipka", "Doman Hill Colliery", "Dongargaon", "Dongragarh", "Durg", "Frezarpur", "Gandai", "Gariaband", "Gaurela", "Gelhapani", "Gharghoda", "Gidam", "Gobra Nawapara", "Gogaon", "Hatkachora", "Jagdalpur", "Jamui", "Jashpurnagar", "Jhagrakhand", "Kanker", "Katghora", "Kawardha", "Khairagarh", "Khamhria", "Kharod", "Kharsia", "Khonga Pani", "Kirandu", "Kirandul", "Kohka", "Kondagaon", "Korba", "Korea", "Koria Block", "Kota", "Kumhari", "Kumud Katta", "Kurasia", "Kurud", "Lingiyadih", "Lormi", "Mahasamund", "Mahendragarh", "Mehmand", "Mongra", "Mowa", "Mungeli", "Nailajanjgir", "Namna Kalan", "Naya Baradwar", "Pandariya", "Patan", "Pathalgaon", "Pendra", "Phunderdihari", "Pithora", "Raigarh", "Raipur", "Rajgamar", "Rajhara", "Rajnandgaon", "Ramanuj Ganj", "Ratanpur", "Sakti", "Saraipali", "Sarajpur", "Sarangarh", "Shivrinarayan", "Simga", "Sirgiti", "Takhatpur", "Telgaon", "Tildanewra", "Urla", "Vishrampur"]
      },
      {
        name: "Dadra and Nagar Haveli",
        cities: ["Amli", "Silvassa"]
      },
      {
        name: "Daman and Diu",
        cities: ["Daman", "Diu"]
      },
      {
        name: "Delhi",
        cities: ["Delhi", "New Delhi"]
      },
      {
        name: "Goa",
        cities: ["Aldona", "Altinho", "Aquem", "Arpora", "Bambolim", "Bandora", "Bardez", "Benaulim", "Betora", "Bicholim", "Calapor", "Candolim", "Caranzalem", "Carapur", "Chicalim", "Chimbel", "Chinchinim", "Colvale", "Corlim", "Cortalim", "Cuncolim", "Curchorem", "Curti", "Davorlim", "Dona Paula", "Goa", "Guirim", "Jua", "Kalangat", "Kankon", "Kundaim", "Loutulim", "Madgaon", "Mapusa", "Margao", "Margaon", "Miramar", "Morjim", "Mormugao", "Navelim", "Pale", "Panaji", "Parcem", "Parra", "Penha de Franca", "Pernem", "Pilerne", "Pissurlem", "Ponda", "Porvorim", "Quepem", "Queula", "Raia", "Reis Magos", "Salcette", "Saligao", "Sancoale", "Sanguem", "Sanquelim", "Sanvordem", "Sao Jose-de-Areal", "Sattari", "Serula", "Sinquerim", "Siolim", "Taleigao", "Tivim", "Valpoi", "Varca", "Vasco", "Verna"]
      },
      {
        name: "Gujarat",
        cities: ["Abrama", "Adalaj", "Adityana", "Advana", "Ahmedabad", "Ahwa", "Alang", "Ambaji", "Ambaliyasan", "Amod", "Amreli", "Amroli", "Anand", "Andada", "Anjar", "Anklav", "Ankleshwar", "Anklesvar INA", "Antaliya", "Arambhada", "Asarma", "Atul", "Babra", "Bag-e-Firdosh", "Bagasara", "Bahadarpar", "Bajipura", "Bajva", "Balasinor", "Banaskantha", "Bansda", "Bantva", "Bardoli", "Barwala", "Bayad", "Bechar", "Bedi", "Beyt", "Bhachau", "Bhanvad", "Bharuch", "Bharuch INA", "Bhavnagar", "Bhayavadar", "Bhestan", "Bhuj", "Bilimora", "Bilkha", "Billimora", "Bodakdev", "Bodeli", "Bopal", "Boria", "Boriavi", "Borsad", "Botad", "Cambay", "Chaklasi", "Chala", "Chalala", "Chalthan", "Chanasma", "Chandisar", "Chandkheda", "Chanod", "Chaya", "Chenpur", "Chhapi", "Chhaprabhatha", "Chhatral", "Chhota Udepur", "Chikhli", "Chiloda", "Chorvad", "Chotila", "Dabhoi", "Dadara", "Dahod", "Dakor", "Damnagar", "Deesa", "Delvada", "Devgadh Baria", "Devsar", "Dhandhuka", "Dhanera", "Dhangdhra", "Dhansura", "Dharampur", "Dhari", "Dhola", "Dholka", "Dholka Rural", "Dhoraji", "Dhrangadhra", "Dhrol", "Dhuva", "Dhuwaran", "Digvijaygram", "Disa", "Dungar", "Dungarpur", "Dungra", "Dwarka", "Flelanganj", "GSFC Complex", "Gadhda", "Gandevi", "Gandhidham", "Gandhinagar", "Gariadhar", "Ghogha", "Godhra", "Gondal", "Hajira INA", "Halol", "Halvad", "Hansot", "Harij", "Himatnagar", "Ichchhapor", "Idar", "Jafrabad", "Jalalpore", "Jambusar", "Jamjodhpur", "Jamnagar", "Jasdan", "Jawaharnagar", "Jetalsar", "Jetpur", "Jodiya", "Joshipura", "Junagadh", "Kadi", "Kadodara", "Kalavad", "Kali", "Kaliawadi", "Kalol", "Kalol INA", "Kandla", "Kanjari", "Kanodar", "Kapadwanj", "Karachiya", "Karamsad", "Karjan", "Kathial", "Kathor", "Katpar", "Kavant", "Keshod", "Kevadiya", "Khambhaliya", "Khambhat", "Kharaghoda", "Khed Brahma", "Kheda", "Kheralu", "Kodinar", "Kosamba", "Kundla", "Kutch", "Kutiyana", "Lakhtar", "Lalpur", "Lambha", "Lathi", "Limbdi", "Limla", "Lunavada", "Madhapar", "Maflipur", "Mahemdavad", "Mahudha", "Mahuva", "Mahuvar", "Makarba", "Makarpura", "Makassar", "Maktampur", "Malia", "Malpur", "Manavadar", "Mandal", "Mandvi", "Mangrol", "Mansa", "Meghraj", "Mehsana", "Mendarla", "Mithapur", "Modasa", "Mogravadi", "Morbi", "Morvi", "Mundra", "Nadiad", "Naliya", "Nanakvada", "Nandej", "Nandesari", "Nandesari INA", "Naroda", "Navagadh", "Navagam Ghed", "Navsari", "Ode", "Okaf", "Okha", "Olpad", "Paddhari", "Padra", "Palanpur", "Palej", "Pali", "Palitana", "Paliyad", "Pandesara", "Panoli", "Pardi", "Parnera", "Parvat", "Patan", "Patdi", "Petlad", "Petrochemical Complex", "Porbandar", "Prantij", "Radhanpur", "Raiya", "Rajkot", "Rajpipla", "Rajula", "Ramod", "Ranavav", "Ranoli", "Rapar", "Sahij", "Salaya", "Sanand", "Sankheda", "Santrampur", "Saribujrang", "Sarigam INA", "Sayan", "Sayla", "Shahpur", "Shahwadi", "Shapar", "Shivrajpur", "Siddhapur", "Sidhpur", "Sihor", "Sika", "Singarva", "Sinor", "Sojitra", "Sola", "Songadh", "Suraj Karadi", "Surat", "Surendranagar", "Talaja", "Talala", "Talod", "Tankara", "Tarsali", "Thangadh", "Tharad", "Thasra", "Udyognagar", "Ukai", "Umbergaon", "Umbergaon INA", "Umrala", "Umreth", "Un", "Una", "Unjha", "Upleta", "Utran", "Uttarsanda", "V.U. Nagar", "V.V. Nagar", "Vadia", "Vadla", "Vadnagar", "Vadodara", "Vaghodia INA", "Valbhipur", "Vallabh Vidyanagar", "Valsad", "Valsad INA", "Vanthali", "Vapi", "Vapi INA", "Vartej", "Vasad", "Vasna Borsad INA", "Vaso", "Veraval", "Vidyanagar", "Vijalpor", "Vijapur", "Vinchhiya", "Vinzol", "Virpur", "Visavadar", "Visnagar", "Vyara", "Wadhwan", "Waghai", "Waghodia", "Wankaner", "Zalod"]
      },
      {
        name: "Haryana",
        cities: ["Ambala", "Ambala Cantt", "Asan Khurd", "Asandh", "Ateli", "Babiyal", "Bahadurgarh", "Ballabgarh", "Barwala", "Bawal", "Bawani Khera", "Beri", "Bhiwani", "Bilaspur", "Buria", "Charkhi Dadri", "Chhachhrauli", "Chita", "Dabwali", "Dharuhera", "Dundahera", "Ellenabad", "Farakhpur", "Faridabad", "Farrukhnagar", "Fatehabad", "Firozpur Jhirka", "Gannaur", "Ghraunda", "Gohana", "Gurgaon", "Haileymandi", "Hansi", "Hasanpur", "Hathin", "Hisar", "Hissar", "Hodal", "Indri", "Jagadhri", "Jakhal Mandi", "Jhajjar", "Jind", "Julana", "Kaithal", "Kalanur", "Kalanwali", "Kalayat", "Kalka", "Kanina", "Kansepur", "Kardhan", "Karnal", "Kharkhoda", "Kheri Sampla", "Kundli", "Kurukshetra", "Ladrawan", "Ladwa", "Loharu", "Maham", "Mahendragarh", "Mustafabad", "Nagai Chaudhry", "Narayangarh", "Narnaul", "Narnaund", "Narwana", "Nilokheri", "Nuh", "Palwal", "Panchkula", "Panipat", "Panipat Taraf Ansar", "Panipat Taraf Makhdum Zadgan", "Panipat Taraf Rajputan", "Pehowa", "Pinjaur", "Punahana", "Pundri", "Radaur", "Raipur Rani", "Rania", "Ratiya", "Rewari", "Rohtak", "Ropar", "Sadauri", "Safidon", "Samalkha", "Sankhol", "Sasauli", "Shahabad", "Sirsa", "Siwani", "Sohna", "Sonipat", "Sukhrali", "Taoru", "Taraori", "Tauru", "Thanesar", "Tilpat", "Tohana", "Tosham", "Uchana", "Uklana Mandi", "Uncha Siwana", "Yamunanagar"]
      },
      {
        name: "Himachal Pradesh",
        cities: ["Arki", "Baddi", "Bakloh", "Banjar", "Bhota", "Bhuntar", "Bilaspur", "Chamba", "Chaupal", "Chuari Khas", "Dagshai", "Dalhousie", "Dalhousie Cantonment", "Damtal", "Daulatpur", "Dera Gopipur", "Dhalli", "Dharamshala", "Gagret", "Ghamarwin", "Hamirpur", "Jawala Mukhi", "Jogindarnagar", "Jubbal", "Jutogh", "Kala Amb", "Kalpa", "Kangra", "Kasauli", "Kot Khai", "Kullu", "Kulu", "Manali", "Mandi", "Mant Khas", "Mehatpur Basdehra", "Nadaun", "Nagrota", "Nahan", "Naina Devi", "Nalagarh", "Narkanda", "Nurpur", "Palampur", "Pandoh", "Paonta Sahib", "Parwanoo", "Parwanu", "Rajgarh", "Rampur", "Rawalsar", "Rohru", "Sabathu", "Santokhgarh", "Sarahan", "Sarka Ghat", "Seoni", "Shimla", "Sirmaur", "Solan", "Solon", "Sundarnagar", "Sundernagar", "Talai", "Theog", "Tira Sujanpur", "Una", "Yol"]
      },
      {
        name: "Jammu and Kashmir",
        cities: ["Achabal", "Akhnur", "Anantnag", "Arnia", "Awantipora", "Badami Bagh", "Bandipur", "Banihal", "Baramula", "Baramulla", "Bari Brahmana", "Bashohli", "Batote", "Bhaderwah", "Bijbiara", "Billawar", "Birwah", "Bishna", "Budgam", "Charari Sharief", "Chenani", "Doda", "Duru-Verinag", "Gandarbat", "Gho Manhasan", "Gorah Salathian", "Gulmarg", "Hajan", "Handwara", "Hiranagar", "Jammu", "Jammu Cantonment", "Jammu Tawi", "Jourian", "Kargil", "Kathua", "Katra", "Khan Sahib", "Khour", "Khrew", "Kishtwar", "Kud", "Kukernag", "Kulgam", "Kunzer", "Kupwara", "Lakhenpur", "Leh", "Magam", "Mattan", "Naushehra", "Pahalgam", "Pampore", "Parole", "Pattan", "Pulwama", "Punch", "Qazigund", "Rajauri", "Ramban", "Ramgarh", "Ramnagar", "Ranbirsingh Pora", "Reasi", "Rehambal", "Samba", "Shupiyan", "Sopur", "Srinagar", "Sumbal", "Sunderbani", "Talwara", "Thanamandi", "Tral", "Udhampur", "Uri", "Vijaypur"]
      },
      {
        name: "Jharkhand",
        cities: ["Adityapur", "Amlabad", "Angarpathar", "Ara", "Babua Kalan", "Bagbahra", "Baliapur", "Baliari", "Balkundra", "Bandhgora", "Barajamda", "Barhi", "Barka Kana", "Barki Saraiya", "Barughutu", "Barwadih", "Basaria", "Basukinath", "Bermo", "Bhagatdih", "Bhaurah", "Bhojudih", "Bhuli", "Bokaro", "Borio Bazar", "Bundu", "Chaibasa", "Chaitudih", "Chakradharpur", "Chakulia", "Chandaur", "Chandil", "Chandrapura", "Chas", "Chatra", "Chhatatanr", "Chhotaputki", "Chiria", "Chirkunda", "Churi", "Daltenganj", "Danguwapasi", "Dari", "Deoghar", "Deorikalan", "Devghar", "Dhanbad", "Dhanwar", "Dhaunsar", "Dugda", "Dumarkunda", "Dumka", "Egarkunr", "Gadhra", "Garwa", "Ghatsila", "Ghorabandha", "Gidi", "Giridih", "Gobindpur", "Godda", "Godhar", "Golphalbari", "Gomoh", "Gua", "Gumia", "Gumla", "Haludbani", "Hazaribag", "Hesla", "Husainabad", "Isri", "Jadugora", "Jagannathpur", "Jamadoba", "Jamshedpur", "Jamtara", "Jarangdih", "Jaridih", "Jasidih", "Jena", "Jharia", "Jharia Khas", "Jhinkpani", "Jhumri Tilaiya", "Jorapokhar", "Jugsalai", "Kailudih", "Kalikapur", "Kandra", "Kanke", "Katras", "Kedla", "Kenduadih", "Kharkhari", "Kharsawan", "Khelari", "Khunti", "Kiri Buru", "Kiriburu", "Kodarma", "Kuju", "Kurpania", "Kustai", "Lakarka", "Lapanga", "Latehar", "Lohardaga", "Loiya", "Loyabad", "Madhupur", "Mahesh Mundi", "Maithon", "Malkera", "Mango", "Manoharpur", "Marma", "Meghahatuburu Forest village", "Mera", "Meru", "Mihijam", "Mugma", "Muri", "Mushabani", "Nagri Kalan", "Netarhat", "Nirsa", "Noamundi", "Okni", "Orla", "Pakaur", "Palamau", "Palawa", "Panchet", "Panrra", "Paratdih", "Pathardih", "Patratu", "Phusro", "Pondar Kanali", "Rajmahal", "Ramgarh", "Ranchi", "Ray", "Rehla", "Religara", "Rohraband", "Sahibganj", "Sahnidih", "Saraidhela", "Saraikela", "Sarjamda", "Saunda", "Sewai", "Sijhua", "Sijua", "Simdega", "Sindari", "Sinduria", "Sini", "Sirka", "Siuliban", "Surubera", "Tati", "Tenudam", "Tisra", "Topa", "Topchanchi"]
      },
      {
        name: "Karnataka",
        cities: ["Adityanagar", "Adityapatna", "Afzalpur", "Ajjampur", "Aland", "Almatti Sitimani", "Alnavar", "Alur", "Ambikanagara", "Anekal", "Ankola", "Annigeri", "Arkalgud", "Arsikere", "Athni", "Aurad", "Badagavettu", "Badami", "Bagalkot", "Bagepalli", "Bailhongal", "Baindur", "Bajala", "Bajpe", "Banavar", "Bangarapet", "Bankapura", "Bannur", "Bantwal", "Basavakalyan", "Basavana Bagevadi", "Belagula", "Belakavadiq", "Belgaum", "Belgaum Cantonment", "Bellary", "Belluru", "Beltangadi", "Belur", "Belvata", "Bengaluru", "Bhadravati", "Bhalki", "Bhatkal", "Bhimarayanagudi", "Bhogadi", "Bidar", "Bijapur", "Bilgi", "Birur", "Bommanahalli", "Bommasandra", "Byadgi", "Byatarayanapura", "Chakranagar Colony", "Challakere", "Chamrajnagar", "Chamundi Betta", "Channagiri", "Channapatna", "Channarayapatna", "Chickballapur", "Chik Ballapur", "Chikkaballapur", "Chikmagalur", "Chiknayakanhalli", "Chikodi", "Chincholi", "Chintamani", "Chitaguppa", "Chitapur", "Chitradurga", "Coorg", "Dandeli", "Dargajogihalli", "Dasarahalli", "Davangere", "Devadurga", "Devagiri", "Devanhalli", "Dharwar", "Dhupdal", "Dod Ballapur", "Donimalai", "Gadag", "Gajendragarh", "Ganeshgudi", "Gangawati", "Gangoli", "Gauribidanur", "Gokak", "Gokak Falls", "Gonikoppal", "Gorur", "Gottikere", "Gubbi", "Gudibanda", "Gulbarga", "Guledgudda", "Gundlupet", "Gurmatkal", "Haliyal", "Hangal", "Harihar", "Harpanahalli", "Hassan", "Hatti", "Hatti Gold Mines", "Haveri", "Hebbagodi", "Hebbalu", "Hebri", "Heggadadevanakote", "Herohalli", "Hidkal", "Hindalgi", "Hirekerur", "Hiriyur", "Holalkere", "Hole Narsipur", "Homnabad", "Honavar", "Honnali", "Hosakote", "Hosanagara", "Hosangadi", "Hosdurga", "Hoskote", "Hospet", "Hubli", "Hukeri", "Hunasagi", "Hunasamaranahalli", "Hungund", "Hunsur", "Huvina Hadagalli", "Ilkal", "Indi", "Jagalur", "Jamkhandi", "Jevargi", "Jog Falls", "Kabini Colony", "Kadur", "Kalghatgi", "Kamalapuram", "Kampli", "Kanakapura", "Kangrali BK", "Kangrali KH", "Kannur", "Karkala", "Karwar", "Kemminja", "Kengeri", "Kerur", "Khanapur", "Kodigenahalli", "Kodiyal", "Kodlipet", "Kolar", "Kollegal", "Konanakunte", "Konanur", "Konnur", "Koppa", "Koppal", "Koratagere", "Kotekara", "Kothnur", "Kotturu", "Krishnapura", "Krishnarajanagar", "Krishnarajapura", "Krishnarajasagara", "Krishnarajpet", "Kudchi", "Kudligi", "Kudremukh", "Kumsi", "Kumta", "Kundapura", "Kundgol", "Kunigal", "Kurgunta", "Kushalnagar", "Kushtagi", "Kyathanahalli", "Lakshmeshwar", "Lingsugur", "Londa", "Maddur", "Madhugiri", "Madikeri", "Magadi", "Magod Falls", "Mahadeswara Hills", "Mahadevapura", "Mahalingpur", "Maisuru", "Maisuru Cantonment", "Malavalli", "Mallar", "Malpe", "Malur", "Manchenahalli", "Mandya", "Mangalore", "Mangaluru", "Manipal", "Manvi", "Maski", "Mastikatte Colony", "Mayakonda", "Melukote", "Molakalmuru", "Mudalgi", "Mudbidri", "Muddebihal", "Mudgal", "Mudhol", "Mudigere", "Mudushedde", "Mulbagal", "Mulgund", "Mulki", "Mulur", "Mundargi", "Mundgod", "Munirabad", "Munnur", "Murudeshwara", "Mysore", "Nagamangala", "Nanjangud", "Naragund", "Narasimharajapura", "Naravi", "Narayanpur", "Naregal", "Navalgund", "Nelmangala", "Nipani", "Nitte", "Nyamati", "Padu", "Pandavapura", "Pattanagere", "Pavagada", "Piriyapatna", "Ponnampet", "Puttur", "Rabkavi", "Raichur", "Ramanagaram", "Ramdurg", "Ranibennur", "Raybag", "Robertsonpet", "Ron", "Sadalgi", "Sagar", "Sakleshpur", "Saligram", "Sandur", "Sanivarsante", "Sankeshwar", "Sargur", "Sathyamangala", "Saundatti Yellamma", "Savanur", "Sedam", "Shahabad", "Shahabad A.C.C.", "Shahapur", "Shahpur", "Shaktinagar", "Shiggaon", "Shikarpur", "Shimoga", "Shirhatti", "Shorapur", "Shravanabelagola", "Shrirangapattana", "Siddapur", "Sidlaghatta", "Sindgi", "Sindhnur", "Sira", "Sirakoppa", "Sirsi", "Siruguppa", "Someshwar", "Somvarpet", "Sorab", "Sringeri", "Srinivaspur", "Sulya", "Suntikopa", "Talikota", "Tarikera", "Tekkalakota", "Terdal", "Thokur", "Thumbe", "Tiptur", "Tirthahalli", "Tirumakudal Narsipur", "Tonse", "Tumkur", "Turuvekere", "Udupi", "Ullal", "Uttarahalli", "Venkatapura", "Vijayapura", "Virarajendrapet", "Wadi", "Wadi A.C.C.", "Yadgir", "Yelahanka", "Yelandur", "Yelbarga", "Yellapur", "Yenagudde"]
      },
      {
        name: "Kenmore",
        cities: []
      },
      {
        name: "Kerala",
        cities: ["Adimaly", "Adoor", "Adur", "Akathiyur", "Alangad", "Alappuzha", "Aluva", "Ancharakandy", "Angamaly", "Aroor", "Arukutti", "Attingal", "Avinissery", "Azhikode North", "Azhikode South", "Azhiyur", "Balussery", "Bangramanjeshwar", "Beypur", "Brahmakulam", "Chala", "Chalakudi", "Changanacheri", "Chauwara", "Chavakkad", "Chelakkara", "Chelora", "Chendamangalam", "Chengamanad", "Chengannur", "Cheranallur", "Cheriyakadavu", "Cherthala", "Cherukunnu", "Cheruthazham", "Cheruvannur", "Cheruvattur", "Chevvur", "Chirakkal", "Chittur", "Chockli", "Churnikkara", "Dharmadam", "Edappal", "Edathala", "Elayavur", "Elur", "Eranholi", "Erattupetta", "Ernakulam", "Eruvatti", "Ettumanoor", "Feroke", "Guruvayur", "Haripad", "Hosabettu", "Idukki", "Iringaprom", "Irinjalakuda", "Iriveri", "Kadachira", "Kadalundi", "Kadamakkudy", "Kadirur", "Kadungallur", "Kakkodi", "Kalady", "Kalamassery", "Kalliasseri", "Kalpetta", "Kanhangad", "Kanhirode", "Kanjikkuzhi", "Kanjikode", "Kanjirappalli", "Kannadiparamba", "Kannangad", "Kannapuram", "Kannur", "Kannur Cantonment", "Karunagappally", "Karuvamyhuruthy", "Kasaragod", "Kasargod", "Kattappana", "Kayamkulam", "Kedamangalam", "Kochi", "Kodamthuruthu", "Kodungallur", "Koduvally", "Koduvayur", "Kokkothamangalam", "Kolazhy", "Kollam", "Komalapuram", "Koothattukulam", "Koratty", "Kothamangalam", "Kottarakkara", "Kottayam", "Kottayam Malabar", "Kottuvally", "Koyilandi", "Kozhikode", "Kudappanakunnu", "Kudlu", "Kumarakom", "Kumily", "Kunnamangalam", "Kunnamkulam", "Kurikkad", "Kurkkanchery", "Kuthuparamba", "Kuttakulam", "Kuttikkattur", "Kuttur", "Malappuram", "Mallappally", "Manjeri", "Manjeshwar", "Mannancherry", "Mannar", "Mannarakkat", "Maradu", "Marathakkara", "Marutharod", "Mattannur", "Mavelikara", "Mavilayi", "Mavur", "Methala", "Muhamma", "Mulavukad", "Mundakayam", "Munderi", "Munnar", "Muthakunnam", "Muvattupuzha", "Muzhappilangad", "Nadapuram", "Nadathara", "Narath", "Nattakam", "Nedumangad", "Nenmenikkara", "New Mahe", "Neyyattinkara", "Nileshwar", "Olavanna", "Ottapalam", "Ottappalam", "Paduvilayi", "Palai", "Palakkad", "Palayad", "Palissery", "Pallikkunnu", "Paluvai", "Panniyannur", "Pantalam", "Panthiramkavu", "Panur", "Pappinisseri", "Parassala", "Paravur", "Pathanamthitta", "Pathanapuram", "Pathiriyad", "Pattambi", "Pattiom", "Pavaratty", "Payyannur", "Peermade", "Perakam", "Peralasseri", "Peringathur", "Perinthalmanna", "Perole", "Perumanna", "Perumbaikadu", "Perumbavoor", "Pinarayi", "Piravam", "Ponnani", "Pottore", "Pudukad", "Punalur", "Puranattukara", "Puthunagaram", "Puthuppariyaram", "Puzhathi", "Ramanattukara", "Shoranur", "Sultans Battery", "Sulthan Bathery", "Talipparamba", "Thaikkad", "Thalassery", "Thannirmukkam", "Theyyalingal", "Thiruvalla", "Thiruvananthapuram", "Thiruvankulam", "Thodupuzha", "Thottada", "Thrippunithura", "Thrissur", "Tirur", "Udma", "Vadakara", "Vaikam", "Valapattam", "Vallachira", "Varam", "Varappuzha", "Varkala", "Vayalar", "Vazhakkala", "Venmanad", "Villiappally", "Wayanad"]
      },
      {
        name: "Lakshadweep",
        cities: ["Agethi", "Amini", "Androth Island", "Kavaratti", "Minicoy"]
      },
      {
        name: "Madhya Pradesh",
        cities: ["Agar", "Ajaigarh", "Akoda", "Akodia", "Alampur", "Alirajpur", "Alot", "Amanganj", "Amarkantak", "Amarpatan", "Amarwara", "Ambada", "Ambah", "Amla", "Amlai", "Anjad", "Antri", "Anuppur", "Aron", "Ashoknagar", "Ashta", "Babai", "Bada Malhera", "Badagaon", "Badagoan", "Badarwas", "Badawada", "Badi", "Badkuhi", "Badnagar", "Badnawar", "Badod", "Badoda", "Badra", "Bagh", "Bagli", "Baihar", "Baikunthpur", "Bakswaha", "Balaghat", "Baldeogarh", "Bamaniya", "Bamhani", "Bamor", "Bamora", "Banda", "Bangawan", "Bansatar Kheda", "Baraily", "Barela", "Barghat", "Bargi", "Barhi", "Barigarh", "Barwaha", "Barwani", "Basoda", "Begamganj", "Beohari", "Berasia", "Betma", "Betul", "Betul Bazar", "Bhainsdehi", "Bhamodi", "Bhander", "Bhanpura", "Bharveli", "Bhaurasa", "Bhavra", "Bhedaghat", "Bhikangaon", "Bhilakhedi", "Bhind", "Bhitarwar", "Bhopal", "Bhuibandh", "Biaora", "Bijawar", "Bijeypur", "Bijrauni", "Bijuri", "Bilaua", "Bilpura", "Bina Railway Colony", "Bina-Etawa", "Birsinghpur", "Boda", "Budhni", "Burhanpur", "Burhar", "Chachaura Binaganj", "Chakghat", "Chandameta Butar", "Chanderi", "Chandia", "Chandla", "Chaurai Khas", "Chhatarpur", "Chhindwara", "Chhota Chhindwara", "Chichli", "Chitrakut", "Churhat", "Daboh", "Dabra", "Damoh", "Damua", "Datia", "Deodara", "Deori", "Deori Khas", "Depalpur", "Devendranagar", "Devhara", "Dewas", "Dhamnod", "Dhana", "Dhanpuri", "Dhar", "Dharampuri", "Dighawani", "Diken", "Dindori", "Dola", "Dumar Kachhar", "Dungariya Chhapara", "Gadarwara", "Gairatganj", "Gandhi Sagar Hydel Colony", "Ganjbasoda", "Garhakota", "Garhi Malhara", "Garoth", "Gautapura", "Ghansor", "Ghuwara", "Gogaon", "Gogapur", "Gohad", "Gormi", "Govindgarh", "Guna", "Gurh", "Gwalior", "Hanumana", "Harda", "Harpalpur", "Harrai", "Harsud", "Hatod", "Hatpipalya", "Hatta", "Hindoria", "Hirapur", "Hoshangabad", "Ichhawar", "Iklehra", "Indergarh", "Indore", "Isagarh", "Itarsi", "Jabalpur", "Jabalpur Cantonment", "Jabalpur G.C.F", "Jaisinghnagar", "Jaithari", "Jaitwara", "Jamai", "Jaora", "Jatachhapar", "Jatara", "Jawad", "Jawar", "Jeronkhalsa", "Jhabua", "Jhundpura", "Jiran", "Jirapur", "Jobat", "Joura", "Kailaras", "Kaimur", "Kakarhati", "Kalichhapar", "Kanad", "Kannod", "Kantaphod", "Kareli", "Karera", "Kari", "Karnawad", "Karrapur", "Kasrawad", "Katangi", "Katni", "Kelhauri", "Khachrod", "Khajuraho", "Khamaria", "Khand", "Khandwa", "Khaniyadhana", "Khargapur", "Khargone", "Khategaon", "Khetia", "Khilchipur", "Khirkiya", "Khujner", "Khurai", "Kolaras", "Kotar", "Kothi", "Kotma", "Kukshi", "Kumbhraj", "Kurwai", "Lahar", "Lakhnadon", "Lateri", "Laundi", "Lidhora Khas", "Lodhikheda", "Loharda", "Machalpur", "Madhogarh", "Maharajpur", "Maheshwar", "Mahidpur", "Maihar", "Majholi", "Makronia", "Maksi", "Malaj Khand", "Malanpur", "Malhargarh", "Manasa", "Manawar", "Mandav", "Mandideep", "Mandla", "Mandleshwar", "Mandsaur", "Manegaon", "Mangawan", "Manglaya Sadak", "Manpur", "Mau", "Mauganj", "Meghnagar", "Mehgaon", "Mhaugaon", "Mhow", "Mihona", "Mohgaon", "Morar", "Morena", "Morwa", "Multai", "Mundi", "Mungaoli", "Murwara", "Nagda", "Nagod", "Nagri", "Naigarhi", "Nainpur", "Nalkheda", "Namli", "Narayangarh", "Narsimhapur", "Narsingarh", "Narsinghpur", "Narwar", "Nasrullaganj", "Naudhia", "Naugaon", "Naurozabad", "Neemuch", "Nepa Nagar", "Neuton Chikhli Kalan", "Nimach", "Niwari", "Obedullaganj", "Omkareshwar", "Orachha", "Ordinance Factory Itarsi", "Pachmarhi", "Pachmarhi Cantonment", "Pachore", "Palchorai", "Palda", "Palera", "Pali", "Panagar", "Panara", "Pandaria", "Pandhana", "Pandhurna", "Panna", "Pansemal", "Parasia", "Pasan", "Patan", "Patharia", "Pawai", "Petlawad", "Phuph Kalan", "Pichhore", "Pipariya", "Pipliya Mandi", "Piploda", "Pithampur", "Polay Kalan", "Porsa", "Prithvipur", "Raghogarh", "Rahatgarh", "Raisen", "Rajakhedi", "Rajgarh", "Rajnagar", "Rajpur", "Rampur Baghelan", "Rampur Naikin", "Rampura", "Ranapur", "Ranipura", "Ratangarh", "Ratlam", "Ratlam Kasba", "Rau", "Rehli", "Rehti", "Rewa", "Sabalgarh", "Sagar", "Sagar Cantonment", "Sailana", "Sanawad", "Sanchi", "Sanwer", "Sarangpur", "Sardarpur", "Sarni", "Satai", "Satna", "Satwas", "Sausar", "Sehore", "Semaria", "Sendhwa", "Seondha", "Seoni", "Seoni Malwa", "Sethia", "Shahdol", "Shahgarh", "Shahpur", "Shahpura", "Shajapur", "Shamgarh", "Sheopur", "Shivpuri", "Shujalpur", "Sidhi", "Sihora", "Singolo", "Singrauli", "Sinhasa", "Sirgora", "Sirmaur", "Sironj", "Sitamau", "Sohagpur", "Sonkatch", "Soyatkalan", "Suhagi", "Sultanpur", "Susner", "Suthaliya", "Tal", "Talen", "Tarana", "Taricharkalan", "Tekanpur", "Tendukheda", "Teonthar", "Thandia", "Tikamgarh", "Timarni", "Tirodi", "Udaipura", "Ujjain", "Ukwa", "Umaria", "Unchahara", "Unhel", "Vehicle Factory Jabalpur", "Vidisha", "Vijayraghavgarh", "Waraseoni"]
      },
      {
        name: "Maharashtra",
        cities: ["Achalpur", "Aheri", "Ahmadnagar Cantonment", "Ahmadpur", "Ahmednagar", "Ajra", "Akalkot", "Akkalkuwa", "Akola", "Akot", "Alandi", "Alibag", "Allapalli", "Alore", "Amalner", "Ambad", "Ambajogai", "Ambernath", "Ambivali Tarf Wankhal", "Amgaon", "Amravati", "Anjangaon", "Arvi", "Ashta", "Ashti", "Aurangabad", "Aurangabad Cantonment", "Ausa", "Babhulgaon", "Badlapur", "Balapur", "Ballarpur", "Baramati", "Barshi", "Basmat", "Beed", "Bhadravati", "Bhagur", "Bhandara", "Bhigvan", "Bhingar", "Bhiwandi", "Bhokhardan", "Bhor", "Bhosari", "Bhum", "Bhusawal", "Bid", "Biloli", "Birwadi", "Boisar", "Bop Khel", "Brahmapuri", "Budhgaon", "Buldana", "Buldhana", "Butibori", "Chakan", "Chalisgaon", "Chandrapur", "Chandur", "Chandur Bazar", "Chandvad", "Chicholi", "Chikhala", "Chikhaldara", "Chikhli", "Chinchani", "Chinchwad", "Chiplun", "Chopda", "Dabhol", "Dahance", "Dahanu", "Daharu", "Dapoli Camp", "Darwa", "Daryapur", "Dattapur", "Daund", "Davlameti", "Deglur", "Dehu Road", "Deolali", "Deolali Pravara", "Deoli", "Desaiganj", "Deulgaon Raja", "Dewhadi", "Dharangaon", "Dharmabad", "Dharur", "Dhatau", "Dhule", "Digdoh", "Diglur", "Digras", "Dombivli", "Dondaicha", "Dudhani", "Durgapur", "Dyane", "Edandol", "Eklahare", "Faizpur", "Fekari", "Gadchiroli", "Gadhinghaj", "Gandhi Nagar", "Ganeshpur", "Gangakher", "Gangapur", "Gevrai", "Ghatanji", "Ghoti", "Ghugus", "Ghulewadi", "Godoli", "Gondia", "Guhagar", "Hadgaon", "Harnai Beach", "Hinganghat", "Hingoli", "Hupari", "Ichalkaranji", "Igatpuri", "Indapur", "Jaisinghpur", "Jalgaon", "Jalna", "Jamkhed", "Jawhar", "Jaysingpur", "Jejuri", "Jintur", "Junnar", "Kabnur", "Kagal", "Kalamb", "Kalamnuri", "Kalas", "Kalmeshwar", "Kalundre", "Kalyan", "Kamthi", "Kamthi Cantonment", "Kandari", "Kandhar", "Kandri", "Kandri II", "Kanhan", "Kankavli", "Kannad", "Karad", "Karanja", "Karanje Tarf", "Karivali", "Karjat", "Karmala", "Kasara Budruk", "Katai", "Katkar", "Katol", "Kegaon", "Khadkale", "Khadki", "Khamgaon", "Khapa", "Kharadi", "Kharakvasla", "Khed", "Kherdi", "Khoni", "Khopoli", "Khuldabad", "Kinwat", "Kodoli", "Kolhapur", "Kon", "Kondumal", "Kopargaon", "Kopharad", "Koradi", "Koregaon", "Korochi", "Kudal", "Kundaim", "Kundalwadi", "Kurandvad", "Kurduvadi", "Kusgaon Budruk", "Lanja", "Lasalgaon", "Latur", "Loha", "Lohegaon", "Lonar", "Lonavala", "Madhavnagar", "Mahabaleshwar", "Mahad", "Mahadula", "Maindargi", "Majalgaon", "Malegaon", "Malgaon", "Malkapur", "Malwan", "Manadur", "Manchar", "Mangalvedhe", "Mangrul Pir", "Manmad", "Manor", "Mansar", "Manwath", "Mapuca", "Matheran", "Mehkar", "Mhasla", "Mhaswad", "Mira Bhayandar", "Miraj", "Mohpa", "Mohpada", "Moram", "Morshi", "Mowad", "Mudkhed", "Mukhed", "Mul", "Mulshi", "Mumbai", "Murbad", "Murgud", "Murtijapur", "Murud", "Nachane", "Nagardeole", "Nagothane", "Nagpur", "Nakoda", "Nalasopara", "Naldurg", "Nanded", "Nandgaon", "Nandura", "Nandurbar", "Narkhed", "Nashik", "Navapur", "Navi Mumbai", "Navi Mumbai Panvel", "Neral", "Nigdi", "Nilanga", "Nildoh", "Nimbhore", "Ojhar", "Osmanabad", "Pachgaon", "Pachora", "Padagha", "Paithan", "Palghar", "Pali", "Panchgani", "Pandhakarwada", "Pandharpur", "Panhala", "Panvel", "Paranda", "Parbhani", "Parli", "Parola", "Partur", "Pasthal", "Patan", "Pathardi", "Pathri", "Patur", "Pawni", "Pen", "Pethumri", "Phaltan", "Pimpri", "Poladpur", "Pulgaon", "Pune", "Pune Cantonment", "Purna", "Purushottamnagar", "Pusad", "Rahimatpur", "Rahta Pimplas", "Rahuri", "Raigad", "Rajapur", "Rajgurunagar", "Rajur", "Rajura", "Ramtek", "Ratnagiri", "Ravalgaon", "Raver", "Revadanda", "Risod", "Roha Ashtami", "Sakri", "Sandor", "Sangamner", "Sangli", "Sangole", "Sasti", "Sasvad", "Satana", "Satara", "Savantvadi", "Savda", "Savner", "Sawari Jawharnagar", "Selu", "Shahada", "Shahapur", "Shegaon", "Shelar", "Shendurjana", "Shirdi", "Shirgaon", "Shirpur", "Shirur", "Shirwal", "Shivatkar", "Shrigonda", "Shrirampur", "Shrirampur Rural", "Sillewada", "Sillod", "Sindhudurg", "Sindi", "Sindi Turf Hindnagar", "Sindkhed Raja", "Singnapur", "Sinnar", "Sirur", "Sitasawangi", "Solapur", "Sonai", "Sonegaon", "Soyagaon", "Srivardhan", "Surgana", "Talegaon Dabhade", "Taloda", "Taloja", "Talwade", "Tarapur", "Tasgaon", "Tathavade", "Tekadi", "Telhara", "Thane", "Tirira", "Totaladoh", "Trimbak", "Tuljapur", "Tumsar", "Uchgaon", "Udgir", "Ulhasnagar", "Umarga", "Umarkhed", "Umarsara", "Umbar Pada Nandade", "Umred", "Umri Pragane Balapur", "Uran", "Uran Islampur", "Utekhol", "Vada", "Vadgaon", "Vadgaon Kasba", "Vaijapur", "Vanvadi", "Varangaon", "Vasai", "Vasantnagar", "Vashind", "Vengurla", "Virar", "Visapur", "Vite", "Vithalwadi", "Wadi", "Waghapur", "Wai", "Wajegaon", "Walani", "Wanadongri", "Wani", "Wardha", "Warora", "Warthi", "Warud", "Washim", "Yaval", "Yavatmal", "Yeola", "Yerkheda"]
      },
      {
        name: "Manipur",
        cities: ["Andro", "Bijoy Govinda", "Bishnupur", "Churachandpur", "Heriok", "Imphal", "Jiribam", "Kakching", "Kakching Khunou", "Khongman", "Kumbi", "Kwakta", "Lamai", "Lamjaotongba", "Lamshang", "Lilong", "Mayang Imphal", "Moirang", "Moreh", "Nambol", "Naoriya Pakhanglakpa", "Ningthoukhong", "Oinam", "Porompat", "Samurou", "Sekmai Bazar", "Senapati", "Sikhong Sekmai", "Sugnu", "Thongkhong Laxmi Bazar", "Thoubal", "Torban", "Wangjing", "Wangoi", "Yairipok"]
      },
      {
        name: "Meghalaya",
        cities: ["Baghmara", "Cherrapunji", "Jawai", "Madanrting", "Mairang", "Mawlai", "Nongmynsong", "Nongpoh", "Nongstoin", "Nongthymmai", "Pynthorumkhrah", "Resubelpara", "Shillong", "Shillong Cantonment", "Tura", "Williamnagar"]
      },
      {
        name: "Mizoram",
        cities: ["Aizawl", "Bairabi", "Biate", "Champhai", "Darlawn", "Hnahthial", "Kawnpui", "Khawhai", "Khawzawl", "Kolasib", "Lengpui", "Lunglei", "Mamit", "North Vanlaiphai", "Saiha", "Sairang", "Saitul", "Serchhip", "Thenzawl", "Tlabung", "Vairengte", "Zawlnuam"]
      },
      {
        name: "Nagaland",
        cities: ["Chumukedima", "Dimapur", "Kohima", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"]
      },
      {
        name: "Narora",
        cities: []
      },
      {
        name: "Natwar",
        cities: []
      },
      {
        name: "Odisha",
        cities: ["Anandapur", "Angul", "Aska", "Athgarh", "Athmallik", "Balagoda", "Balangir", "Balasore", "Baleshwar", "Balimeta", "Balugaon", "Banapur", "Bangura", "Banki", "Banposh", "Barbil", "Bargarh", "Baripada", "Barpali", "Basudebpur", "Baudh", "Belagachhia", "Belaguntha", "Belpahar", "Berhampur", "Bhadrak", "Bhanjanagar", "Bhawanipatna", "Bhuban", "Bhubaneswar", "Binika", "Birmitrapur", "Bishama Katek", "Bolangir", "Brahmapur", "Brajrajnagar", "Buguda", "Burla", "Byasanagar", "Champua", "Chandapur", "Chandbali", "Chandili", "Charibatia", "Chatrapur", "Chikitigarh", "Chitrakonda", "Choudwar", "Cuttack", "Dadhapatna", "Daitari", "Damanjodi", "Deogarh", "Deracolliery", "Dhamanagar", "Dhenkanal", "Digapahandi", "Dungamal", "Fertilizer Corporation of Indi", "Ganjam", "Ghantapada", "Gopalpur", "Gudari", "Gunupur", "Hatibandha", "Hinjilikatu", "Hirakud", "Jagatsinghapur", "Jajpur", "Jalda", "Jaleswar", "Jatni", "Jaypur", "Jeypore", "Jharsuguda", "Jhumpura", "Joda", "Junagarh", "Kamakhyanagar", "Kantabanji", "Kantilo", "Karanja", "Kashinagara", "Kataka", "Kavisuryanagar", "Kendrapara", "Kendujhar", "Keonjhar", "Kesinga", "Khaliapali", "Khalikote", "Khandaparha", "Kharhial", "Kharhial Road", "Khatiguda", "Khurda", "Kochinda", "Kodala", "Konark", "Koraput", "Kotaparh", "Lanjigarh", "Lattikata", "Makundapur", "Malkangiri", "Mukhiguda", "Nabarangpur", "Nalco", "Naurangapur", "Nayagarh", "Nilagiri", "Nimaparha", "Nuapada", "Nuapatna", "OCL Industrialship", "Padampur", "Paradip", "Paradwip", "Parlakimidi", "Patamundai", "Patnagarh", "Phulabani", "Pipili", "Polasara", "Pratapsasan", "Puri", "Purushottampur", "Rairangpur", "Raj Gangpur", "Rambha", "Raurkela", "Raurkela Civil Township", "Rayagada", "Redhakhol", "Remuna", "Rengali", "Rourkela", "Sambalpur", "Sinapali", "Sonepur", "Sorada", "Soro", "Sunabeda", "Sundargarh", "Talcher", "Talcher Thermal Power Station", "Tarabha", "Tensa", "Titlagarh", "Udala", "Udayagiri", "Umarkot", "Vikrampur"]
      },
      {
        name: "Paschim Medinipur",
        cities: []
      },
      {
        name: "Pondicherry",
        cities: ["Ariankuppam", "Karaikal", "Kurumbapet", "Mahe", "Ozhukarai", "Pondicherry", "Villianur", "Yanam"]
      },
      {
        name: "Punjab",
        cities: ["Abohar", "Adampur", "Ahmedgarh", "Ajnala", "Akalgarh", "Alawalpur", "Amloh", "Amritsar", "Amritsar Cantonment", "Anandpur Sahib", "Badhni Kalan", "Bagh Purana", "Balachaur", "Banaur", "Banga", "Banur", "Baretta", "Bariwala", "Barnala", "Bassi Pathana", "Batala", "Bathinda", "Begowal", "Behrampur", "Bhabat", "Bhadur", "Bhankharpur", "Bharoli Kalan", "Bhawanigarh", "Bhikhi", "Bhikhiwind", "Bhisiana", "Bhogpur", "Bhuch", "Bhulath", "Budha Theh", "Budhlada", "Chima", "Chohal", "Dasuya", "Daulatpur", "Dera Baba Nanak", "Dera Bassi", "Dhanaula", "Dharam Kot", "Dhariwal", "Dhilwan", "Dhuri", "Dinanagar", "Dirba", "Doraha", "Faridkot", "Fateh Nangal", "Fatehgarh Churian", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Firozpur Cantonment", "Gardhiwala", "Garhshankar", "Ghagga", "Ghanaur", "Giddarbaha", "Gobindgarh", "Goniana", "Goraya", "Gurdaspur", "Guru Har Sahai", "Hajipur", "Handiaya", "Hariana", "Hoshiarpur", "Hussainpur", "Jagraon", "Jaitu", "Jalalabad", "Jalandhar", "Jalandhar Cantonment", "Jandiala", "Jugial", "Kalanaur", "Kapurthala", "Karoran", "Kartarpur", "Khamanon", "Khanauri", "Khanna", "Kharar", "Khem Karan", "Kot Fatta", "Kot Isa Khan", "Kot Kapura", "Kotkapura", "Kurali", "Lalru", "Lehra Gaga", "Lodhian Khas", "Longowal", "Ludhiana", "Machhiwara", "Mahilpur", "Majitha", "Makhu", "Malaut", "Malerkotla", "Maloud", "Mandi Gobindgarh", "Mansa", "Maur", "Moga", "Mohali", "Moonak", "Morinda", "Mukerian", "Muktsar", "Mullanpur Dakha", "Mullanpur Garibdas", "Munak", "Muradpura", "Nabha", "Nakodar", "Nangal", "Nawashahr", "Naya Nangal", "Nehon", "Nurmahal", "Pathankot", "Patiala", "Patti", "Pattran", "Payal", "Phagwara", "Phillaur", "Qadian", "Rahon", "Raikot", "Raja Sansi", "Rajpura", "Ram Das", "Raman", "Rampura", "Rayya", "Rupnagar", "Rurki Kasba", "Sahnewal", "Samana", "Samrala", "Sanaur", "Sangat", "Sangrur", "Sansarpur", "Sardulgarh", "Shahkot", "Sham Churasi", "Shekhpura", "Sirhind", "Sri Hargobindpur", "Sujanpur", "Sultanpur Lodhi", "Sunam", "Talwandi Bhai", "Talwara", "Tappa", "Tarn Taran", "Urmar Tanda", "Zira", "Zirakpur"]
      },
      {
        name: "Rajasthan",
        cities: ["Abu Road", "Ajmer", "Aklera", "Alwar", "Amet", "Antah", "Anupgarh", "Asind", "Bagar", "Bagru", "Bahror", "Bakani", "Bali", "Balotra", "Bandikui", "Banswara", "Baran", "Bari", "Bari Sadri", "Barmer", "Basi", "Basni Belima", "Baswa", "Bayana", "Beawar", "Begun", "Bhadasar", "Bhadra", "Bhalariya", "Bharatpur", "Bhasawar", "Bhawani Mandi", "Bhawri", "Bhilwara", "Bhindar", "Bhinmal", "Bhiwadi", "Bijoliya Kalan", "Bikaner", "Bilara", "Bissau", "Borkhera", "Budhpura", "Bundi", "Chatsu", "Chechat", "Chhabra", "Chhapar", "Chhipa Barod", "Chhoti Sadri", "Chirawa", "Chittaurgarh", "Chittorgarh", "Chomun", "Churu", "Daosa", "Dariba", "Dausa", "Deoli", "Deshnok", "Devgarh", "Devli", "Dhariawad", "Dhaulpur", "Dholpur", "Didwana", "Dig", "Dungargarh", "Dungarpur", "Falna", "Fatehnagar", "Fatehpur", "Gajsinghpur", "Galiakot", "Ganganagar", "Gangapur", "Goredi Chancha", "Gothra", "Govindgarh", "Gulabpura", "Hanumangarh", "Hindaun", "Indragarh", "Jahazpur", "Jaipur", "Jaisalmer", "Jaiselmer", "Jaitaran", "Jalore", "Jhalawar", "Jhalrapatan", "Jhunjhunun", "Jobner", "Jodhpur", "Kaithun", "Kaman", "Kankroli", "Kanor", "Kapasan", "Kaprain", "Karanpura", "Karauli", "Kekri", "Keshorai Patan", "Kesrisinghpur", "Khairthal", "Khandela", "Khanpur", "Kherli", "Kherliganj", "Kherwara Chhaoni", "Khetri", "Kiranipura", "Kishangarh", "Kishangarh Ranwal", "Kolvi Rajendrapura", "Kot Putli", "Kota", "Kuchaman", "Kuchera", "Kumbhalgarh", "Kumbhkot", "Kumher", "Kushalgarh", "Lachhmangarh", "Ladnun", "Lakheri", "Lalsot", "Losal", "Madanganj", "Mahu Kalan", "Mahwa", "Makrana", "Malpura", "Mandal", "Mandalgarh", "Mandawar", "Mandwa", "Mangrol", "Manohar Thana", "Manoharpur", "Marwar", "Merta", "Modak", "Mount Abu", "Mukandgarh", "Mundwa", "Nadbai", "Naenwa", "Nagar", "Nagaur", "Napasar", "Naraina", "Nasirabad", "Nathdwara", "Nawa", "Nawalgarh", "Neem Ka Thana", "Neemrana", "Newa Talai", "Nimaj", "Nimbahera", "Niwai", "Nohar", "Nokha", "One SGM", "Padampur", "Pali", "Partapur", "Parvatsar", "Pasoond", "Phalna", "Phalodi", "Phulera", "Pilani", "Pilibanga", "Pindwara", "Pipalia Kalan", "Pipar", "Pirawa", "Pokaran", "Pratapgarh", "Pushkar", "Raipur", "Raisinghnagar", "Rajakhera", "Rajaldesar", "Rajgarh", "Rajsamand", "Ramganj Mandi", "Ramgarh", "Rani", "Raniwara", "Ratan Nagar", "Ratangarh", "Rawatbhata", "Rawatsar", "Rikhabdev", "Ringas", "Sadri", "Sadulshahar", "Sagwara", "Salumbar", "Sambhar", "Samdari", "Sanchor", "Sangariya", "Sangod", "Sardarshahr", "Sarwar", "Satal Kheri", "Sawai Madhopur", "Sewan Kalan", "Shahpura", "Sheoganj", "Sikar", "Sirohi", "Siwana", "Sogariya", "Sojat", "Sojat Road", "Sri Madhopur", "Sriganganagar", "Sujangarh", "Suket", "Sumerpur", "Sunel", "Surajgarh", "Suratgarh", "Swaroopganj", "Takhatgarh", "Taranagar", "Three STR", "Tijara", "Toda Bhim", "Toda Raisingh", "Todra", "Tonk", "Udaipur", "Udpura", "Uniara", "Vanasthali", "Vidyavihar", "Vijainagar", "Viratnagar", "Wer"]
      },
      {
        name: "Sikkim",
        cities: ["Gangtok", "Gezing", "Jorethang", "Mangan", "Namchi", "Naya Bazar", "No City", "Rangpo", "Sikkim", "Singtam", "Upper Tadong"]
      },
      {
        name: "Tamil Nadu",
        cities: ["Abiramam", "Achampudur", "Acharapakkam", "Acharipallam", "Achipatti", "Adikaratti", "Adiramapattinam", "Aduturai", "Adyar", "Agaram", "Agasthiswaram", "Akkaraipettai", "Alagappapuram", "Alagapuri", "Alampalayam", "Alandur", "Alanganallur", "Alangayam", "Alangudi", "Alangulam", "Alanthurai", "Alapakkam", "Allapuram", "Alur", "Alwar Tirunagari", "Alwarkurichi", "Ambasamudram", "Ambur", "Ammainaickanur", "Ammaparikuppam", "Ammapettai", "Ammavarikuppam", "Ammur", "Anaimalai", "Anaiyur", "Anakaputhur", "Ananthapuram", "Andanappettai", "Andipalayam", "Andippatti", "Anjugramam", "Annamalainagar", "Annavasal", "Annur", "Anthiyur", "Appakudal", "Arachalur", "Arakandanallur", "Arakonam", "Aralvaimozhi", "Arani", "Arani Road", "Arantangi", "Arasiramani", "Aravakurichi", "Aravankadu", "Arcot", "Arimalam", "Ariyalur", "Ariyappampalayam", "Ariyur", "Arni", "Arulmigu Thirumuruganpundi", "Arumanai", "Arumbavur", "Arumuganeri", "Aruppukkottai", "Ashokapuram", "Athani", "Athanur", "Athimarapatti", "Athipattu", "Athur", "Attayyampatti", "Attur", "Auroville", "Avadattur", "Avadi", "Avalpundurai", "Avaniapuram", "Avinashi", "Ayakudi", "Ayanadaippu", "Aygudi", "Ayothiapattinam", "Ayyalur", "Ayyampalayam", "Ayyampettai", "Azhagiapandiapuram", "Balakrishnampatti", "Balakrishnapuram", "Balapallam", "Balasamudram", "Bargur", "Belur", "Berhatty", "Bhavani", "Bhawanisagar", "Bhuvanagiri", "Bikketti", "Bodinayakkanur", "Brahmana Periya Agraharam", "Buthapandi", "Buthipuram", "Chatrapatti", "Chembarambakkam", "Chengalpattu", "Chengam", "Chennai", "Chennasamudram", "Chennimalai", "Cheranmadevi", "Cheruvanki", "Chetpet", "Chettiarpatti", "Chettipalaiyam", "Chettipalayam Cantonment", "Chettithangal", "Cheyur", "Cheyyar", "Chidambaram", "Chinalapatti", "Chinna Anuppanadi", "Chinna Salem", "Chinnakkampalayam", "Chinnammanur", "Chinnampalaiyam", "Chinnasekkadu", "Chinnavedampatti", "Chitlapakkam", "Chittodu", "Cholapuram", "Coimbatore", "Coonoor", "Courtalam", "Cuddalore", "Dalavaipatti", "Darasuram", "Denkanikottai", "Desur", "Devadanapatti", "Devakkottai", "Devakottai", "Devanangurichi", "Devarshola", "Devasthanam", "Dhalavoipuram", "Dhali", "Dhaliyur", "Dharapadavedu", "Dharapuram", "Dharmapuri", "Dindigul", "Dusi", "Edaganasalai", "Edaikodu", "Edakalinadu", "Elathur", "Elayirampannai", "Elumalai", "Eral", "Eraniel", "Eriodu", "Erode", "Erumaipatti", "Eruvadi", "Ethapur", "Ettaiyapuram", "Ettimadai", "Ezhudesam", "Ganapathipuram", "Gandhi Nagar", "Gangaikondan", "Gangavalli", "Ganguvarpatti", "Gingi", "Gopalasamudram", "Gopichettipalaiyam", "Gudalur", "Gudiyattam", "Guduvanchery", "Gummidipoondi", "Hanumanthampatti", "Harur", "Harveypatti", "Highways", "Hosur", "Hubbathala", "Huligal", "Idappadi", "Idikarai", "Ilampillai", "Ilanji", "Iluppaiyurani", "Iluppur", "Inam Karur", "Injambakkam", "Irugur", "Jaffrabad", "Jagathala", "Jalakandapuram", "Jalladiampet", "Jambai", "Jayankondam", "Jolarpet", "Kadambur", "Kadathur", "Kadayal", "Kadayampatti", "Kadayanallur", "Kadiapatti", "Kalakkad", "Kalambur", "Kalapatti", "Kalappanaickenpatti", "Kalavai", "Kalinjur", "Kaliyakkavilai", "Kallakkurichi", "Kallakudi", "Kallidaikurichchi", "Kallukuttam", "Kallupatti", "Kalpakkam", "Kalugumalai", "Kamayagoundanpatti", "Kambainallur", "Kambam", "Kamuthi", "Kanadukathan", "Kanakkampalayam", "Kanam", "Kanchipuram", "Kandanur", "Kangayam", "Kangayampalayam", "Kangeyanallur", "Kaniyur", "Kanjikoil", "Kannadendal", "Kannamangalam", "Kannampalayam", "Kannankurichi", "Kannapalaiyam", "Kannivadi", "Kanyakumari", "Kappiyarai", "Karaikkudi", "Karamadai", "Karambakkam", "Karambakkudi", "Kariamangalam", "Kariapatti", "Karugampattur", "Karumandi Chellipalayam", "Karumathampatti", "Karumbakkam", "Karungal", "Karunguzhi", "Karuppur", "Karur", "Kasipalaiyam", "Kasipalayam G", "Kathirvedu", "Kathujuganapalli", "Katpadi", "Kattivakkam", "Kattumannarkoil", "Kattupakkam", "Kattuputhur", "Kaveripakkam", "Kaveripattinam", "Kavundampalaiyam", "Kavundampalayam", "Kayalpattinam", "Kayattar", "Kelamangalam", "Kelambakkam", "Kembainaickenpalayam", "Kethi", "Kilakarai", "Kilampadi", "Kilkulam", "Kilkunda", "Killiyur", "Killlai", "Kilpennathur", "Kilvelur", "Kinathukadavu", "Kiramangalam", "Kiranur", "Kiripatti", "Kizhapavur", "Kmarasamipatti", "Kochadai", "Kodaikanal", "Kodambakkam", "Kodavasal", "Kodumudi", "Kolachal", "Kolappalur", "Kolathupalayam", "Kolathur", "Kollankodu", "Kollankoil", "Komaralingam", "Komarapalayam", "Kombai", "Konakkarai", "Konavattam", "Kondalampatti", "Konganapuram", "Koradacheri", "Korampallam", "Kotagiri", "Kothinallur", "Kottaiyur", "Kottakuppam", "Kottaram", "Kottivakkam", "Kottur", "Kovilpatti", "Koyampattur", "Krishnagiri", "Krishnarayapuram", "Krishnasamudram", "Kuchanur", "Kuhalur", "Kulasekarappattinam", "Kulasekarapuram", "Kulithalai", "Kumarapalaiyam", "Kumarapalayam", "Kumarapuram", "Kumbakonam", "Kundrathur", "Kuniyamuthur", "Kunnathur", "Kunur", "Kuraikundu", "Kurichi", "Kurinjippadi", "Kurudampalaiyam", "Kurumbalur", "Kuthalam", "Kuthappar", "Kuttalam", "Kuttanallur", "Kuzhithurai", "Labbaikudikadu", "Lakkampatti", "Lalgudi", "Lalpet", "Llayangudi", "Madambakkam", "Madanur", "Madathukulam", "Madhavaram", "Madippakkam", "Madukkarai", "Madukkur", "Madurai", "Maduranthakam", "Maduravoyal", "Mahabalipuram", "Makkinanpatti", "Mallamuppampatti", "Mallankinaru", "Mallapuram", "Mallasamudram", "Mallur", "Mamallapuram", "Mamsapuram", "Manachanallur", "Manali", "Manalmedu", "Manalurpet", "Manamadurai", "Manapakkam", "Manapparai", "Manavalakurichi", "Mandaikadu", "Mandapam", "Mangadu", "Mangalam", "Mangalampet", "Manimutharu", "Mannargudi", "Mappilaiurani", "Maraimalai Nagar", "Marakkanam", "Maramangalathupatti", "Marandahalli", "Markayankottai", "Marudur", "Marungur", "Masinigudi", "Mathigiri", "Mattur", "Mayiladuthurai", "Mecheri", "Melacheval", "Melachokkanathapuram", "Melagaram", "Melamadai", "Melamaiyur", "Melanattam", "Melathiruppanthuruthi", "Melattur", "Melmananbedu", "Melpattampakkam", "Melur", "Melvisharam", "Mettupalayam", "Mettur", "Meyyanur", "Milavittan", "Minakshipuram", "Minambakkam", "Minjur", "Modakurichi", "Mohanur", "Mopperipalayam", "Mudalur", "Mudichur", "Mudukulathur", "Mukasipidariyur", "Mukkudal", "Mulagumudu", "Mulakaraipatti", "Mulanur", "Mullakkadu", "Muruganpalayam", "Musiri", "Muthupet", "Muthur", "Muttayyapuram", "Muttupet", "Muvarasampettai", "Myladi", "Mylapore", "Nadukkuthagai", "Naduvattam", "Nagapattinam", "Nagavakulam", "Nagercoil", "Nagojanahalli", "Nallampatti", "Nallur", "Namagiripettai", "Namakkal", "Nambiyur", "Nambutalai", "Nandambakkam", "Nandivaram", "Nangavalli", "Nangavaram", "Nanguneri", "Nanjikottai", "Nannilam", "Naranammalpuram", "Naranapuram", "Narasimhanaickenpalayam", "Narasingapuram", "Narasojipatti", "Naravarikuppam", "Nasiyanur", "Natham", "Nathampannai", "Natrampalli", "Nattam", "Nattapettai", "Nattarasankottai", "Navalpattu", "Nazarethpettai", "Nazerath", "Neikkarapatti", "Neiyyur", "Nellikkuppam", "Nelliyalam", "Nemili", "Nemilicheri", "Neripperichal", "Nerkunram", "Nerkuppai", "Nerunjipettai", "Neykkarappatti", "Neyveli", "Nidamangalam", "Nilagiri", "Nilakkottai", "Nilankarai", "Odaipatti", "Odaiyakulam", "Oddanchatram", "Odugathur", "Oggiyamduraipakkam", "Olagadam", "Omalur", "Ooty", "Orathanadu", "Othakadai", "Othakalmandapam", "Ottapparai", "Pacode", "Padaividu", "Padianallur", "Padirikuppam", "Padmanabhapuram", "Padririvedu", "Palaganangudy", "Palaimpatti", "Palakkodu", "Palamedu", "Palani", "Palani Chettipatti", "Palavakkam", "Palavansathu", "Palayakayal", "Palayam", "Palayamkottai", "Palladam", "Pallapalayam", "Pallapatti", "Pallattur", "Pallavaram", "Pallikaranai", "Pallikonda", "Pallipalaiyam", "Pallipalaiyam Agraharam", "Pallipattu", "Pammal", "Panagudi", "Panaimarathupatti", "Panapakkam", "Panboli", "Pandamangalam", "Pannaikadu", "Pannaipuram", "Pannuratti", "Panruti", "Papanasam", "Pappankurichi", "Papparapatti", "Pappireddipatti", "Paramakkudi", "Paramankurichi", "Paramathi", "Parangippettai", "Paravai", "Pasur", "Pathamadai", "Pattinam", "Pattiviranpatti", "Pattukkottai", "Pazhugal", "Pennadam", "Pennagaram", "Pennathur", "Peraiyur", "Peralam", "Perambalur", "Peranamallur", "Peravurani", "Periyakodiveri", "Periyakulam", "Periyanayakkanpalaiyam", "Periyanegamam", "Periyapatti", "Periyasemur", "Pernambut", "Perumagalur", "Perumandi", "Perumuchi", "Perundurai", "Perungalathur", "Perungudi", "Perungulam", "Perur", "Perur Chettipalaiyam", "Pethampalayam", "Pethanaickenpalayam", "Pillanallur", "Pirkankaranai", "Polichalur", "Pollachi", "Polur", "Ponmani", "Ponnamaravathi", "Ponnampatti", "Ponneri", "Porur", "Pothanur", "Pothatturpettai", "Pudukadai", "Pudukkottai Cantonment", "Pudukottai", "Pudupalaiyam Aghraharam", "Pudupalayam", "Pudupatti", "Pudupattinam", "Pudur", "Puduvayal", "Pulambadi", "Pulampatti", "Puliyampatti", "Puliyankudi", "Puliyur", "Pullampadi", "Puluvapatti", "Punamalli", "Punjai Puliyampatti", "Punjai Thottakurichi", "Punjaipugalur", "Puthalam", "Putteri", "Puvalur", "Puzhal", "Puzhithivakkam", "Rajapalayam", "Ramanathapuram", "Ramapuram", "Rameswaram", "Ranipet", "Rasipuram", "Rayagiri", "Rithapuram", "Rosalpatti", "Rudravathi", "Sadayankuppam", "Saint Thomas Mount", "Salangapalayam", "Salem", "Samalapuram", "Samathur", "Sambavar Vadagarai", "Sankaramanallur", "Sankarankoil", "Sankarapuram", "Sankari", "Sankarnagar", "Saravanampatti", "Sarcarsamakulam", "Sathiyavijayanagaram", "Sathuvachari", "Sathyamangalam", "Sattankulam", "Sattur", "Sayalgudi", "Sayapuram", "Seithur", "Sembakkam", "Semmipalayam", "Sennirkuppam", "Senthamangalam", "Sentharapatti", "Senur", "Sethiathoppu", "Sevilimedu", "Sevugampatti", "Shenbakkam", "Shencottai", "Shenkottai", "Sholavandan", "Sholinganallur", "Sholingur", "Sholur", "Sikkarayapuram", "Singampuneri", "Singanallur", "Singaperumalkoil", "Sirapalli", "Sirkali", "Sirugamani", "Sirumugai", "Sithayankottai", "Sithurajapuram", "Sivaganga", "Sivagiri", "Sivakasi", "Sivanthipuram", "Sivur", "Soranjeri", "South Kannanur", "South Kodikulam", "Srimushnam", "Sriperumpudur", "Sriramapuram", "Srirangam", "Srivaikuntam", "Srivilliputtur", "Suchindram", "Suliswaranpatti", "Sulur", "Sundarapandiam", "Sundarapandiapuram", "Surampatti", "Surandai", "Suriyampalayam", "Swamimalai", "TNPL Pugalur", "Tambaram", "Taramangalam", "Tattayyangarpettai", "Tayilupatti", "Tenkasi", "Thadikombu", "Thakkolam", "Thalainayar", "Thalakudi", "Thamaraikulam", "Thammampatti", "Thanjavur", "Thanthoni", "Tharangambadi", "Thedavur", "Thenambakkam", "Thengampudur", "Theni", "Theni Allinagaram", "Thenkarai", "Thenthamaraikulam", "Thenthiruperai", "Thesur", "Thevaram", "Thevur", "Thiagadurgam", "Thiagarajar Colony", "Thingalnagar", "Thiruchirapalli", "Thirukarungudi", "Thirukazhukundram", "Thirumalayampalayam", "Thirumazhisai", "Thirunagar", "Thirunageswaram", "Thirunindravur", "Thirunirmalai", "Thiruparankundram", "Thiruparappu", "Thiruporur", "Thiruppanandal", "Thirupuvanam", "Thiruthangal", "Thiruthuraipundi", "Thiruvaivaru", "Thiruvalam", "Thiruvarur", "Thiruvattaru", "Thiruvenkatam", "Thiruvennainallur", "Thiruvithankodu", "Thisayanvilai", "Thittacheri", "Thondamuthur", "Thorapadi", "Thottipalayam", "Thottiyam", "Thudiyalur", "Thuthipattu", "Thuvakudi", "Timiri", "Tindivanam", "Tinnanur", "Tiruchchendur", "Tiruchengode", "Tirukkalukkundram", "Tirukkattuppalli", "Tirukkoyilur", "Tirumangalam", "Tirumullaivasal", "Tirumuruganpundi", "Tirunageswaram", "Tirunelveli", "Tirupathur", "Tirupattur", "Tiruppuvanam", "Tirupur", "Tirusulam", "Tiruttani", "Tiruvallur", "Tiruvannamalai", "Tiruverambur", "Tiruverkadu", "Tiruvethipuram", "Tiruvidaimarudur", "Tiruvottiyur", "Tittakudi", "Tondi", "Turaiyur", "Tuticorin", "Udagamandalam", "Udagamandalam Valley", "Udankudi", "Udayarpalayam", "Udumalaipettai", "Udumalpet", "Ullur", "Ulundurpettai", "Unjalaur", "Unnamalaikadai", "Uppidamangalam", "Uppiliapuram", "Urachikkottai", "Urapakkam", "Usilampatti", "Uthangarai", "Uthayendram", "Uthiramerur", "Uthukkottai", "Uttamapalaiyam", "Uttukkuli", "Vadakarai Kizhpadugai", "Vadakkanandal", "Vadakku Valliyur", "Vadalur", "Vadamadurai", "Vadavalli", "Vadipatti", "Vadugapatti", "Vaithiswarankoil", "Valangaiman", "Valasaravakkam", "Valavanur", "Vallam", "Valparai", "Valvaithankoshtam", "Vanavasi", "Vandalur", "Vandavasi", "Vandiyur", "Vaniputhur", "Vaniyambadi", "Varadarajanpettai", "Varadharajapuram", "Vasudevanallur", "Vathirairuppu", "Vattalkundu", "Vazhapadi", "Vedapatti", "Vedaranniyam", "Vedasandur", "Velampalaiyam", "Velankanni", "Vellakinar", "Vellakoil", "Vellalapatti", "Vellalur", "Vellanur", "Vellimalai", "Vellore", "Vellottamparappu", "Velluru", "Vengampudur", "Vengathur", "Vengavasal", "Venghatur", "Venkarai", "Vennanthur", "Veppathur", "Verkilambi", "Vettaikaranpudur", "Vettavalam", "Vijayapuri", "Vikramasingapuram", "Vikravandi", "Vilangudi", "Vilankurichi", "Vilapakkam", "Vilathikulam", "Vilavur", "Villukuri", "Villupuram", "Viraganur", "Virakeralam", "Virakkalpudur", "Virapandi", "Virapandi Cantonment", "Virappanchatram", "Viravanallur", "Virudambattu", "Virudhachalam", "Virudhunagar", "Virupakshipuram", "Viswanatham", "Vriddhachalam", "Walajabad", "Walajapet", "Wellington", "Yercaud", "Zamin Uthukuli"]
      },
      {
        name: "Telangana",
        cities: ["Achampet", "Adilabad", "Armoor", "Asifabad", "Badepally", "Banswada", "Bellampalli", "Bhadrachalam", "Bhainsa", "Bhongir", "Bhupalpally", "Bodhan", "Bollaram", "Devarkonda", "Farooqnagar", "Gadwal", "Gajwel", "Ghatkesar", "Hyderabad", "Jagtial", "Jangaon", "Kagaznagar", "Kalwakurthy", "Kamareddy", "Karimnagar", "Khammam", "Kodada", "Koratla", "Kottagudem", "Kyathampalle", "Madhira", "Mahabubabad", "Mahbubnagar", "Mancherial", "Mandamarri", "Manuguru", "Medchal", "Miryalaguda", "Nagar Karnul", "Nakrekal", "Nalgonda", "Narayanpet", "Narsampet", "Nirmal", "Nizamabad", "Palwancha", "Peddapalli", "Ramagundam", "Ranga Reddy district", "Sadasivpet", "Sangareddy", "Sarapaka", "Sathupalle", "Secunderabad", "Siddipet", "Singapur", "Sircilla", "Suryapet", "Tandur", "Vemulawada", "Vikarabad", "Wanaparthy", "Warangal", "Yellandu", "Zahirabad"]
      },
      {
        name: "Tripura",
        cities: ["Agartala", "Amarpur", "Ambassa", "Badharghat", "Belonia", "Dharmanagar", "Gakulnagar", "Gandhigram", "Indranagar", "Jogendranagar", "Kailasahar", "Kamalpur", "Kanchanpur", "Khowai", "Kumarghat", "Kunjaban", "Narsingarh", "Pratapgarh", "Ranir Bazar", "Sabrum", "Sonamura", "Teliamura", "Udaipur"]
      },
      {
        name: "Uttar Pradesh",
        cities: ["Achhalda", "Achhnera", "Adari", "Afzalgarh", "Agarwal Mandi", "Agra", "Agra Cantonment", "Ahraura", "Ailum", "Air Force Area", "Ajhuwa", "Akbarpur", "Alapur", "Aliganj", "Aligarh", "Allahabad", "Allahabad Cantonment", "Allahganj", "Amanpur", "Ambahta", "Amethi", "Amila", "Amilo", "Aminagar Sarai", "Aminagar Urf Bhurbaral", "Amraudha", "Amroha", "Anandnagar", "Anpara", "Antu", "Anupshahr", "Aonla", "Armapur Estate", "Ashokpuram", "Ashrafpur Kichhauchha", "Atarra", "Atasu", "Atrauli", "Atraulia", "Auraiya", "Aurangabad", "Aurangabad Bangar", "Auras", "Awagarh", "Ayodhya", "Azamgarh", "Azizpur", "Azmatgarh", "Babarpur Ajitmal", "Baberu", "Babina", "Babrala", "Babugarh", "Bachhiowan", "Bachhraon", "Bad", "Badaun", "Baghpat", "Bah", "Bahadurganj", "Baheri", "Bahjoi", "Bahraich", "Bahsuma", "Bahua", "Bajna", "Bakewar", "Bakiabad", "Baldeo", "Ballia", "Balrampur", "Banat", "Banda", "Bangarmau", "Banki", "Bansdih", "Bansgaon", "Bansi", "Barabanki", "Baragaon", "Baraut", "Bareilly", "Bareilly Cantonment", "Barhalganj", "Barhani", "Barhapur", "Barkhera", "Barsana", "Barva Sagar", "Barwar", "Basti", "Begumabad Budhana", "Behat", "Behta Hajipur", "Bela", "Belthara", "Beniganj", "Beswan", "Bewar", "Bhadarsa", "Bhadohi", "Bhagwantnagar", "Bharatganj", "Bhargain", "Bharthana", "Bharuhana", "Bharwari", "Bhatni Bazar", "Bhatpar Rani", "Bhawan Bahadurnagar", "Bhinga", "Bhojpur Dharampur", "Bhokarhedi", "Bhongaon", "Bhulepur", "Bidhuna", "Bighapur", "Bijnor", "Bijpur", "Bikapur", "Bilari", "Bilaspur", "Bilgram", "Bilhaur", "Bilram", "Bilrayaganj", "Bilsanda", "Bilsi", "Bindki", "Bisalpur", "Bisanda Buzurg", "Bisauli", "Bisharatganj", "Bisokhar", "Biswan", "Bithur", "Budaun", "Bugrasi", "Bulandshahar", "Burhana", "Chail", "Chak Imam Ali", "Chakeri", "Chakia", "Chandauli", "Chandausi", "Chandpur", "Charkhari", "Charthawal", "Chaumuhan", "Chhaprauli", "Chhara Rafatpur", "Chharprauli", "Chhata", "Chhatari", "Chhibramau", "Chhutmalpur", "Chilkana Sultanpur", "Chirgaon", "Chit Baragaon", "Chitrakut Dham", "Chopan", "Choubepur Kalan", "Chunar", "Churk Ghurma", "Colonelganj", "Dadri", "Dalmau", "Dankaur", "Dariyabad", "Dasna", "Dataganj", "Daurala", "Dayal Bagh", "Deoband", "Deoranian", "Deoria", "Dewa", "Dhampur", "Dhanauha", "Dhanauli", "Dhanaura", "Dharoti Khurd", "Dhauratanda", "Dhaurhra", "Dibai", "Dibiyapur", "Dildarnagar Fatehpur", "Do Ghat", "Dohrighat", "Dostpur", "Dudhinagar", "Dulhipur", "Dundwaraganj", "Ekdil", "Erich", "Etah", "Etawah", "Faizabad", "Faizabad Cantonment", "Faizganj", "Farah", "Faridnagar", "Faridpur", "Faridpur Cantonment", "Fariha", "Farrukhabad", "Fatehabad", "Fatehganj Pashchimi", "Fatehganj Purvi", "Fatehgarh", "Fatehpur", "Fatehpur Chaurasi", "Fatehpur Sikri", "Firozabad", "Gajraula", "Ganga Ghat", "Gangapur", "Gangoh", "Ganj Muradabad", "Garautha", "Garhi Pukhta", "Garhmukteshwar", "Gaura Barahaj", "Gauri Bazar", "Gausganj", "Gawan", "Ghatampur", "Ghaziabad", "Ghazipur", "Ghiror", "Ghorawal", "Ghosi", "Ghosia Bazar", "Ghughuli", "Gohand", "Gokul", "Gola Bazar", "Gola Gokarannath", "Gonda", "Gopamau", "Gopiganj", "Gorakhpur", "Gosainganj", "Govardhan", "Greater Noida", "Gulaothi", "Gulariya", "Gulariya Bhindara", "Gunnaur", "Gursahaiganj", "Gursarai", "Gyanpur", "Hafizpur", "Haidergarh", "Haldaur", "Hamirpur", "Handia", "Hapur", "Hardoi", "Harduaganj", "Hargaon", "Hariharpur", "Harraiya", "Hasanpur", "Hasayan", "Hastinapur", "Hata", "Hathras", "Hyderabad", "Ibrahimpur", "Iglas", "Ikauna", "Iltifatganj Bazar", "Indian Telephone Industry Mank", "Islamnagar", "Itaunja", "Itimadpur", "Jagner", "Jahanabad", "Jahangirabad", "Jahangirpur", "Jais", "Jaithara", "Jalalabad", "Jalali", "Jalalpur", "Jalaun", "Jalesar", "Jamshila", "Jangipur", "Jansath", "Jarwal", "Jasrana", "Jaswantnagar", "Jatari", "Jaunpur", "Jewar", "Jhalu", "Jhansi", "Jhansi Cantonment", "Jhansi Railway Settlement", "Jhinjhak", "Jhinjhana", "Jhusi", "Jhusi Kohna", "Jiyanpur", "Joya", "Jyoti Khuria", "Jyotiba Phule Nagar", "Kabrai", "Kachhauna Patseni", "Kachhla", "Kachhwa", "Kadaura", "Kadipur", "Kailashpur", "Kaimganj", "Kairana", "Kakgaina", "Kakod", "Kakori", "Kakrala", "Kalinagar", "Kalpi", "Kamalganj", "Kampil", "Kandhla", "Kandwa", "Kannauj", "Kanpur", "Kant", "Kanth", "Kaptanganj", "Karaon", "Karari", "Karhal", "Karnawal", "Kasganj", "Katariya", "Katghar Lalganj", "Kathera", "Katra", "Katra Medniganj", "Kauriaganj", "Kemri", "Kerakat", "Khadda", "Khaga", "Khailar", "Khair", "Khairabad", "Khairagarh", "Khalilabad", "Khamaria", "Khanpur", "Kharela", "Khargupur", "Khariya", "Kharkhoda", "Khatauli", "Khatauli Rural", "Khekra", "Kheri", "Kheta Sarai", "Khudaganj", "Khurja", "Khutar", "Kiraoli", "Kiratpur", "Kishanpur", "Kishni", "Kithaur", "Koiripur", "Konch", "Kopaganj", "Kora Jahanabad", "Korwa", "Kosi Kalan", "Kota", "Kotra", "Kotwa", "Kulpahar", "Kunda", "Kundarki", "Kunwargaon", "Kurara", "Kurawali", "Kursath", "Kurthi Jafarpur", "Kushinagar", "Kusmara", "Laharpur", "Lakhimpur", "Lakhna", "Lalganj", "Lalitpur", "Lar", "Lawar", "Ledwa Mahuwa", "Lohta", "Loni", "Lucknow", "Machhlishahr", "Madhoganj", "Madhogarh", "Maghar", "Mahaban", "Maharajganj", "Mahmudabad", "Mahoba", "Maholi", "Mahona", "Mahroni", "Mailani", "Mainpuri", "Majhara Pipar Ehatmali", "Majhauli Raj", "Malihabad", "Mallanwam", "Mandawar", "Manikpur", "Maniyar", "Manjhanpur", "Mankapur", "Marehra", "Mariahu", "Maruadih", "Maswasi", "Mataundh", "Mathu", "Mathura", "Mathura Cantonment", "Mau", "Mau Aima", "Maudaha", "Mauranipur", "Maurawan", "Mawana", "Meerut", "Mehnagar", "Mehndawal", "Mendu", "Milak", "Miranpur", "Mirat", "Mirat Cantonment", "Mirganj", "Mirzapur", "Misrikh", "Modinagar", "Mogra Badshahpur", "Mohan", "Mohanpur", "Mohiuddinpur", "Moradabad", "Moth", "Mubarakpur", "Mughal Sarai", "Mughal Sarai Railway Settlemen", "Muhammadabad", "Muhammadi", "Mukrampur Khema", "Mundia", "Mundora", "Muradnagar", "Mursan", "Musafirkhana", "Muzaffarnagar", "Nadigaon", "Nagina", "Nagram", "Nai Bazar", "Nainana Jat", "Najibabad", "Nakur", "Nanaunta", "Nandgaon", "Nanpara", "Naraini", "Narauli", "Naraura", "Naugawan Sadat", "Nautanwa", "Nawabganj", "Nichlaul", "Nidhauli Kalan", "Nihtaur", "Nindaura", "Niwari", "Nizamabad", "Noida", "Northern Railway Colony", "Nurpur", "Nyoria Husenpur", "Nyotini", "Obra", "Oel Dhakwa", "Orai", "Oran", "Ordinance Factory Muradnagar", "Pachperwa", "Padrauna", "Pahasu", "Paintepur", "Pali", "Palia Kalan", "Parasi", "Parichha", "Parichhatgarh", "Parsadepur", "Patala", "Patiyali", "Patti", "Pawayan", "Phalauda", "Phaphund", "Phulpur", "Phulwaria", "Pihani", "Pilibhit", "Pilkana", "Pilkhuwa", "Pinahat", "Pipalsana Chaudhari", "Pipiganj", "Pipraich", "Pipri", "Pratapgarh", "Pukhrayan", "Puranpur", "Purdil Nagar", "Purqazi", "Purwa", "Qasimpur", "Rabupura", "Radha Kund", "Rae Bareilly", "Raja Ka Rampur", "Rajapur", "Ramkola", "Ramnagar", "Rampur", "Rampur Bhawanipur", "Rampur Karkhana", "Rampur Maniharan", "Rampura", "Ranipur", "Rashidpur Garhi", "Rasra", "Rasulabad", "Rath", "Raya", "Renukut", "Reoti", "Richha", "Risia Bazar", "Rithora", "Robertsganj", "Roza", "Rudarpur", "Rudauli", "Rudayan", "Rura", "Rustamnagar Sahaspur", "Sabatwar", "Sadabad", "Sadat", "Safipur", "Sahanpur", "Saharanpur", "Sahaspur", "Sahaswan", "Sahawar", "Sahibabad", "Sahjanwa", "Sahpau", "Saidpur", "Sainthal", "Saiyadraja", "Sakhanu", "Sakit", "Salarpur Khadar", "Salimpur", "Salon", "Sambhal", "Sambhawali", "Samdhan", "Samthar", "Sandi", "Sandila", "Sarai Mir", "Sarai akil", "Sarauli", "Sardhana", "Sarila", "Sarsawan", "Sasni", "Satrikh", "Saunkh", "Saurikh", "Seohara", "Sewal Khas", "Sewarhi", "Shahabad", "Shahganj", "Shahi", "Shahjahanpur", "Shahjahanpur Cantonment", "Shahpur", "Shamli", "Shamsabad", "Shankargarh", "Shergarh", "Sherkot", "Shikarpur", "Shikohabad", "Shisgarh", "Shivdaspur", "Shivli", "Shivrajpur", "Shohratgarh", "Siddhanur", "Siddharthnagar", "Sidhauli", "Sidhpura", "Sikandarabad", "Sikandarpur", "Sikandra", "Sikandra Rao", "Singahi Bhiraura", "Sirathu", "Sirsa", "Sirsaganj", "Sirsi", "Sisauli", "Siswa Bazar", "Sitapur", "Siyana", "Som", "Sonbhadra", "Soron", "Suar", "Sukhmalpur Nizamabad", "Sultanpur", "Sumerpur", "Suriyawan", "Swamibagh", "Tajpur", "Talbahat", "Talgram", "Tambaur", "Tanda", "Tatarpur Lallu", "Tetribazar", "Thakurdwara", "Thana Bhawan", "Thiriya Nizamat Khan", "Tikaitnagar", "Tikri", "Tilhar", "Tindwari", "Tirwaganj", "Titron", "Tori Fatehpur", "Tulsipur", "Tundla", "Tundla Kham", "Tundla Railway Colony", "Ugu", "Ujhani", "Ujhari", "Umri", "Umri Kalan", "Un", "Unchahar", "Unnao", "Usaihat", "Usawan", "Utraula", "Varanasi", "Varanasi Cantonment", "Vijaigarh", "Vrindavan", "Wazirganj", "Zafarabad", "Zaidpur", "Zamania"]
      },
      {
        name: "Uttarakhand",
        cities: ["Almora", "Almora Cantonment", "Badrinathpuri", "Bageshwar", "Bah Bazar", "Banbasa", "Bandia", "Barkot", "Bazpur", "Bhim Tal", "Bhowali", "Chakrata", "Chamba", "Chamoli and Gopeshwar", "Champawat", "Clement Town", "Dehra Dun Cantonment", "Dehradun", "Dehrakhas", "Devaprayag", "Dhaluwala", "Dhandera", "Dharchula", "Dharchula Dehat", "Didihat", "Dineshpur", "Doiwala", "Dugadda", "Dwarahat", "Gadarpur", "Gangotri", "Gauchar", "Haldwani", "Haridwar", "Herbertpur", "Jaspur", "Jhabrera", "Joshimath", "Kachnal Gosain", "Kaladungi", "Kalagarh", "Karnaprayang", "Kashipur", "Kashirampur", "Kausani", "Kedarnath", "Kelakhera", "Khatima", "Kichha", "Kirtinagar", "Kotdwara", "Laksar", "Lalkuan", "Landaura", "Landhaura Cantonment", "Lensdaun", "Logahat", "Mahua Dabra Haripura", "Mahua Kheraganj", "Manglaur", "Masuri", "Mohanpur Mohammadpur", "Muni Ki Reti", "Nagla", "Nainital", "Nainital Cantonment", "Nandaprayang", "Narendranagar", "Pauri", "Pithoragarh", "Pratitnagar", "Raipur", "Raiwala", "Ramnagar", "Ranikhet", "Ranipur", "Rishikesh", "Rishikesh Cantonment", "Roorkee", "Rudraprayag", "Rudrapur", "Rurki", "Rurki Cantonment", "Shaktigarh", "Sitarganj", "Srinagar", "Sultanpur", "Tanakpur", "Tehri", "Udham Singh Nagar", "Uttarkashi", "Vikasnagar", "Virbhadra"]
      },
      {
        name: "Vaishali",
        cities: []
      },
      {
        name: "West Bengal",
        cities: ["24 Parganas (n)", "24 Parganas (s)", "Adra", "Ahmadpur", "Aiho", "Aistala", "Alipur Duar", "Alipur Duar Railway Junction", "Alpur", "Amalhara", "Amkula", "Amlagora", "Amodghata", "Amtala", "Andul", "Anksa", "Ankurhati", "Anup Nagar", "Arambagh", "Argari", "Arsha", "Asansol", "Ashoknagar Kalyangarh", "Aurangabad", "Bablari Dewanganj", "Badhagachhi", "Baduria", "Baghdogra", "Bagnan", "Bagra", "Bagula", "Baharampur", "Bahirgram", "Bahula", "Baidyabati", "Bairatisal", "Baj Baj", "Bakreswar", "Balaram Pota", "Balarampur", "Bali Chak", "Ballavpur", "Bally", "Balurghat", "Bamunari", "Banarhat Tea Garden", "Bandel", "Bangaon", "Bankra", "Bankura", "Bansbaria", "Banshra", "Banupur", "Bara Bamonia", "Barakpur", "Barakpur Cantonment", "Baranagar", "Barasat", "Barddhaman", "Barijhati", "Barjora", "Barrackpore", "Baruihuda", "Baruipur", "Barunda", "Basirhat", "Baska", "Begampur", "Beldanga", "Beldubi", "Belebathan", "Beliator", "Bhadreswar", "Bhandardaha", "Bhangar Raghunathpur", "Bhangri Pratham Khanda", "Bhanowara", "Bhatpara", "Bholar Dabri", "Bidhannagar", "Bidyadharpur", "Biki Hakola", "Bilandapur", "Bilpahari", "Bipra Noapara", "Birlapur", "Birnagar", "Bisarpara", "Bishnupur", "Bolpur", "Bongaon", "Bowali", "Burdwan", "Canning", "Cart Road", "Chachanda", "Chak Bankola", "Chak Enayetnagar", "Chak Kashipur", "Chakalampur", "Chakbansberia", "Chakdaha", "Chakpara", "Champahati", "Champdani", "Chamrail", "Chandannagar", "Chandpur", "Chandrakona", "Chapari", "Chapui", "Char Brahmanagar", "Char Maijdia", "Charka", "Chata Kalikapur", "Chauhati", "Checha Khata", "Chelad", "Chhora", "Chikrand", "Chittaranjan", "Contai", "Cooch Behar", "Dainhat", "Dakshin Baguan", "Dakshin Jhapardaha", "Dakshin Rajyadharpur", "Dakshin Raypur", "Dalkola", "Dalurband", "Darap Pur", "Darjiling", "Daulatpur", "Debipur", "Defahat", "Deora", "Deulia", "Dhakuria", "Dhandadihi", "Dhanyakuria", "Dharmapur", "Dhatri Gram", "Dhuilya", "Dhulagari", "Dhulian", "Dhupgari", "Dhusaripara", "Diamond Harbour", "Digha", "Dignala", "Dinhata", "Dubrajpur", "Dumjor", "Durgapur", "Durllabhganj", "Egra", "Eksara", "Falakata", "Farakka", "Fatellapur", "Fort Gloster", "Gabberia", "Gadigachha", "Gairkata", "Gangarampur", "Garalgachha", "Garbeta Amlagora", "Garhbeta", "Garshyamnagar", "Garui", "Garulia", "Gayespur", "Ghatal", "Ghorsala", "Goaljan", "Goasafat", "Gobardanga", "Gobindapur", "Gopalpur", "Gopinathpur", "Gora Bazar", "Guma", "Gurdaha", "Guriahati", "Guskhara", "Habra", "Haldia", "Haldibari", "Halisahar", "Haora", "Harharia Chak", "Harindanga", "Haringhata", "Haripur", "Harishpur", "Hatgachha", "Hatsimla", "Hijuli", "Hindustan Cables Town", "Hooghly", "Howrah", "Hugli-Chunchura", "Humaipur", "Ichha Pur Defence Estate", "Ingraj Bazar", "Islampur", "Jafarpur", "Jagadanandapur", "Jagdishpur", "Jagtaj", "Jala Kendua", "Jaldhaka", "Jalkhura", "Jalpaiguri", "Jamuria", "Jangipur", "Jaygaon", "Jaynagar-Majilpur", "Jemari", "Jemari Township", "Jetia", "Jhalida", "Jhargram", "Jhorhat", "Jiaganj-Azimganj", "Joka", "Jot Kamal", "Kachu Pukur", "Kajora", "Kakdihi", "Kakdwip", "Kalaikunda", "Kalara", "Kalimpong", "Kaliyaganj", "Kalna", "Kalyani", "Kamarhati", "Kanaipur", "Kanchrapara", "Kandi", "Kanki", "Kankuria", "Kantlia", "Kanyanagar", "Karimpur", "Karsiyang", "Kasba", "Kasimbazar", "Katwa", "Kaugachhi", "Kenda", "Kendra Khottamdi", "Kendua", "Kesabpur", "Khagrabari", "Khalia", "Khalor", "Khandra", "Khantora", "Kharagpur", "Kharagpur Railway Settlement", "Kharar", "Khardaha", "Khari Mala Khagrabari", "Kharsarai", "Khatra", "Khodarampur", "Kodalia", "Kolaghat", "Kolaghat Thermal Power Project", "Kolkata", "Konardihi", "Konnogar", "Krishnanagar", "Krishnapur", "Kshidirpur", "Kshirpai", "Kulihanda", "Kulti", "Kunustara", "Kuperskem", "Madanpur", "Madhusudanpur", "Madhyamgram", "Maheshtala", "Mahiari", "Mahikpur", "Mahira", "Mahishadal", "Mainaguri", "Makardaha", "Mal", "Malda", "Mandarbani", "Mansinhapur", "Masila", "Maslandapur", "Mathabhanga", "Mekliganj", "Memari", "Midnapur", "Mirik", "Monoharpur", "Mrigala", "Muragachha", "Murgathaul", "Murshidabad", "Nabadhai Dutta Pukur", "Nabagram", "Nabgram", "Nachhratpur Katabari", "Nadia", "Naihati", "Nalhati", "Nasra", "Natibpur", "Naupala", "Navadwip", "Nebadhai Duttapukur", "New Barrackpore", "Ni Barakpur", "Nibra", "Noapara", "Nokpul", "North Barakpur", "Odlabari", "Old Maldah", "Ondal", "Pairagachha", "Palashban", "Panchla", "Panchpara", "Pandua", "Pangachhiya", "Paniara", "Panihati", "Panuhat", "Par Beliya", "Parashkol", "Parasia", "Parbbatipur", "Parui", "Paschim Jitpur", "Paschim Punro Para", "Patrasaer", "Pattabong Tea Garden", "Patuli", "Patulia", "Phulia", "Podara", "Port Blair", "Prayagpur", "Pujali", "Purba Medinipur", "Purba Tajpur", "Purulia", "Raghudebbati", "Raghudebpur", "Raghunathchak", "Raghunathpur", "Raghunathpur-Dankuni", "Raghunathpur-Magra", "Raigachhi", "Raiganj", "Raipur", "Rajarhat Gopalpur", "Rajpur", "Ramchandrapur", "Ramjibanpur", "Ramnagar", "Rampur Hat", "Ranaghat", "Raniganj", "Ratibati", "Raypur", "Rishra", "Rishra Cantonment", "Ruiya", "Sahajadpur", "Sahapur", "Sainthia", "Salap", "Sankarpur", "Sankrail", "Santoshpur", "Saontaidih", "Sarenga", "Sarpi", "Satigachha", "Serpur", "Shankhanagar", "Shantipur", "Shrirampur", "Siduli", "Siliguri", "Simla", "Singur", "Sirsha", "Siuri", "Sobhaganj", "Sodpur", "Sonamukhi", "Sonatikiri", "Srikantabati", "Srirampur", "Sukdal", "Taherpur", "Taki", "Talbandha", "Tamluk", "Tarakeswar", "Tentulberia", "Tentulkuli", "Thermal Power Project", "Tinsukia", "Titagarh", "Tufanganj", "Ukhra", "Ula", "Ulubaria", "Uttar Durgapur", "Uttar Goara", "Uttar Kalas", "Uttar Kamakhyaguri", "Uttar Latabari", "Uttar Mahammadpur", "Uttar Pirpur", "Uttar Raypur", "Uttarpara-Kotrung"]
      }
    ],
    isoAlpha2: "IN",
    isoAlpha3: "IND",
    isoNumeric: 356
  },
  {
    name: "Indonesia",
    flag: "🇮🇩",
    currency: {
      code: "IDR",
      name: "Rupiah",
      symbol: "Rp"
    },
    states: [
      {
        name: "Aceh",
        cities: ["Banda Aceh", "Bireun", "Langsa", "Lhokseumawe", "Meulaboh"]
      },
      {
        name: "Bali",
        cities: ["Denpasar", "Karangasem", "Klungkung", "Kuta", "Negara", "Singaraja", "Tabanan", "Ubud"]
      },
      {
        name: "Bangka-Belitung",
        cities: ["Manggar", "Mentok", "Pangkal Pinang", "Sungai Liat", "Tanjung Pandan", "Toboali-Rias"]
      },
      {
        name: "Banten",
        cities: ["Cikupa", "Cilegon", "Ciputat", "Curug", "Kresek", "Labuhan", "Pandegelang", "Pondok Aren", "Rangkasbitung", "Serang", "Serpong", "Tangerang", "Teluknaga"]
      },
      {
        name: "Bengkulu",
        cities: ["Bengkulu", "Curup"]
      },
      {
        name: "Gandaria",
        cities: ["Gandaria"]
      },
      {
        name: "Gorontalo",
        cities: ["Gorontalo"]
      },
      {
        name: "Jakarta",
        cities: ["Cengkareng", "Jakarta"]
      },
      {
        name: "Jambi",
        cities: ["Jambi", "Kualatungka", "Simpang", "Sungaipenuh"]
      },
      {
        name: "Jawa Barat",
        cities: []
      },
      {
        name: "Jawa Tengah",
        cities: []
      },
      {
        name: "Jawa Timur",
        cities: []
      },
      {
        name: "Kalimantan Barat",
        cities: []
      },
      {
        name: "Kalimantan Selatan",
        cities: []
      },
      {
        name: "Kalimantan Tengah",
        cities: []
      },
      {
        name: "Kalimantan Timur",
        cities: []
      },
      {
        name: "Kendal",
        cities: ["Kendal"]
      },
      {
        name: "Lampung",
        cities: ["Bandar Lampung", "Kota Bumi", "Metro", "Pringsewu", "Terbanggi Besar"]
      },
      {
        name: "Maluku",
        cities: ["Amahai", "Ambon", "Tual"]
      },
      {
        name: "Maluku Utara",
        cities: ["Amahai", "Ambon", "Tual"]
      },
      {
        name: "Nusa Tenggara Barat",
        cities: []
      },
      {
        name: "Nusa Tenggara Timur",
        cities: []
      },
      {
        name: "Papua",
        cities: ["Aberpura", "Biak", "Jaya Pura", "Manokwari", "Merauke", "Sorong"]
      },
      {
        name: "Riau",
        cities: ["Balaipungut", "Bengkalis", "Dumai", "Duri", "Pekan Baru", "Selatpanjang", "Tanjung Balai-Meral", "Tembilahan"]
      },
      {
        name: "Riau Kepulauan",
        cities: ["Balaipungut", "Bengkalis", "Dumai", "Duri", "Pekan Baru", "Selatpanjang", "Tanjung Balai-Meral", "Tembilahan"]
      },
      {
        name: "Solo",
        cities: ["Solo"]
      },
      {
        name: "Sulawesi Selatan",
        cities: []
      },
      {
        name: "Sulawesi Tengah",
        cities: []
      },
      {
        name: "Sulawesi Tenggara",
        cities: []
      },
      {
        name: "Sulawesi Utara",
        cities: []
      },
      {
        name: "Sumatera Barat",
        cities: []
      },
      {
        name: "Sumatera Selatan",
        cities: []
      },
      {
        name: "Sumatera Utara",
        cities: []
      },
      {
        name: "Yogyakarta",
        cities: ["Bambanglipuro", "Banguntapan", "Bantul", "Depok", "Gamping", "Godean", "Jetis", "Kasihan", "Ngaglik", "Pandak", "Pundong", "Sewon", "Seyegan", "Sleman", "Srandakan", "Wonosari", "Yogyakarta"]
      }
    ],
    isoAlpha2: "ID",
    isoAlpha3: "IDN",
    isoNumeric: 360
  },
  {
    name: "Iran",
    flag: "🇮🇷",
    currency: {
      code: "IRR"
    },
    states: [
      {
        name: "Ardabil",
        cities: ["Ardabil", "Garmi", "Khalkhal", "Meshkinshahr", "Parsabad"]
      },
      {
        name: "Azarbayjan-e Bakhtari",
        cities: []
      },
      {
        name: "Azarbayjan-e Khavari",
        cities: []
      },
      {
        name: "Bushehr",
        cities: ["Bandar-e Gonaveh", "Borazjan", "Bushehr", "Dashti", "Dir", "Khormuj", "Kongan", "Tangestan"]
      },
      {
        name: "Chahar Mahal-e Bakhtiari",
        cities: []
      },
      {
        name: "Esfahan",
        cities: ["Ardistan", "Dorchehpiyaz", "Dowlatabad", "Esfahan", "Falavarjan", "Faridan", "Fereydunshahr", "Fuladshahr", "Golara", "Golpayegan", "Kashan", "Kelishad", "Khomeynishahr", "Khonsar", "Khuresgan", "Mobarakeh", "Na''in", "Najafabad", "Natnaz", "Qahdarijan", "Rehnan", "Semirom", "Shahinshahr", "Shahreza", "Zarinshahr"]
      },
      {
        name: "Fars",
        cities: ["Abadeh", "Akbarabad", "Darab", "Eqlid", "Estehban", "Fasa", "Firuzabad", "Gerash", "Jahrom", "Kazerun", "Lar", "Marv Dasht", "Neyriz", "Nurabad", "Qa''emiyeh", "Sepidan", "Shiraz"]
      },
      {
        name: "Gilan",
        cities: ["Astaneh-ye Ashrafiyeh", "Astara", "Bandar-e Anzali", "Faman", "Hashtpar", "Lahijan", "Langarud", "Rasht", "Rudbar", "Rudsar", "Sawma''eh Sara"]
      },
      {
        name: "Golestan",
        cities: ["Aq Qal''eh", "Azad Shahr", "Bandar-e Torkaman", "Gonbad-e Qabus", "Gorgan"]
      },
      {
        name: "Hamadan",
        cities: ["Asadabad", "Bahar", "Hamadan", "Malayer", "Nahavand", "Tuysarkan"]
      },
      {
        name: "Hormozgan",
        cities: ["Bandar Abbas", "Bandar-e ''Abbas", "Bandar-e Lengeh", "Gheshm", "Jask", "Kish", "Kish Island", "Minab"]
      },
      {
        name: "Ilam",
        cities: ["Abdanan", "Darrehshahr", "Dehloran", "Ilam", "Ivan", "Mehran"]
      },
      {
        name: "Kerman",
        cities: ["Baft", "Bam", "Bardsir", "Jiroft", "Kahnuj", "Kerman", "Rafsanjan", "Ravar", "Shahr-e Babak", "Sirjan", "Zarand"]
      },
      {
        name: "Kermanshah",
        cities: ["Eslamabad", "Gilan-e Garb", "Harsin", "Javanrud", "Kangavar", "Kermanshah", "Paveh", "Sahneh", "Sar-e-Pol-e-Zohab", "Sonqor"]
      },
      {
        name: "Khorasan",
        cities: ["Birjand", "Bojnurd", "Chenaran", "Darreh Gaz", "Esfarayen", "Fariman", "Ferdus", "Gha''nat", "Gonabad", "Kashmar", "Mashad", "Mashhad", "Neyshabur", "Qayen", "Quchan", "Sabzevar", "Sarakhs", "Shirvan", "Tabas", "Tayyebat", "Torbat-e Heydariyeh", "Torbat-e Jam"]
      },
      {
        name: "Khuzestan",
        cities: ["Abadan", "Agha Jari", "Ahvaz", "Ahwaz", "Andimeshk", "Bandar-e Emam Khomeyni", "Bandar-e Mahshahr", "Behbahan", "Dezful", "Ezeh", "Hendijan", "Khorramshahr", "Masjed-e Soleyman", "Omidiyeh", "Ramhormoz", "Ramshir", "Shadegan", "Shush", "Shushtar", "Susangerd"]
      },
      {
        name: "Kohgiluyeh-e Boyerahmad",
        cities: []
      },
      {
        name: "Kordestan",
        cities: ["Baneh", "Bijar", "Kamyaran", "Marivan", "Qorveh", "Sanandaj", "Saqqez"]
      },
      {
        name: "Lorestan",
        cities: ["Alashtar", "Aligudarz", "Azna", "Borujerd", "Do Rud", "Khorramabad", "Kuhdasht", "Nurabad"]
      },
      {
        name: "Markazi",
        cities: ["Arak", "Ashtian", "Delijan", "Khomeyn", "Mahallat", "Sarband", "Saveh", "Tafresh"]
      },
      {
        name: "Mazandaran",
        cities: ["Aliabad", "Amir Kala", "Amol", "Babol", "Babol Sar", "Behshahr", "Chalus", "Fereydunkenar", "Juybar", "Kalaleh", "Kordkuy", "Mahmudabad", "Minudasht", "Neka", "Nur", "Nushahr", "Qa''emshahr", "Ramsar", "Sari", "Savadkuh", "Tonekabon"]
      },
      {
        name: "Ostan-e Esfahan",
        cities: []
      },
      {
        name: "Qazvin",
        cities: ["Abhar", "Abyek", "Qazvin", "Takestan"]
      },
      {
        name: "Qom",
        cities: ["Qom"]
      },
      {
        name: "Semnan",
        cities: ["Damghan", "Garmsar", "Semnan", "Shahrud"]
      },
      {
        name: "Sistan-e Baluchestan",
        cities: []
      },
      {
        name: "Tehran",
        cities: ["Damavand", "Eqbaliyeh", "Eslamshahr", "Hashtgerd", "Karaj", "Mahdasht", "Malard", "Mohammadiyeh", "Nazarabad", "Pakdasht", "Pishva", "Qarchak", "Qods", "Robat Karim", "Shahriyar", "Tehran", "Varamin"]
      },
      {
        name: "Yazd",
        cities: ["Ardakan", "Bafq", "Mehriz", "Meybod", "Taft", "Yazd"]
      },
      {
        name: "Zanjan",
        cities: ["Alvand", "Khorramdarreh", "Zanjan"]
      }
    ]
  },
  {
    name: "Iraq",
    flag: "🇮🇶",
    currency: {
      code: "IQD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Babil",
        cities: ["Jurf-as-Sakhr", "Saddat-al-Hindiyah", "al-Hillah", "al-Madhatiyah", "al-Musayyib", "al-Qasim"]
      },
      {
        name: "Baghdad",
        cities: ["Baghdad"]
      },
      {
        name: "Dahuk",
        cities: ["Dahuk", "Zakhu"]
      },
      {
        name: "Dhi Qar",
        cities: []
      },
      {
        name: "Diyala",
        cities: ["Ba''qubah", "Hanaqin", "Jalula", "Kifri", "Mandali", "al-Fuhud", "al-Khalis", "al-Miqdadiyah", "ash-Shatrah"]
      },
      {
        name: "Erbil",
        cities: ["Ankawa"]
      },
      {
        name: "Irbil",
        cities: ["Chaqalawa", "Irbil", "Rawanduz"]
      },
      {
        name: "Karbala",
        cities: ["Karbala", "al-Hindiyah"]
      },
      {
        name: "Kurdistan",
        cities: ["Erbil"]
      },
      {
        name: "Maysan",
        cities: ["Ali al Gharbi", "al-''Amarah", "al-Majarr-al-Kabir"]
      },
      {
        name: "Ninawa",
        cities: ["Qarah Qush", "Sinjar", "Tall ''Afar", "Tall Kayf", "al-Mawsil", "ash-Shaykhan"]
      },
      {
        name: "Salah-ad-Din",
        cities: ["Balad", "Bayji", "Dhalu''iyah", "Samarra", "Tikrit", "Tuz", "ad-Dujayl"]
      },
      {
        name: "Wasit",
        cities: ["al-''Aziziyah", "al-Hayy", "al-Kut", "an-Nu''maniyah", "as-Suwayrah"]
      },
      {
        name: "al-Anbar",
        cities: ["Anah", "Hit", "Rawah", "al-Fallujah", "al-Habbaniyah", "al-Hadithah", "ar-Ramadi", "ar-Rutbah"]
      },
      {
        name: "al-Basrah",
        cities: ["Abu al-Khasib", "Harithah", "Shatt-al-''Arab", "al-Basrah", "al-Faw", "al-Qurnah", "az-Zubayr"]
      },
      {
        name: "al-Muthanna",
        cities: ["ar-Rumaythah", "as-Samawah"]
      },
      {
        name: "al-Qadisiyah",
        cities: ["Afak", "ad-Diwaniyah", "al-Ghammas", "al-Hamzah", "ash-Shamiyah", "ash-Shinafiyah"]
      },
      {
        name: "an-Najaf",
        cities: ["al-Kufah", "al-Mishkhab", "an-Najaf"]
      },
      {
        name: "as-Sulaymaniyah",
        cities: ["Chamchamal", "Halabjah", "Kusanjaq", "Panjwin", "Qal''at Dizeh", "as-Sulaymaniyah"]
      },
      {
        name: "at-Ta''mim",
        cities: ["Aqrah", "Kirkuk"]
      }
    ],
    isoAlpha2: "IQ",
    isoAlpha3: "IRQ",
    isoNumeric: 368
  },
  {
    name: "Ireland",
    flag: "🇮🇪",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Armagh",
        cities: ["Moira"]
      },
      {
        name: "Carlow",
        cities: ["Bagenalstown", "Carlow", "Tullow"]
      },
      {
        name: "Cavan",
        cities: ["Bailieborough", "Belturbet", "Cavan", "Coothill"]
      },
      {
        name: "Clare",
        cities: ["Ennis", "Kilkee", "Kilrush", "Newmarket-on-Fergus", "Shannon"]
      },
      {
        name: "Cork",
        cities: ["Bandon", "Bantry", "Blarney", "Carrigaline", "Charleville", "Clonakilty", "Cobh", "Cork", "Drishane", "Dunmanway", "Fermoy", "Kanturk", "Kinsale", "Macroom", "Mallow", "Midleton", "Millstreet", "Mitchelstown", "Passage West", "Skibbereen", "Youghal"]
      },
      {
        name: "Donegal",
        cities: ["Ballybofey", "Ballyshannon", "Buncrana", "Bundoran", "Carndonagh", "Donegal", "Killybegs", "Letterkenny", "Lifford", "Moville"]
      },
      {
        name: "Dublin",
        cities: ["Balbriggan", "Ballsbridge", "Dublin", "Leixlip", "Lucan", "Malahide", "Portrane", "Rathcoole", "Rush", "Skerries", "Swords"]
      },
      {
        name: "Galway",
        cities: ["Athenry", "Ballinasloe", "Clifden", "Galway", "Gort", "Loughrea", "Tuam"]
      },
      {
        name: "Kerry",
        cities: ["Ballybunion", "Cahirciveen", "Castleisland", "Dingle", "Kenmare", "Killarney", "Killorglin", "Listowel", "Tralee"]
      },
      {
        name: "Kildare",
        cities: ["Athy", "Celbridge", "Clane", "Kilcock", "Kilcullen", "Kildare", "Maynooth", "Monasterevan", "Naas", "Newbridge"]
      },
      {
        name: "Kilkenny",
        cities: ["Callan", "Castlecomer", "Kilkenny", "Thomastown"]
      },
      {
        name: "Laois",
        cities: ["Abbeyleix", "Mountmellick", "Mountrath", "Port Laoise", "Portarlington"]
      },
      {
        name: "Leinster",
        cities: ["Meath"]
      },
      {
        name: "Leitrim",
        cities: ["Carrick-on-Shannon"]
      },
      {
        name: "Limerick",
        cities: ["Abbeyfeale", "Kilmallock", "Limerick", "Newcastle", "Rathkeale"]
      },
      {
        name: "Loch Garman",
        cities: []
      },
      {
        name: "Longford",
        cities: ["Granard", "Longford", "Moate"]
      },
      {
        name: "Louth",
        cities: ["Ardee", "Drogheda", "Drumcar", "Dundalk"]
      },
      {
        name: "Mayo",
        cities: ["Ballina", "Ballinrobe", "Ballyhaunis", "Castlebar", "Claremorris", "Swinford", "Westport"]
      },
      {
        name: "Meath",
        cities: ["Ashbourne", "Duleek", "Dunboyne", "Dunshaughlin", "Kells", "Laytown", "Navan", "Trim"]
      },
      {
        name: "Monaghan",
        cities: ["Carrickmacross", "Castleblayney", "Clones", "Monaghan"]
      },
      {
        name: "Offaly",
        cities: ["Banagher", "Birr", "Clara", "Edenderry", "Kilcormac", "Tullamore"]
      },
      {
        name: "Roscommon",
        cities: ["Ballaghaderreen", "Boyle", "Castlerea", "Roscommon"]
      },
      {
        name: "Sligo",
        cities: ["Sligo"]
      },
      {
        name: "Tipperary North Riding",
        cities: []
      },
      {
        name: "Tipperary South Riding",
        cities: []
      },
      {
        name: "Ulster",
        cities: ["Co Tyrone", "Downpatrick"]
      },
      {
        name: "Waterford",
        cities: ["Dungarvan", "Tramore", "Waterford"]
      },
      {
        name: "Westmeath",
        cities: ["Athlone", "Mullingar"]
      },
      {
        name: "Wexford",
        cities: ["Enniscorthy", "Gorey", "New Ross", "Wexford"]
      },
      {
        name: "Wicklow",
        cities: ["Arklow", "Baltinglass", "Blessington", "Bray", "Greystones", "Kilcoole", "Newtownmountkennedy", "Rathdrum", "Wicklow"]
      }
    ],
    isoAlpha2: "IE",
    isoAlpha3: "IRL",
    isoNumeric: 372
  },
  {
    name: "Israel",
    flag: "🇮🇱",
    currency: {
      code: "ILS",
      name: "Shekel",
      symbol: "₪"
    },
    states: [
      {
        name: "Beit Hanania",
        cities: []
      },
      {
        name: "Ben Gurion Airport",
        cities: []
      },
      {
        name: "Bethlehem",
        cities: ["Bethlehem"]
      },
      {
        name: "Caesarea",
        cities: ["Caesarea"]
      },
      {
        name: "Centre",
        cities: ["Petach Tikva", "Ramallah"]
      },
      {
        name: "Gaza",
        cities: ["Gaza"]
      },
      {
        name: "Hadaron",
        cities: ["Arad", "Omer", "Ashdod", "Ashqelon", "Be''er Sheva", "Beersheba", "Bene Ayish", "Dimona", "Elat", "Gan Yavne", "Nahal `Oz", "Netivot", "Ofaqim", "Qiryat Gat", "Qiryat Mal''akhi", "Sederot", "Yeroham", "kiryat Malachi"]
      },
      {
        name: "Haifa District",
        cities: []
      },
      {
        name: "Hamerkaz",
        cities: ["Be''er Ya''aqov", "Beit Shemesh", "Bene Beraq", "Bnei Brak", "Even Yehuda", "Fureidis", "Gat Rimon", "Gedera", "Givat Shmuel", "Hibat Zion", "Hod HaSharon", "Hogar", "Jaljulye", "Jatt", "Kafar Qasem", "Kefar Sava", "Kefar Yona", "Kfar Saba", "Kiryag Bialik", "Lod", "Mazkeret Batya", "Modi''in", "Nes Ziyyona", "Ness Ziona", "Netanya", "Nordiya", "Pardesiyya", "Petakh Tiqwa", "Qadima", "Qalansawe", "Qiryat ''Eqron", "Ra''anana", "Ramla", "Rehovot", "Rekhovot", "Rinnatya", "Rishon LeZiyyon", "Rosh HaAyin", "Shoham", "Tayibe", "Tire", "Tsur Igal", "Udim", "Yavne", "Yehud"]
      },
      {
        name: "Hazafon",
        cities: ["Afula", "Akko", "Arrabe", "Ein Mahel", "Ilut", "Abu Sinan", "Basmat Tab''un", "Beit Jann", "Bet She''an", "Bi''ne", "Bir-al-Maksur", "Bu''eine-Nujeidat", "Dabburye", "Dayr Hannah", "Dayr-al-Asad", "Hazor HaGelilit", "I''billin", "Iksal", "Judeide-Maker", "Kabul", "Kafar Kanna", "Kafar Manda", "Kafar Yasif", "Karmiel", "Kisra-Sumei", "Ma''alot Tarshikha", "Majd-al-Kurum", "Migdal Ha''Emeq", "Mugar", "Nahariyya", "Nahef", "Nazerat", "Nazerat ''Illit", "Qiryat Shemona", "Qiryat Tiv''on", "Rame", "Reine", "Sakhnin", "Shefar''am", "Tamra", "Tiberias", "Tur''an", "Yirka", "Yoqne''am Illit", "Zefat", "Zur Yigal"]
      },
      {
        name: "Hebron",
        cities: ["Hebron"]
      },
      {
        name: "Jaffa",
        cities: ["Sgula"]
      },
      {
        name: "Jerusalem",
        cities: ["Jerusalem"]
      },
      {
        name: "Khefa",
        cities: ["Ar''ara", "Isifya", "Baqa al-Gharbiyyah", "Binyamina", "Daliyat-al-Karmil", "Jizr-az-Zarqa", "Khadera", "Khefa", "Nesher", "Or ''Aqiva", "Pardes Khanna-Karkur", "Qiryat Atta", "Qiryat Bialik", "Qiryat Motzkin", "Qiryat Yam", "Rekhasim", "Tirat Karmel", "Umm-al-Fahm", "Zikhron Ya''aqov"]
      },
      {
        name: "Kiryat Yam",
        cities: []
      },
      {
        name: "Lower Galilee",
        cities: []
      },
      {
        name: "Qalqilya",
        cities: ["Qalqilya"]
      },
      {
        name: "Talme Elazar",
        cities: []
      },
      {
        name: "Tel Aviv",
        cities: []
      },
      {
        name: "Tsafon",
        cities: ["Hadera", "Kiryag Bialik"]
      },
      {
        name: "Umm El Fahem",
        cities: []
      },
      {
        name: "Yerushalayim",
        cities: ["Bet Shemesh", "Mevasserat Ziyyon", "Yerushalayim"]
      }
    ],
    isoAlpha2: "IL",
    isoAlpha3: "ISR",
    isoNumeric: 376
  },
  {
    name: "Italy",
    flag: "🇮🇹",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Abruzzi",
        cities: ["Meta", "Miano"]
      },
      {
        name: "Abruzzo",
        cities: ["Alba Adriatica", "Atessa", "Atri", "Avezzano", "Celano", "Cepagatti", "Chieti", "Citta Sant''Angelo", "Francavilla al Mare", "Giulianova", "Guardiagrele", "L''Aquila", "Lanciano", "Martinsicuro", "Montesilvano", "Montorio al Vomano", "Mosciano Sant''Angelo", "Ortona", "Penne", "Pescara", "Pineto", "Roseto degli Abruzzi", "San Giovanni Teatino", "San Salvo", "Sant''Egidio alla Vibrata", "Silvi", "Spoltore", "Sulmona", "Teramo", "Vasto"]
      },
      {
        name: "Agrigento",
        cities: ["Agrigento", "Alessandria della Rocca", "Aragona", "Bivona", "Burgio", "Calamonaci", "Caltabellotta", "Camastra", "Cammarata", "Campobello di Licata", "CanicattÃƒÂ¬", "Casteltermini", "Castrofilippo", "Cattolica Eraclea", "Cianciana", "Comitini", "Favara", "Grotte", "Joppolo Giancaxio", "Lampedusa e Linosa", "Licata", "Lucca Sicula", "Menfi", "Montallegro", "Montevago", "Naro", "Palma di Montechiaro", "Porto Empedocle", "Racalmuto", "Raffadali", "Ravanusa", "Realmonte", "Ribera", "Sambuca di Sicilia", "San Biagio Platani", "San Giovanni Gemini", "Sant Angelo Muxaro", "Santa Elisabetta", "Santa Margherita di Belice", "Santo Stefano Quisquina", "Sciacca", "Siculiana", "Villafranca Sicula"]
      },
      {
        name: "Alessandria",
        cities: ["Castellazzo Bormida", "Gavi", "Villanova Monferrato"]
      },
      {
        name: "Ancona",
        cities: ["Camerano", "Castelplanio"]
      },
      {
        name: "Arezzo",
        cities: ["Capolona", "Montevarchi", "Subbiano"]
      },
      {
        name: "Ascoli Piceno",
        cities: []
      },
      {
        name: "Asti",
        cities: ["Buttigliera d''Asti"]
      },
      {
        name: "Avellino",
        cities: ["Flumeri", "Nusco", "Prata di Principato Ultra", "Villanova del Battista"]
      },
      {
        name: "Bari",
        cities: []
      },
      {
        name: "Basilicata",
        cities: ["Avigliano", "Bernalda", "Ferrandina", "Lauria", "Lavello", "Matera", "Melfi", "Montescaglioso", "Pisticci", "Policoro", "Potenza", "Rionero in Vulture", "Venosa"]
      },
      {
        name: "Belluno",
        cities: ["Belluno", "D''alpago", "Longarone", "Pedavena"]
      },
      {
        name: "Benevento",
        cities: ["San Bartolomeo"]
      },
      {
        name: "Bergamo",
        cities: ["", "Bagnatica", "Bergamo", "Bolgare", "Bottanuco", "Brignano Gera d''Adda", "Calcio", "Caravaggio", "Chiuduno", "Ciserano", "Comun Nuovo", "Costa di Mezzate", "Gandino", "Grassobbio", "Grumello Del Monte", "Grumello del Monte", "Lallio", "Levate", "Lurano", "Mapello", "Pagazzano", "Ponteranica", "Pontida", "Sant Omobono Imagna", "Torre Pallavicina", "Trescore Balneario", "Verdellino", "Zingonia"]
      },
      {
        name: "Biella",
        cities: ["Camburzano", "Crevacuore", "Gaglianico", "Sandigliano", "Vigliano Biellese"]
      },
      {
        name: "Bologna",
        cities: ["Anzola dell''Emilia", "Bologna", "Borgo Tossignano", "Casalfiumanese", "Castiglione Dei Pepoli", "Funo", "Loiano", "Monterenzio", "Osteria Grande"]
      },
      {
        name: "Bolzano",
        cities: ["Frangarto"]
      },
      {
        name: "Brescia",
        cities: ["Agnosine", "Brescia", "Capriano del Colle", "Capriolo", "Castegnato", "Castelcovati", "Cellatica", "Coccaglio", "Comezzano-Cizzago", "Erbusco", "Flero", "Lavenone", "Longhena", "Maclodio", "Muscoline", "Padenghe sul Garda", "Paderno Franciacorta", "Paratico", "Passirano", "Polaveno", "Poncarale", "Prevalle", "Provaglio dIseo", "Roncadelle", "Verolavecchia", "Visano"]
      },
      {
        name: "Brindisi",
        cities: ["San Donaci"]
      },
      {
        name: "Calabria",
        cities: ["Acri", "Amantea", "Bagnara Calabra", "Belvedere Marittimo", "Bisignano", "Bovalino", "Cariati", "Cassano allo Ionio", "Castrolibero", "Castrovillari", "Catanzaro", "Cetraro", "Ciro Marina", "Cittanova", "Corigliano Calabro", "Cosenza", "Crosia", "Crotone", "Cutro", "Fuscaldo", "Gioia Tauro", "Isola di Capo Rizzuto", "Lamezia Terme", "Locri", "Luzzi", "Melito di Porto Salvo", "Mendicino", "Montalto Uffugo", "Palmi", "Paola", "Petilia Policastro", "Pizzo", "Polistena", "Reggio di Calabria", "Rende", "Rosarno", "Rossano", "San Giovanni in Fiore", "Scalea", "Sellia Marina", "Siderno", "Soverato", "Taurianova", "Trebisacce", "Vibo Valentia", "Villa San Giovanni"]
      },
      {
        name: "Campania",
        cities: ["Acerra", "Afragola", "Agropoli", "Angri", "Ariano Irpino", "Arzano", "Atripalda", "Avellino", "Aversa", "Bacoli", "Barano d''Ischia", "Baronissi", "Battipaglia", "Bellizzi", "Benevento", "Boscoreale", "Boscotrecase", "Brusciano", "Caivano", "Calvizzano", "Campagna", "Capaccio", "Capua", "Cardito", "Carinola", "Casagiove", "Casal di Principe", "Casalnuovo di Napoli", "Casaluce", "Casandrino", "Casavatore", "Caserta", "Casoria", "Castel San Giorgio", "Castel Volturno", "Castellammare di Stabia", "Cava de'' Tirreni", "Cercola", "Cervinara", "Cicciano", "Crispano", "Eboli", "Ercolano", "Fisciano", "Forio", "Frattamaggiore", "Frattaminore", "Frignano", "Giffoni Valle Piana", "Giugliano in Campania", "Gragnano", "Gricignano di Aversa", "Grottaminarda", "Grumo Nevano", "Ischia", "Lusciano", "Macerata Campania", "Maddaloni", "Marano di Napoli", "Marcianise", "Marigliano", "Massa Lubrense", "Melito di Napoli", "Mercato San Severino", "Mercogliano", "Meta", "Mirabella Eclano", "Mondragone", "Monte di Procida", "Montecorvino Rovella", "Monteforte Irpino", "Montesarchio", "Montoro Inferiore", "Mugnano di Napoli", "Naples", "Napoli", "Nocera Inferiore", "Nocera Superiore", "Nola", "Orta di Atella", "Ottaviano", "Pagani", "Palma Campania", "Parete", "Pellezzano", "Piano di Sorrento", "Piedimonte Matese", "Poggiomarino", "Pollena Trocchia", "Pomigliano d''Arco", "Pompei", "Pontecagnano", "Portici", "Positano", "Pozzuoli", "Procida", "Qualiano", "Quarto", "Roccapiemonte", "Sala Consilina", "Salerno", "San Cipriano d''Aversa", "San Felice a Cancello", "San Gennaro Vesuviano", "San Giorgio a Cremano", "San Giorgio del Sannio", "San Giuseppe Vesuviano", "San Marcellino", "San Marzano sul Sarno", "San Nicola", "San Prisco", "San Sebastiano al Vesuvio", "San Valentino Torio", "Sant Antimo", "Sant''Agata de'' Goti", "Sant''Agnello", "Sant''Anastasia", "Sant''Antonio Abate", "Sant''Arpino", "Sant''Egidio del Monte Albino", "Santa Maria Capua Vetere", "Santa Maria a Vico", "Santa Maria la Carita", "Sarno", "Saviano", "Scafati", "Sessa Aurunca", "Siano", "Solofra", "Somma Vesuviana", "Sorrento", "Teano", "Teggiano", "Terzigno", "Teverola", "Torre Annunziata", "Torre del Greco", "Trecase", "Trentola-Ducenta", "Vallo della Lucania", "Vico Equense", "Vietri sul Mare", "Villa Literno", "Villaricca", "Volla"]
      },
      {
        name: "Cartoceto",
        cities: ["Cartoceto"]
      },
      {
        name: "Caserta",
        cities: ["Carinaro", "San Marco Evangelista"]
      },
      {
        name: "Catania",
        cities: ["Fiandaca Di Acireale", "San Cono"]
      },
      {
        name: "Chieti",
        cities: ["Altino", "Archi", "Ari", "Arielli", "Atessa", "Bomba", "Borrello", "Bucchianico", "Canosa Sannita", "Carpineto Sinello", "Carunchio", "Casacanditella", "Casalanguida", "Casalbordino", "Casalincontrada", "Casoli", "Castel Frentano", "Castelguidone", "Castiglione Messer Marino", "Celenza sul Trigno", "Chieti", "Civitaluparella", "Civitella Messer Raimondo", "Colledimacine", "Colledimezzo", "Crecchio", "Cupello", "Dogliola", "Fallo", "Fara Filiorum Petri", "Fara San Martino", "Filetto", "Fossacesia", "Fraine", "Francavilla al Mare", "Fresagrandinaria", "Frisa", "Furci", "Gamberale", "Gessopalena", "Gissi", "Giuliano Teatino", "Guardiagrele", "Guilmi", "Lama dei Peligni", "Lanciano", "Lentella", "Lettopalena", "Liscia", "Miglianico", "Montazzoli", "Montebello sul Sangro", "Montelapiano", "Montenerodomo", "Monteodorisio", "Mozzagrogna", "Orsogna", "Ortona", "Paglieta", "Palena", "Palmoli", "Palombaro", "Pennadomo", "Pennapiedimonte", "Perano", "Pietraferrazzana", "Pizzoferrato", "Poggiofiorito", "Pollutri", "Pretoro", "Quadri", "Rapino", "Ripa Teatina", "Rocca San Giovanni", "Roccamontepiano", "Roccascalegna", "Roccaspinalveti", "Roio del Sangro", "Rosello", "San Buono", "San Giovanni Lipioni", "San Giovanni Teatino", "San Martino sulla Marrucina", "San Salvo", "San Vito Chietino", "Sant Eusanio del Sangro", "Santa Maria Imbaro", "Scerni", "Schiavi di Abruzzo", "Taranta Peligna", "Tollo", "Torino di Sangro", "Tornareccio", "Torrebruna", "Torrevecchia Teatina", "Torricella Peligna", "Treglio", "Tufillo", "Vacri", "Vasto", "Villa Santa Maria", "Villalfonsina", "Villamagna"]
      },
      {
        name: "Como",
        cities: ["Albavilla", "Cadorago", "Carimate", "Castelmarte", "Cavaria", "Cernobbio", "Comocrea", "Dongo", "Gironico", "Grandate", "Lurago dErba", "Mozzate", "Novedrate", "Orsenigo", "Turate", "Uggiate"]
      },
      {
        name: "Cosenza",
        cities: ["Corso del Tirreno", "Mangone"]
      },
      {
        name: "Cremona",
        cities: ["Casalbuttano", "Casalmaggiore", "Castelverde", "Madignano", "Pieve San Giacomo"]
      },
      {
        name: "Cuneo",
        cities: ["Bandito", "Bra", "Casalgrasso", "Cossano Belbo", "Magliano Alpi", "Mondovi", "Roddi", "Santa Vittoria d''Alba", "Verduno"]
      },
      {
        name: "Emilia-Romagna",
        cities: ["Alfonsine", "Argelato", "Argenta", "Bagnacavallo", "Bagnolo in Piano", "Bellaria-Igea Marina", "Bertinoro", "Bologna", "Bondeno", "Budrio", "Calderara di Reno", "Carpi", "Casalecchio di Reno", "Casalgrande", "Castel Bolognese", "Castel Maggiore", "Castel San Giovanni", "Castel San Pietro Terme", "Castelfranco Emilia", "Castellarano", "Castelnovo ne'' Monti", "Castelnuovo Rangone", "Castelvetro di Modena", "Castenaso", "Cattolica", "Cavriago", "Cento", "Cervia", "Cesena", "Cesenatico", "Codigoro", "Collecchio", "Comacchio", "Concordia sulla Secchia", "Conselice", "Copparo", "Coriano", "Correggio", "Crespellano", "Crevalcore", "Faenza", "Ferrara", "Fidenza", "Finale Emilia", "Fiorano Modenese", "Fiorenzuola d''Arda", "Forli", "Forlimpopoli", "Formigine", "Gambettola", "Granarolo dell''Emilia", "Guastalla", "Imola", "Langhirano", "Lugo", "Luzzara", "Maranello", "Massa Lombarda", "Medesano", "Medicina", "Meldola", "Mirandola", "Misano Adriatico", "Modena", "Molinella", "Monte San Pietro", "Montecchio Emilia", "Montechiarugolo", "Noceto", "Nonantola", "Novellara", "Novi di Modena", "Ozzano dell''Emilia", "Parma", "Pavullo nel Frignano", "Piacenza", "Pianoro", "Ponticino", "Portomaggiore", "Quattro Castella", "Ravenna", "Reggio nell''Emilia", "Reggiolo", "Riccione", "Rimini", "Rottofreno", "Rubiera", "Russi", "Salsomaggiore Terme", "San Felice sul Panaro", "San Giovanni in Persiceto", "San Lazzaro di Savena", "San Mauro Pascoli", "San Pietro in Casale", "Sant''Ilario d''Enza", "Santarcangelo di Romagna", "Sasso Marconi", "Sassuolo", "Savignano sul Panaro", "Savignano sul Rubicone", "Scandiano", "Soliera", "Sorbolo", "Spilamberto", "Verucchio", "Vignola", "Zola Predosa"]
      },
      {
        name: "Ferrara",
        cities: ["Saint Agostino"]
      },
      {
        name: "Firenze",
        cities: ["Capalle", "Firenze", "Pelago", "San Donnino", "Scarperia"]
      },
      {
        name: "Florence",
        cities: ["Scandicci", "Sesto Fiorentino"]
      },
      {
        name: "Forli-Cesena",
        cities: []
      },
      {
        name: "Friuli-Venezia Giulia",
        cities: []
      },
      {
        name: "Frosinone",
        cities: ["Casalvieri", "Frosinone", "Sgurgola"]
      },
      {
        name: "Genoa",
        cities: ["Genoa", "Moneglia"]
      },
      {
        name: "Gorizia",
        cities: ["Romans d''Isonzo", "Savogna d''Isonzo"]
      },
      {
        name: "L''Aquila",
        cities: ["Magliano de Marsi"]
      },
      {
        name: "Lazio",
        cities: ["Alatri", "Albano Laziale", "Anagni", "Anguillara Sabazia", "Anzio", "Aprilia", "Ardea", "Ariccia", "Artena", "Boville Ernica", "Bracciano", "Campagnano di Roma", "Cassino", "Cave", "Ceccano", "Ceprano", "Cerveteri", "Ciampino", "Cisterna", "Civita Castellana", "Civitavecchia", "Colleferro", "Cori", "Fara in Sabina", "Ferentino", "Fiano Romano", "Fiuggi", "Fiumicino", "Fondi", "Fonte Nuova", "Formello", "Formia", "Frascati", "Frosinone", "Gaeta", "Genzano di Roma", "Grottaferrata", "Guidonia", "Isola del Liri", "Itri", "Ladispoli", "Lanuvio", "Lariano", "Latina", "Marino", "Mentana", "Minturno", "Monte San Giovanni Campano", "Montefiascone", "Monterotondo", "Nettuno", "Palestrina", "Palombara Sabina", "Pomezia", "Pontecorvo", "Pontinia", "Priverno", "Rieti", "Rocca Priora", "Rocca di Papa", "Roma", "Rome", "Sabaudia", "San Cesareo", "Santa Marinella", "Segni", "Sezze", "Sora", "Soriano nel Cimino", "Subiaco", "Tarquinia", "Terracina", "Tivoli", "Valmontone", "Velletri", "Veroli", "Vetralla", "Viterbo", "Zagarolo"]
      },
      {
        name: "Lecce",
        cities: ["Acquarica del Capo"]
      },
      {
        name: "Lecco",
        cities: ["Airuno", "Bosisio Parini", "Lecco", "Margno", "Osnago", "Sirone"]
      },
      {
        name: "Lecco Province",
        cities: ["Airuno", "Bosisio Parini", "Lecco", "Margno", "Osnago", "Sirone"]
      },
      {
        name: "Liguria",
        cities: ["Alassio", "Albenga", "Albisola Superiore", "Arcola", "Arenzano", "Bordighera", "Borgonuovo", "Cairo Montenotte", "Chiavari", "Cogoleto", "Finale Ligure", "Genova", "Imperia", "La Spezia", "Lavagna", "Lerici", "Loano", "Ortonovo", "Pietra Ligure", "Rapallo", "Recco", "San Remo", "Santa Margherita Ligure", "Santo Stefano di Magra", "Sarzana", "Savona", "Sestri Levante", "Taggia", "Varazze", "Ventimiglia"]
      },
      {
        name: "Lodi",
        cities: ["Somaglia"]
      },
      {
        name: "Lombardia",
        cities: ["Abbiategrasso", "Agrate Brianza", "Albiate", "Albino", "Albizzate", "Alzano Lombardo", "Arcisate", "Arconate", "Arcore", "Arese", "Arluno", "Asola", "Bagnolo Mella", "Ballabio", "Bareggio", "Basiglio", "Bedizzole", "Bergamo", "Bernareggio", "Besana in Brianza", "Besozzo", "Biassono", "Bienate", "Bollate", "Botticino", "Bovisio-Masciago", "Brembilla", "Brescia", "Bresso", "Broni", "Brugherio", "Buccinasco", "Bussero", "Busto Arsizio", "Busto Garolfo", "Cairate", "Calcinato", "Calolziocorte", "Calusco d''Adda", "Canegrate", "Cantu", "Capriolo", "Carate Brianza", "Caravaggio", "Cardano al Campo", "Caronno Pertusella", "Carpenedolo", "Carugate", "Carvico", "Casalmaggiore", "Casalpusterlengo", "Casatenovo", "Casazza", "Casnigo", "Cassano Magnago", "Cassano d''Adda", "Cassina de'' Pecchi", "Castano Primo", "Castel Goffredo", "Castel Mella", "Castellanza", "Castelleone", "Castelli Calepio", "Castenedolo", "Castiglione delle Stiviere", "Cazzago San Martino", "Cene", "Cermenate", "Cernusco sul Naviglio", "Cerro Maggiore", "Cesano Boscone", "Cesano Maderno", "Cesate", "Chiari", "Cilavegna", "Cinisello Balsamo", "Cislago", "Clusone", "Codogno", "Cologno Monzese", "Cologno al Serio", "Como", "Concesio", "Concorezzo", "Corbetta", "Cormano", "Cornaredo", "Cornate d''Adda", "Corsico", "Corte dei Cortesi", "Costa Volpino", "Crema", "Cremona", "Crocetta", "Curtatone", "Cusano Milanino", "Dalmine", "Darfo", "Desenzano del Garda", "Desio", "Erba", "Fagnano Olona", "Fino Mornasco", "Gaggiano", "Galbiate", "Gallarate", "Gambolo", "Garbagnate Milanese", "Gardone Val Trompia", "Garlasco", "Gavardo", "Gavirate", "Gerenzano", "Ghedi", "Giussano", "Goito", "Gonzaga", "Gorgonzola", "Gussago", "Gussola", "Induno Olona", "Inveruno", "Inzago", "Iseo", "Isola Dovarese", "Lacchiarella", "Lainate", "Laveno-Mombello", "Lecco", "Leffe", "Legnano", "Leno", "Lentate sul Seveso", "Limbiate", "Lissone", "Locate di Triulzi", "Lodi", "Lomazzo", "Lonate Pozzolo", "Lonato", "Luino", "Lumezzane", "Lurate Caccivio", "Magenta", "Malnate", "Mandello del Lario", "Manerbio", "Mantova", "Mariano Comense", "Martinengo", "Mazzano", "Meda", "Mediglia", "Melegnano", "Melzo", "Merate", "Milano", "Molteno", "Montichiari", "Monza", "Morbegno", "Mornago", "Mortara", "Muggio", "Nave", "Nembro", "Nerviano", "Nova Milanese", "Novate Milanese", "Olgiate Comasco", "Olgiate Olona", "Opera", "Orzinuovi", "Osio Sotto", "Ospitaletto", "Paderno Dugnano", "Palazzolo sull''Oglio", "Pandino", "Parabiago", "Paullo", "Pavia", "Pero", "Peschiera Borromeo", "Pessano con Bornago", "Pieve Emanuele", "Pioltello", "Ponte Nossa", "Ponte San Pietro", "Porto Mantovano", "Pozzolengo", "Rescaldina", "Rezzato", "Rho", "Rivarolo Mantovano", "Rodano", "Romano di Lombardia", "Rovato", "Rozzano", "Saletto", "Salo", "Samarate", "San Donato Milanese", "San Giuliano Milanese", "Sant''Angelo Lodigiano", "Sarezzo", "Saronno", "Scanzorosciate", "Sedriano", "Segrate", "Senago", "Seregno", "Seriate", "Sesto Calende", "Sesto San Giovanni", "Settimo Milanese", "Seveso", "Sirmione", "Solaro", "Somma Lombardo", "Sondrio", "Soresina", "Sorisole", "Stezzano", "Stradella", "Suzzara", "Tirano", "Tornata", "Tradate", "Travagliato", "Treviglio", "Treviolo", "Trezzano sul Naviglio", "Trezzo", "Tromello", "Uboldo", "Urgnano", "Usmate Velate", "Valmadrera", "Varedo", "Varese", "Verano Brianza", "Vergiate", "Viadana", "Vigevano", "Vignate", "Villa Carcina", "Villa Guardia", "Villasanta", "Vimercate", "Vimodrone", "Virgilio", "Voghera", "Zibido San Giacomo", "Zogno"]
      },
      {
        name: "Lombardy",
        cities: ["Barasso", "Bergamo", "Bolladello", "Capergnanica", "Costa Masnaga", "Medolago", "Nibionno", "Rodano", "Sordio", "Torre d''Isola", "Varese", "Villongo", "milan"]
      },
      {
        name: "Macerata",
        cities: ["Colmurano", "Monte San Giusto"]
      },
      {
        name: "Mantova",
        cities: ["Castel", "Gazoldo", "Marmirolo", "Monzambano", "Ostiglia", "Pegognaga", "Poggio Rusco", "Quistello", "Roverbella", "Suzzara"]
      },
      {
        name: "Marche",
        cities: ["Ancona", "Ascoli Piceno", "Barchi", "Cagli", "Castelfidardo", "Chiaravalle", "Cingoli", "Civitanova Marche", "Corridonia", "Fabriano", "Falconara Marittima", "Fano", "Fermo", "Filottrano", "Folignano", "Fossombrone", "Grottammare", "Jesi", "Loreto", "Macerata", "Matelica", "Mondavio", "Mondolfo", "Montappone", "Montecosaro", "Montegranaro", "Montemarciano", "Monteprandone", "Morrovalle", "Osimo", "Pesaro", "Polverigi", "Porto Recanati", "Porto San Giorgio", "Porto Sant''Elpidio", "Potenza Picena", "Recanati", "San Benedetto del Tronto", "San Severino Marche", "Sant''Elpidio a Mare", "Senigallia", "Tolentino", "Treia", "Urbino"]
      },
      {
        name: "Messina",
        cities: ["Cumiana", "Giammoro"]
      },
      {
        name: "Milan",
        cities: ["Assago", "Besana in Brianza", "Biassono", "Burago Molgora", "Cernusco Sul Naviglio", "Cologno Monzese", "Concorezzo", "Cornaredo", "Cuggiono", "Cusago", "Foro Buonaparte", "Gessate", "Gorgonzola", "Liscate", "Magenta", "Milan", "Noviglio", "Passirana Di Rho", "Pregnana Milane", "San Donato Milanese", "Seregno", "Trezzo Sull''adda", "Tribiano", "Vaprio d''Adda", "Vermezzo"]
      },
      {
        name: "Modena",
        cities: ["Bomporto", "Campogalliano", "Cavezzo", "Medolla", "Nonantola", "San Possidonio", "Sassuolo", "Spilamberto"]
      },
      {
        name: "Molise",
        cities: ["Bojano", "Campobasso", "Cantalupo", "Isernia", "Termoli", "Venafro"]
      },
      {
        name: "Molteno",
        cities: []
      },
      {
        name: "Montenegro",
        cities: ["Montenegro"]
      },
      {
        name: "Monza and Brianza",
        cities: []
      },
      {
        name: "Naples",
        cities: ["Forio d''Ischia"]
      },
      {
        name: "Novara",
        cities: ["Bogogno", "Invorio", "Pombia"]
      },
      {
        name: "Padova",
        cities: ["Bagnoli di Sopra", "Bovolenta", "Casale Di Scodosia", "Cervarese Santa Croce", "Fontaniva", "Galliera Veneta", "Legnaro", "Limena", "Loreggia", "Massanzago", "Onara", "Ponso", "Portogallo", "Tribano"]
      },
      {
        name: "Parma",
        cities: ["Baganzola", "Busseto", "Casale Di Mezzani", "Fontevivo", "Solignano", "Torrile"]
      },
      {
        name: "Pavia",
        cities: ["Codevilla", "Marcignago", "Pavia", "Siziano"]
      },
      {
        name: "Perugia",
        cities: ["Pianello", "Ponte Felcino", "Zanica"]
      },
      {
        name: "Pesaro-Urbino",
        cities: ["Gradara", "Monte Porzio", "Pergola", "Tavullia"]
      },
      {
        name: "Piacenza",
        cities: ["Alseno", "Gossolengo", "Vigolzone"]
      },
      {
        name: "Piedmont",
        cities: ["Armeno", "Bergamasco", "Caselette", "Rosta", "San Damiano", "Spinetta Marengo"]
      },
      {
        name: "Piemonte",
        cities: ["Acqui Terme", "Alba", "Alessandria", "Alpignano", "Andezeno", "Andonno", "Arona", "Asti", "Avigliana", "Baveno", "Beinasco", "Bellinzago Novarese", "Biella", "Borgaro Torinese", "Borgo San Dalmazzo", "Borgomanero", "Borgosesia", "Boves", "Bra", "Busca", "Cameri", "Canelli", "Carignano", "Carmagnola", "Casale Monferrato", "Caselle Torinese", "Castellamonte", "Castelletto sopra Ticino", "Chieri", "Chivasso", "Cirie", "Collegno", "Cossato", "Cuneo", "Cuorgne", "Domodossola", "Druento", "Fossano", "Galliate", "Gassino Torinese", "Gattinara", "Giaveno", "Grugliasco", "Ivrea", "Leini", "LusigliÃƒÂ¨", "Marano Ticino", "Mergozzo", "Moncalieri", "Mondovi", "Mongrando", "Nichelino", "Nizza Monferrato", "Novara", "Novi Ligure", "Oleggio", "Omegna", "Orbassano", "Ovada", "Pianezza", "Pinerolo", "Pino Torinese", "Piossasco", "Poirino", "Racconigi", "Rivalta di Torino", "Rivarolo Canavese", "Rivoli", "Saluzzo", "San Maurizio", "San Mauro Torinese", "Sandigliano", "Santena", "Santhia", "Savigliano", "Settimo Torinese", "Torino", "Tortona", "Trecate", "Trofarello", "Valduggia", "Valenza", "Venaria Reale", "Verbania", "Vercelli", "Vigliano Biellese", "Vinovo", "Volpiano"]
      },
      {
        name: "Pisa",
        cities: ["Perignano", "Ponte a Egola"]
      },
      {
        name: "Pordenone",
        cities: ["San Quirino"]
      },
      {
        name: "Potenza",
        cities: ["Latronico"]
      },
      {
        name: "Puglia",
        cities: ["Acquaviva delle Fonti", "Adelfia", "Alberobello", "Altamura", "Andria", "Apricena", "Aradeo", "Bari", "Barletta", "Bisceglie", "Bitetto", "Bitonto", "Bitritto", "Brindisi", "Campi Salentina", "Canosa di Puglia", "Capurso", "Carmiano", "Carovigno", "Casamassima", "Casarano", "Cassano delle Murge", "Castellana Grotte", "Castellaneta", "Cavallino", "Ceglie Messapica", "Cerignola", "Cisternino", "Conversano", "Copertino", "Corato", "Crispiano", "Cutrofiano", "Erchie", "Fasano", "Foggia", "Francavilla Fontana", "Galatina", "Galatone", "Gallipoli", "Ginosa", "Gioia del Colle", "Giovinazzo", "Gravina in Puglia", "Grottaglie", "Grumo Appula", "Laterza", "Latiano", "Lecce", "Leverano", "Lizzanello", "Lizzano", "Locorotondo", "Lucera", "Maglie", "Manduria", "Manfredonia", "Margherita di Savoia", "Martano", "Martina Franca", "Massafra", "Matino", "Melendugno", "Mesagne", "Minervino Murge", "Modugno", "Mola di Bari", "Molfetta", "Monopoli", "Monte Sant''Angelo", "Monteroni di Lecce", "Mottola", "Nardo", "Neviano", "Noci", "Noicattaro", "Novoli", "Oria", "Orta Nova", "Ostuni", "Palagiano", "Palo del Colle", "Parabita", "Polignano a Mare", "Pulsano", "Putignano", "Racale", "Ruffano", "Rutigliano", "Ruvo di Puglia", "Salice Salentino", "San Ferdinando di Puglia", "San Giorgio Ionico", "San Giovanni Rotondo", "San Marco in Lamis", "San Marzano di San Giuseppe", "San Nicandro Garganico", "San Pancrazio Salentino", "San Pietro Vernotico", "San Severo", "San Vito dei Normanni", "Sannicandro di Bari", "Santeramo in Colle", "Sava", "Squinzano", "Statte", "Surbo", "Taranto", "Taurisano", "Taviano", "Terlizzi", "Toritto", "Torre Santa Susanna", "Torremaggiore", "Trani", "Trepuzzi", "Tricase", "Triggiano", "Trinitapoli", "Turi", "Ugento", "Valenzano", "Veglie", "Vico del Gargano", "Vieste", "Villa Castelli"]
      },
      {
        name: "Reggio Emilia",
        cities: []
      },
      {
        name: "Rimini",
        cities: ["San Giovanni in Marignano", "Torriana"]
      },
      {
        name: "Roma",
        cities: ["Anzio"]
      },
      {
        name: "Salerno",
        cities: ["Atena Lucana", "Castel San Giorgio", "Fisciano", "Giungano", "Omignano"]
      },
      {
        name: "Sardegna",
        cities: ["Alghero", "Arzachena", "Assemini", "Cabras", "Cagliari", "Capoterra", "Carbonia", "Dorgali", "Guspini", "Iglesias", "Ittiri", "La Maddalena", "Macomer", "Monserrato", "Nuoro", "Olbia", "Oristano", "Ozieri", "Porto Torres", "Quartu Sant''Elena", "Quartucciu", "San Gavino Monreale", "Sanluri", "Sant''Antioco", "Sassari", "Selargius", "Serramanna", "Sestu", "Siniscola", "Sinnai", "Sorso", "Tempio Pausania", "Terralba", "Tortoli", "Villacidro"]
      },
      {
        name: "Sassari",
        cities: ["Nule"]
      },
      {
        name: "Savona",
        cities: ["Altare"]
      },
      {
        name: "Sicilia",
        cities: ["Aci Castello", "Aci Catena", "Aci Sant''Antonio", "Acireale", "Adrano", "Agira", "Agrigento", "Alcamo", "Altofonte", "Aragona", "Augusta", "Avola", "Bagheria", "Barcellona", "Barrafranca", "Belmonte Mezzagno", "Belpasso", "Biancavilla", "Bronte", "Caccamo", "Caltagirone", "Caltanissetta", "Campobello di Licata", "Campobello di Mazara", "Canicatti", "Capaci", "Capo d''Orlando", "Carini", "Carlentini", "Castelbuono", "Casteldaccia", "Castellammare del Golfo", "Casteltermini", "Castelvetrano", "Catania", "Catenanuova", "Cefalu", "Chiaramonte Gulfi", "Cinisi", "Comiso", "Corleone", "Enna", "Erice", "Favara", "Ficarazzi", "Fiumefreddo di Sicilia", "Floridia", "Francofonte", "Gela", "Giardini-Naxos", "Giarre", "Grammichele", "Gravina di Catania", "Ispica", "Lentini", "Leonforte", "Licata", "Lipari", "Marsala", "Mascali", "Mascalucia", "Mazara del Vallo", "Mazzarino", "Melilli", "Menfi", "Messina", "Milazzo", "Militello in Val di Catania", "Misilmeri", "Misterbianco", "Modica", "Monreale", "Motta Sant''Anastasia", "Mussomeli", "Naro", "Nicosia", "Niscemi", "Noto", "Paceco", "Pachino", "Palagonia", "Palazzolo Acreide", "Palermo", "Palma di Montechiaro", "Partanna", "Partinico", "Paterno", "Patti", "Pedara", "Piazza Armerina", "Porto Empedocle", "Pozzallo", "Priolo Gargallo", "Racalmuto", "Raffadali", "Ragusa", "Ramacca", "Randazzo", "Ravanusa", "Ribera", "Riesi", "Riposto", "Rosolini", "Salemi", "San Cataldo", "San Giovanni Gemini", "San Giovanni la Punta", "San Giuseppe Jato", "San Gregorio di Catania", "Sant''Agata di Militello", "Sant''Agata li Battiati", "Santa Croce Camerina", "Santa Flavia", "Santa Teresa di Riva", "Sciacca", "Scicli", "Scordia", "Siracusa", "Sortino", "Taormina", "Termini Imerese", "Terrasini", "Trabia", "Trapani", "Trecastagni", "Tremestieri Etneo", "Troina", "Valderice", "Valguarnera Caropepe", "Villabate", "Villafranca Tirrena", "Vittoria", "Zafferana Etnea"]
      },
      {
        name: "Siena",
        cities: ["Monteriggioni", "Monteroni d Arbia"]
      },
      {
        name: "Sondrio",
        cities: ["Delebio", "Talamona"]
      },
      {
        name: "South Tyrol",
        cities: []
      },
      {
        name: "Taranto",
        cities: ["Faggiano", "Riva del Garda"]
      },
      {
        name: "Teramo",
        cities: ["Castilenti", "Controguerra"]
      },
      {
        name: "Torino",
        cities: ["Bruino", "Busano", "Buttigliera Alta", "Cavour", "Chieri", "Colleretto Giacosa", "Cuceglio", "Giaveno", "Mazze", "Mercenasco", "Piobesi", "Rivoli", "Robassomero", "Scarmagno", "Strambino", "Turin", "Villar Perosa", "Volpiano"]
      },
      {
        name: "Toscana",
        cities: ["Agliana", "Altopascio", "Anghiari", "Arezzo", "Aulla", "Bagno a Ripoli", "Barberino di Mugello", "Barga", "Bibbiena", "Borgo San Lorenzo", "Bucine", "Buggiano", "Calcinaia", "Calenzano", "Camaiore", "Campi Bisenzio", "Campiglia Marittima", "Capannori", "Cappelle", "Capraia", "Carmignano", "Carrara", "Cascina", "Castagneto Carducci", "Castelfiorentino", "Castelfranco di Sotto", "Castiglion Fiorentino", "Cecina", "Cerreto Guidi", "Certaldo", "Chiesina Uzzanese", "Chiusi", "Civitella in Val di Chiana", "Colle di Val d''Elsa", "Collesalvetti", "Cortona", "Empoli", "Fiesole", "Figline Valdarno", "Firenze", "Fivizzano", "Florence", "Foiano della Chiana", "Follonica", "Forte dei Marmi", "Fucecchio", "Gavorrano", "Greve in Chianti", "Grosseto", "Impruneta", "Lari", "Lastra a Signa", "Livorno", "Lucca", "Massa", "Massa Marittima", "Massarosa", "Monsummano Terme", "Montale", "Monte Argentario", "Monte San Savino", "Montecatini-Terme", "Montelupo Fiorentino", "Montemurlo", "Montepulciano", "Montespertoli", "Montevarchi", "Montignoso", "Montopoli in Val d''Arno", "Orbetello", "Pescia", "Pietrasanta", "Pieve a Nievole", "Piombino", "Pisa", "Pistoia", "Poggibonsi", "Poggio a Caiano", "Ponsacco", "Pontassieve", "Pontedera", "Ponticino", "Pontremoli", "Portoferraio", "Prato", "Quarrata", "Reggello", "Rignano", "Roccastrada", "Rosignano Marittimo", "San Casciano", "San Giovanni Valdarno", "San Giuliano Terme", "San Miniato", "Sansepolcro", "Santa Croce sull''Arno", "Santa Maria a Monte", "Scandicci", "Seravezza", "Serravalle Pistoiese", "Sesto Fiorentino", "Siena", "Signa", "Sinalunga", "Sovicille", "Terranuova Bracciolini", "Vaiano", "Varna", "Vecchiano", "Viareggio", "Vinci", "Volterra"]
      },
      {
        name: "Trapani",
        cities: ["Guarrato"]
      },
      {
        name: "Trentino-Alto Adige",
        cities: []
      },
      {
        name: "Trento",
        cities: ["San Giorgio", "Dro"]
      },
      {
        name: "Treviso",
        cities: ["Asolo", "Conegliano", "Cordignano", "Gaiarine", "Ormelle", "Possagno", "Revine Lago"]
      },
      {
        name: "Udine",
        cities: ["Basiliano", "Bicinicco", "Buttrio", "Coseano", "Pradamano", "San Giovanni al Natisone", "Torreano"]
      },
      {
        name: "Umbria",
        cities: ["Amelia", "Assisi", "Bastia Umbra", "Castiglione del Lago", "Citta di Castello", "Corciano", "Deruta", "Foligno", "Gualdo Tadino", "Gubbio", "Magione", "Marsciano", "Narni", "Orvieto", "Perugia", "San Giustino", "Spello", "Spoleto", "Terni", "Todi", "Umbertide"]
      },
      {
        name: "Valle d''Aosta",
        cities: []
      },
      {
        name: "Varese",
        cities: ["Arsago Seprio", "Busto Arsizio", "Cassano Magnago", "Gazzada", "Oggiona Con Santo Stefano", "Solbiate Arno", "Solbiate Olona", "Ternate", "Venegono Inferiore"]
      },
      {
        name: "Veneto",
        cities: ["Abano Terme", "Adria", "Albignasego", "Altavilla Vicentina", "Arzignano", "Badia Polesine", "Bassano del Grappa", "Belfiore", "Belluno", "Borso del Grappa", "Bovolone", "Bussolengo", "Cadoneghe", "Caldogno", "Camisano Vicentino", "Campodarsego", "Campolongo Maggiore", "Camponogara", "Camposampiero", "Caorle", "Carbonera", "Casale sul Sile", "Casier", "Cassola", "Castel d''Azzano", "Castelfranco Veneto", "Castello di Godego", "Castelnuovo del Garda", "Cavallino-Treporti", "Cavarzere", "Cerea", "Chiampo", "Chioggia", "Cittadella", "Colombano", "Concordia Sagittaria", "Conegliano", "Conselve", "Cornedo Vicentino", "Creazzo", "Dolo", "Due Carrare", "Dueville", "Eraclea", "Este", "Feltre", "Galzignano Terme", "Grezzana", "Iesolo", "Isola Vicentina", "Isola della Scala", "Jesolo", "Legnago", "Lendinara", "Lonigo", "Malo", "Marano Vicentino", "Marcon", "Marostica", "Martellago", "Mestrino", "Mira", "Mirano", "Mogliano Veneto", "Monselice", "Montagnana", "Montebelluna", "Montecchio Maggiore", "Montegrotto Terme", "Monticello Conte Otto", "Motta di Livenza", "Murano", "Musile di Piave", "Mussolente", "Negrar", "Noale", "Noventa Padovana", "Noventa Vicentina", "Occhiobello", "Oderzo", "Ormelle", "Padova", "Padua", "Paese", "Pescantina", "Peschiera del Garda", "Pianiga", "Piazzola sul Brenta", "Pieve di Soligo", "Pievebelvicino", "Piombino Dese", "Piove di Sacco", "Ponte San Nicolo", "Ponzano Veneto", "Porto Tolle", "Porto Viro", "Portogruaro", "Preganziol", "Quinto di Treviso", "Riese Pio X", "Romano dEzzelino", "Roncade", "Rosa", "Rovigo", "Rubano", "Salzano", "San Biagio di Callalta", "San Bonifacio", "San Dona di Piave", "San Giovanni Lupatoto", "San Martino Buon Albergo", "San Martino di Lupari", "San Michele al Tagliamento", "San Pietro in Cariano", "San Vendemiano", "Sant''Ambrogio", "Santa Maria di Sala", "Santo Stino di Livenza", "Santorso", "Saonara", "Sarcedo", "Schio", "Scorze", "Sedico", "Selvazzano Dentro", "Silea", "Sivizzo", "Sommacampagna", "Sona", "Spinea", "Spresiano", "Susegana", "Taglio di Po", "Teolo", "Tezze sul Brenta", "Thiene", "Torri di Quartesolo", "Trebaseleghe", "Trevignano", "Treviso", "Trissino", "Valdagno", "Valdobbiadene", "Valeggio sul Mincio", "Vedelago", "Venezia", "Venice", "Verona", "Vicenza", "Vigodarzere", "Vigonovo", "Vigonza", "Villafranca di Verona", "Villorba", "Vittorio Veneto", "Volpago del Montello", "Zane", "Zero Branco", "Zevio"]
      },
      {
        name: "Venezia",
        cities: ["Cona", "Marghera", "Oriago di Mira", "Tessera"]
      },
      {
        name: "Verbano-Cusio-Ossola",
        cities: ["Piedimulera"]
      },
      {
        name: "Vercelli",
        cities: ["Crescentino", "Moncrivello", "Rovasenda", "Trino"]
      },
      {
        name: "Verona",
        cities: ["Valeggio Sul Mincio", "Cadidavid", "Colognola ai Colli", "Pastrengo", "Valgatara"]
      },
      {
        name: "Vicenza",
        cities: ["Montebello Vicentino", "Alonte", "Arcugnano", "Arzignano", "Barbarano Vicentino", "Breganze", "Brendola", "Bressanvido", "Carre", "Castelgomberto", "Costabissara", "Grumolo delle Abbadesse", "Piovene Rocchette", "Povolaro", "Rossano Veneto", "San Pietro di Rosa", "San Vito di Leguzzano", "Sandrigo", "Thiene", "Torrebelvicino", "Torri di Quartesolo", "Villaverla"]
      },
      {
        name: "Viterbo",
        cities: ["Nepi"]
      }
    ],
    isoAlpha2: "IT",
    isoAlpha3: "ITA",
    isoNumeric: 380
  },
  {
    name: "Ivory Coast",
    flag: "🇨🇮",
    currency: {
      code: "XOF"
    },
    states: [
      {
        name: "Abidjan",
        cities: ["Marcory"]
      },
      {
        name: "Agneby",
        cities: ["Adzope", "Affery", "Agboville", "Akoupe", "Rubino"]
      },
      {
        name: "Bafing",
        cities: ["Touba"]
      },
      {
        name: "Denguele",
        cities: ["Bako", "Odienne"]
      },
      {
        name: "Dix-huit Montagnes",
        cities: []
      },
      {
        name: "Fromager",
        cities: ["Gagnoa", "Guiberoua", "Hire", "Ndouci", "Oume", "Ouragahio"]
      },
      {
        name: "Haut-Sassandra",
        cities: ["Daloa", "Issia", "Vavoua"]
      },
      {
        name: "Lacs",
        cities: ["Ndiekro", "Tiebissou", "Toumodi", "Yamoussoukro"]
      },
      {
        name: "Lagunes",
        cities: ["Abidjan", "Alepe", "Anyama", "Bingerville", "Dabou", "Grand-Lahou", "Jacqueville", "Tiassale"]
      },
      {
        name: "Marahoue",
        cities: ["Bouafle", "Sinfra", "Zuenoula"]
      },
      {
        name: "Moyen-Cavally",
        cities: ["Duekoue", "Guiglo", "Toulepleu"]
      },
      {
        name: "Moyen-Comoe",
        cities: ["Abengourou", "Agnibilekrou"]
      },
      {
        name: "N''zi-Comoe",
        cities: ["Arrah", "Bocanda", "Bongouanou", "Daoukro", "Dimbokro", "M''bahiakro", "Mbatto", "N''zi-Comoe"]
      },
      {
        name: "Sassandra",
        cities: ["San-Pedro", "Sassandra", "Soubre", "Tabou"]
      },
      {
        name: "Savanes",
        cities: ["Boundiali", "Dikodougou", "Ferkessedougou", "Korhogo", "Tingrela"]
      },
      {
        name: "Sud-Bandama",
        cities: ["Divo", "Fresco", "Lakota"]
      },
      {
        name: "Sud-Comoe",
        cities: ["Aboisso", "Adiake", "Ayame", "Bonoua", "Grand Bassam"]
      },
      {
        name: "Vallee du Bandama",
        cities: []
      },
      {
        name: "Worodougou",
        cities: ["Kani", "Mankono", "Seguela"]
      },
      {
        name: "Zanzan",
        cities: ["Bondoukou", "Bouna", "Tanda"]
      }
    ]
  },
  {
    name: "Jamaica",
    flag: "🇯🇲",
    currency: {
      code: "JMD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Buxoro Viloyati",
        cities: []
      },
      {
        name: "Clarendon",
        cities: ["May Pen"]
      },
      {
        name: "Hanover",
        cities: ["Lucea"]
      },
      {
        name: "Kingston",
        cities: ["Kingston"]
      },
      {
        name: "Manchester",
        cities: ["Mandeville"]
      },
      {
        name: "Portland",
        cities: ["Port Antonio"]
      },
      {
        name: "Saint Andrews",
        cities: []
      },
      {
        name: "Saint Ann",
        cities: []
      },
      {
        name: "Saint Catherine",
        cities: []
      },
      {
        name: "Saint Elizabeth",
        cities: []
      },
      {
        name: "Saint James",
        cities: []
      },
      {
        name: "Saint Mary",
        cities: []
      },
      {
        name: "Saint Thomas",
        cities: []
      },
      {
        name: "Trelawney",
        cities: ["Albert Town", "Falmouth"]
      },
      {
        name: "Westmoreland",
        cities: ["Savanna la Mar"]
      }
    ],
    isoAlpha2: "JM",
    isoAlpha3: "JAM",
    isoNumeric: 388
  },
  {
    name: "Japan",
    flag: "🇯🇵",
    currency: {
      code: "JPY",
      name: "Yen",
      symbol: "¥"
    },
    states: [
      {
        name: "Aichi",
        cities: ["Agui", "Anjo", "Atsumi", "Bisai", "Chiryu", "Chita", "Fujioka", "Fuso", "Gamagori", "Handa", "Hekinan", "Higashiura", "Ichinomiya", "Inazawa", "Inuyama", "Isshiki", "Iwakura", "Jimokuji", "Kanie", "Kariya", "Kasugai", "Kira", "Kisogawa", "Komaki", "Konan", "Kota", "Kozakai", "Mihama", "Minamichita", "Miwa", "Miyoshi", "Nagakute", "Nagoya", "Nishiharu", "Nishio", "Nisshin", "Obu", "Oharu", "Okazaki", "Owariashi", "Saori", "Saya", "Seto", "Shikatsu", "Shinshiro", "Shippo", "Sobue", "Tahara", "Takahama", "Taketoyo", "Togo", "Tokai", "Tokoname", "Toyoake", "Toyohashi", "Toyokawa", "Toyota", "Tsushima", "Yatomi"]
      },
      {
        name: "Akita",
        cities: ["Akita", "Honjo", "Kazuno", "Noshiro", "Odate", "Oga", "Omagari", "Takanosu", "Tenno", "Ugo", "Yokote", "Yuzawa"]
      },
      {
        name: "Aomori",
        cities: ["Aomori", "Goshogawara", "Hachinohe", "Hiraka", "Hirosaki", "Kizukuri", "Kuroishi", "Misawa", "Mutsu", "Namioka", "Towada"]
      },
      {
        name: "Chiba",
        cities: ["Abiko", "Asahi", "Chiba", "Choshi", "Funabashi", "Fussa", "Futtsu", "Ichihara", "Ichikawa", "Inzai", "Kamagaya", "Kamogawa", "Kashiwa", "Katsuura", "Kimitsu", "Kisarazu", "Kujukuri", "Matsudo", "Mobara", "Nagareyama", "Narashino", "Narita", "Naruto", "Noda", "Oamishirasato", "Ohara", "Omigawa", "Sakae", "Sakura", "Sambu", "Sawara", "Sekiyado", "Shiroi", "Shisui", "Shonan", "Sodegaura", "Tateyama", "Togane", "Tomisato", "Urayasu", "Yachimata", "Yachiyo", "Yokaichiba", "Yotsukaido"]
      },
      {
        name: "Ehime",
        cities: ["Hojo", "Imabari", "Iyo", "Iyomishima", "Kawanoe", "Masaki", "Matsuyama", "Niihama", "Ozu", "Saijo", "Shigenobu", "Tobe", "Toyo", "Uwajima", "Yawatahama"]
      },
      {
        name: "Fukui",
        cities: ["Fukui", "Harue", "Katsuyama", "Maruoka", "Mikuni", "Obama", "Ono", "Sabae", "Takefu", "Tsuruga"]
      },
      {
        name: "Fukuoka",
        cities: ["Amagi", "Buzen", "Chikugo", "Chikushino", "Dazaifu", "Fukuma", "Fukuoka", "Hirokawa", "Honami", "Iizuka", "Inatsuki", "Kanda", "Kasuga", "Kasuya", "Kawasaki", "Kitakyushu", "Koga", "Kurate", "Kurume", "Maebaru", "Miyata", "Mizumaki", "Munakata", "Nakagawa", "Nakama", "Nogata", "Ogori", "Okagaki", "Okawa", "Omuta", "Onojo", "Sasaguri", "Setaka", "Shime", "Shingu", "Sue", "Tagawa", "Tanushimaru", "Umi", "Yamada", "Yame", "Yanagawa", "Yukuhashi"]
      },
      {
        name: "Fukushima",
        cities: ["Aizubange", "Aizuwakamatsu", "Fukushima", "Funehiki", "Haramachi", "Hobara", "Inawashiro", "Ishikawa", "Iwaki", "Kawamata", "Kitakata", "Koriyama", "Miharu", "Motomiya", "Namie", "Nihommatsu", "Shirakawa", "Soma", "Sukagawa", "Yanagawa"]
      },
      {
        name: "Gifu",
        cities: ["Ena", "Gifu", "Ginan", "Godo", "Hashima", "Hozumi", "Ibigawa", "Ikeda", "Kakamigahara", "Kani", "Kasamatsu", "Mino", "Minokamo", "Mitake", "Mizunami", "Nakatsugawa", "Ogaki", "Ono", "Seki", "Tajimi", "Takayama", "Tarui", "Toki", "Yoro"]
      },
      {
        name: "Gumma",
        cities: ["Annaka", "Azuma", "Fujimi", "Fujioka", "Gumma", "Haruna", "Isesaki", "Kasakake", "Kiryu", "Maebashi", "Nakanojo", "Nitta", "Numata", "Oizumi", "Omama", "Ora", "Ota", "Sakai", "Shibukawa", "Takasaki", "Tamamura", "Tatebayashi", "Tomioka", "Yoshii"]
      },
      {
        name: "Hiroshima",
        cities: ["Fuchu", "Fukuyama", "Hatsukaichi", "Higashihiroshima", "Hiroshima", "Innoshima", "Kaita", "Kannabe", "Kumano", "Kure", "Kurose", "Mihara", "Miyoshi", "Ono", "Onomichi", "Otake", "Shinichi", "Shobara", "Takehara"]
      },
      {
        name: "Hokkaido",
        cities: ["Abashiri", "Akabira", "Asahikawa", "Ashibetsu", "Bibai", "Bihoro", "Chitose", "Date", "Ebetsu", "Eniwa", "Fukagawa", "Furano", "Hakodate", "Hokkaido", "Hyogo", "Ishikari", "Iwamizawa", "Iwanai", "Kamiiso", "Kitahiroshima", "Kitami", "Kushiro", "Makubetsu", "Mikasa", "Mombetsu", "Muroran", "Nakashibetsu", "Nanae", "Nayoro", "Nemuro", "Noboribetsu", "Obihiro", "Otaru", "Otofuke", "Rumoi", "Sapporo", "Shibetsu", "Shiraoi", "Shizunai", "Sunagawa", "Takikawa", "Tobetsu", "Tomakomai", "Utashinai", "Wakkanai", "Yoichi", "Yubari"]
      },
      {
        name: "Hyogo",
        cities: ["Aioi", "Akashi", "Ako", "Amagasaki", "Ashiya", "Fukusaki", "Harima", "Himeji", "Inagawa", "Inami", "Itami", "Kakogawa", "Kasai", "Kawanishi", "Kobe", "Kodera", "Miki", "Nandan", "Nishinomiya", "Nishiwaki", "Ono", "Sanda", "Sumoto", "Taishi", "Takarazuka", "Takasago", "Tatsuno", "Toyooka", "Yamasaki", "Yashiro", "Yumesaki"]
      },
      {
        name: "Ibaraki",
        cities: ["Ami", "Chiyoda", "Daigo", "Edosaki", "Fujishiro", "Hasaki", "Hitachi", "Hitachinaka", "Hitachiota", "Hokota", "Ibaraki", "Ina", "Ishige", "Ishioka", "Itako", "Iwai", "Iwase", "Kamisu", "Kasama", "Kashima", "Kasumigaura", "Kitaibaraki", "Koga", "Kukizaki", "Makabe", "Minori", "Mito", "Mitsukaido", "Moriya", "Naka", "Oarai", "Omiya", "Ryugasaki", "Sakai", "Sanwa", "Shimodate", "Shimotsuma", "Sowa", "Takahagi", "Tokai", "Tomobe", "Tone", "Toride", "Tsukuba", "Ushiku", "Yachiyo", "Yasato", "Yuki"]
      },
      {
        name: "Ishikawa",
        cities: ["Hakui", "Kaga", "Kanazawa", "Komatsu", "Matto", "Nanao", "Nonoichi", "Suzu", "Tsubata", "Tsurugi", "Uchinada", "Wajima"]
      },
      {
        name: "Iwate",
        cities: ["Daito", "Esashi", "Hanamaki", "Ichinohe", "Ichinoseki", "Iwate", "Kamaishi", "Kitakami", "Kuji", "Miyako", "Mizusawa", "Morioka", "Ninohe", "Ofunato", "Otsuchi", "Rikuzentakata", "Shiwa", "Shizukuishi", "Takizawa", "Tono", "Yahaba", "Yamada"]
      },
      {
        name: "Kagawa",
        cities: ["Kagawa", "Kanonji", "Kokubunji", "Marugame", "Miki", "Ryonan", "Sakaide", "Shido", "Tadotsu", "Takamatsu", "Tonosho", "Zentsuji"]
      },
      {
        name: "Kagoshima",
        cities: ["Aira", "Akune", "Hayato", "Ibusuki", "Ijuin", "Izumi", "Kagoshima", "Kajiki", "Kanoya", "Kaseda", "Kokubu", "Kushikino", "Makurazaki", "Naze", "Nishinoomote", "Okuchi", "Sendai", "Shibushi", "Sueyoshi", "Tarumizu"]
      },
      {
        name: "Kanagawa",
        cities: ["Aikawa", "Atsugi", "Ayase", "Chigasaki", "Ebina", "Fujisawa", "Hadano", "Hakone", "Hayama", "Hiratsuka", "Isehara", "Kamakura", "Kawasaki", "Minamiashigara", "Miura", "Ninomiya", "Odawara", "Oiso", "Sagamihara", "Samukawa", "Shiroyama", "Takatsu-Ku", "Tsukui", "Yamato", "Yokohama", "Yokosuka", "Yugawara", "Zama", "Zushi"]
      },
      {
        name: "Kanto",
        cities: ["Gunma", "Saitama"]
      },
      {
        name: "Kochi",
        cities: ["Aki", "Ino", "Kochi", "Muroto", "Nakamura", "Nankoku", "Sukumo", "Susaki", "Tosa", "Tosashimizu", "Tosayamada"]
      },
      {
        name: "Kumamoto",
        cities: ["Arao", "Ashikita", "Aso", "Hitoyoshi", "Hondo", "Jonan", "Kikuchi", "Kikuyo", "Koshi", "Kumamoto", "Mashiki", "Matsubase", "Minamata", "Nishigoshi", "Ozu", "Tamana", "Ueki", "Ushibuka", "Uto", "Yamaga", "Yatsushiro"]
      },
      {
        name: "Kyoto",
        cities: ["Ayabe", "Fukuchiyama", "Joyo", "Kameoka", "Kizu", "Kumiyama", "Kyotanabe", "Kyoto", "Maizuru", "Miyazu", "Muko", "Nagaokakyo", "Seika", "Uji", "Yawata"]
      },
      {
        name: "Mie",
        cities: ["Ago", "Hisai", "Ise", "Kameyama", "Komono", "Kumano", "Kuwana", "Matsusaka", "Meiwa", "Nabari", "Owase", "Suzuka", "Toba", "Toin", "Tsu", "Ueno", "Yokkaichi"]
      },
      {
        name: "Miyagi",
        cities: ["Furukawa", "Hasama", "Ishinomaki", "Iwanuma", "Kakuda", "Kesennuma", "Kogota", "Marumori", "Natori", "Ogawara", "Rifu", "Sendai", "Shibata", "Shichigahama", "Shiogama", "Shiroishi", "Tagajo", "Taiwa", "Tomiya", "Wakuya", "Watari", "Yamoto"]
      },
      {
        name: "Miyazaki",
        cities: ["Ebino", "Hyuga", "Kiyotake", "Kobayashi", "Kunitomi", "Kushima", "Mimata", "Miyakonojo", "Miyazaki", "Nichinan", "Nobeoka", "Sadowara", "Saito", "Shintomi", "Takanabe"]
      },
      {
        name: "Nagano",
        cities: ["Chino", "Hotaka", "Iida", "Iiyama", "Ina", "Komagane", "Komoro", "Koshoku", "Maruko", "Matsumoto", "Minowa", "Nagano", "Nakano", "Okaya", "Omachi", "Saku", "Shimosuwa", "Shiojiri", "Suwa", "Suzaka", "Tatsuno", "Tobu", "Toyoshina", "Ueda"]
      },
      {
        name: "Nagasaki",
        cities: ["Fukue", "Hirado", "Isahaya", "Matsuura", "Nagasaki", "Nagayo", "Omura", "Sasebo", "Shimabara", "Togitsu"]
      },
      {
        name: "Nara",
        cities: ["Gojo", "Gose", "Haibara", "Heguri", "Ikagura", "Ikoma", "Kammaki", "Kashiba", "Kashihara", "Kawai", "Koryo", "Nara", "Oji", "Oyodo", "Sakurai", "Sango", "Tawaramoto", "Tenri", "Yamatokoriyama", "Yamatotakada"]
      },
      {
        name: "Niigata",
        cities: ["Arai", "Fuchu", "Gosen", "Itoigawa", "Joetsu", "Kameda", "Kamo", "Kashiwazaki", "Kurosaki", "Maki", "Mitsuke", "Muika", "Murakami", "Muramatsu", "Nagaoka", "Nakajo", "Niigata", "Niitsu", "Ojiya", "Ryotsu", "Sanjo", "Shibata", "Shiozawa", "Shirone", "Suibara", "Tochio", "Tokamachi", "Toyosaka", "Tsubame", "Yoshida"]
      },
      {
        name: "Oita",
        cities: ["Beppu", "Bungotakada", "Hiji", "Hita", "Kitsuki", "Kusu", "Nakatsu", "Oita", "Saiki", "Taketa", "Tsukumi", "Usa", "Usuki"]
      },
      {
        name: "Okayama",
        cities: ["Bizen", "Ibara", "Kamogata", "Kasaoka", "Kurashiki", "Mabi", "Niimi", "Okayama", "Sanyo", "Soja", "Takahashi", "Tamano", "Tsuyama"]
      },
      {
        name: "Okinawa",
        cities: ["Chatan", "Ginowan", "Gushikawa", "Haebaru", "Hirara", "Ishigaki", "Ishikawa", "Itoman", "Nago", "Naha", "Nishihara", "Okinawa", "Tomigusuku", "Urasoe", "Yomitan"]
      },
      {
        name: "Osaka",
        cities: ["Daito", "Fujiidera", "Habikino", "Hannan", "Higashiosaka", "Hirakata", "Ibaraki", "Ikeda", "Izumi", "Izumiotsu", "Izumisano", "Kadoma", "Kaizuka", "Kashiwara", "Katano", "Kawachinagano", "Kishiwada", "Kobe", "Kumatori", "Matsubara", "Mihara", "Mino", "Misaki", "Moriguchi", "Neyagawa", "Osaka", "Osakasayama", "Sakai", "Sennan", "Settsu", "Shijonawate", "Shimamoto", "Suita", "Takaishi", "Takatsuki", "Tondabayashi", "Toyonaka", "Toyono", "Yao"]
      },
      {
        name: "Saga",
        cities: ["Imari", "Kanzaki", "Karatsu", "Kashima", "Kawasoe", "Saga", "Takeo", "Taku", "Tosu", "Ureshino", "Yamato"]
      },
      {
        name: "Saitama",
        cities: ["Ageo", "Asaka", "Chichibu", "Fujimi", "Fukaya", "Fukiage", "Gyoda", "Hanno", "Hanyu", "Hasuda", "Hatogaya", "Hatoyama", "Hidaka", "Higashimatsuyama", "Honjo", "Ina", "Iruma", "Iwatsuki", "Kamifukuoka", "Kamisato", "Kasukabe", "Kawagoe", "Kawaguchi", "Kawajima", "Kazo", "Kisai", "Kitamoto", "Kodama", "Konosu", "Koshigaya", "Kuki", "Kumagaya", "Kurihashi", "Matsubushi", "Menuma", "Misato", "Miyashiro", "Miyoshi", "Moroyama", "Niiza", "Ogawa", "Oi", "Okegawa", "Omiya", "Saitma-Shi", "Sakado", "Satte", "Sayama", "Shiki", "Shiraoka", "Shobu", "Showa", "Soka", "Sugito", "Toda", "Tokorozawa", "Tsurugashima", "Urawa", "Wako", "Warabi", "Washimiya", "Yashio", "Yono", "Yorii", "Yoshikawa", "Yoshimi"]
      },
      {
        name: "Shiga",
        cities: ["Hikone", "Hino", "Konan", "Kosei", "Kusatsu", "Minakuchi", "Moriyama", "Nagahama", "Notogawa", "Omihachiman", "Otsu", "Ritto", "Shiga", "Yasu", "Yokaichi"]
      },
      {
        name: "Shimane",
        cities: ["Gotsu", "Hamada", "Hikawa", "Hirata", "Izumo", "Masuda", "Matsue", "Oda", "Yasugi"]
      },
      {
        name: "Shizuoka",
        cities: ["Asaba", "Atami", "Daito", "Fuji", "Fujieda", "Fujinomiya", "Fukuroi", "Gotemba", "Haibara", "Hamakita", "Hamamatsu", "Hamaoka", "Hosoe", "Ito", "Iwata", "Kakegawa", "Kanaya", "Kannami", "Kikugawa", "Kosai", "Mishima", "Mori", "Nagaizumi", "Numazu", "Oigawa", "Oyama", "Ryuyo", "Sagara", "Shimada", "Shimizu", "Shimoda", "Shizuoka", "Susono", "Tenryu", "Toyoda", "Yaizu", "Yoshida"]
      },
      {
        name: "Tochigi",
        cities: ["Ashikaga", "Fujioka", "Imaichi", "Iwafune", "Kaminokawa", "Kanuma", "Karasuyama", "Kawachi", "Kuroiso", "Mashiko", "Mibu", "Minamikawachi", "Moka", "Motegi", "Nasu", "Nikko", "Nishinasuno", "Nogi", "Ohira", "Otawara", "Oyama", "Sano", "Takanezawa", "Tanuma", "Tochigi", "Ujiie", "Utsunomiya", "Yaita"]
      },
      {
        name: "Tokushima",
        cities: ["Aizumi", "Anan", "Ikeda", "Ishii", "Kamojima", "Kitajima", "Komatsushima", "Naruto", "Tokushima", "Waki"]
      },
      {
        name: "Tokyo",
        cities: ["Akiruno", "Akishima", "Chofu", "Fuchu", "Hachioji", "Hamura", "Higashikurume", "Higashimurayama", "Higashiyamato", "Hino", "Hoya", "Inagi", "Kiyose", "Kodaira", "Koganei", "Kokubunji", "Komae", "Kunitachi", "Machida", "Mitaka", "Mizuho", "Musashimurayama", "Musashino", "Ome", "Tachikawa", "Tama", "Tanashi", "Tokyo"]
      },
      {
        name: "Tottori",
        cities: ["Kurayoshi", "Sakaiminato", "Tottori", "Yonago"]
      },
      {
        name: "Toyama",
        cities: ["Fukumitsu", "Himi", "Kamiichi", "Kosugi", "Kurobe", "Namerikawa", "Nyuzen", "Osawano", "Oyabe", "Shimminato", "Takaoka", "Tateyama", "Tonami", "Toyama", "Uozu", "Yatsuo"]
      },
      {
        name: "Wakayama",
        cities: ["Arida", "Gobo", "Hashimoto", "Iwade", "Kainan", "Katsuragi", "Kishigawa", "Nachikatsuura", "Shingu", "Tanabe", "Wakayama"]
      },
      {
        name: "Yamagata",
        cities: ["Higashine", "Kahoku", "Kaminoyama", "Kawanishi", "Murayama", "Nagai", "Nanyo", "Obanazawa", "Sagae", "Sakata", "Shinjo", "Takahata", "Tendo", "Tsuchiura", "Tsuruoka", "Yamagata", "Yonezawa", "Yuza"]
      },
      {
        name: "Yamaguchi",
        cities: ["Hagi", "Hikari", "Hofu", "Iwakuni", "Kudamatsu", "Mine", "Nagato", "Ogori", "Onoda", "Sanyo", "Shimonoseki", "Shinnanyo", "Tokuyama", "Toyoura", "Ube", "Yamaguchi", "Yanai"]
      },
      {
        name: "Yamanashi",
        cities: ["Enzan", "Fujiyoshida", "Isawa", "Kofu", "Nirasaki", "Otsuki", "Ryuo", "Tsuru", "Uenohara", "Yamanashi"]
      }
    ],
    isoAlpha2: "JP",
    isoAlpha3: "JPN",
    isoNumeric: 392
  },
  {
    name: "Jordan",
    flag: "🇯🇴",
    currency: {
      code: "JOD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Ajlun",
        cities: ["Abbin", "Ajlun", "Anjarah", "Arjan", "Ayn Janna", "Halawah", "Kharbat al-Wahadnah", "Kufranjah", "Sakhrah", "al-Hashamiyah"]
      },
      {
        name: "Amman",
        cities: ["Abu ''Alanda", "Amman", "Askan Abu Nusayr", "Jawa", "Khalda wa Tila''-al-''Ali", "Khraybat As-Suq", "Marj al-Hammam", "Na''ur", "Nuzhat Sahab", "Sahab", "Shafa Badran", "Suwaylih", "Tariq", "Umm As-Summaq", "Umm Nuwarah", "Umm Qusayr wal Muqabalin", "Umm al-Basatin", "Wadi as-Sir", "al-''Abdaliyah", "al-Binayat", "al-Faysaliyah", "al-Jizah", "al-Jubayhah", "al-Juwaydah", "al-Quwaysimah", "al-Yadudah", "ar-Rawdah", "at-Talbiyah", "at-Taybah"]
      },
      {
        name: "Irbid",
        cities: ["Al''al", "Anbah", "Arhaba", "Aydun", "Bayt Idas", "Bayt Ras", "Bayt Yafa", "Bushra", "Dayr Abi Sa''id", "Dayr Yusif", "Dayr as-Sa''anah", "Duwaqarah", "Hakama", "Hartha", "Hatam", "Hawwarah", "Irbid", "Jasar ash-Shaykh Hussayn", "Judayta", "Katam", "Kharja", "Kufur ''Awan", "Kufur Abil", "Kufur Asad", "Kufur Rakab", "Kufur Sum", "Kufur Yuba", "Kufur al-Ma", "Kuraymah", "Malka", "Mukhayyam al-Husun", "Qumaym", "Saham", "Sal", "Samma", "Sammaw", "Sum", "Tabnah", "Umm Qays", "Wadi al-Yabas", "Waqqas", "Zahar", "al-Ashrafiyah", "al-Balawnah", "al-Buwaydah", "al-Husun", "al-Manshiyah", "al-Mashari''a", "al-Mazar ash-Shamaliyah", "al-Mughayyar", "an-Nu''aymeh", "ar-Ramtha", "as-Sarih", "ash-Shajarah", "ash-Shunah ash-Shamaliyah", "at-Taybah", "at-Turrah"]
      },
      {
        name: "Jarash",
        cities: ["Balila", "Burma", "Jarash", "Kufur Khall", "Mukhayyam Ghazzah", "Mukhayyam Suf", "Qafqafa", "Raymun", "Sakab", "Suf", "al-Kattah"]
      },
      {
        name: "Ma''an",
        cities: ["Bayar", "Ma''an", "Wadi Musa", "al-Hussayniyah", "al-Jafar", "at-Taybah"]
      },
      {
        name: "Madaba",
        cities: ["Dhiban", "Ma''in", "Madaba", "Mulayh", "al-Faysaliyah"]
      },
      {
        name: "al-''Aqabah",
        cities: ["al-''Aqabah", "al-Quwayrah"]
      },
      {
        name: "al-Balqa",
        cities: ["Ayn al-Basha", "Darar", "Juwafat al-Kafrayn", "Ma''addi", "Mahas", "Safut", "Suknat ash-Shunah", "Yarqa", "al-Baq''ah", "al-Fuhays", "al-Karamah", "ar-Rawdah", "as-Salt", "as-Sawalhah", "as-Subayhi", "at-Tawal al-Janubi", "at-Tuwal ash-Shamali"]
      },
      {
        name: "al-Karak",
        cities: ["Ayy", "Adar", "Faqqu", "Ghawr al-Mazra''ah", "Ghawr as-Safi", "Maw''tah", "Sirfa", "al-Hussayniyah", "al-Karak", "al-Mazar", "al-Qasr", "al-Qitranah", "ar-Rabbah", "ash-Shahabiyah", "at-Taybah"]
      },
      {
        name: "al-Mafraq",
        cities: ["Badiyat ar-Ruwayshid", "Bal''ama", "Manshiyat Bani Hassan", "Mugayyar as-Sarhan", "Sabha", "Sama as-Sarhan", "Umm al-Quttayn", "al-Hamra", "al-Khaldiyah al-Jadidah", "al-Mabrukah", "al-Mafraq", "ar-Ruwayshid", "az-Za''tari"]
      },
      {
        name: "at-Tafilah",
        cities: ["Busayrah", "al-''Ayn al-Bayda", "al-Hasa", "al-Qadisiyah", "at-Tafilah"]
      },
      {
        name: "az-Zarqa",
        cities: ["Iskan al-Hashamiyah", "Mushayrfat Ras al-''Ayn", "Shnillar", "ad-Dulayl", "al-Azraq ash-Shamali", "al-Hashamiyah", "ar-Russayfah", "as-Sukhnah", "az-Zarqa"]
      }
    ],
    isoAlpha2: "JO",
    isoAlpha3: "JOR",
    isoNumeric: 400
  },
  {
    name: "Kazakhstan",
    flag: "🇰🇿",
    currency: {
      code: "KZT",
      name: "Tenge",
      symbol: "лв"
    },
    states: [
      {
        name: "Akmecet",
        cities: ["Akmecet", "Aral", "Baykonir", "Canakazali", "Canakorgan", "Cosali", "Kazali", "Sieli", "Tasboget"]
      },
      {
        name: "Akmola",
        cities: ["Aksu", "Alekseevka", "Astana", "Atbasar", "Bestobe", "Caltir", "Colimbet", "Ereymentau", "Koksetau", "Makin", "Stepnogorsk"]
      },
      {
        name: "Aktobe",
        cities: ["Aktobe", "Alka", "Batamsi", "Embi", "Hromtau", "Kandagac", "Salkar", "Subarkudik", "Subarsi", "Temir"]
      },
      {
        name: "Almati",
        cities: ["Almati", "Almaty", "Boralday", "Carkant", "Energetyceskiy", "Esik", "Fabrichniy", "Kapsagay", "Karabulak", "Kaskelen", "Kirov", "Sariozek", "Sarkand", "Selek", "Taldikorgan", "Talgar", "Tekeli", "Ustobe", "Uzunagac"]
      },
      {
        name: "Atirau",
        cities: ["Atirau", "Atyrau", "Dossor", "Inderbor", "Karaton", "Kulsari", "Makat", "Oporni", "Sumisker"]
      },
      {
        name: "Batis Kazakstan",
        cities: []
      },
      {
        name: "Burlinsky Region",
        cities: []
      },
      {
        name: "Karagandi",
        cities: ["Abay", "Akadir", "Aktas", "Aktau", "Atasu", "Balkas", "Cayrem", "Cezkazgan", "Gulsat", "Karacal", "Karaganda", "Karkarali", "Karsakbay", "Konrat", "Novodolinskiy", "Osakarovka", "Sahti", "Saran", "Sarisagan", "Satpaev", "Temirtau", "Tokaryovka"]
      },
      {
        name: "Kostanay",
        cities: ["Arkalik", "Borovskoy", "Cetikara", "Derjavinsk", "Esil", "Fodorov", "Kacar", "Komsomol", "Kostanay", "Kusmurin", "Lisakovsk", "Rudni", "Tobol", "Uritsk", "Zatobolsk"]
      },
      {
        name: "Mankistau",
        cities: ["Aktau", "Beyneu", "Canaozen", "Cetibay", "Fort-Sevcenko", "Kurik", "Mangyslak", "Setpe"]
      },
      {
        name: "Ontustik Kazakstan",
        cities: []
      },
      {
        name: "Pavlodar",
        cities: ["Ekibastuz", "Ermak", "Ertis", "Kaciri", "Maykain", "Pavlodar", "Sarbakti"]
      },
      {
        name: "Sigis Kazakstan",
        cities: []
      },
      {
        name: "Soltustik Kazakstan",
        cities: []
      },
      {
        name: "Taraz",
        cities: ["Canatas", "Georgiyev", "Karatau", "Lugovoy", "Merke", "Mihaylov", "Oytal", "Su", "Taraz"]
      }
    ],
    isoAlpha2: "KZ",
    isoAlpha3: "KAZ",
    isoNumeric: 398
  },
  {
    name: "Kenya",
    flag: "🇰🇪",
    currency: {
      code: "KES",
      name: "Shilling",
      symbol: false
    },
    states: [
      {
        name: "Central",
        cities: ["Gilgil", "Karatina", "Kiambu", "Kijabe", "Kikuyu", "Limuru", "Maragua", "Muranga", "Nyeri", "Ruiru", "Sagana", "Thika", "Vanga"]
      },
      {
        name: "Coast",
        cities: ["Changamwe", "Garsen", "Gazi", "Hola", "Kaloleni", "Kilifi", "Kinango", "Kipini", "Kwale", "Lamu", "Malindi", "Mambrui", "Mombasa", "Sawasawa", "Shimoni", "Takaungu", "Taveta", "Voi", "Witu", "Wundanyi"]
      },
      {
        name: "Eastern",
        cities: ["Athi River", "Chuka", "Embu", "Isiolo", "Kangonde", "Kitui", "Machakos", "Mado Gashi", "Marsabit", "Meru", "Moyale", "Mutomo"]
      },
      {
        name: "Nairobi",
        cities: ["Nairobi"]
      },
      {
        name: "North Eastern",
        cities: []
      },
      {
        name: "Nyanza",
        cities: ["Homa Bay", "Kisii", "Kisumu", "Migori"]
      },
      {
        name: "Rift Valley",
        cities: []
      },
      {
        name: "Western",
        cities: ["Bungoma", "Busia", "Kakamega", "Mumias", "Webuye"]
      }
    ],
    isoAlpha2: "KE",
    isoAlpha3: "KEN",
    isoNumeric: 404
  },
  {
    name: "Kiribati",
    flag: "🇰🇮",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Abaiang",
        cities: ["Taburao"]
      },
      {
        name: "Abemana",
        cities: ["Binoinano"]
      },
      {
        name: "Aranuka",
        cities: ["Takaeang"]
      },
      {
        name: "Arorae",
        cities: ["Roreti"]
      },
      {
        name: "Banaba",
        cities: ["Ooma"]
      },
      {
        name: "Beru",
        cities: ["Tabukiniberu"]
      },
      {
        name: "Butaritari",
        cities: ["Butaritari"]
      },
      {
        name: "Kiritimati",
        cities: ["London"]
      },
      {
        name: "Kuria",
        cities: ["Tabontebike"]
      },
      {
        name: "Maiana",
        cities: ["Tabiauea"]
      },
      {
        name: "Makin",
        cities: ["Makin"]
      },
      {
        name: "Marakei",
        cities: ["Rawannawi"]
      },
      {
        name: "Nikunau",
        cities: ["Rungata"]
      },
      {
        name: "Nonouti",
        cities: ["Temaraia"]
      },
      {
        name: "Onotoa",
        cities: ["Ijaki"]
      },
      {
        name: "Phoenix Islands",
        cities: []
      },
      {
        name: "Tabiteuea North",
        cities: []
      },
      {
        name: "Tabiteuea South",
        cities: []
      },
      {
        name: "Tabuaeran",
        cities: ["Nabari"]
      },
      {
        name: "Tamana",
        cities: ["Abaokoro"]
      },
      {
        name: "Tarawa North",
        cities: []
      },
      {
        name: "Tarawa South",
        cities: []
      },
      {
        name: "Teraina",
        cities: ["Washington"]
      }
    ],
    isoAlpha2: "KI",
    isoAlpha3: "KIR",
    isoNumeric: 296
  },
  {
    name: "Kuwait",
    flag: "🇰🇼",
    currency: {
      code: "KWD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Al Asimah",
        cities: []
      },
      {
        name: "Hawalli",
        cities: ["Bayan", "Hawalli", "Massilah", "Mushrif", "Salwa", "Sha''''ab", "Subbah-as-Salim", "al-Funaytis", "al-Funaytis-al-Garbiyah", "al-Jabiriyah", "al-Karim", "ar-Rumaythiyah", "as-Salimiyah"]
      },
      {
        name: "Mishref",
        cities: ["Mishref"]
      },
      {
        name: "Qadesiya",
        cities: ["Qadesiya"]
      },
      {
        name: "Safat",
        cities: ["Safat"]
      },
      {
        name: "Salmiya",
        cities: ["Salmiya"]
      },
      {
        name: "al-Ahmadi",
        cities: ["A''qaylah", "Abu Hulayfah", "Dahar", "Desert Area", "Hadiyah", "Jabbar-al-''Ali", "Shu''aybah", "al-Ahmadi", "al-Fintas", "al-Fuhayhil", "al-Mahbulah", "al-Manqaf", "al-Wafrah", "ar-Riqqah", "as-Sabahiyah", "az-Zawr"]
      },
      {
        name: "al-Farwaniyah",
        cities: ["Umayriyah", "Abraq Khitan", "Ardiyah", "Fardaws", "Jalib ash-Shuyuh", "Janub-as-Surrah", "Khitan-al-Janubiyah", "Qartaba", "Ray", "Riqay", "Sabhan", "Sarbah-an-Nasr", "Warmawk", "al-Andalus", "al-Farwaniyah", "ar-Rabbiyah"]
      },
      {
        name: "al-Jahra",
        cities: ["Amgarah", "Desert Area", "Nasim", "Tayma", "Uyawn", "Waha", "al-Jahra", "al-Qusayr", "as-Sulaybiyah"]
      },
      {
        name: "al-Kuwayt",
        cities: ["Abullah-as-Salam", "Ardhiyah", "Banayd-al-Qar", "Health District", "Kayfan", "Khalidiyah", "Mansuriyah", "Nuzha", "Qarnadah", "Shamiyah", "ad-Da''iyah", "ad-Dasma", "ad-Dawhah", "al-''Udayliyah", "al-Fayha", "al-Kuwayt", "al-Qadisiyah", "ar-Rawdah", "as-Sulaybihat", "ash-Shuwaykh Industrial", "ash-Shuwaykh Reservoir"]
      }
    ],
    isoAlpha2: "KW",
    isoAlpha3: "KWT",
    isoNumeric: 414
  },
  {
    name: "Kyrgyzstan",
    flag: "🇰🇬",
    currency: {
      code: "KGS",
      name: "Som",
      symbol: "лв"
    },
    states: [
      {
        name: "Batken",
        cities: ["Batken", "Isfana", "Khaidarkan", "Kyzyl-Kiya", "Ravat", "Sulukta"]
      },
      {
        name: "Bishkek",
        cities: ["Bishkek"]
      },
      {
        name: "Chui",
        cities: ["Ak-Suu", "Belovodskoye", "Boroldoy", "Chaldovar", "Chatkyol", "Chui", "Don Arik", "Ivanovka", "Jangyjar", "Jangypakhtar", "Kalininskoye", "Kalinovka", "Kant", "Kara-Suu", "Karabalta", "Kayingdi", "Kegety", "Kemin", "Kosh Tegirmen", "Krasnaya Rechka", "Orlovka", "Sokuluk", "Sopokov", "Sosnovka", "Tokmok", "Tunuk", "Yuryevka"]
      },
      {
        name: "Issyk-Kul",
        cities: ["Ak-Bulok", "Ak-Terek", "Ananyevo", "Balykchy", "Barskoon", "Cholpon-Ata", "Darkhon", "Enilchek", "Grigoryevka", "Jyrgolon", "Kara-Say", "Karako", "Karakol", "Kuturgu", "Mikhaylovka", "Novovoznesenovka", "Ottuk", "Semyonovka", "Taldy-Suu", "Teploklyuchenka", "Tyup"]
      },
      {
        name: "Jalal-Abad",
        cities: ["Ala Buka", "Bazarkurgon", "Jalal-Abad", "Jangybazar", "Karavan", "Kochkor-Ata", "Kok-Jangak", "Mailuu-Suu", "Tash-Kumyr"]
      },
      {
        name: "Naryn",
        cities: ["At-Bashi", "Chaiek", "Kara-Suu", "Kayirma", "Kek-Algyp", "Kochkorka", "Kulanak", "Mingbulok", "Mingkush", "Naryn", "Ugyut"]
      },
      {
        name: "Osh",
        cities: ["Daraut-Korgan", "Gulcha", "Kara-Suu", "Leninskoye", "Osh", "Uzgen"]
      },
      {
        name: "Talas",
        cities: ["Chat-Bazar", "Groznoye", "Kara-Kul", "Klyuchevka", "Kyzyl-Adyr", "Leninopol", "Maimak", "Talas", "Toktogul"]
      }
    ],
    isoAlpha2: "KG",
    isoAlpha3: "KGZ",
    isoNumeric: 417
  },
  {
    name: "Laos",
    flag: "🇱🇦",
    currency: {
      code: "LAK",
      name: "Kip",
      symbol: "₭"
    },
    states: [
      {
        name: "Attopu",
        cities: ["Samakhixai"]
      },
      {
        name: "Bokeo",
        cities: ["Huayxay"]
      },
      {
        name: "Bolikhamsay",
        cities: ["Pakxan"]
      },
      {
        name: "Champasak",
        cities: ["Champasak", "Muang Khong", "Muang Khongxedon", "Pakxe"]
      },
      {
        name: "Houaphanh",
        cities: ["Xam Nua"]
      },
      {
        name: "Khammouane",
        cities: ["Thakek"]
      },
      {
        name: "Luang Nam Tha",
        cities: []
      },
      {
        name: "Luang Prabang",
        cities: []
      },
      {
        name: "Oudomxay",
        cities: ["Ban Nahin"]
      },
      {
        name: "Phongsaly",
        cities: ["Phongsaly"]
      },
      {
        name: "Saravan",
        cities: ["Saravan"]
      },
      {
        name: "Savannakhet",
        cities: ["Savannakhet"]
      },
      {
        name: "Sekong",
        cities: ["Sekong"]
      },
      {
        name: "Viangchan Prefecture",
        cities: []
      },
      {
        name: "Viangchan Province",
        cities: []
      },
      {
        name: "Xaignabury",
        cities: ["Xaignabury"]
      },
      {
        name: "Xiang Khuang",
        cities: []
      }
    ],
    isoAlpha2: "LA",
    isoAlpha3: "LAO",
    isoNumeric: 418
  },
  {
    name: "Latvia",
    flag: "🇱🇻",
    currency: {
      code: "LVL",
      name: "Lat",
      symbol: "Ls"
    },
    states: [
      {
        name: "Aizkraukles",
        cities: ["Aizkraukle", "Jaunjelgava", "Plavinas"]
      },
      {
        name: "Aluksnes",
        cities: ["Aluksne", "Ape"]
      },
      {
        name: "Balvu",
        cities: ["Balvi", "Vilaka"]
      },
      {
        name: "Bauskas",
        cities: ["Bauska"]
      },
      {
        name: "Cesu",
        cities: ["Cesis", "Ligatne"]
      },
      {
        name: "Daugavpils",
        cities: ["Ilukste", "Subate"]
      },
      {
        name: "Daugavpils City",
        cities: ["Ilukste", "Subate"]
      },
      {
        name: "Dobeles",
        cities: ["Auce", "Dobele"]
      },
      {
        name: "Gulbenes",
        cities: ["Gulbene"]
      },
      {
        name: "Jekabspils",
        cities: ["Akniste", "Jekabspils", "Viesite"]
      },
      {
        name: "Jelgava",
        cities: ["Jelgava"]
      },
      {
        name: "Jelgavas",
        cities: ["Kalnciems"]
      },
      {
        name: "Jurmala City",
        cities: []
      },
      {
        name: "Kraslavas",
        cities: ["Dagda", "Kraslava"]
      },
      {
        name: "Kuldigas",
        cities: ["Kuldiga", "Skrunda"]
      },
      {
        name: "Liepaja",
        cities: ["Liepaja"]
      },
      {
        name: "Liepajas",
        cities: ["Aizpute", "Durbe", "Grobina", "Pavilosta", "Priekule"]
      },
      {
        name: "Limbazhu",
        cities: ["Ainazhi", "Aloja", "Limbazhi", "Salacgriva", "Staicele"]
      },
      {
        name: "Ludzas",
        cities: ["Karsava", "Ludza", "Zilupe"]
      },
      {
        name: "Madonas",
        cities: ["Cesvaine", "Lubana", "Madona", "Varaklani"]
      },
      {
        name: "Ogres",
        cities: ["Ikskile", "Kegums", "Les Hautes-Rivieres", "Lielvarde", "Ogre"]
      },
      {
        name: "Preilu",
        cities: ["Livani", "Preili"]
      },
      {
        name: "Rezekne",
        cities: ["Rezekne"]
      },
      {
        name: "Rezeknes",
        cities: ["Vilani"]
      },
      {
        name: "Riga",
        cities: ["Riga"]
      },
      {
        name: "Rigas",
        cities: ["Baldone", "Balozhi", "Olaine", "Salaspils", "Saulkrasti", "Sigulda", "Vangazhi"]
      },
      {
        name: "Saldus",
        cities: ["Broceni", "Saldus"]
      },
      {
        name: "Talsu",
        cities: ["Sabile", "Stende", "Talsi", "Valdemarpils"]
      },
      {
        name: "Tukuma",
        cities: ["Kandava", "Tukums"]
      },
      {
        name: "Valkas",
        cities: ["Seda", "Smiltene", "Strenchi", "Valka"]
      },
      {
        name: "Valmieras",
        cities: ["Mazsalaca", "Rujiena", "Valmiera"]
      },
      {
        name: "Ventspils",
        cities: ["Piltene"]
      },
      {
        name: "Ventspils City",
        cities: ["Piltene"]
      }
    ],
    isoAlpha2: "LV",
    isoAlpha3: "LVA",
    isoNumeric: 428
  },
  {
    name: "Lebanon",
    flag: "🇱🇧",
    currency: {
      code: "LBP",
      name: "Pound",
      symbol: "£"
    },
    states: [
      {
        name: "Beirut",
        cities: ["Beirut", "Jdeidet el Metn", "Jnaah"]
      },
      {
        name: "Jabal Lubnan",
        cities: []
      },
      {
        name: "Mohafazat Liban-Nord",
        cities: []
      },
      {
        name: "Mohafazat Mont-Liban",
        cities: []
      },
      {
        name: "Sidon",
        cities: ["Sidon"]
      },
      {
        name: "al-Biqa",
        cities: ["Ba''labakk", "Jubb Jannin", "Rashayya", "Riyak", "Zahlah", "al-Hirmil"]
      },
      {
        name: "al-Janub",
        cities: ["Jazzin", "Juwayya", "Sayda", "Sur"]
      },
      {
        name: "an-Nabatiyah",
        cities: ["Marj ''Uyun", "Nabatieh", "an-Nabatiyat-at-Tahta"]
      },
      {
        name: "ash-Shamal",
        cities: ["Tarabulus ash-Sham", "al-Batrun"]
      }
    ],
    isoAlpha2: "LB",
    isoAlpha3: "LBN",
    isoNumeric: 422
  },
  {
    name: "Lesotho",
    flag: "🇱🇸",
    currency: {
      code: "LSL",
      name: "Loti",
      symbol: "L"
    },
    states: [
      {
        name: "Berea",
        cities: ["Teyateyaneng"]
      },
      {
        name: "Butha-Buthe",
        cities: ["Butha Buthe"]
      },
      {
        name: "Leribe",
        cities: ["Hlotse", "Maputsoa"]
      },
      {
        name: "Mafeteng",
        cities: ["Mafeteng"]
      },
      {
        name: "Maseru",
        cities: ["Maseru"]
      },
      {
        name: "Mohale''s Hoek",
        cities: []
      },
      {
        name: "Mokhotlong",
        cities: ["Mokhotlong"]
      },
      {
        name: "Qacha''s Nek",
        cities: []
      },
      {
        name: "Quthing",
        cities: ["Quthing"]
      },
      {
        name: "Thaba-Tseka",
        cities: ["Thaba-Tseka"]
      }
    ],
    isoAlpha2: "LS",
    isoAlpha3: "LSO",
    isoNumeric: 426
  },
  {
    name: "Liberia",
    flag: "🇱🇷",
    currency: {
      code: "LRD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Bomi",
        cities: ["Tubmanburg"]
      },
      {
        name: "Bong",
        cities: ["Gbarnga"]
      },
      {
        name: "Grand Bassa",
        cities: []
      },
      {
        name: "Grand Cape Mount",
        cities: []
      },
      {
        name: "Grand Gedeh",
        cities: []
      },
      {
        name: "Loffa",
        cities: ["Voinjama"]
      },
      {
        name: "Margibi",
        cities: ["Harbel", "Kakata"]
      },
      {
        name: "Maryland and Grand Kru",
        cities: []
      },
      {
        name: "Montserrado",
        cities: ["Bensonville", "Monrovia"]
      },
      {
        name: "Nimba",
        cities: ["Ganta", "Sanniquellie", "Yekepa"]
      },
      {
        name: "Rivercess",
        cities: ["Rivercess"]
      },
      {
        name: "Sinoe",
        cities: ["Greenville"]
      }
    ],
    isoAlpha2: "LR",
    isoAlpha3: "LBR",
    isoNumeric: 430
  },
  {
    name: "Libya",
    flag: "🇱🇾",
    currency: {
      code: "LYD"
    },
    states: [
      {
        name: "Ajdabiya",
        cities: ["Ajdabiya", "Awjilah", "Marsa al-Burayqah", "az-Zuwaytinah"]
      },
      {
        name: "Fezzan",
        cities: ["Awbari", "Ghat"]
      },
      {
        name: "Banghazi",
        cities: ["Banghazi", "Suluq", "al-Quriyah"]
      },
      {
        name: "Darnah",
        cities: ["Darnah"]
      },
      {
        name: "Ghadamis",
        cities: ["Ghadamis", "Nalut"]
      },
      {
        name: "Gharyan",
        cities: ["Gharyan", "Mizdah", "al-Qaryah-ash-Sharqiyah"]
      },
      {
        name: "Misratah",
        cities: ["Misratah"]
      },
      {
        name: "Murzuq",
        cities: ["Murzuq"]
      },
      {
        name: "Sabha",
        cities: ["Sabha"]
      },
      {
        name: "Sawfajjin",
        cities: ["Bani Walid"]
      },
      {
        name: "Surt",
        cities: ["Surt"]
      },
      {
        name: "Tarabulus",
        cities: ["Tarabulus", "Tripoli"]
      },
      {
        name: "Tarhunah",
        cities: ["Tarhunah"]
      },
      {
        name: "Tripolitania",
        cities: ["Misrata"]
      },
      {
        name: "Tubruq",
        cities: ["Bardiyah", "Tubruq"]
      },
      {
        name: "Yafran",
        cities: ["Yafran"]
      },
      {
        name: "Zlitan",
        cities: ["Zlitan"]
      },
      {
        name: "al-''Aziziyah",
        cities: ["al-Aziziyah"]
      },
      {
        name: "al-Fatih",
        cities: ["al-Abyar", "al-Marj"]
      },
      {
        name: "al-Jabal al Akhdar",
        cities: []
      },
      {
        name: "al-Jufrah",
        cities: ["Waddan"]
      },
      {
        name: "al-Khums",
        cities: ["al-Khums"]
      },
      {
        name: "al-Kufrah",
        cities: ["al-Jawf"]
      },
      {
        name: "an-Nuqat al-Khams",
        cities: []
      },
      {
        name: "ash-Shati",
        cities: ["Birak"]
      },
      {
        name: "az-Zawiyah",
        cities: ["az-Zawiyah"]
      }
    ]
  },
  {
    name: "Liechtenstein",
    flag: "🇱🇮",
    currency: {
      code: "CHF",
      name: "Franc",
      symbol: "CHF"
    },
    states: [
      {
        name: "Balzers",
        cities: ["Balzers"]
      },
      {
        name: "Eschen",
        cities: ["Eschen"]
      },
      {
        name: "Gamprin",
        cities: ["Gamprin"]
      },
      {
        name: "Mauren",
        cities: ["Mauren"]
      },
      {
        name: "Planken",
        cities: ["Planken"]
      },
      {
        name: "Ruggell",
        cities: ["Ruggell"]
      },
      {
        name: "Schaan",
        cities: ["Schaan"]
      },
      {
        name: "Schellenberg",
        cities: ["Schellenberg"]
      },
      {
        name: "Triesen",
        cities: ["Triesen"]
      },
      {
        name: "Triesenberg",
        cities: ["Triesenberg"]
      },
      {
        name: "Vaduz",
        cities: ["Vaduz"]
      }
    ],
    isoAlpha2: "LI",
    isoAlpha3: "LIE",
    isoNumeric: 438
  },
  {
    name: "Lithuania",
    flag: "🇱🇹",
    currency: {
      code: "LTL",
      name: "Litas",
      symbol: "Lt"
    },
    states: [
      {
        name: "Alytaus",
        cities: ["Alytus", "Daugai", "Druskininkai", "Lazdijai", "Simnas", "Varena", "Veisiejai"]
      },
      {
        name: "Anyksciai",
        cities: ["Anyksciai"]
      },
      {
        name: "Kauno",
        cities: ["Ariogala", "Birshtonas", "Dotnuva", "Ezherelis", "Garliava", "Jieznas", "Jonava", "Kachergine", "Kaishiadorys", "Kaunas", "Kedainiai", "Kulautuva", "Prienai", "Raseiniai", "Vilkija", "Zhiezhmariai"]
      },
      {
        name: "Klaipedos",
        cities: ["Gargzhdai", "Klaipeda", "Kretinga", "Neringa", "Pagegiai", "Palanga", "Panemune", "Priekule", "Rusne", "Salantai", "Shilute", "Skuodas", "Zhemaichiu Naumiestis"]
      },
      {
        name: "Marijampoles",
        cities: ["Gelgaudishkis", "Kalvarija", "Kazlu Ruda", "Kudirkos Naumiestis", "Kybartai", "Marijampole", "Shakiai", "Vilkavishkis", "Virbalis"]
      },
      {
        name: "Panevezhio",
        cities: ["Birzhai", "Jonishkelis", "Juodupe", "Kupishkis", "Obeliai", "Pandelys", "Panevezhys", "Panevezio", "Pasvalys", "Ramygala", "Rokishkis", "Subachius", "Vabalninkas"]
      },
      {
        name: "Panevezys",
        cities: ["Panevezys"]
      },
      {
        name: "Shiauliu",
        cities: ["Akmene", "Jonishkis", "Kelme", "Kurshenai", "Linkuva", "Naujoji Akmene", "Pakruojis", "Radvilishkis", "Sheduva", "Shiauliai", "Siauliai", "Tyruliai", "Tytuvenai", "Uzhventis", "Venta", "Viekshniai", "Zhagare"]
      },
      {
        name: "Taurages",
        cities: ["Jurbarkas", "Shilale", "Skaudvile", "Smalininkai", "Taurage"]
      },
      {
        name: "Telshiu",
        cities: ["Guglingen", "Mazheikiai", "Plunge", "Rietavas", "Seda", "Telshiai", "Varniai"]
      },
      {
        name: "Telsiai",
        cities: ["Mazeikiai"]
      },
      {
        name: "Utenos",
        cities: ["Anykshchiai", "Dukshtas", "Dusetos", "Ignalina", "Kavarskas", "Moletai", "Troshkunai", "Turmantas", "Utena", "Visaginas", "Zarasai"]
      },
      {
        name: "Vilniaus",
        cities: ["Baltoji Voke", "Eishishkes", "Elektrenai", "Grigishkes", "Lentvaris", "Nemenchine", "Pabrade", "Rudishkes", "Shalchininkai", "Shirvintos", "Shvenchioneliai", "Shvenchionys", "Trakai", "Ukmerge", "Vievis", "Vilnius"]
      }
    ],
    isoAlpha2: "LT",
    isoAlpha3: "LTU",
    isoNumeric: 440
  },
  {
    name: "Luxembourg",
    flag: "🇱🇺",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Capellen",
        cities: ["Bascharage", "Bettange-sur-Mess", "Bridel", "Capellen", "Clemency", "Dahlem", "Dippach", "Dondelange", "Eischen", "Fingig", "Garnich", "Goeblange", "Goetzingen", "Grass", "Greisch", "Hagen", "Hautcharage", "Hivange", "Hobscheid", "Holzem", "Kahler", "Kehlen", "Keispelt", "Kleinbettingen", "Koerich", "Kospstal", "Linger", "Mamer", "Meispelt", "Nospelt", "Olm", "Roodt", "Schouweiler", "Septfontaines", "Sprinkange", "Steinfort"]
      },
      {
        name: "Clervaux",
        cities: ["Allerborn", "Asselborn", "Basbellain", "Beiler", "Binsfeld", "Biwisch", "Bockholtz", "Boevange", "Boxhorn", "Brachtenbach", "Breidfeld", "Cinqfontaines", "Clervaux", "Consthum", "Crendal", "Deiffelt-Lentzweiler", "Derenbach", "Doennange", "Dorscheid", "Drauffelt", "Drinklange", "Eisenbach", "Eselborn", "Fischbach", "Goedange", "Grindhausen", "Hachiville", "Hamiville", "Hautbellain", "Heinerscheid", "Hoffelt", "Holler", "Holzthum", "Hosingen", "Huldange", "Hupperdange", "Kalborn", "Leithum", "Lieler", "Lullange", "Marnach", "Maulusmuehle", "Munshausen", "Neidhausen", "Niederwampach-Schimpach", "Oberwampach", "Reuler", "Roder", "Rodershausen", "Rumlange-Lentzweiler", "Sassel", "Siebenaler", "Stockem", "Troine-Hinterhasselt", "Troine-Route", "Troisvierges", "Urspelt", "Wahlhausen", "Weicherdange", "Weiler", "Weiswampach", "Wilwerdange", "Wincrange"]
      },
      {
        name: "Diekirch",
        cities: ["Bastendorf", "Bettendorf", "Bigelbach", "Bourscheid", "Brandenbourg", "Burden", "Diekirch", "Eppeldorf", "Ermsdorf", "Erpeldange", "Ettelbruck", "Folkendange", "Gilsdorf", "Hoesdorf", "Hoscheid", "Hoscheid-Dickt", "Ingeldorf", "Kehmen-Scheidel", "Landscheid", "Lipperscheid", "Medernach", "Mertzig", "Michelau", "Moestroff", "Niederfeulen", "Oberfeulen", "Reisdorf", "Savelborn + Fermes", "Schieren", "Schlindermanderscheid", "Stegen", "Tandel", "Wallendorf", "Warken", "Welscheid"]
      },
      {
        name: "Echternach",
        cities: ["Altrier", "Beaufort", "Bech", "Berdorf", "Bollendorf-Pont", "Born", "Boursdorf", "Breidweiler", "Christnach", "Consdorf", "Dickweiler", "Dillingen", "Echternach", "Girst", "Girsterklaus", "Givenich", "Grundhof", "Haller", "Hemstal", "Herborn", "Hersberg-Kobenbour-Graulinster", "Hinkel", "Moersdorf", "Mompach", "Mullerthal", "Osweiler", "Rippig", "Rosport", "Scheidgen", "Steinheim", "Waldbillig", "Weilerbach", "Zittig"]
      },
      {
        name: "Esch-sur-Alzette",
        cities: ["Abweiler", "Aspelt", "Belvaux", "Berchem", "Bergem", "Bettembourg", "Bivange", "Crauthem", "Differdange", "Dudelange", "Ehlange", "Ehlerange", "Esch-Alzette", "Fennange", "Foetz", "Fousbann", "Frisange", "Hellange", "Huncherange", "Kayl", "Kockelscheuer", "Lamadelaine", "Lasauvage", "Leudelange", "Limpach", "Livange", "Mondercange", "Niedercorn", "Noertzange", "Obercorn", "Peppange", "Petange", "Pissange", "Pontpierre", "Reckange-sur-Mess", "Rodange", "Roedgen", "Roeser", "Rumelange", "Sanem", "Schifflange", "Soleuvre", "Tetange", "Wickrange"]
      },
      {
        name: "Grevenmacher",
        cities: ["Ahn-Dreiborn", "Altlinster", "Beidweiler", "Berbourg", "Berg", "Betzdorf", "Beyren", "Biwer", "Biwerbach", "Boudler", "Boudlerbach", "Bourglinster", "Breinert", "Brouch", "Ehnen", "Eisenborn", "Eschweiler", "Flaxweiler", "Godbrange", "Gonderange", "Gostingen", "Graulinster-Blumenthal", "Grevenmacher", "Hagelsdorf", "Imbringen", "Junglinster", "Lellig", "Machtum", "Manternach", "Mensdorf", "Mertert", "Munschecker", "Niederdonven", "Oberdonven", "Olingen", "Rodenbourg", "Wasserbillig", "Wecker", "Wecker-Gare", "Weydig", "Wormeldange", "Wormeldange-Haut"]
      },
      {
        name: "Luxembourg",
        cities: ["Alzingen", "Bereldange", "Bertrange", "Contern", "Ernster", "Fentange", "Findel", "Hassel", "Heisdorf", "Helmsange", "Hesperange", "Hostert", "Howald", "Itzig", "Luxembourg", "Medingen", "Moutfort", "Mullendorf", "Munsbach", "Neuhaeusgen", "Niederanven", "Oberanven", "Oetrange", "Rameldange", "Sandweiler", "Schrassig", "Schuttrange", "Senningen", "Senningerberg", "Steinsel", "Strassen", "Syren", "Uebersyren", "Waldhof", "Walferdange", "Weiler-la-Tour"]
      },
      {
        name: "Mersch",
        cities: ["Angelsberg", "Ansembourg", "Beringen", "Bissen", "Blaschette", "Boevange-Attert", "Bofferdange", "Bour", "Brouch", "Buschdorf", "Colmar-Berg", "Cruchten", "Ernzen", "Essingen", "Fischbach", "Glabach", "Gosseldange", "Grevenknapp-Bill-Finsterthal", "Heffingen", "Helmdange", "Hollenfels", "Hunsdorf", "Larochette", "Lintgen", "Lorentzweiler", "Marienthal", "Mersch", "Moesdorf", "Nommern", "Pettingen", "Prettange", "Reckange", "Reuland", "Rollingen", "Scherbach", "Scherfenhof", "Schiltzberg", "Schoenfels", "Schoos", "Schrondweiler", "Tuntange"]
      },
      {
        name: "Redange",
        cities: ["Arsdorf", "Beckerich", "Bettborn", "Bigonville", "Bilsdorf", "Brattert-Rindschleiden", "Buschrodt", "Calmus", "Colpach-Bas", "Colpach-Haut", "Dellen-Lehrhof-Grevels", "Ehner", "Ell", "Eltz", "Elvange", "Eschette", "Everlange", "Folschette", "Grevels", "Grosbous", "Haut-Martelange", "Heispelt", "Holtz", "Hostert", "Hovelange", "Huttange", "Kapweiler", "Koetschette", "Kuborn", "Lannen", "Levelange", "Michelbouch", "Nagem", "Niederpallen", "Noerdange", "Oberpallen", "Ospern", "Perle", "Petit-Nobressart", "Platen", "Pratz", "Rambrouch", "Redange", "Reichlange", "Reimberg", "Rippweiler", "Rombach", "Roodt", "Saeul", "Schandel", "Schwebach", "Schweich", "Useldange", "Vichten", "Wahl", "Wolwelange"]
      },
      {
        name: "Remich",
        cities: ["Altwies", "Assel", "Bech-Kleinmacher", "Bous", "Burmerange", "Canach", "Dalheim", "Ellange", "Elvange", "Emerange", "Erpeldange", "Filsdorf", "Greiveldange", "Lenningen", "Mondorf-les-Bains", "Remerschen", "Remich", "Rolling", "Schengen", "Schwebsingen", "Stadtbredimus", "Trintange", "Trintange-Ersange-Roedt", "Waldbredimus", "Welfrange", "Wellenstein", "Wintrange"]
      },
      {
        name: "Vianden",
        cities: ["Bettel", "Bivels", "Fouhren", "Gralingen", "Longsdorf", "Merscheid", "Nachtmanderscheid", "Putscheid", "Stolzembourg", "Vianden", "Walsdorf", "Weiler"]
      },
      {
        name: "Wiltz",
        cities: ["Alscheid", "Baschleiden", "Bavigne", "Berle", "Bockholtz", "Boulaide", "Buderscheid", "Dahl", "Doncols", "Enscherange", "Erpeldange", "Esch-sur-Sure", "Eschdorf", "Eschweiler", "Goesdorf", "Grumelscheid", "Harlange", "Heiderscheid", "Heiderscheid-Fond", "Hierheck", "Insenborn", "Kaundorf", "Kautenbach", "Knaphoscheid", "Lellingen", "Liefrange", "Lultzhausen", "Masseler", "Mecher", "Merckholtz", "Merscheid", "Neunhausen", "Nocher", "Nocher-Route", "Noertrange", "Nothum", "Pintsch", "Pommerloch", "Schleif", "Selscheid", "Sonlez", "Surre", "Tadler-Ringel-Dirbach", "Tarchamps", "Watrange", "Wiltz", "Wilwerwiltz", "Winseler"]
      }
    ],
    isoAlpha2: "LU",
    isoAlpha3: "LUX",
    isoNumeric: 442
  },
  {
    name: "Macao",
    flag: "🇲🇴",
    currency: {
      code: "MOP",
      name: "Pataca",
      symbol: "MOP"
    },
    states: [
      {
        name: "Macau",
        cities: ["Macau"]
      }
    ],
    isoAlpha2: "MO",
    isoAlpha3: "MAC",
    isoNumeric: 446
  },
  {
    name: "Macedonia",
    flag: "🇲🇰",
    currency: {
      code: "MKD",
      name: "Denar",
      symbol: "ден"
    },
    states: [
      {
        name: "Berovo",
        cities: ["Berovo", "Pehchevo"]
      },
      {
        name: "Bitola",
        cities: ["Bach", "Bistrica", "Bitola", "Capari", "Dobrushevo", "Kukurechani", "Mogila", "Novaci", "Staravina"]
      },
      {
        name: "Brod",
        cities: ["Brod", "Plasnica", "Samokov"]
      },
      {
        name: "Debar",
        cities: ["Debar", "Zhupa"]
      },
      {
        name: "Delchevo",
        cities: ["Delchevo", "Kamenica"]
      },
      {
        name: "Demir Hisar",
        cities: []
      },
      {
        name: "Gevgelija",
        cities: ["Bogdanci", "Gevgelija", "Miravci", "Star Dojran"]
      },
      {
        name: "Gostivar",
        cities: ["Chegrane", "Dolna Banjica", "Gostivar", "Mavrovi Anovi", "Negotino-Poloshko", "Rostusha", "Srbinovo", "Vrapchishte", "Vrutok"]
      },
      {
        name: "Kavadarci",
        cities: ["Kavadarci", "Konopishte", "Rosoman"]
      },
      {
        name: "Kichevo",
        cities: ["Drugovo", "Kichevo", "Oslomej", "Vraneshtica", "Zajas"]
      },
      {
        name: "Kochani",
        cities: ["Cheshinovo", "Kochani", "Obleshevo", "Zletovo"]
      },
      {
        name: "Kratovo",
        cities: ["Kratovo"]
      },
      {
        name: "Kriva Palanka",
        cities: []
      },
      {
        name: "Krushevo",
        cities: ["Krushevo", "Zhitoshe"]
      },
      {
        name: "Kumanovo",
        cities: ["Izvor", "Klechevce", "Kumanovo", "Lipkovo", "Orashac", "Staro Nagorichane"]
      },
      {
        name: "Negotino",
        cities: ["Demir Kapija", "Negotino"]
      },
      {
        name: "Ohrid",
        cities: ["Belchishta", "Kosel", "Mesheishta", "Ohrid"]
      },
      {
        name: "Prilep",
        cities: ["Dolneni", "Krivogashtani", "Prilep", "Topolchani", "Vitolishte"]
      },
      {
        name: "Probishtip",
        cities: ["Probishtip"]
      },
      {
        name: "Radovish",
        cities: ["Konche", "Podaresh", "Radovish"]
      },
      {
        name: "Resen",
        cities: ["Resen"]
      },
      {
        name: "Shtip",
        cities: ["Karbinci", "Shtip", "Stip"]
      },
      {
        name: "Skopje",
        cities: ["Arachinovo", "Chucher", "Ilinden", "Kondovo", "Petrovec", "Saraj", "Skopje", "Sopishte", "Studenichani", "Zelenikovo"]
      },
      {
        name: "Struga",
        cities: ["Delogozhdi", "Labunishta", "Lukovo", "Struga", "Veleshta", "Vevchani"]
      },
      {
        name: "Strumica",
        cities: ["Bosilovo", "Kuklish", "Murtino", "Novo Selo", "Strumica", "Vasilevo"]
      },
      {
        name: "Sveti Nikole",
        cities: []
      },
      {
        name: "Tetovo",
        cities: ["Bogovinje", "Brvenica", "Dzhepchishte", "Jegunovce", "Kamenjance", "Shipkovica", "Tearce", "Tetovo", "Vratnica", "Zhelino"]
      },
      {
        name: "Valandovo",
        cities: ["Valandovo"]
      },
      {
        name: "Veles",
        cities: ["Bogomila", "Chashka", "Gradsko", "Veles"]
      },
      {
        name: "Vinica",
        cities: ["Blatec", "Orizari", "Vinica", "Zrnovci"]
      }
    ],
    isoAlpha2: "MK",
    isoAlpha3: "MKD",
    isoNumeric: 807
  },
  {
    name: "Madagascar",
    flag: "🇲🇬",
    currency: {
      code: "MGA",
      name: "Ariary",
      symbol: false
    },
    states: [
      {
        name: "Antananarivo",
        cities: ["Ambatolampy", "Anjozorobe", "Ankazobe", "Antananarivo", "Antanifotsy", "Antsirabe", "Arivonimamo", "Betafo", "Faratsiho", "Fenoarivo", "Manjakandriana", "Soavinandriana", "Tsiroanomandidy"]
      },
      {
        name: "Antsiranana",
        cities: ["Ambanja", "Ambilobe", "Andapa", "Antalaha", "Antsirambazaha", "Antsiranana", "Sambava"]
      },
      {
        name: "Fianarantsoa",
        cities: ["Ambalavao", "Ambatofinandrahana", "Ambositra", "Fandriana", "Farafangana", "Fianarantsoa", "Ifanadiana", "Ihosy", "Ikalamavony", "Ikongo", "Manakara", "Manandriana", "Mananjary", "Nosy Varika", "Vangaindrano", "Vondrozo"]
      },
      {
        name: "Mahajanga",
        cities: ["Ambato Boina", "Antsohihy", "Bealanana", "Mahajanga", "Marovoay", "Tsaratanana"]
      },
      {
        name: "Toamasina",
        cities: ["Ambatondrazaka", "Ambodifototra", "Amparafaravola", "Andevoranto", "Andilamena", "Anosibe An''ala", "Fenoarivo Atsinanana", "Mahanoro", "Mananara", "Maroantsetra", "Marolambo", "Moramanga", "Soanierana Ivongo", "Toamasina", "Vavatenina", "Vohibinany"]
      },
      {
        name: "Toliary",
        cities: ["Amboasary", "Ambovombe", "Ampanihy", "Ankazoabo", "Beloha", "Belon''i Tsiribihina", "Beroroha", "Betioky", "Miandrivazo", "Morondava", "Sakaraha", "Taolanaro", "Toliary", "Tsihombe"]
      }
    ],
    isoAlpha2: "MG",
    isoAlpha3: "MDG",
    isoNumeric: 450
  },
  {
    name: "Malawi",
    flag: "🇲🇼",
    currency: {
      code: "MWK",
      name: "Kwacha",
      symbol: "MK"
    },
    states: [
      {
        name: "Balaka",
        cities: ["Balaka"]
      },
      {
        name: "Blantyre City",
        cities: []
      },
      {
        name: "Chikwawa",
        cities: ["Chikwawa"]
      },
      {
        name: "Chiradzulu",
        cities: ["Chiradzulu"]
      },
      {
        name: "Chitipa",
        cities: ["Chitipa"]
      },
      {
        name: "Dedza",
        cities: ["Chipoka", "Dedza"]
      },
      {
        name: "Dowa",
        cities: ["Dowa", "Mponela"]
      },
      {
        name: "Karonga",
        cities: ["Chilumba", "Karonga", "Livingstonia"]
      },
      {
        name: "Kasungu",
        cities: ["Kasungu"]
      },
      {
        name: "Lilongwe City",
        cities: []
      },
      {
        name: "Machinga",
        cities: ["Liwonde", "Machinga"]
      },
      {
        name: "Mangochi",
        cities: ["Mangochi", "Monkey Bay"]
      },
      {
        name: "Mchinji",
        cities: ["Mchinji"]
      },
      {
        name: "Mulanje",
        cities: ["Mulanje"]
      },
      {
        name: "Mwanza",
        cities: ["Mwanza"]
      },
      {
        name: "Mzimba",
        cities: ["Mzimba"]
      },
      {
        name: "Mzuzu City",
        cities: []
      },
      {
        name: "Nkhata Bay",
        cities: []
      },
      {
        name: "Nkhotakota",
        cities: ["Nkhotakota"]
      },
      {
        name: "Nsanje",
        cities: ["Nsanje"]
      },
      {
        name: "Ntcheu",
        cities: ["Ntcheu"]
      },
      {
        name: "Ntchisi",
        cities: ["Ntchisi"]
      },
      {
        name: "Phalombe",
        cities: ["Phalombe"]
      },
      {
        name: "Rumphi",
        cities: ["Rumphi"]
      },
      {
        name: "Salima",
        cities: ["Salima"]
      },
      {
        name: "Thyolo",
        cities: ["Luchenza", "Thyolo"]
      },
      {
        name: "Zomba Municipality",
        cities: []
      }
    ],
    isoAlpha2: "MW",
    isoAlpha3: "MWI",
    isoNumeric: 454
  },
  {
    name: "Malaysia",
    flag: "🇲🇾",
    currency: {
      code: "MYR",
      name: "Ringgit",
      symbol: "RM"
    },
    states: [
      {
        name: "Johor",
        cities: ["Bandar Maharani", "Bandar Penggaram", "Bukit Bakri", "Buloh Kasap", "Chaah", "Johor Bahru", "Kelapa Sawit", "Kluang", "Kota Tinggi", "Kulai", "Labis", "Ledang", "Masai", "Mersing", "Parit Raja", "Pasir Gudang", "Pekan Nenas", "Pontian Kecil", "Segamat", "Sekudai", "Senai", "Simpang Rengam", "Tangkak", "Ulu Tiram", "Yong Peng"]
      },
      {
        name: "Kedah",
        cities: ["Alor Setar", "Bailing", "Bedong", "Gurun", "Jitra", "Kuah", "Kuala Kedah", "Kulim", "Langgar", "Sungai Petani"]
      },
      {
        name: "Kelantan",
        cities: ["Gua Musang", "Kadok", "Kota Bahru", "Kuala Krai", "Pangkal Kalong", "Pasir Mas", "Peringat", "Tanah Merah", "Tumpat", "Wakaf Baru"]
      },
      {
        name: "Kuala Lumpur",
        cities: []
      },
      {
        name: "Labuan",
        cities: ["Labuan"]
      },
      {
        name: "Melaka",
        cities: ["Alor Gajah", "Ayer Keroh", "Ayer Molek", "Batu Berendam", "Bemban", "Bukit Baru", "Bukit Rambai", "Klebang", "Kuala Sungai Baru", "Malacca", "Masjid Tanah", "Melaka", "Pulau Sebang", "Sungai Udang"]
      },
      {
        name: "Negeri Johor",
        cities: []
      },
      {
        name: "Negeri Sembilan",
        cities: []
      },
      {
        name: "Pahang",
        cities: ["Bandar Jengka Pusat", "Bentong", "Bukit Tinggi", "Jerantut", "Karak", "Kuala Lipis", "Kuantan", "Mentakab", "Pekan", "Pulau Pinang", "Raub", "Temerloh"]
      },
      {
        name: "Penang",
        cities: ["Bayan Lepas", "Church Town", "George Town"]
      },
      {
        name: "Perak",
        cities: ["Ayer Tawar", "Bagan Serai", "Batu Gajah", "Bidor", "Ipoh", "Jelapang", "Kampar", "Kampong Koh", "Kuala Kangsar", "Lawan Kuda Baharu", "Lumut", "Pantai Remis", "Parit Buntar", "Perak", "Pusing", "Simpang Empat", "Sungai Siput Utara", "Taiping", "Tanjong Malim", "Tapah", "Teluk Intan"]
      },
      {
        name: "Perlis",
        cities: ["Kangar", "Kuala Perlis"]
      },
      {
        name: "Pulau Pinang",
        cities: []
      },
      {
        name: "Sabah",
        cities: ["Beaufort", "Donggongon", "Keningau", "Kinarut", "Kota Belud", "Kota Kinabalu", "Kudat", "Kunak", "Lahad Datu", "Papar", "Putatan", "Ranau", "Sandakan", "Semporna", "Tawau"]
      },
      {
        name: "Sarawak",
        cities: ["Batu Delapan Bazaar", "Bintulu", "Kapit", "Kota Samarahan", "Kuching", "Limbang", "Miri", "Sarawak", "Sarikel", "Sibu", "Sri Aman"]
      },
      {
        name: "Selangor",
        cities: ["Ampang", "Ampang Jaya", "Balakong", "Bandar Baru Bangi", "Bandar Baru Salak Tinggi", "Bander Baro Bangi", "Banting", "Batang Berjuntai", "Batu Arang", "Batu Sembilan Cheras", "Beranang", "Bukit Beruntung", "Cyberjaya", "Darul Ehsan", "Dungun", "Gombak Setia", "Jenjarom", "Kajang", "Kajang-Sungai Chua", "Klang", "Kuala Kubu Baru", "Kuala Selangor", "Kuang", "Pengkalan Kundang", "Petaling Jaya", "Port Klang", "Puchong", "Rawang", "Sabak", "Sekinchan", "Selayang Baru", "Semenyih", "Serendah", "Seri Kembangan", "Shah Alam", "Subang Jaya", "Sungai Besar", "Sungai Buloh", "Sungai Pelek", "Taman Greenwood", "Tanjong Karang", "Tanjong Sepat"]
      },
      {
        name: "Sembilan",
        cities: ["Bahaiyah", "Langkap"]
      },
      {
        name: "Terengganu",
        cities: ["Cukai", "Jertih", "Kemaman", "Kerteh", "Kuala Terengganu", "Marang", "Paka", "Serdang"]
      }
    ],
    isoAlpha2: "MY",
    isoAlpha3: "MYS",
    isoNumeric: 458
  },
  {
    name: "Maldives",
    flag: "🇲🇻",
    currency: {
      code: "MVR",
      name: "Rufiyaa",
      symbol: "Rf"
    },
    states: [
      {
        name: "Alif Alif",
        cities: []
      },
      {
        name: "Alif Dhaal",
        cities: []
      },
      {
        name: "Baa",
        cities: ["Dharavandhoo", "Dhonfanu", "Eydhafushi", "Fehendhoo", "Fulhadhoo", "Goidhoo", "Hithaadhoo", "Kamadhoo", "Kendhoo", "Kihaadhoo", "Kudarikilu", "Maalhos", "Thulhaadhoo"]
      },
      {
        name: "Dhaal",
        cities: ["Badidhoo", "Gemendhoo", "Hulhudheli", "Kudahuvadhoo", "Maaeboodhoo", "Meedhoo", "Ribudhoo", "Vaanee"]
      },
      {
        name: "Faaf",
        cities: ["Biledhdhoo", "Dharaboodhoo", "Feeali", "Magoodhoo", "Nilandhoo"]
      },
      {
        name: "Gaaf Alif",
        cities: []
      },
      {
        name: "Gaaf Dhaal",
        cities: []
      },
      {
        name: "Ghaviyani",
        cities: ["Fuvammulah"]
      },
      {
        name: "Haa Alif",
        cities: []
      },
      {
        name: "Haa Dhaalu",
        cities: []
      },
      {
        name: "Kaaf",
        cities: ["Dhiffushi", "Gaafaru", "Gulhi", "Guraidhoo", "Himmafushi", "Huraa", "Kaashidhoo", "Maafushi", "Thulusdhoo"]
      },
      {
        name: "Laam",
        cities: ["Dhabidhoo", "Fonadhoo", "Gaadhoo", "Gamu", "Hithadhoo", "Isdhoo", "Kalhaidhoo", "Kunahandhoo", "Maabaidhoo", "Maamendhoo", "Maavah", "Mundhoo"]
      },
      {
        name: "Lhaviyani",
        cities: ["Hinnavaru", "Kurendhoo", "Maafilaafushi", "Naifaru", "Olhuvelifushi"]
      },
      {
        name: "Male",
        cities: []
      },
      {
        name: "Miim",
        cities: ["Dhiggaru", "Kolhufushi", "Madifushi", "Maduvvari", "Mulah", "Muli", "Naalaafushi", "Raimandhoo", "Veyvah"]
      },
      {
        name: "Nuun",
        cities: ["Fodhdhoo", "Hebadhoo", "Holhudhoo", "Kedhikolhudhoo", "Kudafari", "Landhoo", "Lhohi", "Maafaru", "Maalhendhoo", "Magoodhoo", "Manadhoo", "Miladhoo", "Velidhoo"]
      },
      {
        name: "Raa",
        cities: ["Agolhitheemu", "Alifushi", "Fainu", "Hulhudhuffaaru", "Iguraidhoo", "Innamaadhoo", "Kadholhudhoo", "Kinolhas", "Maakurathu", "Maduvvari", "Meedhoo", "Rasgetheemu", "Rasmaadhoo", "Ugoofaaru", "Vaadhoo"]
      },
      {
        name: "Shaviyani",
        cities: ["Bilehffahi", "Feevah", "Feydhoo", "Firubaidhoo", "Foakaidhoo", "Funadhoo", "Goidhoo", "Kaditheemu", "Komandoo", "Lhaimagu", "Maakandoodhoo", "Maaugoodhoo", "Maroshi", "Narudhoo", "Noomaraa"]
      },
      {
        name: "Siin",
        cities: ["Feydhoo", "Hithadhoo", "Hulhudhoo", "Maradhoo", "Maradhoo-Feydhoo", "Meedhoo"]
      },
      {
        name: "Thaa",
        cities: ["Buruni", "Dhiyamigili", "Gaadhiffushi", "Guraidhoo", "Hirilandhoo", "Kadoodhoo", "Kibidhoo", "Madifushi", "Omadhoo", "Thimarafushi", "Vandhoo", "Veymandhoo", "Vilufushi"]
      },
      {
        name: "Vaav",
        cities: ["Felidhoo", "Fulidhoo", "Keyodhoo", "Rakeedhoo", "Thinadhoo"]
      },
      {
        name: "Upper North Province",
        cities: ["Kulhudhuffushi", "Haa Alif", "Haa Dhaalu", "Shaviyani", "Kulhudhuffushi"]
      },
      {
        name: "North Province",
        cities: ["Felivaru", "Baa", "Lhaviyani", "Noonu", "Raa"]
      },
      {
        name: "North Central Province",
        cities: ["Alif Alif", "Alif Dhaal", "Kaafu", "Vaavu", "Male", "Thulusdhoo"]
      },
      {
        name: "Central Province",
        cities: ["Dhaalu", "Faafu", "Meemu", "Kudahuvadhoo"]
      },
      {
        name: "South Central Province",
        cities: ["Thaa", "Laamu", "Gan"]
      },
      {
        name: "Upper South Province",
        cities: ["Gaafu Alif", "Gaafu Dhaalu", "Thinadhoo"]
      },
      {
        name: "South Province",
        cities: ["Gnaviyani", "Addu City", "Hithadhoo"]
      }
    ],
    isoAlpha2: "MV",
    isoAlpha3: "MDV",
    isoNumeric: 462
  },
  {
    name: "Mali",
    flag: "🇲🇱",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Bamako",
        cities: ["Bamako"]
      },
      {
        name: "Gao",
        cities: ["Gao"]
      },
      {
        name: "Kayes",
        cities: ["Bafoulabe", "Kayes", "Kita", "Nioro"]
      },
      {
        name: "Kidal",
        cities: ["Kidal", "Tessalit"]
      },
      {
        name: "Koulikoro",
        cities: ["Banamba", "Kangaba", "Kati", "Kolokani", "Koulikoro", "Nara"]
      },
      {
        name: "Mopti",
        cities: ["Bandiagara", "Djenne", "Douentza", "Koro", "Mopti", "Tenenkou"]
      },
      {
        name: "Segou",
        cities: ["Ke-Massina", "Kimparana", "Markala", "Niono", "San", "Segou", "Sokolo"]
      },
      {
        name: "Sikasso",
        cities: ["Bougouni", "Kolondieba", "Koutiala", "Sikasso", "Yorosso"]
      },
      {
        name: "Tombouctou",
        cities: ["Araouane", "Dire", "Goundam", "Niafunke", "Taoudenni", "Tombouctou"]
      }
    ],
    isoAlpha2: "ML",
    isoAlpha3: "MLI",
    isoNumeric: 466
  },
  {
    name: "Malta",
    flag: "🇲🇹",
    currency: {
      code: "MTL",
      name: "Lira",
      symbol: false
    },
    states: [
      {
        name: "Gozo and Comino",
        cities: []
      },
      {
        name: "Inner Harbour",
        cities: []
      },
      {
        name: "Northern",
        cities: ["Gharghur", "Mellieha", "Mgarr", "Mosta", "Naxxar", "San Pawl il-Bahar"]
      },
      {
        name: "Outer Harbour",
        cities: []
      },
      {
        name: "South Eastern",
        cities: []
      },
      {
        name: "Valletta",
        cities: ["L-Iklin"]
      },
      {
        name: "Western",
        cities: ["Attard", "Balzan", "Dingli", "Iklin", "Lija", "Mdina", "Rabat", "Sighghiewi", "Zebbug"]
      }
    ],
    isoAlpha2: "MT",
    isoAlpha3: "MLT",
    isoNumeric: 470
  },
  {
    name: "Marshall Islands",
    flag: "🇲🇭",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Ailinlaplap",
        cities: ["Aerok", "Beran", "Bikeer", "Buoj", "Enewe", "Jabwan", "Jah", "Jeh", "Kattiej", "Mejajok", "Mejil", "Tobomaro", "Woja", "Wolar"]
      },
      {
        name: "Ailuk",
        cities: ["Ailuk", "Ajelep", "Aliej", "Biken", "Enejabrok", "Enejelar", "Kapen"]
      },
      {
        name: "Arno",
        cities: ["Arno Arno", "Bikarej", "Bikonele", "Boken", "Eneaidrik", "Enirik", "Ijoen", "Ine", "Japo", "Jilane", "Kejbwe", "Kilange", "Kilemman", "Kinajon", "Langor", "Lukoj", "Malel", "Manrar", "Matolen", "Meetdik", "Mian", "Najaj", "Namwi", "Neenkotkot", "Taklep", "Tinak", "Tutu", "Ulien"]
      },
      {
        name: "Aur",
        cities: ["Aur", "Tabal"]
      },
      {
        name: "Bikini",
        cities: ["Eneu"]
      },
      {
        name: "Ebon",
        cities: ["Emej", "Enearmij", "Enekoion", "Enilok", "Jittaken", "Jittoen", "Rerok", "Toka"]
      },
      {
        name: "Enewetak",
        cities: ["Enewetak", "Japtan", "Medren"]
      },
      {
        name: "Jabat",
        cities: ["Jabat"]
      },
      {
        name: "Jaluit",
        cities: ["Ae", "Ajejen", "Anilep", "Arreen", "Bokanake", "Bokkan", "Bukantorak", "Dede", "Ewo", "Imiej", "Imroj", "Jabnoren", "Jabwor", "Jaluit", "Lonone", "Mejatto", "Mejrirok", "Menge", "Nabbe", "Narmej", "Urbaj"]
      },
      {
        name: "Kili",
        cities: ["Kili"]
      },
      {
        name: "Kwajalein",
        cities: ["Arbwa", "Ebadon", "Ebeye", "Ebjadik", "Ebwaj", "Ennilabegan", "Enubirr", "Enubuj", "Gugeegue", "Mejatto", "Ningi", "North Loi", "Orpap", "South Loi"]
      },
      {
        name: "Lae",
        cities: ["Enerein", "Lae", "Lejab"]
      },
      {
        name: "Lib",
        cities: ["Lib"]
      },
      {
        name: "Likiep",
        cities: ["Jebal", "Likiep", "Liklal", "Melang"]
      },
      {
        name: "Majuro",
        cities: ["Ajeltake", "Aneenwudej", "Aneko", "Arrak", "Biken", "Bokaetoktok", "Denmeo", "Didej", "Ejit", "Enemanet", "Jelter", "Kalalen", "Kemman", "Laura", "Pikiriin", "Rita", "Rongrong", "Woja"]
      },
      {
        name: "Maloelap",
        cities: ["Airok", "Jang", "Kaben", "Tarawa", "Wolot"]
      },
      {
        name: "Mejit",
        cities: ["Mejit"]
      },
      {
        name: "Mili",
        cities: ["Aeloneo", "Anel", "Arbar", "Bar", "Bikonel", "Enajet", "Eoo", "Jabonwod", "Loen", "Lukoj", "Lukonwor", "Mae", "Majkin", "Mili", "Nad", "Nallu", "Tokewa", "Wau"]
      },
      {
        name: "Namorik",
        cities: ["Namorik"]
      },
      {
        name: "Namu",
        cities: ["Namu"]
      },
      {
        name: "Rongelap",
        cities: ["Rongelap"]
      },
      {
        name: "Ujae",
        cities: ["Ujae"]
      },
      {
        name: "Utrik",
        cities: ["Utirik"]
      },
      {
        name: "Wotho",
        cities: ["Wotho"]
      },
      {
        name: "Wotje",
        cities: ["Didi", "Nibun", "Wormej", "Wotje"]
      }
    ],
    isoAlpha2: "MH",
    isoAlpha3: "MHL",
    isoNumeric: 584
  },
  {
    name: "Martinique",
    flag: "🇲🇶",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Fort-de-France",
        cities: ["Fort-de-France", "Le Lamentin", "Saint-Joseph", "Schoelcher"]
      },
      {
        name: "La Trinite",
        cities: []
      },
      {
        name: "Le Marin",
        cities: []
      },
      {
        name: "Saint-Pierre",
        cities: ["Le Morne-Rouge", "Saint-Pierre"]
      }
    ],
    isoAlpha2: "MQ",
    isoAlpha3: "MTQ",
    isoNumeric: 474
  },
  {
    name: "Mauritania",
    flag: "🇲🇷",
    currency: {
      code: "MRO",
      name: "Ouguiya",
      symbol: "UM"
    },
    states: [
      {
        name: "Adrar",
        cities: ["Atar", "Shingati"]
      },
      {
        name: "Assaba",
        cities: ["Kifah"]
      },
      {
        name: "Brakna",
        cities: ["Alaq", "Buqah", "Magta'' Lahjar"]
      },
      {
        name: "Dhakhlat Nawadibu",
        cities: []
      },
      {
        name: "Hudh-al-Gharbi",
        cities: ["Ayun-al-''Atrus", "Kubanni"]
      },
      {
        name: "Hudh-ash-Sharqi",
        cities: ["Timbedra", "Walatah", "an-Na''mah"]
      },
      {
        name: "Inshiri",
        cities: ["Aqjawajat"]
      },
      {
        name: "Nawakshut",
        cities: ["Nawakshut"]
      },
      {
        name: "Qidimagha",
        cities: ["Hsay Walad ''Ali Babi"]
      },
      {
        name: "Qurqul",
        cities: ["Kayhaydi"]
      },
      {
        name: "Taqant",
        cities: ["Tijiqjah"]
      },
      {
        name: "Tiris Zammur",
        cities: []
      },
      {
        name: "Trarza",
        cities: ["Rusu"]
      }
    ],
    isoAlpha2: "MR",
    isoAlpha3: "MRT",
    isoNumeric: 478
  },
  {
    name: "Mauritius",
    flag: "🇲🇺",
    currency: {
      code: "MUR",
      name: "Rupee",
      symbol: "₨"
    },
    states: [
      {
        name: "Black River",
        cities: []
      },
      {
        name: "Eau Coulee",
        cities: []
      },
      {
        name: "Flacq",
        cities: ["Bel Air", "Bon Accueil", "Brisee Verdiere", "Camp Ithier", "Camp de Masque", "Camp de Masque Pave", "Central Flacq", "Clemencia", "Ecroignard", "Grand River South East", "Lalmatie", "Laventure", "Mare La Chaux", "Medine-Camp de Masque", "Olivia", "Poste de Flacq", "Quatre Cocos", "Quatre Soeurs", "Queen Victoria", "Saint Julien", "Saint Julien d''Hotman", "Sebastopol", "Trou d''Eau Douce"]
      },
      {
        name: "Floreal",
        cities: ["Floreal"]
      },
      {
        name: "Grand Port",
        cities: []
      },
      {
        name: "Moka",
        cities: ["Camp Thorel", "Dagotiere", "Dubreuil", "Esperance", "L''Avenir", "La Laura-Malenga", "Melrose", "Moka", "Montagne Blanche", "Pailles", "Providence", "Quartier Militaire", "Ripailles", "Saint Pierre", "Verdun"]
      },
      {
        name: "Pamplempousses",
        cities: ["Arsenal", "Baie du Tombeau", "Calebasses", "Congomah", "Creve Coeur", "D''Epinay", "Fond du Sac", "La Tour Koenig", "Le Hochet", "Long Mountain", "Morcellement Saint Andre", "Notre Dame", "Pamplemousse", "Plaines des Papayes", "Pointe aux Piments", "Terre Rouge", "Triolet", "Villebague"]
      },
      {
        name: "Plaines Wilhelm",
        cities: []
      },
      {
        name: "Port Louis",
        cities: []
      },
      {
        name: "Riviere du Rempart",
        cities: []
      },
      {
        name: "Rodrigues",
        cities: ["Baie Malgache", "Coromandel-Graviers", "Grand Baie-Montagne Goyaves", "La Ferme", "Lataniers-Mont Lubin", "Mangues-Quatre Vents", "Oyster Bay", "Petit Gabriel", "Piments-Baie Topaze", "Plaine Corail-La Fouche Corail", "Port Mathurin", "Port Sud-Est", "Riviere Cocos", "Roche Bon Dieu-Trefles"]
      },
      {
        name: "Rose Hill",
        cities: []
      },
      {
        name: "Savanne",
        cities: ["Baie du Cap", "Bel Ombre", "Benares", "Bois Cheri", "Britannia", "Camp Diable", "Chamouny", "Chemin Grenier", "Grand Bois", "Riviere des Anguilles", "Saint Aubin", "Souillac", "Surinam"]
      }
    ],
    isoAlpha2: "MU",
    isoAlpha3: "MUS",
    isoNumeric: 480
  },
  {
    name: "Mayotte",
    flag: "🇾🇹",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Mayotte",
        cities: ["Acoua", "Bandraboua", "Bandrele", "Boueni", "Chiconi", "Chirongui", "Dembeni", "Kanikeli", "Koungou", "Mamoudzou", "Mtsamboro", "Mtsangamouji", "Ouangani", "Sada", "Tsingoni"]
      },
      {
        name: "Pamanzi",
        cities: ["Dzaoudzi", "Pamanzi"]
      }
    ],
    isoAlpha2: "YT",
    isoAlpha3: "MYT",
    isoNumeric: 175
  },
  {
    name: "Mexico",
    flag: "🇲🇽",
    currency: {
      code: "MXN",
      name: "Peso",
      symbol: "$"
    },
    states: [
      {
        name: "Aguascalientes",
        cities: ["Aguascalientes", "Asientos", "Calvillo", "Cosio", "Margaritas", "Ojocaliente", "Pabellon de Arteaga", "Pabellon de Hidalgo", "Palo Alto", "Rincon de Romos", "San Francisco de los Romo", "San Jose de Gracia", "Tepezala", "Villa Juarez"]
      },
      {
        name: "Baja California",
        cities: []
      },
      {
        name: "Baja California Sur",
        cities: []
      },
      {
        name: "Campeche",
        cities: ["Becal", "Bolonchen", "Calkini", "Campeche", "Candelaria", "Carmen", "Champoton", "China", "Dzitbalche", "Escarcega", "Hecelchakan", "Hopelchen", "Isla Aguada", "Nuevo Progreso", "Nunkini", "Palizada", "Pomuch", "Sabancuy", "Seybaplaya", "Tenabo"]
      },
      {
        name: "Chiapas",
        cities: ["Acacoyagua", "Acala", "Acapetahua", "Altamirano", "Alvaro Obregon", "Amatan", "Amatenango del Valle", "Arriaga", "Benemerito de las Americas", "Berriozabal", "Bochil", "Cacahoatan", "Cancuc", "Catazaja", "Chalchihiutan", "Chanal", "Chiapa", "Chiapilla", "Chicomuselo", "Chilon", "Cintalapa", "Comaltitlan", "Comitan", "Copainala", "Copoya", "Cristobal Obregon", "El Bosque", "El Parral", "Escuintla", "Frontera Comalapa", "Frontera Corozal", "Frontera Hidalgo", "Huehuetan", "Huehuetan Estacion", "Huixtla", "Ixhuatan", "Ixtacomitan", "Ixtapa", "Jaltenango", "Jesus Maria Garza", "Jiquipilas", "Jitotol", "Juarez", "La Concordia", "La Libertad", "La Trinitaria", "Las Margaritas", "Las Rosas", "Mapastepec", "Mazatan", "Motozintla", "Navenchauc", "Nicolas Ruiz", "Ocosingo", "Ocotepec", "Ocozocoautla", "Ostuacan", "Oxchuc", "Palenque", "Palestina", "Pantelho", "Paredon", "Petalcingo", "Pichucalco", "Pijijiapan", "Pueblo Nuevo Solistahuacan", "Puerto Madero", "Pujiltic", "Raudales Malpaso", "Rayon", "Reforma", "Revolucion Mexicana", "Rincon Chamula", "Salto de Agua", "San Cristobal de las Casas", "San Fernando", "San Lucas", "San Pedro Buenavista", "Simojovel", "Socoltenango", "Soyalo", "Suchiapa", "Suchiate", "Tapachula", "Tapilula", "Tecpatan", "Tenango", "Teopisca", "Tila", "Tonala", "Totolapa", "Tres Picos", "Tuxtla Chico", "Tuxtla Gutierrez", "Tzimol", "Veinte de Noviembre", "Venustiano Carranza", "Villa Corzo", "Villaflores", "Yajalon", "Zinacantan"]
      },
      {
        name: "Chihuahua",
        cities: ["Adolfo Lopez Mateos", "Ahumada", "Anahuac", "Ascension", "Benito Juarez", "Camargo", "Carichi", "Casas Grandes", "Chihuahua", "Colonia Municipio Libre", "Creel", "Cuauhtemoc", "Delicias", "El Largo", "Guachochi", "Guadalupe", "Guadalupe y Calvo", "Hermenegildo Galeana", "Hidalgo", "Ignacio Zaragoza", "Jimenez", "Juan Aldama", "Juarez", "Lazaro Cardenas", "Madera", "Majimachi", "Meoqui", "Naica", "Nuevo Casas Grandes", "Octaviano Lopez", "Ojinaga", "Praxedis Guerrero", "Puerto Palomas", "Puerto de Anapra", "San Buenaventura", "San Francisco el Oro", "Santa Barbara", "Santa Cruz de Rosales", "Saucillo", "Valentin Gomez Farias", "Valle de Allende", "Vicente Guerrero"]
      },
      {
        name: "Coahuila",
        cities: ["Acuna", "Allende", "Arteaga", "Castanos", "Concordia", "Cuatrocienagas", "El Coyote", "Frontera", "General Cepeda", "Hercules", "Matamoros", "Minas de Barroteran", "Monclova", "Muzquiz", "Nadadores", "Nava", "Nueva Rosita", "Ocampo", "Palau", "Parras", "Piedras Negras", "Ramos Arizpe", "Sabinas", "Saltillo", "San Buenaventura", "San Pedro", "Torreon", "Venustiano Carranza", "Viesca", "Villa Madero", "Villa Union", "Zaragoza"]
      },
      {
        name: "Colima",
        cities: ["Armeria", "Cofradia", "Colima", "Colonia Bayardo", "Comala", "Coquimatlan", "Cuauhtemoc", "El Colomo", "Madrid", "Manzanillo", "Minatitlan", "Queseria", "Suchitlan", "Tecoman", "Villa de Alvarez"]
      },
      {
        name: "Distrito Federal",
        cities: []
      },
      {
        name: "Durango",
        cities: ["Bermejillo", "Canatlan", "Cuencame", "Durango", "Gomez Palacio", "Guadalupe Victoria", "Juarez", "Lerdo", "Mapimi", "Nazareno", "Nazas", "Nombre de Dios", "Nuevo Ideal", "Ocampo", "Panuco", "Papasquiaro", "Penon Blanco", "Poanas", "Pueblo Nuevo", "Rodeo", "Santa Catarina de Tepehuanes", "Santa Clara", "Santa Maria del Oro", "Suchil", "Tayoltita", "Tlahualilo", "Vicente Guerrero"]
      },
      {
        name: "Estado de Mexico",
        cities: []
      },
      {
        name: "Guanajuato",
        cities: ["Abasolo", "Acambaro", "Aldama", "Allende", "Antonio Rodriguez", "Apaseo el Alto", "Apaseo el Grande", "Celaya", "Centro Familiar la Soledad", "Cerano", "Cerro Gordo", "Colonias Nuevo Mexico", "Comonfort", "Coroneo", "Cortazar", "Cueramaro", "Doctor Mora", "Dolores Hidalgo", "Duarte", "El Sabino", "Escobedo", "Guanajuato", "Huanimaro", "Iramuco", "Irapuato", "Jaral del Progreso", "Jerecuaro", "Juventino Rosas", "La Aldea", "La Calera", "La Ermita", "La Moncada", "Leon", "Loma Pelada", "Manuel Doblado", "Maravatio", "Marfil", "Medina", "Mexicanos", "Moroleon", "Ocampo", "Octopan", "Pacueco", "Palo Verde", "Paracuaro", "Penjamo", "Plan de Ayala", "Pueblo Nuevo", "Purisima de Bustos", "Rincon de Tamayo", "Romita", "Salamanca", "Salvatierra", "San Bartolo de Berrios", "San Cristobal", "San Diego de la Union", "San Felipe", "San Francisco del Rincon", "San Jose Agua Azul", "San Jose Iturbide", "San Jose Temascatio", "San Juan de la Vega", "San Luis de la Paz", "San Nicolas de los Agustinos", "San Pedro de los Naranjos", "San Roque", "Santa Teresa", "Santiago de Cuenda", "Sarabia", "Silao", "Tarandacuao", "Tarimoro", "Teneria del Santuario", "Uriangato", "Urireo", "Valle de Santiago", "Valtierrilla", "Victoria", "Villagran", "Villas de Irapuato", "Yerbabuena", "Yuriria"]
      },
      {
        name: "Guerrero",
        cities: ["Acamixtla", "Acapulco", "Acatlan", "Ajuchitlan", "Alpoyeca", "Altamirano", "Apango", "Apaxtla", "Arcelia", "Atliaca", "Atoyac", "Ayutla", "Azoyu", "Bajos de Ejido", "Buenavista", "Chichihualco", "Chilapa", "Chilpancingo", "Coacoyul", "Cocula", "Copala", "Copalillo", "Coyuca", "Cruz Grande", "Cuajinicuilapa", "Cuautepec", "Cutzamala", "El Ocotito", "El Paraiso", "El Suchil", "Huamuxtitlan", "Huitziltepec", "Huitzuco", "Iguala", "Ixtapa", "Kilometro Treinta", "La Loma", "La Union", "Las Petaquillas", "Las Vigas", "Marquelia", "Mazatlan", "Mochitlan", "Olinala", "Ometepec", "Petatlan", "Pilcaya", "Quechultenango", "San Jeronimito", "San Jeronimo", "San Jose Ixtapa", "San Luis San Pedro", "San Marcos", "Taxco", "Taxco de Alarcon", "Tecoanapa", "Tecpan", "Teloloapan", "Tepecoacuilco", "Tierra Colorada", "Tixtla", "Tlacoachistlahuaca", "Tlacotepec", "Tlalchapa", "Tlamacazapa", "Tlapa", "Tlapehuala", "Totolapan", "Tres Palos", "Xalpatlahuac", "Xaltianguis", "Xochihuehuetlan", "Xochistlahuaca", "Zacualpan", "Zihuatanejo", "Zirandaro", "Zitlala", "Zumpango"]
      },
      {
        name: "Hidalgo",
        cities: ["Acaxochitlan", "Acayuca", "Actopan", "Ajacuba", "Almoloya", "Apan", "Atengo", "Atitalaquia", "Atotonilco de Tula", "Atotonilco el Grande", "Calnali", "Cardonal", "Chapulhuacan", "Cuautepec", "Doxey", "El Arenal", "El Llano", "El Rosario", "Emiliano Zapata", "Huautla", "Huejutla", "Hueytlalpan", "Huichapan", "Ixmiquilpan", "Jacala", "Jaltocan", "Los Reyes", "Mineral del Monte", "Mixquiahuala", "Molango", "Orizatlan", "Pachuca", "Pachuquilla", "Progreso", "Sahagun", "San Ildefonso", "San Juan Tepa", "San Marcos", "Singuilucan", "Tasquillo", "Tecozautla", "Tepatepec", "Tepeapulco", "Tepeji", "Tepepa", "Tetepango", "Tezontepec", "Tizayuca", "Tlahuelilpan", "Tlanalapa", "Tlanchinol", "Tlaxcoapan", "Tlaxiaca", "Tolcayuca", "Tula de Allende", "Tulancingo", "Tulantepec", "Vindho", "Zacualtipan", "Zapotlan", "Zempoala", "Zimapan"]
      },
      {
        name: "Jalisco",
        cities: ["Acatic", "Acatlan", "Ahualulco", "Ajijic", "Alejandria", "Amatitan", "Ameca", "Antonio Escobedo", "Arandas", "Atemajac", "Atequiza", "Atotonilco el Alto", "Atotonilquillo", "Atoyac", "Autlan", "Ayotlan", "Ayutla", "Bellavista", "Cajititlan", "Capilla de Guadalupe", "Casimiro Castillo", "Centro de Readaptacion Social", "Chapala", "Chiquilistlan", "Cihuatlan", "Cocula", "Colotlan", "Concepcion de Buenos Aires", "Cosala", "Coyula", "Cuitzeo", "Cuqio", "Cuyutlan", "Degollado", "El Arenal", "El Grullo", "El Limon", "El Quince", "El Refugio", "El Salto", "El Verde", "Encarnacion", "Etzatlan", "Guadalajara", "Guzman", "Hidalgo", "Hostotipaquillo", "Huejucar", "Huejuquilla el Alto", "Itzican", "Ixtapa", "Ixtlahuacan de los Membrillos", "Ixtlahuacan del Rio", "Ixtlan", "Jalostotitlan", "Jamay", "Jesus Maria", "Jocotepec", "Juanacatlan", "Juchitlan", "La Barca", "La Huerta", "La Ribera", "La Tijera", "La Venta del Astillero", "Lagos de Moreno", "Las Juntas", "Las Pintas", "Las Pintitas", "Lo Arado", "Magdalena", "Mascota", "Mazamitla", "Mexticacan", "Mezcala", "Nuevo Mexico", "Ocotlan", "Ojuelos de Jalisco", "Pihuamo", "Poncitlan", "Puente Grande", "Puerto Vallarta", "Purificacion", "San Agustin", "San Francisco de Asis", "San Gabriel", "San Jose de Gracia", "San Jose del Castillo", "San Juan de los Lagos", "San Julian", "San Marcos", "San Martin de Hidalgo", "San Miguel el Alto", "San Patricio", "San Sebastian del Sur", "San Sebastian el Grande", "Santa Anita", "Santa Cruz de las Flores", "Santa Cruz del Valle", "Sayula", "Tala", "Talpa", "Tamazula", "Tapalpa", "Tecalitlan", "Tecolotlan", "Tenamaxtlan", "Teocaltiche", "Teocuitatlan de Corona", "Tepatitlan", "Tequila", "Tesistan", "Teuchitlan", "Tizapan el Alto", "Tlajomulco", "Tlaquepaque", "Tomatlan", "Tonala", "Tonaya", "Tonila", "Tototlan", "Tuxpan", "Union de San Antonio", "Union de Tula", "Usmajac", "Valle de Guadalupe", "Valle de Juarez", "Villa Corona", "Villa Guerrero", "Yahualica", "Zacoalco", "Zapopan", "Zapote", "Zapotiltic", "Zapotlanejo"]
      },
      {
        name: "Mexico",
        cities: ["Acahualco", "Acambay", "Acazulco", "Acolman", "Acuautla", "Acutzilapan", "Ajoloapan", "Alborada", "Almaya", "Almoloya", "Almoloya del Rio", "Amanalco", "Amecameca", "Ameyalco", "Apaxco", "Atarasquillo", "Atenco", "Atizapan", "Atlacomulco", "Atlatlahuca", "Atlatongo", "Atlautla", "Atlazalpan", "Autopan", "Axapusco", "Ayotuzco", "Ayotzingo", "Azcatepec", "Balderas", "Bocanegra", "Boreje", "Buenavista", "Cacalomacan", "Cahuacan", "Calimaya", "Calixtlahuaca", "Capulhuac", "Carbon", "Cautzingo", "Chalco", "Chapultepec", "Chiautla", "Chicoloapan", "Chiconautla", "Chiconcuac", "Chimalhuacan", "Chimalpa", "Cholula", "Citendeje", "Coacalco", "Coachochitlan", "Coacomulco", "Coapango", "Coatepec", "Coatepec Harinas", "Coatlinchan", "Cocotitlan", "Colorines", "Concepcion Jolalpan", "Coyotepec", "Cuauhtemoc", "Cuauhtenco", "Cuautitlan", "Cuautitlan Izcalli", "Cuautlalpan", "Cuaxustenco", "Cuexontitlan", "Cuijingo", "Ecatepec", "Ecatzingo", "Ejido Cahuacan", "Ejido Veinte de Noviembre la C", "Ejido de la Y Seccion Siete a", "El Coporo", "El Oro", "Enchisi", "Enthavi", "Fuentes del Valle", "Huehuetoca", "Huexoculco", "Hueypoxtla", "Huilango", "Huitzilzingo", "Huixquilucan", "Huixquilucan de Degollado", "Huixtoco", "Ixlahuaca", "Ixtacalco", "Ixtapaluca", "Ixtapan", "Ixtlahuatzingo", "Jajalpa", "Jaltenco", "Jaltepec", "Jesus del Monte", "Jicaltepec Autopan", "Jilotepec", "Jilotzingo", "Jocotitlan", "Joquicingo", "Jorge Jimenez Cantu", "Juchitepec", "La Concepcion los Banos", "La Constitucion", "La Magdalema", "Lerma", "Loma de Juarez", "Lomas de Zacamulpa", "Lopez Mateos", "Los Esparragos", "Los Reyes", "Los Reyes Acozac", "Luvianos", "Malinalco", "Melchor Ocampo", "Metepec", "Mexicaltzingo", "Mextepec", "Montecillo", "Nativitas", "Naucalpan", "Nexquipayac", "Nextlalpan", "Nezahualcoyotl", "Nicolas Romero", "Nopaltepec", "Ocotitlan", "Ocotlan", "Ocoyoacac", "Ojo de Agua", "Otumba", "Otzacatipan", "Oyamel", "Oztolotepec", "Ozumba", "Papalotla", "Progreso Industrial", "Pueblo Nuevo", "Rayon", "Rio Frio", "Salitrillo", "San Antonio Buenavista", "San Antonio La Isla", "San Bartolo", "San Bartolo del Llano", "San Bernardino", "San Buenaventura", "San Felipe del Progreso", "San Jeronimo", "San Jose Guadalupe", "San Jose el Vidrio", "San Juan Tilapa", "San Juan de las Huertas", "San Juan y San Pedro Tezompa", "San Lorenzo Cuauhtenco", "San Martin de las Piramides", "San Miguel la Labor", "San Nicolas Guadalupe", "San Nicolas Tolentino", "San Pablo de las Salinas", "San Pedro Abajo", "San Pedro Arriba", "San Pedro el Alto", "San Pedro los Banos", "San Simon de la Laguna", "Santa Catarina del Monte", "Santa Cruz del Monte", "Santa Gertrudis", "Santa Maria del Monte", "Santo Domingo de Guzman", "Soyaniquilpan", "Sultepec", "Tecalco", "Tecamac", "Techuchulco", "Tecuahutitlan", "Tehuixtitlan", "Tejupilco", "Temamatla", "Temascalapa", "Temoaya", "Tenancingo", "Tenango de Arista", "Tenango del Aire", "Tenochtitlan", "Teoloyucan", "Teotihuacan", "Tepeolulco", "Tepetitlan", "Tepetlaoxtoc", "Tepetlixpa", "Tepexpan", "Tepotzotlan", "Tequexquinahuac", "Tequisistlan", "Tequixquiac", "Texcalyacac", "Texcoco", "Teyahualco", "Tezoquipan", "Tezoyuca", "Tianguistenco", "Tilapa", "Tlachaloya Segunda Seccion", "Tlachihualpa", "Tlacotepec", "Tlahuelilpan", "Tlaixpan", "Tlalcilalcalli", "Tlalcilalcalpan", "Tlalmanalco", "Tlalmimilolpan", "Tlalnepantla", "Tlaltelulco", "Tlaltizapan", "Tlanisco", "Toluca", "Tonanitla", "Tonatico", "Totocuitlapilco", "Totoltepec", "Tulantongo", "Tultepec", "Tultitlan", "Valle de Bravo", "Victoria", "Villa Guerrero", "Vista Hermosa", "Xalatlaco", "Xalpa", "Xico", "Xochimanca", "Xolalpa", "Xoloc", "Xometla", "Xonacatlan", "Yachihuacaltepec", "Yancuitlalpan", "Zacacalco", "Zacamulpa", "Zacualpan", "Zaragoza", "Zictepec", "Zinacantepec", "Zolotepec", "Zumpahuacan", "Zumpango"]
      },
      {
        name: "Michoacan",
        cities: ["Acuitzio", "Aguililla", "Alvaro Obregon", "Angahuan", "Angamacutiro", "Angangueo", "Antunez", "Apatzingan", "Ario", "Arteaga", "Benito Juarez", "Brisenas", "Buenavista", "Buenos Aires", "Caltzontzin", "Capacuaro", "Capula", "Caracuaro", "Charapan", "Charo", "Chavinda", "Cheran", "Chilchota", "Churintzio", "Churumuco", "Coahuayana", "Coalcoman", "Coeneo", "Cojumatlan", "Comachuen", "Contepec", "Copandaro", "Cotija", "Cuanajo", "Cuitareo", "Cuitzeo", "Ecuandureo", "Hidalgo", "Huandacareo", "Huetamo", "Indaparapeo", "Irimbo", "Ixtlan", "Jacona", "Jiquilpan", "Jungapeo", "La Huacana", "La Mira", "La Orilla", "La Piedad", "La Ruana", "Las Guacamayas", "Lazaro Cardenas", "Lombardia", "Los Reyes", "Madero", "Maravatio", "Maya", "Morelia", "Morelos", "Nahuatzen", "Nocupetaro", "Nueva Italia de Ruiz", "Nuevo San Juan Parangaricutiro", "Numaran", "Ocampo", "Opopeo", "Pajacuaran", "Panindicuaro", "Paracho", "Paracuaro", "Pastor Ortiz", "Patzcuaro", "Pedernales", "Penjamillo", "Periban", "Pichataro", "Purepero", "Puruandiro", "Puruaran", "Querendaro", "Quiroga", "Rincon de Nicolas Romero", "Riva Palacio", "Sahuayo", "San Jose de Gracia", "San Lucas", "San Matias Grande", "Santa Clara de Valladares", "Santa Clara del Cobre", "Santa Fe de la Laguna", "Tacambaro", "Tancitaro", "Tangamandapio", "Tangancicuaro", "Tanhuato", "Tarecuato", "Taretan", "Tarimbaro", "Tejaro", "Tepalcatepec", "Tingambato", "Tinguindin", "Tiquicheo", "Tlalpujahua", "Tlazazalca", "Tungareo", "Tuxpan", "Tzintzuntzan", "Uruapan", "Venustiano Carranza", "Villa Jimenez", "Villachuato", "Villamar", "Vista Hermosa", "Yurecuaro", "Zacapu", "Zamora", "Zinapecuaro", "Zitacuaro"]
      },
      {
        name: "Morelos",
        cities: ["Alpuyeca", "Amacuzac", "Amayuca", "Anenecuilco", "Apatlaco", "Atlatlahucan", "Axochiapan", "Ayala", "Calera Chica", "Chiconcuac", "Coatetelco", "Cocoyoc", "Cuautla", "Cuernavaca", "Emiliano Zapata", "Higueron", "Hueyapan", "Huiztilac", "Independencia", "Jantetelco", "Jiutepec", "Jojutla", "Jonacatepec", "Juan Morales", "La Joya", "Los Arcos", "Mazatepec", "Miacatlan", "Oaxtepec", "Ocuituco", "Pedro Amaro", "Progreso", "Puente de Ixtla", "San Jose Vista Hermosa", "San Nicolas Galeana", "Santa Catarina", "Santa Rosa Treinta", "Tehuixtla", "Telixtac", "Temixco", "Temoac", "Tenextepango", "Tepalcingo", "Tepoztlan", "Tetecala", "Tetela del Volcan", "Tilzapotla", "Tlacotepec", "Tlalnepantla", "Tlaltizapan", "Tlaquiltenango", "Tlatenchi", "Tlayacapan", "Totolapan", "Tres Marias", "Unidad Habitacional Jose Maria", "Xochitepec", "Xoxocotla", "Yautepec", "Yecapixtla", "Zacatepec", "Zacualpan"]
      },
      {
        name: "Nayarit",
        cities: ["Acaponeta", "Ahuacatlan", "Amatlan", "Aztatan", "Bucerias", "Carmen", "Cerralvo", "Compostela", "Hidalgo", "Ixcuintla", "Ixtlan del Rio", "Jala", "Jalcocotan", "La Penita de Jaltemba", "La Presa", "Lagunillas", "Las Jarretaderas", "Las Varas", "Puga", "Rosamorada", "Ruiz", "San Blas", "San Jose del Valle", "San Juan de Abajo", "San Vicente", "Santa Maria del Oro", "Tecuala", "Tepic", "Tuxpan", "Valle de Banderas", "Xalisco", "Yago", "Zacualpan"]
      },
      {
        name: "Nuevo Leon",
        cities: []
      },
      {
        name: "Oaxaca",
        cities: ["Acatlan", "Amatlan", "Amilpas", "Amuzgos", "Asuncion Ixtaltepec", "Asuncion Nochixtlan", "Asuncion Ocotlan", "Atempa", "Atzompa", "Ayautla", "Ayoquezco", "Ayotzintepec", "Bajos de Chila", "Brisas de Zicatela", "Cacahuatepec", "Cacaotepec", "Chahuites", "Chichicapam", "Chiltepec", "Cienaga de Zimatlan", "Coatlan", "Comitancillo", "Cosolapa", "Coyotepec", "Crucecita", "Cuicatlan", "Cuilapam", "Ejutla de Crespo", "El Espinal", "Etla", "Fraccionamiento el Rosario", "Guelavia", "Guichicovi", "Huajuapan", "Huatulco", "Huautla", "Huaxpaltepec", "Huayapam", "Huazolotitlan", "Huitzo", "Huixtepec", "Ingenio", "Ixcatlan", "Ixhuatan", "Ixtepec", "Jalapa", "Jamiltepec", "Jicayan", "Juchitan", "Juquila", "Juxtlahuaca", "Loma Bonita", "Magdalena Teitipac", "Magdalena Tequisistlan", "Matatlan", "Matias Romero", "Mechoacan", "Miahuatlan", "Mitla", "Mixtepec", "Mixtequilla", "Nazareno Etla", "Niltepec", "Oaxaca", "Ocotepec", "Ocotlan", "Ojitlan", "Palomares", "Panixtlahuaca", "Petapa", "Pinotepa Nacional", "Pinotepa de Don Luis", "Pochutla", "Puerto Escondido", "Putla", "Quetzaltepec", "Rincon Viejo", "Rio Grande", "Salina Cruz", "San Agustin de las Juntas", "San Antonio Castillo Velasco", "San Antonio de la Cal", "San Dionisio del Mar", "San Francisco del Mar", "San Jose del Progreso", "San Juan Colorado", "San Mateo del Mar", "Santa Lucia del Camino", "Santa Maria del Tule", "Santiago Apostol", "Santos Reyes Nopala", "Soyaltepec", "Suchilquitongo", "Tamazulapam", "Tapanatepec", "Tehuantepec", "Teitipac", "Telixtlahuaca", "Teotitlan", "Teotitlan den Valle", "Tilquiapam", "Tlacolula", "Tlalixtac", "Tlaxiaco", "Tutla", "Tuxtepec", "Union Hidalgo", "Usila", "Valle Nacional", "Vicente Camalote", "Vicente Guerrero", "Xadani", "Xitla", "Xoxocotlan", "Yaitepec", "Yatareni", "Zaachila", "Zacatepec", "Zanatepec", "Zimatlan"]
      },
      {
        name: "Puebla",
        cities: ["Acajete", "Acateno", "Acatlan", "Acatzingo", "Actipan", "Acuexcomac", "Ahuatempan", "Ajalpan", "Aljojuca", "Almecatla", "Alseseca", "Altepexi", "Amecac", "Amozoc", "Aparicio", "Atempan", "Atencingo", "Atlixco", "Atoyatempan", "Atzitzintla", "Atzompa", "Ayutla", "Azumiatla", "Benito Juarez", "Buenos Aires", "Cacaloxuchitl", "Calipan", "Calmeca", "Calpan", "Caltenco", "Canada", "Canoa", "Caxhuacan", "Chalchihuapan", "Chapulco", "Chautla", "Chiapa", "Chiautla", "Chiautzingo", "Chiconquiac", "Chietla", "Chignahuapan", "Chignautla", "Chilac", "Chilchotla", "Cholula", "Citlaltepetl", "Coatepec", "Coronango", "Coxcatlan", "Coyula", "Cuacnopalan", "Cuanala", "Cuapiaxtla", "Cuautlancingo", "Cuayucatepec", "Cuetzalan", "Domingo Arenas", "Escape", "Esperanza", "Guadalupe Victoria", "Huaquechula", "Huauchinango", "Huehuetlan", "Huejotzingo", "Hueyapan", "Hueyotlipan", "Hueytamalco", "Huixcolotla", "Ixcaquixtla", "Ixtiyucan", "Izucar", "Jolalpan", "La Ceiba", "La Galarza", "La Resureccion", "Lazaro Cardenas", "Libres", "Los Ranchos", "Los Reyes de Juarez", "Malacatepec", "Metlaltoyuca", "Miahuatlan", "Mihuacan", "Momoxpan", "Moyotzingo", "Nealtican", "Necaxa", "Nopalucan", "Ocotitlan", "Ocotlan", "Ocoyucan", "Oriental", "Pahuatlan", "Palmar de Bravo", "Puebla", "Quecholac", "Raboso", "Rafael Lara Grajales", "San Gabriel Casa Blanca", "San Lucas el Grande", "San Salvador el Seco", "San Sebastian Villanueva", "Sanctorum", "Santa Maria la Alta", "Serdan", "Soltepec", "Tatoxcac", "Tecali", "Tecamachalco", "Tehuacan", "Tehuitzingo", "Tenango", "Tenango de las Flores", "Tenextatiloyan", "Teontepec", "Teopantlan", "Teotlalcingo", "Tepango", "Tepatlaxco", "Tepeaca", "Tepeojuma", "Tepexi", "Tepulco", "Tetela Morelos", "Tetela de Ocampo", "Teteles", "Tetzoyocan", "Texmelucan", "Teziutlan", "Tianguismanalco", "Tlachichuca", "Tlacotepec", "Tlacoyalco", "Tlahuapan", "Tlaixpan", "Tlalancaleca", "Tlaltenango", "Tlanalapan", "Tlancualpican", "Tlanepantla", "Tlapanala", "Tlatlauquitepec", "Tlaxcalancingo", "Tlaxco", "Tochapan", "Tochimilco", "Tochtepec", "Tulcingo", "Tuxco", "Venustiano Carranza", "Xalmimilulco", "Xaltepec", "Xicotepec", "Xiutetelco", "Xochiltenango", "Xochitlan", "Xonatepec", "Xoxtla", "Yaonahuac", "Yehualtepec", "Zacapechpan", "Zacapoaxtla", "Zacatepec", "Zacatlan", "Zaragoza", "Zinacatepec", "Zongozotla", "Zozutla"]
      },
      {
        name: "Queretaro",
        cities: ["Ajuchitlan", "Amazcala", "Amealco", "Cadereyta", "Candiles", "Colon", "El Colorado", "El Pueblito", "El Sauz", "Ezequiel Montes", "Huimilpan", "Jalpan", "Jauregui", "La Canada", "La Estancia", "La Lira", "La Llave", "Paso de Mata", "Pedro Escobedo", "Queretaro", "San Jose de los Olvera", "San Jose el Alto", "San Juan del Rio", "San Nicolas", "San Pedro Martir", "Santa Maria Magdalena", "Tequisquiapan", "Tlacote el Bajo"]
      },
      {
        name: "Quintana Roo",
        cities: []
      },
      {
        name: "San Luis Potosi",
        cities: []
      },
      {
        name: "Sinaloa",
        cities: ["Adolfo Ruiz Cortines", "Agua Verde", "Ahome", "Angostura", "Badiraguato", "Bagojo", "Benito Juarez", "Campo Gobierno", "Choix", "Compuertas", "Concordia", "Constancia", "Cosala", "Costa Rica", "Culiacan", "Culiacancito", "El Burrion", "El Carrizo", "El Diez", "El Estero", "El Fuerte", "El Rosario", "El Tamarindo", "Eldorado", "Escuinapa", "Estacion Naranjo", "Estancia Bamoa", "Gabriel Leyva Solano", "Guamuchil", "Guasave", "Higuera", "Isla del Bosque", "Jahuara Segundo", "Juan Jose Rios", "La Cruz", "La Palma", "La Reforma", "La Trinidad", "Los Mochis", "Mazatlan", "Mochicahui", "Mocorito", "Navolato", "Pericos", "Pueblos Unidos", "Quila", "San Blas", "San Ignacio", "Sinaloa", "Teacapan", "Topolobampo", "Villa Union", "Zapotitlan"]
      },
      {
        name: "Sonora",
        cities: ["Agua Prieta", "Alamos", "Altar", "Bacobampo", "Bacum", "Bahia de Kino", "Benjamin Hill", "Caborca", "Campo Sesenta", "Cananea", "Carbo", "Cocorit", "Cumpas", "Empalme", "Esperanza", "Esqueda", "Etchojoa", "Etchoropo", "Guaymas", "Hermosillo", "Huatabampo", "Imuris", "Juarez", "Kino", "La Doce", "La Union", "Moctezuma", "Naco", "Nacozari", "Navajoa", "Nogales", "Obregon", "Pitiquito", "Potam", "Providencia", "Puerto Penasco", "Rio Muerto", "Sahuaripa", "San Jose de Bacum", "San Luis Rio Colorado", "Sanchez", "Santa Ana", "Sonoita", "Tobarito", "Ures", "Vicam", "Yaqui", "Yavaros"]
      },
      {
        name: "Tabasco",
        cities: ["Aquiles Serdan", "Ayapa", "Balancan", "Barra de Santa Ana", "Belen", "Bosque de Saloya", "Buenavista", "Campo Magellanes", "Cardenas", "Chichicapa", "Chontalpa", "Comalcalco", "Cunduacan", "El Triunfo", "Emiliano Zapata", "Fraccionamiento la Selva", "Frontera", "Huimanguillo", "Jalapa", "Jalpa", "Jonuta", "La Curva", "La Venta", "Luis Gil Perez", "Macultepec", "Macuspana", "Magana", "Miguel Hidalgo", "Nacajuca", "Ocuiltzapotlan", "Once de Febrero", "Paraiso", "Parrilla", "Pemex", "Playas del Rosario", "Rio Viejo", "San Carlos", "Santa Rosalia", "Simon Sarlat", "Tacotalpa", "Tamulte", "Teapa", "Tecolutilla", "Tenosique", "Vicente Guerrero", "Villa Aldama", "Villahermosa"]
      },
      {
        name: "Tamaulipas",
        cities: ["Abasolo", "Aldama", "Altamira", "Antiguo Morelos", "Camargo", "Cuauhtemoc", "El Mante", "Estacion Manuel", "Gonzalez", "Graciano Sanchez", "Guerrero", "Gustavo Diaz Ordaz", "Hidalgo", "Jaumave", "Llerca", "Los Guerra", "Madero", "Matamoros", "Mier", "Miguel Aleman", "Miramar", "Nuevo Laredo", "Nuevo Progreso", "Ocampo", "Padilla", "Reynosa", "Rio Bravo", "San Fernando", "Santa Engracia", "Santander Jimenez", "Soto la Marina", "Tampico", "Tula", "Valle Hermoso", "Victoria", "Xicotencatl"]
      },
      {
        name: "Tlaxcala",
        cities: ["Ahuashuatepec", "Altzayanca", "Amaxac", "Apetatitlan", "Apizaco", "Apizaquito", "Atexcatzingo", "Axocomanitla", "Ayometla", "Benito Juarez", "Buen Suceso", "Calpulalpan", "Chiautempan", "Contla", "Cuapiaxtla", "Huactzinco", "Huamantla", "Hueyotlipan", "Huiloac", "Ignacio Zaragoza", "Ixtacuixtla", "Ixtenco", "Mazatecochco", "Nanacamilpa", "Nativitas", "Nopalucan", "Panotla", "Papalotla", "Quilehtla", "Sanctorum", "Teacalco", "Tenancingo", "Teolocholco", "Tepetitla", "Tepeyanco", "Tequixquitla", "Terrenate", "Tetla", "Tetlanohcan", "Tetlatlahuca", "Texcalac", "Texoloc", "Tlaltelulco", "Tlaxcala", "Tlaxco", "Tocatlan", "Totolac", "Vicente Guerrero", "Villa Alta", "Xaloztoc", "Xaltocan", "Xicohtzinco", "Xicotencatl", "Xiloxoxtla", "Yauhquemecan", "Zacatelco", "Zacualpan", "Zitlaltepec"]
      },
      {
        name: "Veracruz",
        cities: ["Acayucan", "Actopan", "Acultzingo", "Agua Dulce", "Alamo", "Allende", "Altamirano", "Alto Lucero", "Altotonga", "Alvarado", "Amatlan", "Anahuac", "Anton Lizardo", "Atzacan", "Azueta", "Banderilla", "Benito Juarez", "Boca del Monte", "Boca del Rio", "Cabada", "Cabezas", "Carrillo", "Castillo de Teayo", "Catemaco", "Cazones", "Cerro Azul", "Chacaltianguis", "Chicontepec", "Chinameca", "Chinampa", "Chocaman", "Citlaltepetl", "Clara", "Coacoatzintla", "Coacotla", "Coatepec", "Coatzacoalcos", "Coatzintla", "Comoapan", "Cordoba", "Corral Nuevo", "Cosamaloapan", "Cosautlan", "Coscomatepec", "Cosoleacaque", "Covarrubias", "Coxquihui", "Coyutla", "Cuauhtemoc", "Cuautlapan", "Cuichapa", "Cuitlahuac", "El Castillo", "El Higo", "El Naranjito", "El Pueblito", "El Tejar", "Emilio Carranza", "Estacion Juanita", "Estacion del Idolo", "Filomeno Mata", "Fortin", "Gabino Barreda", "Guadalupe Victoria", "Gutierrez Zamora", "Hidalgo", "Hidalgotitlan", "Huatusco", "Huayacoctla", "Hueyapan", "Huiloapan", "Ignacio de la Llave", "Isla", "Ixcatepec", "Ixhuatlan del Cafe", "Ixhuatlan del Sureste", "Ixhuatlancillo", "Ixtaczoquitlan", "Jalacingo", "Jalapilla", "Jaltipan", "Jamapa", "Jesus Carranza", "Jilotepec", "La Antigua", "La Estanzuela", "La Pena", "La Perla", "La Poza", "Las Amapolas", "Las Choapas", "Las Vigas", "Lerdo", "Lomas de Barillas", "Los Altos", "Los Mangos", "Maltrata", "Mariano Escobedo", "Martinez", "Mecatlan", "Mecayapan", "Mendoza", "Minatitlan", "Misantla", "Monte Blanco", "Moralillo", "Motzorongo", "Mundo Nuevo", "Nanchital", "Naolinco", "Naranjos", "Nautla", "Nogales", "Oluta", "Omealca", "Orizaba", "Otatitlan", "Oteapan", "Ozuluama", "Pajapan", "Palmira", "Panuco", "Papantla", "Paraje Nuevo", "Paso de Ovejas", "Paso del Macho", "Paso del Toro", "Penuela", "Perote", "Piedras Negras", "Plan de Ayala", "Platon Sanchez", "Playa Vicente", "Potrero Nuevo", "Potrero del Llano", "Poza Rica", "Puntilla Aldama", "Rafael Delgado", "Rafael Lucio", "Rinconada", "Saltabarranca", "San Juan Evangelista", "San Marcos", "San Rafael", "San Roman", "Santiago Tuxtla", "Sayula", "Soconusco", "Soledad", "Soteapan", "Tamalin", "Tamiahua", "Tantoyuca", "Tatahuicapan", "Tecolutla", "Tempoal", "Tenango de Rio Blanco", "Teocelo", "Tepetzintla", "Tequila", "Tetelzingo", "Texistepec", "Tezonapa", "Tierra Blanca", "Tihuatlan", "Tlacojalpan", "Tlacotalpan", "Tlaltetela", "Tlapacoyan", "Tocuila", "Tomatlan", "Totolapa", "Totula", "Tres Valles", "Tuxpam", "Tuxtla", "Tuzamapan", "Union y Progreso", "Ursulo Galvan", "Valente Diaz", "Vega de Alatorre", "Veracruz", "Xalapa", "Xico", "Xocotla", "Yanga", "Yecuatla", "Zaragoza", "Zempoala", "Zongolica", "Zozocolco"]
      },
      {
        name: "Yucatan",
        cities: ["Acanceh", "Akil", "Baca", "Buctzotz", "Cacalchen", "Cansahcab", "Caucel", "Celestun", "Cenotillo", "Chemax", "Chichimila", "Chicxulub", "Chochola", "Cholul", "Chumayel", "Conkal", "Cuzama", "Dzan", "Dzemul", "Dzidzantun", "Dzilam Gonzalez", "Dzitas", "Espita", "Halacho", "Hocaba", "Hoctun", "Homun", "Huhi", "Hunucma", "Itzincab", "Ixil", "Izamal", "Kanasin", "Kantunil", "Kinchil", "Mama", "Mani", "Maxcanu", "Merida", "Motul", "Muna", "Opichen", "Oxkutzcab", "Panaba", "Peto", "Piste", "Progreso", "Sacalum", "Santa Elena", "Seye", "Sotuta", "Sucila", "Tahmek", "Teabo", "Tecoh", "Tekanto", "Tekax", "Tekit", "Telchac", "Temax", "Temozon", "Tetiz", "Ticul", "Timucuy", "Tixkokob", "Tixpehual", "Tizimin", "Tunkas", "Tzucacab", "Uman", "Valladolid", "X-Can", "Yucatan"]
      },
      {
        name: "Zacatecas",
        cities: ["Apozol", "Banon", "Canitas", "Chalchihuites", "Concepcion del Oro", "Cos", "Estrada", "Fresnillo", "Garcia", "Gonzalez Ortega", "Guadalupe", "Hidalgo", "Jalpa", "Jerez", "Juan Aldama", "Juchipila", "Loreto", "Lourdes", "Luis Moya", "Miguel Auza", "Monte Escobedo", "Morelos", "Natera", "Nieves", "Nochistlan", "Ojo Caliente", "Piedra Gorda", "Pinos", "Plateros", "Pozo de Gamboa", "Rio Grande", "Sain Alto", "Sombrerete", "Tabasco", "Tacoaleche", "Tepechitlan", "Teul", "Tlaltenango", "Toribio", "Trancoso", "Valparaiso", "Victor Rosales", "Villa Gonzalez Ortega", "Villanueva", "Zacatecas"]
      }
    ],
    isoAlpha2: "MX",
    isoAlpha3: "MEX",
    isoNumeric: 484
  },
  {
    name: "Micronesia",
    flag: "🇫🇲",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Chuuk",
        cities: ["Tol", "Weno"]
      },
      {
        name: "Kusaie",
        cities: ["Lelu"]
      },
      {
        name: "Pohnpei",
        cities: ["Kolonia", "Palikir"]
      },
      {
        name: "Yap",
        cities: ["Colonia"]
      }
    ]
  },
  {
    name: "Moldova",
    flag: "🇲🇩",
    currency: {
      code: "MDL",
      name: "Leu",
      symbol: false
    },
    states: [
      {
        name: "Balti",
        cities: ["Balti", "Falesti", "Glodeni", "Rascani"]
      },
      {
        name: "Cahul",
        cities: ["Cahul"]
      },
      {
        name: "Chisinau",
        cities: ["Straseni"]
      },
      {
        name: "Chisinau Oras",
        cities: ["Straseni"]
      },
      {
        name: "Edinet",
        cities: ["Briceni", "Donduseni", "Edinet", "Ocnita"]
      },
      {
        name: "Gagauzia",
        cities: ["Ciadar Lunga", "Comrat", "Vulcanesti"]
      },
      {
        name: "Lapusna",
        cities: ["Basarabeasca", "Cimislia", "Hancesti", "Leova"]
      },
      {
        name: "Orhei",
        cities: ["Orhei", "Rezina", "Telenesti"]
      },
      {
        name: "Soroca",
        cities: ["Drochia", "Floresti", "Soroca"]
      },
      {
        name: "Taraclia",
        cities: ["Taraclia"]
      },
      {
        name: "Tighina",
        cities: ["Causani"]
      },
      {
        name: "Transnistria",
        cities: ["Camenca", "Dnestrovsc", "Dubasari", "Griguriopol", "Rabnita", "Slobozia", "Tighina", "Tiraspol"]
      },
      {
        name: "Ungheni",
        cities: ["Calarasi", "Nisporeni", "Ungheni"]
      }
    ],
    isoAlpha2: "MD",
    isoAlpha3: "MDA",
    isoNumeric: 498
  },
  {
    name: "Monaco",
    flag: "🇲🇨",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Fontvieille",
        cities: ["Fontvieille"]
      },
      {
        name: "La Condamine",
        cities: []
      },
      {
        name: "Monaco-Ville",
        cities: ["Monaco-Ville"]
      },
      {
        name: "Monte Carlo",
        cities: []
      }
    ],
    isoAlpha2: "MC",
    isoAlpha3: "MCO",
    isoNumeric: 492
  },
  {
    name: "Mongolia",
    flag: "🇲🇳",
    currency: {
      code: "MNT",
      name: "Tugrik",
      symbol: "₮"
    },
    states: [
      {
        name: "Arhangaj",
        cities: ["Cecerleg"]
      },
      {
        name: "Bajan-Olgij",
        cities: ["Olgij"]
      },
      {
        name: "Bajanhongor",
        cities: ["Bajanhongor"]
      },
      {
        name: "Bulgan",
        cities: ["Bulgan"]
      },
      {
        name: "Darhan-Uul",
        cities: ["Darhan"]
      },
      {
        name: "Dornod",
        cities: ["Chojbalsan"]
      },
      {
        name: "Dornogovi",
        cities: ["Sajnshand"]
      },
      {
        name: "Dundgovi",
        cities: ["Mandalgovi"]
      },
      {
        name: "Govi-Altaj",
        cities: ["Altaj"]
      },
      {
        name: "Govisumber",
        cities: ["Chojr"]
      },
      {
        name: "Hentij",
        cities: ["Ondorhaan"]
      },
      {
        name: "Hovd",
        cities: ["Hovd"]
      },
      {
        name: "Hovsgol",
        cities: ["Moron"]
      },
      {
        name: "Omnogovi",
        cities: ["Dalanzadgad"]
      },
      {
        name: "Orhon",
        cities: ["Erdenet"]
      },
      {
        name: "Ovorhangaj",
        cities: ["Arvajheer"]
      },
      {
        name: "Selenge",
        cities: ["Suhbaatar", "Zuunharaa"]
      },
      {
        name: "Suhbaatar",
        cities: ["Baruun-Urt"]
      },
      {
        name: "Tov",
        cities: ["Nalajh", "Zuunmod"]
      },
      {
        name: "Ulaanbaatar",
        cities: ["Ulaanbaatar"]
      },
      {
        name: "Uvs",
        cities: ["Ulaangom"]
      },
      {
        name: "Zavhan",
        cities: ["Tosoncengel", "Uliastaj"]
      }
    ],
    isoAlpha2: "MN",
    isoAlpha3: "MNG",
    isoNumeric: 496
  },
  {
    name: "Montserrat",
    flag: "🇲🇸",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Montserrat",
        cities: ["Montserrat"]
      }
    ],
    isoAlpha2: "MS",
    isoAlpha3: "MSR",
    isoNumeric: 500
  },
  {
    name: "Morocco",
    flag: "🇲🇦",
    currency: {
      code: "MAD",
      name: "Dirham",
      symbol: false
    },
    states: [
      {
        name: "Agadir",
        cities: ["Agadir"]
      },
      {
        name: "Casablanca",
        cities: ["Mohammedia", "ad-Dar-al-Bayda"]
      },
      {
        name: "Chaouia-Ouardigha",
        cities: ["Bin Sulayman", "Bir Rashid", "Bu-al-Jad", "Buznika", "Khuribghah", "Sattat", "Wad Zam"]
      },
      {
        name: "Doukkala-Abda",
        cities: ["Asfi", "Azimur", "Sidi Binnur", "Sidi Isma''il", "Yussufiyah", "al-Jadidah"]
      },
      {
        name: "Fes-Boulemane",
        cities: ["Fas", "Fes", "Safru"]
      },
      {
        name: "Gharb-Chrarda-Beni Hssen",
        cities: []
      },
      {
        name: "Guelmim",
        cities: ["Ghulimim", "Sidi Ifni", "Tafraut", "Tantan"]
      },
      {
        name: "Kenitra",
        cities: ["Kenitra"]
      },
      {
        name: "Marrakech-Tensift-Al Haouz",
        cities: []
      },
      {
        name: "Meknes-Tafilalet",
        cities: ["Amalu Ighriban", "Azru", "Jama''at-al-Marirt", "Khanifrah", "Meknes", "Midalt", "Miknas", "Mulay Idris", "al-Hajab", "ar-Rasidiyah"]
      },
      {
        name: "Oriental",
        cities: ["Ahfir", "Bin Ansar", "Birkan", "Fijij", "Jaradah", "Tawrirt", "Ujdah", "Zayu", "al-Arwi", "al-Ayun Sidi Malluk", "an-Nadur"]
      },
      {
        name: "Oujda",
        cities: ["Oujda"]
      },
      {
        name: "Province de Tanger",
        cities: []
      },
      {
        name: "Rabat-Sale-Zammour-Zaer",
        cities: ["Khamissat", "Sakhirat", "Tiflat", "ar-Ribat"]
      },
      {
        name: "Sala Al Jadida",
        cities: []
      },
      {
        name: "Settat",
        cities: ["Settat"]
      },
      {
        name: "Souss Massa-Draa",
        cities: []
      },
      {
        name: "Tadla-Azilal",
        cities: ["Bani Mallal", "Beni Mellal", "Qasbat Tadlah", "Suq Sabt Awlat Nama", "al-Faqih Bin Salah"]
      },
      {
        name: "Tangier-Tetouan",
        cities: ["Asilah", "Finidiq", "Martil", "Midiq", "Shifshawn", "Tangier", "Tanjah", "Tittawin", "Titwan", "al-''Ara''ish", "al-Qasr-al-Kabir"]
      },
      {
        name: "Taza-Al Hoceima-Taounate",
        cities: []
      },
      {
        name: "Wilaya de Casablanca",
        cities: []
      },
      {
        name: "Wilaya de Rabat-Sale",
        cities: []
      }
    ],
    isoAlpha2: "MA",
    isoAlpha3: "MAR",
    isoNumeric: 504
  },
  {
    name: "Mozambique",
    flag: "🇲🇿",
    currency: {
      code: "MZN",
      name: "Meticail",
      symbol: "MT"
    },
    states: [
      {
        name: "Cabo Delgado",
        cities: []
      },
      {
        name: "Gaza",
        cities: ["Chibuto", "Chidenguele", "Chokwe", "Chongoene", "Guija", "Macia", "Manjacaze", "Xai-Xai"]
      },
      {
        name: "Inhambane",
        cities: ["Homoine", "Inhambane", "Inharrime", "Jangamo", "Maxixe", "Panda", "Quissico"]
      },
      {
        name: "Manica",
        cities: ["Chimoio", "Manica"]
      },
      {
        name: "Maputo",
        cities: ["Maputo"]
      },
      {
        name: "Maputo Provincia",
        cities: ["Maputo"]
      },
      {
        name: "Nampula",
        cities: ["Angoche", "Lumbo", "Mocambique", "Nacala", "Nampula"]
      },
      {
        name: "Niassa",
        cities: ["Cuamba", "Lichinga", "Mandimba", "Maniamba", "Marrupa"]
      },
      {
        name: "Sofala",
        cities: ["Beira", "Dondo"]
      },
      {
        name: "Tete",
        cities: ["Tete", "Zumbo"]
      },
      {
        name: "Zambezia",
        cities: ["Garue", "Mocuba", "Quelimane"]
      }
    ],
    isoAlpha2: "MZ",
    isoAlpha3: "MOZ",
    isoNumeric: 508
  },
  {
    name: "Myanmar [Burma]",
    flag: "🇲🇲",
    currency: {
      code: "MMK"
    },
    states: [
      {
        name: "Ayeyarwady",
        cities: ["Bogale", "Henzada", "Kyaiklat", "Labutta", "Maubin", "Moulmeingyun", "Myanaung", "Pathein", "Pyapon", "Wakema", "Yandoon", "Ye"]
      },
      {
        name: "Bago",
        cities: ["Bago", "Letpadan", "Nyaunglebin", "Paungde", "Pyay", "Pyu", "Thanatpin", "Tharrawaddy", "Toungoo"]
      },
      {
        name: "Chin",
        cities: ["Falam"]
      },
      {
        name: "Kachin",
        cities: ["Banmo", "Myitkyina"]
      },
      {
        name: "Kayah",
        cities: ["Loikaw"]
      },
      {
        name: "Kayin",
        cities: ["Hpa-an"]
      },
      {
        name: "Magway",
        cities: ["Allanmyo", "Chauk", "Magway", "Minbu", "Pakokku", "Taungdwingyi", "Thayetmyo", "Yenangyaung"]
      },
      {
        name: "Mandalay",
        cities: ["Kyaukse", "Mandalay", "Maymyo", "Meiktila", "Mogok", "Myingyan", "Pyinmana", "Yamethin"]
      },
      {
        name: "Mon",
        cities: ["Kyaikkami", "Kyaikto", "Martaban", "Mawlamyine", "Mudon", "Thaton"]
      },
      {
        name: "Nay Pyi Taw",
        cities: []
      },
      {
        name: "Rakhine",
        cities: ["Akyab", "Arakan"]
      },
      {
        name: "Sagaing",
        cities: ["Kalay", "Katha", "Mawlaik", "Monywa", "Sagaing", "Shwebo"]
      },
      {
        name: "Shan",
        cities: ["Keng Tung", "Lashio", "Taunggyi"]
      },
      {
        name: "Tanintharyi",
        cities: ["Dawei", "Mergui"]
      },
      {
        name: "Yangon",
        cities: ["Kanbe", "Kayan", "Syriam", "Thongwa", "Twante", "Yangon"]
      }
    ]
  },
  {
    name: "Namibia",
    flag: "🇳🇦",
    currency: {
      code: "NAD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Caprivi",
        cities: ["Katima Mulilo"]
      },
      {
        name: "Erongo",
        cities: ["Henties Bay", "Karibib", "Kuisebmond", "Omaruru", "Otjimbingwe", "Swakopmund", "Usakos", "Walvis Bay"]
      },
      {
        name: "Hardap",
        cities: ["Aranos", "Maltahohe", "Mariental", "Rehoboth"]
      },
      {
        name: "Karas",
        cities: ["Bethanien", "Karasburg", "Keetmanshoop", "Luderitz", "Oranjemund", "Warmbad"]
      },
      {
        name: "Kavango",
        cities: ["Rundu"]
      },
      {
        name: "Khomas",
        cities: ["Windhoek"]
      },
      {
        name: "Kunene",
        cities: ["Arandis", "Khorixas", "Opuwo", "Outjo"]
      },
      {
        name: "Ohangwena",
        cities: ["Oshikango"]
      },
      {
        name: "Omaheke",
        cities: ["Gobabis", "Leonardville"]
      },
      {
        name: "Omusati",
        cities: ["Ongandjera"]
      },
      {
        name: "Oshana",
        cities: ["Ongwediva", "Oshakati"]
      },
      {
        name: "Oshikoto",
        cities: ["Ondangwa", "Otavi", "Tsumeb"]
      },
      {
        name: "Otjozondjupa",
        cities: ["Grootfontein", "Okahandja", "Okakarara", "Otjiwarongo"]
      }
    ],
    isoAlpha2: "NA",
    isoAlpha3: "NAM",
    isoNumeric: 516
  },
  {
    name: "Nauru",
    flag: "🇳🇷",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Yaren",
        cities: ["Yaren"]
      }
    ],
    isoAlpha2: "NR",
    isoAlpha3: "NRU",
    isoNumeric: 520
  },
  {
    name: "Nepal",
    flag: "🇳🇵",
    currency: {
      code: "NPR",
      name: "Rupee",
      symbol: "₨"
    },
    states: [
      {
        name: "Bagmati",
        cities: ["Banepa", "Bhaktapur", "Bidur", "Bishalter", "Dhulikhel", "Kathmandu", "Kirtipur", "Lalitpur", "Madhyapur Thimi", "Panauti", "Tribuvannagar"]
      },
      {
        name: "Bheri",
        cities: ["Birendranagar", "Gulariya", "Narayan", "Nepalganj", "Surkhet"]
      },
      {
        name: "Dhawalagiri",
        cities: ["Baglung", "Weni"]
      },
      {
        name: "Gandaki",
        cities: ["Byas", "Leknath", "Pokhara", "Prithivinarayan", "Putalibazar", "Waling"]
      },
      {
        name: "Janakpur",
        cities: ["Bhimeshwar", "Jaleshwar", "Janakpur", "Kamalamai", "Malangwa", "Sinduli Marhi"]
      },
      {
        name: "Karnali",
        cities: ["Jumla"]
      },
      {
        name: "Koshi",
        cities: ["Biratnagar", "Dhankuta", "Dharan", "Inaruwa", "Itahari", "Khandbari"]
      },
      {
        name: "Lumbini",
        cities: ["Butwal", "Kapilwastu", "Ramgram", "Sidharthanagar", "Tansen", "Wahadurganj"]
      },
      {
        name: "Mahakali",
        cities: ["Amargadhi", "Dashrathchand", "Mahendranagar"]
      },
      {
        name: "Mechi",
        cities: ["Bhadrapur", "Damak", "Ilam", "Mechinagar"]
      },
      {
        name: "Narayani",
        cities: ["Bharatpur", "Birganj", "Chitwan", "Gaur", "Hetauda", "Kalaiya", "Ratnanagar"]
      },
      {
        name: "Rapti",
        cities: ["Salyan", "Tulsipur"]
      },
      {
        name: "Sagarmatha",
        cities: ["Lahan", "Rajbiraj", "Siraha", "Triyuga"]
      },
      {
        name: "Seti",
        cities: ["Dhangadi", "Dipayal", "Tikapur"]
      }
    ],
    isoAlpha2: "NP",
    isoAlpha3: "NPL",
    isoNumeric: 524
  },
  {
    name: "Netherlands",
    flag: "🇳🇱",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Amsterdam",
        cities: ["SchipolRijk"]
      },
      {
        name: "Benelux",
        cities: ["Amstelveen"]
      },
      {
        name: "Drenthe",
        cities: ["Aa en Hunze", "Assen", "Borger-Odoorn", "Coevorden", "De Wolden", "Den Oever", "Emmen", "Gasteren", "Hoogeveen", "Menterwolde", "Meppel", "Midden-Drenthe", "Noordenveld", "Stadskanaal", "Tynaarlo", "Veenoord", "Westerveld", "Zuidlaren"]
      },
      {
        name: "Flevoland",
        cities: ["Almere", "Dronten", "Lelystad", "Noordoostpolder", "Urk", "Zeewolde"]
      },
      {
        name: "Friesland",
        cities: ["Achtkarspelen", "Ameland", "Boarnsterhim", "Bolsward", "Dantumadeel", "Dongeradeel", "Drachten", "Ferwerderadiel", "Franekeradeel", "Gaasterlan-Sleat", "Gorredijk", "Harlingen", "Heerenveen", "Het Bildt", "Kollumerland", "Leeuwarden", "Leeuwarderadeel", "Lemsterland", "Littenseradiel", "Menaldumadeel", "Nijefurd", "Oostrum", "Ooststellingwerf", "Opsterland", "Schiermonnikoog", "Skasterlan", "Smallingerland", "Sneek", "Terschelling", "Tytsjerksteradiel", "Ureterp", "Weststellingwerf", "Wolvega", "Wunseradiel", "Wymbritseradiel"]
      },
      {
        name: "Gelderland",
        cities: ["Aalten", "Angerlo", "Apeldoorn", "Appeldoorn", "Arnhem", "Barneveld", "Bemmel", "Bergh", "Beuningen", "Borculo", "Brummen", "Buren", "Culemborg", "Delden", "Didam", "Dieren", "Dinxperlo", "Dodewaard", "Doesburg", "Doetinchem", "Druten", "Duiven", "Ede", "Eerbeek", "Eibergen", "Elburg", "Epe", "Ermelo", "Geldermalsen", "Gendringen", "Giesbeek", "Gorssel", "Groenlo", "Groesbeek", "Harderwijk", "Hattem", "Heerde", "Hengelo", "Heumen", "Huisen", "Hummelo en Keppel", "Kesteren", "Kootwijkerbroek", "Leerdam", "Leeuwen", "Lichtenvoorde", "Lingewaal", "Lochem", "Loppersum", "Maasdriel", "Malden", "Millingen", "Molenhoek", "Neede", "Neerijnen", "Nijkerk", "Nijmegen", "Nunspeet", "Oldebroek", "Oosterbeek", "Overbetuwe", "Putten", "Renkum", "Rheden", "Rijnwaarden", "Rozendaal", "Ruurlo", "Scherpenzeel", "Steenderen", "Terborg", "Tiel", "Twello", "Ubbergen", "Vaassen", "Varsseveld", "Voorst", "Vorden", "Waardenburg", "Wageningen", "Warmsveld", "Wehl", "Westervoort", "Wijchen", "Winterswijk", "Wisch", "Zaltbommel", "Zelhem", "Zevenaar", "Zutphen", "s-Heerenberg"]
      },
      {
        name: "Groningen",
        cities: ["Appingedam", "Bedum", "Bellingwedde", "De Marne", "Delfzijl", "Eemsmond", "Groningen", "Grootegast", "Haren", "Hoogezand-Sappemeer", "Leek", "Marum", "Midwolda", "Muntendam", "Pekela", "Reiderland", "Scheemda", "Slochteren", "Ten Boer", "Tolbert", "Veendam", "Vlagtwedde", "Winschoten", "Winsum", "Zuidhorn"]
      },
      {
        name: "Limburg",
        cities: ["Ambt Montfort", "Arcen en Velden", "Beek", "Beesel", "Bergen", "Blerick", "Brunssum", "Echt", "Eijsden", "Gennep", "Gulpen-Wittem", "Haelen", "Heel", "Heerlen", "Helden", "Heythuysen", "Horst", "Hunsel", "Kerkrade", "Kessel", "Landgraaf", "Maasbracht", "Maasbree", "Maastricht", "Margraten", "Meerlo-Wanssum", "Meerssen", "Meijel", "Mook en Middelaar", "Nederweert", "Nuth", "Onderbanken", "Roerdalen", "Roermond", "Roggel", "Roggel en Neer", "Schinnen", "Sevenum", "Simpelveld", "Sittard", "Sittard-Geleen", "Stein", "Stramproy", "Susteren", "Swalmen", "Tegelen", "Thorn", "Vaals", "Valkenburg", "Venlo", "Venray", "Vilt Limburg", "Voerendaal", "Weert"]
      },
      {
        name: "Noord-Brabant",
        cities: ["s-Hertogenbosch", "Aalburg", "Alphen-Chaam", "Asten", "Baarle-Nassau", "Bergeijk", "Bergen op Zoom", "Berghem", "Bernheze", "Bernisse", "Best", "Bladel", "Boekel", "Boxmeer", "Boxtel", "Breda", "Budel", "Cranendonck", "Cuijk", "Den Bosch", "Den Dungen", "Deurne", "Dongen", "Drimmelen", "Drunen", "Duizel", "Eersel", "Eindhoven", "Etten-Leur", "Geertruidenberg", "Geldrop", "Gemert-Bakel", "Gilze en Rijen", "Goirle", "Grave", "Haaren", "Halderberge", "Heeze-Leende", "Heijningen", "Helmond", "Heusden", "Hilvarenbeek", "Hoeven", "Hoogerheide", "Kaatsheuvel", "Korendijk", "Laarbeek", "Landerd", "Lith", "Loon op Zand", "Maarheeze", "Maasdonk", "Mierlo", "Mill en Sint Hubert", "Moerdijk", "Nieuwkuijk", "Nuenen", "Oirschot", "Oisterwijk", "Oosterhout", "Oss", "Raamsdonksveer", "Ravenstein", "Reusel-De Mierden", "Roosendaal", "Rosmalen", "Rucphen", "Schaijk", "Schijndel", "Sint Anthonis", "Sint Willebrord", "Sint-Michielsgestel", "Sint-Oedenrode", "Sleeuwijk", "Someren", "Son en Breugel", "Steenbergen", "Tilburg", "Uden", "Valkenswaard", "Veghel", "Veldhoven", "Vinkel", "Vught", "Waalre", "Waalwijk", "Werkendam", "Woensdrecht", "Woudrichem", "Zundert"]
      },
      {
        name: "Noord-Holland",
        cities: ["Aalsmeer", "Alkmaar", "Amstelveen", "Amsterdam", "Andijk", "Ankeveen", "Anna Paulowna", "Assendelft", "Badhoevedorp", "Beemster", "Bennebroek", "Bergen", "Beverwijk", "Blaricum", "Bloemendaal", "Bovenkarspel", "Bussum", "Castricum", "Den Helder", "Diemen", "Drechterland", "Edam-Volendam", "Enkhuizen", "Graft-De Rijp", "Haarlem", "Haarlemmerliede", "Haarlemmermeer", "Harenkarspel", "Heemskerk", "Heemstede", "Heerhugowaard", "Heiloo", "Hillegom", "Hilversum", "Hoofddorp", "Hoorn", "Huizen", "Ijmuiden", "Katwijk", "Krommenie", "Landsmeer", "Langedijk", "Laren", "Loosdrecht", "Medemblik", "Middenbeemster", "Muiden", "Naarden", "Niedorp", "Nieuw-Vennep", "Noorder-Koggenland", "Obdam", "Oostzaan", "Opmeer", "Oude Meer", "Ouder-Amstel", "Oudkarspel", "Purmerend", "Rozenburg", "Schagen", "Schermer", "Stede Broec", "Texel", "Tuitjenhorn", "Uitgeest", "Uithoorn", "Velsen", "Venhuizen", "Vijfhuizen", "Waarland", "Waterland", "Weesp", "Wervershoof", "Wester-Koggenland", "Westwoud", "Wieringen", "Wieringermeer", "Wognum", "Wormer", "Wormerland", "Wormerveer", "Zaanstad", "Zandvoort", "Zeevang", "Zwaag", "Zwanenburg"]
      },
      {
        name: "Overijssel",
        cities: ["Almelo", "Bathmen", "Borne", "Dalfsen", "Dedemsvaart", "Denekamp", "Deventer", "Diepenheim", "Enschede", "Genemuiden", "Haaksbergen", "Hardenberg", "Hasselt", "Hellendoorn", "Hengelo", "Hof van Twente", "IJsselmuiden", "Kampen", "Lemelerveld", "Losser", "Nieuwleusen", "Nijverdal", "Oldenzaal", "Olst", "Ommen", "Ootmarsum", "Raalte", "Rijssen", "Staphorst", "Steenwijk", "Tubbergen", "Vriezenveen", "Vroomshoop", "Weerselo", "Wierden", "Zwartewaterland", "Zwolle"]
      },
      {
        name: "South Holland",
        cities: []
      },
      {
        name: "Utrecht",
        cities: ["Abcoude", "Amerongen", "Amersfoort", "Baarn", "Benschop", "Breukelen", "Bunnik", "Bunschoten", "De Bilt", "De Ronde Venen", "Den Dolder", "Doorn", "Driebergen-Rijsenburg", "Eemnes", "Houten", "IJsselstein", "Kockengen", "Leersum", "Leusden", "Loenen", "Lopik", "Maarn", "Maarsen", "Mijdrecht", "Montfoort", "Nieuwegein", "Nigtevecht", "Odijk", "Oudewater", "Renswoude", "Rhenen", "Soest", "Soesterberg", "Utrecht", "Veenendaal", "Vianen", "Wijdemeren", "Wijk", "Wilnis", "Woerden", "Woudenberg", "Zeist"]
      },
      {
        name: "Zeeland",
        cities: ["Axel", "Borsele", "Goes", "Hontenisse", "Hulst", "Kapelle", "Middelburg", "Noord-Beveland", "Oostburg", "Reimerswaal", "Sas van Gent", "Schouwen-Duiveland", "Sluis-Aardenburg", "Terneuzen", "Tholen", "Veere", "Vlissingen", "Zierikzee", "Zijpe"]
      },
      {
        name: "Zuid-Holland",
        cities: ["s-Gravendeel", "s-Gravenhage", "s-Gravenzande", "Alblasserdam", "Albrandswaard", "Alkemade", "Alphen", "Alphen aan den Rijn", "Barendrecht", "Bergambacht", "Bergschenhoek", "Berkel en Rodenrijs", "Binnenmaas", "Bleiswijk", "Bodegraven", "Boskoop", "Brielle", "Capelle", "Cromstrijen", "De Lier", "Delft", "Dirksland", "Dordrecht", "Giessenlanden", "Goedereede", "Gorinchem", "Gouda", "Graafstroom", "Hardinxveld-Giessendam", "Heerjansdam", "Hellevoetsluis", "Hendrik-Ido-Ambacht", "Jacobswoude", "Katwijk", "Kinderdijk", "Krimpen", "Leiden", "Leiderdorp", "Leidschendam-Voorburg", "Liemeer", "Liesveld", "Lisse", "Maasland", "Maassluis", "Middelharnis", "Monster", "Moordrecht", "Naaldwijk", "Nederlek", "Nieuw-Lekkerland", "Nieuwekerk aan den IJssel", "Nieuwkoop", "Noordwijk", "Noordwijkerhout", "Oegestgeest", "Oostflakkee", "Oud-Beijerland", "Ouderkerk", "Papendrecht", "Pijnacker-Nootdorp", "Reeuwijk", "Ridderkerk", "Rijnsburg", "Rijnwoude", "Rijswijk", "Rotterdam", "Sassenheim", "Schiedam", "Schipluiden", "Schoonhoven", "Sliedrecht", "Spijkenisse", "Strijen", "Ter Aar", "The Hague", "Valkenburg", "Vierpolders", "Vlaardingen", "Vlist", "Voorhout", "Voorschoten", "Waddinxveen", "Warmond", "Wassenaar", "Wateringen", "West Maas en Waal", "Westvoorne", "Zederik", "Zevenhuizen-Moerkapelle", "Zoetermeer", "Zoeterwoude", "Zwijndrecht"]
      }
    ],
    isoAlpha2: "NL",
    isoAlpha3: "NLD",
    isoNumeric: 528
  },
  {
    name: "New Caledonia",
    flag: "🇳🇨",
    currency: {
      code: "XPF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Iles",
        cities: ["Belep", "Fayaoue", "Tadine", "Vao", "We"]
      },
      {
        name: "Nord",
        cities: ["Canala", "Hienghene", "Houailu", "Kaala Gomen", "Kone", "Koumac", "Ouegoa", "Poindimie", "Ponerihouen", "Pouebo", "Pouembout", "Poum", "Poya", "Touho", "Voh"]
      },
      {
        name: "Sud",
        cities: ["Bouloupari", "Bourail", "Dumbea", "Farino", "La Foa", "Moindou", "Mont-Dore", "Noumea", "Paita", "Sarramea", "Thio", "Yate"]
      }
    ],
    isoAlpha2: "NC",
    isoAlpha3: "NCL",
    isoNumeric: 540
  },
  {
    name: "New Zealand",
    flag: "🇳🇿",
    currency: {
      code: "NZD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Auckland",
        cities: ["Auckland", "Helensville", "Henderson", "Hillsborough", "Lynfield", "Manukau", "Manurewa", "Mt. Roskill", "North Shore", "Onehunga", "Orewa", "Otahuhu", "Panmure", "Papakura", "Papatoetoe", "Ponsonby", "Royal Oak", "Sandringham", "Snells Beach", "Takanini", "Waiheke", "Waitakere"]
      },
      {
        name: "Area Outside Region",
        cities: []
      },
      {
        name: "Bay of Plenty",
        cities: []
      },
      {
        name: "Canterbury",
        cities: ["Amberley", "Ashburton", "Christchurch", "Fairlie", "Geraldine", "Kaikoura", "Leeston", "Lyttelton", "Oamaru", "Rangiora", "Temuka", "Timaru", "Waimate"]
      },
      {
        name: "Christchurch",
        cities: []
      },
      {
        name: "Gisborne",
        cities: ["Gisborne"]
      },
      {
        name: "Hawke''s Bay",
        cities: []
      },
      {
        name: "Manawatu-Wanganui",
        cities: ["Dannevirke", "Feilding", "Foxton", "Levin", "Marton", "Palmerston North", "Picton", "Taumarunui", "Wanganui"]
      },
      {
        name: "Marlborough",
        cities: ["Blenheim", "Havelock"]
      },
      {
        name: "Nelson",
        cities: ["Nelson"]
      },
      {
        name: "Northland",
        cities: ["Dargaville", "Kaikohe", "Kaitaia", "Kerikeri", "Maungatapere", "Whangarei"]
      },
      {
        name: "Otago",
        cities: ["Alexandra", "Balclutha", "Dunedin", "Queenstown", "Wanaka"]
      },
      {
        name: "Rodney",
        cities: ["Warkworth"]
      },
      {
        name: "Southland",
        cities: ["Gore", "Invercargill"]
      },
      {
        name: "Taranaki",
        cities: ["Eltham", "Hawera", "Inglewood", "New Plymouth", "Oakura", "Stratford", "Waitara"]
      },
      {
        name: "Tasman",
        cities: ["Motueka", "Richmond"]
      },
      {
        name: "Waikato",
        cities: ["Cambridge", "Coromandel", "Hamilton", "Hillcrest", "Huntly", "Matamata", "Morrinsville", "Ngaruawahia", "Otorohanga", "Paeroa", "Pukekohe", "Putaruru", "Taupo", "Te Aroha", "Te Awamutu", "Te Kuiti", "Thames", "Tokoroa", "Turangi", "Waiuku", "Whangamata", "Whitianga"]
      },
      {
        name: "Wellington",
        cities: ["Carterton", "Kapiti", "Lower Hutt", "Martinborough", "Masterton", "Otaki", "Paraparaumu", "Porirua", "Upper Hutt", "Wairarapa", "Wellington"]
      },
      {
        name: "West Coast",
        cities: []
      }
    ],
    isoAlpha2: "NZ",
    isoAlpha3: "NZL",
    isoNumeric: 554
  },
  {
    name: "Nicaragua",
    flag: "🇳🇮",
    currency: {
      code: "NIO",
      name: "Cordoba",
      symbol: "C$"
    },
    states: [
      {
        name: "Atlantico Norte",
        cities: []
      },
      {
        name: "Atlantico Sur",
        cities: []
      },
      {
        name: "Boaco",
        cities: ["Boaco", "Camoapa", "San Lorenzo"]
      },
      {
        name: "Carazo",
        cities: ["Diriamba", "Dolores", "Jinotepe", "Masatepe", "San Marcos", "Santa Teresa"]
      },
      {
        name: "Chinandega",
        cities: ["Chichigalpa", "Chinandega", "Corinto", "El Viejo", "Puerto Morazan", "Somotillo"]
      },
      {
        name: "Chontales",
        cities: ["Acoyapa", "Juigalpa", "Santo Domingo", "Santo Tomas", "Villa Sandino"]
      },
      {
        name: "Esteli",
        cities: ["Condega", "Esteli", "La Trinidad"]
      },
      {
        name: "Granada",
        cities: ["Diriomo", "Granada", "Nandaime"]
      },
      {
        name: "Jinotega",
        cities: ["Jinotega", "Wiwili"]
      },
      {
        name: "Leon",
        cities: ["El Sauce", "La Paz Centro", "Larreynaga", "Leon", "Nagarote", "Telica"]
      },
      {
        name: "Madriz",
        cities: ["Somoto"]
      },
      {
        name: "Managua",
        cities: ["Managua", "Mateare", "San Rafael del Sur", "Ticuantepe", "Tipitapa"]
      },
      {
        name: "Masaya",
        cities: ["La Concepcion", "Masaya", "Nandasmo", "Nindiri", "Niquinohomo"]
      },
      {
        name: "Matagalpa",
        cities: ["Ciudad Dario", "Esquipulas", "Matagalpa", "Matiguas", "Rio Blanco", "San Isidro", "Sebaco"]
      },
      {
        name: "Nueva Segovia",
        cities: []
      },
      {
        name: "Rio San Juan",
        cities: []
      },
      {
        name: "Rivas",
        cities: ["Belen", "Rivas", "San Jorge", "San Juan del Sur"]
      }
    ],
    isoAlpha2: "NI",
    isoAlpha3: "NIC",
    isoNumeric: 558
  },
  {
    name: "Niger",
    flag: "🇳🇪",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Agadez",
        cities: ["Agadez", "Arlit", "Bilma", "Fachi", "Ingall", "Tchirozerine"]
      },
      {
        name: "Diffa",
        cities: ["Diffa", "Maine-Soroa", "N''Guigmi"]
      },
      {
        name: "Dosso",
        cities: ["Birni N''Gaoure", "Boboye", "Dogondoutchi", "Dosso", "Gaya", "Loga"]
      },
      {
        name: "Maradi",
        cities: ["Aguie", "Dakoro", "Gazaoua", "Guidan Roumdji", "Madarounfa", "Maradi", "Mayahi", "Tessaoua", "Tibiri"]
      },
      {
        name: "Niamey",
        cities: ["Niamey"]
      },
      {
        name: "Tahoua",
        cities: ["Birni N''Konni", "Bouza", "Illela", "Keita", "Madaoua", "Malbaza''uzine", "Tahoua", "Tchintabaraden"]
      },
      {
        name: "Tillabery",
        cities: ["Ayorou", "Filingue", "Kollo", "Ouallam", "Say", "Tera", "Tillabery"]
      },
      {
        name: "Zinder",
        cities: ["Goure", "Kantche", "Magaria", "Matameye", "Mirriah", "Tanout", "Zinder"]
      }
    ],
    isoAlpha2: "NE",
    isoAlpha3: "NER",
    isoNumeric: 562
  },
  {
    name: "Nigeria",
    flag: "🇳🇬",
    currency: {
      code: "NGN",
      name: "Naira",
      symbol: "₦"
    },
    states: [
      {
        name: "Abia",
        cities: ["Aba", "Amaigbo", "Arochukwu", "Bende", "Ohafia", "Okwe", "Umuahia"]
      },
      {
        name: "Abuja (Federal Capital Territory)",
        cities: ["Abuja", "Abaji", "Bwari", "Gwagwalada", "Kubwa", "Kuje", "Kwali", "Zuba", "Dei dei"]
      },
      {
        name: "Adamawa",
        cities: ["Demsa", "Ganye", "Girei", "Gombi", "Jada", "Jimeta", "Lamurde", "Madagala", "Maiha", "Mubi", "Ngurore", "Numan", "Shelleng", "Song", "Toungo", "Yola"]
      },
      {
        name: "Akwa Ibom",
        cities: ["Uyo", "Eket", "Ikot Ekpene", "Ikot Abasi", "Oron", "Oruk Anam", "Ibiono Ibom", "Nsit Ubiom", "Nsit Ibom", "Abak", "Ibeno"]
      },
      {
        name: "Anambra",
        cities: ["Aguata", "Agulu", "Anambra", "Awka", "Enugu Ukwu", "Igbo Ukwu", "Ihiala", "Nkpor", "Nnewi", "Obosi", "Okija", "Okpoko", "Onitsha", "Ozubulu", "Uga", "Abatete", "Ogidi", "Nkwelle Ezunaka", "Ojoto", "Oba", "Nsugbe", "Aguleri", "Anam", "Otuocha", "Atani"]
      },
      {
        name: "Bauchi",
        cities: ["Alkaleri", "Azare", "Bauchi", "Bogoro", "Bununu Dass", "Darazo", "Gamawa", "Ganjuwa", "Jamari", "Katagum", "Misau", "Ningi", "Tafawa Balewa"]
      },
      {
        name: "Bayelsa",
        cities: ["Brass", "Ekeremor", "Nembe", "Yenagoa"]
      },
      {
        name: "Benue",
        cities: ["Aliade", "Gboko", "Katsina-Ala", "Makurdi", "Otukpo", "Ukum", "Zaki Biam"]
      },
      {
        name: "Borno",
        cities: ["Abadan", "Askira", "Bama", "Biu", "Chibok", "Damboa", "Dikwa", "Gamboru", "Gubio", "Gwoza", "Kaga", "Kala", "Konduga", "Kukawa", "Mafa", "Magumeri", "Maiduguri", "Marte", "Monguno", "Ngala", "Shani"]
      },
      {
        name: "Cross River",
        cities: ["Calabar", "Ikom", "Ogoja", "Ugep", "Obudu", "Sankwala", "Ikot Offiong", "Ekong"]
      },
      {
        name: "Delta",
        cities: ["Agbor", "Asaba", "Bomadi", "Burutu", "Okpe", "Patani", "Sapele", "Ughelli", "Warri"]
      },
      {
        name: "Ebonyi",
        cities: ["Abakaliki", "Afikpo", "Effium", "Ezza", "Ishieke", "Uburu"]
      },
      {
        name: "Edo",
        cities: ["Auchi", "Benin", "Ekpoma", "Igarra", "Ikpoba", "Irrua", "Sabongida", "Ubiaja", "Uromi"]
      },
      {
        name: "Ekiti",
        cities: ["Ado", "Aramoko", "Efon Alaye", "Emure", "Igbara Odo", "Igede", "Ijero", "Ikere", "Ikole", "Ilawe", "Ipoti", "Ise", "Ode", "Omuo", "Osi"]
      },
      {
        name: "Enugu",
        cities: ["Agwa", "Aku", "Awgu", "Eha Amufu", "Enugu", "Enugu Ezike", "Enugu Ngwo", "Ezeagu", "Mberubu", "Nsukka", "Oji", "Udi"]
      },
      {
        name: "Gombe",
        cities: ["Ako", "Deba", "Duku", "Garko", "Gombe", "Kaltungo", "Kumo", "Nafada", "Pindiga"]
      },
      {
        name: "Imo",
        cities: ["Aboh", "Etiti", "Ihite", "Nkwerre", "Oguta", "Okigwe", "Owerri", "Orlu", "Mbaise", "Ohaji/Egbema", "Ngor Okpala", "Mgbidi", "Izombe", "Isu", "Mbaitoli", "Orsu", "Amaigbo"]
      },
      {
        name: "Jigawa",
        cities: ["Babura", "Birnin Kudu", "Buji", "Dutse", "Garki", "Gumel", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kaugama", "Kazaure", "Keffin Hausa", "Kiyawa", "Maigatari", "Malammaduri", "Ringim", "Sule Tankarkar", "Taura"]
      },
      {
        name: "Kaduna",
        cities: ["Birnin Gwari", "Doka", "Giwa", "Gwagwada", "Hunkuyi", "Igabi", "Ikara", "Jemaa", "Kachia", "Kaduna", "Kafanchan", "Kagarko", "Kagoro", "Kaura", "Kudan", "Lere", "Makarfi", "Sabon Birnin Gwari", "Sabongari", "Sanga", "Soba", "Tudun Wada", "Zangon Katab", "Zaria"]
      },
      {
        name: "Kano",
        cities: ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dambarta", "Dawakin Tofe", "Fagge", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwarzo", "Kabo", "Kano", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Nassarawa", "Rano", "Rimin Gado", "Shanono", "Sumaila", "Takai", "Tofa", "Tudun Wada", "Wudil"]
      },
      {
        name: "Katsina",
        cities: ["Bakori", "Batsari", "Bindawa", "Cheranchi", "Dan Dume", "Danja", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibiya", "Kangiwa", "Kankara", "Kankiya", "Katsina", "Kurfi", "Malumfashi", "Mani", "Mashi", "Musawa", "Rimi", "Sandamu", "Zango"]
      },
      {
        name: "Kebbi",
        cities: ["Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Birnin Yauri", "Bunza", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko", "Maiyema", "Sakaba", "Shanga", "Suru", "Wasagu", "Zuru"]
      },
      {
        name: "Kogi",
        cities: ["Ajaokuta", "Ankpa", "Dekina", "Idah", "Kabba", "Koton-Karifi", "Kuroro", "Lokoja", "Mopa", "Ogaminana", "Ogori", "Okene"]
      },
      {
        name: "Kwara",
        cities: ["Ajasse", "Ilorin", "Jebba", "Kaiama", "Lafiagi", "Offa", "Pategi"]
      },
      {
        name: "Lagos",
        cities: ["Apapa", "Badagry", "Epe", "Ibeju", "Iganmu", "Ikeja", "Ikorodu", "Lagos", "Ojo", "Surulere", "Isolo", "Ejigbo", "Okota", "Ilasamaja", "Festac Town", "Ijeshatedo", "Amuwo Odofin", "Ajegunle", "Ojodu", "Onigbongbo", "Ojokoro", "Ajah", "Lekki", "Eredo", "Igando", "Idimu", "Egbe", "Ipaja", "Ayobo", "Abule Egba", "Agege", "Ojota", "Igbogbo", "Ketu", "Imota", "Yaba", "Bariga", "Mushin", "Oshodi", "Gbagada", "Oworonshoki", "Maryland", "Egbeda", "Alimosho", "Ogba", "Somolu", "Kosofe"]
      },
      {
        name: "Nassarawa",
        cities: ["Akwanga", "Awe", "Doma", "Keana", "Keffi", "Lafia", "Nassarawa", "Obi", "Toto", "Wamba"]
      },
      {
        name: "Niger",
        cities: ["Agale", "Babana", "Bida", "Bosso", "Chanchaga", "Gbako", "Kontagora", "Lapai", "Minna", "Mokwa", "New Bussa", "Rijau", "Shiroro", "Suleja", "Wushishi"]
      },
      {
        name: "Ogun",
        cities: ["Abeokuta", "Ado Odo", "Agbara", "Aiyetoro", "Ewekoro", "Ifo", "Ijebu Igbo", "Ijebu Ode", "Ikene", "Ilaro", "Ipokia", "Odogbolu", "Owode", "Sango Ota", "Shagamu"]
      },
      {
        name: "Ondo",
        cities: ["Akure", "Idanre", "Ikare", "Irele", "Odigbo", "Oka", "Okitipupa", "Ondo", "Owo"]
      },
      {
        name: "Osun",
        cities: ["Apomu", "Ede", "Ejigbo", "Erin-Oshogbo", "Gbongan", "Ife", "Ifon Osun", "Ijesha", "Ikire", "Ikirun", "Ila", "Ilesha", "Ilobu", "Inisa", "Iwo", "Modakeke", "Oke-Mesi", "Olorunda", "Olupona", "Ore", "Orolu", "Oshogbo", "Oyan"]
      },
      {
        name: "Oyo",
        cities: ["Akinyele", "Egbeda", "Eruwa", "Fiditi", "Ibadan", "Ibeto", "Igbo Ora", "Igboho", "Iseyin", "Kajola", "Kishi", "Lalupon", "Ogbomosho", "Ogo", "Oke-Iho", "Oyo", "Shaki"]
      },
      {
        name: "Plateau",
        cities: ["Barakin", "Bassa", "Bokkos", "Bukuru", "Jos", "Langtang", "Pankshin", "Riyom", "Shendam", "Vom", "Wase"]
      },
      {
        name: "Rivers",
        cities: ["Abonnema", "Abua", "Ahoada", "Bonny", "Bugama", "Degema", "Egbema", "Ogu", "Okrika", "Omoko", "Opobo", "Oyigbo", "Port Harcourt"]
      },
      {
        name: "Sokoto",
        cities: ["Binji", "Bodinga", "Dange", "Gada", "Goronyo", "Gwadabawa", "Illela", "Kebbe", "Kware", "Rabah", "Raka", "Sabon Birni", "Sokoto", "Tambawel", "Tureta", "Wamako", "Wurno"]
      },
      {
        name: "Taraba",
        cities: ["Bali", "Gashaka", "Gassol", "Ibi", "Jalingo", "Lau", "Takum", "Wukari", "Yorro"]
      },
      {
        name: "Yobe",
        cities: ["Damaturu", "Fika", "Gashua", "Geidam", "Gorgoram", "Gujba", "Gulani", "Jakusko", "Matsena", "Nguru", "Potiskum", "Yusufari"]
      },
      {
        name: "Zamfara",
        cities: ["Anka", "Bungudu", "Chafe", "Gummi", "Gusau", "Isa", "Kaura Namoda", "Kiyawa", "Maradun", "Maru", "Shinkafe", "Talata Mafara", "Zurmi"]
      }
    ],
    isoAlpha2: "NG",
    isoAlpha3: "NGA",
    isoNumeric: 566
  },
  {
    name: "Niue",
    flag: "🇳🇺",
    currency: {
      code: "NZD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Niue",
        cities: ["Niue"]
      }
    ],
    isoAlpha2: "NU",
    isoAlpha3: "NIU",
    isoNumeric: 570
  },
  {
    name: "Norfolk Island",
    flag: "🇳🇫",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Norfolk Island",
        cities: []
      }
    ],
    isoAlpha2: "NF",
    isoAlpha3: "NFK",
    isoNumeric: 574
  },
  {
    name: "North Korea",
    flag: "🇰🇵",
    currency: {
      code: "KPW"
    },
    states: [
      {
        name: "Chagangdo",
        cities: ["Kanggye"]
      },
      {
        name: "Hamgyeongbukto",
        cities: ["Cheongjin", "Kimchaek", "Najin"]
      },
      {
        name: "Hamgyeongnamdo",
        cities: ["Hamheung"]
      },
      {
        name: "Hwanghaebukto",
        cities: ["Sariweon", "Seongnim"]
      },
      {
        name: "Hwanghaenamdo",
        cities: ["Haeju"]
      },
      {
        name: "Kaeseong",
        cities: ["Kaeseong"]
      },
      {
        name: "Kangweon",
        cities: ["Weonsan"]
      },
      {
        name: "Nampo",
        cities: ["Nampo"]
      },
      {
        name: "Pyeonganbukto",
        cities: ["Sineuiju"]
      },
      {
        name: "Pyeongannamdo",
        cities: ["Phyeongseong"]
      },
      {
        name: "Pyeongyang",
        cities: ["Pyeongyang", "Pyongyang"]
      },
      {
        name: "Yanggang",
        cities: ["Hyesan"]
      }
    ]
  },
  {
    name: "Northern Mariana Islands",
    flag: "🇲🇵",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Northern Islands",
        cities: []
      },
      {
        name: "Rota",
        cities: ["Songsong"]
      },
      {
        name: "Saipan",
        cities: ["Capital Hill", "Chalan Kanoa", "Dandan", "Garapan", "Gualo Rai", "Kagman", "Koblerville", "San Antonio", "San Jose", "San Roque", "San Vicente", "Susupe", "Tanapag"]
      },
      {
        name: "Tinian",
        cities: ["San Jose"]
      }
    ],
    isoAlpha2: "MP",
    isoAlpha3: "MNP",
    isoNumeric: 580
  },
  {
    name: "Norway",
    flag: "🇳🇴",
    currency: {
      code: "NOK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Akershus",
        cities: ["Asker", "Billingstad", "Haslum", "Hosle", "Kjeller", "Lillestrom", "Lorenskog", "Lysaker", "LÃƒÂ¸renskog", "Rud", "Sandvika", "Strommen"]
      },
      {
        name: "Aust Agder",
        cities: []
      },
      {
        name: "Bergen",
        cities: ["Kokstad"]
      },
      {
        name: "Buskerud",
        cities: ["Drammen", "Hokksund", "Honefoss", "Kongsberg", "Lyngdal", "NÃƒÂ¦rsnes", "Vestby"]
      },
      {
        name: "Finnmark",
        cities: ["Baatsfjord", "Hammerfest"]
      },
      {
        name: "Hedmark",
        cities: ["Brumunddal", "Elverum", "Hamar", "Ilseng", "Rena", "Trysil"]
      },
      {
        name: "Hordaland",
        cities: ["Bergen", "HÃƒÂ¸ylandsbygd", "Lonevag", "Straume", "Tysnes", "Voss"]
      },
      {
        name: "Moere og Romsdal",
        cities: []
      },
      {
        name: "Nord Trondelag",
        cities: []
      },
      {
        name: "Nordland",
        cities: ["Bodo", "Mosjoen", "Narvik", "Nesna", "Saltdal", "Sortland", "Steigen"]
      },
      {
        name: "Oestfold",
        cities: ["Askim", "Fredrikstad", "Halden", "Hovik", "Moss", "Mysen", "Sarpsborg", "Tistedal"]
      },
      {
        name: "Oppland",
        cities: ["Lena", "Lillehammer"]
      },
      {
        name: "Oslo",
        cities: ["Oslo", "Skedsmo", "Skjetten"]
      },
      {
        name: "Rogaland",
        cities: ["Egersund", "Haugesund", "Kleppe", "Sandnes", "Sola", "Stavanger"]
      },
      {
        name: "Soer Troendelag",
        cities: []
      },
      {
        name: "Sogn og Fjordane",
        cities: []
      },
      {
        name: "Stavern",
        cities: ["Stavern"]
      },
      {
        name: "Sykkylven",
        cities: ["Sykkylven"]
      },
      {
        name: "Telemark",
        cities: ["Notodden", "Skien"]
      },
      {
        name: "Troms",
        cities: ["Harstad", "Troms", "TromsÃƒÂ¸"]
      },
      {
        name: "Vest Agder",
        cities: []
      },
      {
        name: "Vestfold",
        cities: ["Horten", "HusÃƒÂ¸ysund", "Larvik", "Rygge", "Sandefjord", "TÃƒÂ¸nsberg"]
      },
      {
        name: "ÃƒÂ˜stfold",
        cities: []
      }
    ],
    isoAlpha2: "NO",
    isoAlpha3: "NOR",
    isoNumeric: 578
  },
  {
    name: "Oman",
    flag: "🇴🇲",
    currency: {
      code: "OMR",
      name: "Rial",
      symbol: "﷼"
    },
    states: [
      {
        name: "Al Buraimi",
        cities: []
      },
      {
        name: "Dhufar",
        cities: ["Salalah"]
      },
      {
        name: "Masqat",
        cities: ["Azaiba", "Bawshar", "Madinat Qabus", "Masqat", "Matrah", "Muscat", "Muttrah", "Qurayyat", "Qurm", "Ruwi", "Wadi Al Kabir", "as-Sib"]
      },
      {
        name: "Musandam",
        cities: ["Khasab"]
      },
      {
        name: "Rusayl",
        cities: ["Rusayl"]
      },
      {
        name: "Wadi Kabir",
        cities: []
      },
      {
        name: "ad-Dakhiliyah",
        cities: ["Bahla", "Nizwa", "Sumayl"]
      },
      {
        name: "adh-Dhahirah",
        cities: ["Ibri", "al-Buraymi"]
      },
      {
        name: "al-Batinah",
        cities: ["Al khuwair", "Barkah", "Saham", "Shinas", "Suhar", "al-Khaburah", "al-Masna''ah", "ar-Rustaq", "as-Suwayq"]
      },
      {
        name: "ash-Sharqiyah",
        cities: ["Ibra", "Sur", "al-Mudaybi"]
      }
    ],
    isoAlpha2: "OM",
    isoAlpha3: "OMN",
    isoNumeric: 512
  },
  {
    name: "Pakistan",
    flag: "🇵🇰",
    currency: {
      code: "PKR",
      name: "Rupee",
      symbol: "₨"
    },
    states: [
      {
        name: "Baluchistan",
        cities: ["Barkhan", "Bela", "Bhag", "Chaman", "Chitkan", "Dalbandin", "Dera Allah Yar", "Dera Bugti", "Dera Murad Jamali", "Dhadar", "Duki", "Gaddani", "Gwadar", "Harnai", "Hub", "Jiwani", "Kalat", "Kharan", "Khuzdar", "Kohlu", "Loralai", "Mach", "Mastung", "Nushki", "Ormara", "Pasni", "Pishin", "Quetta", "Sibi", "Sohbatpur", "Surab", "Turbat", "Usta Muhammad", "Uthal", "Wadh", "Winder", "Zehri", "Zhob", "Ziarat"]
      },
      {
        name: "Federal Capital Area",
        cities: []
      },
      {
        name: "Federally administered Tribal",
        cities: []
      },
      {
        name: "North-West Frontier",
        cities: []
      },
      {
        name: "Northern Areas",
        cities: []
      },
      {
        name: "Punjab",
        cities: ["Abohar", "Adampur", "Ahmedgarh", "Ajnala", "Akalgarh", "Alawalpur", "Amloh", "Amritsar", "Amritsar Cantonment", "Anandpur Sahib", "Badhni Kalan", "Bagh Purana", "Balachaur", "Banaur", "Banga", "Banur", "Baretta", "Bariwala", "Barnala", "Bassi Pathana", "Batala", "Bathinda", "Begowal", "Behrampur", "Bhabat", "Bhadur", "Bhankharpur", "Bharoli Kalan", "Bhawanigarh", "Bhikhi", "Bhikhiwind", "Bhisiana", "Bhogpur", "Bhuch", "Bhulath", "Budha Theh", "Budhlada", "Chima", "Chohal", "Dasuya", "Daulatpur", "Dera Baba Nanak", "Dera Bassi", "Dhanaula", "Dharam Kot", "Dhariwal", "Dhilwan", "Dhuri", "Dinanagar", "Dirba", "Doraha", "Faridkot", "Fateh Nangal", "Fatehgarh Churian", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Firozpur Cantonment", "Gardhiwala", "Garhshankar", "Ghagga", "Ghanaur", "Giddarbaha", "Gobindgarh", "Goniana", "Goraya", "Gurdaspur", "Guru Har Sahai", "Hajipur", "Handiaya", "Hariana", "Hoshiarpur", "Hussainpur", "Jagraon", "Jaitu", "Jalalabad", "Jalandhar", "Jalandhar Cantonment", "Jandiala", "Jugial", "Kalanaur", "Kapurthala", "Karoran", "Kartarpur", "Khamanon", "Khanauri", "Khanna", "Kharar", "Khem Karan", "Kot Fatta", "Kot Isa Khan", "Kot Kapura", "Kotkapura", "Kurali", "Lalru", "Lehra Gaga", "Lodhian Khas", "Longowal", "Ludhiana", "Machhiwara", "Mahilpur", "Majitha", "Makhu", "Malaut", "Malerkotla", "Maloud", "Mandi Gobindgarh", "Mansa", "Maur", "Moga", "Mohali", "Moonak", "Morinda", "Mukerian", "Muktsar", "Mullanpur Dakha", "Mullanpur Garibdas", "Munak", "Muradpura", "Nabha", "Nakodar", "Nangal", "Nawashahr", "Naya Nangal", "Nehon", "Nurmahal", "Pathankot", "Patiala", "Patti", "Pattran", "Payal", "Phagwara", "Phillaur", "Qadian", "Rahon", "Raikot", "Raja Sansi", "Rajpura", "Ram Das", "Raman", "Rampura", "Rayya", "Rupnagar", "Rurki Kasba", "Sahnewal", "Samana", "Samrala", "Sanaur", "Sangat", "Sangrur", "Sansarpur", "Sardulgarh", "Shahkot", "Sham Churasi", "Shekhpura", "Sirhind", "Sri Hargobindpur", "Sujanpur", "Sultanpur Lodhi", "Sunam", "Talwandi Bhai", "Talwara", "Tappa", "Tarn Taran", "Urmar Tanda", "Zira", "Zirakpur", "Abdul Hakim", "Ahmadpur East", "Ahmadpur Lumma", "Ahmadpur Sial", "Ahmedabad", "Alipur", "Alipur Chatha", "Arifwala", "Attock", "Baddomalhi", "Bagh", "Bahawalnagar", "Bahawalpur", "Bai Pheru", "Basirpur", "Begowala", "Bhakkar", "Bhalwal", "Bhawana", "Bhera", "Bhopalwala", "Burewala", "Chak Azam Sahu", "Chak Jhumra", "Chak Sarwar Shahid", "Chakwal", "Chawinda", "Chichawatni", "Chiniot", "Chishtian Mandi", "Choa Saidan Shah", "Chuhar Kana", "Chunian", "Dajal", "Darya Khan", "Daska", "Daud Khel", "Daultala", "Dera Din Panah", "Dera Ghazi Khan", "Dhanote", "Dhonkal", "Dijkot", "Dina", "Dinga", "Dipalpur", "Dullewala", "Dunga Bunga", "Dunyapur", "Eminabad", "Faisalabad", "Faqirwali", "Faruka", "Fateh Jang", "Fatehpur", "Fazalpur", "Ferozwala", "Fort Abbas", "Garh Maharaja", "Ghakar", "Ghurgushti", "Gojra", "Gujar Khan", "Gujranwala", "Gujrat", "Hadali", "Hafizabad", "Harnoli", "Harunabad", "Hasan Abdal", "Hasilpur", "Haveli", "Hazro", "Hujra Shah Muqim", "Isa Khel", "Jahanian", "Jalalpur Bhattian", "Jalalpur Jattan", "Jalalpur Pirwala", "Jalla Jeem", "Jamke Chima", "Jampur", "Jand", "Jandanwala", "Jandiala Sherkhan", "Jaranwala", "Jatoi", "Jauharabad", "Jhang", "Jhawarian", "Jhelum", "Kabirwala", "Kahna Nau", "Kahror Pakka", "Kahuta", "Kalabagh", "Kalaswala", "Kaleke", "Kalur Kot", "Kamalia", "Kamar Mashani", "Kamir", "Kamoke", "Kamra", "Kanganpur", "Karampur", "Karor Lal Esan", "Kasur", "Khairpur Tamewali", "Khanewal", "Khangah Dogran", "Khangarh", "Khanpur", "Kharian", "Khewra", "Khundian", "Khurianwala", "Khushab", "Kot Abdul Malik", "Kot Addu", "Kot Mithan", "Kot Moman", "Kot Radha Kishan", "Kot Samaba", "Kotli Loharan", "Kundian", "Kunjah", "Lahore", "Lalamusa", "Lalian", "Liaqatabad", "Liaqatpur", "Lieah", "Liliani", "Lodhran", "Ludhewala Waraich", "Mailsi", "Makhdumpur", "Makhdumpur Rashid", "Malakwal", "Mamu Kanjan", "Mananwala Jodh Singh", "Mandi Bahauddin", "Mandi Sadiq Ganj", "Mangat", "Mangla", "Mankera", "Mian Channun", "Miani", "Mianwali", "Minchinabad", "Mitha Tiwana", "Multan", "Muridke", "Murree", "Mustafabad", "Muzaffargarh", "Nankana Sahib", "Narang", "Narowal", "Noorpur Thal", "Nowshera", "Nowshera Virkan", "Okara", "Pakpattan", "Pasrur", "Pattoki", "Phalia", "Phularwan", "Pind Dadan Khan", "Pindi Bhattian", "Pindi Gheb", "Pirmahal", "Qadirabad", "Qadirpur Ran", "Qila Disar Singh", "Qila Sobha Singh", "Quaidabad", "Rabwah", "Rahim Yar Khan", "Raiwind", "Raja Jang", "Rajanpur", "Rasulnagar", "Rawalpindi", "Renala Khurd", "Rojhan", "Saddar Gogera", "Sadiqabad", "Safdarabad", "Sahiwal", "Samasatta", "Sambrial", "Sammundri", "Sangala Hill", "Sanjwal", "Sarai Alamgir", "Sarai Sidhu", "Sargodha", "Shadiwal", "Shahkot", "Shahpur City", "Shahpur Saddar", "Shakargarh", "Sharqpur", "Shehr Sultan", "Shekhupura", "Shujaabad", "Sialkot", "Sillanwali", "Sodhra", "Sohawa", "Sukheke", "Talagang", "Tandlianwala", "Taunsa", "Taxila", "Tibba Sultanpur", "Toba Tek Singh", "Tulamba", "Uch", "Vihari", "Wah", "Warburton", "Wazirabad", "Yazman", "Zafarwal", "Zahir Pir"]
      },
      {
        name: "Sind",
        cities: ["Adilpur", "Badah", "Badin", "Bagarji", "Bakshshapur", "Bandhi", "Berani", "Bhan", "Bhiria City", "Bhiria Road", "Bhit Shah", "Bozdar", "Bulri", "Chak", "Chambar", "Chohar Jamali", "Chor", "Dadu", "Daharki", "Daro", "Darya Khan Mari", "Daulatpur", "Daur", "Dhoronaro", "Digri", "Diplo", "Dokri", "Faqirabad", "Gambat", "Garello", "Garhi Khairo", "Garhi Yasin", "Gharo", "Ghauspur", "Ghotki", "Golarchi", "Guddu", "Gulistan-E-Jauhar", "Hala", "Hingorja", "Hyderabad", "Islamkot", "Jacobabad", "Jam Nawaz Ali", "Jam Sahib", "Jati", "Jhol", "Jhudo", "Johi", "Kadhan", "Kambar", "Kandhra", "Kandiari", "Kandiaro", "Karachi", "Karampur", "Kario Ghanwar", "Karoondi", "Kashmor", "Kazi Ahmad", "Keti Bandar", "Khadro", "Khairpur", "Khairpur Nathan Shah", "Khandh Kot", "Khanpur", "Khipro", "Khoski", "Khuhra", "Khyber", "Kot Diji", "Kot Ghulam Mohammad", "Kotri", "Kumb", "Kunri", "Lakhi", "Larkana", "Madeji", "Matiari", "Matli", "Mehar", "Mehrabpur", "Miro Khan", "Mirpur Bathoro", "Mirpur Khas", "Mirpur Mathelo", "Mirpur Sakro", "Mirwah", "Mithi", "Moro", "Nabisar", "Nasarpur", "Nasirabad", "Naudero", "Naukot", "Naushahro Firoz", "Nawabshah", "Oderolal Station", "Pacca Chang", "Padidan", "Pano Aqil", "Perumal", "Phulji", "Pirjo Goth", "Piryaloi", "Pithoro", "Radhan", "Rajo Khanani", "Ranipur", "Ratodero", "Rohri", "Rustam", "Saeedabad", "Sakrand", "Samaro", "Sanghar", "Sann", "Sarhari", "Sehwan", "Setharja", "Shah Dipalli", "Shahdadkot", "Shahdadpur", "Shahpur Chakar", "Shahpur Jahania", "Shikarpur", "Sinjhoro", "Sita Road", "Sobhodero", "Sujawal", "Sukkur", "Talhar", "Tando Adam", "Tando Allah Yar", "Tando Bagho", "Tando Ghulam Ali", "Tando Jam", "Tando Jan Mohammad", "Tando Mitha Khan", "Tando Muhammad Khan", "Tangwani", "Thano Bula Khan", "Thari Mirwah", "Tharushah", "Thatta", "Ther I", "Ther I Mohabat", "Thul", "Ubauro", "Umarkot", "Warah"]
      }
    ],
    isoAlpha2: "PK",
    isoAlpha3: "PAK",
    isoNumeric: 586
  },
  {
    name: "Palau",
    flag: "🇵🇼",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Aimeliik",
        cities: ["Ulimang"]
      },
      {
        name: "Airai",
        cities: ["Airai"]
      },
      {
        name: "Angaur",
        cities: ["Ngaramash"]
      },
      {
        name: "Hatobohei",
        cities: ["Hatohobei"]
      },
      {
        name: "Kayangel",
        cities: ["Kayangel"]
      },
      {
        name: "Koror",
        cities: ["Koror", "Meyungs"]
      },
      {
        name: "Melekeok",
        cities: ["Melekeok"]
      },
      {
        name: "Ngaraard",
        cities: ["Ngermechau"]
      },
      {
        name: "Ngardmau",
        cities: ["Chol"]
      },
      {
        name: "Ngaremlengui",
        cities: ["Ollei"]
      },
      {
        name: "Ngatpang",
        cities: ["Oikul"]
      },
      {
        name: "Ngchesar",
        cities: ["Ngerkeai"]
      },
      {
        name: "Ngerchelong",
        cities: ["Imeong"]
      },
      {
        name: "Ngiwal",
        cities: ["Ngetkip"]
      },
      {
        name: "Peleliu",
        cities: ["Kloulklubed"]
      },
      {
        name: "Sonsorol",
        cities: ["Dongosaru"]
      }
    ],
    isoAlpha2: "PW",
    isoAlpha3: "PLW",
    isoNumeric: 585
  },
  {
    name: "Palestine",
    flag: "🇵🇸",
    currency: {
      code: "ILS"
    },
    states: [
      {
        name: "Ariha",
        cities: ["Ariha"]
      },
      {
        name: "Bayt Lahm",
        cities: []
      },
      {
        name: "Bethlehem",
        cities: ["Beit Jala"]
      },
      {
        name: "Dayr-al-Balah",
        cities: ["Dayr-al-Balah", "al-Burayj", "al-Insayrat", "al-Maghazi"]
      },
      {
        name: "Ghazzah",
        cities: ["Ghazzah"]
      },
      {
        name: "Ghazzah ash-Shamaliyah",
        cities: ["Ghazzah"]
      },
      {
        name: "Janin",
        cities: ["Janin", "Qabatiyah"]
      },
      {
        name: "Khan Yunis",
        cities: []
      },
      {
        name: "Nabulus",
        cities: ["Nabulus"]
      },
      {
        name: "Qalqilyah",
        cities: ["Qalqilyah"]
      },
      {
        name: "Rafah",
        cities: ["Rafah", "Tall as-Sultan"]
      },
      {
        name: "Ram Allah wal-Birah",
        cities: []
      },
      {
        name: "Salfit",
        cities: ["Salfit"]
      },
      {
        name: "Tubas",
        cities: ["Tubas"]
      },
      {
        name: "Tulkarm",
        cities: ["Tulkarm"]
      },
      {
        name: "al-Khalil",
        cities: ["Dura", "Halhul", "Yattah", "ad-Dahiriyah", "al-Khalil"]
      },
      {
        name: "al-Quds",
        cities: ["Ma''ale Adummim", "al-Quds"]
      }
    ]
  },
  {
    name: "Panama",
    flag: "🇵🇦",
    currency: {
      code: "PAB",
      name: "Balboa",
      symbol: "B/."
    },
    states: [
      {
        name: "Bocas del Toro",
        cities: []
      },
      {
        name: "Chiriqui",
        cities: ["Alanje", "Bajo Boquete", "Boqueron", "Bugaba", "David", "Dolega", "Gualaca", "Horconcitos", "Las Lajas", "Puerto Armuelles", "Remedios", "Rio Sereno", "Tole"]
      },
      {
        name: "Cocle",
        cities: ["Aguadulce", "Anton", "La Pintada", "Nata", "Ola", "Penonome"]
      },
      {
        name: "Colon",
        cities: ["Colon", "Miguel de la Borda", "Nuevo Chagres", "Portobelo", "Santa Isabel"]
      },
      {
        name: "Darien",
        cities: ["El Real de Santa Maria", "La Palma"]
      },
      {
        name: "Embera",
        cities: ["Cirilo Guainora", "Rio Sabalo"]
      },
      {
        name: "Herrera",
        cities: ["Chitre", "Las Minas", "Los Pozos", "Ocu", "Parita", "Pese", "Santa Maria"]
      },
      {
        name: "Kuna Yala",
        cities: []
      },
      {
        name: "Los Santos",
        cities: []
      },
      {
        name: "Ngobe Bugle",
        cities: []
      },
      {
        name: "Panama",
        cities: ["Arraijan", "Capira", "Chame", "Chepo", "Chiman", "La Chorrera", "Panama", "San Carlos", "San Miguel", "San Miguelito", "Taboga"]
      },
      {
        name: "Veraguas",
        cities: ["Atalaya", "Calobre", "Canazas", "La Mesa", "Las Palmas", "Montijo", "Rio de Jesus", "San Francisco", "Santa Fe", "Santiago", "Sona"]
      }
    ],
    isoAlpha2: "PA",
    isoAlpha3: "PAN",
    isoNumeric: 591
  },
  {
    name: "Papua New Guinea",
    flag: "🇵🇬",
    currency: {
      code: "PGK",
      name: "Kina",
      symbol: false
    },
    states: [
      {
        name: "East New Britain",
        cities: []
      },
      {
        name: "East Sepik",
        cities: []
      },
      {
        name: "Eastern Highlands",
        cities: []
      },
      {
        name: "Enga",
        cities: ["Laiagam", "Porgera", "Wabag"]
      },
      {
        name: "Fly River",
        cities: []
      },
      {
        name: "Gulf",
        cities: ["Kerema"]
      },
      {
        name: "Madang",
        cities: ["Finschhafen", "Madang"]
      },
      {
        name: "Manus",
        cities: ["Lorengau"]
      },
      {
        name: "Milne Bay",
        cities: []
      },
      {
        name: "Morobe",
        cities: ["Bulolo", "Lae", "Wau"]
      },
      {
        name: "National Capital District",
        cities: []
      },
      {
        name: "New Ireland",
        cities: []
      },
      {
        name: "North Solomons",
        cities: []
      },
      {
        name: "Oro",
        cities: ["Kokoda", "Popondetta"]
      },
      {
        name: "Sandaun",
        cities: ["Vanimo"]
      },
      {
        name: "Simbu",
        cities: ["Kundiawa"]
      },
      {
        name: "Southern Highlands",
        cities: []
      },
      {
        name: "West New Britain",
        cities: []
      },
      {
        name: "Western Highlands",
        cities: []
      }
    ],
    isoAlpha2: "PG",
    isoAlpha3: "PNG",
    isoNumeric: 598
  },
  {
    name: "Paraguay",
    flag: "🇵🇾",
    currency: {
      code: "PYG",
      name: "Guarani",
      symbol: "Gs"
    },
    states: [
      {
        name: "Alto Paraguay",
        cities: []
      },
      {
        name: "Alto Parana",
        cities: []
      },
      {
        name: "Amambay",
        cities: ["Bella Vista", "Capitan Bado", "Pedro Juan Caballero"]
      },
      {
        name: "Asuncion",
        cities: ["Asuncion"]
      },
      {
        name: "Boqueron",
        cities: ["Doctor Pedro P. Pena", "Filadelfia", "Marechal Estigarribia", "Menno", "Neuland"]
      },
      {
        name: "Caaguazu",
        cities: ["Caaguazu", "Carayao", "Coronel Oviedo", "Doctor Cecilio Baez", "Doctor Eulogio Estigarribia", "Doctor Juan Manuel Frutos", "Jose Ocampos", "La Pastoria", "Marechal Francisco Solano Lope", "Mbutuy", "Nueva Londres", "Raul Arsenio Oviedo", "Repatriacion", "San Joaquin", "San Jose de los Arroyos", "Simon Bolivar", "Tres Corrales", "Tres de Febrero", "Vaqueria", "Yhu"]
      },
      {
        name: "Caazapa",
        cities: ["Abai", "Buena Vista", "Caazapa", "Doctor Moises Bertoni", "General Higinio Morinigo", "Maciel", "San Juan Nepomuceno", "Tavai", "Yegros", "Yuty"]
      },
      {
        name: "Canendiyu",
        cities: ["Corpus Christi", "Curuguaty", "General Francisco Alvarez", "Itanara", "Katuete", "La Paloma", "Nueva Esperanza", "Salto del Guaira", "Ygatimi", "Ypehu"]
      },
      {
        name: "Central",
        cities: ["Aregua", "Capiata", "Fernando de la Mora", "Guarambare", "Ita", "Itaugua", "Juan Augusto Saldivar", "Lambare", "Limpio", "Luque", "Nemby", "Nueva Italia", "San Antonio", "San Lorenzo", "Villa Elisa", "Villeta", "Ypacarai", "Ypane"]
      },
      {
        name: "Concepcion",
        cities: ["Belen", "Concepcion", "Horqueta", "Loreto", "San Carlos", "San Lazaro"]
      },
      {
        name: "Cordillera",
        cities: ["Altos", "Arroyos y Esteros", "Atyra", "Caacupe", "Caraguatay", "Emboscada", "Eusebio Ayala", "Isla Pucu", "Itacurubi de la Cordillera", "Juan de Mena", "Loma Grande", "Mbocayty del Yhaguy", "Nueva Colombia", "Piribebuy", "Primero de Marzo", "San Bernardino", "San Jose Obrero", "Santa Elena", "Tobati", "Valenzuela"]
      },
      {
        name: "Guaira",
        cities: ["Borja", "Capitan Mauricio Jose Troche", "Coronel Martinez", "Doctor Botrell", "Felix Perez Cardozo", "General Eugenio Alejandrino Ga", "Independencia", "Itape", "Iturbe", "Jose Fasardi", "Mbocayaty", "Natalicio Talavera", "Numi", "Paso Yobai", "San Salvador", "Villarrica", "Yataity"]
      },
      {
        name: "Itapua",
        cities: ["Alto Vera", "Bella Vista", "Cambyreta", "Capitan Meza", "Capitan Miranda", "Carlos Antonio Lopez", "Carmen del Parana", "Coronel Bogado", "Edelira", "Encarnacion", "Fram", "General Artigas", "General Delgado", "Hohenau", "Itapua Poty", "Jesus", "La Paz", "Leandro Oviedo", "Mayor Otano", "Natalio", "Nueva Alborada", "Obligado", "Pirapo", "San Cosme y Damian", "San Juan del Parana", "San Pedro del Parana", "San Rafael del Parana", "Tomas Romero Pereira", "Trinidad", "Yatytay"]
      },
      {
        name: "Misiones",
        cities: ["Ayolas", "San Ignacio", "San Juan Bautista", "San Miguel", "San Patricio", "Santa Maria", "Santa Rosa", "Santiago", "Villa Florida", "Yabebyry"]
      },
      {
        name: "Neembucu",
        cities: ["Alberdi", "Cerrito", "Desmochados", "General Jose Eduvigis Diaz", "Guazu Cua", "Humaita", "Isla Umbu", "Laureles", "Mayor Jose Dejesus Martinez", "Paso de Patria", "Pilar", "San Juan Bautista de Neembucu", "Tacuaras", "Villa Franca", "Villa Oliva", "Villalbin"]
      },
      {
        name: "Paraguari",
        cities: ["Acahay", "Caapucu", "Carapegua", "Escobar", "General Bernardino Caballero", "La Colmena", "Mbuyapey", "Paraguari", "Pirayu", "Quiindy", "Quyquyho", "San Roque Gonzalez de Santa Cr", "Sapucai", "Tebicuarymi", "Yaguaron", "Ybycui", "Ybytimi"]
      },
      {
        name: "Presidente Hayes",
        cities: []
      },
      {
        name: "San Pedro",
        cities: []
      }
    ],
    isoAlpha2: "PY",
    isoAlpha3: "PRY",
    isoNumeric: 600
  },
  {
    name: "Peru",
    flag: "🇵🇪",
    currency: {
      code: "PEN",
      name: "Sol",
      symbol: "S/."
    },
    states: [
      {
        name: "Amazonas",
        cities: ["Bagua Grande", "Cajaruro", "Chachapoyas", "Jazan", "La Peca"]
      },
      {
        name: "Ancash",
        cities: ["Ancash", "Caraz", "Carhuaz", "Casma", "Chimbote", "Choishco", "Huallanca", "Huaraz", "Huari", "Huarmey", "Pomabamba", "Santa", "Yungay"]
      },
      {
        name: "Apurimac",
        cities: ["Abancay", "Andahuaylas", "San Jeronimo", "Talavera"]
      },
      {
        name: "Arequipa",
        cities: ["Acari", "Arequipa", "Camana", "Chivay", "Cocachacra", "Dean Valdivia", "Lluta", "Mollendo", "Nicolas de Pierola", "Orcopampa", "Punta de Bombon", "Rio Grande", "Yura"]
      },
      {
        name: "Ayacucho",
        cities: ["Ayacucho", "Ayna", "Coracora", "Huanta", "Puquio", "San Miguel", "Santa Rosa", "Silvia", "Tambo"]
      },
      {
        name: "Cajamarca",
        cities: ["Bambamarca", "Bellavista", "Cajabamba", "Cajamarca", "Celendin", "Chota", "Cutervo", "Jaen", "Pedro Galvez", "Pucara", "San Ignacio", "Santa Cruz", "Yonan"]
      },
      {
        name: "Cusco",
        cities: ["Anta", "Calca", "Cusco", "Espinar", "Oropesa", "Quillabamba", "Santa Ana", "Santo Tomas", "Sicuani", "Urcos", "Urubamba"]
      },
      {
        name: "Huancavelica",
        cities: ["Huancavelica", "Lircay", "Pampas"]
      },
      {
        name: "Huanuco",
        cities: ["Ambos", "Huanuco", "Jose Crespo y Castillo", "La Union", "Llata", "Rupa-Rupa", "San Miguel de Cauri", "Tingo Maria"]
      },
      {
        name: "Ica",
        cities: ["Chincha Alta", "Ica", "Los Aquijes", "Marcona", "Nazca", "Pachacutec", "Palpa", "Pisco", "Salas", "San Andres", "San Clemente", "San Juan Bautista", "Santiago", "Subtanjalla", "Tupac Amaru Inca", "Vista Alegre"]
      },
      {
        name: "Junin",
        cities: ["Acobamba", "Acolla", "Carhuamayo", "Chanchamayo", "Chupaca", "Concepcion", "Huancayo", "Huasahuasi", "Huayucachi", "Jauja", "Junin", "La Oroya", "Mazamari", "Morococha", "Orcotuna", "Pangoa", "Perene", "Pichanaqui", "Pilcomayo", "San Agustin", "San Jeronimo de Tunan", "San Pedro de Cajas", "San Ramon", "Santa Rosa de Saco", "Satipo", "Sicaya", "Tarma", "Yauli", "Yauya"]
      },
      {
        name: "La Libertad",
        cities: []
      },
      {
        name: "Lambayeque",
        cities: ["Chiclayo", "Chongoyape", "Eten", "Ferrenafe", "Illimo", "Jayanca", "Lagunas", "Lambayeque", "Manuel Mesones Muro", "Mochumi", "Monsefu", "Morrope", "Motupe", "Olmos", "Oyotun", "Picsi", "Pimentel", "Pueblo Nuevo", "Reque", "San Jose", "Sana", "Santa Rosa", "Tucume"]
      },
      {
        name: "Lima y Callao",
        cities: []
      },
      {
        name: "Loreto",
        cities: ["Barranca", "Contamana", "Fernando Lores", "Iquitos", "Lagunas", "Nauta", "Paucarpata", "Ramon Castilla", "Requena", "Saquena", "Vargas Guerra", "Yurimaguas"]
      },
      {
        name: "Madre de Dios",
        cities: []
      },
      {
        name: "Moquegua",
        cities: ["Ilo", "Moquegua", "Pacocha", "Torata"]
      },
      {
        name: "Pasco",
        cities: ["Cerro de Pasco", "Chaupimarca", "Oxapampa", "Paucartambo", "Simon Bolivar", "Tinyahuarco", "Villa Rica", "Yanacancha", "Yanahuanca"]
      },
      {
        name: "Piura",
        cities: ["Ayabaca", "Bernal", "Buenos Aires", "Catacaos", "Chulucanas", "Colan", "Cura Mori", "El Alto", "Huancabamba", "Ignacio Escudero", "La Arena", "La Brea", "La Huaca", "La Matanza", "La Union", "Las Lomas", "Los Organos", "Mancora", "Marcavelica", "Morropon", "Paita", "Piura", "Querecotillo", "Salitral", "San Juan de Bigote", "Sechura", "Sullana", "Talara", "Tamarindo", "Tambo Grande", "Vice", "Vichayal"]
      },
      {
        name: "Puno",
        cities: ["Ayaviri", "Azangaro", "Desaguadero", "Huancane", "Ilave", "Juli", "Juliaca", "Lampa", "Macusani", "Nunoa", "Puno", "Putina", "Santa Lucia", "Yanahuara", "Yunguyo"]
      },
      {
        name: "San Martin",
        cities: []
      },
      {
        name: "Tacna",
        cities: ["Ilabaya", "Tacna", "Tarata"]
      },
      {
        name: "Tumbes",
        cities: ["Aguas Verdes", "Corrales", "La Cruz", "Papayal", "San Jacinto", "Tumbes", "Zarumilla", "Zorritos"]
      },
      {
        name: "Ucayali",
        cities: ["Campoverde", "Padre Abad", "Pucallpa", "Raymondi"]
      }
    ],
    isoAlpha2: "PE",
    isoAlpha3: "PER",
    isoNumeric: 604
  },
  {
    name: "Philippines",
    flag: "🇵🇭",
    currency: {
      code: "PHP",
      name: "Peso",
      symbol: "Php"
    },
    states: [
      {
        name: "Batangas",
        cities: ["San Juan"]
      },
      {
        name: "Bicol",
        cities: ["Albay", "Daet", "Iriga", "Legaspi", "Naga", "Sorsogon"]
      },
      {
        name: "Bulacan",
        cities: ["Bulacan", "Marilao"]
      },
      {
        name: "Cagayan",
        cities: ["Cagayan de Oro", "Santiago", "Solano", "Tuguegarao"]
      },
      {
        name: "Caraga",
        cities: ["Bislig", "Butuan", "Surigao"]
      },
      {
        name: "Central Luzon",
        cities: []
      },
      {
        name: "Central Mindanao",
        cities: []
      },
      {
        name: "Central Visayas",
        cities: []
      },
      {
        name: "Cordillera",
        cities: ["Baguio", "Bangued"]
      },
      {
        name: "Davao",
        cities: ["Davao"]
      },
      {
        name: "Eastern Visayas",
        cities: []
      },
      {
        name: "Greater Metropolitan Area",
        cities: []
      },
      {
        name: "Ilocos",
        cities: ["Laoag", "Manaoag", "Mangaldan", "San Fernando", "Urdaneta", "Vigan"]
      },
      {
        name: "Laguna",
        cities: ["Binan", "Laguna", "Pangil", "San Pedro"]
      },
      {
        name: "Luzon",
        cities: ["Manila", "Marikina"]
      },
      {
        name: "Mactan",
        cities: ["Mactan"]
      },
      {
        name: "Metropolitan Manila Area",
        cities: []
      },
      {
        name: "Muslim Mindanao",
        cities: []
      },
      {
        name: "Northern Mindanao",
        cities: []
      },
      {
        name: "Southern Mindanao",
        cities: []
      },
      {
        name: "Southern Tagalog",
        cities: []
      },
      {
        name: "Western Mindanao",
        cities: []
      },
      {
        name: "Western Visayas",
        cities: []
      }
    ],
    isoAlpha2: "PH",
    isoAlpha3: "PHL",
    isoNumeric: 608
  },
  {
    name: "Pitcairn Islands",
    flag: "🇵🇳",
    currency: {
      code: "NZD"
    },
    states: [
      {
        name: "Pitcairn Island",
        cities: []
      }
    ]
  },
  {
    name: "Poland",
    flag: "🇵🇱",
    currency: {
      code: "PLN",
      name: "Zloty",
      symbol: "zł"
    },
    states: [
      {
        name: "Biale Blota",
        cities: []
      },
      {
        name: "Dobroszyce",
        cities: ["Fabryczna"]
      },
      {
        name: "Dolnoslaskie",
        cities: ["Bielawa", "Bogatynia", "Boguszow-Gorce", "Boleslawiec", "Brzeg Dolny", "Bystrzyca Klodzka", "Chojnow", "Dzierzoniow", "Glogow", "Gora", "Jawor", "Jelcz-Laskowice", "Jelenia Gora", "Kamienna Gora", "Klodzko", "Kowary", "Kudowa-Zdroj", "Legnica", "Luban", "Lubin", "Lwowek Slaski", "Milicz", "Nowa Ruda", "Olawa", "Olesnica", "Piechowice", "Pieszyce", "Polkowice", "Strzegom", "Strzelin", "Swidnica", "Swiebodzice", "Sycow", "Trzebnica", "Walbrzych", "Wolow", "Wroclaw", "Zabkowice Slaskie", "Zgorzelec", "Ziebice", "Zlotoryja"]
      },
      {
        name: "Dziekanow Lesny",
        cities: []
      },
      {
        name: "Hopowo",
        cities: ["Hopowo"]
      },
      {
        name: "Kartuzy",
        cities: ["Chwaszczyno"]
      },
      {
        name: "Koscian",
        cities: ["Smigiel"]
      },
      {
        name: "Krakow",
        cities: ["Jerzmanowice", "Zabierzow"]
      },
      {
        name: "Kujawsko-Pomorskie",
        cities: ["Aleksandrow Kujawski", "Brodnica", "Bydgoszcz", "Chelmno", "Chelmza", "Ciechocinek", "Golub-Dobrzyn", "Grudziadz", "Inowroclaw", "Janikowo", "Koronowo", "Kruszwica", "Lipno", "Mogilno", "Naklo nad Notecia", "Radziejow", "Rypin", "Sepolno Krajenskie", "Solec Kujawski", "Swiecie", "Szubin", "Torun", "Tuchola", "Wabrzezno", "Wloclawek", "Znin"]
      },
      {
        name: "Lodzkie",
        cities: ["Aleksandrow Lodzki", "Belchatow", "Bratoszewice", "Brzeziny", "Glowno", "Koluszki", "Konstantynow Lodzki", "Kutno", "Lask", "Leczyca", "Lodz", "Lowicz", "Opoczno", "Ozorkow", "Pabianice", "Piotrkow Trybunalski", "Radomsko", "Rawa Mazowiecka", "Sieradz", "Skierniewice", "Tomaszow Mazowiecki", "Tuszyn", "Wielun", "Zdunska Wola", "Zgierz", "Zychlin"]
      },
      {
        name: "Lubelskie",
        cities: ["Biala Podlaska", "Bilgoraj", "Chelm", "Deblin", "Hrubieszow", "Janow Lubelski", "Krasnik", "Krasnystaw", "Leczna", "Lubartow", "Lublin", "Lukow", "Miedzyrzec Podlaski", "Opole Lubelskie", "Parczew", "Poniatowa", "Pulawy", "Radzyn Podlaski", "Ryki", "Swidnik", "Tomaszow Lubelski", "Wlodawa", "Zamosc"]
      },
      {
        name: "Lubuskie",
        cities: ["Drezdenko", "Gorzow Wielkopolski", "Gubin", "Kostrzyn", "Kozuchow", "Krosno Odrzanskie", "Lubsko", "Miedzyrzecz", "Nowa Sol", "Skwierzyna", "Slubice", "Strzelce Krajenskie", "Sulechow", "Sulecin", "Swiebodzin", "Szprotawa", "Wschowa", "Zagan", "Zary", "Zielona Gora"]
      },
      {
        name: "Malomice",
        cities: ["Malomice"]
      },
      {
        name: "Malopolskie",
        cities: ["Andrychow", "Bochnia", "Brzesko", "Brzeszcze", "Bukowno", "Chelmek", "Chrzanow", "Dabrowa Tarnowska", "Gorlice", "Kety", "Krakow", "Krynica", "Krzeszowice", "Libiaz", "Limanowa", "Miechow", "Myslenice", "Nowy Sacz", "Nowy Targ", "Olkusz", "Oswiecim", "Poronin", "Rabka", "Skawina", "Stary Sacz", "Sucha Beskidzka", "Tarnow", "Trzebinia", "Wadowice", "Wieliczka", "Wolbrom", "Zakopane"]
      },
      {
        name: "Mazowieckie",
        cities: ["Blonie", "Brwinow", "Ciechanow", "Garwolin", "Gora Kalwaria", "Gostynin", "Grodzisk Mazowiecki", "Grojec", "Jozefow", "Karczew", "Kobylka", "Konstancin-Jeziorna", "Kozienice", "Legionowo", "Lomianki", "Makow Mazowiecki", "Marki", "Milanowek", "Minsk Mazowiecki", "Mlawa", "Nowy Dwor Mazowiecki", "Ostroleka", "Ostrow Mazowiecka", "Otwock", "Piaseczno", "Piastow", "Pionki", "Plock", "Plonsk", "Pruszkow", "Przasnysz", "Pultusk", "Radom", "Siedlce", "Sierpc", "Sochaczew", "Sokolow Podlaski", "Sulejowek", "Szydlowiec", "Warka", "Warszawa", "Wegrow", "Wesola", "Wolomin", "Wyszkow", "Zabki", "Zielonka", "Zyrardow"]
      },
      {
        name: "Mirkow",
        cities: ["Dlugoteka"]
      },
      {
        name: "Opolskie",
        cities: ["Brzeg", "Glubczyce", "Glucholazy", "Grodkow", "Kedzierzyn-Kozle", "Kluczbork", "Krapkowice", "Namyslow", "Niemodlin", "Nysa", "Olesno", "Opole", "Ozimek", "Prudnik", "Strzelce Opolskie", "Zawadzkie", "Zdzieszowice"]
      },
      {
        name: "Ostrowiec",
        cities: ["Cmielow"]
      },
      {
        name: "Podkarpackie",
        cities: ["Debica", "Jaroslaw", "Jaslo", "Krosno", "Lancut", "Lezajsk", "Lubaczow", "Mielec", "Nisko", "Nowa Deba", "Przemysl", "Przeworsk", "Ropczyce", "Rzeszow", "Sanok", "Stalowa Wola", "Tarnobrzeg", "Ustrzyki Dolne"]
      },
      {
        name: "Podlaskie",
        cities: ["Augustow", "Bialystok", "Bielsk Podlaski", "Czarna Bialostocka", "Grajewo", "Hajnowka", "Kolno", "Lapy", "Lomza", "Monki", "Siemiatycze", "Sokolka", "Suwalki", "Wysokie Mazowieckie", "Zambrow"]
      },
      {
        name: "Polska",
        cities: ["Bogumilowice"]
      },
      {
        name: "Pomorskie",
        cities: ["Bytow", "Chojnice", "Czersk", "Czluchow", "Gdansk", "Gdynia", "Kartuzy", "Koscierzyna", "Kwidzyn", "Lebork", "Malbork", "Miastko", "Nowy Dwor Gdanski", "Pruszcz Gdanski", "Puck", "Reda", "Rumia", "Slupsk", "Sopot", "Starogard Gdanski", "Sztum", "Tczew", "Ustka", "Wejherowo", "Wladyslawowo"]
      },
      {
        name: "Poznan",
        cities: ["Komorniki", "Steszew"]
      },
      {
        name: "Pruszkow",
        cities: ["Raszyn"]
      },
      {
        name: "Rymanowska",
        cities: ["Rymanowska"]
      },
      {
        name: "Rzeszow",
        cities: ["Glogow Malopolski"]
      },
      {
        name: "Slaskie",
        cities: ["Bedzin", "Bielsko-Biala", "Bierun", "Blachowania", "Bytom", "Chorzow", "Cieszyn", "Czechowice-Dziedzice", "Czeladz", "Czerwionka-Leszczyny", "Czestochowa", "Dabrowa Gornicza", "Gliwice", "Jastrzebie-Zdroj", "Jaworzno", "Kalety", "Katowice", "Klobuck", "Knurow", "Laziska Gorne", "Ledziny", "Lubliniec", "Mikolow", "Myslowice", "Myszkow", "Orzesze", "Piekary Slaskie", "Poreba", "Pszczyna", "Pszow", "Pyskowice", "Raciborz", "Radlin", "Radzionkow", "Ruda Slaska", "Rybnik", "Rydultowy", "Siemianowice Slaskie", "Skoczow", "Sosnowiec", "Swietochlowice", "Tarnowskie Gory", "Tychy", "Ustron", "Wisla", "Wodzislaw Slaski", "Wojkowice", "Zabrze", "Zawiercie", "Zory", "Zywiec"]
      },
      {
        name: "Stare Pole",
        cities: []
      },
      {
        name: "Swietokrzyskie",
        cities: ["Busko-Zdroj", "Jedrzejow", "Kielce", "Konskie", "Ostrowiec Swietokrzyski", "Pinczow", "Polaniec", "Sandomierz", "Skarzysko-Kamienna", "Starachowice", "Staszow", "Suchedniow", "Wloszczowa"]
      },
      {
        name: "Warminsko-Mazurskie",
        cities: ["Bartoszyce", "Biskupiec", "Braniewo", "Dobre Miasto", "Dzialdowo", "Elblag", "Elk", "Gizycko", "Goldap", "Ilawa", "Ketrzyn", "Lidzbark Warminski", "Lubawa", "Morag", "Mragowo", "Nidzica", "Nowe Miasto Lubawskie", "Olecko", "Olsztyn", "Orneta", "Ostroda", "Paslek", "Pisz", "Szczytno", "Wegorzewo"]
      },
      {
        name: "Warsaw",
        cities: ["Nadarzyn", "Szemud", "Warsaw"]
      },
      {
        name: "Wejherowo",
        cities: ["Goscicino"]
      },
      {
        name: "Wielkopolskie",
        cities: ["Chodziez", "Czarnkow", "Gniezno", "Gostyn", "Grodzisk Wielkopolski", "Jarocin", "Kalisz", "Kepno", "Kolo", "Konin", "Koscian", "Krotoszyn", "Leszno", "Lubon", "Miedzychod", "Mosina", "Murowana Goslina", "Nowy Tomysl", "Oborniki", "Opalenica", "Ostrow Wielkopolski", "Ostrzeszow", "Pila", "Pleszew", "Poznan", "Rawicz", "Rogozno", "Slupca", "Srem", "Sroda Wielkopolska", "Swarzedz", "Szamotuly", "Trzcianka", "Tuliszkow", "Turek", "Wagrowiec", "Wolsztyn", "Wronki", "Wrzesnia", "Zlotow"]
      },
      {
        name: "Wroclaw",
        cities: ["Borowa"]
      },
      {
        name: "Zachodnio-Pomorskie",
        cities: ["Barlinek", "Bialogard", "Choszczno", "Darlowo", "Debno", "Drawsko Pomorskie", "Goleniow", "Gryfice", "Gryfino", "Kamien Pomorski", "Kolobrzeg", "Koszalin", "Lobez", "Mysliborz", "Nowogard", "Polczyn-Zdroj", "Police", "Pyrzyce", "Slawno", "Stargard Szczecinski", "Swidwin", "Swinoujscie", "Szczecin", "Szczecinek", "Trzebiatow", "Walcz", "Zlocieniec"]
      },
      {
        name: "Zukowo",
        cities: ["Zukowskie"]
      }
    ],
    isoAlpha2: "PL",
    isoAlpha3: "POL",
    isoNumeric: 616
  },
  {
    name: "Portugal",
    flag: "🇵🇹",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Abrantes",
        cities: ["Tramagal"]
      },
      {
        name: "Acores",
        cities: ["Angra", "Arrifes", "Faja de Baixo", "Horta", "Lagoa", "Ponta Delgada", "Praia da Vitoria", "Rabo de Peixe", "Ribeira Grande", "Rosto do Cao", "Vila Franca do Campo"]
      },
      {
        name: "Alentejo",
        cities: ["Alcacer do Sal", "Aljustrel", "Beja", "Borba", "Caia e Sao Pedro", "Campo Maior", "Castro Verde", "Cercal", "Elvas", "Estremoz", "Evora", "Ferreira do Alentejo", "Grandola", "Montemor-o-Novo", "Moura", "Odemira", "Ponte de Sor", "Portalegre", "Redondo", "Reguengos de Monsaraz", "Santiago do Cacem", "Santo Andre", "Sao Teotonio", "Serpa", "Sines", "Vendas Novas", "Vila Nova de Milfontes", "Vila Vicosa"]
      },
      {
        name: "Algarve",
        cities: ["Albufeira", "Aljezur", "Almancil", "Alvor", "Armacao de Pera", "Boliqueime", "Castro Marim", "Estombar", "Faro", "Ferreiras", "Guia", "Lagoa", "Lagos", "Loule", "Luz", "Moncarapacho", "Monchique", "Monte Gordo", "Montenegro", "Olhao", "Portimao", "Quarteira", "Santa Barbara de Nexe", "Sao Bartolomeu de Messines", "Sao Bras de Alportel", "Silves", "Tavira", "Vila Real de Santo Antonio"]
      },
      {
        name: "Braga",
        cities: ["Fafe", "Forjaes", "Vianna do Castello"]
      },
      {
        name: "Centro",
        cities: ["Abraveses", "Aguada de Cima", "Agueda", "Albergaria-A-Velha", "Alcains", "Alhadas", "Amor", "Aradas", "Arazede", "Arcos", "Arganil", "Avanca", "Aveiro", "Batalha", "Beduido", "Branca", "Buarcos", "Campo", "Cantanhede", "Caranguejeira", "Castanheira de Pera", "Castelo Branco", "Castro Daire", "Coimbra", "Condeixa-A-Nova", "Cortegaca", "Covilha", "Eixo", "Esmoriz", "Figueira da Foz", "Fundao", "Gafanha da Encarnacao", "Gafanha da Nazare", "Guarda", "Ilhavo", "Lavos", "Leiria", "Lorvao", "Lourical", "Lousa", "Maceira", "Mangualde", "Marinha Grande", "Mealhada", "Mira", "Mira de Aire", "Miranda do Corvo", "Monte Redondo", "Nelas", "Oia", "Oliveira do Bairro", "Oliveira do Hospital", "Oliveirinha", "Ovar", "Pampilhosa", "Pardilho", "Poiares", "Pombal", "Porto de Mos", "Proenca-A-Nova", "Rio de Loba", "Salreu", "Sangalhos", "Santa Catarina da Serra", "Sao Joao", "Sao Pedro do Sul", "Satao", "Seia", "Serta", "Soure", "Souto da Carpalhosa", "Tavarede", "Teixoso", "Tondela", "Tortosendo", "Vagos", "Valega", "Valongo do Vouga", "Vieira de Leiria", "Viseu"]
      },
      {
        name: "Distrito de Leiria",
        cities: []
      },
      {
        name: "Distrito de Viana do Castelo",
        cities: []
      },
      {
        name: "Distrito de Vila Real",
        cities: []
      },
      {
        name: "Distrito do Porto",
        cities: []
      },
      {
        name: "Lisboa e Vale do Tejo",
        cities: []
      },
      {
        name: "Madeira",
        cities: ["Camacha", "Camara de Lobos", "Campanario", "Canico", "Funchal", "Machico", "Ponta do Sol", "Porto Santo", "Ribeira Brava", "Santa Cruz"]
      },
      {
        name: "Norte",
        cities: ["A Ver-o-Mar", "Adaufe", "Aguas Santas", "Agucadoura", "Alfena", "Alpendurada e Matos", "Amarante", "Anta", "Antas", "Apulia", "Arcozelo", "Areosa", "Argoncilhe", "Aroes", "Arrifana", "Arvore", "Aves", "Avintes", "Baguim do Monte", "Baltar", "Barcelos", "Barrosas", "Bougado", "Braga", "Braganca", "Brito", "Caldas de Vizela", "Caldelas", "Calendario", "Campo", "Candoso", "Canedo", "Canelas", "Canidelo", "Carvalhosa", "Casteloes de Cepeda", "Chaves", "Coronado", "Couto", "Custoias", "Darque", "Ermesinde", "Espinho", "Fafe", "Fanzeres", "Feira", "Ferreira", "Ferreiros", "Fiaes", "Figueiro", "Foz do Sousa", "Frazao", "Freamunde", "Galegos", "Gandra", "Gemunde", "Godim", "Gondomar", "Grijo", "Gueifaes", "Guifoes", "Guimaraes", "Gulpilhares", "Joane", "Jovim", "Lamego", "Lavra", "Leca da Palmeira", "Leca do Bailio", "Lobao", "Lordelo", "Lourosa", "Lustosa", "Macedo de Cavaleiros", "Macieira de Cambra", "Madalena", "Maia", "Margaride", "Marinhas", "Matosinhos", "Meadela", "Meinedo", "Milheiros", "Milheiros de Poiares", "Mirandela", "Mogadouro", "Moreira", "Moreira de Conegos", "Mozelos", "Negrelos", "Nogueira", "Nogueira da Regedoura", "Olival", "Oliveira", "Oliveira de Azemeis", "Oliveira do Douro", "Pacos de Brandao", "Pacos de Ferreira", "Pedroso", "Pedroucos", "Penafiel", "Perafita", "Perozinho", "Peso da Regua", "Ponte", "Porto", "Povoa de Lanhoso", "Povoa de Varzim", "Real", "Rebordosa", "Recarei", "Refojos de Basto", "Ribeirao", "Rio Meao", "Rio Tinto", "Ronfe", "Sande", "Sandim", "Santa Cruz do Bispo", "Santa Maria de Lamas", "Santiago da Riba-Ul", "Santo Tirso", "Sao Felix da Marinha", "Sao Joao da Madeira", "Sao Joao de Ver", "Sao Mamede de Infesta", "Sao Pedro da Cova", "Sao Pedro de Casteloes", "Sao Roque", "Selho", "Senhora da Hora", "Seroa", "Serzedelo", "Serzedo", "Silvalde", "Sobrado", "Sobreira", "Souto", "Teloes", "Urgezes", "Valadares", "Valbom", "Vale", "Valongo", "Valpacos", "Viana do Castelo", "Vila Cha", "Vila Frescainha", "Vila Nova da Telha", "Vila Nova de Famalicao", "Vila Nova de Gaia", "Vila Praia de Ancora", "Vila Real", "Vila Verde", "Vila de Cucujaes", "Vila de Prado", "Vila do Conde", "Vilar de Andorinho", "Vilar do Paraiso", "Vilarinho", "Vilela", "Vizela"]
      },
      {
        name: "Paivas",
        cities: ["Paivas"]
      }
    ],
    isoAlpha2: "PT",
    isoAlpha3: "PRT",
    isoNumeric: 620
  },
  {
    name: "Puerto Rico",
    flag: "🇵🇷",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Arecibo",
        cities: ["Arecibo", "Barceloneta", "Camuy", "Dorado", "Isabela", "Manati", "Vega Alta", "Vega Baja"]
      },
      {
        name: "Bayamon",
        cities: ["Bayamon", "Catano", "Guaynabo", "Levittown", "Valencia"]
      },
      {
        name: "Carolina",
        cities: ["Canovanas", "Carolina", "Trujillo Alto"]
      },
      {
        name: "Florida",
        cities: ["Florida"]
      },
      {
        name: "Guayama",
        cities: ["Aibonito", "Arroyo", "Barranquitas", "Cayey", "Coamo", "Corozal", "Guayama", "Juana Diaz"]
      },
      {
        name: "Humacao",
        cities: ["Aguas Buenas", "Caguas", "Culebra", "Fajardo", "Gurabo", "Humacao", "Juncos", "Rio Grande", "Vieques"]
      },
      {
        name: "Mayaguez-Aguadilla",
        cities: ["Aguada", "Aguadilla", "Anasco", "Cabo Rojo", "Hormigueros", "Mayaguez", "San German", "San Sebastian"]
      },
      {
        name: "Ponce",
        cities: ["Adjuntas", "Guanica", "Ponce", "Utuado", "Yauco"]
      },
      {
        name: "Salinas",
        cities: ["Salinas"]
      },
      {
        name: "San Juan",
        cities: []
      }
    ],
    isoAlpha2: "PR",
    isoAlpha3: "PRI",
    isoNumeric: 630
  },
  {
    name: "Qatar",
    flag: "🇶🇦",
    currency: {
      code: "QAR",
      name: "Rial",
      symbol: "﷼"
    },
    states: [
      {
        name: "Doha",
        cities: ["Doha"]
      },
      {
        name: "Jarian-al-Batnah",
        cities: ["Umm Bab"]
      },
      {
        name: "Umm Salal",
        cities: []
      },
      {
        name: "ad-Dawhah",
        cities: ["ad-Dawhah"]
      },
      {
        name: "al-Ghuwayriyah",
        cities: ["al-Ghuwayriyah"]
      },
      {
        name: "al-Jumayliyah",
        cities: ["Dukhan", "al-Jumayliyah"]
      },
      {
        name: "al-Khawr",
        cities: ["al-Khawr"]
      },
      {
        name: "al-Wakrah",
        cities: ["Musay''id", "al-Wakrah", "al-Wukayr"]
      },
      {
        name: "ar-Rayyan",
        cities: ["ar-Rayyan", "ash-Shahaniyah"]
      },
      {
        name: "ash-Shamal",
        cities: ["ar-Ruways"]
      }
    ],
    isoAlpha2: "QA",
    isoAlpha3: "QAT",
    isoNumeric: 634
  },
  {
    name: "Republic of the Congo",
    flag: "🇨🇬",
    currency: {
      code: "XAF"
    },
    states: [
      {
        name: "Bouenza",
        cities: ["Loudima", "Madingou", "Nkayi"]
      },
      {
        name: "Brazzaville",
        cities: ["Brazzaville"]
      },
      {
        name: "Cuvette",
        cities: ["Ewo", "Kelle", "Makoua", "Mossaka", "Owando"]
      },
      {
        name: "Kouilou",
        cities: ["Loandjili", "Ngamaba-Mfilou", "Pointe Noire"]
      },
      {
        name: "Lekoumou",
        cities: ["Sibiti", "Zanaga"]
      },
      {
        name: "Likouala",
        cities: ["Dongou", "Epena", "Impfondo"]
      },
      {
        name: "Niari",
        cities: ["Kibangou", "Loubomo", "Matsanga", "Mossendjo"]
      },
      {
        name: "Plateaux",
        cities: ["Djambala", "Gamboma"]
      },
      {
        name: "Pool",
        cities: ["Boko", "Kinkala", "Mindouli"]
      },
      {
        name: "Sangha",
        cities: ["Ikelemba", "Ouesso", "Sembe", "Souanke"]
      }
    ]
  },
  {
    name: "Romania",
    flag: "🇷🇴",
    currency: {
      code: "RON",
      name: "Leu",
      symbol: "lei"
    },
    states: [
      {
        name: "Alba",
        cities: ["Abrud", "Aiud", "Alba Iulia", "Albac", "Almasu Mare", "Arieseni", "Avram Iancu", "Baia de Aries", "Berghin", "Bistra", "Blaj", "Blandiana", "Bucium", "Calnic", "Campeni", "Cenade", "Cergau", "Ceru-Bacainti", "Cetatea de Balta", "Ciugud", "Ciuruleasa", "Craciunelu de Jos", "Cricau", "Cugir", "Daia Romana", "Dostat", "Farau", "Galda de Jos", "Garbova", "Garda de Sus", "Hoparta", "Horea", "Ighiu", "Intregalde", "Jidvei", "Livezile", "Lopadea Noua", "Lunca Muresului", "Lupsa", "Metes", "Mihalt", "Miraslau", "Mogos", "Noslac", "Ocna Mures", "Ocolis", "Ohaba", "Pianu", "Poiana Vadului", "Ponor", "Posaga", "Radesti", "Ramet", "Rimetea", "Rosia Montana", "Rosia de Secas", "Salciua", "Salistea", "Sancel", "Santimbru", "Sasciori", "Scarisoara", "Sebes", "Sibot", "Sohodol", "Sona", "Spring", "Stremt", "Sugag", "Teius", "Unirea", "Vadu Motilor", "Valea Lunga", "Vidra", "Vintu de Jos", "Zlatna"]
      },
      {
        name: "Arad",
        cities: ["Almas", "Apateu", "Arad", "Archis", "Barsa", "Barzava", "Bata", "Beliu", "Birchis", "Bocsig", "Brazii", "Buteni", "Carand", "Cermei", "Chisindia", "Chisineu Cris", "Conop", "Covasint", "Craiva", "Curtici", "Dezna", "Dieci", "Dorgos", "Fantanele", "Felnac", "Ghioroc", "Graniceri", "Gurahont", "Halmagel", "Halmagiu", "Hasmas", "Ignesti", "Ineu", "Iratosu", "Lipova", "Livada", "Macea", "Masca", "Moneasa", "Nadlac", "Olari", "Pancota", "Paulis", "Pecica", "Peregu Mare", "Petris", "Pilu", "Plescuta", "Sagu", "Santana", "Savarsin", "Sebis", "Secusigiu", "Seitin", "Seleus", "Semlac", "Sepreus", "Sicula", "Silindia", "Simand", "Sintea Mare", "Siria", "Sistarovat", "Socodor", "Sofronea", "Tarnova", "Taut", "Varadia de Mures", "Varfurile", "Vinga", "Vladimirescu", "Zabrani", "Zarand", "Zerind", "Zimandu Nou"]
      },
      {
        name: "Arges",
        cities: ["Albesti", "Albestii-Pamanteni", "Albota", "Aninoasa", "Arefu", "Babana", "Baiculesti", "Balilesti", "Barla", "Bascov", "Beleti-Negresti", "Berevoesti", "Bogati", "Boteni", "Botesti", "Bradu", "Bradulet", "Budeasa", "Bughea de Jos", "Buzoesti", "Caldararu", "Calinesti", "Campulung", "Cateasca", "Cepari", "Cetateni", "Cicanesti", "Ciofrangeni", "Ciomagesti", "Cocu", "Corbeni", "Corbi", "Cosesti", "Costesti", "Cotmeana", "Cuca", "Curtea de Arges", "Dambovicioara", "Darmanesti", "Davidesti", "Dobresti", "Domnesti", "Draganu", "Dragoslavele", "Godeni", "Harsesti", "Hartiesti", "Izvoru", "Leordeni", "Leresti", "Lunca Corbului", "Malureni", "Maracineni", "Merisani", "Micesti", "Mihaesti", "Mioarele", "Mioveni", "Mirosi", "Moraresti", "Mosoaia", "Mozaceni", "Musatesti", "Negrasi", "Nucsoara", "Oarja", "Pietrosani", "Pitesti", "Poenari", "Poiana Lacului", "Popesti", "Priboieni", "Ratesti", "Recea", "Rociu", "Rucar", "Salatrucu", "Sapata", "Schitu-Golesti", "Slobozia", "Stalpeni", "Stefan cel Mare", "Stefanesti", "Stoenesti", "Stolnici", "Suici", "Suseni", "Teiu", "Tigveni", "Titesti", "Topoloveni", "Uda", "Ungheni", "Valea Danului", "Valea Iasului", "Valea Mare-Pravat", "Vedea", "Vladesti"]
      },
      {
        name: "Bacau",
        cities: ["Agas", "Ardeoani", "Asau", "Bacau", "Balcani", "Barsanesti", "Beresti-Bistrita", "Beresti-Tazlau", "Berzunti", "Blagesti", "Bogdanesti", "Brusturoasa", "Buhoci", "Buhusi", "Caiuti", "Casin", "Cleja", "Colonesti", "Comanesti", "Corbasca", "Cotofanesti", "Damienesti", "Darmanesti", "Dealu Morii", "Dofteana", "Faraoani", "Filipeni", "Filipesti", "Gaiceana", "Garleni", "Ghimes-Faget", "Glavanesti", "Gura Vaii", "Helegiu", "Hemeius", "Horgesti", "Huruesti", "Izvoru Berheciului", "Letea Veche", "Lipova", "Livezi", "Luizi-Calugara", "Magiresti", "Magura", "Manastirea Casin", "Margineni", "Moinesti", "Motoseni", "Negri", "Nicolae Balcescu", "Oituz", "Oncesti", "Onesti", "Orbeni", "Palanca", "Pancesti", "Parava", "Pargaresti", "Parincea", "Parjol", "Plopana", "Podu Turcului", "Poduri", "Racaciuni", "Rachitoasa", "Racova", "Rosiori", "Sanduleni", "Sascut", "Saucesti", "Scorteni", "Secuieni", "Slanic-Moldova", "Solont", "Stanisesti", "Stefan cel Mare", "Strugari", "Tamasi", "Targu Ocna", "Targu-Trotus", "Tatarasti", "Traian", "Ungureni", "Urechesti", "Valea Seaca", "Vultureni", "Zemes"]
      },
      {
        name: "Bihor",
        cities: ["Abram", "Abramut", "Alesd", "Astileu", "Auseu", "Avram Iancu", "Balc", "Batar", "Beius", "Biharia", "Boianu Mare", "Borod", "Bors", "Bratca", "Brusturi", "Budureasa", "Buduslau", "Bulz", "Buntesti", "Cabesti", "Campani", "Capalna", "Carpinet", "Cefa", "Ceica", "Cetariu", "Cherechiu", "Chislaz", "Ciuhoiu", "Ciumeghiu", "Cociuba Mare", "Copacel", "Cristioru de Jos", "Curatele", "Curtuiseni", "Derna", "Diosig", "Dobresti", "Draganesti", "Dragesti", "Finis", "Girisu de Cris", "Hidiselu de Sus", "Holod", "Husasau de Tinca", "Ineu", "Lazareni", "Lazuri de Beius", "Lugasu de Jos", "Lunca", "Madaras", "Magesti", "Marghita", "Nojorid", "Nucet", "Olcea", "Oradea", "Osorheiu", "Pietroasa", "Pocola", "Pomezeu", "Popesti", "Rabagani", "Remetea", "Rieni", "Rosia", "Sacadat", "Sacueni", "Salacea", "Salard", "Salonta", "Sambata", "Sanmartin", "Santandrei", "Sarbi", "Simian", "Sinteu", "Soimi", "Spinus", "Stei", "Suncuius", "Suplacu de Barcau", "Tarcaia", "Tarcea", "Tauteu", "Tetchea", "Tileagd", "Tinca", "Tulca", "Uileacu de Beius", "Vadu Crisului", "Valea lui Mihai", "Varciorog", "Vascau", "Viisoara"]
      },
      {
        name: "Bistrita-Nasaud",
        cities: ["Beclean", "Bistrita", "Bistrita Bargaului", "Branistea", "Budacu de Jos", "Budesti", "Caianu Mic", "Cetate", "Chiochis", "Chiuza", "Ciceu-Giurgesti", "Cosbuc", "Dumitra", "Feldru", "Galatii Bistritei", "Ilva Mare", "Ilva Mica", "Josenii Bargaului", "Lechinta", "Lesu", "Livezile", "Lunca Ilvei", "Magura Ilvei", "Maieru", "Mariselu", "Matei", "Micestii de Campie", "Milas", "Monor", "Nasaud", "Nimigea", "Nuseni", "Parva", "Petru Rares", "Prundu Bargaului", "Rebra", "Rebrisoara", "Rodna", "Romuli", "Salva", "Sangeorz-Bai", "Sanmihaiu de Campie", "Sant", "Sieu", "Sieu-Magherus", "Sieu-Odorhei", "Sieut", "Silvasu de Campie", "Sintereag", "Spermezeu", "Tarlisua", "Teaca", "Telciu", "Tiha Bargaului", "Uriu", "Urmenis", "Zagra"]
      },
      {
        name: "Botosani",
        cities: ["Albesti", "Avrameni", "Baluseni", "Botosani", "Braesti", "Broscauti", "Bucecea", "Calarasi", "Concesti", "Copalau", "Cordareni", "Corlateni", "Corni", "Cotusca", "Cristesti", "Cristinesti", "Curtesti", "Dangeni", "Darabani", "Dersca", "Dobarceni", "Dorohoi", "Draguseni", "Durnesti", "Flamanzi", "Frumusica", "George Enescu", "Gorbanesti", "Hanesti", "Havarna", "Hiliseu-Horia", "Hlipiceni", "Hudesti", "Ibanesti", "Leorda", "Lunca", "Manoleasa", "Mihail Eminescu", "Mihaileni", "Mihalaseni", "Mileanca", "Mitoc", "Nicseni", "Paltinis", "Pomarla", "Prajeni", "Rachiti", "Radauti-Prut", "Rauseni", "Ripiceni", "Roma", "Romanesti", "Santa-Maria", "Saveni", "Sendriceni", "Stauceni", "Stefanesti", "Stiubieni", "Suharau", "Sulita", "Todireni", "Trusesti", "Tudora", "Ungureni", "Unteni", "Vaculesti", "Varfu Campului", "Viisoara", "Vladeni", "Vlasinesti", "Vorniceni", "Vorona"]
      },
      {
        name: "Braila",
        cities: ["Baraganul", "Bertestii de Jos", "Bordei Verde", "Braila", "Chiscani", "Ciocile", "Ciresu", "Dudesti", "Faurei", "Frecatei", "Galbenu", "Gemenele", "Gradistea", "Gropeni", "Ianca", "Insuratei", "Jirlau", "Marasu", "Maxineni", "Mircea Voda", "Movila Miresei", "Racovita", "Ramnicelu", "Romanu", "Rosiori", "Salcia Tudor", "Scortaru Nou", "Silistea", "Stancuta", "Surdila-Gaiseanca", "Surdila-Greci", "Sutesti", "Tichilesti", "Traian", "Tudor Vladimirescu", "Tufesti", "Ulmu", "Unirea", "Vadeni", "Victoria", "Visani", "Viziru", "Zavoaia"]
      },
      {
        name: "Brasov",
        cities: ["Apata", "Beclean", "Bod", "Bran", "Brasov", "Budila", "Bunesti", "Cata", "Cincu", "Codlea", "Comana", "Cristian", "Dumbravita", "Fagaras", "Feldioara", "Fundata", "Ghimbav", "Halchiu", "Harman", "Harseni", "Hoghiz", "Homorod", "Jibert", "Lisa", "Maierus", "Mandra", "Moeciu", "Ormenis", "Parau", "Poiana Marului", "Predeal", "Prejmer", "Racos", "Rasnov", "Recea", "Rupea", "Sacele", "Sanpetru", "Sercaia", "Sinca", "Soars", "Tarlungeni", "Teliu", "Ticusul", "Ucea", "Ungra", "Vama Buzaului", "Victoria", "Vistea", "Voila", "Vulcan", "Zarnesti"]
      },
      {
        name: "Bucuresti",
        cities: ["Bucharest", "Bucuresti"]
      },
      {
        name: "Buzau",
        cities: ["Amaru", "Balaceanu", "Balta Alba", "Beceni", "Berca", "Bisoca", "Blajani", "Boldu", "Bozioru", "Bradeanu", "Braesti", "Breaza", "Buda", "Buzau", "Calvini", "Canesti", "Catina", "Cernatesti", "Chiliile", "Chiojdu", "Cilibia", "Cislau", "Cochirleanca", "Colti", "Constantin Rosetti", "Costesti", "Cozieni", "Galbinasi", "Gheraseni", "Ghergheasa", "Glodeanu-Silistea", "Glodeanul Sarat", "Grebanu", "Gura Teghii", "Largu", "Lopatari", "Luciu", "Magura", "Manzalesti", "Maracineni", "Margaritesti", "Merei", "Mihailesti", "Movila Banului", "Murgesti", "Naeni", "Nehoiu", "Odaile", "Padina", "Panatau", "Pardosi", "Parscov", "Patarlagele", "Pietroasele", "Podgoria", "Pogoanele", "Posta Calnau", "Puiesti", "Racoviteni", "Ramnicelu", "Ramnicu Sarat", "Robeasca", "Rusetu", "Sageata", "Sahateni", "Sapoca", "Sarulesti", "Scortoasa", "Scutelnici", "Siriu", "Smeeni", "Stalpu", "Tintesti", "Tisau", "Topliceni", "Ulmeni", "Vadu Pasii", "Valcelele", "Valea Ramnicului", "Valea Salciei", "Vernesti", "Vintila Voda", "Viperesti", "Zarnesti", "Ziduri"]
      },
      {
        name: "Calarasi",
        cities: ["Alexandru Odobescu", "Belciugatele", "Borcea", "Budesti", "Calarasi", "Cascioarele", "Chirnogi", "Chiselet", "Ciocanesti", "Curcani", "Cuza Voda", "Dichiseni", "Dor Marunt", "Dorobantu", "Dragalina", "Dragos Voda", "Frasinet", "Frumusani", "Fundeni", "Fundulea", "Gradistea", "Gurbanesti", "Ileana", "Independenta", "Jegalia", "Lehliu", "Lehliu-Gara", "Luica", "Lupsanu", "Manastirea", "Mitreni", "Modelu", "Nana", "Nicolae Balcescu", "Oltenita", "Perisoru", "Plataresti", "Radovanu", "Roseti", "Sarulesti", "Sohatu", "Soldanu", "Spantov", "Stefan Voda", "Stefan cel Mare", "Tamadau Mare", "Ulmeni", "Ulmu", "Unirea", "Valcelele", "Valea Argovei", "Vasilati", "Vlad Tepes"]
      },
      {
        name: "Caras-Severin",
        cities: ["Anina", "Armenis", "Baile Herculane", "Bania", "Bautar", "Berliste", "Berzasca", "Berzovia", "Bocsa", "Bolvasnita", "Bozovici", "Brebu", "Brebu Nou", "Buchin", "Bucosnita", "Caransebes", "Carasova", "Carbunari", "Ciclova Romana", "Ciuchici", "Ciudanovita", "Constantin Daicoviciu", "Copacele", "Cornea", "Cornereva", "Coronini", "Dalboset", "Doclin", "Dognecea", "Domasnea", "Eftimie Murgu", "Ezeris", "Farliug", "Forotic", "Garnic", "Glimboca", "Goruia", "Gradinari", "Iablanita", "Lapusnicel", "Lapusnicu Mare", "Luncavita", "Lupac", "Marga", "Maureni", "Mehadia", "Mehadica", "Moldova Noua", "Naidas", "Obreja", "Ocna de Fier", "Oravita", "Otelu Rosu", "Paltinis", "Pojejena", "Prigor", "Racasdia", "Ramna", "Resita", "Rusca Montana", "Sacu", "Sasca Montana", "Sichevita", "Slatina-Timis", "Socol", "Sopotu Nou", "Tarnova", "Teregova", "Ticvaniu Mare", "Toplet", "Turnu Ruieni", "Valiug", "Varadia", "Vermes", "Vrani", "Zavoi", "Zorlentu Mare"]
      },
      {
        name: "Cluj",
        cities: ["Aghiresu", "Aiton", "Alunis", "Apahida", "Aschileu", "Baciu", "Baisoara", "Belis", "Bobalna", "Bontida", "Borsa", "Buza", "Caianu", "Calarasi", "Calatele", "Camarasu", "Campia Turzii", "Capusu Mare", "Caseiu", "Catcau", "Catina", "Ceanu Mare", "Chinteni", "Chiuiesti", "Ciucea", "Ciurila", "Cluj-Napoca", "Cojocna", "Cornesti", "Cuzdrioara", "Dabaca", "Dej", "Feleacu", "Fizesu Gherlii", "Floresti", "Frata", "Garbau", "Geaca", "Gherla", "Gilau", "Huedin", "Iara", "Iclod", "Izvoru Crisului", "Jichisu de Jos", "Jucu", "Luna", "Maguri-Racatau", "Manastireni", "Margau", "Marisel", "Mica", "Mihai Viteazu", "Mintiu Gherlii", "Mociu", "Moldovenesti", "Palatca", "Panticeu", "Petrestii de Jos", "Ploscos", "Poieni", "Rasca", "Recea Cristur", "Sacuieu", "Sancraiu", "Sandulesti", "Sanmartin", "Sanpaul", "Savadisla", "Sic", "Suatu", "Taga", "Tritenii de Jos", "Turda", "Tureni", "Unguras", "Vad", "Valea Ierii", "Viisoara", "Vultureni"]
      },
      {
        name: "Constanta",
        cities: ["Adamclisi", "Agigea", "Albesti", "Aliman", "Amzacea", "Baneasa", "Basarabi", "Castelu", "Cerchezu", "Cernavoda", "Chirnogeni", "Ciobanu", "Ciocarlia", "Cobadin", "Cogealac", "Comana", "Constanta", "Corbu", "Costinesti", "Crucea", "Cumpana", "Deleni", "Dobromir", "Douazeci si Trei August", "Dumbraveni", "Eforie", "Garliciu", "Ghindaresti", "Harsova", "Horia", "Independenta", "Ion Corvin", "Istria", "Limanu", "Lipnita", "Lumina", "Mangalia", "Medgidia", "Mereni", "Mihai Viteazu", "Mihail Kogalniceanu", "Mircea Voda", "Navodari", "Negru Voda", "Nicolae Balcescu", "Oltina", "Ostrov", "Ovidiu", "Pantelimon", "Pecineaga", "Pestera", "Poarta Alba", "Rasova", "Sacele", "Saraiu", "Seimeni", "Silistea", "Targusor", "Techirghiol", "Topalu", "Topraisar", "Tortoman", "Tuzla", "Valu lui Traian", "Vulturu"]
      },
      {
        name: "Covasna",
        cities: ["Aita Mare", "Baraolt", "Barcani", "Batani", "Belin", "Bodoc", "Borosneu Mare", "Bradut", "Brates", "Bretcu", "Catalina", "Cernat", "Chichis", "Comandau", "Covasna", "Dobarlau", "Ghelinta", "Ghidfalau", "Haghig", "Ilieni", "Intorsura Buzaului", "Lemnia", "Malnas", "Moacsa", "Ojdula", "Ozun", "Poian", "Reci", "Sanzieni", "Sfantu Gheorghe", "Sita Buzaului", "Targu Secuiesc", "Turia", "Valcele", "Valea Crisului", "Valea Mare", "Varghis", "Zabala", "Zagon"]
      },
      {
        name: "Dambovita",
        cities: ["Aninoasa", "Baleni", "Barbuletu", "Bezdead", "Bilciuresti", "Branesti", "Branistea", "Brezoaiele", "Buciumeni", "Bucsani", "Butimanu", "Ciocanesti", "Cobia", "Cojasca", "Comisani", "Contesti", "Corbii Mari", "Cornatelu", "Cornesti", "Costestii din Vale", "Crangurile de Sus", "Crevedia", "Darmanesti", "Dobra", "Doicesti", "Dragodana", "Dragomiresti", "Edera de Jos", "Fieni", "Finta", "Gaesti", "Glodeni", "Gura Foii", "Gura Ocnitei", "Gura Sutii", "Hulubesti", "Ion luca Caragiale", "Lucieni", "Ludesti", "Lunguletu", "Malu cu Flori", "Manesti", "Matasaru", "Mogosani", "Moreni", "Moroeni", "Morteni", "Motaeni", "Niculesti", "Nucet", "Ocnita", "Odobesti", "Petresti", "Pietrosita", "Poiana", "Potlogi", "Produlesti", "Pucheni", "Pucioasa", "Racari", "Razvad", "Runcu", "Salcioara", "Selaru", "Slobozia Moara", "Sotanga", "Targoviste", "Tartasesti", "Tatarani", "Titu", "Uliesti", "Ulmi", "Vacaresti", "Valea Lunga", "Valea Mare", "Valeni-Dambovita", "Varfuri", "Visina", "Visinesti", "Voinesti", "Vulcana Bai"]
      },
      {
        name: "Dolj",
        cities: ["Afumati", "Almajiu", "Amarastii de Jos", "Amarastii de Sus", "Apele Vii", "Argetoaia", "Bailesti", "Barca", "Bechet", "Bistret", "Botosesti-Paia", "Brabova", "Bradesti", "Bralostita", "Bratovoesti", "Breasta", "Bucovat", "Bulzesti", "Calafat", "Calarasi", "Calopar", "Caraula", "Carpen", "Castra-Nova", "Celaru", "Ceratu", "Cernatesti", "Cetate", "Cioroiasiu", "Ciupercenii Noi", "Cosoveni", "Cotofenii din Dos", "Craiova", "Dabuleni", "Daneti", "Desa", "Diosti", "Dobresti", "Dragotesti", "Dranic", "Farcasu", "Filiasi", "Galicea Mare", "Gangiova", "Ghercesti", "Gighera", "Giubega", "Giurgita", "Gogosu", "Goicea", "Goiesti", "Grecesti", "Isalnita", "Izvoare", "Leu", "Lipovu", "Macesu de Jos", "Macesu de Sus", "Maglavit", "Malu Mare", "Marsani", "Melinesti", "Mischii", "Motatei", "Murgasi", "Negoi", "Orodel", "Ostroveni", "Perisor", "Pielesti", "Piscu Vechi", "Plenita", "Podari", "Poiana Mare", "Predesti", "Radovan", "Rastu", "Robanesti", "Sadova", "Salcuta", "Scaesti", "Seaca de Camp", "Seaca de Padure", "Secu", "Segarcea", "Silistea Crucii", "Simnicu de Sus", "Sopot", "Teasc", "Terpezita", "Teslui", "Tuglui", "Unirea", "Urzicuta", "Valea Stanciului", "Vartop", "Varvoru", "Vela", "Verbita"]
      },
      {
        name: "Galati",
        cities: ["Balabanesti", "Balasesti", "Baleni", "Baneasa", "Barcea", "Beresti", "Beresti-Sat", "Brahasesti", "Branistea", "Buciumeni", "Cavadinesti", "Certesti", "Corni", "Corod", "Cosmesti", "Costache Negri", "Cuca", "Cudalbi", "Draganesti", "Draguseni", "Fartanesti", "Foltesti", "Frumusita", "Fundeni", "Galati", "Ghidigeni", "Gohor", "Grivita", "Independenta", "Ivesti", "Jorasti", "Liesti", "Mastacani", "Matca", "Movileni", "Munteni", "Namoloasa", "Nicoresti", "Oancea", "Pechea", "Piscu", "Priponesti", "Rediu", "Scanteiesti", "Schela", "Sendreni", "Slobozia-Conachi", "Smardan", "Smulti", "Suceveni", "Targu Bujor", "Tecuci", "Tepu", "Tudor Vladimirescu", "Tulucesti", "Umbraresti", "Valea Marului", "Vanatori", "Varlezi", "Vladesti"]
      },
      {
        name: "Giurgiu",
        cities: ["Adunatii-Copaceni", "Baneasa", "Bolintin Deal", "Bolintinu-din-Vale", "Bucsani", "Bulbucata", "Buturugeni", "Calugareni", "Clejani", "Colibasi", "Comana", "Crevedia Mare", "Daia", "Floresti-Stoenesti", "Fratesti", "Gaiseni", "Gaujani", "Ghimpati", "Giurgiu", "Gogosari", "Gostinari", "Gostinu", "Gradinari", "Greaca", "Hotarele", "Iepuresti", "Izvoarele", "Joita", "Letca Noua", "Marsa", "Mihai Bravu", "Mihailesti", "Ogrezeni", "Oinacu", "Prundu", "Putineiu", "Rasuceni", "Roata de Jos", "Schitu", "Singureni", "Slobozia", "Stanesti", "Stoenesti", "Toporu", "Ulmi", "Valea Dragului", "Vanatorii Mici", "Varasti", "Vedea"]
      },
      {
        name: "Gorj",
        cities: ["Albeni", "Alimpesti", "Aninoasa", "Arcani", "Baia de Fier", "Balanesti", "Balesti", "Balteni", "Barbatesti", "Bengesti", "Berlesti", "Bolbosi", "Borascu", "Branesti", "Bumbesti-Jiu", "Bumbesti-Piticu", "Bustuchin", "Calnic", "Capreni", "Catunele", "Ciuperceni", "Crasna", "Crusetu", "Danciulesti", "Danesti", "Dragotesti", "Dragutesti", "Farcasesti", "Glogova", "Godinesti", "Hurezani", "Ionesti", "Jupanesti", "Lelesti", "Licuriciu", "Logresti", "Matasari", "Motru", "Musetesti", "Negomiru", "Novaci", "Pades", "Pestisani", "Plopsoru", "Polovragi", "Prigoria", "Rosia de Amaradia", "Rovinari", "Runcu", "Sacelu", "Samarinesti", "Saulesti", "Schela", "Scoarta", "Slivilesti", "Stanesti", "Stejari", "Stoina", "Tantareni", "Targu Carbunesti", "Targu Jiu", "Telesti", "Ticleni", "Tismana", "Turburea", "Turceni", "Turcinesti", "Urdari", "Vagiulesti", "Vladimir"]
      },
      {
        name: "Harghita",
        cities: ["Atid", "Avramesti", "Baile Tusnad", "Balan", "Bilbor", "Borsec", "Bradesti", "Capalnita", "Carta", "Ciucsangeorgiu", "Ciumani", "Corbu", "Corund", "Cristuru Secuiesc", "Danesti", "Darjiu", "Dealu", "Ditrau", "Feliceni", "Frumoasa", "Galautas", "Gheorgheni", "Joseni", "Lazarea", "Lueta", "Lunca de Jos", "Lunca de Sus", "Lupeni", "Martinis", "Meresti", "Miercurea-Ciuc", "Mihaileni", "Mugeni", "Ocland", "Odorheiu Secuiesc", "Pauleni-Ciuc", "Plaiesii-de-Jos", "Praid", "Remetea", "Sacel", "Sancraieni", "Sandominic", "Sanmartin", "Sansimion", "Sarmas", "Secuieni", "Siculeni", "Simonesti", "Subcetate", "Suseni", "Toplita", "Tulghes", "Tusnad", "Ulies", "Varsag", "Vlahita", "Voslobeni", "Zetea"]
      },
      {
        name: "Hunedoara",
        cities: ["Aninoasa", "Bacia", "Baia de Cris", "Baita", "Balsa", "Banita", "Baru", "Batrana", "Beriu", "Berthelot", "Blajeni", "Bosorod", "Brad", "Branisca", "Bretea Romana", "Buces", "Bucuresci", "Bulzesti", "Bunila", "Burjuc", "Calan", "Carjiti", "Cerbal", "Certeju de Sus", "Criscior", "Densus", "Deva", "Dobra", "Geoagiu", "Ghelari", "Gurasada", "Harau", "Hateg", "Hunedoara", "Ilia", "Lapugiu de Jos", "Lelese", "Lunca Cernii de Jos", "Luncoiu de Jos", "Lupeni", "Martinesti", "Orastie", "Orastioara de Sus", "Pestisu Mic", "Petrila", "Petrosani", "Pui", "Rachitova", "Rapoltu Mare", "Rau de Mori", "Ribita", "Romos", "Salasu de Sus", "Santamaria Orlea", "Sarmizegetusa", "Simeria", "Soimus", "Teliucu Inferior", "Tomesti", "Toplita", "Totesti", "Turdas", "Uricani", "Valisoara", "Vata de Jos", "Vetel", "Vorta", "Vulcan", "Zam"]
      },
      {
        name: "Ialomita",
        cities: ["Adancata", "Albesti", "Alexeni", "Amara", "Andrasesti", "Armasesti", "Axintele", "Balaciu", "Barcanesti", "Bordusani", "Brazii", "Bucu", "Cazanesti", "Ciocarlia", "Ciochina", "Ciulnita", "Cocora", "Cosambesti", "Cosereni", "Dragoesti", "Dridu", "Facaeni", "Fetesti", "Fierbinti-Targ", "Garbovi", "Gheorghe Doja", "Gheorghe Lazar", "Giurgeni", "Grindu", "Grivita", "Ion Roata", "Jilavele", "Manasia", "Mihail Kogalniceanu", "Milosesti", "Movila", "Movilita", "Munteni Buzau", "Perieti", "Reviga", "Salcioara", "Saveni", "Scanteia", "Sfantu Gheorghe", "Sinesti", "Slobozia", "Stelnica", "Suditi", "Tandarei", "Urziceni", "Valea Ciorii", "Valea Macrisului", "Vladeni"]
      },
      {
        name: "Iasi",
        cities: ["Alexandru Ioan Cuza", "Andrieseni", "Aroneanu", "Baltati", "Barnova", "Belcesti", "Bivolari", "Braesti", "Butea", "Ceplenita", "Ciortesti", "Ciurea", "Coarnele Caprei", "Comarna", "Costuleni", "Cotnari", "Cozmesti", "Cristesti", "Cucuteni", "Dagata", "Deleni", "Dobrovat", "Dolhesti", "Dumesti", "Erbiceni", "Focuri", "Golaesti", "Gorban", "Grajduri", "Gropnita", "Grozesti", "Halaucesti", "Harlau", "Helesteni Harmaneasa", "Holboca", "Horlesti", "Iasi", "Ipatele", "Lespezi", "Letcani", "Lungani", "Madarjac", "Mircesti", "Mironeasa", "Miroslava", "Miroslovesti", "Mogosesti", "Mogosesti-Siret", "Mosna", "Motca", "Movileni", "Oteleni", "Pascani", "Plugari", "Podu Iloaiei", "Popesti", "Popricani", "Prisacani", "Probota", "Raducaneni", "Rediu", "Romanesti", "Ruginoasa", "Scanteia", "Scheia", "Schitu-Duca", "Scobinti", "Sinesti", "Sipote", "Siretel", "Stolniceni-Prajescu", "Strunga", "Tansa", "Targu Gangiulesti", "Tatarusi", "Tibana", "Tibanesti", "Tiganasi", "Todiresti", "Tomesti", "Trifesti", "Tutora", "Ungheni", "Valea Seaca", "Vanatori", "Victoria", "Vladeni", "Voinesti"]
      },
      {
        name: "Ilfov",
        cities: ["Afumati", "Balotesti", "Berceni", "Bragadiru", "Branesti", "Buftea", "Cernica", "Chiajna", "Chitila", "Ciolpani", "Ciorogarla", "Clinceni", "Corbeanca", "Cornetu", "Darasti-Ilfov", "Dascalu", "Dobroesti", "Domnesti", "Dragomiresti-Vale", "Ganeasa", "Glina", "Gradistea", "Gruiu", "Jilava", "Magurele", "Moara Vlasiei", "Mogosoaia", "Nuci", "Otopeni", "Pantelimon", "Peris", "Petrachioaia", "Popesti-Leordeni", "Prim Decembrie", "Snagov", "Stefanestii de Jos", "Tunari", "Vidra", "Voluntari"]
      },
      {
        name: "Maramures",
        cities: ["Ardusat", "Arinis", "Asuaju de Sus", "Baia Mare", "Baia-Sprie", "Baita de sub Codru", "Baiut", "Barsana", "Basesti", "Bicaz", "Bistra", "Bocicoiu Mare", "Bogdan Voda", "Boiu Mare", "Borsa", "Botiza", "Budesti", "Calinesti", "Campulung la Tisa", "Cavnic", "Cernesti", "Cicarlau", "Copalnic Manastur", "Coroieni", "Cupseni", "Desesti", "Dragomiresti", "Dumbravita", "Farcasa", "Giulesti", "Grosi", "Ieud", "Lapus", "Leordina", "Miresu Mare", "Moisei", "Oarta de Jos", "Ocna Sugatag", "Petrova", "Poienile Izei", "Poienile de sub Munte", "Recea", "Remetea Chioarului", "Remeti", "Repedea", "Rona de Jos", "Rona de Sus", "Rozavlea", "Ruscova", "Sacalaseni", "Sacel", "Salistea de Sus", "Salsig", "Sapanta", "Sarasau", "Sasar", "Satulung", "Seini", "Sighetu Marmatiei", "Sisesti", "Somcuta Mare", "Stramtura", "Suciu de Sus", "Targu-Lapus", "Tautii Margheraus", "Ulmeni", "Vadu Izei", "Valea Chioarului", "Vima Mica", "Viseu de Jos", "Viseu de Sus"]
      },
      {
        name: "Mehedinti",
        cities: ["Baclesu", "Baia de Arama", "Bala", "Balacita", "Balta", "Balvanesti", "Breznita Ocol", "Breznita-Motru", "Brosteni", "Burila Mare", "Butoiesti", "Cazanesti", "Ciresu", "Corcova", "Corlatel", "Cujmir", "Darvari", "Devesel", "Drobeta-Turnu Severin", "Dubova", "Dumbrava", "Eselnita", "Floresti", "Garla Mare", "Godeanu", "Gogosu", "Greci", "Grozesti", "Gruia", "Hinova", "Husnicioara", "Ilovat", "Ilovita", "Isverna", "Izvoru Barzii", "Jiana", "Livezile", "Malovat", "Obarsia Noua", "Obarsia-Closani", "Oprisor", "Orsova", "Padina", "Patulele", "Podeni", "Ponoarele", "Poroina Mare", "Pristol", "Prunisor", "Punghina", "Rogova", "Salcia", "Simian", "Sisesti", "Sovarna", "Stangaceaua", "Strehaia", "Svinita", "Tamna", "Vanatori", "Vanju Mare", "Vanjulet", "Vladaia", "Voloiac"]
      },
      {
        name: "Mures",
        cities: ["Acatari", "Adamus", "Albesti", "Alunis", "Apold", "Atintis", "Bagaciu", "Bahnea", "Bala", "Balauseri", "Band", "Batos", "Beica de Jos", "Bichis", "Bogata", "Brancovenesti", "Breaza", "Ceuasul-de Campie", "Chetani", "Chiheru de Jos", "Coroisanmartin", "Cozma", "Craciunesti", "Craiesti", "Cristesti", "Cucerdea", "Cuci", "Danes", "Deda", "Eremitu", "Ernei", "Fantanele", "Faragau", "Galesti", "Ganesti", "Gheorghe Doja", "Ghindari", "Glodeni", "Gornesti", "Grebenisu de Campie", "Gurghiu", "Hodac", "Hodosa", "Ibanesti", "Iclanzel", "Ideciu de Jos", "Iernut", "Livezeni", "Ludus", "Lunca", "Lunca Bradului", "Magherani", "Mica", "Miercurea Nirajului", "Mihesu de Campie", "Nades", "Neaua", "Ogra", "Panet", "Papiu Ilarian", "Pasareni", "Petelea", "Pogaceaua", "Raciu", "Rastolita", "Reghin", "Rusii Munti", "Sancraiul-de-Mures", "Sangeorg-de Mures", "Sangeorgiu-de-Padure", "Sanger", "Sanpaul", "Sanpetru-de-Campie", "Santana-de-Mures", "Sarmasu", "Saschiz", "Saulia", "Sighisoara", "Sincai", "Solovastru", "Sovata", "Stanceni", "Suplac", "Suseni", "Targu-Mures", "Tarnaveni", "Taureni", "Ungheni", "Valea Larga", "Vanatori", "Vargata", "Vatava", "Vetca", "Viisoara", "Voivodeni", "Zagar", "Zau de Campie"]
      },
      {
        name: "Neamt",
        cities: ["Agapia", "Bahna", "Baltatesti", "Bara", "Bargaoani", "Bicaz", "Bicaz Chei", "Bicazu Ardelean", "Bodesti", "Borca", "Borlesti", "Botesti", "Bozieni", "Brusturi-Draganesti", "Candesti", "Ceahlau", "Cordun", "Costisa", "Cracaoani", "Damuc", "Dobreni", "Doljesti", "Dragomiresti", "Dulcesti", "Dumbrava Rosie", "Farcasa", "Faurei", "Garcina", "Gheraesti", "Girov", "Grinties", "Grumazesti", "Hangu", "Horia", "Icusesti", "Ion Creanga", "Margineni", "Moldoveni", "Oniceni", "Pangarati", "Pastraveni", "Petricani", "Piatra Neamt", "Piatra Soimului", "Pipirig", "Podoleni", "Poiana Teiului", "Poienari", "Raucesti", "Razboieni", "Rediu", "Roman", "Romani", "Roznov", "Sabaoani", "Sagna", "Savinesti", "Secuieni", "Stanita", "Stefan cel Mare", "Tamaseni", "Tarcau", "Targu-Neamt", "Tasca", "Tazlau", "Tibucani", "Timisesti", "Trifesti", "Tupilati", "Urecheni", "Valea Ursului", "Vanatori-Neamt", "Viisoara", "Zanesti"]
      },
      {
        name: "Olt",
        cities: ["Babiciu", "Baldovinesti", "Bals", "Barasti", "Barza", "Bobicesti", "Brancoveni", "Brastavatu", "Brebeni", "Bucinisu", "Caracal", "Carlogani", "Cezieni", "Cilieni", "Colonesti", "Corabia", "Corbu", "Coteana", "Crampoaia", "Cungrea", "Curtisoara", "Daneasa", "Deveselu", "Dobretu", "Dobrosloveni", "Dobroteasa", "Dobrun", "Draganesti-Olt", "Draghiceni", "Fagetelu", "Falcoiu", "Farcasele", "Ganeasa", "Garcovu", "Giuvarasti", "Gostavatu", "Gradinari", "Grojdibodu", "Ianca", "Iancu Jianu", "Icoana", "Izbiceni", "Izvoarele", "Leleasca", "Maruntei", "Mihaesti", "Milcov", "Morunglav", "Movileni", "Nicolae Titulescu", "Obarsia", "Oboga", "Oporelu", "Optasi", "Orlea", "Osica de Sus", "Parscoveni", "Perieti", "Piatra Olt", "Plesoiu", "Poboru", "Potcoava", "Priseaca", "Radomiresti", "Redea", "Rotunda", "Rusanesti", "Samburesti", "Scarisoara", "Schitu", "Scornicesti", "Seaca", "Serbanesti", "Slatina", "Slatioara", "Spineni", "Sprancenata", "Stefan cel Mare", "Stoenesti", "Stoicanesti", "Strejesti", "Studina", "Tatulesti", "Teslui", "Tia Mare", "Topana", "Traian", "Tufeni", "Urzica", "Vadastra", "Vadastrita", "Valcele", "Valea Mare", "Valeni", "Verguleasa", "Visina", "Vitomiresti", "Vladila", "Voineasa", "Vulpeni", "Vulturesti"]
      },
      {
        name: "Prahova",
        cities: ["Adunati", "Albesti-Paleologu", "Alunis", "Apostolache", "Aricestii-Rahtivani", "Aricestii-Zeletin", "Azuga", "Baba Ana", "Baicoi", "Balta Doamnei", "Baltesti", "Banesti", "Barcanesti", "Berceni", "Bertea", "Blejoi", "Boldesti", "Boldesti-Scaeni", "Brazi", "Breaza", "Brebu", "Bucov", "Busteni", "Calugareni", "Campina", "Carbunesti", "Ceptura", "Cerasu", "Chiojdeanca", "Ciorani", "Cocorastii-Misli", "Colceag", "Comarnic", "Cornu", "Cosminele", "Doftana", "Draganesti", "Drajna", "Dumbrava", "Dumbravesti", "Fantanele", "Filipestii de Padure", "Filipestii de Targ", "Floresti", "Fulga", "Gherghita", "Gorgota", "Gornet", "Gornet-Cricov", "Gura Vadului", "Gura Vitioarei", "Iordacheanu", "Izvoarele", "Jugureni", "Lapos", "Lipanesti", "Magurele", "Magureni", "Maneciu", "Manesti", "Mizil", "Pacureti", "Paulesti", "Ploiesti", "Plopeni", "Plopu", "Podenii Noi", "Poenarii-Burchi", "Poiana Campina", "Posesti", "Predeal-Sarari", "Provita de Jos", "Provita de Sus", "Puchenii Mari", "Rafov", "Salcia", "Salciile", "Sangeru", "Scorteni", "Secaria", "Sinaia", "Sirna", "Slanic", "Soimari", "Sotrile", "Starchiojd", "Stefesti", "Surani", "Talea", "Targsorul-Vechi", "Tataru", "Teisani", "Telega", "Tinosu", "Tomsani", "Urlati", "Valcanesti", "Valea Calugareasca", "Valenii de Munte", "Varbilau"]
      },
      {
        name: "Salaj",
        cities: ["Agrij", "Almasu", "Babeni", "Balan", "Banisor", "Benesat", "Bobota", "Bocsa", "Buciumi", "Camar", "Carastelec", "Cehu Silvaniei", "Chiesd", "Cizer", "Coseiu", "Crasna", "Creaca", "Criseni", "Cristolt", "Cuzaplac", "Dobrin", "Dragu", "Fildu de Jos", "Galgau", "Garbou", "Halmasd", "Hereclean", "Hida", "Horoatu Crasnei", "Ileanda", "Ip", "Jibou", "Letca", "Lozna", "Maeriste", "Marca", "Mesesenii de Jos", "Mirsid", "Napradea", "Nusfalau", "Periceiu", "Plopis", "Poiana Blenchii", "Romanasi", "Rus", "Sag", "Salatig", "Samsud", "Sanmihaiul-Almasului", "Sarmasag", "Simleu Silvaniei", "Somes-Odorhei", "Surduc", "Treznea", "Valcau de Jos", "Varsolt", "Zalau", "Zalha", "Zimbor"]
      },
      {
        name: "Satu Mare",
        cities: []
      },
      {
        name: "Sibiu",
        cities: ["Agnita", "Altina", "Apoldu de Jos", "Arpasu de Jos", "Atel", "Avrig", "Axente Sever", "Barghis", "Bazna", "Biertan", "Blajel", "Bradeni", "Brateiu", "Bruiu", "Carta", "Cartisoara", "Chirpar", "Cisnadie", "Copsa Mica", "Cristian", "Darlos", "Dumbraveni", "Gura Raului", "Hoghilag", "Iacobeni", "Jina", "Laslea", "Loamnes", "Ludos", "Marpod", "Medias", "Merghindeal", "Micasasa", "Miercurea Sibiului", "Mihaileni", "Mosna", "Nocrich", "Ocna Sibiului", "Orlat", "Pauca", "Poiana Sibiului", "Poplaca", "Porumbacu de Jos", "Racovita", "Rasinari", "Rau Sadului", "Rosia", "Sadu", "Saliste", "Seica Mare", "Seica Mica", "Selimbar", "Sibiu", "Slimnic", "Sura Mare", "Sura Mica", "Talmaciu", "Tarnava", "Tilisca", "Turnu Rosu", "Valea Viilor", "Vurpar"]
      },
      {
        name: "Sondelor",
        cities: ["Sondelor"]
      },
      {
        name: "Suceava",
        cities: ["Adancata", "Arbore", "Baia", "Balcauti", "Bilca", "Bogdanesti", "Boroaia", "Bosanci", "Botosana", "Breaza", "Brodina", "Brosteni", "Bunesti", "Cacica", "Cajvana", "Calafindesti", "Campulung Moldovenesc", "Carlibaba", "Ciprian Porumbescu", "Cornu Luncii", "Crucea", "Darmanesti", "Dolhasca", "Dolhesti", "Dorna", "Dorna Candrenilor", "Dornesti", "Dragoesti", "Draguseni", "Dumbraveni", "Falticeni", "Fantanele", "Forasti", "Frasin", "Fratautii Noi", "Fratautii Vechi", "Frumosu", "Fundu Moldovei", "Galanesti", "Gramesti", "Granicesti", "Gura Humorului", "Horodniceni", "Horodnicu", "Iacobeni", "Ipotesti", "Izvoarele Sucevei", "Liteni", "Malini", "Manastirea Homorului", "Marginea", "Milisauti", "Mitocu Dragomirnei", "Moara", "Moldova Sulita", "Moldovita", "Musenita", "Ostra", "Paltinoasa", "Panaci", "Partestii de Jos", "Patrauti", "Poiana Stampei", "Pojorata", "Preutesti", "Putna", "Radaseni", "Radauti", "Rasca", "Sadova", "Salcea", "Saru Dornei", "Satu Mare", "Scheia", "Siminicea", "Siret", "Slatina", "Solca", "Straja", "Stroiesti", "Stulpicani", "Suceava", "Sucevita", "Todiresti", "Udesti", "Ulma", "Vadu Moldovei", "Valea Moldovei", "Vama", "Vatra Dornei", "Vatra Moldovitei", "Veresti", "Vicovu de Jos", "Vicovu de Sus", "Volovat", "Vulturesti", "Zamostea", "Zvoristea"]
      },
      {
        name: "Teleorman",
        cities: ["Alexandria", "Babaita", "Balaci", "Blejesti", "Bogdana", "Botoroaga", "Bragadiru", "Branceni", "Bujoreni", "Bujoru", "Buzescu", "Calinesti", "Calmatuiu", "Cervenia", "Ciolanesti", "Ciuperceni", "Contesti", "Cosmesti", "Crangeni", "Crangu", "Crevenicu", "Didesti", "Dobrotesti", "Dracsenei", "Draganesti de Vede", "Draganesti-Vlasca", "Frumoasa", "Furculesti", "Galateni", "Gratia", "Islaz", "Izvoarele", "Lisa", "Lita", "Lunca", "Magura", "Maldaeni", "Marzanesti", "Mavrodin", "Mereni", "Mosteni", "Nanov", "Nasturelu", "Necsesti", "Olteni", "Orbeasca", "Peretu", "Piatra", "Pietrosani", "Plopii Slavitesti", "Plosca", "Poeni", "Poroschia", "Putineiu", "Radoiesti", "Rasmiresti", "Rosiori de Vede", "Saceni", "Salcia", "Sarbeni", "Scrioastea", "Scurtu Mare", "Seaca", "Segarcea Vale", "Sfintesti", "Silistea", "Silistea-Gumesti", "Slobozia-Mandra", "Smardioasa", "Stejaru", "Storobaneasa", "Suhaia", "Talpa", "Tatarastii de Jos", "Tatarastii de Sus", "Tiganesti", "Traian", "Trivalea-Mosteni", "Troianul", "Turnu Magurele", "Vartoapele-de-Jos", "Vedea", "Videle", "Viisoara", "Vitanesti", "Zambreasca", "Zimnicea"]
      },
      {
        name: "Timis",
        cities: ["Balint", "Banloc", "Bara", "Barna", "Beba Veche", "Becicherecu Mic", "Belint", "Bethausen", "Biled", "Bogda", "Boldur", "Brestovat", "Buzias", "Carpinis", "Cenad", "Cenei", "Cheveresu Mare", "Ciacova", "Comlosu Mare", "Costeiu", "Criciova", "Curtea", "Darova", "Denta", "Deta", "Dudestii Vechi", "Dumbrava", "Dumbravita", "Faget", "Fardea", "Foeni", "Gataia", "Gavojdia", "Ghiroda", "Ghizela", "Giarmata", "Giera", "Giroc", "Giulvaz", "Jamu Mare", "Jebel", "Jimbolia", "Lenauheim", "Liebling", "Lovrin", "Lugoj", "Manastiur", "Margina", "Masloc", "Moravita", "Mosnita Noua", "Nadrag", "Nitchidorf", "Ohaba Lunga", "Ortisoara", "Peciu Nou", "Periam", "Pietroasa", "Pischia", "Racovita", "Recas", "Remetea Mare", "Sacalaz", "Sacosu Turcesc", "Sag", "Sanandrei", "Sanmihaiu Roman", "Sannicolaul Mare", "Sanpetrul-Mare", "Satchinez", "Secas", "Stiuca", "Teremia Mare", "Timisoara", "Tomesti", "Topolovatu Mare", "Tormac", "Traian Vuia", "Uivar", "Varias", "Victor Vlad Delamarina", "Voiteg"]
      },
      {
        name: "Tulcea",
        cities: ["Babadag", "Baia", "Beidaud", "Carcaliu", "Casimcea", "Ceamurlia de Jos", "Ceatalchioi", "Cerna", "Chilia Veche", "Ciucurova", "Constantin Rosetti", "Crisan", "Daeni", "Dorobantu", "Frecatei", "Greci", "Grindu", "Hamcearca", "Horia", "Ion Bratianu", "Isaccea", "Izvoarele", "Jijila", "Jurilovca", "Luncavita", "Macin", "Mahmudia", "Malnas", "Mihai Bravu", "Mihail Kogalniceanu", "Murighiol", "Nalbant", "Niculitel", "Nufaru", "Ostrov", "Pardina", "Peceneaga", "Sarichioi", "Sfantu Gheorghe", "Slava Cercheza", "Smardan", "Somova", "Stejaru", "Sulina", "Topolog", "Tulcea", "Turcoaia", "Valea Nucarilor"]
      },
      {
        name: "Valcea",
        cities: ["Alunu", "Amarasti", "Babeni", "Baile Govora", "Baile Olanesti", "Balcesti", "Barbatesti", "Berbesti", "Berislavesti", "Boisoara", "Brezoi", "Budesti", "Bujoreni", "Bunesti", "Caineni", "Calimanesti", "Cernisoara", "Copaceni", "Costesti", "Creteni", "Daesti", "Danicei", "Dragasani", "Dragoesti", "Fartatesti", "Fauresti", "Francesti", "Galicea", "Ghioroiu", "Glavile", "Golesti", "Gradistea", "Gusoeni", "Horezu", "Ionesti", "Ladesti", "Lalosu", "Lapusata", "Livezi", "Lungesti", "Maciuca", "Madulari", "Malaia", "Maldaresti", "Mateesti", "Mihaesti", "Milcoiu", "Muereasca", "Nicolae Balcescu", "Ocnele Mari", "Olanu", "Orlesti", "Otesani", "Pausesti", "Pausesti-Maglasi", "Perisani", "Pesceana", "Pietrari", "Popesti", "Prundeni", "Racovita", "Ramnicu Valcea", "Roesti", "Rosiile", "Runcu", "Salatrucel", "Scundu", "Sinesti", "Sirineasa", "Slatioara", "Stanesti", "Stefanesti", "Stoenesti", "Stoilesti", "Stroesti", "Susani", "Sutesti", "Tetoiu", "Tomsani", "Vaideeni", "Valea Mare", "Vladesti", "Voicesti", "Voineasa", "Zatreni"]
      },
      {
        name: "Vaslui",
        cities: ["Albesti", "Alexandru Vlahuta", "Arsura", "Bacani", "Bacesti", "Balteni", "Banca", "Barlad", "Berezeni", "Blagesti", "Bogdana", "Bogdanesti", "Bogdanita", "Botesti", "Bunesti", "Codaesti", "Coroiesti", "Costesti", "Cretesti", "Danesti", "Deleni", "Delesti", "Dimitrie Cantemir", "Dragomiresti", "Dranceni Sat", "Duda", "Dumesti", "Epureni", "Falciu", "Gagesti", "Garceni", "Gherghesti", "Grivita", "Hoceni", "Husi", "Iana", "Ivanesti", "Ivesti", "Laza", "Lipovat", "Lunca Banului", "Malusteni", "Miclesti", "Muntenii de Jos", "Murgeni", "Negresti", "Oltenesti", "Osesti", "Padureni", "Perieni", "Pogana", "Poienesti", "Puiesti", "Pungesti", "Rebricea", "Rosiesti", "Solesti", "Stanilesti", "Stefan cel Mare", "Suletea", "Tacuta", "Tanacu", "Tatarani", "Todiresti", "Tutova", "Valeni", "Vaslui", "Vetrisoaia", "Viisoara", "Vinderei", "Voinesti", "Vulturesti", "Vutcani", "Zapodeni", "Zorleni"]
      },
      {
        name: "Vrancea",
        cities: ["Adjud", "Andreiasu de Jos", "Balesti", "Barsesti", "Boghesti", "Bolotesti", "Bordesti", "Brosteni", "Campineanca", "Campuri", "Carligele", "Chiojdeni", "Ciorasti", "Corbita", "Cotesti", "Dumbraveni", "Dumitresti", "Fitionesti", "Focsani", "Garoafa", "Golesti", "Gugesti", "Gura Calitei", "Homocea", "Jaristea", "Jitia", "Maicanesti", "Marasesti", "Mera", "Milcovul", "Movilita", "Nanesti", "Naruja", "Nereju", "Nistoresti", "Odobesti", "Paltin", "Panciu", "Paunesti", "Poiana Cristei", "Pufesti", "Racoasa", "Reghiu", "Ruginesti", "Sihlea", "Slobozia Bradului", "Slobozia-Ciorasti", "Soveja", "Straoane", "Suraia", "Tamboesti", "Tanasoaia", "Tataranu", "Tifesti", "Tulnici", "Urechesti", "Valea Sarii", "Vanatori", "Vartescoiu", "Vidra", "Vintileasca", "Vizantea", "Vrancioaia", "Vulturu"]
      }
    ],
    isoAlpha2: "RO",
    isoAlpha3: "ROU",
    isoNumeric: 642
  },
  {
    name: "Russia",
    flag: "🇷🇺",
    currency: {
      code: "RUB",
      name: "Ruble",
      symbol: "руб"
    },
    states: [
      {
        name: "Adygeja",
        cities: ["Adygejsk", "Enem", "Jablonovskij", "Kamennomostskij", "Majkop", "Tulskij"]
      },
      {
        name: "Aga",
        cities: ["Aginskoje"]
      },
      {
        name: "Alanija",
        cities: ["Alagir", "Ardon", "Beslan", "Digora", "Mozdok", "Vladikavkaz", "Zavodskoj"]
      },
      {
        name: "Altaj",
        cities: ["Alejsk", "Barnaul", "Belojarsk", "Belokuriha", "Bijsk", "Blagoveshchenka", "Gornjak", "Jarovoe", "Juzhnyj", "Kamen-na-Obi", "Novoaltajsk", "Novosilikatnyj", "Rubcovsk", "Sibirskiy", "Slavgorod", "Talmenka", "Zarinsk", "Zmeinogorsk"]
      },
      {
        name: "Amur",
        cities: ["Arhara", "Belogorsk", "Blagoveshchensk", "Jerofej Pavlovich", "Magdagachi", "Novoburejskij", "Progress", "Rajchihinsk", "Seryshevo", "Shimanovsk", "Skovorodino", "Svobodnyj", "Tynda", "Urusha", "Zavitinsk", "Zeja"]
      },
      {
        name: "Arhangelsk",
        cities: ["Arhangelsk", "Jemca", "Jercevo", "Kargopol", "Konosha", "Korjazhma", "Kotlas", "Kuloj", "Maloshujka", "Mirnyj", "Njandoma", "Novodvinsk", "Obozjorskij", "Oktjabrskij", "Onega", "Plesetsk", "Podjuga", "Puksoozero", "Samoded", "Savinskij", "Severodvinsk", "Shenkursk", "Udimskij", "Urdoma", "Velsk", "Vychegodskij"]
      },
      {
        name: "Astrahan",
        cities: ["Ahtubinsk", "Astrahan", "Harabali", "Kamyzjak", "Kapustin Jar", "Liman", "Narimanov", "Verhnij Baskunchak", "Volodarskij", "Znamensk"]
      },
      {
        name: "Bashkortostan",
        cities: ["Agidel", "Bajmak", "Belebej", "Beloreck", "Birsk", "Blagoveshchensk", "Chishmy", "Davlekanovo", "Djurtjuli", "Iglino", "Ishimbaj", "Janaul", "Jermolajevo", "Kandry", "Krasnousolskij", "Kumertau", "Meleuz", "Mezhgorje", "Neftekamsk", "Oktjabrskij", "Oktyabrsky", "Prijutovo", "Rajevskij", "Salavat", "Serafimovskij", "Sibaj", "Sterlitamak", "Tujmazy", "Uchaly", "Ufa"]
      },
      {
        name: "Belgorod",
        cities: ["Aleksejevka", "Belgorod", "Borisovka", "Chernjanka", "Grajvoron", "Gubkin", "Novyj Oskol", "Rakitnoe", "Razumnoe", "Shebekino", "Staryj Oskol", "Stroitel", "Tomarovka", "Valujki", "Volokonovka"]
      },
      {
        name: "Brjansk",
        cities: ["Belye Berega", "Brjansk", "Djatkovo", "Fokino", "Karachev", "Kletnja", "Klimovo", "Klincy", "Lokot", "Navlja", "Novozybkov", "Pochjop", "Pogar", "Starodub", "Surazh", "Suzjomka", "Trubchjovsk", "Unecha", "Zhukovka"]
      },
      {
        name: "Burjatija",
        cities: ["Gusinoozjorsk", "Kamensk", "Kjahta", "Novyj Uojan", "Onohoj", "Selenginsk", "Severobajkalsk", "Taksimo", "Ulan-Ude", "Zakamensk", "Zarechnyj"]
      },
      {
        name: "Chechenija",
        cities: ["Groznyj", "Gudermes", "Malgobek", "Urus-Martan"]
      },
      {
        name: "Cheljabinsk",
        cities: ["Asha", "Bakal", "Bazhovo", "Berdjaush", "Chebarkul", "Cheljabinsk", "Chelyabinsk", "Gornjak", "Jemanzhelinsk", "Jurjuzan", "Juznouralsk", "Karabash", "Kartaly", "Kasli", "Katav-Ivanovsk", "Kopejsk", "Korkino", "Krasnogorskij", "Kusa", "Kyshtym", "Lokomotivnyj", "Magnitka", "Magnitogorsk", "Miass", "Minjar", "Njazepetrovsk", "Novosineglazovskij", "Ozjorsk", "Pervomajskij", "Plast", "Roza", "Satka", "Sim", "Snezhinsk", "Starokamyshinsk", "Suleja", "Trjohgornij", "Troick", "Ust-Katav", "Verhneuralsk", "Verhnij Ufalej", "Zlatoust"]
      },
      {
        name: "Chita",
        cities: ["Atamanovka", "Balej", "Borzja", "Bukachacha", "Chernyshevsk", "Chita", "Darasun", "Gornyy", "Hilok", "Karymskoje", "Krasnokamensk", "Mogocha", "Nerchinsk", "Novaja Chara", "Novokruchuninskij", "Olovjannaja", "Pervomajskij", "Petrovsk-Zabajkalskij", "Sherlovaja Gora", "Shilka", "Sretensk", "Vershino-Darasunskij", "Zabajkalsk"]
      },
      {
        name: "Chukotka",
        cities: ["Anadyr", "Bilibino", "Pevek", "Ugolnyje Kopi"]
      },
      {
        name: "Chuvashija",
        cities: ["Alatyr", "Cheboksary", "Civilsk", "Ibresi", "Jadrin", "Kanash", "Kozlovka", "Kugesy", "Mariinskij Posad", "Novocheboksarsk", "Shumerlja", "Vurnary"]
      },
      {
        name: "Dagestan",
        cities: ["Belidzhi", "Bujnaksk", "Dagestanskije Ogni", "Derbent", "Hasavjurt", "Izberbash", "Juzhno-Suhokumsk", "Kaspijsk", "Kiziljurt", "Kizljar", "Mahackala"]
      },
      {
        name: "Evenkija",
        cities: ["Tura"]
      },
      {
        name: "Gorno-Altaj",
        cities: ["Gorno-Altajsk"]
      },
      {
        name: "Habarovsk",
        cities: ["Amursk", "Bikin", "Chegdomyn", "Cherdomyn", "Habarovsk", "Hor", "Jelban", "Komsomolsk-na-Amure", "Litovko", "Nikolajevsk-na-Amure", "Ohotsk", "Perejaslavka", "Solnechnyj", "Sovetskaja Gavan", "Uglegorsk", "Vanino", "Vjazemskij", "Zavety Iljicha"]
      },
      {
        name: "Hakasija",
        cities: ["Abakan", "Abaza", "Cherjomushki", "Chernogorsk", "Sajanogorsk", "Shira", "Sorsk", "Ust-Abakan"]
      },
      {
        name: "Hanty-Mansija",
        cities: ["Belojarskij", "Belyj Jar", "Fjodorovskij", "Hanty-Mansijsk", "Igrim", "Izluchinsk", "Jugorsk", "Kogalym", "Langepas", "Ljantor", "Megion", "Mezhdurechenskij", "Neftejugansk", "Nizhnevartovsk", "Njagan", "Novoagansk", "Pojkovskij", "Pokachi", "Raduzhnyj", "Sovetskij", "Surgut", "Uraj"]
      },
      {
        name: "Ingusetija",
        cities: ["Karabulak", "Nazran"]
      },
      {
        name: "Irkutsk",
        cities: ["Angarsk", "Bajkalsk", "Balagansk", "Birjusinsk", "Bodajbo", "Bratsk", "Cheremhovo", "Chunskij", "Irkutsk", "Kirensk", "Kujtun", "Mihajlovka", "Nizhneudinsk", "Novaja Igirma", "Sajansk", "Shelehov", "Sljudjanka", "Svirsk", "Tajshet", "Tulun", "Usolje-Sibirskoje", "Ust-Ilimsk", "Ust-Kut", "Vihorevka", "Zalari", "Zheleznodorozhnyj", "Zheleznogorsk-Ilimskij", "Zima"]
      },
      {
        name: "Ivanovo",
        cities: ["Furmanov", "Ivanovo", "Jurjevec", "Juzha", "Kineshma", "Kohma", "Komsomolsk", "Lezhnjovo", "Navoloki", "Privolzhsk", "Puchezh", "Rodniki", "Shuja", "Tejkovo", "Vichuga"]
      },
      {
        name: "Jamalo-Nenets",
        cities: ["Gubkinskij", "Korotchajevo", "Labytnangi", "Muravlenko", "Nadym", "Nojabrsk", "Novyj Urengoj", "Pangody", "Salehard", "Tarko-Sale", "Urengoj"]
      },
      {
        name: "Jaroslavl",
        cities: ["Danilov", "Gavrilov-Jam", "Jaroslavl", "Pereslavl-Zalesskij", "Rostov", "Rybinsk", "Tutajev", "Uglich"]
      },
      {
        name: "Jevrej",
        cities: ["Birakan", "Birobidzhan", "Imeni Telmana", "Izvestkovyj", "Londoko", "Obluchje", "Teploozjorsk"]
      },
      {
        name: "Kabardino-Balkarija",
        cities: ["Baksan", "Chegem Pervyj", "Majskij", "Nalchik", "Nartkala", "Prohladnyj", "Terek", "Tyrnyauz"]
      },
      {
        name: "Kaliningrad",
        cities: ["Bagrationovsk", "Baltijsk", "Chernjahovsk", "Gurjevsk", "Gusev", "Gvardejsk", "Kaliningrad", "Mamonovo", "Neman", "Nesterov", "Ozjorsk", "Pionerskij", "Sovetsk", "Svetlogorsk", "Svetlyj", "Zeljenogradsk", "Znamensk"]
      },
      {
        name: "Kalmykija",
        cities: ["Elista", "Gorodovikovsk", "Lagan"]
      },
      {
        name: "Kaluga",
        cities: ["Balabanovo", "Belousovo", "Borovsk", "Jermolino", "Kaluga", "Kirov", "Kondrovo", "Kozelsk", "Kremenki", "Ljudinovo", "Malojaroslavec", "Obninsk", "Sosenskij", "Suhinichi", "Tarusa", "Tovarkovo", "Zhukov"]
      },
      {
        name: "Kamchatka",
        cities: ["Jelizovo", "Kljuchi", "Mohovaja", "Petropavlovsk-Kamchatskij", "Ust-Kamchatsk", "Viljuchinsk", "Vulkannyj"]
      },
      {
        name: "Karachaj-Cherkessija",
        cities: ["Cherkessk", "Karachajevsk", "Ust-Dzheguta"]
      },
      {
        name: "Karelija",
        cities: ["Belomorsk", "Kem", "Kondopoga", "Kostomuksha", "Lahdenpohja", "Medvezhjegorsk", "Nadvoicy", "Olonec", "Petrozavodsk", "Pitkjaranta", "Pudozh", "Segezha", "Sortavala", "Suojarvi"]
      },
      {
        name: "Kemerovo",
        cities: ["Anzhero-Sudzhensk", "Bachatskij", "Belovo", "Berjozovskij", "Gramoteino", "Gurjevsk", "Inskoj", "Jashkino", "Jurga", "Kaltan", "Kedrovka", "Kemerovo", "Kiseljovsk", "Krasnobrodskij", "Leninsk-Kuzneckij", "Malinovka", "Mariinsk", "Mezhdurechensk", "Myski", "Novokuzneck", "Novokuznetsk", "Novyj Gorodok", "Osinniki", "Polsaevo", "Prokopjevsk", "Promyshlennaja", "Promyshlennovskij", "Salair", "Starobachaty", "Tajga", "Tajzhina", "Tashtagol", "Temirtau", "Tisul", "Tjazhinskij", "Topki"]
      },
      {
        name: "Khabarovskiy Kray",
        cities: []
      },
      {
        name: "Kirov",
        cities: ["Belaja Holunica", "Jaransk", "Jurja", "Kirov", "Kirovo-Chepeck", "Kirs", "Kotelnich", "Ljangasovo", "Luza", "Malmyzh", "Murashi", "Nolinsk", "Omutninsk", "Orichi", "Orlov", "Pervomajskij", "Peskovka", "Slobodskoj", "Sosnovka", "Sovetsk", "Urzhum", "Vahrushi", "Vjatskije Poljany", "Zujevka"]
      },
      {
        name: "Komi",
        cities: ["Blagoevo", "Inta", "Jarega", "Jeletskij", "Jemva", "Komsomolskij", "Krasnozatonskij", "Mikun", "Nizhnij Odes", "Pechora", "Promyshlennyj", "Severnyj", "Sosnogorsk", "Syktyvkar", "Troicko-Pechorsk", "Uhta", "Usinsk", "Usogorsk", "Vorgashor", "Vorkuta", "Vuktyl", "Zheshart"]
      },
      {
        name: "Komi-Permjakija",
        cities: ["Kudymkar"]
      },
      {
        name: "Korjakija",
        cities: ["Palana"]
      },
      {
        name: "Kostroma",
        cities: ["Buj", "Galich", "Kostroma", "Makarjev", "Manturovo", "Neja", "Nerehta", "Sharja", "Vetluzhskij", "Volgorechensk", "Zavolzhsk"]
      },
      {
        name: "Krasnodar",
        cities: ["Abinsk", "Achujevo", "Afipskij", "Ahtyrskij", "Anapa", "Apsheronsk", "Armavir", "Belorechensk", "Gelendzhik", "Gorjachi Kljuch", "Gulkevichi", "Hadyzhensk", "Ilskij", "Jejsk", "Kalinino", "Korenovsk", "Krasnodar", "Kropotkin", "Krymsk", "Kurganinsk", "Labinsk", "Mostovskoj", "Neftegorsk", "Novokubansk", "Novomihajlovskij", "Novorossijsk", "Pashkovskij", "Primorsko-Ahtarsk", "Psebaj", "Slavjansk-na-Kubani", "Sochi", "Srednjaja Ahtuba", "Temrjuk", "Tihoreck", "Timashevsk", "Tuapse", "Ust-Labinsk"]
      },
      {
        name: "Krasnojarsk",
        cities: ["Aban", "Achinsk", "Artjomovsk", "Berjozovka", "Bogotol", "Borodino", "Divnogorsk", "Dubinino", "Igarka", "Ilanskij", "Jemeljanovo", "Jenisejsk", "Kajerkan", "Kansk", "Kedrovyj", "Kodinsk", "Krasnojarsk", "Kuragino", "Lesosibirsk", "Minusinsk", "Nazarovo", "Nizhnjaja Pojma", "Norilsk", "Podgornyj", "Sharypovo", "Shushenskoe", "Solnechnyj", "Sosnovoborsk", "Talnah", "Ujar", "Uzhur", "Zaozjornyj", "Zelenogorsk", "Zheleznogorsk"]
      },
      {
        name: "Krasnoyarskiy Kray",
        cities: []
      },
      {
        name: "Kurgan",
        cities: ["Dalmatovo", "Kargapolje", "Katajsk", "Kurgan", "Kurtamysh", "Makushino", "Petuhovo", "Shadrinsk", "Shumiha", "Vargashi"]
      },
      {
        name: "Kursk",
        cities: ["Dmitriev Lgovskij", "Imeni Karla Libknehta", "Kurchatov", "Kursk", "Lgov", "Obojan", "Rylsk", "Shchigry", "Shchuchje", "Sudzha", "Zheleznogorsk"]
      },
      {
        name: "Leningrad",
        cities: ["Boksitogorsk", "Dubrovka", "Gatchina", "Imeni Morozova", "Ivangorod", "Kingisepp", "Kirishi", "Kirovsk", "Kolpino", "Kommunar", "Kuzmolovskiy", "Lodejnoje Pole", "Luga", "Nikolskoe", "Novaja Ladoga", "Otradnoe", "Pikaljovo", "Podporozhje", "Priozjorsk", "Sertolovo", "Shlisselburg", "Siverskij", "Sjasstroj", "Slancy", "Sosnovyj Bor", "Svetogorsk", "Tihvin", "Tosno", "Uljanovka", "Volhov", "Volosovo", "Vsevolozhsk", "Vyborg", "Vyrica", "Zarskoje Selo"]
      },
      {
        name: "Lipeck",
        cities: ["Chaplygin", "Dankov", "Dobrinka", "Grjazi", "Jelec", "Lebedjan", "Lipeck", "Usman", "Zadonsk"]
      },
      {
        name: "Magadan",
        cities: ["Jagodnoje", "Magadan", "Ola", "Omsukchan", "Palatka", "Sinegorje", "Susuman", "Ust-Omchug"]
      },
      {
        name: "Marij El",
        cities: []
      },
      {
        name: "Mordovija",
        cities: ["Ardatov", "Chamzinka", "Insar", "Komsomolskij", "Kovylkino", "Krasnoslobodsk", "Luhovka", "Romodanovo", "Ruzajevka", "Saransk", "Temnikov", "Torbeevo", "Zubova Poljana"]
      },
      {
        name: "Moscow",
        cities: ["Moscow"]
      },
      {
        name: "Moskovskaja Oblast",
        cities: []
      },
      {
        name: "Moskovskaya Oblast",
        cities: []
      },
      {
        name: "Moskva",
        cities: ["Moskva", "Vostochnyj", "Zeljenograd"]
      },
      {
        name: "Murmansk",
        cities: ["Apatity", "Gadzhievo", "Kandalaksha", "Kirovsk", "Kola", "Kovdor", "Monchegorsk", "Murmansk", "Murmashi", "Nikel", "Olenegorsk", "Ostrovnoj", "Poljarnye Zory", "Poljarnyj", "Revda", "Severomorsk", "Snezhnogorsk", "Zaozjorsk", "Zapoljarnyj", "Zeljenoborskij"]
      },
      {
        name: "Nenets",
        cities: ["Narjan-Mar"]
      },
      {
        name: "Nizhnij Novgorod",
        cities: []
      },
      {
        name: "Novgorod",
        cities: ["Borovichi", "Chudovo", "Krestcy", "Malaja Vishera", "Okulovka", "Pestovo", "Proletarij", "Solcy", "Staraja Russa", "Uglovka", "Valdaj", "Velikij Novgorod"]
      },
      {
        name: "Novokusnezk",
        cities: ["Novokusnezk"]
      },
      {
        name: "Novosibirsk",
        cities: ["Barabinsk", "Berdsk", "Bolotnoe", "Chany", "Cherepanovo", "Chulym", "Iskitim", "Karasuk", "Kargat", "Kochenjovo", "Kolcovo", "Kolyvan", "Krasnoobsk", "Krasnozerskoe", "Kujbyshev", "Kupino", "Linjovo", "Masljanino", "Novosibirsk", "Ob", "Suzun", "Tatarsk", "Toguchin"]
      },
      {
        name: "Omsk",
        cities: ["Bolsherechje", "Cherlak", "Isilkul", "Kalachinsk", "Kormilovka", "Ljubinskij", "Moskaljoni", "Muromcevo", "Nazyvajevsk", "Omsk", "Tara", "Tavricheskoje", "Tjukalinsk"]
      },
      {
        name: "Orenburg",
        cities: ["Abdulino", "Buguruslan", "Buzuluk", "Jasnyj", "Komarovskiy", "Kuvandyk", "Mednogorsk", "Novotroick", "Orenburg", "Orsk", "Sol-Ileck", "Sorochinsk"]
      },
      {
        name: "Orjol",
        cities: ["Bolhov", "Gaj", "Livny", "Mcensk", "Orjol", "Znamenka"]
      },
      {
        name: "Penza",
        cities: ["Bashmakovo", "Bekovo", "Belinskiy", "Kamenka", "Kolyshlej", "Kuzneck", "Mokshan", "Nikolsk", "Nizhnij Lomov", "Pachelma", "Penza", "Serdobsk", "Sursk", "Zarechnyj", "Zemetchino"]
      },
      {
        name: "Perm",
        cities: ["Aleksandrovsk", "Berezniki", "Chajkovskij", "Chermoz", "Chernushka", "Chusovoj", "Dobrjanka", "Gornozavodsk", "Gremjachinsk", "Gubaha", "Jajva", "Kizel", "Komsomolsky", "Krasnokamsk", "Krasnovishersk", "Kungur", "Lysva", "Novye Ljady", "Nytva", "Ocher", "Oktjabrskij", "Osa", "Pashija", "Perm", "Polazna", "Skalnyj", "Solikamsk", "Ugleuralskij", "Uralskij", "Usolje", "Vereshchagino", "Zvjozdnyj"]
      },
      {
        name: "Primorje",
        cities: ["Arsenjev", "Artjom", "Artjomovskij", "Bolshoj Kamen", "Dalnegorsk", "Dalnerechensk", "Dunaj", "Fokino", "Jaroslavskij", "Kavalerovo", "Kirovskiy", "Lesozavodsk", "Lipovcy", "Livadija", "Luchegorsk", "Nahodka", "Novoshahtinskij", "Partizansk", "Pogranichnyj", "Preobrazhenie", "Putjatin", "Sibircevo", "Slavjanka", "Spassk-Dalnij", "Tavrichanka", "Trudovoe", "Uglekamensk", "Uglovoe", "Ussurijsk", "Vladivostok", "Vrangel", "Zavodskoj"]
      },
      {
        name: "Pskov",
        cities: ["Dedovichi", "Dno", "Nevel", "Novosokolniki", "Opochka", "Ostrov", "Pechory", "Porhov", "Pskov", "Sebezh", "Strugi-Krasnye", "Velikije Luki"]
      },
      {
        name: "Pskovskaya Oblast",
        cities: []
      },
      {
        name: "Rjazan",
        cities: ["Kasimov", "Korablino", "Mihajlov", "Novomichurinsk", "Rjazan", "Rjazhsk", "Rybnoje", "Sasovo", "Shilovo", "Skopin"]
      },
      {
        name: "Rostov",
        cities: ["Ajutinskij", "Aksaj", "Azov", "Batajsk", "Belaja Kalitva", "Cimljansk", "Doneck", "Donskoj", "Gigant", "Glubokij", "Gornjackij", "Gukovo", "Kamenolomni", "Kamensk-Shahtinskij", "Konstantinovsk", "Krasnyj Sulin", "Lihovskoj", "Majskij", "Millerovo", "Morozovsk", "Novocherkassk", "Novoshahtinsk", "Proletarsk", "Rostov", "Rostov-na-Donu", "Salsk", "Semikarakorsk", "Shahty", "Sholohovskij", "Sinegorskij", "Sokolovo", "Taganrog", "Ust-Doneckij", "Volgodonsk", "Zernograd", "Zhirnov", "Zverevo"]
      },
      {
        name: "Saha",
        cities: ["Ajhan", "Aldan", "Cherskij", "Chulman", "Deputatskij", "Jakutsk", "Lensk", "Marha", "Mirnyj", "Nerjungri", "Njurba", "Oljokminsk", "Pokrovsk", "Sangar", "Serebrjanyj Bor", "Tiksi", "Tommot", "Udachnyj", "Ust-Nera", "Verhojansk", "Viljujsk"]
      },
      {
        name: "Sahalin",
        cities: ["Aleksandrovsk-Sahalinskij", "Dolinsk", "Gornozavodsk", "Holmsk", "Juzhno-Sahalinsk", "Korsakov", "Makarov", "Nevelsk", "Nogliki", "Oha", "Poronajsk", "Shahtjorsk", "Tymovskoje", "Uglegorsk"]
      },
      {
        name: "Samara",
        cities: ["Aleksejevka", "Bezenchuk", "Chapajevsk", "Fjodorovka", "Kinel", "Mirnyj", "Novokujbyshevsk", "Novosemejkino", "Oktjabrsk", "Otradnyj", "Pohvistnevo", "Povolzhskij", "Pribrezhnyj", "Roscinskij", "Samara", "Smyshljaevka", "Suhodol", "Syzran", "Timashjovo", "Toljatti", "Zhigulevsk"]
      },
      {
        name: "Samarskaya",
        cities: ["Togliatti"]
      },
      {
        name: "Sankt-Peterburg",
        cities: ["Saint Petersburg", "Sankt Peterburg"]
      },
      {
        name: "Saratov",
        cities: ["Arkadak", "Atkarsk", "Balakovo", "Balashov", "Bazarnyj Karabulak", "Dergachi", "Engels", "Hvalynsk", "Jershov", "Kalininsk", "Krasnoarmejsk", "Krasnyj Kut", "Marks", "Novouzensk", "Ozinki", "Petrovsk", "Privolzhskij", "Pugachjov", "Rtishchevo", "Saratov", "Shihany", "Stepnoe", "Svetlyj", "Tatishchevo", "Volsk"]
      },
      {
        name: "Smolensk",
        cities: ["Demidov", "Desnogorsk", "Dorogobuzh", "Gagarin", "Hislavichi", "Jarcevo", "Jelnja", "Pochinok", "Roslavl", "Rudnja", "Safonovo", "Smolensk", "Verhnedneprovskij", "Vjazma"]
      },
      {
        name: "Stavropol",
        cities: ["Blagodarnyj", "Budjonnovsk", "Georgijevsk", "Gorjachevodskij", "Inozemcevo", "Ipatovo", "Izobilnyj", "Jessentuki", "Kislovodsk", "Lermontov", "Mihajlovsk", "Mineralnyje Vody", "Neftekumsk", "Nevinnomyssk", "Novoaleksandrovsk", "Novopavlovsk", "Pjatigorsk", "Solnechnodolsk", "Stavropol", "Svetlograd", "Svobody", "Zeljenokumsk", "Zheleznovodsk"]
      },
      {
        name: "Sverdlovsk",
        cities: ["Alapajevsk", "Aramil", "Arti", "Artjomovskij", "Asbest", "Baranchinskij", "Belojarskij", "Berjozovskij", "Bisert", "Bogdanovich", "Bulanash", "Degtjarsk", "Ekaterinburg", "Irbit", "Ivdel", "Izumrud", "Jekaterinburg", "Kachkanar", "Kamensk-Uralskij", "Kamyshlov", "Karpinsk", "Kirovgrad", "Kolcovo", "Krasnoturinsk", "Krasnoufimsk", "Krasnouralsk", "Kushva", "Lesnoj", "Leviha", "Lobva", "Malysheva", "Mihajlovsk", "Monetnyj", "Nevjansk", "Nizhnie Sergi", "Nizhnij Tagil", "Nizhnjaja Salda", "Nizhnjaja Tura", "Novaja Ljalja", "Novouralsk", "Pervouralsk", "Polevskoj", "Pyshma", "Pyt-Jah", "Reftinskij", "Revda", "Rezh", "Serov", "Severouralsk", "Sosva", "Sredneuralsk", "Suhoj Log", "Svobodnyj", "Sysert", "Talica", "Tavda", "Troickij", "Turinsk", "Uralskij", "Verhnij Tagil", "Verhnjaja Pyshma", "Verhnjaja Salda", "Verhnjaja Sinyachiha", "Verhnjaja Tura", "Verhoturje", "Volchansk", "Yekaterinburg", "Zarechnyj", "Zjuzelskij"]
      },
      {
        name: "Tajmyrija",
        cities: ["Dudinka"]
      },
      {
        name: "Tambov",
        cities: ["Dmitrievka", "Inzhavino", "Kirsanov", "Kotovsk", "Michurinsk", "Morshansk", "Pervomajskij", "Rasskazovo", "Sosnovka", "Tambov", "Uvarovo", "Zherdevka", "Znamenka"]
      },
      {
        name: "Tatarstan",
        cities: ["Agryz", "Aksubajevo", "Aktjubinskij", "Aleksejevskoje", "Almetjevsk", "Arsk", "Aznakajevo", "Bavly", "Bugulma", "Buinsk", "Chistopol", "Dzhalil", "Jelabuga", "Kamskie Poljany", "Kazan", "Kukmor", "Leninogorsk", "Mamadysh", "Mendelejevsk", "Menzelinsk", "Naberezhnyje Chelny", "Nizhnekamsk", "Niznjaja Maktama", "Nurlat", "Tetjushi", "Urussu", "Vasiljevo", "Zainsk", "Zeljonodolsk"]
      },
      {
        name: "Tjumen",
        cities: ["Bogandinskij", "Borovskij", "Golyshmanovo", "Ishim", "Jalutorovosk", "Tjumen", "Tobolsk", "Vinzili", "Zavodoukovsk"]
      },
      {
        name: "Tomsk",
        cities: ["Asino", "Jaja", "Kolpashevo", "Seversk", "Strezhevoj", "Tomsk"]
      },
      {
        name: "Tula",
        cities: ["Agejevo", "Aleksin", "Beljov", "Bogoroditsk", "Bolohovo", "Donskoj", "Dubovka", "Jasnogorsk", "Jefremov", "Kimovsk", "Kirejevsk", "Kosaja Gora", "Leninskij", "Lipki", "Mendelejevskij", "Novomoskovsk", "Pervomajskij", "Plavsk", "Severo-Zadonsk", "Shchjokino", "Skuratovskij", "Sokolniki", "Sovetsk", "Suvorov", "Tovarkovskij", "Tula", "Uzlovaja", "Venjov"]
      },
      {
        name: "Tver",
        cities: ["Andreapol", "Bezheck", "Bologoe", "Kaljazin", "Kashin", "Kimry", "Konakovo", "Kuvshinovo", "Lihoslavl", "Maksatiha", "Ostashkov", "Ozjornyj", "Pelidovo", "Rameshki", "Redkino", "Rzhev", "Solnechnyj", "Starica", "Toropec", "Torzhok", "Tver", "Udomlja", "Vyshnij Volochok", "Zapadnaja Dvina"]
      },
      {
        name: "Tyva",
        cities: ["Ak-Dovurak", "Kyzyl"]
      },
      {
        name: "Udmurtija",
        cities: ["Balezino", "Glazov", "Igra", "Izhevsk", "Kambarka", "Kez", "Kizner", "Mozhga", "Sarapul", "Uva", "Votkinsk"]
      },
      {
        name: "Uljanovsk",
        cities: ["Barysh", "Cherdakly", "Dimitrovgrad", "Inza", "Isheevka", "Novospasskoe", "Novouljanovsk", "Sengilej", "Uljanovsk"]
      },
      {
        name: "Ulyanovskaya Oblast",
        cities: []
      },
      {
        name: "Ust-Orda",
        cities: ["Ust-Ordynskij"]
      },
      {
        name: "Vladimir",
        cities: ["Aleksandrov", "Balakirevo", "Gorohovec", "Gus-Hrustalnyj", "Jurjev Polskij", "Kameshkovo", "Karabanovo", "Kirzhach", "Kolchugino", "Kosterovo", "Kovrov", "Krasnaja Gorbatka", "Krasnyj Oktjabr", "Lakinsk", "Melenki", "Murom", "Novovjazniki", "Pokrov", "Raduzhnyj", "Sobinka", "Strunino", "Sudogda", "Suzdal", "Vjazniki", "Vladimir"]
      },
      {
        name: "Volgograd",
        cities: ["Dubovka", "Frolovo", "Gorkovskij", "Gorodishche", "Ilovlja", "Jelan", "Kalach-na-Donu", "Kamyshin", "Kotelnikovo", "Kotovo", "Krasnoslobodsk", "Leninsk", "Mihajlovka", "Nikolajevsk", "Nizhny Novgorod", "Novoanninskij", "Novonikolajevskij", "Pallasovka", "Petrov Val", "Serafimovich", "Surovikino", "Svetlyj Jar", "Urjupinsk", "Volgograd", "Volzhskij", "Zhirnovsk"]
      },
      {
        name: "Vologda",
        cities: ["Babajevo", "Belozjorsk", "Cherepovec", "Grjazovec", "Harovsk", "Kaduj", "Krasavino", "Sheksna", "Sokol", "Totma", "Velikij Ustjug", "Vologda", "Vytegra"]
      },
      {
        name: "Voronezh",
        cities: ["Anna", "Bobrov", "Boguchar", "Borisoglebsk", "Buturlinovka", "Ertil", "Gribanovskij", "Kalach", "Kamenka", "Kantemirovka", "Liski", "Novohopjorsk", "Novovoronezh", "Ostrogozhsk", "Pavlovsk", "Povorino", "Pridonskij", "Rossosh", "Semiluki", "Somovo", "Talovaja", "Voronezh"]
      }
    ],
    isoAlpha2: "RU",
    isoAlpha3: "RUS",
    isoNumeric: 643
  },
  {
    name: "Rwanda",
    flag: "🇷🇼",
    currency: {
      code: "RWF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Butare",
        cities: ["Butare", "Nyanza"]
      },
      {
        name: "Byumba",
        cities: ["Byumba"]
      },
      {
        name: "Cyangugu",
        cities: ["Cyangugu"]
      },
      {
        name: "Gikongoro",
        cities: ["Gikongoro"]
      },
      {
        name: "Gisenyi",
        cities: ["Gisenyi"]
      },
      {
        name: "Gitarama",
        cities: ["Gitarama"]
      },
      {
        name: "Kibungo",
        cities: ["Kibungo", "Rwamagana"]
      },
      {
        name: "Kibuye",
        cities: ["Kibuye"]
      },
      {
        name: "Kigali-ngali",
        cities: ["Kigali"]
      },
      {
        name: "Ruhengeri",
        cities: ["Ruhengeri"]
      }
    ],
    isoAlpha2: "RW",
    isoAlpha3: "RWA",
    isoNumeric: 646
  },
  {
    name: "Réunion",
    flag: "🇷🇪",
    currency: {
      code: "EUR"
    },
    states: [
      {
        name: "Saint-Benoit",
        cities: ["Bras-Panon", "Saint-Andre", "Saint-Benoit", "Sainte-Rose", "Salazie"]
      },
      {
        name: "Saint-Denis",
        cities: ["La Possession", "Le Port", "Saint-Denis", "Sainte-Marie", "Sainte-Suzanne"]
      },
      {
        name: "Saint-Paul",
        cities: ["L''Etang-Sale", "Les Aviron", "Les Trois-Bassins", "Saint-Leu", "Saint-Paul"]
      },
      {
        name: "Saint-Pierre",
        cities: ["Cilaos", "Entre-Deux", "Le Tampon", "Petite-Ile", "Saint-Joseph", "Saint-Louis", "Saint-Philippe", "Saint-Pierre"]
      }
    ]
  },
  {
    name: "Saint Helena",
    flag: "🇸🇭",
    currency: {
      code: "SHP"
    },
    states: [
      {
        name: "Ascension",
        cities: ["Georgetown"]
      },
      {
        name: "Gough Island",
        cities: []
      },
      {
        name: "Saint Helena",
        cities: []
      },
      {
        name: "Tristan da Cunha",
        cities: []
      }
    ]
  },
  {
    name: "Saint Kitts and Nevis",
    flag: "🇰🇳",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Christ Church Nichola Town",
        cities: []
      },
      {
        name: "Saint Anne Sandy Point",
        cities: []
      },
      {
        name: "Saint George Basseterre",
        cities: []
      },
      {
        name: "Saint George Gingerland",
        cities: []
      },
      {
        name: "Saint James Windward",
        cities: []
      },
      {
        name: "Saint John Capesterre",
        cities: []
      },
      {
        name: "Saint John Figtree",
        cities: []
      },
      {
        name: "Saint Mary Cayon",
        cities: []
      },
      {
        name: "Saint Paul Capesterre",
        cities: []
      },
      {
        name: "Saint Paul Charlestown",
        cities: []
      },
      {
        name: "Saint Peter Basseterre",
        cities: []
      },
      {
        name: "Saint Thomas Lowland",
        cities: []
      },
      {
        name: "Saint Thomas Middle Island",
        cities: []
      },
      {
        name: "Trinity Palmetto Point",
        cities: []
      }
    ],
    isoAlpha2: "KN",
    isoAlpha3: "KNA",
    isoNumeric: 659
  },
  {
    name: "Saint Lucia",
    flag: "🇱🇨",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Anse-la-Raye",
        cities: ["Anse-la-Raye"]
      },
      {
        name: "Canaries",
        cities: ["Canaries"]
      },
      {
        name: "Castries",
        cities: ["Castries", "Choc"]
      },
      {
        name: "Choiseul",
        cities: ["Choiseul"]
      },
      {
        name: "Dennery",
        cities: ["Dennery"]
      },
      {
        name: "Gros Inlet",
        cities: []
      },
      {
        name: "Laborie",
        cities: ["Laborie"]
      },
      {
        name: "Micoud",
        cities: ["Micoud"]
      },
      {
        name: "Soufriere",
        cities: ["Soufriere"]
      },
      {
        name: "Vieux Fort",
        cities: []
      }
    ],
    isoAlpha2: "LC",
    isoAlpha3: "LCA",
    isoNumeric: 662
  },
  {
    name: "Saint Pierre and Miquelon",
    flag: "🇵🇲",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Miquelon-Langlade",
        cities: ["Miquelon"]
      },
      {
        name: "Saint-Pierre",
        cities: ["Saint-Pierre"]
      }
    ],
    isoAlpha2: "PM",
    isoAlpha3: "SPM",
    isoNumeric: 666
  },
  {
    name: "Saint Vincent and the Grenadines",
    flag: "🇻🇨",
    currency: {
      code: "XCD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Charlotte",
        cities: ["Biabou", "Byera", "Georgetown"]
      },
      {
        name: "Grenadines",
        cities: ["Dovers", "Hamilton", "Port Elizabeth"]
      },
      {
        name: "Saint Andrew",
        cities: []
      },
      {
        name: "Saint David",
        cities: []
      },
      {
        name: "Saint George",
        cities: []
      },
      {
        name: "Saint Patrick",
        cities: []
      }
    ],
    isoAlpha2: "VC",
    isoAlpha3: "VCT",
    isoNumeric: 670
  },
  {
    name: "Samoa",
    flag: "🇼🇸",
    currency: {
      code: "WST",
      name: "Tala",
      symbol: "WS$"
    },
    states: [
      {
        name: "A''ana",
        cities: ["Falelatai"]
      },
      {
        name: "Aiga-i-le-Tai",
        cities: ["Mulifanua"]
      },
      {
        name: "Atua",
        cities: ["Solosolo"]
      },
      {
        name: "Fa''asaleleaga",
        cities: ["Safotulafai"]
      },
      {
        name: "Gaga''emauga",
        cities: ["Samalae''ulu"]
      },
      {
        name: "Gagaifomauga",
        cities: ["A''opo"]
      },
      {
        name: "Palauli",
        cities: ["Taga"]
      },
      {
        name: "Satupa''itea",
        cities: ["Gautavai"]
      },
      {
        name: "Tuamasaga",
        cities: ["Apia"]
      },
      {
        name: "Va''a-o-Fonoti",
        cities: ["Samamea"]
      },
      {
        name: "Vaisigano",
        cities: ["Neiafu"]
      }
    ],
    isoAlpha2: "WS",
    isoAlpha3: "WSM",
    isoNumeric: 882
  },
  {
    name: "San Marino",
    flag: "🇸🇲",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Acquaviva",
        cities: ["Acquaviva"]
      },
      {
        name: "Borgo Maggiore",
        cities: []
      },
      {
        name: "Chiesanuova",
        cities: ["Chiesanuova"]
      },
      {
        name: "Domagnano",
        cities: ["Domagnano"]
      },
      {
        name: "Faetano",
        cities: ["Faetano"]
      },
      {
        name: "Fiorentino",
        cities: ["Fiorentino"]
      },
      {
        name: "Montegiardino",
        cities: ["Montegiardino"]
      },
      {
        name: "San Marino",
        cities: []
      },
      {
        name: "Serravalle",
        cities: ["Serravalle"]
      }
    ],
    isoAlpha2: "SM",
    isoAlpha3: "SMR",
    isoNumeric: 674
  },
  {
    name: "Saudi Arabia",
    flag: "🇸🇦",
    currency: {
      code: "SAR",
      name: "Rial",
      symbol: "﷼"
    },
    states: [
      {
        name: "Al Khobar",
        cities: []
      },
      {
        name: "Aseer",
        cities: ["Mahayel"]
      },
      {
        name: "Ash Sharqiyah",
        cities: []
      },
      {
        name: "Asir",
        cities: ["Abha", "Abu ''Aris", "Khamis Mushayt", "Qal''at Bishah"]
      },
      {
        name: "Central Province",
        cities: []
      },
      {
        name: "Eastern Province",
        cities: []
      },
      {
        name: "Ha''il",
        cities: ["Ha''il"]
      },
      {
        name: "Jawf",
        cities: ["Jawf", "Sakakah"]
      },
      {
        name: "Jizan",
        cities: ["Jizan", "Sabya"]
      },
      {
        name: "Makkah",
        cities: ["Makkah", "Rabig", "al-Hawiyah", "at-Ta''if"]
      },
      {
        name: "Najran",
        cities: ["Dar''iyah", "Najran", "Sharurah"]
      },
      {
        name: "Qasim",
        cities: ["Unayzah", "Buraydah", "ar-Rass"]
      },
      {
        name: "Tabuk",
        cities: ["Tabuk", "Umm Lajj"]
      },
      {
        name: "Western Province",
        cities: []
      },
      {
        name: "al-Bahah",
        cities: ["al-Bahah"]
      },
      {
        name: "al-Hudud-ash-Shamaliyah",
        cities: ["Ara''ar", "Rafha", "Turayf", "al-Qurayyat"]
      },
      {
        name: "al-Madinah",
        cities: ["Yanbu", "al-Madinah"]
      },
      {
        name: "ar-Riyad",
        cities: ["Afif", "ad-Dawadimi", "ad-Dilam", "al-Kharj", "al-Majma''ah", "ar-Riyad", "az-Zulfi"]
      }
    ],
    isoAlpha2: "SA",
    isoAlpha3: "SAU",
    isoNumeric: 682
  },
  {
    name: "Senegal",
    flag: "🇸🇳",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Dakar",
        cities: ["Dakar"]
      },
      {
        name: "Diourbel",
        cities: ["Bambey", "Diourbel", "Mbacke", "Touba"]
      },
      {
        name: "Fatick",
        cities: ["Diofior", "Fatick", "Foundiougne", "Gossas", "Guinguineo", "Kahone", "Passy", "Sokone"]
      },
      {
        name: "Kaolack",
        cities: ["Gandiaye", "Kaffrine", "Kaolack", "Koungheul", "Medina", "Ndoffane Lagheme", "Nioro du Rip", "Toubakouta"]
      },
      {
        name: "Kolda",
        cities: ["Dabo", "Goudomp", "Kolda", "Marsassoum", "Medina Gounas", "Sedhiou", "Velingara", "Wassadou"]
      },
      {
        name: "Louga",
        cities: ["Dahra", "Kebemer", "Linguere", "Louga"]
      },
      {
        name: "Saint-Louis",
        cities: ["Dagana", "Gollere", "Kanel", "Matam", "Ndioum", "Ourossogui", "Podor", "Richard Toll", "Saint-Louis", "Semme", "Thilogne", "Waounde"]
      },
      {
        name: "Tambacounda",
        cities: ["Bakel", "Kedougou", "Tambacounda"]
      },
      {
        name: "Thies",
        cities: ["Joal-Fadiouth", "Kayar", "Khombole", "Mbour", "Meckhe", "Nguekhokh", "Pout", "Thiadiaye", "Thies", "Tivaouane"]
      },
      {
        name: "Ziguinchor",
        cities: ["Bignona", "Oussouye", "Thionck-Essyl", "Ziguinchor"]
      }
    ],
    isoAlpha2: "SN",
    isoAlpha3: "SEN",
    isoNumeric: 686
  },
  {
    name: "Serbia",
    flag: "🇷🇸",
    currency: {
      code: "RSD"
    },
    states: [
      {
        name: "Central Serbia",
        cities: []
      },
      {
        name: "Kosovo and Metohija",
        cities: []
      },
      {
        name: "Vojvodina",
        cities: []
      }
    ]
  },
  {
    name: "Seychelles",
    flag: "🇸🇨",
    currency: {
      code: "SCR",
      name: "Rupee",
      symbol: "₨"
    },
    states: [
      {
        name: "Anse Boileau",
        cities: []
      },
      {
        name: "Anse Royale",
        cities: []
      },
      {
        name: "Cascade",
        cities: ["Cascade"]
      },
      {
        name: "Takamaka",
        cities: ["Takamaka"]
      },
      {
        name: "Victoria",
        cities: ["Mahe"]
      }
    ],
    isoAlpha2: "SC",
    isoAlpha3: "SYC",
    isoNumeric: 690
  },
  {
    name: "Sierra Leone",
    flag: "🇸🇱",
    currency: {
      code: "SLL",
      name: "Leone",
      symbol: "Le"
    },
    states: [
      {
        name: "Eastern",
        cities: ["Biama", "Daru", "Kailahun", "Kenema", "Koidu", "Koindu", "Pendembu", "Sefadu", "Segbwema", "Yengema"]
      },
      {
        name: "Northern",
        cities: ["Kabala", "Kambia", "Lungi", "Lunsar", "Magburaka", "Makeni", "Mambolo", "Moyamba", "Pepel", "Port Loko", "Yele"]
      },
      {
        name: "Southern",
        cities: ["Binkolo", "Bo", "Bonthe", "Bumpe", "Matru", "Pujehun", "Taiama"]
      },
      {
        name: "Western",
        cities: ["Freetown", "York"]
      }
    ],
    isoAlpha2: "SL",
    isoAlpha3: "SLE",
    isoNumeric: 694
  },
  {
    name: "Singapore",
    flag: "🇸🇬",
    currency: {
      code: "SGD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Singapore",
        cities: ["Singapore"]
      }
    ],
    isoAlpha2: "SG",
    isoAlpha3: "SGP",
    isoNumeric: 702
  },
  {
    name: "Slovakia",
    flag: "🇸🇰",
    currency: {
      code: "SKK",
      name: "Koruna",
      symbol: "Sk"
    },
    states: [
      {
        name: "Banskobystricky",
        cities: ["Banska Bystrica", "Banska Shtiavnica", "Brezno", "Chierny Balog", "Detva", "Fil''akovo", "Hnusht''a", "Hrinova", "Kremnica", "Krupina", "Luchenec", "Nova Bana", "Podbrezova", "Poltar", "Revuca", "Rimavska Sobota", "Sliach", "Tisovec", "Tornal''a", "Vel''ky Krtish", "Vlkanova", "Zharnovica", "Zhiar", "Ziar nad Hronom", "Zvolen"]
      },
      {
        name: "Bratislavsky",
        cities: ["Bernolakovo", "Bratislava", "Ivanka pri Dunaji", "Malacky", "Modra", "Pezinok", "Senec", "Shenkvice", "Stupava", "Svaty Jur"]
      },
      {
        name: "Kosicky",
        cities: ["Chana", "Chierna nad Tisou", "Dobshina", "Gelnica", "Kosice", "Kral''ovsky Chlmec", "Krompachy", "Medzev", "Michalovce", "Moldava nad Bodvou", "Pavlovce nad Uhom", "Rozhnava", "Sechovce", "Smizhany", "Sobrance", "Strazhske", "Trebishov", "Vel''ke Kapushany", "Vranov"]
      },
      {
        name: "Nitriansky",
        cities: ["Dvory nad Zhitavou", "Hurbanovo", "Kolarovo", "Komarno", "Komjatice", "Levice", "Levocha", "Mocenok", "Nesvady", "Nitra", "Nove Zamky", "Palarikovo", "Shahy", "Shal''a", "Shturovo", "Shurany", "Svodin", "Tlmache", "Tvrdoshovce", "Vrable", "Zlate Moravce"]
      },
      {
        name: "Presovsky",
        cities: ["Bardejov", "Giraltovce", "Humenne", "Jarovnice", "Kezhmarok", "Lipany", "Medzilaborce", "Podolinec", "Poprad", "Preshov", "Presov", "Sabinov", "Snina", "Spishska Bela", "Spishska Nova Ves", "Spishske Podhradie", "Stara L''ubovna", "Stropkov", "Svidnik", "Svit", "Vel''ky Sharish", "Vysoke Tatry"]
      },
      {
        name: "Trenciansky",
        cities: ["Banovce", "Belusha", "Bojnice", "Boshany", "Dubnica", "Handlova", "Ilava", "Lednicke Rovne", "Lendak", "Myjava", "Nemshova", "Nova Dubnica", "Novaky", "Nove Mesto", "Partizanske", "Povazhska Bystrica", "Prievidza", "Puchov", "Stara Tura", "Topol''chany", "Trenchianske Teplice", "Trenchin", "Trencin"]
      },
      {
        name: "Trnavsky",
        cities: ["Brezova pod Bradlom", "Dunajska Streda", "Gabchikovo", "Galanta", "Gbely", "Hlohovec", "Holich", "Kuty", "Leopoldov", "Piesht''any", "Piestany", "Senica", "Sered", "Shamorin", "Shashtin-Strazhe", "Shoporna", "Skalica", "Sladkovichovo", "Trnava", "Vel''ke Ul''any", "Vel''ky Meder", "Vrbove"]
      },
      {
        name: "Zilinsky",
        cities: ["Bytcha", "Chadca", "Chierne", "Dolny Kubin", "Krasno nad Kysucou", "Kysucke Nove Mesto", "Liptovsky Hradok", "Liptovsky Mikulash", "Martin", "Namestovo", "Nizhna", "Oshchadnica", "Rabcha", "Rajec", "Rakova", "Ruzhomberok", "Ruzomberok", "Shtiavnik", "Skalite", "Suchany", "Terchova", "Trstena", "Turany", "Turchianske Teplice", "Turzovka", "Tvrdoshin", "Vel''ke Rovne", "Vrutky", "Zakamenne", "Zhilina", "Zilina"]
      }
    ],
    isoAlpha2: "SK",
    isoAlpha3: "SVK",
    isoNumeric: 703
  },
  {
    name: "Slovenia",
    flag: "🇸🇮",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "Benedikt",
        cities: ["Semic", "Skofljica", "Zelezniki"]
      },
      {
        name: "Gorenjska",
        cities: ["Begunje na Gorenjskem", "Bistrica ob Trzhichu", "Bled", "Blejska Dobrava", "Bohinjska Bistrica", "Britof", "Cerklje na Gorenjskem", "Golnik", "Gorenja Vas", "Hrastje", "Hrushica", "Jesenice", "Kokrica", "Koroshka Bela", "Kranj", "Kranjska Gora", "Krizhe", "Kropa", "Lesce", "Mlaka pri Kranju", "Mojstrana", "Preddvor", "Predoslje", "Pristava", "Radovljica", "Shenchur", "Shkofja Loka", "Slovenski Javornik", "Spodnja Besnica", "Spodnje Gorje", "Stara Loka", "Sveti Duh", "Trzhich", "Visoko", "Zasip", "Zgornje Bitnje", "Zhelezniki", "Zhiri"]
      },
      {
        name: "Gorishka",
        cities: ["Ajdovshchina", "Bilje", "Bovec", "Branik", "Cerkno", "Deskle", "Idrija", "Kanal", "Kobarid", "Kromberk", "Lokavec", "Miren", "Nova Gorica", "Prvachina", "Renche", "Rozhna Dolina", "Shempas", "Shempeter", "Solkan", "Spodnja Idrija", "Tolmin", "Vipava", "Vrtojba"]
      },
      {
        name: "Jugovzhodna Slovenija",
        cities: []
      },
      {
        name: "Koroshka",
        cities: ["Chrna na Koroshkem", "Dravograd", "Legen", "Mezhica", "Mislinja", "Muta", "Otishki Vrh", "Pameche", "Podgorje", "Prevalje", "Radlje ob Dravi", "Ravne", "Shmartno pri Slovenj Gradcu", "Slovenj Gradec", "Vuhred", "Vuzenica"]
      },
      {
        name: "Notranjsko-krashka",
        cities: ["Cerknica", "Ilirska Bistrica", "Pivka", "Postojna", "Rakek", "Stari trg pri Lozhu"]
      },
      {
        name: "Obalno-krashka",
        cities: ["Ankaran", "Bertoki", "Dekani", "Divacha", "Hrvatni", "Izola", "Jagodje", "Koper", "Lucija", "Pareceg", "Piran", "Pobegi", "Portorozh", "Prade", "Secha", "Sezhana", "Spodnje Shkofije", "Sveti Anton"]
      },
      {
        name: "Obcina Domzale",
        cities: []
      },
      {
        name: "Obcina Vitanje",
        cities: []
      },
      {
        name: "Osrednjeslovenska",
        cities: ["Borovnica", "Brezovica pri Ljubljani", "Dob", "Dobrova", "Domzhale", "Dragomer", "Grosuplje", "Horjul", "Ig", "Ivanchna Gorica", "Kamnik", "Komenda", "Lavrica", "Litija", "Ljubljana", "Log pri Brezovici", "Logatec", "Medvode", "Mekinje", "Mengesh", "Moravche", "Notranje", "Podgorje", "Preserje pri Radomljah", "Radomlje", "Rovte", "Shentvid pri Stichni", "Shkofljica", "Shmarca", "Shmartno pri Litiji", "Smarje-Sap", "Trzin", "Verd", "Vir", "Vishnja Gora", "Vnanje Gorice", "Vodice", "Vrhnika", "Zgornje Pirniche"]
      },
      {
        name: "Podravska",
        cities: ["Bistrica ob Dravi", "Bresternica", "Bukovci", "Dogoshe", "Dornava", "Fram", "Hotinja Vas", "Kamnica", "Kidrichevo", "Koshaki", "Krchevina pri Vurbergu", "Lenart", "Limbush", "Lovrenc na Pohorju", "Maribor", "Miklavzh na Dravskem Polju", "Ormozh", "Pekre", "Pesnica pri Mariboru", "Pobrezhje", "Podvinci", "Poljchane", "Pragersko", "Ptuj", "Rache", "Radizel", "Razvanje", "Rogoza", "Rushe", "Selnica ob Dravi", "Selnica ob Muri", "Shentilj", "Skoke", "Slovenska Bistrica", "Spodnja Polskava", "Spodnje Hoche", "Spodnji Duplek", "Spuhlja", "Sredishche ob Dravi", "Stojnci", "Zgornja Polskava", "Zgornje Poljchane", "Zgornji Duplek"]
      },
      {
        name: "Pomurska",
        cities: ["Bakovci", "Beltinci", "Chernelavci", "Chrenshovci", "Dobrovnik", "Doklezhovje", "Ganchani", "Gornja Radgona", "Izhakovci", "Krog", "Lendava", "Lipovci", "Ljutomer", "Melinci", "Murska Sobota", "Odranci", "Petishovci", "Radenci", "Rakichan", "Turnishche", "Velika Polana", "Verzej"]
      },
      {
        name: "Savinjska",
        cities: ["Breg pri Polzeli", "Celje", "Gornji Grad", "Gotovlje", "Kasaze", "Lashko", "Ljubechna", "Ljubno ob Savinji", "Loka pri Zusmu", "Lokovica", "Mozirje", "Naklo", "Nazarje", "Oplotnica", "Petrovche", "Polzela", "Prebold", "Radeche", "Ravne", "Rimske Toplica", "Rogashka Slatina", "Rogatec", "Sentjernej", "Shempeter", "Shentjur", "Shkale", "Shmarje pri Jelshah", "Shoshtanj", "Shtore", "Slovenske Konjice", "Topolshica", "Trnovlje pri Celju", "Velenje", "Vitanje", "Vojnik", "Zabukovica", "Zadobrova", "Zhalec", "Zreche"]
      },
      {
        name: "Slovenian Littoral",
        cities: []
      },
      {
        name: "Spodnjeposavska",
        cities: ["Brestanica", "Brezhice", "Krshko", "Leskovac pri Krshkem", "Senovo", "Sevnica"]
      },
      {
        name: "Zasavska",
        cities: ["Dol pri Hrastniku", "Hrastnik", "Izlake", "Kisovec", "Trbovlje", "Zagorje ob Savi"]
      }
    ],
    isoAlpha2: "SI",
    isoAlpha3: "SVN",
    isoNumeric: 705
  },
  {
    name: "Solomon Islands",
    flag: "🇸🇧",
    currency: {
      code: "SBD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Central",
        cities: ["Tulagi"]
      },
      {
        name: "Choiseul",
        cities: ["Taro Island"]
      },
      {
        name: "Guadalcanal",
        cities: ["Honiara"]
      },
      {
        name: "Isabel",
        cities: ["Buala"]
      },
      {
        name: "Makira and Ulawa",
        cities: []
      },
      {
        name: "Malaita",
        cities: ["Auki"]
      },
      {
        name: "Rennell and Bellona",
        cities: []
      },
      {
        name: "Temotu",
        cities: ["Lata"]
      },
      {
        name: "Western",
        cities: ["Gizo"]
      }
    ],
    isoAlpha2: "SB",
    isoAlpha3: "SLB",
    isoNumeric: 90
  },
  {
    name: "Somalia",
    flag: "🇸🇴",
    currency: {
      code: "SOS",
      name: "Shilling",
      symbol: "S"
    },
    states: [
      {
        name: "Awdal",
        cities: ["Baki", "Borama", "Gebilay", "Sayla"]
      },
      {
        name: "Bakol",
        cities: ["Tayeglo", "Xuddur", "Yet"]
      },
      {
        name: "Banadir",
        cities: ["Muqdisho"]
      },
      {
        name: "Bari",
        cities: ["Alula", "Bandarbeyla", "Bandarmu''ayo", "Bargal", "Bereda", "Bosaso", "Iskushuban", "Qandala", "Qardho", "Xafun"]
      },
      {
        name: "Bay",
        cities: ["Baydhabo", "Bur Hakkaba", "Dinsor"]
      },
      {
        name: "Galgudug",
        cities: ["Elbur", "Eldhere", "Dhusa Marreb"]
      },
      {
        name: "Gedo",
        cities: ["Bardhere", "Dolaw", "Dujuma", "Garbaharey", "Luq", "Sa''o", "Wajid"]
      },
      {
        name: "Hiran",
        cities: ["Bal''ad", "Beled Weyne", "Bulobarde", "Jalalassi"]
      },
      {
        name: "Jubbada Hose",
        cities: []
      },
      {
        name: "Jubbadha Dexe",
        cities: []
      },
      {
        name: "Mudug",
        cities: ["Galka''yo", "Hobyo", "Xarardhere"]
      },
      {
        name: "Nugal",
        cities: ["Eyl", "Garowe", "Las''anod"]
      },
      {
        name: "Sanag",
        cities: ["Erigabo", "Lasqoray"]
      },
      {
        name: "Shabellaha Dhexe",
        cities: []
      },
      {
        name: "Shabellaha Hose",
        cities: []
      },
      {
        name: "Togdher",
        cities: ["Ek", "Bur''o", "Odweyne"]
      },
      {
        name: "Woqoyi Galbed",
        cities: []
      }
    ],
    isoAlpha2: "SO",
    isoAlpha3: "SOM",
    isoNumeric: 706
  },
  {
    name: "South Africa",
    flag: "🇿🇦",
    currency: {
      code: "ZAR",
      name: "Rand",
      symbol: "R"
    },
    states: [
      {
        name: "Eastern Cape",
        cities: []
      },
      {
        name: "Free State",
        cities: []
      },
      {
        name: "Gauteng",
        cities: ["Alberton", "Alrode", "Benmore", "Benoni", "Boksburg", "Booysens", "Brakpan", "Bronkhorstspruit", "Bryanston", "Carltonville", "Centurion", "Cullinan", "Dainfern", "Edenvale", "Ferndale", "Fourways", "Gardenview", "Gauteng", "Grant Park", "Heidelberg", "Isando", "Johannesburg", "Kelvin", "Krugersdorp", "Linmeyer", "Maraisburg", "Midrand", "Nigel", "Northmead", "Petervale", "Pinegowrie", "Pretoria", "Primrose", "Randburg", "Randfontein", "Randvaal", "Rivonia", "Robertville", "Soweto", "Springs", "Temba", "Tembisa", "Troyeville", "Vanderbijlpark", "Vereeniging", "Verwoerdburg", "Vorna Valley", "Wadeville", "Westonaria"]
      },
      {
        name: "Kempton Park",
        cities: []
      },
      {
        name: "Kramerville",
        cities: ["Sandton"]
      },
      {
        name: "KwaZulu Natal",
        cities: []
      },
      {
        name: "Limpopo",
        cities: ["Bela-Bela", "Dendron", "Duiwelskloof", "Ellisras", "Giyani", "Lebowakgomo", "Louis Trichardt", "Lulekani", "Mankweng", "Messina", "Mogalakwena", "Mutale", "Nkowakowa", "Nylstroom", "Phalaborwa", "Pietersburg", "Polokwane", "Soekmekaar", "Southdale", "Thohoyandou", "Thulamahashe", "Tzaneen"]
      },
      {
        name: "Mpumalanga",
        cities: ["Botleng", "Ekangala", "Embalenhle", "Emjindini", "Empuluzi", "Emzinoni", "Ermelo", "Ethandakukhanja", "Groblersdal", "Komatipoort", "Kriel", "KwaZanele", "Kwazamokuhle", "Lebohang", "Marblehall", "Mashishing", "Mhluzi", "Nelspruit", "Phola", "Sakhile", "Secunda", "Siyabuswa", "Siyathemba", "Siyathuthuka", "Vukuzakhe", "Witbank", "Witrivier", "eLukwatini"]
      },
      {
        name: "North West",
        cities: []
      },
      {
        name: "Northern Cape",
        cities: []
      },
      {
        name: "Parow",
        cities: ["Parow"]
      },
      {
        name: "Table View",
        cities: []
      },
      {
        name: "Umtentweni",
        cities: ["Umtentweni"]
      },
      {
        name: "Western Cape",
        cities: []
      }
    ],
    isoAlpha2: "ZA",
    isoAlpha3: "ZAF",
    isoNumeric: 710
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    flag: "🇬🇸",
    currency: {
      code: "GBP",
      name: "Pound",
      symbol: "£"
    },
    states: [
      {
        name: "South Georgia",
        cities: []
      }
    ],
    isoAlpha2: "GS",
    isoAlpha3: "SGS",
    isoNumeric: 239
  },
  {
    name: "South Korea",
    flag: "🇰🇷",
    currency: {
      code: "KRW"
    },
    states: [
      {
        name: "Busan",
        cities: ["Busan"]
      },
      {
        name: "Cheju",
        cities: ["Aeweol", "Cheju", "Seogwipo"]
      },
      {
        name: "Chollabuk",
        cities: ["Cheonju", "Chongup", "Iksan", "Kimje", "Kochang", "Kunsan", "Namwon", "Puan"]
      },
      {
        name: "Chollanam",
        cities: ["Haenam", "Hwasun", "Kwangyang", "Kwangyang Up", "Mokpo", "Naju", "Peolgyo", "Suncheon", "Yeocheon", "Yeosu", "Yonggwang"]
      },
      {
        name: "Chungbuk",
        cities: ["Cheongwon-gun", "Eumsung-Kun", "Jinchunkun", "Okcheon-gun", "Um Sung Gun"]
      },
      {
        name: "Chungcheongbuk",
        cities: ["Chechon", "Cheongju", "Chincheon", "Chungju", "Jincheon-gun", "Okchon", "Yongdong"]
      },
      {
        name: "Chungcheongnam",
        cities: ["Asan", "Cheonan", "Chochiwon", "Geumsan-Gun", "Hongseong", "Kongju", "Kumsan", "Nonsan", "Poryong", "Puyeo", "Seonghwan", "Seosan", "Taean", "Taesan", "Tangjin", "Yesan", "Yonmu"]
      },
      {
        name: "Chungnam",
        cities: ["Chonan", "Danjin-gun", "Gongjusi"]
      },
      {
        name: "Daegu",
        cities: ["Daegu", "Dalseo-gu"]
      },
      {
        name: "Gangwon-do",
        cities: ["Chungcheong", "Hoengseong", "Mummakeup", "Wonju"]
      },
      {
        name: "Goyang-si",
        cities: ["Gimhae", "Goyang-si"]
      },
      {
        name: "Gyeonggi-do",
        cities: ["Ansan", "Anyang", "Anyang-Si", "Anyangsi", "Buchon", "Buchun-Si", "Byeoryangdong", "Dongan-gu", "Gimpo City", "Goyang", "Gupo-si", "Guri-Si", "Gwacheon Si", "Gwangju-Si", "Hwaseong-si", "Icheon-si", "Iljuk-myeon", "Kwangju", "Pocheon-Si", "Seongnam", "Shihung-Si", "Siheung", "Sihung-si", "Suwon", "Uijeongbu-dong", "Uiwang", "Yangju", "Yangpyeong-Gun", "Yeokbuk-Dong-Si"]
      },
      {
        name: "Gyeongsang",
        cities: []
      },
      {
        name: "Gyeongsangnam-do",
        cities: ["Changwon", "Gimhae-si"]
      },
      {
        name: "Incheon",
        cities: ["Incheon", "Kanghwa", "Namdongku"]
      },
      {
        name: "Jeju-Si",
        cities: ["Jeju", "Yeongpyeong-Dong"]
      },
      {
        name: "Jeonbuk",
        cities: ["Jeonju-Si"]
      },
      {
        name: "Kangweon",
        cities: ["Chuncheon", "Hongcheon", "Kangneung", "Samchok", "Seokcho", "Taebaek", "Tonghae", "Weonju", "Yeongweol"]
      },
      {
        name: "Kwangju",
        cities: ["Kwangju"]
      },
      {
        name: "Kyeonggi",
        cities: ["Ansan", "Anseong", "Anyang", "Chongok", "Euijeongbu", "Euiwang", "Hanam", "Hoechon", "Hwado", "Hwasung", "Ichon", "Kihung", "Kimpo", "Koyang", "Kumchon", "Kunpo", "Kuri", "Kwacheon", "Kwangju", "Kwangmyeong", "Munsan", "Namyangju", "Osan", "Paengseong", "Pochon", "Pubal", "Pucheon", "Pyeongtaek", "Seongnam", "Shiheung", "Suweon", "Taean", "Tongducheon", "Wabu", "Yeoju", "Yongin"]
      },
      {
        name: "Kyeongsangbuk",
        cities: ["Andong", "Angang", "Hayang", "Heunghae", "Kimcheon", "Kumi", "Kyeongju", "Kyeongsan", "Mungyong", "Ochon", "Oedong", "Pohang", "Sangju", "Seonsan", "Waegwan", "Yechon", "Yeongcheon", "Yeongju", "Yeonil"]
      },
      {
        name: "Kyeongsangnam",
        cities: ["Changweon", "Chinhae", "Chinju", "Chinyeong", "Keoje", "Kimhae", "Kochang", "Koseong", "Masan", "Miryang", "Naeso", "Sacheon", "Sinhyeon", "Tongyong", "Ungsang", "Yangju", "Yangsan"]
      },
      {
        name: "Kyonggi-do",
        cities: ["Anyang-Si", "Bucheon", "Paju", "Sungnamshi", "Suwon", "Uijongbu", "Yangju"]
      },
      {
        name: "Kyungbuk-Do",
        cities: ["Gumi-Shi", "Kyungsan", "Youngcheon-Si"]
      },
      {
        name: "Kyunggi-Do",
        cities: ["Bundang", "Gunpo", "Yangu"]
      },
      {
        name: "Kyunggi-do",
        cities: ["Pochun", "Yangju", "Yonggi"]
      },
      {
        name: "Pusan",
        cities: ["Kijang", "Pusan"]
      },
      {
        name: "Seoul",
        cities: ["Seoul"]
      },
      {
        name: "Sudogwon",
        cities: ["Paju"]
      },
      {
        name: "Taegu",
        cities: ["Hwawon", "Taegu"]
      },
      {
        name: "Taejeon",
        cities: ["Taejeon"]
      },
      {
        name: "Taejon-gwangyoksi",
        cities: ["Daejeon"]
      },
      {
        name: "Ulsan",
        cities: ["Nongso", "Ulsan"]
      },
      {
        name: "Wonju",
        cities: ["Heungup-Myun"]
      },
      {
        name: "gwangyoksi",
        cities: ["Inchon", "Pusan", "Taejon"]
      }
    ]
  },
  {
    name: "South Sudan",
    flag: "🇸🇸",
    currency: {
      code: "SSP"
    },
    states: [
      {
        name: "Central Equatoria",
        cities: []
      }
    ]
  },
  {
    name: "Spain",
    flag: "🇪🇸",
    currency: {
      code: "EUR",
      name: "Euro",
      symbol: "€"
    },
    states: [
      {
        name: "A Coruna",
        cities: []
      },
      {
        name: "Alacant",
        cities: ["ALbatera", "Alacant", "Alcoi", "Almoradi", "Altea", "Aspe", "Benidorm", "Benissa", "Callosa de Segura", "Calp", "Cocentaina", "Crevillent", "Denia", "El Campello", "Elda", "Elx", "Guardamar del Segura", "Ibi", "L''Alfas del Pi", "La Vila Joiosa", "Monover", "Mutxamel", "Novelda", "Orihuela", "Pedreguer", "Pego", "Petrer", "Pilar de la Horadada", "Pinoso", "Rojales", "Sant Joan d''Alacant", "Sant Vicent del Raspeig", "Santa Pola", "Sax", "Teulada", "Torrevieja", "Villena", "Xabia"]
      },
      {
        name: "Alava",
        cities: ["Amurrio", "Llodio", "Vitoria"]
      },
      {
        name: "Albacete",
        cities: ["Albacete", "Almansa", "Caudete", "Hellin", "La Roda", "Villarrobledo"]
      },
      {
        name: "Almeria",
        cities: ["Adra", "Albox", "Almeria", "Berja", "Cuevas del Almanzora", "El Ejido", "Huercal de Almeria", "Huercal-Overa", "Nijar", "Roquetas de Mar", "Vicar"]
      },
      {
        name: "Andalucia",
        cities: ["Benalmadena"]
      },
      {
        name: "Asturias",
        cities: ["Aller", "Aviles", "C/ Pena Salon", "Cangas del Narcea", "Carreno", "Castrillon", "Corvera de Asturias", "Gijon", "Gozon", "Grado", "Langreo", "Laviana", "Lena", "Llanera", "Llanes", "Mieres", "Navia", "Oviedo", "Pilona", "Pravia", "San Martin del Rey Aurelio", "Siero", "Tineo", "Valdes", "Villaviciosa"]
      },
      {
        name: "Avila",
        cities: ["Avila"]
      },
      {
        name: "Badajoz",
        cities: ["Almendralejo", "Azuaga", "Badajoz", "Don Benito", "Jerez de los Caballeros", "Merida", "Montijo", "Olivenza", "Villafranca de los Barros", "Villanueva de la Serena", "Zafra"]
      },
      {
        name: "Balears",
        cities: ["Alayor-Menorca", "Alcudia", "Calvia", "Capdepera", "Ciutadella de Menorca", "Eivissa", "Felanitx", "Inca", "Llucmajor", "Mahon", "Manacor", "Marratxi", "Palma", "Pollenca", "Sa Pobla", "Sant Antoni de Portmany", "Sant Josep de sa Talaia", "Santa Eulalia del Rio", "Santanyi", "Soller"]
      },
      {
        name: "Barcelona",
        cities: ["Abrera", "Alella", "Arenys de Mar", "Argentona", "Badalona", "Badia del Valles", "Barbera del Valles", "Barcelona", "Berga", "Cabrera de Mar", "Caldes de Montbui", "Calella", "Canet de Mar", "Canovelles", "Cardedeu", "Castellar del Valles", "Castellbisbal", "Castelldefels", "Cerdanyola", "Corbera de Llobregat", "Cornella", "El Masnou", "El Prat de Llobregat", "Esparreguera", "Esplugues de Llobregat", "Gava", "Granollers", "Igualada", "L''Hospitalet de Llobregat", "La Garriga", "La Llagosta", "Les Franquesas del Valles", "Llica d''Amunt", "Malgrat de Mar", "Manlleu", "Manresa", "Martorell", "Mataro", "Molins de Rei", "Mollet del Valles", "Montcada i Reixac", "Montgat", "Montmelo", "Montornes del Valles", "Olesa de Montserrat", "Palau-solita i Plegamans", "Palleja", "Parets del Valles", "Piera", "Pineda de Mar", "Premia de Dalt", "Premia de Mar", "Ripollet", "Rubi", "Sabadell", "Sant Adria de Besos", "Sant Andreu de la Barca", "Sant Boi de Llobregat", "Sant Celoni", "Sant Cugat del Valles", "Sant Feliu de Llobregat", "Sant Joan Despi", "Sant Joan de Vilatorrada", "Sant Just Desvern", "Sant Pere de Ribes", "Sant Quirze del Valles", "Sant Sadurni d''Anoia", "Sant Vicenc dels Horts", "Santa Coloma de Gramenet", "Santa Margarida de Montbui", "Santa Perpetua de Mogoda", "Sitges", "Son Servera", "Terrassa", "Tordera", "Torello", "Vallirana", "Vic", "Viladecans", "Viladecavalls", "Vilafranca del Penedes", "Vilanova del Cami", "Vilanova i la Geltru", "Vilassar del Mar"]
      },
      {
        name: "Bertamirans",
        cities: ["Bertamirans"]
      },
      {
        name: "Biscay",
        cities: ["Berriatua", "Derio", "Elorio", "Loiu"]
      },
      {
        name: "Burgos",
        cities: ["Aranda de Duero", "Burgos", "Miranda de Ebro"]
      },
      {
        name: "Caceres",
        cities: ["Caceres", "Coria", "Miajadas", "Navalmoral de la Mata", "Plasencia", "Talayuela", "Trujillo"]
      },
      {
        name: "Cadiz",
        cities: ["Algeciras", "Arcos de la Frontera", "Barbate", "Cadiz", "Chiclana", "Chipiona", "Conil", "El Puerto de Santa Maria", "Jerez", "Jimena de la Frontera", "La Linea", "Los Barrios", "Medina-Sidonia", "Olvera", "Puerto Real", "Rota", "San Fernando", "San Roque", "Sanlucar de Barrameda", "Tarifa", "Ubrique", "Vejer de la Frontera", "Villamartin"]
      },
      {
        name: "Cantabria",
        cities: ["Camargo", "Castro-Urdiales", "El Astillero", "Laredo", "Los Corrales de Buelna", "Pielagos", "Reinosa", "San Felices De Buelna", "Santa Cruz de Bezana", "Santander", "Santona", "Torrelavega"]
      },
      {
        name: "Castello",
        cities: ["Almassora", "Benicarlo", "Benicassim", "Burriana", "Castello", "L''Alcora", "La Vall d''Uixo", "Nules", "Onda", "Segorbe", "Vila-real", "Vinaros"]
      },
      {
        name: "Catalunya",
        cities: ["Barcelona"]
      },
      {
        name: "Ceuta",
        cities: ["Ceuta"]
      },
      {
        name: "Ciudad Real",
        cities: []
      },
      {
        name: "Comunidad Autonoma de Canarias",
        cities: []
      },
      {
        name: "Comunidad Autonoma de Cataluna",
        cities: []
      },
      {
        name: "Comunidad Autonoma de Galicia",
        cities: []
      },
      {
        name: "Comunidad Autonoma de las Isla",
        cities: []
      },
      {
        name: "Comunidad Autonoma del Princip",
        cities: []
      },
      {
        name: "Comunidad Valenciana",
        cities: []
      },
      {
        name: "Cordoba",
        cities: ["Aguilar de la Frontera", "Baena", "Bujalance", "Cabra", "Cordoba", "Fernan-Nunez", "Fuente Palmera", "La Carlota", "Lucena", "Luque", "Montilla", "Montoro", "Palma del Rio", "Penarroya-Pueblonuevo", "Pozoblanco", "Priego de Cordoba", "Puente Genil", "Rute", "Villanueva de Cordoba"]
      },
      {
        name: "Cuenca",
        cities: ["Cuenca", "Tarancon"]
      },
      {
        name: "Gipuzkoa",
        cities: ["Aduna", "Lazakao"]
      },
      {
        name: "Girona",
        cities: ["Banyoles", "Blanes", "Empuriabrava", "Figueres", "Girona", "La Bisbal d''Emporda", "Lloret de Mar", "Massanet de la Selva", "Olot", "Palafrugell", "Palamos", "Ripoll", "Roses", "Salt", "Sant Feliu de Guixols", "Santa Coloma de Farners", "Torroella de Montgri"]
      },
      {
        name: "Granada",
        cities: ["Albolote", "Almunecar", "Armilla", "Atarfe", "Baza", "Granada", "Guadix", "Huescar", "Huetor Tajar", "Huetor Vega", "Illora", "La Zubia", "Las Gabias", "Loja", "Maracena", "Motril", "Ogijares", "Peligros", "Pinos Puente", "Salobrena", "Santa Fe"]
      },
      {
        name: "Guadalajara",
        cities: ["Azuqueca de Henares", "Guadalajara"]
      },
      {
        name: "Guipuzcoa",
        cities: ["Andoain", "Anoeta", "Arrasate", "Azkoitia", "Azpeitia", "Beasain", "Bergara", "Donostia", "Eibar", "Elgoibar", "Errenteria", "Guipuuzcoa", "Hernani", "Hondarribia", "Irun", "Legazpi", "Mendaro", "Mondragon", "Oiartzun", "Onati", "Ordizia", "Oria", "Pasaia", "Tolosa", "Zarautz", "Zumaia", "Zumarraga"]
      },
      {
        name: "Huelva",
        cities: ["Aljaraque", "Almonte", "Ayamonte", "Bollullos Par del Condado", "Cartaya", "Gibraleon", "Huelva", "Isla Cristina", "La Palma del Condado", "Lepe", "Moguer", "Punta Umbria", "Valverde del Camino"]
      },
      {
        name: "Huesca",
        cities: ["Barbastro", "Binefar", "Fraga", "Huesca", "Jaca", "Monzon", "Sabinanigo"]
      },
      {
        name: "Jaen",
        cities: ["Alcala la Real", "Alcaudete", "Andujar", "Baeza", "Bailen", "Cazorla", "Jaen", "Jodar", "La Carolina", "Linares", "Mancha Real", "Martos", "Mengibar", "Torre del Campo", "Torredonjimeno", "Ubeda", "Villacarrillo", "Villanueva del Arzobispo"]
      },
      {
        name: "La Rioja",
        cities: []
      },
      {
        name: "Las Palmas",
        cities: []
      },
      {
        name: "Leon",
        cities: ["Astorga", "Bembibre", "La Baneza", "Leon", "Ponferrada", "San Andres del Rabanedo", "Villablino", "Villaquilambre"]
      },
      {
        name: "Lerida",
        cities: ["Tora"]
      },
      {
        name: "Lleida",
        cities: ["Balaguer", "La Seu d''Urgell", "Lleida", "Mollerussa", "Tarrega"]
      },
      {
        name: "Lugo",
        cities: ["Burela", "Cervo", "Chantada", "Foz", "Lugo", "Monforte de Lemos", "Ribadeo", "Sarria", "Vilalba", "Viveiro"]
      },
      {
        name: "Madrid",
        cities: ["Alcala de Henares", "Alcobendas", "Alcorcon", "Algete", "Alpedrete", "Aranjuez", "Arganda del Rey", "Boadilla del Monte", "Ciempozuelos", "Collado Villalba", "Colmenar Viejo", "Coslada", "El Escorial", "Fuenlabrada", "Galapagar", "Getafe", "Guadarrama", "Humanes de Madrid", "Las Rozas de Madrid", "Leganes", "Madrid", "Majadahonda", "Meco", "Mejorada del Campo", "Mostoles", "Navalcarnero", "Parla", "Pinto", "Pozuelo de Alarcon", "Rivas-Vaciamadrid", "San Fernando de Henares", "San Lorenzo de El Escorial", "San Martin de la Vega", "San Sebastian de los Reyes", "Torrejon de Ardoz", "Torrelodones", "Tres Cantos", "Valdemoro", "Velilla de San Antonio", "Villanueva de la Canada", "Villaviciosa de Odon"]
      },
      {
        name: "Malaga",
        cities: ["Alhaurin de la Torre", "Alhaurin el Grande", "Alora", "Antequera", "Apartado", "Archidona", "Benalmadena", "Cartama", "Coin", "Estepona", "Fuengirola", "Malaga", "Marbella", "Mijas", "Nerja", "Rincon de la Victoria", "Ronda", "Torremolinos", "Torrox", "Velez-Malaga", "maro"]
      },
      {
        name: "Melilla",
        cities: ["Melilla"]
      },
      {
        name: "Murcia",
        cities: ["Abaran", "Aguilas", "Alcantarilla", "Alhama de Murcia", "Archena", "Beniel", "Bullas", "Calasparra", "Caravaca de la Cruz", "Cartagena", "Cehegin", "Cieza", "Fuente Alamo de Murcia", "Jumilla", "La Union", "Las Torres de Cotillas", "Lorca", "Los Alcazares", "Mazarron", "Molina de Segura", "Moratella", "Mula", "Murcia", "Puerto Lumbreras", "San Javier", "San Pedro del Pinatar", "Santomera", "Torre Pacheco", "Torre-Pacheco", "Totana", "Yecla"]
      },
      {
        name: "Navarra",
        cities: ["Ansoain", "Atarrabia", "Baranain", "Burlata", "Iruna", "Lizarra", "Navarra", "Orkoien", "Tafalla", "Tudela", "Zizur Nagusia"]
      },
      {
        name: "Ourense",
        cities: ["O Barco de Valdeorras", "O Carballino", "Ourense", "Verin", "Xinzo de Limia"]
      },
      {
        name: "Pais Vasco",
        cities: []
      },
      {
        name: "Palencia",
        cities: ["Guardo", "Palencia"]
      },
      {
        name: "Pontevedra",
        cities: ["A Estrada", "A Guarda", "Baiona", "Bueu", "Caldas de Reis", "Cambados", "Cangas", "Cangas De Morrazo", "Gondomar", "Lalin", "Marin", "Moana", "Mos", "Nigran", "O Grove", "O Porrino", "Poio", "Ponteareas", "Pontevedra", "Redondela", "Salvaterra de Mino", "Sanxenxo", "Silleda", "Tomino", "Tui", "Vigo", "Vilagarcia de Arousa", "Vilanova de Arousa"]
      },
      {
        name: "Salamanca",
        cities: ["Bejar", "Ciudad Rodrigo", "Salamanca", "Santa Marta de Tormes"]
      },
      {
        name: "Santa Cruz de Tenerife",
        cities: []
      },
      {
        name: "Segovia",
        cities: ["Cuellar", "Segovia"]
      },
      {
        name: "Sevilla",
        cities: ["Alcala de Guadaira", "Alcala del Rio", "Arahal", "Bormujos", "Brenes", "Camas", "Cantillana", "Carmona", "Castilleja de la Cuesta", "Coria del Rio", "Dos Hermanas", "Ecija", "El Viso del Alcor", "Estepa", "Gines", "Guillena", "La Algaba", "La Puebla de Cazalla", "La Puebla del Rio", "La Rinconada", "Las Cabezas de San Juan", "Lebrija", "Lora del Rio", "Los Palacios y Villafranca", "Mairena del Alcor", "Mairena del Aljarafe", "Marchena", "Moron de la Frontera", "Olivares", "Osuna", "Pilas", "San Juan de Aznalfarache", "Sanlucar la Mayor", "Sevilla", "Tocina", "Tomares", "Utrera"]
      },
      {
        name: "Soria",
        cities: ["Soria"]
      },
      {
        name: "Tarragona",
        cities: ["Alcanar", "Amposta", "Calafell", "Cambrils", "Deltrebe", "El Vendrell", "Reus", "Salou", "Sant Carles de la Rapita", "Tarragona", "Torredembarra", "Tortosa", "Valls", "Vila-seca"]
      },
      {
        name: "Tenerife",
        cities: ["Tenerife"]
      },
      {
        name: "Teruel",
        cities: ["Alcaniz", "Teruel"]
      },
      {
        name: "Toledo",
        cities: ["Consuegra", "Illescas", "Madridejos", "Mora", "Pepino", "Quintanar de la Orden", "Sonseca", "Talavera de la Reina", "Toledo", "Torrijos", "Villacanas"]
      },
      {
        name: "Valencia",
        cities: ["Agullent", "Alaquas", "Albal", "Alberic", "Alboraya", "Aldaia", "Alfafar", "Algemesi", "Alginet", "Alzira", "Benaguasil", "Benetusser", "Benifaio", "Beniparrell", "Betera", "Bunol", "Burjassot", "Canals", "Carcaixent", "Carlet", "Catarroja", "Chiva", "Cullera", "Elche", "Gandia", "Godella", "L''Alcudia", "L''Eliana", "La Pobla de Vallbona", "Lliria", "Los Montesinos", "Manises", "Massamagrell", "Meliana", "Mislata", "Moncada", "Oliva", "Ontinyent", "Paiporta", "Paterna", "Picanya", "Picassent", "Pucol", "Quart de Poblet", "Requena", "Riba-roja de Turia", "Sagunt", "Sedavi", "Silla", "Sueca", "Tavernes Blanques", "Tavernes de la Valldigna", "Torrent", "Utiel", "Valencia", "Xativa", "Xirivella"]
      },
      {
        name: "Valladolid",
        cities: ["Laguna de Duero", "Medina del Campo", "Tordesillas", "Valladolid"]
      },
      {
        name: "Vizcaya",
        cities: ["Abadiano", "Abanto Zierbena", "Amorebieta", "Arrigorriaga", "Barakaldo", "Basauri", "Bermeo", "Berriz", "Bilbao", "Durango", "Erandio", "Ermua", "Etxano", "Galdakao", "Gernika-Lumo", "Getxo", "Igorre", "Leioa", "Mungia", "Ondarroa", "Ortuella", "Portugalete", "Santurtzi", "Sestao", "Sopelana", "Trapagaran", "Zamudio"]
      },
      {
        name: "Zamora",
        cities: ["Benavente", "Toro", "Zamora"]
      },
      {
        name: "Zaragoza",
        cities: ["Calatayud", "Ejea de los Caballeros", "Tarazona", "Utebo", "Zaragoza"]
      }
    ],
    isoAlpha2: "ES",
    isoAlpha3: "ESP",
    isoNumeric: 724
  },
  {
    name: "Sri Lanka",
    flag: "🇱🇰",
    currency: {
      code: "LKR",
      name: "Rupee",
      symbol: "₨"
    },
    states: [
      {
        name: "Amparai",
        cities: ["Amparai", "Galmune"]
      },
      {
        name: "Anuradhapuraya",
        cities: ["Anuradhapuraya"]
      },
      {
        name: "Badulla",
        cities: ["Badulla", "Bandarawela", "Haputale"]
      },
      {
        name: "Boralesgamuwa",
        cities: ["Boralesgamuwa"]
      },
      {
        name: "Colombo",
        cities: ["Battaramulla", "Colombo", "Dehiwala-Mount Lavinia", "Homagama", "Jayawardanapura", "Kolonnawa", "Kotikawatta", "Maharagama", "Moratuwa", "Mulleriyawa", "Ratmalana", "Seethawakapura", "Sri Jayawardanapura"]
      },
      {
        name: "Galla",
        cities: ["Ambalamgoda", "Galla"]
      },
      {
        name: "Gampaha",
        cities: ["Daluguma", "Gampaha", "Hendala", "Jaela", "Kandana", "Katunayaka", "Kelaniya", "Migamuwa", "Minuwangoda", "Peliyagoda", "Ragama", "Wattala", "Welesara"]
      },
      {
        name: "Hambantota",
        cities: ["Hambantota", "Tanggalla"]
      },
      {
        name: "Kalatura",
        cities: ["Beruwala", "Horana", "Kalutara", "Keselwatta", "Panadraya"]
      },
      {
        name: "Kegalla",
        cities: ["Kegalla"]
      },
      {
        name: "Kilinochchi",
        cities: ["Kilinochchi"]
      },
      {
        name: "Kurunegala",
        cities: ["Kuliyapitiya", "Kurunegala", "Polgahawela"]
      },
      {
        name: "Madakalpuwa",
        cities: ["Eravur", "Katankudi", "Madakalpuwa"]
      },
      {
        name: "Maha Nuwara",
        cities: []
      },
      {
        name: "Malwana",
        cities: ["Malwana"]
      },
      {
        name: "Mannarama",
        cities: ["Mannarama"]
      },
      {
        name: "Matale",
        cities: ["Dambulla", "Matale", "Sigiriya"]
      },
      {
        name: "Matara",
        cities: ["Matara", "Weligama"]
      },
      {
        name: "Monaragala",
        cities: ["Monaragala", "Wattegama"]
      },
      {
        name: "Mullaitivu",
        cities: ["Mullaitivu"]
      },
      {
        name: "North Eastern Province",
        cities: []
      },
      {
        name: "North Western Province",
        cities: []
      },
      {
        name: "Nuwara Eliya",
        cities: []
      },
      {
        name: "Polonnaruwa",
        cities: ["Polonnaruwa"]
      },
      {
        name: "Puttalama",
        cities: ["Halawata", "Puttalama"]
      },
      {
        name: "Ratnapuraya",
        cities: ["Balangoda", "Ratnapuraya"]
      },
      {
        name: "Southern Province",
        cities: []
      },
      {
        name: "Tirikunamalaya",
        cities: ["Tirikunamalaya"]
      },
      {
        name: "Tuscany",
        cities: ["Querceta"]
      },
      {
        name: "Vavuniyawa",
        cities: ["Vavuniyawa"]
      },
      {
        name: "Western Province",
        cities: []
      },
      {
        name: "Yapanaya",
        cities: ["Chavakachcheri", "Peduru Tuduwa", "Valvedditturai", "Yapanaya"]
      },
      {
        name: "kadawatha",
        cities: ["Mahara"]
      }
    ],
    isoAlpha2: "LK",
    isoAlpha3: "LKA",
    isoNumeric: 144
  },
  {
    name: "Sudan",
    flag: "🇸🇩",
    currency: {
      code: "SDD",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "A''ali-an-Nil",
        cities: ["Kodok", "Malakal", "Nasir", "ar-Rank"]
      },
      {
        name: "Bahr-al-Jabal",
        cities: ["Juba", "Yei"]
      },
      {
        name: "Central Equatoria",
        cities: []
      },
      {
        name: "Gharb Bahr-al-Ghazal",
        cities: []
      },
      {
        name: "Gharb Darfur",
        cities: []
      },
      {
        name: "Gharb Kurdufan",
        cities: []
      },
      {
        name: "Gharb-al-Istiwa''iyah",
        cities: ["Maridi", "Nzara", "Tambura", "Yambio"]
      },
      {
        name: "Janub Darfur",
        cities: []
      },
      {
        name: "Janub Kurdufan",
        cities: []
      },
      {
        name: "Junqali",
        cities: ["Bur"]
      },
      {
        name: "Kassala",
        cities: ["Aruma", "Halfa al-Jadidah", "Kassala", "Khashm-al-Qirbah", "Wagar", "al-Masnah"]
      },
      {
        name: "Nahr-an-Nil",
        cities: ["Atbarah", "Barbar", "Kabushiyah", "Shandi", "ad-Damir", "al-Bawga", "al-Matammah"]
      },
      {
        name: "Shamal Bahr-al-Ghazal",
        cities: []
      },
      {
        name: "Shamal Darfur",
        cities: []
      },
      {
        name: "Shamal Kurdufan",
        cities: []
      },
      {
        name: "Sharq-al-Istiwa''iyah",
        cities: ["Kapoeta", "Torit"]
      },
      {
        name: "Sinnar",
        cities: ["Abu Hijar", "Galgani", "Hajj ''Abdallah", "Karkawj", "Mayurnu", "Sinjah", "Sinnar", "Sinnar-at-Tagatu", "Umm Shawkah", "ad-Dindar", "as-Suki"]
      },
      {
        name: "Warab",
        cities: ["Mashra ar-Raqq", "Tonj", "Warab"]
      },
      {
        name: "Wilayat al Khartum",
        cities: []
      },
      {
        name: "al-Bahr-al-Ahmar",
        cities: ["Bur Sudan", "Gabait", "Sawakin", "Sinkat", "Tawkar"]
      },
      {
        name: "al-Buhayrat",
        cities: ["Rumbik", "Yirol"]
      },
      {
        name: "al-Jazirah",
        cities: ["Abu ''Usar", "Arba''atun wa ''Ishrun-al-Qurash", "Maharaybah", "Miallayab", "Rufa''a", "Sharafat", "Tabat", "Tambul", "Wad Madani", "Wad Rawah", "al-Hawsh", "al-Hilaliyah", "al-Huda", "al-Husayhisah", "al-Kamilin", "al-Karaymat", "al-Manaqil", "al-Mu''sadiyah", "al-Musallamiyah"]
      },
      {
        name: "al-Khartum",
        cities: ["Umm Dawm", "Umm Durman", "al-Khartum", "al-Khartum Bahri"]
      },
      {
        name: "al-Qadarif",
        cities: ["Doka", "Qala''-an-Nahl", "Shuwak", "al-Faw", "al-Hawatah", "al-Qadarif"]
      },
      {
        name: "al-Wahdah",
        cities: ["Bentiu", "Ler"]
      },
      {
        name: "an-Nil-al-Abyad",
        cities: ["Asalaya", "Bufi", "Gulli", "Kinanah", "Kusti", "Marabba", "Rabak", "Shabashah", "Tandalti", "Umm Jarr", "Wad-az-Zaki", "ad-Duwaym", "al-Jazirah", "al-Kawah", "al-Qutaynah"]
      },
      {
        name: "an-Nil-al-Azraq",
        cities: ["ad-Damazin", "al-Kurumuk", "al-Quwaysi", "ar-Rusayris"]
      },
      {
        name: "ash-Shamaliyah",
        cities: ["Argu", "Dalqu", "Dunqulah", "Kanisah", "Karmah-an-Nuzul", "Kuraymah", "Kurti", "Marawi", "Tangasi-ar-Ru''ays", "Wadi Halfa", "ad-Dabbah"]
      }
    ],
    isoAlpha2: "SD",
    isoAlpha3: "SDN",
    isoNumeric: 736
  },
  {
    name: "Suriname",
    flag: "🇸🇷",
    currency: {
      code: "SRD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Brokopondo",
        cities: ["Brokopondo", "Brownsweg"]
      },
      {
        name: "Commewijne",
        cities: ["Marienburg", "Meerzorg", "Nieuw Amsterdam"]
      },
      {
        name: "Coronie",
        cities: ["Totness"]
      },
      {
        name: "Marowijne",
        cities: ["Albina", "Moengo"]
      },
      {
        name: "Nickerie",
        cities: ["Nieuw Nickerie", "Wageningen"]
      },
      {
        name: "Para",
        cities: ["Onverwacht"]
      },
      {
        name: "Paramaribo",
        cities: ["Paramaribo"]
      },
      {
        name: "Saramacca",
        cities: ["Groningen"]
      },
      {
        name: "Wanica",
        cities: ["Lelydorp"]
      }
    ],
    isoAlpha2: "SR",
    isoAlpha3: "SUR",
    isoNumeric: 740
  },
  {
    name: "Svalbard and Jan Mayen",
    flag: "🇸🇯",
    currency: {
      code: "NOK",
      name: "Krone",
      symbol: "kr"
    },
    states: [
      {
        name: "Svalbard",
        cities: ["Barentsburg", "Hornsund", "Isfjord Radio", "Longyearbyen", "Ny-Alesund"]
      }
    ],
    isoAlpha2: "SJ",
    isoAlpha3: "SJM",
    isoNumeric: 744
  },
  {
    name: "Swaziland",
    flag: "🇸🇿",
    currency: {
      code: "SZL"
    },
    states: [
      {
        name: "Hhohho",
        cities: ["Bulembu", "Ezulwini", "Mbabane", "Ngwenya", "Pigg''s Peak"]
      },
      {
        name: "Lubombo",
        cities: ["Big Bend", "Mhlume", "Mpaka", "Nsoko", "Simunye", "Siteki", "Tshaneni"]
      },
      {
        name: "Manzini",
        cities: ["Bhunya", "Kwaluseni", "Lobamba", "Malkerns", "Mankayane", "Manzini", "Matsapha", "Mhlambanyatsi", "Sidvokodvo"]
      },
      {
        name: "Shiselweni",
        cities: ["Hlatikulu", "Hluti", "Kubuta", "Lavumisa", "Nhlangano"]
      }
    ]
  },
  {
    name: "Sweden",
    flag: "🇸🇪",
    currency: {
      code: "SEK",
      name: "Krona",
      symbol: "kr"
    },
    states: [
      {
        name: "Alvsborgs Lan",
        cities: []
      },
      {
        name: "Angermanland",
        cities: []
      },
      {
        name: "Blekinge",
        cities: ["Karlshamn", "Karlskrona", "Ronneby"]
      },
      {
        name: "Bohuslan",
        cities: ["Stenungsund"]
      },
      {
        name: "Dalarna",
        cities: ["Avesta", "Borlange", "Falun", "Hedemora", "Ludvika", "Malung"]
      },
      {
        name: "Gavleborg",
        cities: ["Bollnas", "Bro", "Gavle", "Hudiksvall", "Sandviken", "Soderhamn"]
      },
      {
        name: "Gaza",
        cities: []
      },
      {
        name: "Gotland",
        cities: ["Skara", "Visby"]
      },
      {
        name: "Halland",
        cities: ["Anderstorp", "Falkenberg", "Halmstad", "Ullared", "Varberg"]
      },
      {
        name: "Jamtland",
        cities: ["Farjestaden", "Ostersund"]
      },
      {
        name: "Jonkoping",
        cities: ["Gislaved", "Jonkoping", "Nassjo", "Tranas", "Varnamo", "Vetlanda"]
      },
      {
        name: "Kalmar",
        cities: ["Blomstermala", "Kalmar", "Nybro", "Oskarshamn", "Solna", "Torsas", "Vastervik"]
      },
      {
        name: "Kristianstads",
        cities: ["Habo", "Limhamn", "Segeltorp", "Svedala"]
      },
      {
        name: "Kronoberg",
        cities: ["Ljungby", "Vaxjo"]
      },
      {
        name: "Norrbotten",
        cities: ["Boden", "Kiruna", "Lulea", "Pitea"]
      },
      {
        name: "Orebro",
        cities: ["Askersund", "Karlskoga", "Kumla", "Orebro"]
      },
      {
        name: "Ostergotland",
        cities: ["Finspang", "Follinge", "Kisa", "Linkoping", "Mjolby", "Motala", "Norrkoping", "Vadstena"]
      },
      {
        name: "Saltsjo-Boo",
        cities: ["Skarpovagen"]
      },
      {
        name: "Skane",
        cities: ["Angelholm", "Arlov", "Bastad", "Eslov", "Hassleholm", "Helsingborg", "Hjarup", "Hoganas", "Horby", "Jonstorp", "Klagstorp", "Kristianstad", "Landskrona", "Lund", "Malmo", "Skanor", "Staffanstorp", "Trelleborg", "Ystad"]
      },
      {
        name: "Smaland",
        cities: ["Hillerstorp", "Markaryd", "Smalandsstenar"]
      },
      {
        name: "Sodermanland",
        cities: ["Eskilstuna", "Gnesta", "Katrineholm", "Nacka Strand", "Nykoping", "Strangnas", "Vingaker"]
      },
      {
        name: "Stockholm",
        cities: ["Akersberga", "Boo", "Bromma", "Djursholm", "Hallstavik", "Jarfalla", "Johannesfred", "Lidingo", "Marsta", "Norrtalje", "Norsborg", "Nynashamn", "Rosersberg", "Sodertalje", "Sollentuna", "Stockholm", "Sundbyberg", "Taby", "Tumba", "Upplands-Vasby", "Vallentuna", "Vasterhaninge"]
      },
      {
        name: "Uppsala",
        cities: ["Balsta", "Enkoping", "Knivsta", "Skyttorp", "Storvreta", "Uppsala"]
      },
      {
        name: "Varmland",
        cities: ["Arvika", "Hammaro", "Karlstad", "Kristinehamn", "Skoghall"]
      },
      {
        name: "Vasterbotten",
        cities: ["Guglingen", "Robertsfors", "Skelleftea", "Umea"]
      },
      {
        name: "Vastergotland",
        cities: ["Gothenburg", "Kallered", "Kvanum", "Timmersdala"]
      },
      {
        name: "Vasternorrland",
        cities: ["Harnosand", "Ornskoldsvik", "Sundsvall"]
      },
      {
        name: "Vastmanland",
        cities: ["Arboga", "Fagersta", "Hallstahammar", "Koping", "Sala", "Vasteras"]
      },
      {
        name: "Vastra Gotaland",
        cities: []
      }
    ],
    isoAlpha2: "SE",
    isoAlpha3: "SWE",
    isoNumeric: 752
  },
  {
    name: "Switzerland",
    flag: "🇨🇭",
    currency: {
      code: "CHF",
      name: "Franc",
      symbol: "CHF"
    },
    states: [
      {
        name: "Aargau",
        cities: ["Aarau", "Aarburg", "Baden", "Bevilard", "Bremgarten", "Brugg", "Buchs", "Chevenez", "Fislisbach", "Granichen", "Hagglingen", "Kaiseraugst", "Kleindoettingen", "Klingnau", "Kuttigen", "Lenzburg", "Menziken", "Mohlin", "Mumpf", "Muri", "Neuenhof", "Niederlenz", "Niederwangen", "Niederwil", "Oberentfelden", "Obersiggenthal", "Oftringen", "Reinach", "Rheinfelden", "Rosshausern", "Rothrist", "Rupperswil", "Schmitten", "Seon", "Spreitenbach", "Stein", "Suhr", "Trogen", "Untersiggenthal", "Villmergen", "Wettingen", "Windisch", "Wohlen", "Wurenlos", "Zofingen"]
      },
      {
        name: "Appenzell Inner-Rhoden",
        cities: []
      },
      {
        name: "Appenzell-Ausser Rhoden",
        cities: []
      },
      {
        name: "Basel-Landschaft",
        cities: ["Aesch", "Allschwil", "Arlesheim", "Binningen", "Birsfelden", "Bottmingen", "Ettingen", "Frenkendorf", "Gelterkinden", "Laufen", "Lausen", "Liestal", "Munchenstein", "Muttenz", "Oberwil", "Pratteln", "Reinach", "Sissach", "Therwil"]
      },
      {
        name: "Basel-Stadt",
        cities: ["Basel", "Riehen"]
      },
      {
        name: "Bern",
        cities: ["Belp", "Bern", "Berne", "Biel", "Biel-Bienne", "Bolligen", "Burgdorf", "Frutigen", "Heimberg", "Herzogenbuchsee", "Huttwil", "Interlaken", "Ittigen", "Kirchberg", "Koniz", "Konolfingen", "Langenthal", "Langnau", "Lengnau", "Lyss", "Meiringen", "Moutier", "Munchenbuchsee", "Munsingen", "Muri", "Nidau", "Orpund", "Ostermundingen", "Pieterlen", "Saanen", "Saint-Imier", "Sonceboz", "Spiez", "Steffisburg", "Sumiswald", "Thun", "Uetendorf", "Unterseen", "Urtenen", "Vechingen", "Wahlern", "Wohlen", "Worb", "Zollikofen"]
      },
      {
        name: "Canton Ticino",
        cities: []
      },
      {
        name: "Fribourg",
        cities: ["Bulle", "Dudingen", "Fribourg", "Granges-Paccot", "Marly", "Muntelier", "Murten", "Remaufens", "Villars-sur-Glane", "Villaz-Saint-Pierre", "Wunnewil-Flamatt"]
      },
      {
        name: "Geneve",
        cities: ["Bernex", "Carouge", "Chene-Bougeries", "Chene-Bourg", "Collonge-Bellerive", "Cologny", "Geneva", "Geneve", "Lancy", "Le Grand-Saconnex", "Meyrin", "Onex", "Plan-les-Ouates", "Thonex", "Vernier", "Versoix", "Veyrier"]
      },
      {
        name: "Glarus",
        cities: ["Glarus", "Nafels"]
      },
      {
        name: "Graubunden",
        cities: ["Arosa", "Chur", "Davos", "Domat", "Igis", "Landquart", "Maienfeld", "Sankt Moritz"]
      },
      {
        name: "Heerbrugg",
        cities: ["Heerbrugg"]
      },
      {
        name: "Jura",
        cities: ["Delemont", "Glovelier", "Le Noirmont", "Porrentruy"]
      },
      {
        name: "Kanton Aargau",
        cities: []
      },
      {
        name: "Luzern",
        cities: ["Adligenswil", "Ballwil", "Buchrain", "Ebikon", "Emmen", "Hochdorf", "Horw", "Kriens", "Littau", "Luzern", "Malters", "Meggen", "Neuenkirch", "Perlern", "Rothenburg", "Ruswil", "Sursee"]
      },
      {
        name: "Morbio Inferiore",
        cities: []
      },
      {
        name: "Muhen",
        cities: ["Muhen"]
      },
      {
        name: "Neuchatel",
        cities: ["Bole", "Boudry", "Colombier", "La Chaux-de-Fonds", "Le Locle", "Neuchatel", "Peseux"]
      },
      {
        name: "Nidwalden",
        cities: ["Buochs", "Hergiswil", "Stans", "Stansstad"]
      },
      {
        name: "Obwalden",
        cities: ["Alpnach", "Kerns", "Sachseln", "Sarnen"]
      },
      {
        name: "Sankt Gallen",
        cities: []
      },
      {
        name: "Schaffhausen",
        cities: ["Neuhausen", "Schaffhausen"]
      },
      {
        name: "Schwyz",
        cities: ["Altendorf", "Arth", "Buron", "Einsiedeln", "Feusisberg", "Freienbach", "Ingenbohl", "Kussnacht", "Lachen", "Schubelbach", "Schwyz", "Wangen", "Wollerau"]
      },
      {
        name: "Solothurn",
        cities: ["Balsthal", "Bellach", "Bettlach", "Biberist", "Derendingen", "Dornach", "Dulliken", "Feldbrunnen", "Gerlafingen", "Grenchen", "Hagendorf", "Olten", "Schonenwerd", "Solothurn", "Trimbach", "Wangen", "Zuchwil"]
      },
      {
        name: "Thurgau",
        cities: ["Aadorf", "Amriswil", "Arbon", "Bischofszell", "Felben-Wellhausen", "Frauenfeld", "Guttingen", "Kreuzlingen", "Romanshorn", "Sirnach", "Sulgen", "Tagerwilen", "Weinfelden"]
      },
      {
        name: "Ticino",
        cities: ["Ascona", "Bellinzona", "Biasca", "Breganzona", "Cadempino", "Chiasso", "Giubiasco", "Locarno", "Losone", "Lugano", "Massagno", "Melide", "Mendrisio", "Mezzovico", "Minusio", "Porza", "Pregassona", "Viganello"]
      },
      {
        name: "Uri",
        cities: ["Altdorf", "Schattdorf"]
      },
      {
        name: "Valais",
        cities: ["Bagnes", "Brig-Glis", "Collombey-Muraz", "Conthey", "Evionnaz", "Fully", "Martigny", "Monthey", "Naters", "Nendaz", "Niederwald", "Saviese", "Sierre", "Sion", "Visp", "Vouvry", "Zermatt"]
      },
      {
        name: "Vaud",
        cities: ["Aigle", "Ballaigues", "Bex", "Blonay", "Bussigny", "Chavannes", "Crissier", "Ecublens", "Epalinges", "Gland", "La Tour-de-Peilz", "Lausanne", "Le Mont-sur-Lausanne", "Lucerne", "Lutry", "Montreux", "Morges", "Nyon", "Ollon", "Orbe", "Payerne", "Prilly", "Puidoux", "Pully", "Renens", "Romainmotier", "Saint Sulpice", "Vevey", "Yverdon"]
      },
      {
        name: "Vauffelin",
        cities: ["Vauffelin"]
      },
      {
        name: "Zug",
        cities: ["Baar", "Cham", "Hunenberg", "Menzingen", "Neuheim", "Oberageri", "Risch", "Risch-Rotkreuz", "Steinhausen", "Unterageri", "Zug"]
      },
      {
        name: "Zurich",
        cities: ["Adliswil", "Affoltern", "Bachenbulach", "Bassersdorf", "Birmensdorf", "Bubikon", "Bulach", "Dielsdorf", "Dietikon", "Dietlikon", "Dubendorf", "Durnten", "Ebmatingen", "Egg", "Embrach", "Erlenbach", "Fallanden", "Fehraltdorf", "Geroldswil", "Gossau", "Greifensee", "Herrliberg", "Hinwil", "Hombrechtikon", "Horgen", "Illnau-Effretikon", "Kilchberg", "Kloten", "Kusnacht", "Langnau", "Mannedorf", "Maur", "Meilen", "Neftenbach", "Niederhasli", "Nurensdorf", "Oberengstringen", "Oberglatt", "Oberrieden", "Opfikon", "Pfaffikon", "Rafz", "Regensdorf", "Richterswil", "Rumlang", "Ruschlikon", "Ruti", "Schlieren", "Schwerzenbach", "Seuzach", "Stafa", "Thalwil", "Uetikon", "Urdorf", "Uster", "Volketswil", "Wadenswil", "Wald", "Wallisellen", "Wangen-Bruttisellen", "Weiningen", "Wetzikon", "Winterthur", "Zell", "Zollikon", "Zumikon", "Zurich"]
      }
    ],
    isoAlpha2: "CH",
    isoAlpha3: "CHE",
    isoNumeric: 756
  },
  {
    name: "Syria",
    flag: "🇸🇾",
    currency: {
      code: "SYP"
    },
    states: [
      {
        name: "Aleppo",
        cities: ["Aleppo"]
      },
      {
        name: "Dar''a",
        cities: ["Dar''a", "Nawa"]
      },
      {
        name: "Dayr-az-Zawr",
        cities: ["Abu Kamal", "Dayr az-Zawr", "al-Mayadin"]
      },
      {
        name: "Dimashq",
        cities: ["Damascus", "Darayya", "Duma", "Hajar Aswad", "Harasta al-Bas", "Jaramanah", "Kabir-as-Sit", "Kesweh", "Qatana", "Yabrud", "al-Qutayfah", "an-Nabk", "at-Tall", "az-Zabadani"]
      },
      {
        name: "Halab",
        cities: ["Afrin", "Ayn-al-''Arab", "A''zaz", "Halab", "Manbij", "al-Bab", "as-Safirah"]
      },
      {
        name: "Hamah",
        cities: ["Hamah", "Masyaf", "Muhradah", "Salamiyah"]
      },
      {
        name: "Hims",
        cities: ["Hims", "Homs", "Tudmur", "al-Qusayr", "ar-Rastan"]
      },
      {
        name: "Idlib",
        cities: ["Ariha", "Idlib", "Jisr-ash-Shughur", "Ma''arrat-an-Nu''man"]
      },
      {
        name: "Madinat Dimashq",
        cities: []
      },
      {
        name: "Tartus",
        cities: ["Baniyas", "Safita", "Tartus"]
      },
      {
        name: "al-Hasakah",
        cities: ["Ra''s-al-''Ayn", "al-Hasakah", "al-Malikiyah", "al-Qamishli"]
      },
      {
        name: "al-Ladhiqiyah",
        cities: ["Jablah", "Lattakia", "al-Ladhiqiyah"]
      },
      {
        name: "al-Qunaytirah",
        cities: ["al-Qunaytirah"]
      },
      {
        name: "ar-Raqqah",
        cities: ["ar-Raqqah", "ath-Thawrah"]
      },
      {
        name: "as-Suwayda",
        cities: ["as-Suwayda"]
      }
    ]
  },
  {
    name: "São Tomé and Príncipe",
    flag: "🇸🇹",
    currency: {
      code: "STD"
    },
    states: [
      {
        name: "Agua Grande",
        cities: []
      },
      {
        name: "Cantagalo",
        cities: ["Santana"]
      },
      {
        name: "Lemba",
        cities: ["Neves"]
      },
      {
        name: "Lobata",
        cities: ["Santo Amaro"]
      },
      {
        name: "Me-Zochi",
        cities: ["Trindade"]
      },
      {
        name: "Pague",
        cities: ["Santo Antonio"]
      }
    ]
  },
  {
    name: "Taiwan",
    flag: "🇹🇼",
    currency: {
      code: "TWD",
      name: "Dollar",
      symbol: "NT$"
    },
    states: [
      {
        name: "Changhwa",
        cities: ["Changhua City", "Changhwa", "Chihu", "Erhlin", "Hemei", "Homei", "Hua Tan Hsiang", "Huatan Township", "Lukang", "Peitou", "Puyen Hsiang", "Tienchung", "Yuanlin"]
      },
      {
        name: "Chiayi Hsien",
        cities: []
      },
      {
        name: "Chiayi Shih",
        cities: []
      },
      {
        name: "Eastern Taipei",
        cities: []
      },
      {
        name: "Hsinchu Hsien",
        cities: []
      },
      {
        name: "Hsinchu Shih",
        cities: []
      },
      {
        name: "Hualien",
        cities: ["Fenglin", "Hualian", "Yuli"]
      },
      {
        name: "Ilan",
        cities: ["Ilan", "Lotung", "Suao", "Toucheng"]
      },
      {
        name: "Kaohsiung Hsien",
        cities: []
      },
      {
        name: "Kaohsiung Shih",
        cities: []
      },
      {
        name: "Keelung Shih",
        cities: []
      },
      {
        name: "Kinmen",
        cities: ["Kincheng", "Kinhsia", "Kinhu"]
      },
      {
        name: "Miaoli",
        cities: ["Cholan", "Chunan", "Houlung", "Miaoli", "Toufen", "Tunghsiao", "Yuanli", "Zaociao"]
      },
      {
        name: "Nantou",
        cities: ["Chichi", "Chushan", "Nantou", "Puli", "Tsaotun"]
      },
      {
        name: "Northern Taiwan",
        cities: []
      },
      {
        name: "Penghu",
        cities: ["Makung"]
      },
      {
        name: "Pingtung",
        cities: ["Chaochou", "Hengchun", "Pingtung", "Tungkang"]
      },
      {
        name: "Taichung",
        cities: ["Dali", "South District", "Ta-Ya Shang"]
      },
      {
        name: "Taichung Hsien",
        cities: ["Dali", "South District", "Ta-Ya Shang"]
      },
      {
        name: "Taichung Shih",
        cities: ["Dali", "South District", "Ta-Ya Shang"]
      },
      {
        name: "Tainan Hsien",
        cities: []
      },
      {
        name: "Tainan Shih",
        cities: []
      },
      {
        name: "Taipei Hsien",
        cities: []
      },
      {
        name: "Taipei Shih / Taipei Hsien",
        cities: []
      },
      {
        name: "Taitung",
        cities: ["Kuanshan", "Taitung"]
      },
      {
        name: "Taoyuan",
        cities: ["Chengkung", "Chungli", "Kuan Yin", "Pate", "Pingchen", "Ta Yuan", "Tachi", "Taoyuan", "Tungshih", "Yangmei"]
      },
      {
        name: "Yilan",
        cities: ["Wujie"]
      },
      {
        name: "Yun-Lin Hsien",
        cities: []
      },
      {
        name: "Yunlin",
        cities: ["Hsilo", "Huwei", "Peikang", "Touliu", "Tounan", "Tuku"]
      }
    ],
    isoAlpha2: "TW",
    isoAlpha3: "TWN",
    isoNumeric: 158
  },
  {
    name: "Tajikistan",
    flag: "🇹🇯",
    currency: {
      code: "TJS",
      name: "Somoni",
      symbol: false
    },
    states: [
      {
        name: "Dushanbe",
        cities: ["Dushanbe"]
      },
      {
        name: "Gorno-Badakhshan",
        cities: ["Khorug", "Murgob"]
      },
      {
        name: "Karotegin",
        cities: ["Garm", "Hisor", "Kofarnihon", "Leninskiy", "Rogun", "Shakhrinau", "Tursunzoda"]
      },
      {
        name: "Khatlon",
        cities: ["Dangara", "Farkhor", "Jilikul", "Khojamaston", "Kolhozobod", "Kulob", "Kumsangir", "Moskva", "Mu''minobod", "Nurak", "Pyanj", "Qurgonteppa", "Sarband", "Shaartuz", "Sovetskiy", "Vakhsh", "Vose", "Yovon"]
      },
      {
        name: "Sughd",
        cities: ["Adrasmon", "Asht", "Ayni", "Buston", "Chkalov", "Chorku", "Gafurov", "Ganchi", "Isfara", "Khujand", "Konibodom", "Matcha", "Nau", "Panjakent", "Proletarsk", "Qayroqqum", "Shurob", "Taboshar", "Uroteppa", "Zafarobod"]
      }
    ],
    isoAlpha2: "TJ",
    isoAlpha3: "TJK",
    isoNumeric: 762
  },
  {
    name: "Tanzania",
    flag: "🇹🇿",
    currency: {
      code: "TZS"
    },
    states: [
      {
        name: "Arusha",
        cities: ["Arusha"]
      },
      {
        name: "Dar es Salaam",
        cities: []
      },
      {
        name: "Dodoma",
        cities: ["Dodoma", "Kondoa", "Mpwapwa"]
      },
      {
        name: "Iringa",
        cities: ["Iringa", "Njombe"]
      },
      {
        name: "Kagera",
        cities: ["Bukoba", "Bwanga", "Ngara"]
      },
      {
        name: "Kigoma",
        cities: ["Kasulu", "Kigoma", "Uvinza"]
      },
      {
        name: "Kilimanjaro",
        cities: ["Moshi", "Same"]
      },
      {
        name: "Lindi",
        cities: ["Kilwa Kivinje", "Lindi", "Nachingwea"]
      },
      {
        name: "Mara",
        cities: ["Musoma", "Tarime"]
      },
      {
        name: "Mbeya",
        cities: ["Mbeya", "Mwaya", "Tukuyu"]
      },
      {
        name: "Morogoro",
        cities: ["Kilosa", "Mahenge", "Morogoro"]
      },
      {
        name: "Mtwara",
        cities: ["Masasi", "Mikindani", "Mtwara", "Newala"]
      },
      {
        name: "Mwanza",
        cities: ["Magu", "Mwanza", "Nansio", "Sengerama"]
      },
      {
        name: "Pwani",
        cities: ["Bagamoyo", "Kibaha", "Rufiji", "Utete"]
      },
      {
        name: "Rukwa",
        cities: ["Mpanda", "Sumbawanga"]
      },
      {
        name: "Ruvuma",
        cities: ["Songea", "Tunduru"]
      },
      {
        name: "Shinyanga",
        cities: ["Kahama", "Maswa", "Mwadui", "Old Shinyanga", "Shinyanga"]
      },
      {
        name: "Singida",
        cities: ["Manyoni", "Singida"]
      },
      {
        name: "Tabora",
        cities: ["Bukene", "Nzega", "Tabora", "Urambo"]
      },
      {
        name: "Tanga",
        cities: ["Korogwe", "Muheza", "Pangani", "Tanga"]
      },
      {
        name: "Zanzibar and Pemba",
        cities: []
      }
    ]
  },
  {
    name: "Thailand",
    flag: "🇹🇭",
    currency: {
      code: "THB",
      name: "Baht",
      symbol: "฿"
    },
    states: [
      {
        name: "Amnat Charoen",
        cities: []
      },
      {
        name: "Ang Thong",
        cities: []
      },
      {
        name: "Bangkok",
        cities: ["Bangkhen", "Bangkok", "Phatumthanee"]
      },
      {
        name: "Buri Ram",
        cities: []
      },
      {
        name: "Chachoengsao",
        cities: ["Bang Khla", "Bang Pakong", "Bangpakong", "Chachoengsao", "Phanom Sarakham", "Plaeng Yao"]
      },
      {
        name: "Chai Nat",
        cities: []
      },
      {
        name: "Chaiyaphum",
        cities: ["Bamnet Narong", "Chaiyaphum", "Kaeng Khlo", "Kaset Sombun", "Phu Khieo"]
      },
      {
        name: "Changwat Chaiyaphum",
        cities: []
      },
      {
        name: "Chanthaburi",
        cities: ["Chanthaburi", "Khlung", "Laem Sing", "Soydow", "Tha Mai"]
      },
      {
        name: "Chiang Mai",
        cities: []
      },
      {
        name: "Chiang Rai",
        cities: []
      },
      {
        name: "Chon Buri",
        cities: []
      },
      {
        name: "Chumphon",
        cities: ["Chumphon", "Lang Suan"]
      },
      {
        name: "Kalasin",
        cities: ["Huai Mek", "Kalasin", "Kamalasai", "Khao Wong", "Kuchinarai", "Nong Kung Si", "Yang Talat"]
      },
      {
        name: "Kamphaeng Phet",
        cities: []
      },
      {
        name: "Kanchanaburi",
        cities: ["Bo Phloi", "Kanchanaburi", "Phanom Thuan", "Tha Maka", "Tha Muang"]
      },
      {
        name: "Khon Kaen",
        cities: []
      },
      {
        name: "Krabi",
        cities: ["Ao Luk", "Krabi"]
      },
      {
        name: "Krung Thep",
        cities: []
      },
      {
        name: "Lampang",
        cities: ["Lampang", "Thoen"]
      },
      {
        name: "Lamphun",
        cities: ["Lamphun", "Mae Tha", "Pa Sang"]
      },
      {
        name: "Loei",
        cities: ["Loei", "Phu Kra Dung", "Wang Saphung"]
      },
      {
        name: "Lop Buri",
        cities: []
      },
      {
        name: "Mae Hong Son",
        cities: []
      },
      {
        name: "Maha Sarakham",
        cities: []
      },
      {
        name: "Mukdahan",
        cities: ["Mukdahan"]
      },
      {
        name: "Nakhon Nayok",
        cities: []
      },
      {
        name: "Nakhon Pathom",
        cities: []
      },
      {
        name: "Nakhon Phanom",
        cities: []
      },
      {
        name: "Nakhon Ratchasima",
        cities: []
      },
      {
        name: "Nakhon Sawan",
        cities: []
      },
      {
        name: "Nakhon Si Thammarat",
        cities: []
      },
      {
        name: "Nan",
        cities: ["Chiang Klang", "Nan"]
      },
      {
        name: "Narathiwat",
        cities: ["Bacho", "Narathiwat", "Rangae", "Sungai Kolok", "Sungai Padi", "Tak Bai"]
      },
      {
        name: "Nong Bua Lam Phu",
        cities: []
      },
      {
        name: "Nong Khai",
        cities: []
      },
      {
        name: "Nonthaburi",
        cities: ["Bang Bo Thong", "Bang Kruai", "Bang Yai", "Nonthaburi", "Pak Kret", "Sainoi"]
      },
      {
        name: "Pathum Thani",
        cities: []
      },
      {
        name: "Pattani",
        cities: ["Nong Chik", "Pattani", "Sai Buri", "Yaring"]
      },
      {
        name: "Phangnga",
        cities: ["Phangnga"]
      },
      {
        name: "Phatthalung",
        cities: ["Phatthalung"]
      },
      {
        name: "Phayao",
        cities: ["Chiang Kham", "Dok Kham Tai", "Phayao", "Pong"]
      },
      {
        name: "Phetchabun",
        cities: ["Chon Daen", "Lom Sak", "Nong Phai", "Phetchabun", "Wichian Buri"]
      },
      {
        name: "Phetchaburi",
        cities: ["Ban Laem", "Chaam", "Khao Yoi", "Phetchaburi", "Tha Yang"]
      },
      {
        name: "Phichit",
        cities: ["Bang Mun Nak", "Phichit", "Taphan Hin", "Thap Khlo"]
      },
      {
        name: "Phitsanulok",
        cities: ["Bang Krathum", "Bang Rakam", "Nakhon Thai", "Phitsanulok"]
      },
      {
        name: "Phra Nakhon Si Ayutthaya",
        cities: []
      },
      {
        name: "Phrae",
        cities: ["Den Chai", "Long", "Phrae", "Rong Kwang"]
      },
      {
        name: "Phuket",
        cities: ["Kathu", "Phuket"]
      },
      {
        name: "Prachin Buri",
        cities: []
      },
      {
        name: "Prachuap Khiri Khan",
        cities: []
      },
      {
        name: "Ranong",
        cities: ["Ranong"]
      },
      {
        name: "Ratchaburi",
        cities: ["Ban Pong", "Bang Phae", "Chom Bung", "Damnoen Saduak", "Photharam", "Ratchaburi"]
      },
      {
        name: "Rayong",
        cities: ["Ban Chang", "Klaeng", "Rayong"]
      },
      {
        name: "Roi Et",
        cities: []
      },
      {
        name: "Sa Kaeo",
        cities: []
      },
      {
        name: "Sakon Nakhon",
        cities: []
      },
      {
        name: "Samut Prakan",
        cities: []
      },
      {
        name: "Samut Sakhon",
        cities: []
      },
      {
        name: "Samut Songkhran",
        cities: []
      },
      {
        name: "Saraburi",
        cities: ["Ban Mo", "Kaeng Khoi", "Nong Khae", "Phra Phutthabat", "Saraburi"]
      },
      {
        name: "Satun",
        cities: ["Satun"]
      },
      {
        name: "Si Sa Ket",
        cities: []
      },
      {
        name: "Sing Buri",
        cities: []
      },
      {
        name: "Songkhla",
        cities: ["Hat Yai", "Ranot", "Sadao", "Singha Nakhon", "Songkhla"]
      },
      {
        name: "Sukhothai",
        cities: ["Khiri Mat", "Sawankhalok", "Si Satchanalai", "Sukhothai"]
      },
      {
        name: "Suphan Buri",
        cities: []
      },
      {
        name: "Surat Thani",
        cities: []
      },
      {
        name: "Surin",
        cities: ["Phasat", "Surin"]
      },
      {
        name: "Tak",
        cities: ["Ban Tak", "Mae Ramat", "Mae Sot", "Tak"]
      },
      {
        name: "Trang",
        cities: ["Huai Yot", "Kantang", "Trang"]
      },
      {
        name: "Trat",
        cities: ["Bo Rai", "Trat"]
      },
      {
        name: "Ubon Ratchathani",
        cities: []
      },
      {
        name: "Udon Thani",
        cities: []
      },
      {
        name: "Uthai Thani",
        cities: []
      },
      {
        name: "Uttaradit",
        cities: ["Laplae", "Uttaradit"]
      },
      {
        name: "Yala",
        cities: ["Betong", "Yala"]
      },
      {
        name: "Yasothon",
        cities: ["Yasothon"]
      }
    ],
    isoAlpha2: "TH",
    isoAlpha3: "THA",
    isoNumeric: 764
  },
  {
    name: "Togo",
    flag: "🇹🇬",
    currency: {
      code: "XOF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Centre",
        cities: ["Guerin Kouka", "Sokode", "Sotouboua", "Tchamba"]
      },
      {
        name: "Kara",
        cities: ["Bafilo", "Bassar", "Kande", "Kara", "Kpagouda", "Niamtougou"]
      },
      {
        name: "Maritime",
        cities: ["Agbelouve", "Aneho", "Lome", "Tabligbo", "Tsevie", "Vogan"]
      },
      {
        name: "Plateaux",
        cities: ["Amlame", "Anie", "Atakpame", "Badou", "Blitta", "Kouve", "Kpalime", "Kpessi", "Notse"]
      },
      {
        name: "Savanes",
        cities: ["Dapaong", "Mango", "Tandjouare"]
      }
    ],
    isoAlpha2: "TG",
    isoAlpha3: "TGO",
    isoNumeric: 768
  },
  {
    name: "Tokelau",
    flag: "🇹🇰",
    currency: {
      code: "NZD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Atafu",
        cities: ["Atafu"]
      },
      {
        name: "Fakaofo",
        cities: ["Fakaofo"]
      },
      {
        name: "Nukunonu",
        cities: ["Nukunonu"]
      }
    ],
    isoAlpha2: "TK",
    isoAlpha3: "TKL",
    isoNumeric: 772
  },
  {
    name: "Tonga",
    flag: "🇹🇴",
    currency: {
      code: "TOP",
      name: "Paanga",
      symbol: "T$"
    },
    states: [
      {
        name: "Eua",
        cities: ["Ohonua"]
      },
      {
        name: "Ha''apai",
        cities: ["Pangai"]
      },
      {
        name: "Niuas",
        cities: ["Hihifo"]
      },
      {
        name: "Tongatapu",
        cities: ["Haveloloto", "Mu''a", "Nuku''alofa", "Tofoa-Koloua", "Vaini"]
      },
      {
        name: "Vava''u",
        cities: ["Neiafu"]
      }
    ],
    isoAlpha2: "TO",
    isoAlpha3: "TON",
    isoNumeric: 776
  },
  {
    name: "Trinidad and Tobago",
    flag: "🇹🇹",
    currency: {
      code: "TTD",
      name: "Dollar",
      symbol: "TT$"
    },
    states: [
      {
        name: "Arima-Tunapuna-Piarco",
        cities: ["Arima", "Arouca", "Tacarigua", "Tunapuna"]
      },
      {
        name: "Caroni",
        cities: ["Carapichaima", "Claxton Bay"]
      },
      {
        name: "Chaguanas",
        cities: ["Chaguanas"]
      },
      {
        name: "Couva-Tabaquite-Talparo",
        cities: ["Couva", "Tabaquite"]
      },
      {
        name: "Diego Martin",
        cities: []
      },
      {
        name: "Glencoe",
        cities: ["Glencoe"]
      },
      {
        name: "Penal Debe",
        cities: []
      },
      {
        name: "Point Fortin",
        cities: []
      },
      {
        name: "Port of Spain",
        cities: []
      },
      {
        name: "Princes Town",
        cities: []
      },
      {
        name: "Saint George",
        cities: []
      },
      {
        name: "San Fernando",
        cities: []
      },
      {
        name: "San Juan",
        cities: []
      },
      {
        name: "Sangre Grande",
        cities: []
      },
      {
        name: "Siparia",
        cities: ["Siparia"]
      },
      {
        name: "Tobago",
        cities: ["Scarborough"]
      }
    ],
    isoAlpha2: "TT",
    isoAlpha3: "TTO",
    isoNumeric: 780
  },
  {
    name: "Tunisia",
    flag: "🇹🇳",
    currency: {
      code: "TND",
      name: "Dinar",
      symbol: false
    },
    states: [
      {
        name: "Aryanah",
        cities: ["Aryanah", "Bordj Aalouine", "Burj-al-''Amri", "La Soukra", "Qal''at-al-Andalus", "Sidi Thabit", "Taburbah", "Wadi al-Layl", "ad-Dandan", "al-Battan", "al-Jadidah", "al-Murnaqiyah", "at-Tadaman Dawwar Hishar"]
      },
      {
        name: "Bajah",
        cities: ["Bajah", "Majaz-al-Bab", "Nafzah", "Quballat", "Tabursuq", "Zahrat Madina", "al-Ma''qulah"]
      },
      {
        name: "Bin ''Arus",
        cities: []
      },
      {
        name: "Binzart",
        cities: ["Awsajah", "Binzart", "Ghar-al-Milh", "Manzil ''Abd-ar-Rahman", "Manzil Bu Ruqaybah", "Manzil Jamil", "Matir", "Rafraf", "Ras-al-Jabal", "Sajanan", "Tinjah", "al-''Aliyah", "al-Matlin"]
      },
      {
        name: "Gouvernorat de Ariana",
        cities: []
      },
      {
        name: "Gouvernorat de Nabeul",
        cities: []
      },
      {
        name: "Gouvernorat de Sousse",
        cities: []
      },
      {
        name: "Hammamet Yasmine",
        cities: []
      },
      {
        name: "Jundubah",
        cities: ["Ayn Darahim", "Bani Matir", "Bu Salim", "Firnanah", "Ghar-ad-Dima", "Jundubah", "Tabarqah", "Wadi Maliz"]
      },
      {
        name: "Madaniyin",
        cities: ["Bani Khaddash", "Bin Qirdan", "Jarbah Ajim", "Jarbah Hawmat-as-Suq", "Jarbah Midun", "Jarjis", "Madaniyin"]
      },
      {
        name: "Manubah",
        cities: ["Manubah"]
      },
      {
        name: "Monastir",
        cities: ["Monastir"]
      },
      {
        name: "Nabul",
        cities: ["Azimur", "Bani Hiyar", "Bani Khallad", "Bu ''Urqub", "Dar ''Alush", "Dar Sha''ban", "Hammam-al-Aghzaz", "Manzil Bu Zalafah", "Manzil Hurr", "Manzil Tamim", "Nabul", "Qalibiyah", "Qurbah", "Qurbus", "Qurunbaliyah", "Sulayman", "Taklisah", "Tazirkah", "Zawiyat-al-Jadidi", "al-Hammamat", "al-Huwariyah", "al-Ma''murah", "al-Middah", "as-Sama''ah"]
      },
      {
        name: "Qabis",
        cities: ["Ghannush", "Marath", "Matmatat-al-Jadidah", "Matmatat-al-Qadimah", "Qabis", "Sanini an-Nahal", "Wadhraf", "al-Hammah", "al-Matwiyah", "az-Zarat"]
      },
      {
        name: "Qafsah",
        cities: ["Qafsah", "Umm-al-''Arais", "al-Madilah", "al-Mitlawi", "al-Qasr", "al-Qatar", "ar-Rudayyif", "as-Sanad"]
      },
      {
        name: "Qibili",
        cities: ["Duz", "Jamnah", "Qibili", "Suq-al-Ahad", "al-Qal''ah"]
      },
      {
        name: "Safaqis",
        cities: ["Aqarib", "Bi''r Ali Bin Khalifah", "Jabinyanah", "Manzil Shakir", "Qarmadah", "Qarqannah", "Safaqis", "Saqiyat-ad-Dair", "Saqiyat-az-Zayt", "Sfax", "Tinah", "al-''Ayn", "al-Hanashah", "al-Mahras", "as-Sukhayrah", "ash-Shayhiyah"]
      },
      {
        name: "Sfax",
        cities: ["Sfax"]
      },
      {
        name: "Sidi Bu Zayd",
        cities: []
      },
      {
        name: "Silyanah",
        cities: ["Barqu", "Bu ''Aradah", "Bu Ruwis", "Kasra", "Makthar", "Qa''afur", "Silyanah", "al-''Arusah", "al-Karib", "ar-Rawhiyah"]
      },
      {
        name: "Susah",
        cities: ["Akkudah", "Bu Fishah", "Hammam Susah", "Harqalah", "Masakin", "Qusaybat-ath-Thurayat", "Sidi Bu ''Ali", "Sidi al-Hani", "Susah", "Zawiyat Susah", "al-Masa''din", "al-Qal''at-al-Kabirah", "al-Qal''at-as-Saghirah", "an-Nafidah", "az-Zuhur"]
      },
      {
        name: "Tatawin",
        cities: ["Bi''r-al-Ahmar", "Dhahibah", "Ghumrassin", "Rimadah", "Tatawin"]
      },
      {
        name: "Tawzar",
        cities: ["Daqash", "Hammat-al-Jarid", "Naftah", "Tamaghzah", "Tawzar"]
      },
      {
        name: "Tunis",
        cities: ["Bardaw", "Ben Arous", "Carthage", "Halq-al-Wadi", "Megrine", "Qartaj", "Sidi Bu Sa''id", "Tunis", "al-Marsa"]
      },
      {
        name: "Zaghwan",
        cities: ["Bi''r Mashariqah", "Jabal-al-Wust", "Zaghwan", "al-Fahs", "an-Nazur", "az-Zaribah"]
      },
      {
        name: "al-Kaf",
        cities: ["Manzil Salim", "Nibbar", "Qal''at-as-Sanan", "Saqiyat Sidi Yussuf", "Tajarwin", "ad-Dahmani", "al-Jarissah", "al-Kaf", "al-Qal''at-al-Khasba", "al-Qusur", "as-Sars", "at-Tawiraf"]
      },
      {
        name: "al-Mahdiyah",
        cities: ["Awlad ash-Shamakh", "Bumirdas", "Habirah", "Karkar", "Mallulash", "Qusur-as-Saf", "Rajish", "Shurban", "Sidi ''Ulwan", "al-Baradi''ah", "al-Jamm", "al-Mahdiyah", "as-Sawasi", "ash-Shabbah"]
      },
      {
        name: "al-Munastir",
        cities: ["Amirat-al-Fahul", "Amirat-al-Hajjaj", "Amirat-at-Tawazarah", "Banan Budar", "Banblat wal-Manarah", "Bani Hassan", "Bu Hajjar", "Ghanadah", "Jammal", "Khunays", "Lamtah", "Manzil Farsi", "Manzil Hayah", "Manzil Kamil", "Manzil Nur", "Qasr Hallal", "Qusaybat-al-Madyuni", "Sahilin Ma''atmar", "Sayyadah", "Sidi ''Amara", "Sidi Bin Nur", "Tabulbah", "Tuzah", "Zaramidin", "Zawiyat Quntash", "al-Baqalitah", "al-Masdur", "al-Muknin", "al-Munastir", "al-Wardanin", "ash-Sharahil"]
      },
      {
        name: "al-Qasrayn",
        cities: ["Firyanah", "Fussanah", "Haydrah", "Jadliyan", "Majal Bal ''Abbas", "Sabibah", "Subaytilah", "Talabat", "Talah", "al-Qasrayn"]
      },
      {
        name: "al-Qayrawan",
        cities: ["Ayn Jalulah", "Buhajlah", "Haffuz", "Hajib-al-''Ayun", "Manzil Mahidi", "Nasr Allah", "al-''Ala", "al-Qayrawan", "al-Waslatiyah", "as-Subaykhah", "ash-Shabikah", "ash-Sharardah"]
      }
    ],
    isoAlpha2: "TN",
    isoAlpha3: "TUN",
    isoNumeric: 788
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    currency: {
      code: "TRY",
      name: "Lira",
      symbol: "YTL"
    },
    states: [
      {
        name: "Adana",
        cities: ["Adana", "Aladag", "Ceyhan", "Feke", "Imamoglu", "Karaisali", "Karatas", "Kozan", "Pozanti", "Saimbeyli", "Tufanbeyli", "Yumurtalik"]
      },
      {
        name: "Adiyaman",
        cities: ["Adiyaman", "Besni", "Celikhan", "Gerger", "Golbasi", "Kahta", "Samsat", "Sincik", "Tut"]
      },
      {
        name: "Afyon",
        cities: ["Afyonkarahisar", "Basmakci", "Bayat", "Bolvadin", "Cay", "Dazkiri", "Dinar", "Emirdag", "Evciler", "Hocalar", "Ihsaniye", "Iscehisar", "Kiziloren", "Sandikli", "Sincanli", "Suhut", "Sultandagi"]
      },
      {
        name: "Agri",
        cities: ["Diyadin", "Dogubeyazit", "Eleskirt", "Hamur", "Karakose", "Patnos", "Taslicay", "Tutak"]
      },
      {
        name: "Aksaray",
        cities: ["Agacoren", "Aksaray", "Eskil", "Gulagac", "Guzelyurt", "Ortakoy", "Sariyahsi"]
      },
      {
        name: "Amasya",
        cities: ["Amasya", "Goynucek", "Gumushacikoy", "Hamamozu", "Merzifon", "Suluova", "Tasova"]
      },
      {
        name: "Ankara",
        cities: ["Akyurt", "Ankara", "Ayas", "Beypazari", "Camlidere", "Cubuk", "Elmadag", "Evren", "Gudul", "Haymana", "Kalecik", "Kazan", "Kizilcahamam", "Nallihan", "Polatli", "Sereflikochisar", "Yenisehir"]
      },
      {
        name: "Antalya",
        cities: ["Akseki", "Alanya", "Antalya", "Elmali", "Finike", "Gazipasa", "Gundogmus", "Ibradi", "Kale", "Kas", "Kemer", "Konya", "Korkuteli", "Kumluca", "Manavgat", "Serik"]
      },
      {
        name: "Ardahan",
        cities: ["Ardahan", "Damal", "Gole", "Hanak", "Posof"]
      },
      {
        name: "Artvin",
        cities: ["Ardanuc", "Arhavi", "Artvin", "Borcka", "Hopa", "Murgul", "Savsat", "Yusufeli"]
      },
      {
        name: "Aydin",
        cities: ["Aydin", "Bozdogan", "Buharkent", "Cine", "Didim", "Germencik", "Incirliova", "Karacasu", "Karpuzlu", "Kocarli", "Kosk", "Kusadasi", "Kuyucak", "Nazilli", "Soke", "Sultanhisar", "Yenipazar"]
      },
      {
        name: "Balikesir",
        cities: ["Ayvalik", "Balikesir", "Balya", "Bandirma", "Bigadic", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gomec", "Gonen", "Havran", "Ivrindi", "Kepsut", "Manyas", "Marmara", "Sakarya", "Savastepe", "Sindirgi", "Susurluk"]
      },
      {
        name: "Bartin",
        cities: ["Amasra", "Bartin", "Kurucasile", "Ulus"]
      },
      {
        name: "Batman",
        cities: ["Batman", "Besiri", "Gercus", "Hasankeyf", "Kozluk", "Sason"]
      },
      {
        name: "Bayburt",
        cities: ["Aydintepe", "Bayburt", "Demirozu"]
      },
      {
        name: "Bilecik",
        cities: ["Bilecik", "Bozuyuk", "Golpazari", "Inhisar", "Osmaneli", "Pazaryeri", "Sogut", "Yenipazar"]
      },
      {
        name: "Bingol",
        cities: ["Adakli", "Bingol", "Genc", "Karliova", "Kigi", "Solhan", "Yayladere", "Yedisu"]
      },
      {
        name: "Bitlis",
        cities: ["Adilcevaz", "Ahlat", "Bitlis", "Guroymak", "Hizan", "Mutki", "Tatvan"]
      },
      {
        name: "Bolu",
        cities: ["Akcakoca", "Bolu", "Dortdivan", "Gerede", "Goynuk", "Kibriscik", "Mengen", "Mudurnu", "Seben", "Yenicaga"]
      },
      {
        name: "Burdur",
        cities: ["Aglasun", "Altinyayla", "Bucak", "Burdur", "Golhisar", "Karamanli", "Kemer", "Tefenni", "Yesilova"]
      },
      {
        name: "Bursa",
        cities: ["Bursa", "Buyukorhan", "Gemlik", "Gursu", "Harmancik", "Inegol", "Iznik", "Karacabey", "Keles", "Kestel", "Mudanya", "Mustafakemalpasa", "Orhaneli", "Orhangazi", "Yenisehir"]
      },
      {
        name: "Canakkale",
        cities: ["Ayvacik", "Bayramic", "Biga", "Bozcaada", "Can", "Canakkale", "Eceabat", "Ezine", "Gelibolu", "Gokceada", "Lapseki", "Yenice"]
      },
      {
        name: "Cankiri",
        cities: ["Atkaracalar", "Bayramoren", "Cankiri", "Cerkes", "Eldivan", "Ilgaz", "Kizilirmak", "Korgun", "Kursunlu", "Orta", "Sabanozu", "Yaprakli"]
      },
      {
        name: "Corum",
        cities: ["Alaca", "Bayat", "Corum", "Dodurga", "Iskilip", "Kargi", "Lacin", "Mecitozu", "Oguzlar", "Ortakoy", "Osmancik", "Sungurlu", "Ugurludag"]
      },
      {
        name: "Denizli",
        cities: ["Acipayam", "Akkoy", "Babadag", "Baklan", "Bekilli", "Bozkurt", "Buldan", "Cardak", "Civril", "Denizli", "Guney", "Honaz", "Kale", "Saraykoy", "Serinhisar", "Tavas"]
      },
      {
        name: "Diyarbakir",
        cities: ["Bismil", "Cermik", "Cinar", "Cungus", "Dicle", "Diyarbakir", "Egil", "Ergani", "Hani", "Hazro", "Kocakoy", "Kulp", "Lice", "Silvan"]
      },
      {
        name: "Duzce",
        cities: ["Cumayeri", "Duzce", "Golyaka", "Gumusova", "Kaynasli", "Yigilca"]
      },
      {
        name: "Edirne",
        cities: ["Edirne", "Enez", "Havsa", "Ipsala", "Kesan", "Lalapasa", "Meric", "Suleoglu", "Uzunkopru"]
      },
      {
        name: "Elazig",
        cities: ["Agin", "Alacakaya", "Aricak", "Baskil", "Elazig", "Karakocan", "Keban", "Kovancilar", "Maden", "Palu", "Sivrice"]
      },
      {
        name: "Erzincan",
        cities: ["Erzincan", "Ilic", "Kemah", "Kemaliye", "Otlukbeli", "Refahiye", "Tercan", "Uzumlu"]
      },
      {
        name: "Erzurum",
        cities: ["Askale", "Erzurum", "Hinis", "Horasan", "Ilica", "Ispir", "Karacoban", "Karayazi", "Koprukoy", "Narman", "Oltu", "Olur", "Pasinler", "Pazaryolu", "Senkaya", "Tekman", "Tortum", "Uzundere"]
      },
      {
        name: "Eskisehir",
        cities: ["Alpu", "Beylikova", "Cifteler", "Eskisehir", "Gunyuzu", "Han", "Inonu", "Mahmudiye", "Mihalgazi", "Mihaliccik", "Saricakaya", "Seyitgazi", "Sivrihisar"]
      },
      {
        name: "Gaziantep",
        cities: ["Araban", "Gaziantep", "Islahiye", "Karkamis", "Nizip", "Nurdagi", "Oguzeli", "Sehitkamil", "Yavuzeli"]
      },
      {
        name: "Giresun",
        cities: ["Aluca", "Bulancak", "Dereli", "Dogankent", "Espiye", "Eynesil", "Giresun", "Gorele", "Guce", "Kesap", "Piraziz", "Sebinkarahisar", "Tirebolu", "Yaglidere"]
      },
      {
        name: "Gumushane",
        cities: ["Gumushane", "Kelkit", "Kose", "Kurtun", "Siran", "Torul"]
      },
      {
        name: "Hakkari",
        cities: ["Cukurca", "Hakkari", "Semdinli", "Yuksekova"]
      },
      {
        name: "Hatay",
        cities: ["Altinozu", "Antakya", "Belen", "Dortyol", "Erzin", "Hassa", "Iskenderun", "Kirikhan", "Kumlu", "Reyhanli", "Samandag", "Yayladagi"]
      },
      {
        name: "Icel",
        cities: ["Anamur", "Aydincik", "Bozyazi", "Erdemli", "Gulnar", "Mersin", "Mut", "Silifke", "Tarsus"]
      },
      {
        name: "Igdir",
        cities: ["Aralik", "Igdir", "Karakoyunlu", "Tuzluca"]
      },
      {
        name: "Isparta",
        cities: ["Aksu", "Atabey", "Egirdir", "Gelendost", "Gonen", "Isparta", "Keciborlu", "Sarkikaraagac", "Senirkent", "Sutculer", "Uluborlu", "Yalvac", "Yenisarbademli"]
      },
      {
        name: "Istanbul",
        cities: ["Buyukcekmece", "Catalca", "Eminonu", "Esenler", "Istanbul", "KadÃ„Â±koy", "Sile", "Silivri", "Sultanbeyli", "TopkapÃ„Â±", "Tuzla", "Umraniye"]
      },
      {
        name: "Izmir",
        cities: ["Aliaga", "Alsancak", "Bayindir", "Bergama", "Beyagac", "Bornova", "Cesme", "Digor", "Dikili", "Foca", "Izmir", "Karaburun", "Kemalpasa", "Kinik", "Kiraz", "Menderes", "Menemen", "Merkezi", "Mersinli", "Odemis", "Seferihisar", "Selcuk", "Tire", "Torbali", "Urla"]
      },
      {
        name: "Kahramanmaras",
        cities: ["Afsin", "Andirin", "Caglayancerit", "Ekinozu", "Elbistan", "Goksun", "Kahramanmaras", "Nurhak", "Pazarcik", "Turkoglu"]
      },
      {
        name: "Karabuk",
        cities: ["Eflani", "Eskipazar", "Karabuk", "Ovacik", "Safranbolu", "Yenice"]
      },
      {
        name: "Karaman",
        cities: ["Ayranci", "Basyayla", "Ermenek", "Karaman", "Kazimkarabekir", "Sariveliler"]
      },
      {
        name: "Kars",
        cities: ["Akyaka", "Arpacay", "Kagizman", "Kars", "Sarikamis", "Selim", "Susuz"]
      },
      {
        name: "Karsiyaka",
        cities: ["Karsiyaka"]
      },
      {
        name: "Kastamonu",
        cities: ["Abana", "Agli", "Arac", "Azdavay", "Bozkurt", "Daday", "Devrekani", "Doganyurt", "Hanonu", "Ihsangazi", "Inebolu", "Kastamonu", "Kure", "Pinarbasi", "Senpazar", "Seydiler", "Taskopru", "Tosya"]
      },
      {
        name: "Kayseri",
        cities: ["Akkisla", "Bunyan", "Develi", "Felahiye", "Hacilar", "Incesu", "Kayseri", "Ozvatan", "Pinarbasi", "Sarioglan", "Sariz", "Talas", "Tomarza", "Yahyali", "Yesilhisar"]
      },
      {
        name: "Kilis",
        cities: ["Elbeyli", "Kilis", "Musabeyli", "Polateli"]
      },
      {
        name: "Kirikkale",
        cities: ["Bahsili", "Baliseyh", "Delice", "Karakecili", "Keskin", "Kirikkale", "Sulakyurt", "Yahsihan"]
      },
      {
        name: "Kirklareli",
        cities: ["Babaeski", "Demirkoy", "Kirklareli", "Kofcaz", "Kumkoy", "Luleburgaz", "Pehlivankoy", "Pinarhisar", "Vize"]
      },
      {
        name: "Kirsehir",
        cities: ["Akcakent", "Akpinar", "Boztepe", "Kaman", "Kirsehir", "Mucur"]
      },
      {
        name: "Kocaeli",
        cities: ["CayÃ„Â±rova", "Derince", "DilovasÃ„Â±", "Gebze", "Golcuk", "Izmit", "Kandira", "Karamursel", "Kocaeli", "Korfez"]
      },
      {
        name: "Konya",
        cities: ["Ahirli", "Akoren", "Aksehir", "Altinekin", "Beysehir", "Bozkir", "Cihanbeyli", "Cumra", "Derbent", "Derebucak", "Doganhisar", "Emirgazi", "Eregli", "Guneysinir", "Hadim", "Halkapinar", "Huyuk", "Ilgin", "Kadinhani", "Karapinar", "Konya", "Kulu", "Sarayonu", "Seydisehir", "Taskent", "Tuzlukcu", "Yalihuyuk", "Yunak"]
      },
      {
        name: "Kutahya",
        cities: ["Altinas", "Aslanapa", "Domanic", "Dumlupinar", "Emet", "Gediz", "Kutahya", "Pazarlar", "Saphane", "Simav", "Tavsanli"]
      },
      {
        name: "Lefkosa",
        cities: ["Lefkosa"]
      },
      {
        name: "Malatya",
        cities: ["Akcadag", "Arapkir", "Arguvan", "Battalgazi", "Darende", "Dogansehir", "Doganyol", "Hekimhan", "Kale", "Kuluncak", "Malatya", "Poturge", "Yazihan", "Yesilyurt"]
      },
      {
        name: "Manisa",
        cities: ["Ahmetli", "Akhisar", "Alasehir", "Demirci", "Golmarmara", "Gordes", "Kirkagac", "Koprubasi", "Kula", "Manisa", "Salihli", "Sarigol", "Saruhanli", "Selendi", "Soma", "Turgutlu"]
      },
      {
        name: "Mardin",
        cities: ["Dargecit", "Derik", "Kiziltepe", "Mardin", "Mazidagi", "Midyat", "Nusaybin", "Omerli", "Savur", "Yesilli"]
      },
      {
        name: "Mugla",
        cities: ["Bodrum", "Dalaman", "Datca", "Fethiye", "Kavaklidere", "Koycegiz", "Marmaris", "Milas", "Mugla", "Ortaca", "Ula", "Yatagan"]
      },
      {
        name: "Mus",
        cities: ["Bulanik", "Haskoy", "Korkut", "Malazgirt", "Mus", "Varto"]
      },
      {
        name: "Nevsehir",
        cities: ["Acigol", "Avanos", "Derinkuyu", "Gulsehir", "Hacibektas", "Kozakli", "Nevsehir", "Urgup"]
      },
      {
        name: "Nigde",
        cities: ["Altunhisar", "Bor", "Nigde", "Ulukisla"]
      },
      {
        name: "Ordu",
        cities: ["Akkus", "Aybasti", "Camas", "Fatsa", "Golkoy", "Gulyali", "Gurgentepe", "Ikizce", "Kabaduz", "Kabatas", "Korgan", "Kumru", "Mesudiye", "Ordu", "Persembe", "Ulubey", "Unye"]
      },
      {
        name: "Osmaniye",
        cities: ["Bahce", "Duzici", "Hasanbeyli", "Kadirli", "Osmaniye", "Sumbas", "Toprakkale"]
      },
      {
        name: "Rize",
        cities: ["Ardesen", "Cayeli", "Derepazan", "Findikli", "Guneysu", "Hemsin", "Ikizdere", "Iyidere", "Kalkandere", "Pazar", "Rize"]
      },
      {
        name: "Sakarya",
        cities: ["Adapazari", "Akyazi", "Ferizli", "Geyve", "Hendek", "Karapurcek", "Karasu", "Kaynarca", "Kocaali", "Pamukova", "Sapanca", "Sogutlu", "Tarakli"]
      },
      {
        name: "Samsun",
        cities: ["Akcakale", "Alacam", "Asarcik", "Ayvacik", "Bafra", "Carsamba", "Havza", "Kavak", "Ladik", "Mayis 19", "Salipazan", "Samsun", "Tekkekoy", "Terme", "Vezirkopru", "Yakakent"]
      },
      {
        name: "Sanliurfa",
        cities: ["Birecik", "Bozova", "Ceylanpinar", "Halfeti", "Harran", "Hilvan", "Sanliurfa", "Siverek", "Suruc", "Urfa", "Viransehir"]
      },
      {
        name: "Siirt",
        cities: ["Aydinlar", "Baykan", "Eruh", "Kurtalan", "Pervari", "Siirt", "Sirvan"]
      },
      {
        name: "Sinop",
        cities: ["Ayancik", "Boyabat", "Dikmen", "Duragan", "Erfelek", "Gerze", "Sarayduzu", "Sinop", "Turkeli"]
      },
      {
        name: "Sirnak",
        cities: ["Beytussebap", "Cizre", "Guclukonak", "Idil", "Silopi", "Sirnak", "Uludere"]
      },
      {
        name: "Sivas",
        cities: ["Akincilar", "Altinyayla", "Divrigi", "Dogansar", "Gemerek", "Golova", "Gurun", "Hafik", "Imranli", "Kangal", "Koyulhisar", "Sarkisla", "Sivas", "Susehri", "Ulas", "Yildizeli", "Zara"]
      },
      {
        name: "Tekirdag",
        cities: ["Cerkezkoy", "Corlu", "Hayrabolu", "Malkara", "Marmaraereglisi", "Muratli", "Saray", "Sarkoy", "Tekirdag"]
      },
      {
        name: "Tokat",
        cities: ["Almus", "Artova", "Basciftlik", "Erbaa", "Niksar", "Pazar", "Resadiye", "Sulusaray", "Tokat", "Turhal", "Yesilyurt", "Zile"]
      },
      {
        name: "Trabzon",
        cities: ["Akcaabat", "Arakli", "Arsin", "Besikduzu", "Caykara", "Dernekpazari", "Duzkoy", "Hayrat", "Koprubasi", "Macka", "Of", "Salpazari", "Surmene", "Tonya", "Trabzon", "Vakfikebir", "Yomra"]
      },
      {
        name: "Tunceli",
        cities: ["Hozat", "Mazgirt", "Nazimiye", "Ovacik", "Pertek", "Pulumur", "Tunceli"]
      },
      {
        name: "Usak",
        cities: ["Banaz", "Esme", "Karahalli", "Sivasli", "Ulubey", "Usak"]
      },
      {
        name: "Van",
        cities: ["Bahcesaray", "Baskale", "Caldiran", "Edremit", "Ercis", "Gevas", "Gurpinar", "Muradiye", "Ozalp", "Saray", "Van"]
      },
      {
        name: "Yalova",
        cities: ["Altinova", "Armutlu", "Ciftlikkoy", "Cinarcik", "Termal", "Yalova"]
      },
      {
        name: "Yozgat",
        cities: ["Akdagmadeni", "Aydincik", "Bogaziliyan", "Candir", "Cayiralan", "Cekerek", "Kadisehri", "Saraykent", "Sarikaya", "Sefaatli", "Sorgun", "Yenifakili", "Yerkoy", "Yozgat"]
      },
      {
        name: "Zonguldak",
        cities: ["Alapli", "Caycuma", "Devrek", "Eregli", "Gokcebey", "Zonguldak"]
      }
    ],
    isoAlpha2: "TR",
    isoAlpha3: "TUR",
    isoNumeric: 792
  },
  {
    name: "Turkmenistan",
    flag: "🇹🇲",
    currency: {
      code: "TMM",
      name: "Manat",
      symbol: "m"
    },
    states: [
      {
        name: "Ahal",
        cities: ["Ahchadepe", "Annau", "Babadayhan", "Baherden", "Birleshik Pervi", "Buzmeyin", "Dushak", "Gokedepe", "Kaka", "Miana", "Ovaz Jalatay", "Saragt", "Tecen"]
      },
      {
        name: "Asgabat",
        cities: ["Asgabat"]
      },
      {
        name: "Balkan",
        cities: ["Adyndaky", "Balkanabat", "Bekdash", "Gasanguli", "Gazanjyk", "Goturdepe", "Gumdag", "Jebel", "Karakala", "Khazar", "Serdar", "Sharlawuk", "Turkmenbasi"]
      },
      {
        name: "Dasoguz",
        cities: ["Akdepe", "Boldumsaz", "Dasoguz", "Gubadag", "Kohne Urgenc", "Moskva", "Tagta", "Yilanli"]
      },
      {
        name: "Lebap",
        cities: ["Darganata", "Esenmengli", "Farap", "Gazojak", "Govurdak", "Halac", "Kerki", "Komsomolsk", "Mukri", "Sayat", "Seydi", "Turkmenabat"]
      },
      {
        name: "Mari",
        cities: ["Bayramali", "Eloten", "Mari", "Murgab", "Sakarchage", "Tagtabazar", "Turkmengala"]
      }
    ],
    isoAlpha2: "TM",
    isoAlpha3: "TKM",
    isoNumeric: 795
  },
  {
    name: "Turks and Caicos Islands",
    flag: "🇹🇨",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Grand Turk",
        cities: []
      },
      {
        name: "South Caicos and East Caicos",
        cities: []
      }
    ],
    isoAlpha2: "TC",
    isoAlpha3: "TCA",
    isoNumeric: 796
  },
  {
    name: "Tuvalu",
    flag: "🇹🇻",
    currency: {
      code: "AUD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Funafuti",
        cities: ["Vaiaku"]
      },
      {
        name: "Nanumanga",
        cities: ["Tonga"]
      },
      {
        name: "Nanumea",
        cities: ["Lolua"]
      },
      {
        name: "Niutao",
        cities: ["Kua"]
      },
      {
        name: "Nui",
        cities: ["Tanrake"]
      },
      {
        name: "Nukufetau",
        cities: ["Savave"]
      },
      {
        name: "Nukulaelae",
        cities: ["Fangaua"]
      },
      {
        name: "Vaitupu",
        cities: ["Asau"]
      }
    ],
    isoAlpha2: "TV",
    isoAlpha3: "TUV",
    isoNumeric: 798
  },
  {
    name: "U.S. Minor Outlying Islands",
    flag: "🇺🇲",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "United States Minor Outlying I",
        cities: []
      }
    ]
  },
  {
    name: "U.S. Virgin Islands",
    flag: "🇻🇮",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "Saint Croix",
        cities: []
      },
      {
        name: "Saint John",
        cities: []
      },
      {
        name: "Saint Thomas",
        cities: []
      }
    ]
  },
  {
    name: "Uganda",
    flag: "🇺🇬",
    currency: {
      code: "UGX",
      name: "Shilling",
      symbol: false
    },
    states: [
      {
        name: "Central",
        cities: ["Bombo", "Bweyogerere", "Entebbe", "Jinja-Kawempe", "Kajansi", "Kalangala", "Kampala", "Kayunga", "Kiboga", "Kireka", "Kyotera", "Lugazi", "Lukaya", "Luwero", "Lyantonde", "Masaka", "Mityana", "Mpigi", "Mubende", "Mukono", "Nakasongola", "Namasuba", "Njeru", "Nkonkonjeru", "Rakai", "Sembabule", "Wakiso", "Wobulenzi"]
      },
      {
        name: "Eastern",
        cities: ["Bugembe", "Bugiri", "Busembatia", "Busia", "Buwenge", "Iganga", "Jinja", "Kaberamaido", "Kamuli", "Kapchorwa", "Katakwi", "Kumi", "Malaba", "Mayuge", "Mbale", "Ngora", "Pallisa", "Sironko", "Soroti", "Tororo"]
      },
      {
        name: "Northern",
        cities: ["Adjumani", "Amudat", "Apac", "Arua", "Gulu", "Kaabong", "Kitgum", "Koboko", "Kotido", "Lira", "Moroto", "Moyo", "Nakapiripirit", "Nebbi", "Pader", "Paidha", "Pakwach", "Yumbe"]
      },
      {
        name: "Western",
        cities: ["Bundibugyo", "Bushenyi", "Fort Portal", "Hima", "Hoima", "Ibanda", "Kabale", "Kabwohe-Itendero", "Kagadi", "Kamwenge", "Kanungu", "Kasese", "Katwe", "Kibaale", "Kigorobya", "Kilembe", "Kisoro", "Kyenjojo", "Masindi", "Masindi-Port", "Mbarara", "Muhororo", "Ntungamo", "Rukungiri"]
      }
    ],
    isoAlpha2: "UG",
    isoAlpha3: "UGA",
    isoNumeric: 800
  },
  {
    name: "Ukraine",
    flag: "🇺🇦",
    currency: {
      code: "UAH",
      name: "Hryvnia",
      symbol: "₴"
    },
    states: [
      {
        name: "Cherkas''ka",
        cities: ["Cherkasy", "Smila", "Uman"]
      },
      {
        name: "Chernihivs''ka",
        cities: ["Chernihiv", "Nizhyn", "Pryluky"]
      },
      {
        name: "Chernivets''ka",
        cities: ["Chernivtsi"]
      },
      {
        name: "Crimea",
        cities: ["Alushta", "Sevastopol"]
      },
      {
        name: "Dnipropetrovska",
        cities: ["Dneprodzerzhinsk", "Dnipropetrovsk", "Kryvyy Rih", "Marhanets", "Nikopol", "Novomoskovs''k", "Pavlohrad", "Plekhanov", "Zhovti Vody"]
      },
      {
        name: "Donets''ka",
        cities: ["Artemivs''k", "Donets''k", "Donetsk", "Druzhkivka", "Dymytrov", "Dzerzhyns''k", "Horlivka", "Khartsyz''k", "Kostyantynivka", "Kramators''k", "Krasnoarmiys''k", "Makiyivka", "Mariupol", "Shakhtars''k", "Slov''yans''k", "Snizhne", "Torez", "Yenakiyeve"]
      },
      {
        name: "Ivano-Frankivs''ka",
        cities: ["Ivano-Frankivs''k", "Kalush", "Kolomyya"]
      },
      {
        name: "Kharkiv",
        cities: ["Izyum", "Kharkiv", "Lozova"]
      },
      {
        name: "Kharkov",
        cities: ["Volchansk"]
      },
      {
        name: "Khersonska",
        cities: ["Kherson", "Nova Kakhovka"]
      },
      {
        name: "Khmel''nyts''ka",
        cities: ["Geologov", "Kam''yanets''-Podil''s''kyy", "Khmel''nyts''kyy", "Shepetivka", "khmelnitskiy"]
      },
      {
        name: "Kirovohrad",
        cities: ["Kirovohrad", "Oleksandriya", "Svidlovodsk"]
      },
      {
        name: "Krym",
        cities: ["Dzhankoy", "Feodosiya", "Kerch", "Simferopol", "Yalta", "Yevpatoriya"]
      },
      {
        name: "Kyyiv",
        cities: ["Kiev", "Kyyiv"]
      },
      {
        name: "Kyyivs''ka",
        cities: ["Bila Tserkva", "Boryspil", "Brovary", "Fastiv"]
      },
      {
        name: "L''vivs''ka",
        cities: ["Chervonohrad", "Drohobych", "L''viv", "Stryy", "Yavoriv"]
      },
      {
        name: "Luhans''ka",
        cities: ["Alchevs''k", "Antratsyt", "Bryanka", "Krasnodon", "Krasnyy Luch", "Luhans''k", "Luhansk", "Lysychans''k", "Pervomays''k", "Roven''ky", "Rubizhne", "Stakhanov", "Sverdlovs''k", "Syeverodonets''k"]
      },
      {
        name: "Mykolayivs''ka",
        cities: ["Mykolayiv", "Pervomays''k"]
      },
      {
        name: "Odes''ka",
        cities: ["Bilhorod-Dnistrovs''kyy", "Illichivs''k", "Izmayil", "Odesa"]
      },
      {
        name: "Odessa",
        cities: ["Odessa"]
      },
      {
        name: "Poltavs''ka",
        cities: ["Komsomol''s''k", "Kremenchuh", "Lubny", "Poltava"]
      },
      {
        name: "Rivnens''ka",
        cities: ["Rivne"]
      },
      {
        name: "Sevastopol",
        cities: []
      },
      {
        name: "Sums''ka",
        cities: ["Konotop", "Okhtyrka", "Romny", "Shostka", "Sumy"]
      },
      {
        name: "Ternopil''s''ka",
        cities: ["Ternopil"]
      },
      {
        name: "Volyns''ka",
        cities: ["Kovel", "Luts''k", "Novovolyns''k"]
      },
      {
        name: "Vynnyts''ka",
        cities: ["Vinnitsa", "Vinnytsya"]
      },
      {
        name: "Zakarpats''ka",
        cities: ["Mukacheve", "Uzhhorod"]
      },
      {
        name: "Zaporizhia",
        cities: ["Berdyans''k", "Enerhodar", "Melitpol", "Zaporizhia"]
      },
      {
        name: "Zhytomyrs''ka",
        cities: ["Berdychiv", "Korosten", "Novohrad-Volyns''kyy", "Zhytomyr"]
      }
    ],
    isoAlpha2: "UA",
    isoAlpha3: "UKR",
    isoNumeric: 804
  },
  {
    name: "United Arab Emirates",
    flag: "🇦🇪",
    currency: {
      code: "AED",
      name: "Dirham",
      symbol: false
    },
    states: [
      {
        name: "Abu Zabi",
        cities: []
      },
      {
        name: "Ajman",
        cities: ["Ajman"]
      },
      {
        name: "Dubai",
        cities: ["Al Qusais", "Deira", "Dubai", "Jebel Ali"]
      },
      {
        name: "Ras al-Khaymah",
        cities: []
      },
      {
        name: "Sharjah",
        cities: ["Sharjah"]
      },
      {
        name: "Sharjha",
        cities: []
      },
      {
        name: "Umm al Qaywayn",
        cities: []
      },
      {
        name: "al-Fujayrah",
        cities: ["Khawr Fakkan", "al-Fujayrah"]
      },
      {
        name: "ash-Shariqah",
        cities: []
      }
    ],
    isoAlpha2: "AE",
    isoAlpha3: "ARE",
    isoNumeric: 784
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: {
      code: "GBP",
      name: "Pound",
      symbol: "£"
    },
    states: [
      {
        name: "Aberdeen",
        cities: ["Cleveland", "Gilberdyke", "Llanrwst", "Swadlincote", "Turriff"]
      },
      {
        name: "Aberdeenshire",
        cities: ["Westhill"]
      },
      {
        name: "Argyll",
        cities: ["Oban"]
      },
      {
        name: "Armagh",
        cities: ["Craigavon"]
      },
      {
        name: "Bedfordshire",
        cities: ["Barton-le-Clay", "Bedford", "Biggleswade", "Caddington", "Flitton", "Flitwick", "Leighton Buzzard", "Marston Moretaine", "Sandy", "Westoning"]
      },
      {
        name: "Belfast",
        cities: ["Dundonald", "Holywood"]
      },
      {
        name: "Berkshire",
        cities: ["Berkshire", "Bracknell", "Littlewick Green", "Maidenhead", "Newbury", "Reading", "Sandhurst", "Slough", "Sunninghill", "Twyford", "Windsor", "Wokingham", "Woodley"]
      },
      {
        name: "Birmingham",
        cities: ["Coleshill", "Edgbaston", "Hockley", "Ladywood", "Nechells", "Rubery", "Small Heath"]
      },
      {
        name: "Brechin",
        cities: ["Angus"]
      },
      {
        name: "Bridgnorth",
        cities: ["Bridgnorth"]
      },
      {
        name: "Bristol",
        cities: ["Avon", "Fishponds", "Henleaze", "Thornbury", "Warmley"]
      },
      {
        name: "Buckinghamshire",
        cities: ["Amersham", "Aston Clinton", "Beaconsfield", "Bletchley", "Bourne End", "Buckingham", "High Wycombe", "Iver", "Marlow", "Milton Keynes", "Newport Pagnell", "Piddington", "Princes Risborough", "Rowsham"]
      },
      {
        name: "Cambridge",
        cities: ["Cambridge", "Ely", "Huntingdon", "Peterborough"]
      },
      {
        name: "Cambridgeshire",
        cities: ["Cambridge", "Haddenham", "Sawtry", "Wisbech"]
      },
      {
        name: "Channel Islands",
        cities: []
      },
      {
        name: "Cheshire",
        cities: ["Alderley Edge", "Altrincham", "Betley", "Cheadle Gatley", "Cheadle Hulme", "Crewe", "Dukinfield", "Holmes Chapel", "Hyde", "Knuntsford", "Knutsford", "Lymm", "Malpas", "Merseyside", "Middlewich", "Mobberley", "Nantwich", "Saltney", "Sandbach", "Stalybridge", "Stockport", "Tarporley", "Timperley", "Widnes", "Winsford"]
      },
      {
        name: "Cleveland",
        cities: ["Redcar", "Stockton-on-Tees"]
      },
      {
        name: "Co Fermanagh",
        cities: []
      },
      {
        name: "Conwy",
        cities: ["Conwy", "Llandudno"]
      },
      {
        name: "Cornwall",
        cities: ["Bude", "Camborne", "Fowey", "Hayle", "Helston", "Launceston", "Liskeard", "Looe", "Mevegissey", "Newquay", "Penryn", "Penzance", "St. Ives", "Truro", "Wadebridge"]
      },
      {
        name: "Coventry",
        cities: ["Holbrooks"]
      },
      {
        name: "Craven Arms",
        cities: []
      },
      {
        name: "Cumbria",
        cities: ["Askam-in-Furness", "Flookburgh", "Grasmere", "Kendal", "Keswick", "Kirkby Stephen", "Milnthorpe", "Penrith", "Ulverston", "Windermere"]
      },
      {
        name: "Denbighshire",
        cities: ["Denbigh"]
      },
      {
        name: "Derby",
        cities: ["Ashbourne", "Buxton", "Chesterfield", "Eckington"]
      },
      {
        name: "Derbyshire",
        cities: ["Bakewell", "Belper", "Breaston", "Derby", "Ilkeston", "Matlock", "Ripley"]
      },
      {
        name: "Devon",
        cities: ["Axminster", "Barnstaple", "Beaworthy", "Bideford", "Bovey Tracey", "Braunton", "Brixham", "Chudleigh", "Crediton", "Dalwood", "Dartmouth", "Dawlish", "Exeter", "Exmouth", "Great Torrington", "Holsworthy", "Kingsbridge", "Modbury", "Newton Abbot", "Okehampton", "Plymouth", "Plympton", "Salcombe", "Tiverton", "Torquay", "Totnes", "Winkleigh", "Woodburyd", "Yelverton"]
      },
      {
        name: "Dial Code Dungannon",
        cities: []
      },
      {
        name: "Didcot",
        cities: ["Didcot"]
      },
      {
        name: "Dorset",
        cities: ["Beaminster", "Blandford Forum", "Christchurch", "Dorset", "Poole", "Sherborne", "Sturminster Newton", "Swanage", "Verwood", "Wimborne"]
      },
      {
        name: "Dunbartonshire",
        cities: ["Alexandria"]
      },
      {
        name: "Durham",
        cities: ["Crook", "Spennymoor"]
      },
      {
        name: "East Dunbartonshire",
        cities: []
      },
      {
        name: "East Lothian",
        cities: []
      },
      {
        name: "East Midlands",
        cities: []
      },
      {
        name: "East Sussex",
        cities: []
      },
      {
        name: "East Yorkshire",
        cities: []
      },
      {
        name: "England",
        cities: ["Abingdon", "Accrington", "Aldershot", "Alfreton", "Altrincham", "Amersham", "Andover", "Arnold", "Ashford", "Ashington", "Ashton-in-Makerfield", "Ashton-under-Lyne", "Atherton", "Aylesbury", "Aylesford-East Malling", "Banbury", "Banstead-Tadworth", "Barnsley", "Barnstaple", "Barrow-in-Furness", "Basildon", "Basingstoke", "Bath", "Batley", "Bebington", "Bedford", "Bedworth", "Beeston and Stapleford", "Benfleet", "Bentley", "Berwick-upon-Tweed", "Beverley", "Bexhil", "Bicester", "Bideford", "Billericay", "Billingham", "Birkenhead", "Birmingham", "Bishop Auckland", "Bishop''s Stortford", "Blackburn", "Blackpool", "Bletchley", "Blyth", "Bodmin", "Bognor Regis", "Bolton", "Bootle", "Boston", "Bournemouth", "Bracknell", "Bradford", "Braintree", "Bredbury and Romiley", "Brentwood", "Bridgwater", "Bridlington", "Brigg", "Brighouse", "Brighton", "Bristol", "Broadstairs", "Bromley Cross-Bradshaw", "Bromsgrove-Catshill", "Burgess Hill", "Burnley", "Burntwood", "Burton-upon-Trent", "Bury", "Bury Saint Edmunds", "Camberley-Frimley", "Cambourne-Redruth", "Cambridge", "Cannock", "Canterbury", "Canvey Island", "Carlisle", "Carlton", "Castleford", "Caterham and Warlingham", "Chadderton", "Chapeltown", "Chatham", "Cheadle and Gatley", "Chelmsford", "Cheltenham", "Chesham", "Cheshunt", "Chessington", "Chester", "Chester-le-Street", "Chesterfield", "Chichester", "Chippenham", "Chipping Sodbury", "Chorley", "Christchurch", "Clacton-on-Sea", "Clay Cross-North Wingfield", "Cleethorpes", "Clevedon", "Coalville", "Colchester", "Congleton", "Consett", "Corby", "Coventry", "Cramlington", "Crawley", "Crosby", "Crowthorne", "Darlington", "Dartford", "Darwen", "Deal", "Denton", "Derby", "Dewsbury", "Doncaster", "Dorchester", "Dover", "Droitwich", "Dronfield", "Droylsden", "Dudley", "Dunstable", "Durham", "East Grinstead", "East Retford", "Eastbourne", "Eastleigh", "Eaton Socon-Saint Neots", "Eccles", "Egham", "Ellesmere Port", "Epsom and Ewell", "Esher-Molesey", "Eston and South Bank", "Exeter", "Failsworth", "Falmouth-Penryn", "Fareham", "Farnborough", "Farnham", "Farnworth", "Farring", "Felixtowe", "Felling", "Ferndown", "Fleetwood", "Folkestone", "Formby", "Frome", "Fulham", "Gateshead", "Gillingham", "Glossop", "Gloucester", "Godalming", "Golborne", "Gosforth", "Gosport", "Grantham", "Gravesend", "Grays", "Greasby", "Great Malvern", "Great Sankey", "Great Yarmouth", "Grimsby", "Guildford", "Guiseley-Yeadon", "Halesowen", "Halifax", "Harlow", "Harpenden", "Harrogate", "Hartlepool", "Hastings", "Hatfield", "Hatfield-Stainforth", "Havant", "Haywards Heath", "Hazel Grove and Bramhill", "Hazlemere", "Heanor", "Hemel Hempstead", "Hereford", "Herne Bay", "Hertford", "Heswall", "Heywood", "High Wycombe", "Hinckley", "Hindley", "Hitchin", "Hoddesdon", "Holmfirth-Honley", "Honiton", "Horsham", "Houghton-le-Spring", "Hove", "Hoylake-West Kirby", "Hucknall", "Huddersfield", "Huyton-with-Roby", "Hyde", "Ilfracombe", "Ilkeston", "Ipswich", "Ivybridge", "Jarrow", "Keighley", "Kendal", "Kenilworth", "Kettering", "Kidderminster", "Kidsgrove", "King''s Lynn", "Kingsteignton", "Kingston upon Hull", "Kingswood", "Kirby in Ashfield", "Kirkby", "Lancaster", "Leamington", "Leatherhead", "Leeds", "Leicester", "Leigh", "Leighton Buzzard", "Letchworth", "Lewes", "Leyland", "Lichfield", "Lincoln", "Litherland", "Littlehampton", "Liverpool", "Locks Heath", "London", "Long Benton-Killingworth", "Long Eaton", "Loughborough", "Loughton", "Louth", "Lowestoft", "Luton", "Lyminge", "Lytham Saint Anne''s", "Mablethorpe and Sutton", "Macclesfield", "Maghull-Lydiate", "Maidenhead", "Maidstone", "Manchester", "Mangotsfield", "Mansfield", "Margate", "Matlock", "Melton Mowbray", "Middlesbrough", "Middleton", "Midsomer Norton", "Milton Keynes", "Morecambe", "Morley", "Nailsea", "Nantwich", "Nelson", "New Addington", "New Milton-Barton-on-Sea", "Newark-on-Trent", "Newburn", "Newbury", "Newcastle upon Tyne", "Newcastle-under-Lyme", "Newport", "Newton Abbot", "Newton Aycliffe", "North Hykeham", "North Shields", "Northallerton", "Northam", "Northampton", "Northfleet", "Northwich", "Norwich", "Nottingham", "Nuneaton", "Oakengates-Donnington", "Oakham", "Oldbury-Smethwick", "Oldham", "Ormskirk", "Ossett", "Oxford", "Paignton", "Penzance", "Peterborough", "Peterlee", "Plymouth", "Pontefract", "Poole", "Portsmouth", "Potters Bar", "Prescot", "Preston", "Prestwich", "Prestwood", "Pudsey", "Radcliffe", "Ramsgate", "Rawtenstall", "Rayleigh", "Reading", "Redcar", "Redditch", "Reigate", "Rochdale", "Rochester", "Rotherham", "Rottingdean", "Royal Tunbridge Wells", "Royton", "Rugby", "Rugeley", "Runcorn", "Rushden", "Ryde", "Saint Albans", "Saint Austell", "Saint Helens", "Sale", "Salford", "Salisbury", "Scarborough", "Scunthorpe", "Seaham", "Sevenoaks", "Sheffield", "Shipley", "Shrewsbury", "Sidmouth", "Sittingbourne", "Skegness", "Skelmersdale", "Sleaford", "Slough", "Solihull", "Sompting-Lancing", "South Shields", "Southampton", "Southend-on-Sea", "Southport", "Spalding-Pinchbeck", "St. Helens", "Stafford", "Staines", "Stalybridge", "Stamford", "Stanford le Hope-Corringham", "Stanley-Annfield Plain", "Staveley", "Stevenage", "Stockport", "Stockton Heath-Thelwall", "Stockton-on-Tees", "Stoke-on-Trent", "Stourbridge", "Stratford-upon-Avon", "Stretford", "Strood", "Stubbington", "Sunbury", "Sunderland", "Sutton Coldfield", "Sutton in Ashfield", "Swadlincote", "Swanley-Hextable", "Swindon", "Swinton and Pendlebury", "Tamworth", "Taunton", "Tavistock", "Teignmouth", "Telford", "Tenbury Wells", "Thatcham", "The Deepings", "Thetford", "Thornaby", "Thornton-Cleveleys", "Tiverton", "Tonbridge", "Torquay", "Totton", "Trowbridge", "Truro", "Tyldesley", "Urmston", "Wakefield", "Walkden", "Wallasey", "Wallsend", "Walsall", "Walton and Weybridge", "Warrington", "Warwick", "Washington", "Waterlooville", "Watford", "Wellingborough", "Welwyn Garden City", "West Bridgeford", "West Bromwich", "Westhoughton", "Weston-super-Mare", "Whitefield", "Whitehaven", "Whitley Bay", "Wickford", "Widnes", "Wigan", "Wigston", "Wilmslow", "Wimbourne Minster", "Winchester", "Windsor Berks", "Windsor-Eton", "Winsford", "Wisbech", "Witham", "Witney", "Woking-Byfleet", "Wokingham", "Wolverhampton", "Wolverton-Stony Stratford", "Worcester", "Worcestershire", "Workington", "Worksop", "Worthing", "Yeovil", "York"]
      },
      {
        name: "Essex",
        cities: ["Barking", "Basildon", "Brentwood", "Cambrridge", "Canvey Island", "Chelmsford", "Clacton-on-Sea", "Colchester", "Dagenham", "Dunmow", "Epping", "Essex", "Grays", "Harlow", "Ilford", "Ingatestone", "Leigh on Sea", "Rainham", "Romford", "Saffron Walden", "Stansted", "Wickford"]
      },
      {
        name: "Fermanagh",
        cities: ["Ballinamallard"]
      },
      {
        name: "Fife",
        cities: ["Kirkcaldy"]
      },
      {
        name: "Flintshire",
        cities: ["Ewloe", "Greenfield"]
      },
      {
        name: "Fulham",
        cities: ["Imperial Wharf"]
      },
      {
        name: "Gainsborough",
        cities: ["Kirton-in-Lindsey"]
      },
      {
        name: "Glocestershire",
        cities: ["Berkeley", "Cheltenham", "Churchham", "Cirencester", "East Kilbride", "Gloucester", "Lechlade", "Lydney", "Moreton in Marsh", "Stroud", "Tewkesbury"]
      },
      {
        name: "Gwent",
        cities: ["Blackwood", "Blaenavon", "Newport", "Tredegar"]
      },
      {
        name: "Hampshire",
        cities: ["Aldershot", "Alton", "Andover", "Bordon", "Botley", "Fareham", "Farnborough", "Fleet", "Fordingbridge", "Havant", "Hayling Island", "Hook", "Isle of wight", "Liphook", "Longparish", "Old Bishopstoke", "Petersfield", "Portsmouth", "Ringwood", "Romsey", "South Harting", "Southampton", "Waterlooville", "West Wellow", "Winchester"]
      },
      {
        name: "Hants",
        cities: ["Lymington", "Pennington", "Southampton"]
      },
      {
        name: "Herefordshire",
        cities: ["Kington", "Ledbury", "Leominster", "Saint Albans"]
      },
      {
        name: "Hertfordshire",
        cities: ["Barnet", "Bishops Stortford", "Borehamwood", "Brookmans Park", "Bushey", "Cheshunt", "Cuffley", "Elstree", "Hemel Hempstead", "Hertfordshire", "Kings Langley", "Much Hadham", "Radlett", "Rickmansworth", "Royston", "Stevenage", "Waltham Cross", "Watford", "Welwyn"]
      },
      {
        name: "Ireland",
        cities: []
      },
      {
        name: "Isle Of Man",
        cities: []
      },
      {
        name: "Isle of Wight",
        cities: []
      },
      {
        name: "Kenford",
        cities: ["Newmarket"]
      },
      {
        name: "Kent",
        cities: ["Ashford", "Beckenham", "Bromley", "Brookland", "Charing", "Chatam", "Crayford", "Edenbridge", "Erith", "Faversham", "Five Oak Green", "Folkestone", "Gillingham", "Gravesend", "Hartlip", "Hayes", "Herne Bay", "Hythe", "Lenham", "Maidstone", "Minster", "New Romney", "Orpington", "Paddock Wood", "Royal Tunbridge Wells", "Sandwich", "Sheerness", "Sidcup", "Sittingbourne", "Staplehurst", "Tunbridge Wells", "West Malling", "Westerham", "Whitstable", "canterbury"]
      },
      {
        name: "Kilmarnock",
        cities: ["Ayrshire"]
      },
      {
        name: "Lanarkshire",
        cities: ["Airdrie", "Glasgow"]
      },
      {
        name: "Lancashire",
        cities: ["Accrington", "Blackburn", "Blackpool", "Burnley", "Clayton-Le-Moors", "Cleveleys", "Darwen", "Gisburn", "Glasgow", "Greater Manchester", "Hamilton", "Kirkby Lonsdale", "Leyland", "Littleborough", "Lytham St Annes", "Nelson", "Oldham", "Out Rawcliffe", "Padiham", "Preston", "Rochdale", "Rossendale", "Tarleton", "Todmorden", "West Lancashire"]
      },
      {
        name: "Leicestershire",
        cities: ["Coalville", "Fleckney", "Leicester", "Loughborough", "Lutterworth", "Market Harborough", "Tur Langton"]
      },
      {
        name: "Lincolnshire",
        cities: ["Alford", "Bourne", "Casewick", "Digby", "Gainsborough", "Grimsby", "Immingham", "Laceby", "Lincoln", "Louth", "Market Deeping", "Market Rasen", "Spalding", "Spilsby", "Swinderby", "Thurlby", "Witham St Hughs"]
      },
      {
        name: "Llanymynech",
        cities: ["Llanymynech"]
      },
      {
        name: "London",
        cities: ["Abbeywood", "Aldgate", "Alperton", "Castledawson", "Edmonton", "Enfield", "Forest Gate", "Greenwich", "Hainault", "Hampstead", "Harrow Weald", "Hendon", "Kensington", "Leyton", "London", "Magherafelt", "Mill Hill", "Southwark", "Suffolk", "Sulham", "Victoria", "Walthamstow", "Wandsworth", "Wembley", "Wimbledon", "Woolwich"]
      },
      {
        name: "Ludlow",
        cities: ["Ludlow"]
      },
      {
        name: "Manchester",
        cities: ["Manchester", "Prestwich", "Salford", "Swinton", "Worsley"]
      },
      {
        name: "Mayfair",
        cities: ["Mayfair"]
      },
      {
        name: "Merseyside",
        cities: ["Southport"]
      },
      {
        name: "Mid Glamorgan",
        cities: []
      },
      {
        name: "Middlesex",
        cities: ["Brentford", "Brimsdown", "Drayton", "Edgware", "Feltham", "Greenford", "Hampton", "Harmondsworth", "Harrow", "Hayes", "Isleworth", "Northolt", "Northwood", "Perivale", "Pinner", "Ruislip", "Ruislip Manor", "South Harrow", "Southall", "Staines", "Stamore", "Stanmore", "Stanwell", "Sunbury", "Teddington", "Twickenham", "Uxbridge", "Watford", "Wembley", "West Drayton", "Wraysbury", "hounslow"]
      },
      {
        name: "Mildenhall",
        cities: ["Mildenhall"]
      },
      {
        name: "Monmouthshire",
        cities: ["Abergavenny", "Monmouth"]
      },
      {
        name: "Newton Stewart",
        cities: []
      },
      {
        name: "Norfolk",
        cities: ["Attleborough", "Bacton", "Briston", "Dereham", "Diss", "Downham Market", "Fakenham", "Garboldisham", "Gayton", "Glandford", "Great Yarmouth", "Heacham", "Hopton", "Kings Lynn", "Little Cressingham", "Norwich", "Sheringham", "Thetford", "Trunch", "Winordhan", "Wymondham"]
      },
      {
        name: "North Humberside",
        cities: []
      },
      {
        name: "North Yorkshire",
        cities: []
      },
      {
        name: "Northamptonshire",
        cities: ["Daventry", "Irthlingborough", "Middleton Cheney", "Oundle", "Towcester", "Welford", "Wellingborough", "Woodford Halse"]
      },
      {
        name: "Northants",
        cities: ["Brackley", "Desborough", "weedon"]
      },
      {
        name: "Northern Ireland",
        cities: []
      },
      {
        name: "Northumberland",
        cities: ["Bedlington", "Corbridge", "Cramlington", "Morpeth", "Northumberland", "Ponteland", "Wooler"]
      },
      {
        name: "Nottinghamshire",
        cities: ["Burton Joyce", "Cotgraves", "Gonalston", "Mansfield", "Newark", "Nottingham", "Pennyfoot Street", "Sandiacre", "Southwell", "Whatton"]
      },
      {
        name: "Oxford",
        cities: ["Bampton", "Banbury", "Bicester", "Blewbury", "Cheltenham", "Chipping Norton", "Drayton", "Eynsham", "Farringdon", "Henely on Thames", "Henley-on-Thames", "Oxford", "Shenington", "Thame", "Wantage"]
      },
      {
        name: "Powys",
        cities: ["Builth Wells", "Knighton", "Llanbrynmair", "New town", "Newtown", "Rhaeadr", "Welshpool"]
      },
      {
        name: "Roos-shire",
        cities: ["Hill of Fearn"]
      },
      {
        name: "SUSSEX",
        cities: ["Shoreham"]
      },
      {
        name: "Sark",
        cities: ["Sark"]
      },
      {
        name: "Scotland",
        cities: ["Aberdeen", "Alloa", "Alness", "Annan", "Arbroath", "Ardrossan", "Armadale", "Ayr", "Bathgate", "Blairgowrie", "Blantyre-Hamilton", "Boness", "Bonnybridge", "Broxburn", "Broxham", "Buckhaven", "Burntisland", "Carluke", "Carnoustie", "Coatbridge", "Cowdenbeath", "Cumbernauld", "Cumnock", "Cupar", "Dalbeattie", "Dalkeith", "Dingwall", "Dumbarton", "Dumfries", "Dundee", "Dunfermline", "Dunoon", "East Kilbride", "Edimburah", "Edinburgh", "Elgin", "Ellon", "Erskine", "Falkirk", "Forfar", "Forres", "Fort William", "Fraserburgh", "Galashiels", "Galston-Newmilns", "Girvan", "Glasgow", "Glenrothes", "Greengairs", "Greenock", "Haddington", "Hawick", "Helensburgh", "Insch", "Inverkeithing-Dalgety Bay", "Inverness", "Inverurie", "Irvine", "Isle of Lewis", "Kilmarnock", "Kilsyth", "Kilwinning", "Kirkcaldy", "Kirkintilloch-Lenzie", "Kirkwall", "Lanark", "Largs", "Larkhall", "Lerwick", "Linlithgow", "Livingston", "Loanhead", "Montrose", "Motherwell", "Nairn", "Newtown Saint Boswells", "Paisley", "Penicuik", "Perth", "Peterhead", "Saint Andrews", "Selkirkshire", "Shotts", "Stirling", "Stonehaven", "Stornoway", "Stranraer", "Tranent", "Troon", "Whitburn"]
      },
      {
        name: "Scottish Borders",
        cities: []
      },
      {
        name: "Shropshire",
        cities: ["Bishops Castle", "Bridgnorth", "Bucknell", "Drayton", "Greete", "Hinstock", "Jackfield", "Ludlow", "Much Wenlock", "Oswestry", "Ryton", "Shifnal", "Shrewsbury", "Telford", "Whitchurch"]
      },
      {
        name: "Somerset",
        cities: ["Bath", "Brent Knoll", "Castle Cary", "Shepton Mallet", "Somerset", "Taunton", "Wedmore", "Wellington", "Weston-super-Mare"]
      },
      {
        name: "South Glamorgan",
        cities: []
      },
      {
        name: "South Wales",
        cities: []
      },
      {
        name: "South Yorkshire",
        cities: []
      },
      {
        name: "Southwell",
        cities: []
      },
      {
        name: "Staffordshire",
        cities: ["Burton-on-Trent", "Hednesford", "Stoke on Trent", "Stone"]
      },
      {
        name: "Strabane",
        cities: ["Strabane"]
      },
      {
        name: "Suffolk",
        cities: ["Bury St Edmunds", "Felixstowe", "Haverhill", "Leiston", "Lowestoft", "Stowmarket", "Sudbury", "Woodbridge"]
      },
      {
        name: "Surrey",
        cities: ["Ashtead", "Bagshot", "Betchworth", "Bletchingley", "Carshalton", "Chertsey", "Claygate", "Croydon", "Dorking", "Effingham", "Epsom", "Farnham", "Haslemere", "Kingston Upon Thames", "Leatherhead", "Mitcham", "New Malden", "Redhill", "Richmond", "Salfords", "Shepperton", "Stoneleigh", "Surbiton", "Surrey", "Tadworth", "Walton on Thames", "West Molesey", "Wisley", "Woking"]
      },
      {
        name: "Sussex",
        cities: ["Brighton", "Henfield", "Sussex", "Worthing"]
      },
      {
        name: "Twickenham",
        cities: ["Twickenham"]
      },
      {
        name: "Tyne and Wear",
        cities: []
      },
      {
        name: "Tyrone",
        cities: ["Omagh"]
      },
      {
        name: "Utah",
        cities: ["Santaquin"]
      },
      {
        name: "Wales",
        cities: ["Aberdare", "Aberystwyth", "Barry", "Brecon", "Bridgend", "Brynmawr", "Caernarfon", "Caerphily", "Caldicot", "Cardiff", "Carmarthen", "Colwyn Bay", "Connahs Quay", "Cwmbran", "Dolgellau", "Ebbw Vale", "Gaerwen", "Gwynedd", "Haverfordwest", "Isle of Anglesey", "Islwyn", "Llandrindod Wells", "Llanelli", "Llangefni", "Maesteg", "Merthyr Tydfil", "Mold", "Mountain Ash-Abercynon", "Neath", "Newport", "Pembrokeshire", "Penarth", "Pencader", "Pontypool", "Pontypridd", "Port Talbot", "Queensferry", "Rhondda", "Rhyl", "Ruthin", "Shotton-Hawarden", "St. Asaph", "Swansea", "West Glamorgan", "Wrexham"]
      },
      {
        name: "Warwickshire",
        cities: ["Alcester", "Coventry", "Henley in Arden", "Nuneaton", "Pershore", "Southam", "Warwick"]
      },
      {
        name: "West Lothian",
        cities: []
      },
      {
        name: "West Midlands",
        cities: []
      },
      {
        name: "West Sussex",
        cities: []
      },
      {
        name: "West Yorkshire",
        cities: []
      },
      {
        name: "Whissendine",
        cities: ["Whissendine"]
      },
      {
        name: "Wiltshire",
        cities: ["Amesbury", "Bradford on Avon", "Calne", "Chippenham", "Corsham", "Cosham", "Devizes", "Downton", "Malmesbury", "Marlborough", "Melksham", "Pewsey", "Salisbury", "Southwick", "Swindon", "Warminster", "Westbury"]
      },
      {
        name: "Wokingham",
        cities: ["Winnersh"]
      },
      {
        name: "Worcestershire",
        cities: ["Evesham", "Hartlebury", "Kidderminster", "Pershore", "Redditch", "Worcester"]
      },
      {
        name: "Wrexham",
        cities: ["Caergwrle", "Ruabon"]
      },
      {
        name: "Wurttemberg",
        cities: ["Neuffen"]
      },
      {
        name: "Yorkshire",
        cities: ["Beverley", "Malton", "Mexborough"]
      }
    ],
    isoAlpha2: "GB",
    isoAlpha3: "GBR",
    isoNumeric: 826
  },
  {
    name: "United States",
    flag: "🇺🇸",
    currency: {
      code: "USD",
      name: "Dollar",
      symbol: "$"
    },
    states: [
      {
        name: "AA",
        cities: []
      },
      {
        name: "AE",
        cities: []
      },
      {
        name: "AP",
        cities: []
      },
      {
        name: "Alabama",
        cities: ["Alabaster", "Albertville", "Alexander City", "Anniston", "Arab", "Ashville", "Athens", "Atmore", "Auburn", "Bessemer", "Birmingham", "Capshaw", "Center Point", "Childersburg", "Cullman", "Daleville", "Daphne", "Decatur", "Dothan", "Enterprise", "Eufaula", "Fairfield", "Fairhope", "Florence", "Fort Payne", "Gadsden", "Grand Bay", "Grove Hill", "Guntersville", "Hampton Cove", "Hanceville", "Hartselle", "Headland", "Helena", "Hodges", "Homewood", "Hoover", "Hueytown", "Huntsville", "Jacksonville", "Jasper", "Leeds", "Luverne", "Madison", "Mobile", "Montgomery", "Mountain Brook", "Muscle Shoals", "Northport", "Notasulga", "Opelika", "Oxford", "Ozark", "Pelham", "Pell City", "Pennsylvania", "Phenix City", "Prattville", "Prichard", "Ramer", "Roanoke", "Saraland", "Scottsboro", "Selma", "Sheffield", "Smiths", "Sumiton", "Sylacauga", "Talladega", "Thomasville", "Trafford", "Troy", "Trussville", "Tuscaloosa", "Tuskegee", "Vestavia Hills"]
      },
      {
        name: "Alaska",
        cities: ["Anchorage", "Barrow", "Bethel", "College", "Fairbanks", "Homer", "Juneau", "Kenai", "Ketchikan", "Kodiak", "Nome", "Palmer", "Sitka", "Soldotna", "Sterling", "Unalaska", "Valdez", "Wasilla"]
      },
      {
        name: "Arizona",
        cities: ["Apache Junction", "Avondale", "Bisbee", "Bouse", "Bullhead City", "Carefree", "Casa Grande", "Casas Adobes", "Chandler", "Clarkdale", "Cottonwood", "Douglas", "Drexel Heights", "El Mirage", "Flagstaff", "Florence", "Flowing Wells", "Fort Mohave", "Fortuna Foothills", "Fountain Hills", "Gilbert", "Glendale", "Globe", "Goodyear", "Green Valley", "Kingman", "Lake Havasu City", "Laveen", "Litchfield Park", "Marana", "Mesa", "New Kingman-Butler", "Nogales", "Oracle", "Oro Valley", "Paradise Valley", "Parker", "Payson", "Peoria", "Phoenix", "Pine", "Pinetop", "Prescott", "Prescott Valley", "Quartzsite", "Queen Creek", "Rio Rico", "Safford", "San Luis", "Scottsdale", "Sedona", "Sierra Vista", "Sierra Vista Southeast", "Sun City", "Sun City West", "Surprise", "Tempe", "Tombstone", "Tucson", "Winslow", "Yuma"]
      },
      {
        name: "Arkansas",
        cities: ["Alexander", "Arkadelphia", "Batesville", "Bella Vista", "Benton", "Bentonville", "Berryville", "Blytheville", "Cabot", "Camden", "Cherry Valley", "Conway", "Corning", "El Dorado", "Fayetteville", "Forrest City", "Fort Smith", "Harrison", "Hope", "Hot Springs", "Jacksonville", "Jonesboro", "Lake City", "Little Rock", "Magnolia", "Mount Vernon", "Mountain Home", "Norfork", "North Little Rock", "Paragould", "Piggott", "Pine Bluff", "Pocahontas", "Prescott", "Quitman", "Rogers", "Russellville", "Searcy", "Sheridan", "Sherwood", "Siloam Springs", "Springdale", "Stuttgart", "Texarkana", "Van Buren", "Ward", "West Helena", "West Memphis", "Wynne"]
      },
      {
        name: "California",
        cities: ["Acton", "Adelanto", "Agoura Hills", "Aguanga", "Alameda", "Alamo", "Albany", "Alhambra", "Aliso Viejo", "Alondra Park", "Alpine", "Alta Loma", "Altadena", "American Canyon", "Anaheim", "Anderson", "Antelope", "Antioch", "Apple Valley", "Aptos", "Arcadia", "Arcata", "Arden-Arcade", "Arroyo Grande", "Artesia", "Arvin", "Ashland", "Atascadero", "Atwater", "Auburn", "Avalon", "Avenal", "Avocado Heights", "Azusa", "Bakersfield", "Baldwin Park", "Banning", "Barstow", "Bay Point", "Baywood-Los Osos", "Bear Valley Springs", "Beaumont", "Bell", "Bell Gardens", "Bellflower", "Belmont", "Ben Lomond", "Benicia", "Berkeley", "Beverly Hills", "Big Bear Lake", "Bloomington", "Blythe", "Bonita", "Bostonia", "Brawley", "Brea", "Brentwood", "Brisbane", "Brookdale", "Buena Park", "Burbank", "Burlingame", "Burnham", "Byron", "Calabasas", "Calexico", "California City", "Camarillo", "Cameron Park", "Camino", "Camp Pendleton North", "Camp Pendleton South", "Campbell", "Canoga Park", "Canyon Lake", "Capitola", "Carlsbad", "Carmel", "Carmel Valley", "Carmichael", "Carpinteria", "Carson", "Casa de Oro-Mount Helix", "Castaic", "Castro Valley", "Cathedral City", "Cayucos", "Ceres", "Cerritos", "Charter Oak", "Chatsworth", "Cherryland", "Chico", "Chino", "Chino Hills", "Chula Vista", "Citrus", "Citrus Heights", "City of Commerce", "City of Industry", "Claremont", "Clearlake", "Clovis", "Coachella", "Coalinga", "Colfax", "Colton", "Colusa", "Commerce", "Compton", "Concord", "Corcoran", "Corning", "Corona", "Coronado", "Corte Madera", "Costa Mesa", "Cotati", "Cottonwood", "Country Club", "Covina", "Crestline", "Cudahy", "Culver City", "Cupertino", "Cypress", "Daly City", "Dana Point", "Danville", "Davis", "Del Mar", "Delano", "Desert Hot Springs", "Diamond Bar", "Dinuba", "Dixon", "Downey", "Duarte", "Dublin", "East Foothills", "East Hemet", "East La Mirada", "East Palo Alto", "East San Gabriel", "El Cajon", "El Centro", "El Cerrito", "El Granada", "El Monte", "El Paso de Robles", "El Segundo", "El Sobrante", "Elk Grove", "Emeryville", "Encinitas", "Encino", "Escondido", "Etna", "Eureka", "Exeter", "Fair Oaks", "Fairfax", "Fairfield", "Fairview", "Fallbrook", "Ferndale", "Fillmore", "Florence-Graham", "Florin", "Folsom", "Fontana", "Foothill Farms", "Foothill Ranch", "Forestville", "Fort Bragg", "Fortuna", "Foster City", "Fountain Valley", "Freedom", "Fremont", "Fresno", "Fullerton", "Galt", "Garberville", "Garden Acres", "Garden Grove", "Gardena", "Georgetown", "Gilroy", "Glen Avon", "Glendale", "Glendora", "Goleta", "Gonzales", "Granada Hills", "Grand Terrace", "Grass Valley", "Greenfield", "Grover Beach", "Gualala", "Guerneville", "Hacienda Heights", "Half Moon Bay", "Hanford", "Harbor City", "Hawaiian Gardens", "Hawthorne", "Hayward", "Hemet", "Hercules", "Hermosa Beach", "Hesperia", "Highland", "Hillsborough", "Hollister", "Hollywood", "Huntington Beach", "Huntington Park", "Idyllwild", "Imperial Beach", "Indio", "Industry", "Inglewood", "Irvine", "Irwindale", "Isla Vista", "Jackson", "Jamul", "La Canada Flintridge", "La Crescenta-Montrose", "La Habra", "La Jolla", "La Mesa", "La Mirada", "La Palma", "La Presa", "La Puente", "La Quinta", "La Riviera", "La Verne", "LaVerne", "Ladera Ranch", "Lafayette", "Laguna", "Laguna Beach", "Laguna Hills", "Laguna Niguel", "Lake Elsinore", "Lake Forest", "Lakeside", "Lakewood", "Lamont", "Lancaster", "Larkspur", "Lawndale", "Laytonville", "Lemon Grove", "Lemoore", "Lennox", "Linda", "Lindsay", "Live Oak", "Livermore", "Livingston", "Lodi", "Loma Linda", "Lomita", "Lompoc", "Long Beach", "Los Alamitos", "Los Altos", "Los Angeles", "Los Angeles East", "Los Banos", "Los Gatos", "Los Olivos", "Lynwood", "MacKinleyville", "Madera", "Magalia", "Malibu", "Mammoth Lakes", "Manhattan Beach", "Manteca", "Marina", "Marina del Rey", "Mariposa", "Marshall", "Martinez", "Marysville", "Maywood", "Menlo Park", "Merced", "Middletown", "Midway City", "Mill Valley", "Millbrae", "Milpitas", "Mira Loma", "Miranda", "Mission Viejo", "Modesto", "Monclair", "Monrovia", "Montara", "Montclair", "Montebello", "Montecito", "Monterey", "Monterey Park", "Moorpark", "Moraga Town", "Moreno Valley", "Morgan Hill", "Morro Bay", "Moss Beach", "Mount Shasta", "Mountain View", "Murrieta", "N. Hollywood", "Napa", "National City", "Nevada City", "Newark", "Newport Beach", "Norco", "North Auburn", "North Fair Oaks", "North Fork", "North Highlands", "North Hills", "North Hollywood", "Northridge", "Norwalk", "Novato", "Nuevo", "Oak View", "Oakdale", "Oakhurst", "Oakland", "Oakley", "Oceanside", "Oildale", "Ojai", "Olivehurst", "Ontario", "Orange", "Orangevale", "Orcutt", "Oregon House", "Orinda", "Oroville", "Oxnard", "Pacific Grove", "Pacific Palisades", "Pacifica", "Pacoima", "Pajaro", "Palm Desert", "Palm Springs", "Palmdale", "Palo Alto", "Palos Verdes Estates", "Pamona", "Panorama City", "Paradise", "Paramount", "Parkway-South Sacramento", "Parlier", "Pasadena", "Patterson", "Pedley", "Perris", "Petaluma", "Pico Rivera", "Piedmont", "Pinole", "Pismo Beach", "Pittsburg", "Placentia", "Placerville", "Playa del Rey", "Pleasant Hill", "Pleasanton", "Plymouth", "Point Reyes Station", "Pollock Pines", "Pomona", "Port Costa", "Port Hueneme", "Porterville", "Poway", "Quartz Hill", "Ramona", "Rancho Cordova", "Rancho Cucamonga", "Rancho Dominguez", "Rancho Mirage", "Rancho Murieta", "Rancho Palos Verdes", "Rancho San Diego", "Rancho Santa Margarita", "Red Bluff", "Redding", "Redlands", "Redondo Beach", "Redway", "Redwood City", "Reedley", "Reseda", "Rialto", "Richmond", "Ridgecrest", "Rio Linda", "Rio Nido", "Rio del Mar", "Riverbank", "Riverside", "Rocklin", "Rohnert Park", "Rolling Hills", "Rosamond", "Roseland", "Rosemead", "Rosemont", "Roseville", "Rossmoor", "Rowland Heights", "Rubidoux", "Sacramento", "Salinas", "San Anselmo", "San Bernardino", "San Bruno", "San Buenaventura", "San Carlos", "San Clemente", "San Diego", "San Dimas", "San Fernando", "San Francisco", "San Gabriel", "San Jacinto", "San Jose", "San Juan Capistrano", "San Leandro", "San Lorenzo", "San Luis Obispo", "San Marcos", "San Marino", "San Mateo", "San Pablo", "San Pedro", "San Rafael", "San Ramon", "San Ysidro", "Sanger", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Fe Springs", "Santa Maria", "Santa Monica", "Santa Paula", "Santa Rosa", "Santa Ynez", "Santee", "Saratoga", "Sausalito", "Scotts Valley", "Seal Beach", "Seaside", "Sebastopol", "Selma", "Shafter", "Sherman Oaks", "Sierra Madre", "Signal Hill", "Simi Valley", "Solana Beach", "Soledad", "Solvang", "Sonoma", "Sonora", "Soquel", "South El Monte", "South Gate", "South Lake Tahoe", "South Pasadena", "South San Francisco", "South San Jose Hills", "South Whittier", "South Yuba City", "Spring Valley", "St. Helena", "Stanford", "Stanton", "Stevenson Ranch", "Stockton", "Strathmore", "Studio City", "Suisun City", "Sun City", "Sun Valley", "Sunland", "Sunnyvale", "Susanville", "Sutter", "Sylmar", "Tahoe City", "Tamalpais-Homestead Valley", "Tarzana", "Tehachapi", "Temecula", "Temple City", "Thousand Oaks", "Tiburon", "Topanga", "Torrance", "Trabuco Canyon", "Tracy", "Trinidad", "Trona", "Truckee", "Tujunga", "Tulare", "Turlock", "Tustin", "Tustin Foothills", "Twentynine Palms", "Twentynine Palms Base", "Ukiah", "Union City", "Upland", "Vacaville", "Valencia", "Valinda", "Valle Vista", "Vallejo", "Valley Center", "Valley Glen", "Valley Village", "Van Nuys", "Vandenberg Air Force Base", "Venice", "Ventura", "Vernon", "Victorville", "View Park-Windsor Hills", "Vincent", "Visalia", "Vista", "Walnut", "Walnut Creek", "Walnut Park", "Wasco", "Waterford", "Watsonville", "West Athens", "West Carson", "West Covina", "West Hills", "West Hollywood", "West Puente Valley", "West Sacramento", "West Whittier-Los Nietos", "Westlake Village", "Westminster", "Westmont", "Whittier", "Wildomar", "Willits", "Willowbrook", "Wilmington", "Windsor", "Woodland", "Woodland Hills", "Yorba Linda", "Yreka", "Yuba City", "Yucaipa", "Yucca Valley"]
      },
      {
        name: "Colorado",
        cities: ["Air Force Academy", "Alamosa", "Applewood", "Arvada", "Aspen", "Aurora", "Avon", "Basalt", "Bellvue", "Black Forest", "Boulder", "Brighton", "Broomfield", "Canon City", "Carbondale", "Castle Rock", "Castlewood", "Centennial", "Cimarron Hills", "Clifton", "Colorado Springs", "Columbine", "Commerce City", "Cortez", "Crawford", "Denver", "Durango", "Edwards", "Elizabeth", "Englewood", "Estes Park", "Evergreen", "Federal Heights", "Fort Carson", "Fort Collins", "Fort Morgan", "Fountain", "Golden", "Grand Junction", "Greeley", "Greenwood Village", "Gunbarrel", "Highlands Ranch", "Holly", "Ken Caryl", "Lafayette", "Lakewood", "Littleton", "Longmont", "Louisville", "Loveland", "Lyons", "Montrose", "Monument", "Nederland", "Niwot", "Northglenn", "Pagosa Springs", "Parker", "Penrose", "Peyton", "Pueblo", "Redlands", "Ridgway", "Rifle", "Rocky Ford", "Sanford", "Security-Widefield", "Sherrelwood", "Silver Cliff", "Snowmass Village", "Southglenn", "Steamboat Springs", "Sterling", "Superior", "Telluride", "Thornton", "Vail", "Welby", "Westcliffe", "Westminster", "Wheat Ridge", "Woodland Park"]
      },
      {
        name: "Connecticut",
        cities: ["Ansonia", "Avon", "Bethel", "Bethlehem", "Bloomfield", "Branford", "Bridgeport", "Bristol", "Canaan", "Canton", "Central Manchester", "Cheshire", "Colchester", "Conning Towers-Nautilus Park", "Coscob", "Cranbury", "Cromwell", "Danbury", "Darien", "Dayville", "Derby", "East Hartford", "East Haven", "Ellington", "Enfield", "Fairfield", "Farmington", "Glastonbury", "Greens Farms", "Greenwich", "Groton", "Guilford", "Haddam", "Hamden", "Hartford", "Harwinton", "Lakeville", "Lyme", "Madison", "Manchester", "Meriden", "Middletown", "Milford", "Monroe", "Mystic", "Naugatuck", "New Britain", "New Canaan", "New Hartford", "New Haven", "New London", "New Milford", "New Town", "Newington", "North Haven", "North Stonington", "Norwalk", "Norwich", "Old Saybrook", "Oneco", "Orange", "Pawcatuck", "Plainville", "Portland", "Putnam", "Riverside", "Rocky Hill", "Rowayton", "Sandy Hook", "Seymour", "Sharon", "Shelton", "South Windsor", "Southington", "Southport", "Stamford", "Sterling", "Storrs", "Stratford", "Suffield", "Taftville", "Terryville", "Tolland", "Torrington", "Trumbull", "Vernon", "Wallingford Center", "Waterbury", "Watertown", "West Hartford", "West Haven", "Weston", "Westport", "Wethersfield", "Willimantic", "Wilton", "Windsor", "Windsor Locks", "Winsted", "Woodbury", "Woodstock", "pomfret"]
      },
      {
        name: "Delaware",
        cities: ["Bear", "Brookside", "Claymont", "Dover", "Dover Base Housing", "Edgemoor", "Elsmere", "Georgetown", "Greenville", "Middletown", "Milford", "Milton", "Newark", "Pike Creek", "Seaford", "Smyrna", "Stanton", "Talleyville", "Wilmington", "Wilmington Manor"]
      },
      {
        name: "District of Columbia",
        cities: []
      },
      {
        name: "Florida",
        cities: ["Alachua", "Altamonte Springs", "Apopka", "Atlantic Beach", "Auburndale", "Aventura", "Avon Park", "Azalea Park", "Bal Harbour", "Bartow", "Bayonet Point", "Bayshore Gardens", "Beach", "Bellair-Meadowbrook Terrace", "Belle Glade", "Bellview", "Beverly Hills", "Bloomingdale", "Boca Raton", "Boca del Mar", "Bonita Springs", "Boynton Beach", "Bradenton", "Brandon", "Brent", "Brooksville", "Brownsville", "Buena Ventura Lakes", "Bunnell", "Callaway", "Cape Coral", "Carol City", "Casselberry", "Catalina Foothills", "Celebration", "Century Village", "Citrus Park", "Clearwater", "Clermont", "Cocoa", "Cocoa Beach", "Coconut Creek", "Coconut Grove", "Conway", "Cooper City", "Coral Gables", "Coral Springs", "Coral Terrace", "Cortlandt Manor", "Country Club", "Crestview", "Crystal River", "Cutler", "Cutler Ridge", "Cypress Gardens", "Cypress Lake", "Dania", "Dania Beach", "Davie", "Daytona Beach", "De Bary", "De Funiak Springs", "De Land", "Debary", "Deer Park", "Deerfield Beach", "Del Rio", "Delray Beach", "Deltona", "Destin", "Doctor Phillips", "Dora", "Doral", "Dundee", "Dunedin", "East Lake", "Edgewater", "Eglin Air Force Base", "Egypt Lake-Leto", "Elfers", "Englewood", "Ensley", "Eustis", "Fairview Shores", "Fern Park", "Fernandina Beach", "Ferry Pass", "Flagler Beach", "Floral City", "Florida City", "Florida Ridge", "Forest City", "Fort Lauderdale", "Fort Myers", "Fort Myers Beach", "Fort Pierce", "Fort Walton Beach", "Freeport", "Fruitville", "Ft. Lauderdale", "Gainesville", "Gladeview", "Glenvar Heights", "Golden Gate", "Golden Glades", "Goldenrod", "Greater Carrollwood", "Greater Northdale", "Green Cove Springs", "Greenacres", "Gulf Gate Estates", "Gulfport", "Haines City", "Hallandale", "Hallandale Beach", "Hammocks", "Hamptons at Boca Raton", "Havana", "Hialeah", "Hialeah Gardens", "Highpoint", "Hobe Sound", "Holiday", "Holly Hill", "Hollywood", "Homestead", "Homosassa", "Hudson", "Immokalee", "Inverness", "Iona", "Ives Estates", "Jacksonville", "Jacksonville Beach", "Jasmine Estates", "Jensen Beach", "Jupiter", "Kendale Lakes", "Kendall", "Kendall West", "Key Biscayne", "Key Largo", "Key West", "Kings Point", "Kissimmee", "Lady Lake", "Lake Alfred", "Lake City", "Lake Lucerne", "Lake Magdalene", "Lake Mary", "Lake Placid", "Lake Wales", "Lake Worth", "Lakeland", "Lakeland Highlands", "Lakeside", "Land O''Lakes", "Largo", "Lauderdale Lakes", "Lauderhill", "Laurel", "Lecanto", "Leesburg", "Lehigh Acres", "Leisure City", "Lighthouse Point", "Lockhart", "Longwood", "Loxahatchee", "Lutz", "Lynn Haven", "Madison", "Maitland", "Mango", "Marathon", "Marco", "Margate", "Medley", "Melbourne", "Merritt Island", "Miami", "Miami Beach", "Miami Gardens", "Miami Lakes", "Miami Shores", "Miami Springs", "Micco", "Milton", "Mims", "Miramar", "Mulberry", "Myrtle Grove", "Naples", "Naples Park", "Naranja", "New Port Richey", "New Port Richey East", "New Smyrna Beach", "Niceville", "Nokomis", "Norland", "North Andrews Gardens", "North Fort Myers", "North Lauderdale", "North Miami", "North Miami Beach", "North Naples", "North Palm Beach", "North Port", "Oak Ridge", "Oakland Park", "Ocala", "Ocoee", "Ojus", "Okeechobee", "Oldsmar", "Olympia Heights", "Opa-locka", "Orange City", "Orange Park", "Orlando", "Ormond Beach", "Ormond-by-the-Sea", "Osprey", "Oviedo", "Palatka", "Palm Bay", "Palm Beach", "Palm Beach Gardens", "Palm City", "Palm Coast", "Palm Harbor", "Palm River-Clair Mel", "Palm Valley", "Palmetto", "Palmetto Estates", "Panama City", "Parkland", "Pembroke Park", "Pembroke Pines", "Pensacola", "Perrine", "Pine Castle", "Pine Hills", "Pinellas Park", "Pinewood", "Plant City", "Plantation", "Pompano Beach", "Pompano Beach Highlands", "Ponte Vedra", "Port Charlotte", "Port Orange", "Port Saint John", "Port Saint Lucie", "Punta Gorda", "Quincy", "Redington Shores", "Richmond Heights", "Richmond West", "Riverview", "Riviera Beach", "Rockledge", "Royal Palm Beach", "Safety Harbor", "Saint Augustine", "Saint Cloud", "Saint Petersburg", "Saint Petersburg Beach", "San Carlos Park", "Sandalfoot Cove", "Sanford", "Sanibel", "Sarasota", "Sarasota Springs", "Satellite Beach", "Scott Lake", "Sebastian", "Seminole", "Shalimar", "South Bradenton", "South Daytona", "South Miami", "South Miami Heights", "South Patrick Shores", "South Venice", "Spring Hill", "Stuart", "Sunny Isles", "Sunrise", "Sunset", "Sweetwater", "Tallahassee", "Tamarac", "Tamiami", "Tampa", "Tarpon Springs", "Temple Terrace", "The Crossings", "The Hammocks", "Titusville", "Town''n''Country", "University", "University Park", "Valrico", "Venice", "Vero Beach", "Vero Beach South", "Villas", "Warrington", "Wekiva Springs", "Wellington", "Wesley Chapel", "West Little River", "West Palm Beach", "West Park", "West Pensacola", "West and East Lealman", "Westchester", "Weston", "Westview", "Westwood Lakes", "Wilton Manors", "Windermere", "Winston", "Winter Garden", "Winter Haven", "Winter Park", "Winter Springs", "Wright", "Yeehaw Junction"]
      },
      {
        name: "Georgia",
        cities: ["Acworth", "Adel", "Albany", "Alma", "Alpharetta", "Americus", "Athens", "Athens-Clarke", "Atlanta", "Auburn", "Augusta-Richmond", "Austell", "Bainbridge", "Barnesville", "Belvedere Park", "Bogart", "Bowdon", "Braselton", "Brunswick", "Buford", "Byron", "Cairo", "Calhoun", "Candler-MacAfee", "Canton", "Carrollton", "Cartersville", "Chamblee", "Clarkston", "Cochran", "College Park", "Columbus", "Comer", "Conley", "Conyers", "Cordele", "Covington", "Culloden", "Cumming", "Dacula", "Dahlonega", "Dallas", "Dalton", "Decatur", "Dewy Rose", "Doraville", "Douglas", "Douglasville", "Druid Hills", "Dublin", "Duluth", "Dunwoody", "East Point", "Elberton", "Ellenwood", "Ellijay", "Evans", "Fairmount", "Fayetteville", "Flowery Branch", "Folkston", "Forest Park", "Fort Benning South", "Fort Gordon", "Fort Stewart", "Fort Valley", "Foxborough", "Gaines School", "Gainesville", "Glennville", "Gresham Park", "Griffin", "Grovetown", "Hampton", "Hartwell", "Hinesville", "Jackson", "Jonesboro", "Kennesaw", "Kingsland", "LaGrange", "Lawrenceville", "Lilburn", "Lithia Springs", "Lithonia", "Locust Grove", "Loganville", "Louisville", "Mableton", "Macon", "Madison", "Marietta", "Martinez", "McDonough", "Milledgeville", "Monroe", "Morrow", "Moultrie", "Mountain", "Mountain Park", "Newnan", "Norcross", "North Atlanta", "North Decatur", "North Druid Hills", "Oakwood", "Panthersville", "Peachtree City", "Powder Springs", "Redan", "Rex", "Riverdale", "Rome", "Rossville", "Roswell", "Saint Marys", "Saint Simons", "Sandy Springs", "Savannah", "Scottdale", "Sharpsburg", "Smyrna", "Snellville", "Sparks", "Statesboro", "Stockbridge", "Stone Mountain", "Suwanee", "Thomasville", "Tifton", "Tucker", "Tybee Island", "Union City", "Valdosta", "Vidalia", "Villa Rica", "Warner Robins", "Waycross", "Wilmington Island", "Winder", "Woodbine", "Woodstock"]
      },
      {
        name: "Hawaii",
        cities: ["Ahuimanu", "Aiea", "Aliamanu", "Ewa Beach", "Haiku", "Halawa", "Hanalei", "Hilo", "Holualoa", "Honolulu", "Kahului", "Kailua", "Kalaheo", "Kamuela", "Kaneohe", "Kaneohe Station", "Kapaa", "Kapolei", "Kihei", "Kula", "Lahaina", "Lanai City", "Lihue", "Makaha", "Makakilo City", "Makawao", "Mi-Wuk Village", "Mililani Town", "Naalehu", "Nanakuli", "Pahoa", "Pearl City", "Schofield Barracks", "Wahiawa", "Waialua", "Waianae", "Wailuku", "Waimalu", "Waipahu", "Waipio"]
      },
      {
        name: "Idaho",
        cities: ["Blackfoot", "Boise", "Boise City", "Boulder Hill", "Burley", "Caldwell", "Coeur d''Alene", "Eagle", "Garden City", "Idaho Falls", "Lewiston", "Meridian", "Moscow", "Mountain Home", "Nampa", "Payette", "Pocatello", "Post Falls", "Preston", "Rexburg", "Rigby", "Sandpoint", "Troy", "Twin Falls"]
      },
      {
        name: "Illinois",
        cities: ["Addison", "Algonquin", "Alsip", "Alton", "Arlington Heights", "Aurora", "Bannockburn", "Barrington", "Bartlett", "Batavia", "Beach Park", "Beardstown", "Bedford Park", "Belleville", "Bellwood", "Belvidere", "Bensenville", "Berwyn", "Bloomingdale", "Bloomington", "Blue Island", "Boling Brook", "Bolingbrook", "Bourbonnais", "Bradley", "Breese", "Bridgeview", "Brimfield", "Broadview", "Brookfield", "Buffalo Grove", "Burbank", "Burr Ridge", "Cahokia", "Calumet City", "Canton", "Carbondale", "Carlinville", "Carol Stream", "Carpentersville", "Carthage", "Cary", "Centralia", "Champaign", "Channahon", "Charleston", "Chicago", "Chicago Heights", "Chicago Ridge", "Cicero", "Coal City", "Collinsville", "Congerville", "Country Club Hills", "Crest Hill", "Crestwood", "Crystal Lake", "Danville", "Darien", "DeKalb", "Decatur", "Deerfield", "Des Plaines", "Dixon", "Dolton", "Downers Grove", "Earlville", "East Dundee", "East Moline", "East Peoria", "East Saint Louis", "Edwardsville", "Effingham", "Elburn", "Elgin", "Elk Grove", "Elk Grove Village", "Elmhurst", "Elmwood Park", "Evanston", "Evergreen Park", "Fairview Heights", "Flossmoor", "Forest Park", "Frankfort", "Franklin Park", "Freeport", "Galena", "Galesburg", "Geneva", "Genoa", "Glen Carbon", "Glen Ellyn", "Glencoe", "Glendale Heights", "Glenview", "Godfrey", "Goodings Grove", "Granite City", "Grayslake", "Gurnee", "Hamilton", "Hampshire", "Hanover Park", "Harvard", "Harvey", "Hawthorn Woods", "Hazel Crest", "Herrin", "Hickory Hills", "Highland Park", "Hinsdale", "Hoffman Estates", "Homewood", "Huntley", "Illinois City", "Ingleside", "Itasca", "Jacksonville", "Johnston City", "Joliet", "Justice", "Kankakee", "Kenilworth", "Kewanee", "La Grange", "La Grange Park", "La Salle", "Lake Bluff", "Lake Forest", "Lake Zurich", "Lake in the Hills", "Lansing", "Lemont", "Libertyville", "Lincoln", "Lincolnwood", "Lindenhurst", "Lindenwood", "Lisle", "Lockport", "Lombard", "Long Grove", "Loves Park", "Lyons", "MacHenry", "Machesney Park", "Macomb", "Marion", "Markham", "Marshall", "Martinsville", "Maryville", "Matteson", "Mattoon", "Maywood", "McHenry", "Melrose Park", "Midlothian", "Milan", "Minooka", "Mokena", "Moline", "Momence", "Montgomery", "Monticello", "Morris", "Morton", "Morton Grove", "Mossville", "Mount Prospect", "Mount Vernon", "Mount Zion", "Mundelein", "Naperville", "New Lenox", "Niles", "Normal", "Norridge", "North Aurora", "North Chicago", "Northbrook", "Northfield", "Northlake", "O''Fallon", "Oak Forest", "Oak Lawn", "Oak Park", "Oakbrook", "Oakwood", "Olney", "Orland Park", "Osco", "Ottawa", "Palatine", "Palos Heights", "Palos Hills", "Park Forest", "Park Ridge", "Pekin", "Peoria", "Peru", "Plainfield", "Pontiac", "Princeton", "Prospect Heights", "Quincy", "Ramsey", "Rantoul", "Richmond", "Richton Park", "River Forest", "Riverdale", "Rochelle", "Rock Island", "Rockford", "Rolling Meadows", "Romeoville", "Roscoe", "Roselle", "Round Lake Beach", "Saint Charles", "Sauget", "Sauk Village", "Schaumburg", "Schiller Park", "Shumway", "Skokie", "South Elgin", "South Holland", "Spring Valley", "Springfield", "Sterling", "Streamwood", "Streator", "Swansea", "Sycamore", "Taylorville", "Tinley Park", "Trenton", "Urbana", "Ursa", "Vernon Hills", "Villa Park", "Walnut", "Warrenville", "Washington", "Waukegan", "West Chicago", "West Dundee", "Westchester", "Western Springs", "Westmont", "Wheaton", "Wheeling", "Willowbrook", "Wilmette", "Winnebago", "Winnetka", "Wood Dale", "Wood River", "Woodridge", "Woodstock", "Worth", "Zion"]
      },
      {
        name: "Indiana",
        cities: ["Albion", "Anderson", "Angola", "Auburn", "Bedford", "Beech Grove", "Bloomington", "Brownsburg", "Carmel", "Cedar Lake", "Chesterton", "Clarksville", "Columbus", "Connersville", "Crawfordsville", "Crown Point", "Dyer", "East Chicago", "Elkhart", "Evansville", "Fishers", "Fort Wayne", "Frankfort", "Franklin", "Gary", "Goshen", "Gosport", "Granger", "Greenfield", "Greensburg", "Greenwood", "Griffith", "Hammond", "Helmsburg", "Highland", "Hobart", "Huntington", "Indianapolis", "Jasper", "Jeffersonville", "Knightstown", "Kokomo", "La Porte", "Lafayette", "Lake Station", "Lawrence", "Lebanon", "Liberty", "Logansport", "Madison", "Marion", "Martinsville", "Merrillville", "Michigan City", "Mishawaka", "Muncie", "Munster", "N. Albany", "Nashville", "New Albany", "New Castle", "New Haven", "New Trenton", "Noblesville", "North Vernon", "Osceola", "Peru", "Plainfield", "Plymouth", "Poland", "Portage", "Richmond", "Rising Sun", "Roanoke", "Rockport", "Schererville", "Scottsburg", "Seymour", "Shelbyville", "South Bend", "Speedway", "St. John", "Terre Haute", "Thorntown", "Tippecanoe", "Troy", "Valparaiso", "Vermont", "Vincennes", "Wabash", "Warsaw", "Washington", "West Lafayette", "Williams"]
      },
      {
        name: "Iowa",
        cities: ["Altoona", "Ames", "Ankeny", "Bettendorf", "Boone", "Burlington", "Carroll", "Cedar Falls", "Cedar Rapids", "Clarinda", "Clinton", "Clive", "Coralville", "Council Bluffs", "Davenport", "Des Moines", "Dubuque", "Eldridge", "Elkader", "Essex", "Fairfield", "Fayette", "Fort Dodge", "Fort Madison", "Harlan", "Indianola", "Iowa City", "Kalona", "Keokuk", "Marion", "Marshalltown", "Mason City", "Muscatine", "Newton", "Orange City", "Oskaloosa", "Ottumwa", "Pella", "Sioux City", "Spencer", "Storm Lake", "Urbandale", "Waterloo", "West Des Moines"]
      },
      {
        name: "Kansas",
        cities: ["Arkansas City", "Atchison", "Coffeyville", "Derby", "Dodge City", "El Dorado", "Elk City", "Emporia", "Fort Riley North", "Garden City", "Great Bend", "Hays", "Hutchinson", "Independence", "Junction City", "Kansas City", "Kingman", "Lawrence", "Leavenworth", "Leawood", "Lenexa", "Liberal", "MacPherson", "Manhattan", "Merriam", "Minneapolis", "Moscow", "Moundridge", "Nashville", "Newton", "Olathe", "Ottawa", "Overland Park", "Parsons", "Pittsburg", "Prairie Village", "Rose Hill", "Salina", "Shawnee", "Topeka", "Wichita", "Winfield", "tecumseh"]
      },
      {
        name: "Kentucky",
        cities: ["Albany", "Ashland", "Bardstown", "Berea", "Bowling Green", "Campbellsville", "Catlettsburg", "Covington", "Crescent Springs", "Danville", "Dawson Springs", "Eastview", "Eddyville", "Elizabethtown", "Erlanger", "Evarts", "Fern Creek", "Florence", "Fort Campbell North", "Fort Knox", "Fort Mitchell", "Fort Thomas", "Frankfort", "Georgetown", "Glasgow", "Grays Knob", "Henderson", "Highview", "Hopkinsville", "Independence", "Jeffersontown", "Lawrenceburg", "Lebanon", "Lexington", "Lexington-Fayette", "Louisville", "Madisonville", "Marion", "Mayfield", "Maysville", "Middlesborough", "Murray", "Nebo", "Newburg", "Newport", "Nicholasville", "Okolona", "Olive Hill", "Owensboro", "Paducah", "Paris", "Pikeville", "Pleasure Ridge Park", "Queens", "Radcliff", "Richmond", "Saint Dennis", "Saint Matthews", "Scottsville", "Shively", "Somerset", "South Shore", "Tollesboro", "Valley Station", "Wallins Creek", "Walton", "Winchester"]
      },
      {
        name: "Louisiana",
        cities: ["Abbeville", "Alexandria", "Amite", "Baker", "Bastrop", "Baton Rouge", "Bayou Cane", "Bogalusa", "Bossier City", "Broussard", "Calhoun", "Chalmette", "Covington", "Crowley", "De Ridder", "Delcambre", "Denham Springs", "Estelle", "Eunice", "Fort Polk South", "Franklin", "French Settlement", "Garyville", "Geismar", "Gretna", "Hammond", "Harahan", "Harvey", "Houma", "Independence", "Jefferson", "Jennings", "Kenner", "Lafayette", "Lake Charles", "Laplace", "Mandeville", "Marrero", "Merrydale", "Metairie", "Minden", "Monroe", "Morgan City", "Natchitoches", "New Iberia", "New Orleans", "Opelousas", "Pineville", "Pioneer", "Prairieville", "River Ridge", "Ruston", "Saint Amant", "Saint Martinville", "Shenandoah", "Shreveport", "Slidell", "Sulphur", "Terrytown", "Thibodaux", "Timberlane", "Vinton", "Waggaman", "West Monroe", "Westwego", "Zachary"]
      },
      {
        name: "Maine",
        cities: ["Auburn", "Augusta", "Bangor", "Bath", "Biddeford", "Brunswick", "Cornish", "Dover-Foxcroft", "Ellsworth", "Etna", "Freeport", "Gorham", "Greene", "Harmony", "Lewiston", "Liberty", "Limerick", "Lyman", "Maine", "New Gloucester", "Norridgewock", "North Yarmouth", "Old Town", "Orono", "Portland", "Presque Isle", "Saco", "Sanford", "Scarborough", "South Portland", "Spruce Head", "Thomaston", "Waldoboro", "Waterville", "West Buxton", "Westbrook", "Whitefield", "Windham", "Yarmouth", "York Harbor", "stockton springs"]
      },
      {
        name: "Maryland",
        cities: ["Aberdeen", "Accokeek", "Adelphi", "Andrews Air Force Base", "Annapolis", "Arbutus", "Arnold", "Aspen Hill", "Baltimore", "Bel Air North", "Bel Air South", "Beltsville", "Berlin", "Bethesda", "Bladensburg", "Boonsboro", "Bowie", "Brookeville", "Brooklandville", "Brooklyn Park", "Burtonsville", "Calverton", "Cambridge", "Camp Springs", "Capitol Heights", "Carney", "Catonsville", "Chestertown", "Chillum", "Clarksburg", "Clarksville", "Clinton", "Cockeysville", "Colesville", "College Park", "Columbia", "Cooksville", "Coral Hills", "Crofton", "Cumberland", "Damascus", "Darlington", "District Heights", "Dundalk", "East Riverdale", "Easton", "Edgemere", "Edgewood", "Eldersburg", "Elkridge", "Elkton", "Ellicott City", "Essex", "Fairland", "Ferndale", "Forest Hill", "Forestville", "Fort Meade", "Fort Washington", "Frederick", "Fredrick", "Friendly", "Gaithersburg", "Germantown", "Glen Burnie", "Glenn Dale", "Greater Landover", "Greater Upper Marlboro", "Green Haven", "Green Valley", "Greenbelt", "Hagerstown", "Hanover", "Harmans", "Havre de Grace", "Hillandale", "Hillcrest Heights", "Hunt Valley", "Hurlock", "Hyattsville", "Ijamsville", "Jefferson", "Jessup", "Joppatowne", "Kettering", "Lake Shore", "Langley Park", "Lanham", "Lanham-Seabrook", "Lansdowne-Baltimore Highlands", "Largo", "Laurel", "Lexington Park", "Lochearn", "Lutherville-Timonium", "Marriottsville", "Maryland City", "Mays Chapel", "Middle River", "Milford Mill", "Millersville", "Mitchellville", "Montgomery Village", "National Harbor", "New Carrollton", "North Bethesda", "North Laurel", "North Potomac", "Odenton", "Olney", "Overlea", "Owings Mills", "Oxon Hill-Glassmanor", "Parkville", "Parole", "Pasadena", "Perry Hall", "Pikesville", "Poolesville", "Potomac", "Randallstown", "Redland", "Reisterstown", "Riviera Beach", "Rockville", "Rosaryville", "Rosedale", "Rossville", "Saint Charles", "Salisbury", "Sandy Spring", "Savage Guilford", "Severn", "Severna Park", "Silver Spring", "Snow Hill", "South Gate", "South Laurel", "Suitland-Silver Hill", "Takoma Park", "Temple Hill", "Thurmont", "Timonium", "Towson", "Upper Marlboro", "Waldorf", "Walker Mill", "Washington Grove", "Westminster", "Wheaton-Glenmont", "White Oak", "Windsor Mill", "Woodlawn"]
      },
      {
        name: "Massachusetts",
        cities: ["Abington", "Acton", "Agawam", "Amesbury", "Amherst Center", "Arlington", "Ashland", "Athol", "Attleboro", "Barnstable Town", "Baxboro", "Becket", "Bedford", "Belmont", "Beverly", "Billerica", "Boston", "Boylston", "Braintree", "Brockton", "Brookfield", "Brookline", "Burlington", "Cambridge", "Canton", "Charlestown", "Chelmsford", "Chelsea", "Chicopee", "Clinton", "Concord", "Danvers", "Dedham", "Devens", "Devenscrest", "Duxbury", "Easthampton", "Everett", "Fairhaven", "Fall River", "Fitchburg", "Florence", "Framingham", "Franklin", "Gardner", "Gloucester", "Great Barrington", "Greenfield", "Groton", "Hadley", "Harvard", "Haverhill", "Hingham", "Holbrook", "Holliston", "Holyoke", "Hopedale", "Housatonic", "Hubbardston", "Hudson", "Hull", "Hyannis", "Ipswich", "Jamaica Plain", "Lawrence", "Lee", "Lenox", "Leominster", "Lexington", "Longmeadow", "Lowell", "Lynn", "Lynnfield", "Malden", "Manchester", "Marblehead", "Marion", "Marlborough", "Marshfield", "Massachusetts", "Maynard", "Medfield", "Medford", "Medway", "Melrose", "Methuen", "Middleboro", "Milford", "Milton", "Monson", "Montague", "Nantucket", "Natick", "Needham", "New Bedford", "Newburyport", "Newton", "North Adams", "North Andover", "North Attleborough Center", "North Easton", "Northampton", "Northborough", "Norwood", "Orleans", "Peabody", "Pepperell", "Pittsfield", "Plainfield", "Plymouth", "Provincetown", "Quincy", "Randolph", "Reading", "Rehoboth", "Revere", "Rockland", "Rockport", "Roslindale", "Salem", "Saugus", "Scituate", "Seekonk", "Shelburne Falls", "Sherborn", "Shrewsbury", "Somerset", "Somerville", "South Boston", "South Deerfield", "South Hadley", "South Lee", "South Yarmouth", "Southborough", "Southbridge", "Southwick", "Springfield", "Stoneham", "Sturbridge", "Swampscott", "Swansea", "Taunton", "Tewksbury", "Three Rivers", "Truro", "Upton", "Vineyard Haven", "Wakefield", "Waltham", "Ware", "Wareham", "Watertown", "Wayland", "Webster", "Wellesley", "Wellesley Hills", "West Concord", "West Roxbury", "West Springfield", "West Yarmouth", "Westborough", "Westfield", "Westford", "Weston", "Weymouth", "Wilbraham", "Wilmington", "Winchester", "Winthrop", "Woburn", "Worcester", "Yarmouthport"]
      },
      {
        name: "Michigan",
        cities: ["Adrian", "Albion", "Allegan", "Allen Park", "Alma", "Alpena", "Ann Arbor", "Attica", "Auburn Hills", "Battle Creek", "Bay City", "Beecher", "Belleville", "Benton Harbor", "Berkley", "Beverly Hills", "Big Rapids", "Birmingham", "Bloomfield Hills", "Bloomfield Township", "Boyne City", "Brighton", "Burt", "Burton", "Cadillac", "Canton", "Charlotte", "Chesterfield", "Clarkston", "Clawson", "Clinton", "Commerce", "Comstock Park", "Coopersville", "Cornell", "Cutlerville", "Davisburg", "Dearborn", "Dearborn Heights", "Delton", "Detroit", "Dexter", "Dowagiac", "East Grand Rapids", "East Lansing", "Eastpointe", "Ecorse", "Escanaba", "Evart", "Fair Haven", "Fairgrove", "Farmington", "Farmington Hills", "Fenton", "Ferndale", "Flint", "Forest Hills", "Fowlerville", "Frankenmuth", "Fraser", "Fremont", "Fruitport", "Garden City", "Goodrich", "Grand Blanc", "Grand Haven", "Grand Rapids", "Grandville", "Grosse Ile", "Grosse Pointe Farms", "Grosse Pointe Park", "Grosse Pointe Woods", "Gwinn", "Hamtramck", "Hancock", "Harper Woods", "Harrison", "Haslett", "Hazel Park", "Highland Park", "Holland", "Holly", "Holt", "Houghton", "Hudsonville", "Huntington Woods", "Imlay", "Inkster", "Jackon", "Jackson", "Jenison", "Kalamazoo", "Kalkaska", "Kentwood", "Kingsford", "Lansing", "Lapeer", "Lincoln Park", "Litchfield", "Livonia", "Ludington", "Macomb", "Madison Heights", "Manistee", "Marquette", "Marysville", "Melvindale", "Midland", "Monroe", "Mount Clemens", "Mount Morris", "Mount Pleasant", "Mt. Pleasant", "Muskegon", "Muskegon Heights", "New Hudson", "Newaygo", "Niles", "Northview", "Northville", "Norton Shores", "Novi", "Oak Park", "Okemos", "Oscoda", "Owosso", "Oxford", "Petoskey", "Pinckney", "Plymouth Township", "Pontiac", "Port Huron", "Portage", "Redford", "Reese", "River Rouge", "Riverview", "Rochester Hills", "Rockford", "Romeo", "Romulus", "Roseville", "Royal Oak", "Saginaw", "Saginaw Township North", "Saginaw Township South", "Saint Clair Shores", "Saint Louis", "Saline", "Saugatuck", "Sault Sainte Marie", "Schoolcraft", "Shelby", "Southfield", "Southgate", "Sterling Heights", "Sturgis", "Taylor", "Traverse City", "Trenton", "Troy", "Walker", "Walled Lake", "Warren", "Waterford", "Waverly", "Wayne", "West Bloomfield Township", "Westland", "White Lake", "Whitmore Lake", "Williamston", "Wixom", "Woodhaven", "Wyandotte", "Wyoming", "Ypsilanti"]
      },
      {
        name: "Minnesota",
        cities: ["Albert Lea", "Alger", "Andover", "Annandale", "Anoka", "Apple Valley", "Austin", "Baxter", "Bemidji", "Blaine", "Blomkest", "Bloomington", "Blue Earth", "Brainerd", "Brooklyn Center", "Brooklyn Park", "Burnsville", "Champlin", "Chanhassen", "Chaska", "Chatfield", "Circle Pines", "Cloquet", "Cokato", "Columbia Heights", "Coon Rapids", "Cottage Grove", "Crystal", "Duluth", "Eagan", "East Bethel", "Eden Prairie", "Edina", "Elk River", "Ely", "Fairmont", "Faribault", "Farmington", "Fergus Falls", "Frazee", "Fridley", "Golden Valley", "Grand Rapids", "Ham Lake", "Hamel", "Hastings", "Hibbing", "Hopkins", "Houston", "Hutchinson", "Inver Grove Heights", "Isanti", "LaCrescent", "Lakeville", "Le Sueur", "Lino Lakes", "Litchfield", "Mankato", "Maple Grove", "Maplewood", "Marshall", "Mendota Heights", "Minneapolis", "Minnetonka", "Moorhead", "Mounds View", "Nelson", "New Brighton", "New Hope", "New Ulm", "North Mankato", "North Saint Paul", "Northfield", "Oakdale", "Onamia", "Owatonna", "Pequot Lakes", "Plymouth", "Prior Lake", "Ramsey", "Red Wing", "Renville", "Richfield", "Robbinsdale", "Rochester", "Rosemount", "Roseville", "Royalton", "Saint Cloud", "Saint Louis Park", "Saint Michael", "Saint Paul", "Saint Peter", "Sauk Rapids", "Savage", "Shakopee", "Shoreview", "South Saint Paul", "St. Paul", "Stewartville", "Stillwater", "Vadnais Heights", "Waconia", "Wadena", "West Saint Paul", "White Bear Lake", "Willmar", "Winona", "Woodbury", "Worthington"]
      },
      {
        name: "Mississippi",
        cities: ["Bay Saint Louis", "Biloxi", "Brandon", "Brookhaven", "Byhalia", "Byram", "Canton", "Clarksdale", "Cleveland", "Clinton", "Columbus", "Corinth", "Diamondhead", "Gautier", "Greenville", "Greenwood", "Grenada", "Gulfport", "Hattiesburg", "Hernando", "Horn Lake", "Indianola", "Jackson", "Laurel", "Long Beach", "Lucedale", "MacComb", "Madison", "Magnolia", "Meridian", "Michigan City", "Moselle", "Moss Point", "Natchez", "Ocean Springs", "Olive Branch", "Orange Grove", "Oxford", "Pascagoula", "Pearl", "Pelahatchie", "Picayune", "Quitman", "Ridgeland", "Senatobia", "Southaven", "Southhaven", "Starkville", "Tupelo", "Utica", "Vicksburg", "Yazoo City"]
      },
      {
        name: "Missouri",
        cities: ["Affton", "Annapolis", "Arnold", "Ballwin", "Belgique", "Bellefontaine Neighbors", "Belton", "Berkeley", "Blue Springs", "Branson", "Bridgeton", "Brighton", "California", "Camdenton", "Cape Girardeau", "Carthage", "Chaffee", "Chesterfield", "Chillicothe", "Clayton", "Clever", "Columbia", "Concord", "Crestwood", "Creve Coeur", "Desloge", "Dora", "Earth City", "Excelsior Springs", "Farmington", "Fenton", "Ferguson", "Florissant", "Forsyth", "Fort Leonard Wood", "Fulton", "Gladstone", "Grain Valley", "Grandview", "Gravois Mills", "Hannibal", "Harrisonville", "Hazelwood", "High Ridge", "Independence", "Jackson", "Jefferson City", "Jennings", "Joplin", "Kansas City", "Kennett", "Kirksville", "Kirkwood", "Kissee Mills", "Lamar", "Lebanon", "Lees Summit", "Lemay", "Liberty", "Lone Jack", "Marshall", "Maryland Heights", "Maryville", "Mehlville", "Mexico", "Moberly", "Murphy", "Nixa", "O''Fallon", "Oakville", "Overland", "Pacific", "Park Hills", "Parkville", "Peculiar", "Poplar Bluff", "Raytown", "Richmond Heights", "Rolla", "Saint Ann", "Saint Charles", "Saint Clair", "Saint Joseph", "Saint Louis", "Saint Peters", "Sappington", "Sedalia", "Sikeston", "Spanish Lake", "Springfield", "St. Louis", "Steelville", "Sunrise Beach", "Town and Country", "Trimble", "Troy", "University City", "Warrensburg", "Washington", "Webb City", "Webster Groves", "Wentzville", "West Plains", "Wildwood"]
      },
      {
        name: "Montana",
        cities: ["Anaconda-Deer Lodge County", "Arlee", "Belgrade", "Billings", "Bozeman", "Butte", "Butte-Silver Bow", "Great Falls", "Hamilton", "Havre", "Helena", "Helena Valley Southeast", "Helena Valley West Central", "Kalispell", "Lame Deer", "Laurel", "Lewistown", "Livingston", "Malmstrom Air Force Base", "Manhattan", "Miles City", "Missoula", "Orchard Homes", "Pablo", "Polson", "Roberts", "Ryegate", "Sidney", "Stevensville", "Whitefish"]
      },
      {
        name: "Nebraska",
        cities: ["Beatrice", "Bellevue", "Central City", "Columbus", "Cozad", "Creighton", "Fremont", "Gering", "Grand Island", "Hastings", "Homer", "Keamey", "Kearney", "La Vista", "Lexington", "Lincoln", "McCook", "Norfolk", "North Platte", "Offutt Air Force Base West", "Ogallala", "Omaha", "Papillion", "Scottsbluff", "South Sioux City"]
      },
      {
        name: "Nevada",
        cities: ["Boulder City", "Carson City", "Elko", "Goldfield", "Henderson", "Las Vegas", "Laughlin", "Lovelock", "Mesquite", "Nellis Air Force Base", "North Las Vegas", "Pahrump", "Paradise", "Reno", "Sparks", "Spring Valley", "Sun Valley", "Sunrise Manor", "Winchester", "Winnemucca"]
      },
      {
        name: "New Hampshire",
        cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover", "Rochester", "Salem", "Merrimack", "Hudson", "Londonderry", "Keene", "Bedford", "Portsmouth", "Goffstown", "Laconia", "Hampton", "Milford", "Durham", "Exeter", "Windham", "Hooksett", "Claremont", "Lebanon", "Pelham", "Somersworth", "Hanover", "Amherst", "Raymond", "Conway", "Berlin", "Newmarket", "Weare", "Seabrook", "Barrington", "Hampstead", "Franklin", "Litchfield", "Hollis", "Plaistow", "Bow", "Belmont", "Stratham", "Swanzey", "Gilford", "Pembroke", "Plymouth", "Farmington", "Atkinson", "Newport", "Epping", "Peterborough", "Wolfeboro", "Meredith", "Kingston", "Rindge", "Hillsborough"]
      },
      {
        name: "New Jersey",
        cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge", "Lakewood", "Toms River", "Hamilton", "Trenton", "Clifton", "Camden", "Brick", "Cherry Hill", "Passaic", "Middletown", "Union City", "Old Bridge", "Gloucester Township", "East Orange", "Bayonne", "Franklin", "North Bergen", "Vineland", "Union", "Piscataway", "New Brunswick", "Jackson", "Wayne", "Irvington", "Parsippany-Troy Hills", "Howell", "Perth Amboy", "Hoboken", "Plainfield", "West New York", "Washington Township", "East Brunswick", "Bloomfield", "West Orange", "Evesham", "Bridgewater", "South Brunswick", "Egg Harbor", "Manchester", "Hackensack", "Sayreville", "Mount Laurel", "Berkeley", "North Brunswick", "Kearny", "Linden", "Marlboro", "Teaneck", "Atlantic City", "Winslow", "Monroe", "Manalapan", "Hillsborough", "Montclair", "Galloway", "Freehold Township", "Monroe Township", "Belleville", "Pennsauken", "Ewing", "Fort Lee", "Lawrence", "Fair Lawn", "Willingboro", "Long Branch", "Deptford", "Garfield", "Westfield", "City of Orange", "Livingston", "Voorhees", "Princeton", "Millville", "Nutley", "Mount Olive", "Neptune", "Pemberton Township", "Lacey", "Rahway", "Ocean Township", "East Windsor", "West Windsor", "Englewood", "Bergenfield", "Bernards Township", "Stafford Township", "Hamilton Township", "Paramus", "Wall", "Mahwah", "West Milford", "Randolph", "Bridgeton", "Ridgewood", "Rockaway Township", "Lodi", "Vernon", "Maplewood", "Cliffside Park", "Scotch Plains", "South Plainfield", "Roxbury", "Medford", "Plainsboro", "Lower Township", "Carteret", "Cranford", "Burlington Township", "Morris Township", "Montgomery", "Raritan Township", "North Plainfield", "West Deptford", "Montville", "Summit", "Hillside", "Jefferson", "Roselle", "Barnegat", "Moorestown", "Lyndhurst", "Hazlet", "Pleasantville", "Millburn", "Little Egg Harbor", "Sparta", "Palisades Park", "Elmwood Park", "Maple Shade", "Middle Township", "Hawthorne", "Glassboro", "Washington Township", "Morristown", "Point Pleasant", "Aberdeen", "Dover", "Rutherford", "Tinton Falls", "Lindenwold", "Dumont", "Hopewell Township", "Delran", "Franklin Township", "Holmdel", "Wyckoff", "Denville", "New Milford", "Secaucus", "South Orange Village", "Readington", "Asbury Park", "South River", "Madison", "Springfield", "Cinnaminson", "Pequannock", "North Arlington", "Warren", "Mantua", "Hopatcong", "Phillipsburg", "Hammonton", "Clark", "Haddon Township", "Tenafly", "Ramsey", "Branchburg", "Little Falls", "Highland Park", "Collingswood", "Fairview", "Hanover", "Saddle Brook", "Robbinsville", "Middlesex", "Harrison", "Metuchen", "Clinton Township", "Pennsville", "Verona"]
      },
      {
        name: "New Mexico",
        cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "South Valley", "Clovis", "Hobbs", "Alamogordo", "Carlsbad", "Gallup", "Deming", "Los Lunas", "Chaparral", "Sunland Park", "Las Vegas", "Portales", "Los Alamos", "North Valley", "Artesia", "Lovington", "Silver City", "Espanola", "Anthony", "Grants", "Socorro", "Corrales", "Bernalillo", "Shiprock", "Bloomfield", "Ruidoso", "Kirtland", "Belen"]
      },
      {
        name: "New York",
        cities: ["Airmont", "Albany", "Alden", "Amherst", "Amityville", "Amsterdam", "Arcadia", "Auburn", "Aurora", "Babylon", "Baldwinsville", "Ballston", "Batavia", "Bath", "Beacon", "Bedford", "Beekman", "Bethlehem", "Binghamton", "Blooming Grove", "Briarcliff Manor", "Brighton", "Brockport", "Brookhaven", "Brunswick", "Buffalo", "Camillus", "Canandaigua", "Canton", "Carmel", "Catskill", "Cheektowaga", "Chenango", "Chester", "Chestnut Ridge", "Chili", "Cicero", "Clarence", "Clarkstown", "Clay", "Clifton Park", "Cohoes", "Colonie", "Corning", "Cornwall", "Cortland", "Cortlandt", "Crawford", "Croton-on-Hudson", "Depew", "DeWitt (De Witt)", "Dobbs Ferry", "Dryden", "Dunkirk", "East Fishkill", "East Greenbush", "East Hampton", "East Hills", "East Rockaway", "Eastchester", "Elma", "Elmira", "Endicott", "Esopus", "Evans", "Fallsburg", "Farmingdale", "Farmington", "Fishkill", "Floral Park", "Fredonia", "Freeport", "Fulton", "Garden City", "Gates", "Geddes", "Geneseo", "Geneva", "German Flatts", "Glen Cove", "Glens Falls", "Glenville", "Gloversville", "Goshen", "Grand Island", "Great Neck", "Greece", "Greenburgh", "Guilderland", "Halfmoon", "Hamburg", "Hamlin", "Harrison", "Hastings", "Hastings-on-Hudson", "Haverstraw", "Hempstead", "Henrietta", "Herkimer", "Highlands", "Hornell", "Horseheads", "Hudson", "Hudson Falls", "Huntington", "Hyde Park", "Ilion", "Irondequoit", "Islip", "Ithaca", "Jamestown", "Johnson City", "Johnstown", "Kenmore", "Kent", "Kingsbury", "Kingston", "Kirkland", "Kiryas Joel", "Lackawanna", "LaGrange (La Grange)", "Lake Grove", "Lancaster", "Lansing", "Le Ray", "Lenox", "Lewisboro", "Lewiston", "Liberty", "Lindenhurst", "Little Falls", "Lloyd", "Lockport", "Long Beach", "Lynbrook", "Lysander", "Macedon", "Malone", "Malta", "Malverne", "Mamakating", "Mamaroneck", "Manchester", "Manlius", "Massapequa Park", "Massena", "Mastic Beach", "Mechanicville", "Mendon", "Middletown", "Milton", "Mineola", "Monroe", "Montgomery", "Moreau", "Mount Kisco", "Mount Pleasant", "Mount Vernon", "New Castle", "New Hartford", "New Hyde Park", "New Paltz", "New Rochelle", "New Square", "New Windsor", "New York", "Newark", "Newburgh", "Newfane", "Niagara Falls", "Niskayuna", "North Castle", "North Greenbush", "North Hempstead", "North Syracuse", "North Tonawanda", "Northport", "Norwich", "Nyack", "Ogden", "Ogdensburg", "Olean", "Oneida", "Oneonta", "Onondaga", "Ontario", "Orangetown", "Orchard Park", "Ossining", "Oswego", "Owego", "Oyster Bay", "Parma", "Patchogue", "Patterson", "Peekskill", "Pelham", "Penfield", "Perinton", "Philipstown", "Pittsford", "Plattekill", "Plattsburgh", "Pleasant Valley", "Pleasantville", "Pomfret", "Port Chester", "Port Jefferson", "Port Jervis", "Potsdam", "Poughkeepsie", "Putnam Valley", "Queensbury", "Ramapo", "Red Hook", "Rensselaer", "Riverhead", "Rochester", "Rockville Centre", "Rome", "Rotterdam", "Rye", "Rye Brook", "Salamanca", "Salina", "Saratoga Springs", "Saugerties", "Scarsdale", "Schenectady", "Schodack", "Scotia", "Seneca Falls", "Shawangunk", "Sherrill", "Sleepy Hollow", "Smithtown", "Somers", "Southampton", "Southeast", "Southold", "Southport", "Spring Valley", "Stony Point", "Suffern", "Sullivan", "Sweden", "Syracuse", "Tarrytown", "Thompson", "Tonawanda", "Troy", "Ulster", "Union", "Utica", "Valley Stream", "Van Buren", "Vestal", "Victor", "Walden", "Wallkill", "Walworth", "Wappinger", "Warwick", "Watertown", "Watervliet", "Wawarsing", "Webster", "West Haverstraw", "West Seneca", "Westbury", "Wheatfield", "White Plains", "Whitestown", "Williston Park", "Wilton", "Woodbury", "Yonkers", "Yorktown"]
      },
      {
        name: "North Carolina",
        cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Greenville", "Asheville", "Concord", "Gastonia", "Jacksonville", "Chapel Hill", "Rocky Mount", "Burlington", "Huntersville", "Wilson", "Kannapolis", "Apex", "Hickory", "Wake Forest", "Indian Trail", "Goldsboro", "Mooresville", "Monroe", "Salisbury", "New Bern", "Holly Springs", "Matthews", "Sanford", "Garner", "Cornelius", "Thomasville", "Asheboro", "Statesville", "Mint Hill", "Kernersville", "Morrisville", "Fuquay-Varina", "Lumberton", "Kinston", "Carrboro", "Havelock", "Shelby", "Clemmons", "Lexington", "Clayton", "Boone"]
      },
      {
        name: "North Dakota",
        cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Williston", "Dickinson", "Mandan", "Jamestown", "Wahpeton", "Devils Lake", "Valley City"]
      },
      {
        name: "Ohio",
        cities: ["Akron", "Alledonia", "Alliance", "Amherst", "Apple Creek", "Archbold", "Ashland", "Ashtabula", "Athens", "Atwater", "Aurora", "Austintown", "Avon Lake", "Barberton", "Batavia", "Bay Village", "Beachwood", "Beavercreek", "Bedford", "Bedford Heights", "Bellaire", "Bellefontaine", "Bellevue", "Berea", "Bexley", "Blacklick", "Blacklick Estates", "Blanchester", "Blue Ash", "Boardman", "Bowling Green", "Brecksville", "Bridgetown North", "Bristolville", "Broadview Heights", "Brook Park", "Brooklyn", "Brunswick", "Bryan", "Bucyrus", "Burton", "Cambridge", "Campbell", "Canal Winchester", "Canton", "Carlisle", "Celina", "Centerville", "Chagrin Falls", "Chardon", "Cheshire", "Chillicothe", "Chippewa Lake", "Cincinnati", "Circleville", "Cleveland", "Cleveland Heights", "Columbus", "Conneaut", "Coshocton", "Cuyahoga Falls", "Dayton", "Defiance", "Delaware", "Dover", "Dublin", "East Cleveland", "East Liverpool", "Eastlake", "Elyria", "Englewood", "Euclid", "Fairborn", "Fairfield", "Fairview Park", "Findlay", "Finneytown", "Forest Park", "Fort MacKinley", "Fostoria", "Fremont", "Gahanna", "Galion", "Garfield Heights", "Girard", "Glenwillow", "Green", "Greenville", "Grove City", "Hamilton", "Harrison", "Hilliard", "Hiram", "Holland", "Huber Heights", "Hudson", "Ironton", "Kent", "Kettering", "Kidron", "Lakewood", "Lancaster", "Lebanon", "Lewis Center", "Lima", "Lincoln Village", "Lorain", "Loveland", "Lyndhurst", "Macedonia", "Madison", "Maineville", "Mansfield", "Maple Heights", "Marietta", "Marion", "Marysville", "Mason", "Massillon", "Maumee", "Mayfield Heights", "Medina", "Mentor", "Miamisburg", "Middleburg Heights", "Middletown", "Milford", "Millbury", "Mineral City", "Minster", "Mount Gilead", "Mount Vernon", "Nelsonville", "New Albany", "New Philadelphia", "Newark", "Niles", "North Canton", "North College Hill", "North Lewisburg", "North Olmsted", "North Ridgeville", "North Royalton", "Northbrook", "Northfield", "Northview", "Norton", "Norwalk", "Norwood", "Oberlin", "Ohio", "Oregon", "Overlook-Page Manor", "Oxford", "Painesville", "Parma", "Parma Heights", "Peninsula", "Perrysburg", "Pickerington", "Piqua", "Portage Lakes", "Portsmouth", "Powell", "Ravenna", "Reading", "Reynoldsburg", "Rittman", "Riverside", "Rocky River", "Rossford", "Salem", "Sandusky", "Seven Hills", "Seville", "Shaker Heights", "Sharonville", "Sheffield Lake", "Shelby", "Sidney", "Solon", "South Euclid", "Springdale", "Springfield", "Steubenville", "Streetsboro", "Strongsville", "Struthers", "Sylvania", "Tallmadge", "Tiffin", "Toledo", "Trotwood", "Troy", "Twinsburg", "University Heights", "Upper Arlington", "Urbana", "Valley Glen", "Van Wert", "Vandalia", "Vermilion", "Wadsworth", "Warren", "Warrensville Heights", "Washington", "Waverly", "West Carrollton City", "West Chester", "Westerville", "Westlake", "White Oak", "Whitehall", "Wickliffe", "Willoughby", "Willowick", "Wilmington", "Winesburg", "Wooster", "Worthington", "Xenia", "Yellow Springs", "Youngstown", "Zanesville"]
      },
      {
        name: "Oklahoma",
        cities: ["Ada", "Altus", "Ardmore", "Bartlesville", "Bethany", "Bixby", "Broken Arrow", "Catoosa", "Chickasha", "Choctaw", "Claremore", "Del City", "Duncan", "Durant", "Edmond", "El Reno", "Elk City", "Enid", "Fort Sill", "Grove", "Guthrie", "Heavener", "Hugo", "Lawton", "Lindsay", "MacAlester", "Miami", "Midwest City", "Moore", "Morrison", "Muskogee", "Mustang", "Norman", "Oklahoma City", "Okmulgee", "Owasso", "Pawnee", "Ponca City", "Rattan", "Sand Springs", "Sapulpa", "Shawnee", "Stillwater", "Sulphur", "Tahlequah", "The Village", "Tulsa", "Weatherford", "Welch", "Woodward", "Yukon"]
      },
      {
        name: "Oregon",
        cities: ["Albany", "Aloha", "Altamont", "Arleta", "Ashland", "Astoria", "Baker City", "Beaverton", "Bend", "Canby", "Cave Junction", "Cedar Hills", "Cedar Mill", "Central Point", "City of The Dalles", "Coos Bay", "Corvallis", "Creswell", "Dallas", "Donald", "Eugene", "Forest Grove", "Four Corners", "Gladstone", "Glide", "Grants Pass", "Gresham", "Hayesville", "Hazelwood", "Hermiston", "Hillsboro", "Hood River", "Hubbard", "John Day", "Jordan Valley", "Keizer", "Klamath Falls", "La Grande", "Lake Oswego", "Lebanon", "Lincoln", "MacMinnville", "Medford", "Milwaukie", "Newberg", "Newport", "North Bend", "OBrien", "Oak Grove", "Oatfield", "Ontario", "Oregon City", "Pendleton", "Portland", "Redmond", "Riddle", "River Road", "Roseburg", "Salem", "Sherwood", "Springfield", "Sublimity", "Sutherlin", "Talent", "Tigard", "Troutdale", "Tualatin", "Turner", "Vaughn", "West Linn", "Wilsonville", "Woodburn"]
      },
      {
        name: "Pennsylvania",
        cities: ["Akron", "Aliquippa", "Allentown", "Altoona", "Ambler", "Amityville", "Ardmore", "Audubon", "Back Mountain", "Baldwin", "Bangor", "Beaver Falls", "Belle Vernon", "Bensalem", "Berwick", "Berwyn", "Bethel Park", "Bethlehem", "Bloomsburg", "Boyertown", "Bradford", "Brentwood", "Bridgeport", "Bristol", "Brockway", "Broomall", "Bushkill", "Butler", "Camp Hill", "Canonsburg", "Carbondale", "Carlisle", "Carnegie", "Carnot Moon", "Chambersburg", "Chester", "Chester Springs", "Clarks Summit", "Coatesville", "Colonial Park", "Columbia", "Conshohocken", "Coraopolis", "Corry", "Cranberry Township", "Cresco", "Croydon", "Dallas", "Dallastown", "Darby", "Darby Township", "Downingtown", "Drexel Hill", "Duncansville", "Dunmore", "East Norriton", "East Stroudsburg", "Easton", "Economy", "Edinboro", "Elizabethtown", "Elkins Park", "Emmaus", "Ephrata", "Erdenheim", "Erie", "Erwinna", "Exton", "Feasterville", "Folcroft", "Franklin", "Franklin Park", "Frederick", "Fullerton", "Furlong", "Gettysburg", "Gibsonia", "Glenside", "Gordonville", "Greensburg", "Gwynedd", "Hampden Township", "Hanover", "Harleysville", "Harrisburg", "Harrison Township", "Hatboro", "Haverford", "Havertown", "Hazleton", "Hermitage", "Hershey", "Hollidaysburg", "Horsham", "Huntingdon Valley", "Indiana", "Irvine", "Ivyland", "Jeannette", "Jefferson", "Jenkintown", "Johnstown", "Kempton", "Kennett Square", "King of Prussia", "Kingston", "Kutztown", "Lafayette Hill", "Lancaster", "Landenberg", "Langhorne", "Lansdale", "Lansdowne", "Lansford", "Laurys Station", "Lebanon", "Lehighton", "Levittown", "Lincoln University", "Linesville", "Linwood", "Lower Burrell", "Lower Merion", "MacCandless Township", "MacKeesport", "Malvern", "Meadville", "Mechanicsburg", "Media", "Merion Station", "Middleburg", "Mifflinville", "Milanville", "Milford", "Millersburg", "Monessen", "Moscow", "Mount Carmel", "Mount Lebanon", "Mountville", "Munhall", "Municipality of Monroeville", "Municipality of Murrysville", "N. Charleroi", "Nanticoke", "Narberth", "Natrona Heights", "Nazareth", "Nether Providence Township", "New Buffalo", "New Carlisle", "New Castle", "New Cumberland", "New Hope", "New Kensington", "Newton", "Newtown", "Newville", "Norristown", "North East", "North Versailles", "North Wales", "Oaks", "Oil City", "Olyphant", "Orrtanna", "Orwigsburg", "Oxford", "Paoli", "Parksburg", "Penn Hills", "Philadelphia", "Phildelphia", "Phoenixville", "Pipersville", "Pittsburgh", "Pleasantville", "Plum", "Pocono Summit", "Pottstown", "Pottsville", "Primos", "Progress", "Prospect", "Quakertown", "Radnor Township", "Reading", "Robinson Township", "Roseto", "Ross Township", "Royersford", "Saint Marys", "Sarver", "Saxonburg", "Scott Township", "Scranton", "Seward", "Sewickley", "Shaler Township", "Sharon", "Shermans Dale", "Somerset", "Souderton", "South Park Township", "Southampton", "Springfield", "State College", "Strasburg", "Sunbury", "Susquehanna", "Swissvale", "Tamaqua", "Taylor", "Telford", "Trevose", "Turtle Creek", "Tyrone", "Uniontown", "Upper Darby", "Upper Providence Township", "Upper Saint Clair", "Vanderbilt", "Warminster", "Warren", "Warrendale", "Washington", "Waterford", "Waverly", "Wayne", "Waynesboro", "West Chester", "West Mifflin", "West Norriton", "West Point", "Wexford", "Whitehall", "Wilcox", "Wilkes-Barre", "Wilkinsburg", "Williamsport", "Willow Grove", "Womelsdorf", "Woodlyn", "Woolrich", "Wyncote", "Wyndmoor", "Wynnewood", "Yardley", "Yeadon", "York"]
      },
      {
        name: "Rhode Island",
        cities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Coventry", "Cumberland", "North Providence", "South Kingstown", "West Warwick", "Johnston", "North Kingstown", "Newport", "Bristol", "Westerly", "Smithfield", "Lincoln", "Central Falls", "Portsmouth", "Barrington", "Middletown", "Burrillville", "Narragansett", "Tiverton", "East Greenwich", "North Smithfield", "Warren", "Scituate", "Glocester", "Hopkinton", "Charlestown", "Richmond"]
      },
      {
        name: "South Carolina",
        cities: ["Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Sumter", "Hilton Head Island", "Spartanburg", "Florence", "Goose Creek", "Aiken", "Myrtle Beach", "Anderson", "Greer", "Mauldin", "Greenwood", "North Augusta", "Easley", "Simpsonville", "Hanahan", "Lexington", "Conway", "West Columbia", "North Myrtle Beach", "Clemson", "Orangeburg", "Cayce", "Bluffton", "Beaufort", "Gaffney", "Irmo", "Fort Mill", "Port Royal", "Forest Acres", "Newberry"]
      },
      {
        name: "South Dakota",
        cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Yankton", "Pierre", "Huron", "Spearfish", "Vermillion", "Brandon", "Box Elder", "Madison", "Sturgis", "Belle Fourche", "Harrisburg"]
      },
      {
        name: "Tennessee",
        cities: ["Adamsville", "Alcoa", "Antioch", "Arlington", "Athens", "Bartlett", "Bell Buckle", "Bloomingdale", "Blountville", "Brentwood", "Bristol", "Brownsville", "Burns", "Chattanooga", "Clarksville", "Cleveland", "Collierville", "Columbia", "Cookeville", "Cornersville", "Crossville", "Dayton", "Dickson", "Dyersburg", "East Brainerd", "East Ridge", "Elizabethton", "Farragut", "Franklin", "Gainesboro", "Gallatin", "Gatlinburg", "Germantown", "Goodlettsville", "Greeneville", "Hendersonville", "Hixson", "Jackson", "Johnson City", "Kingsport", "Knoxville", "Kodak", "La Vergne", "Lawrenceburg", "Lebanon", "Lenoir City", "Lewisburg", "MacMinnville", "Maryville", "Memphis", "Middle Valley", "Millington", "Morristown", "Mulberry", "Murfreesboro", "Nashville", "Oak Ridge", "Ooltewah", "Pinson", "Red Bank", "Selmer", "Sevierville", "Shelbyville", "Smithville", "Smyrna", "Spring City", "Springfield", "Tazewell", "Trenton", "Tullahoma", "Union City"]
      },
      {
        name: "Texas",
        cities: ["Abilene", "Addison", "Alamo", "Aldine", "Alice", "Allen", "Alvin", "Amarillo", "Anderson Mill", "Andrews", "Angleton", "Argyle", "Arlington", "Aspermont", "Atascocita", "Athens", "Austin", "Austinn", "Azle", "Balch Springs", "Barry", "Bay City", "Baytown", "Beaumont", "Bedford", "Beeville", "Bellaire", "Belton", "Benbrook", "Big Spring", "Bluff Dale", "Boerne", "Borger", "Breckenridge", "Brenham", "Brownfield", "Brownsville", "Brownwood", "Bryan", "Buda", "Burkburnett", "Burleson", "Campbell", "Canyon", "Canyon Lake", "Carrollton", "Cat Spring", "Cedar Hill", "Cedar Park", "Celina", "Center", "Channelview", "City of Dallas", "Cleburne", "Cloverleaf", "Clute", "College Station", "Colleyville", "Columbus", "Comanche", "Conroe", "Converse", "Coppell", "Copperas Cove", "Corinth", "Corpus Christi", "Corsicana", "Cotulla", "Crandall", "Cypress", "Dallas", "Dayton", "DeSoto", "Deer Park", "Del Rio", "Denison", "Denton", "Dickinson", "Donna", "Dumas", "Duncanville", "Eagle Pass", "Edinburg", "El Campo", "El Paso", "Elmendorf", "Ennis", "Euless", "Fairfield", "Farmers Branch", "Flower Mound", "Forest Hill", "Forney", "Fort Bliss", "Fort Hood", "Fort Worth", "Freeport", "Friendswood", "Frisco", "Gainesville", "Galena Park", "Galveston", "Garland", "Gatesville", "Georgetown", "Grand Prairie", "Grandview", "Grapeland", "Grapevine", "Greenville", "Gregory", "Groves", "Haltom City", "Harker Heights", "Harlingen", "Henderson", "Hereford", "Hewitt", "Highland Village", "Hillsboro", "Houston", "Humble", "Huntsville", "Hurst", "Ingleside", "Irving", "Jacksonville", "Jefferson", "Jollyville", "Justin", "Katy", "Kaufman", "Keller", "Kemah", "Kemp", "Kerrville", "Kilgore", "Killeen", "Kingsville", "Kingwood", "La Marque", "La Porte", "Lackland Air Force Base", "Lago Vista", "Lake Jackson", "Lamesa", "Lampasas", "Lancaster", "Laredo", "League City", "Leon Valley", "Levelland", "Lewisville", "Liberty Hill", "Lindsay", "Little Elm", "Live Oak", "Llano", "Lockhart", "Longview", "Lubbock", "Lufkin", "Lumberton", "MacAllen", "MacKinney", "Magnolia", "Malakoff", "Mansfield", "Marshall", "McAllen", "McKinney", "Medina", "Mercedes", "Mesquite", "Midland", "Mineral Wells", "Mission", "Mission Bend", "Missouri City", "Montgomery", "Mount Pleasant", "Murphy", "Nacogdoches", "Nederland", "New Braunfels", "New Caney", "North Richland Hills", "North Zulch", "Odessa", "Orange", "Ovalo", "Palestine", "Pampa", "Paris", "Pasadena", "Pearland", "Pecan Grove", "Pecos", "Pflugerville", "Pharr", "Pinehurst", "Plainview", "Plano", "Pontotoc", "Port Arthur", "Port Lavaca", "Port Neches", "Portland", "Pottsboro", "Princeton", "Richardson", "Richmond", "Rio Grande City", "Robstown", "Rockport", "Rockwall", "Roma", "Rosenberg", "Round Rock", "Rowlett", "Royse City", "Sachse", "Saginaw", "San Angelo", "San Antonio", "San Benito", "San Juan", "San Marcos", "Santa Fe", "Schertz", "Seabrook", "Seagoville", "Seguin", "Sherman", "Slaton", "Smithville", "Snyder", "Socorro", "South Houston", "South Padre Island", "Southlake", "Spring", "Stafford", "Stephenville", "Strawn", "Sugar Land", "Sulphur Springs", "Sweetwater", "Taylor", "Temple", "Terrell", "Texarkana", "Texas City", "The Colony", "The Woodlands", "Tomball", "Tyler", "Universal City", "University Park", "Uvalde", "Vernon", "Victoria", "Vidor", "Waco", "Watauga", "Waxahachie", "Weatherford", "Weslaco", "West Odessa", "West University Place", "White Settlement", "Wichita Falls", "Winnsboro", "Woodway", "Wylie", "Yoakum", "austinn"]
      },
      {
        name: "Utah",
        cities: ["Alpine", "American Fork", "Bluffdale", "Bountiful", "Brigham City", "Canyon Rim", "Castle Dale", "Cedar City", "Centerville", "Clearfield", "Clinton", "Cottonwood Heights", "Cottonwood West", "Draper", "East Millcreek", "Farmington", "Holladay-Cottonwood", "Ivins", "Kaysville", "Kearns", "Layton", "Lehi", "Logan", "Magna", "Mapleton", "Midvale", "Millcreek", "Moab", "Monticello", "Murray", "North Logan", "North Ogden", "Ogden", "Orem", "Panguitch", "Park City", "Payson", "Pleasant Grove", "Provo", "Riverton", "Roy", "Saint George", "Salt Lake City", "Sandy", "Santaquin", "South Jordan", "South Ogden", "South Salt Lake", "Spanish Fork", "Springville", "Taylorsville", "Tooele", "Tremonton", "Union", "Washington", "West Jordan", "West Valley City", "Woods Cross"]
      },
      {
        name: "Vermont",
        cities: ["Barre", "Bennington", "Brattleboro", "Bristol", "Burlington", "Cabot", "Colchester", "Danville", "Dorset", "Dummerston", "East Corinth", "East Fairfield", "East Randolph", "Essex", "Essex Junction", "Grand Isle", "Hartford", "Jericho", "Manchester", "Manchester Center", "Middlebury", "Milton", "Montpelier", "Putney", "Randolph", "Rochester", "Rutland", "Saint Albans", "Saint Johnsbury", "Saxtons River", "South Burlington", "South Strafford", "Springfield", "Townshend", "Tunbridge", "Van", "Vernon", "Wallingford", "Watisfield", "West Brookfield", "West Charleston", "West Newbury", "Williston", "Winooski"]
      },
      {
        name: "Virginia",
        cities: ["Abingdon", "Alexandria", "Annandale", "Arlington", "Ashburn", "Ashland", "Aylett", "Bailey''s Crossroads", "Blacksburg", "Bland", "Bluefield", "Bon Air", "Bristol", "Burke", "Cave Spring", "Centreville", "Chantilly", "Charlottesville", "Chesapeake", "Chester", "Christiansburg", "Churchville", "Clifton", "Colonial Heights", "Culloden", "Dale City", "Danville", "Dublin", "Eagle Rock", "East Highland Park", "Faber", "Fairfax", "Falls Church", "Fishersville", "Fort Hunt", "Fort Valley", "Franconia", "Franklin", "Fredericksburg", "Front Royal", "Gainesville", "Glen Allen", "Gloucester", "Goochland", "Great Falls", "Groveton", "Hampton", "Harrisonburg", "Henrico", "Herndon", "Highland Springs", "Hollins", "Hopewell", "Hybla Valley", "Idylwood", "Irvington", "Jamesville", "Jefferson", "Keen Mountain", "Keswick", "Lake Ridge", "Lakeside", "Laurel", "Leesburg", "Lincolnia", "Lorton", "Lynchburg", "MacLean", "Madison", "Madison Heights", "Manassas", "Marion", "Martinsville", "Mclean", "Mechanicsville", "Melfa", "Midlothian", "Montclair", "Montross", "Mount Vernon", "Newington", "Newport News", "Norfolk", "North Springfield", "Oakton", "Orange", "Petersburg", "Poquoson", "Portsmouth", "Radford", "Reston", "Richmond", "Roanoke", "Rose Hill", "Salem", "Seaford", "South Boston", "Springfield", "Stafford", "Staffordshire", "Staunton", "Sterling", "Suffolk", "Sugarland Run", "Tappahannock", "Timberlake", "Triangle", "Tuckahoe", "Tysons Corner", "Vienna", "Virginia Beach", "Warrenton", "Washington", "Waterford", "Waynesboro", "West Springfield", "Williamsburg", "Winchester", "Wolf Trap", "Woodbridge", "Wytheville", "Yorktown"]
      },
      {
        name: "Washington",
        cities: ["Aberdeen", "Airway Heights", "Alderwood Manor", "Anacortes", "Arlington", "Auburn", "Bainbridge Island", "Battle Ground", "Bellevue", "Bellingham", "Bingen", "Blaine", "Bothell", "Bremerton", "Bryn Mawr-Skyway", "Buckley", "Burien", "Burlington", "Camano Island", "Camas", "Cascade-Fairwood", "Centralia", "Chehalis", "Cheney", "Clear Lake", "Colbert", "Cottage Lake", "Covington-Sawyer-Wilderness", "Des Moines", "Duvall", "East Hill-Meridian", "East Renton Highlands", "East Wenatchee Bench", "Eastsound", "Eatonville", "Edgewood-North Hill", "Edmonds", "Elk Plain", "Ellensburg", "Enumclaw", "Esperance", "Everett", "Evergreen", "Fairchild", "Federal Way", "Ferndale", "Fircrest", "Ford", "Fort Lewis", "Friday Harbor", "Gig Harbor", "Graham", "Harbour Pointe", "Inglewood-Finn Hill", "Issaquah", "Kelso", "Kenmore", "Kennewick", "Kent", "Kingsgate", "Kirkland", "Lacey", "Lake Serene-North Lynnwood", "Lakeland North", "Lakeland South", "Lakewood", "Longview", "Lynnwood", "Martha Lake", "Marysville", "Mercer Island", "Minnehaha", "Monroe", "Moses Lake", "Mossyrock", "Mount Vernon", "Mountlake Terrace", "Mukilteo", "Newport Hills", "North City-Ridgecrest", "North Creek", "North Marysville", "Oak Harbor", "Ocean Shores", "Olympia", "Opportunity", "Orchards South", "Orting", "Paine Field-Lake Stickney", "Parkland", "Pasco", "Picnic Point-North Lynnwood", "Pine Lake", "Port Angeles", "Port Hadlock", "Port Ludlow", "Port Orchard", "Poulsbo", "Pullman", "Puyallup", "Redmond", "Renton", "Republic", "Richland", "Riverton-Boulevard Park", "Sahalee", "Salmon Creek", "Sammamish", "SeaTac", "Seattle", "Seattle Hill-Silver Firs", "Sedro Woolley", "Shelton", "Shoreline", "Silverdale", "Snohomish", "South Hill", "South Prairie", "South Seattle", "Spanaway", "Spokane", "Sumas", "Sumner", "Sunnyside", "Tacoma", "Tukwila", "Tumwater", "University Place", "Vancouver", "Vashon", "Walla Walla", "Washougal", "Wenatchee", "West Lake Stevens", "White Center", "White Salmon", "White Swan", "Woodinville", "Yakima", "Yelm"]
      },
      {
        name: "West Virginia",
        cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg", "Beckley", "Clarksburg", "South Charleston", "St. Albans", "Vienna", "Bluefield", "Moundsville", "Bridgeport", "Oak Hill", "Dunbar", "Elkins", "Nitro", "Hurricane", "Princeton", "Charles Town", "Buckhannon", "Keyser", "New Martinsville", "Grafton", "Ranson", "Point Pleasant", "Westover", "Weston", "Lewisburg", "Ravenswood", "Summersville"]
      },
      {
        name: "Wisconsin",
        cities: ["Adams", "Allouez", "Appleton", "Ashland", "Ashwaubenon", "Baraboo", "Beaver Dam", "Beloit", "Brookfield", "Brown Deer", "Burlington", "Caledonia", "Carter", "Cedarburg", "Chippewa Falls", "Cudahy", "De Pere", "Deer Park", "Delafield", "Eau Claire", "Elkhorn", "Elroy", "Fitchburg", "Fond du Lac", "Fort Atkinson", "Franklin", "Galesville", "Germantown", "Glen Flora", "Glendale", "Goodman", "Grafton", "Green Bay", "Greendale", "Greenfield", "Hartford", "Hartland", "Howard", "Hudson", "Janesville", "Jefferson", "Junction City", "Kaukauna", "Kenosha", "Kiel", "Kohler", "La Crosse", "Little Chute", "Madison", "Manitowoc", "Marinette", "Marshfield", "Medford", "Menasha", "Menomonee Falls", "Menomonie", "Mequon", "Merrill", "Middleton", "Milwaukee", "Mineral Point", "Monroe", "Mount Pleasant", "Mukwonago", "Muskego", "Neenah", "New Berlin", "New Richmond", "Oak Creek", "Oconomowoc", "Onalaska", "Orfordville", "Oshkosh", "Pigeon Falls", "Platteville", "Pleasant Prairie", "Plover", "Port Washington", "Portage", "Pound", "Racine", "Reedsburg", "Rhinelander", "River Falls", "Saint Francis", "Sheboygan", "Shorewood", "South Milwaukee", "Spring Valley", "Stevens Point", "Stoughton", "Strum", "Sturtevant", "Sun Prairie", "Superior", "Three Lakes", "Tomah", "Two Rivers", "Washington Island", "Waterford", "Watertown", "Waukesha", "Waupun", "Wausau", "Wautoma", "Wauwatosa", "West Allis", "West Bend", "Weston", "Whitefish Bay", "Whitewater", "Wisconsin Rapids"]
      },
      {
        name: "Wyoming",
        cities: ["Buffalo", "Casper", "Cheyenne", "Cody", "Douglas", "Evanston", "Gillette", "Green River", "Jackson", "Lander", "Laramie", "Powell", "Rawlins", "Riverton", "Rock Springs", "Sheridan", "Torrington", "Worland"]
      }
    ],
    isoAlpha2: "US",
    isoAlpha3: "USA",
    isoNumeric: 840
  },
  {
    name: "Uruguay",
    flag: "🇺🇾",
    currency: {
      code: "UYU",
      name: "Peso",
      symbol: "$U"
    },
    states: [
      {
        name: "Artigas",
        cities: ["Artigas", "Bella Union"]
      },
      {
        name: "Canelones",
        cities: ["Camino Maldonado", "Canelones", "Ciudad de la Costa", "Juan Antonio Artigas", "Las Piedras", "Pando", "Paso de Carrasco", "Progreso", "Santa Lucia"]
      },
      {
        name: "Cerro Largo",
        cities: []
      },
      {
        name: "Colonia",
        cities: ["Carmelo", "Colonia", "Juan Lacaze", "Nueva Helvecia"]
      },
      {
        name: "Durazno",
        cities: ["Durazno"]
      },
      {
        name: "FLorida",
        cities: ["Florida"]
      },
      {
        name: "Flores",
        cities: ["Trinidad"]
      },
      {
        name: "Lavalleja",
        cities: ["Minas"]
      },
      {
        name: "Maldonado",
        cities: ["Maldonado", "San Carlos"]
      },
      {
        name: "Montevideo",
        cities: ["La Paz", "Montevideo"]
      },
      {
        name: "Paysandu",
        cities: ["Paysandu"]
      },
      {
        name: "Rio Negro",
        cities: []
      },
      {
        name: "Rivera",
        cities: ["Rivera"]
      },
      {
        name: "Rocha",
        cities: ["Chuy", "Rocha"]
      },
      {
        name: "Salto",
        cities: ["Salto"]
      },
      {
        name: "San Jose",
        cities: []
      },
      {
        name: "Soriano",
        cities: ["Dolores", "Mercedes"]
      },
      {
        name: "Tacuarembo",
        cities: ["Paso de los Toros", "Tacuarembo"]
      },
      {
        name: "Treinta y Tres",
        cities: []
      }
    ],
    isoAlpha2: "UY",
    isoAlpha3: "URY",
    isoNumeric: 858
  },
  {
    name: "Uzbekistan",
    flag: "🇺🇿",
    currency: {
      code: "UZS",
      name: "Som",
      symbol: "лв"
    },
    states: [
      {
        name: "Andijon",
        cities: ["Ahunabayev", "Andijon", "Asaka", "Boz", "Hakkulobod", "Hocaobod", "Honobod", "Ilyichevsk", "Karabagis", "Kurgontepa", "Marhomat", "Pahtaobod", "Paytug", "Sahrihan"]
      },
      {
        name: "Buhoro",
        cities: ["Buhoro", "Cangeldi", "Galaosiye", "Gazli", "Gijduvon", "Kizilravbe", "Kogon", "Korakul", "Korovulbazar", "Kukca", "Olot", "Oyokkuduk", "Romitan", "Safirkon", "Vobkent"]
      },
      {
        name: "Buxoro Viloyati",
        cities: []
      },
      {
        name: "Cizah",
        cities: ["Cizah", "Dustlik", "Gagarin", "Gallaorol", "Marcanbulok", "Pahtakor", "Ulyanovo", "Zomin"]
      },
      {
        name: "Fargona",
        cities: ["Altyarik", "Avval", "Besarik", "Fargona", "Hamza", "Kirgili", "Kukon", "Kuva", "Kuvasoy", "Margilon", "Rapkan", "Riston", "Toslok", "Yaypan"]
      },
      {
        name: "Horazm",
        cities: ["Drujba", "Gurlan", "Hazorasp", "Heva", "Honko", "Kuskupir", "Mesekli", "Sovot", "Turpokkala", "Urgenc"]
      },
      {
        name: "Kaskadar",
        cities: ["Beskent", "Ceynau", "Cirakci", "Dehkanobod", "Dinau", "Guzor", "Kallig", "Kamasi", "Karabag", "Karsi", "Kasbi", "Kitob", "Koson", "Madaniyat", "Maydayap", "Maymanak", "Muborak", "Oktyabrskiy", "Sahrisabz", "Talimarcon", "Urtacim", "Yakkabog", "Yaninison"]
      },
      {
        name: "Korakalpogiston",
        cities: ["Beruni", "Buston", "Cimboy", "Halkobod", "Hucayli", "Karauzyak", "Kegayli", "Kizketken", "Kozokdaryo", "Kungirot", "Mangit", "Muynok", "Nukus", "Tahiatos", "Tahtakupir", "Turtkul"]
      },
      {
        name: "Namangan",
        cities: ["Aytim", "Besbulok", "Cartak", "Cingeldi", "Cust", "Gozgon", "Iskavat", "Kalkuduk", "Konimeh", "Kosonsoy", "Minbulok", "Namangan", "Nurota", "Pop", "Tomdibulok", "Tosbulok", "Turakurgon", "Uckurgon", "Unhoyat", "Uyci", "Uzunkuduk", "Yanikurgon"]
      },
      {
        name: "Navoi",
        cities: ["Karmana", "Kiziltepa", "Navoi", "Uckuduk", "Zarafson"]
      },
      {
        name: "Samarkand",
        cities: ["Bulungur", "Camboy", "Carhin", "Celak", "Cuma", "Dahbed", "Istihon", "Kattakurgon", "Kusrobod", "Nurobod", "Oktos", "Paysanba", "Samarkand", "Superfosfatniy", "Urgut", "Yanirobod", "Ziadin"]
      },
      {
        name: "Sirdare",
        cities: ["Baht", "Guliston", "Hovos", "Sirdare", "Sirin", "Yaniyer"]
      },
      {
        name: "Surhondar",
        cities: ["Akkurgon", "Boysun", "Carkurgon", "Denau", "Kumkurgon", "Paskurd", "Sargun", "Sariasiya", "Serobod", "Surci", "Termiz", "Zan"]
      },
      {
        name: "Toskent",
        cities: ["Almazar", "Angren", "Bekobod", "Bektemir", "Buka", "Cinoz", "Circik", "Gazalkent", "Iskandar", "Keles", "Kibray", "Krasnogorskiy", "Kuyluk", "Ohangaron", "Olmalik", "Parkent", "Pskent", "Salar", "Soldatski", "Tashkent", "Toskent", "Tuytepa", "Urtaaul", "Yaniobod", "Yaniyul"]
      }
    ],
    isoAlpha2: "UZ",
    isoAlpha3: "UZB",
    isoNumeric: 860
  },
  {
    name: "Vanuatu",
    flag: "🇻🇺",
    currency: {
      code: "VUV",
      name: "Vatu",
      symbol: "Vt"
    },
    states: [
      {
        name: "Malampa",
        cities: ["Lakatoro", "Norsup"]
      },
      {
        name: "Penama",
        cities: ["Longana"]
      },
      {
        name: "Sanma",
        cities: ["Luganville", "Port Olry"]
      },
      {
        name: "Shefa",
        cities: ["Vila"]
      },
      {
        name: "Tafea",
        cities: ["Isangel"]
      },
      {
        name: "Torba",
        cities: ["Sola"]
      }
    ],
    isoAlpha2: "VU",
    isoAlpha3: "VUT",
    isoNumeric: 548
  },
  {
    name: "Vatican City",
    flag: "🇻🇦",
    currency: {
      code: "EUR"
    },
    states: [
      {
        name: "Vatican City State (Holy See)",
        cities: []
      }
    ]
  },
  {
    name: "Venezuela",
    flag: "🇻🇪",
    currency: {
      code: "VEF",
      name: "Bolivar",
      symbol: "Bs"
    },
    states: [
      {
        name: "Amazonas",
        cities: ["Puerto Ayacucho"]
      },
      {
        name: "Anzoategui",
        cities: ["Anaco", "Barcelona", "Cantaura", "El Tigre", "Puerto la Cruz", "San Jose de Guanipa"]
      },
      {
        name: "Apure",
        cities: ["Guasdualito", "San Fernando"]
      },
      {
        name: "Aragua",
        cities: ["Cagua", "El Limon", "La Victoria", "Las Teyerias", "Maracay", "Palo Negro", "San Mateo", "Turmero", "Villa de Cura"]
      },
      {
        name: "Barinas",
        cities: ["Barinas", "Barinitas"]
      },
      {
        name: "Bolivar",
        cities: ["Ciudad Bolivar", "Ciudad Guayana", "Upata"]
      },
      {
        name: "Carabobo",
        cities: ["Goaigoaza", "Guacara", "Guigue", "Mariara", "Moron", "Puerto Cabello", "San Joaquin", "Tacarigua", "Valencia"]
      },
      {
        name: "Cojedes",
        cities: ["San Carlos", "Tinaquillo"]
      },
      {
        name: "Delta Amacuro",
        cities: []
      },
      {
        name: "Distrito Federal",
        cities: []
      },
      {
        name: "Falcon",
        cities: ["Coro", "Punta Cardon", "Punto Fijo"]
      },
      {
        name: "Guarico",
        cities: ["Altagracia de Orituco", "Calabozo", "San Juan de los Morros", "Valle de la Pascua", "Zaraza"]
      },
      {
        name: "Lara",
        cities: ["Barquisimeto", "Cabudare", "Carora", "El Tocuyo", "Los Rastrojos", "Quibor"]
      },
      {
        name: "Merida",
        cities: ["Ejido", "El Vigia", "Merida"]
      },
      {
        name: "Miranda",
        cities: ["Baruta", "Carrizal", "Catia La Mar", "Caucaguita", "Chacao", "Charallave", "Cua", "El Cafetal", "El Hatillo", "Filas de Mariche", "Guarenas", "Guatire", "La Dolorita", "Los Dos Caminos", "Los Teques", "Ocumare del Tuy", "Petare", "San Antonio de los Altos", "Santa Teresa"]
      },
      {
        name: "Monagas",
        cities: ["Maturin"]
      },
      {
        name: "Nueva Esparta",
        cities: []
      },
      {
        name: "Portuguesa",
        cities: ["Acarigua", "Araure", "Guanare", "Villa Bruzual"]
      },
      {
        name: "Sucre",
        cities: ["Carupano", "Cumana"]
      },
      {
        name: "Tachira",
        cities: ["La Fria", "Rubio", "San Antonio del Tachira", "San Cristobal", "San Juan de Colon", "Tariba"]
      },
      {
        name: "Trujillo",
        cities: ["Trujillo", "Valera"]
      },
      {
        name: "Vargas",
        cities: ["Caraballeda", "La Guaira", "Maiquetia"]
      },
      {
        name: "Yaracuy",
        cities: ["Chivacoa", "Nirgua", "San Felipe", "Yaritagua"]
      },
      {
        name: "Zulia",
        cities: ["Bachaquero", "Cabimas", "Ciudad Ojeda", "Lagunillas", "Machiques", "Maracaibo", "San Carlos del Zulia", "Santa Rita", "Villa del Rosario"]
      }
    ],
    isoAlpha2: "VE",
    isoAlpha3: "VEN",
    isoNumeric: 862
  },
  {
    name: "Vietnam",
    flag: "🇻🇳",
    currency: {
      code: "VND",
      name: "Dong",
      symbol: "₫"
    },
    states: [
      {
        name: "Bac Giang",
        cities: []
      },
      {
        name: "Binh Dinh",
        cities: []
      },
      {
        name: "Binh Duong",
        cities: []
      },
      {
        name: "Da Nang",
        cities: []
      },
      {
        name: "Dong Bang Song Cuu Long",
        cities: []
      },
      {
        name: "Dong Bang Song Hong",
        cities: []
      },
      {
        name: "Dong Nai",
        cities: []
      },
      {
        name: "Dong Nam Bo",
        cities: []
      },
      {
        name: "Duyen Hai Mien Trung",
        cities: []
      },
      {
        name: "Hanoi",
        cities: ["Ha noi", "Hoang Mai", "Lang Ha"]
      },
      {
        name: "Hung Yen",
        cities: []
      },
      {
        name: "Khu Bon Cu",
        cities: []
      },
      {
        name: "Long An",
        cities: []
      },
      {
        name: "Mien Nui Va Trung Du",
        cities: []
      },
      {
        name: "Thai Nguyen",
        cities: []
      },
      {
        name: "Thanh Pho Ho Chi Minh",
        cities: []
      },
      {
        name: "Thu Do Ha Noi",
        cities: []
      },
      {
        name: "Tinh Can Tho",
        cities: []
      },
      {
        name: "Tinh Da Nang",
        cities: []
      },
      {
        name: "Tinh Gia Lai",
        cities: []
      }
    ],
    isoAlpha2: "VN",
    isoAlpha3: "VNM",
    isoNumeric: 704
  },
  {
    name: "Wallis and Futuna",
    flag: "🇼🇫",
    currency: {
      code: "XPF",
      name: "Franc",
      symbol: false
    },
    states: [
      {
        name: "Alo",
        cities: ["Kolia", "Mala''e", "Ono", "Poi", "Tamana", "Taoa", "Tuatafa", "Vele"]
      },
      {
        name: "Singave",
        cities: ["Fiua", "Leava", "Nuku", "Tavai", "Toloke", "Vaisei"]
      },
      {
        name: "Wallis",
        cities: ["Ahoa", "Aka Aka", "Alele", "Falaleu", "Gahi", "Haafuasia", "Haatofo", "Halalo", "Kolopopo", "Lavegahau", "Liku", "Mala''e", "Malaefoou", "Mata''Utu", "Teesi", "Tepa", "Utuofa", "Vailala", "Vaimalau", "Vaitupu"]
      }
    ],
    isoAlpha2: "WF",
    isoAlpha3: "WLF",
    isoNumeric: 876
  },
  {
    name: "Western Sahara",
    flag: "🇪🇭",
    currency: {
      code: "MAD,DZD,MRO"
    },
    states: [
      {
        name: "Bu Jaydur",
        cities: []
      },
      {
        name: "Wad-adh-Dhahab",
        cities: ["ad-Dakhlah"]
      },
      {
        name: "al-''Ayun",
        cities: ["al-''Ayun"]
      },
      {
        name: "as-Samarah",
        cities: ["as-Samarah"]
      }
    ]
  },
  {
    name: "Yemen",
    flag: "🇾🇪",
    currency: {
      code: "YER",
      name: "Rial",
      symbol: "﷼"
    },
    states: [
      {
        name: "Adan",
        cities: ["Adan", "Aden"]
      },
      {
        name: "Abyan",
        cities: ["Ahwar", "Ja''ar", "Zinjibar"]
      },
      {
        name: "Dhamar",
        cities: ["Dhamar"]
      },
      {
        name: "Hadramaut",
        cities: ["Shaqra", "al-Mukalla", "ash-Shahir"]
      },
      {
        name: "Hajjah",
        cities: ["Hajjah"]
      },
      {
        name: "Hudaydah",
        cities: ["Hodaidah"]
      },
      {
        name: "Ibb",
        cities: ["Dhi Sufal", "Ibb", "Jiblah", "Qa''tabah", "Yarim"]
      },
      {
        name: "Lahij",
        cities: ["Tuban"]
      },
      {
        name: "Ma''rib",
        cities: ["Ma''rib"]
      },
      {
        name: "Madinat San''a",
        cities: []
      },
      {
        name: "Sa''dah",
        cities: ["Sa''dah"]
      },
      {
        name: "Sana",
        cities: ["Amran", "Sahar", "Sanaa", "Sayyan"]
      },
      {
        name: "Shabwah",
        cities: ["Ataq", "Habban", "Taiz"]
      },
      {
        name: "Ta''izz",
        cities: ["Ta''izz", "al-Mukha"]
      },
      {
        name: "al-Bayda",
        cities: ["Raydah", "al-Bayda"]
      },
      {
        name: "al-Hudaydah",
        cities: ["Bajil", "Bayt-al-Faqih", "Zabid", "al-Hudaydah", "al-Marawi''ah", "az-Zaydiyah"]
      },
      {
        name: "al-Jawf",
        cities: ["al-Hazm"]
      },
      {
        name: "al-Mahrah",
        cities: ["al-Ghaydah"]
      },
      {
        name: "al-Mahwit",
        cities: ["Mahwit"]
      }
    ],
    isoAlpha2: "YE",
    isoAlpha3: "YEM",
    isoNumeric: 887
  },
  {
    name: "Zambia",
    flag: "🇿🇲",
    currency: {
      code: "ZMK",
      name: "Kwacha",
      symbol: "ZK"
    },
    states: [
      {
        name: "Central",
        cities: ["Kabwe", "Kapiri Mposhi", "Mkushi", "Mumbwa", "Serenje"]
      },
      {
        name: "Copperbelt",
        cities: ["Chambishi", "Chililabombwe", "Chingola", "Kalulushi", "Kitwe", "Luanshya", "Mpongwe", "Mufulira", "Ndola"]
      },
      {
        name: "Eastern",
        cities: ["Chipata", "Katete", "Lundazi", "Petauke"]
      },
      {
        name: "Luapala",
        cities: ["Mansa", "Mwansabombwe", "Nchelenge", "Samfya"]
      },
      {
        name: "Lusaka",
        cities: ["Chilanga", "Kafue", "Lusaka"]
      },
      {
        name: "North-Western",
        cities: ["Kalengwa", "Kansanshi", "Mwinilunga", "Solwezi", "Zambezi"]
      },
      {
        name: "Northern",
        cities: ["Chinsali", "Isoka", "Kasama", "Mbala", "Mpika"]
      },
      {
        name: "Southern",
        cities: ["Choma", "Itezhi-Tezhi", "Kalomo", "Livingstone", "Maamba", "Mazabuka", "Monze", "Nakambala", "Siavonga"]
      },
      {
        name: "Western",
        cities: ["Kalabo", "Kaoma", "Limulunga", "Mongu", "Senanga", "Sesheke"]
      }
    ],
    isoAlpha2: "ZM",
    isoAlpha3: "ZMB",
    isoNumeric: 894
  },
  {
    name: "Zimbabwe",
    flag: "🇿🇼",
    currency: {
      code: "ZWD",
      name: "Dollar",
      symbol: "Z$"
    },
    states: [
      {
        name: "Bulawayo",
        cities: ["Bulawayo"]
      },
      {
        name: "Harare",
        cities: ["Chitungwiza", "Harare"]
      },
      {
        name: "Manicaland",
        cities: ["Chimanimani", "Chipinge", "Mutare", "Nyanga", "Rusape", "Sakubva"]
      },
      {
        name: "Mashonaland Central",
        cities: []
      },
      {
        name: "Mashonaland East",
        cities: []
      },
      {
        name: "Mashonaland West",
        cities: []
      },
      {
        name: "Masvingo",
        cities: ["Chiredzi", "Gaths", "Masvingo"]
      },
      {
        name: "Matabeleland North",
        cities: []
      },
      {
        name: "Matabeleland South",
        cities: []
      },
      {
        name: "Midlands",
        cities: ["Chivhu", "Gweru", "Kwekwe", "Mvuma", "Redcliffe", "Shurugwi"]
      }
    ],
    isoAlpha2: "ZW",
    isoAlpha3: "ZWE",
    isoNumeric: 716
  }
]

export default countries 