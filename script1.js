const apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
const table = document.getElementById('exchange-rates');
const refreshInterval = 1000; // Yenileme süresi (milisaniye cinsinden), burada 1 saniye olarak ayarlanmıştır

function fetchExchangeRates() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const rates = data.rates;
      let html = '';
      Object.keys(rates).forEach(currency => {
        const rate = rates[currency];
        const flag = getCountryFlag(currency);
        const change = getRateChange(currency, rate);
        const changeIcon = change >= 0 ? '<i class="fas fa-arrow-up increase-icon"></i>' : '<i class="fas fa-arrow-down decrease-icon"></i>';
        html += `<tr><td><img class="flag-img" src="${flag}" alt="${currency}"></td><td>${currency}</td><td>${rate}</td><td>${changeIcon} ${Math.abs(change)}</td></tr>`;
      });
      table.innerHTML = html;
    })
    .catch(error => {
      console.error('API isteği başarısız oldu:', error);
      table.innerHTML = '<tr><td colspan="4">Hata oluştu</td></tr>';
    });
}

function getCountryFlag(currency) {
  // Bayrakları temsil eden resimlerin dosya yolunu döndürmek için bir fonksiyon
  // Örnek olarak, bayrak resimlerini 'flags' adlı bir klasörde sakladığınızı varsayalım
  // Bu fonksiyonu, kendi bayrak resimlerinizin dosya yollarını döndürecek şekilde güncellemeniz gerekmektedir
  switch (currency) {
    case 'USD':
      return 'https://img.icons8.com/color/48/usa-circular.png';
    case 'EUR':
      return 'https://img.icons8.com/color/48/germany-circular.png';
    case 'GBP':
      return 'https://img.icons8.com/color/48/great-britain-circular.png';

      case 'AZN':
        return 'https://img.icons8.com/color/48/azerbaijan-circular.png';

        case 'GEL':
          return 'https://img.icons8.com/color/48/georgia-circular.png';
         
          case 'AED':
            return 'https://img.icons8.com/color/48/united-arab-emirates-circular.png';

            case 'AFN':
            return 'https://img.icons8.com/color/48/afghanistan-flag-rounded.png';

            case 'ANG':
              return 'https://img.icons8.com/emoji/48/sint-maarten-emoji.png';


          case 'BDT':
            return 'https://img.icons8.com/color/48/bangladesh-circular.png';
            case 'BGN':
            return 'https://img.icons8.com/color/48/bulgaria-circular.png';
            case 'AMD':
            return 'https://img.icons8.com/color/48/armenia-circular.png';
            case 'ALL':
            return 'https://img.icons8.com/color/48/albania-circular.png';
            case 'AOA':
            return 'https://img.icons8.com/color/48/angola-circular.png';
            case 'ARS':
            return 'https://img.icons8.com/color/48/argentina-circular.png';
            case 'AUD':
            return 'https://img.icons8.com/color/48/australia-circular.png';
            case 'AWG':
            return 'https://img.icons8.com/color/48/aruba-circular.png';
            case 'BBD':
              return 'https://img.icons8.com/color/48/barbados-circular.png';
             
              
           
                

          
              case 'BHD':
                return 'https://img.icons8.com/color/48/bahrain-circular.png';
                case 'BIF':
                  return 'https://img.icons8.com/color/48/burundi-circular.png';
                  case 'BMD':
                    return 'https://img.icons8.com/color/48/bermuda-circular.png';
                   
                      case 'BOB':
                        return 'https://img.icons8.com/color/48/bolivia-circular.png';
                        case 'BOV':
                          return 'https://img.icons8.com/color/48/bolivia-circular.png';
                          case 'BRL':
                            return 'https://img.icons8.com/color/48/brazil-circular.png';
                            case 'BSD':
                              return 'https://img.icons8.com/color/48/bahamas-circular.png';
                              case 'BTN':
                                return 'https://img.icons8.com/color/48/bhutan-circular.png';
                                case 'BWP':
                                  return 'https://img.icons8.com/color/48/botswana-circular.png';
                                  case 'BYN':
                                    return 'https://img.icons8.com/color/48/belarus-circular.png';
                                    case 'BZD':
                                      return 'https://img.icons8.com/color/48/belize-circular.png';

////////////////////////////////////////////////////////////////////


                                      case 'CAD':
                                        return 'https://img.icons8.com/color/48/canada-circular.png';                           
                                        case 'CHE':
                                          return 'https://img.icons8.com/color/48/switzerland-circular.png'; 
                                          case 'CHF':
                                        return 'https://img.icons8.com/color/48/liechtenstein-circular.png'; 
                                        case 'CLP':
                                        return 'https://img.icons8.com/color/48/chile-circular.png'; 
                                        case 'CNY':
                                        return 'https://img.icons8.com/color/48/china-circular.png'; 
                                        case 'COP':
                                        return 'https://img.icons8.com/color/48/colombia-circular.png'; 
                                        case 'TRY':
                                        return 'https://img.icons8.com/color/48/turkey-circular.png'; 
                                        
                                        ///////////////////////////////////////////////////////////////////                      
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                       
                                        case 'CUP':
                                          return 'https://img.icons8.com/color/48/cuba-circular.png'; 
                                         
                                        case 'DJF':
                                        return 'https://img.icons8.com/color/48/djibouti-circular.png'; 
                                        case 'DKK':
                                        return 'https://img.icons8.com/color/48/denmark-circular.png'; 
                                        case 'DZD':
                                        return 'https://img.icons8.com/color/48/algeria-circular.png'; 
                                        case 'EGP':
                                        return 'https://img.icons8.com/color/48/egypt-circular.png'; 
                                        case 'ERN':
                                        return 'https://img.icons8.com/color/48/eritrea-circular.png'; 
                                        case 'ETB':
                                        return 'https://img.icons8.com/color/48/ethiopia-circular.png';                           
                                       
                                          case 'FJD':
                                        return 'https://img.icons8.com/color/48/fiji-circular.png'; 
                                        case 'GHS':
                                        return 'https://img.icons8.com/color/48/ghana-circular.png'; 
                                        case 'GIP':
                                        return 'https://img.icons8.com/color/48/gibraltar-circular.png'; 
                                        case 'GMD':
                                        return 'https://img.icons8.com/color/48/gambia-circular.png'; 
                                        case 'GNF':
                                        return 'https://img.icons8.com/color/48/guinea-circular.png'; 
                                        case 'GTQ':
                                        return 'https://img.icons8.com/color/48/guatemala-circular.png'; 
                                        case 'GYD':
                                        return 'https://img.icons8.com/color/48/guyana-circular.png';                           
                                        case 'HKD':
                                          return 'https://img.icons8.com/color/48/hongkong-circular.png'; 
                                          case 'HNL':
                                        return 'https://img.icons8.com/color/48/honduras-circular.png'; 
                                        
                                        case 'HUF':
                                        return 'https://img.icons8.com/color/48/hungary-circular.png'; 
                                        case 'IDR':
                                        return 'https://img.icons8.com/color/48/indonesia-circular.png'; 
                                        case 'ILS':
                                        return 'https://img.icons8.com/color/48/israel-circular.png'; 
                                        case 'INR':
                                        return 'https://img.icons8.com/color/48/india-circular.png'; 
                                        //////////////////////////////////////////////////




                                        case 'IQD':
                                        return 'https://img.icons8.com/color/48/iraq-circular.png';
                                        case 'IRR':
                                        return 'https://img.icons8.com/color/48/iran-circular.png';
                                        case 'ISK':
                                        return 'https://img.icons8.com/color/48/iceland-circular.png';
                                        case 'JMD':
                                        return 'https://img.icons8.com/color/48/jamaica-circular.png';
                                        case 'JPY':
                                        return 'https://img.icons8.com/color/48/japan-circular.png';
                                        case 'KES':
                                        return 'https://img.icons8.com/color/48/kenya-circular.png';
                                        case 'KGS':
                                        return 'https://img.icons8.com/color/48/kyrgyzstan-circular.png';
                                        case 'KHR':
                                        return 'https://img.icons8.com/color/48/cambodia-circular.png';
                                        case 'KMF':
                                        return 'https://img.icons8.com/color/48/comoros-circular.png';
                                        case 'KPW':
                                        return 'https://img.icons8.com/color/48/northkorea-circular.png';
                                        case 'KRW':
                                        return 'https://img.icons8.com/color/48/south-korea-circular.png';
                                        case 'KWD':
                                        return 'https://img.icons8.com/color/48/kuwait-circular.png';
                                       
                                        case 'KZT':
                                        return 'https://img.icons8.com/color/48/kazakhstan-circular.png';
                                        case 'LAK':
                                        return 'https://img.icons8.com/color/48/laos-circular.png';
                                        case 'LBP':
                                        return 'https://img.icons8.com/color/48/lebanon-circular.png';
                                        case 'LKR':
                                        return 'https://img.icons8.com/color/48/sri-lanka-circular.png';
                                        case 'LRD':
                                        return 'https://img.icons8.com/color/48/liberia-circular.png';
                                        case 'LSL':
                                        return 'https://img.icons8.com/color/48/lesotho-circular.png';
                                        case 'LYD':
                                        return 'https://img.icons8.com/color/48/libya-circular.png';
                                        case 'MAD':
                                        return 'https://img.icons8.com/color/48/morocco-circular.png';
                                        case 'MDL':
                                        return 'https://img.icons8.com/color/48/moldova-circular.png';
                                        case 'MGA':
                                        return 'https://img.icons8.com/color/48/madagascar-circular.png';
                                       
                                        case 'MKD':
                                        return 'https://img.icons8.com/color/48/macedonia-circular.png';
                                        case 'MMK':
                                        return 'https://img.icons8.com/color/48/myanmar-circular.png';
                                        case 'MNT':
                                        return 'https://img.icons8.com/color/48/mongolia-circular.png';
                                        case 'MOP':
                                        return 'https://img.icons8.com/color/48/macao-circular.png';
                                        case 'MRU':
                                        return 'https://img.icons8.com/color/48/mauritania-circular.png';
                                        case 'MUR':
                                        return 'https://img.icons8.com/color/48/mauritius-circular.png';
                                        case 'MVR':
                                        return 'https://img.icons8.com/color/48/maldives-circular.png';
                                        case 'MWK':
                                        return 'https://img.icons8.com/color/48/malawi-circular.png';
                                        case 'MXN':
                                        return 'https://img.icons8.com/color/48/mexico-circular.png';
                                        case 'MXV':
                                        return 'https://img.icons8.com/color/48/mexico-circular.png';
                                        case 'MYR':
                                        return 'https://img.icons8.com/color/48/malaysia-circular.png';
                                        case 'MZN':
                                        return 'https://img.icons8.com/color/48/mozambique-circular.png';
                                        case 'NAD':
                                        return 'https://img.icons8.com/color/48/namibia-circular.png';
                                        case 'NGN':
                                        return 'https://img.icons8.com/color/48/nigeria-circular.png';
                                        case 'NIO':
                                        return 'https://img.icons8.com/color/48/nicaragua-circular.png';
                                        case 'NOK':
                                        return 'https://img.icons8.com/color/48/norway-circular.png';
                                        case 'NPR':
                                        return 'https://img.icons8.com/color/48/nepal-circular.png';
                                        case 'NZD':
                                        return 'https://img.icons8.com/color/48/new-zealand-circular.png';
                                        case 'OMR':
                                        return 'https://img.icons8.com/color/48/oman-circular.png';



                                        case 'PAB':
                                        return 'https://img.icons8.com/color/48/panama-circular.png';
                                        case 'PEN':
                                        return 'https://img.icons8.com/color/48/peru-circular.png';
                                        case 'PGK':
                                        return 'https://img.icons8.com/color/48/papua-new-guinea-circular.png';
                                        case 'PHP':
                                        return 'https://img.icons8.com/color/48/philippines-circular.png';
                                        case 'PKR':
                                        return 'https://img.icons8.com/color/48/pakistan-circular.png';
                                        case 'PLN':
                                        return 'https://img.icons8.com/color/48/poland-circular.png';
                                        case 'PYG':
                                        return 'https://img.icons8.com/color/48/paraguay-circular.png';
                                        case 'QAR':
                                        return 'https://img.icons8.com/color/48/qatar-circular.png';
                                        case 'RON':
                                        return 'https://img.icons8.com/color/48/romania-circular.png';
                                      
                                        
                                        case 'RWF':
                                        return 'https://img.icons8.com/color/48/rwanda-circular.png';
                                        case 'SAR':
                                        return 'https://img.icons8.com/color/48/saudi-arabia-circular.png';
                                        case 'SBD':
                                        return 'https://img.icons8.com/color/48/solomon-islands-circular.png';
                                        case 'SCR':
                                        return 'https://img.icons8.com/color/48/seychelles-circular.png';
                                        case 'SDG':
                                        return 'https://img.icons8.com/color/48/sudan-circular.png';
                                        case 'SEK':
                                        return 'https://img.icons8.com/color/48/sweden-circular.png';
                                        case 'SGD':
                                        return 'https://img.icons8.com/color/48/singapore-circular.png';
                                        case 'SHP':
                                        return 'https://img.icons8.com/color/48/saint-kitts-and-nevis-circular.png';
                                        case 'SLE':
                                        return 'https://img.icons8.com/color/48/sierra-leone-circular.png';
                                        case 'SLL':
                                        return 'https://img.icons8.com/color/48/sierra-leone-circular.png';
                                        case 'SOS':
                                        return 'https://img.icons8.com/color/48/somalia-circular.png';
                                        case 'SRD':
                                        return 'https://img.icons8.com/color/48/suriname-circular.png';
                                        case 'SSP':
                                        return 'https://img.icons8.com/color/48/south-sudan-circular.png';
                                        case 'STN':
                                        return 'https://img.icons8.com/color/48/sao-tome-and-principe-circular.png';
                                        case 'SVC':
                                        return 'https://img.icons8.com/color/48/el-salvador-circular.png';
                                        case 'SYP':
                                        return 'https://img.icons8.com/color/48/syria-circular.png';
                                        case 'SZL':
                                        return 'https://img.icons8.com/color/48/swaziland-circular.png';
                                        case 'THB':
                                        return 'https://img.icons8.com/color/48/thailand-circular.png';
                                        case 'TJS':
                                        return 'https://img.icons8.com/color/48/tajikistan-circular.png';
                                        case 'TMT':
                                        return 'https://img.icons8.com/color/48/turkmenistan-circular.png';
                                        case 'TND':
                                        return 'https://img.icons8.com/color/48/tunisia-circular.png';
                                        case 'TOP':
                                        return 'https://img.icons8.com/color/48/tonga-circular.png';
                                        case 'TTD':
                                        return 'https://img.icons8.com/color/48/trinidad-and-tobago-circular.png';
                                        case 'TWD':
                                        return 'https://img.icons8.com/color/48/taiwan-flag-circle.png';
                                        case 'TZS':
                                        return 'https://img.icons8.com/color/48/tanzania-circular.png';


                                        case 'UGX':
                                          return 'https://img.icons8.com/color/48/uganda-circular.png';

                                        case 'UAH':
                                        return 'https://img.icons8.com/color/48/ukraine-circular.png';
                                        case 'USN':
                                        return 'https://img.icons8.com/color/48/united-state-circular.png';
                                        case 'UYI':
                                        return 'https://img.icons8.com/color/48/uruguay-circular.png';
                                        case 'UYU':
                                        return 'https://img.icons8.com/color/48/uruguay-circular.png';
                                        case 'UYW':
                                        return 'https://img.icons8.com/color/48/uruguay-circular.png';
                                        case 'UZS':
                                        return 'https://img.icons8.com/color/48/uzbekistan-circular.png';
                                        case 'VED':
                                        return 'https://img.icons8.com/color/48/venezuela-circular.png';
                                        case 'VES':
                                        return 'https://img.icons8.com/color/48/venezuela-circular.png';
                                        case 'VND':
                                        return 'https://img.icons8.com/color/48/vietnam-circular.png';
                                        case 'VUV':
                                        return 'https://img.icons8.com/color/48/vanuatu-circular.png';
                                        case 'WST':
                                        return 'https://img.icons8.com/color/48/samoa-circular.png';
                                        case 'XAF':
                                        return 'https://img.icons8.com/color/48/cameroon-circular.png';
                                        

                                        case 'XCD':
                                        return 'https://img.icons8.com/color/48/anguilla-circular.png';
                                        
                                          case 'XOF':
                                            return 'https://img.icons8.com/color/48/benin-circular.png';
                                          
                                              case 'XPF':
                                                return 'https://img.icons8.com/emoji/48/new-caledonia-emoji.png';
                                               
                                               case 'YER':
                                                            return 'https://img.icons8.com/color/48/yemen-circular.png';
                                                            case 'ZAR':
                                                              return 'https://img.icons8.com/color/48/swaziland-circular.png';
                                                              case 'ZMW':
                                                                return 'https://img.icons8.com/color/48/zambia-circular.png';
                                                                case 'ZWL':
                                                                  return 'https://img.icons8.com/color/48/zimbabwe-circular.png';

    case 'BAM':
     return 'https://img.icons8.com/emoji/48/bosnia--herzegovina-emoji.png';
     case 'BND':
     return 'https://img.icons8.com/color/48/brunei-darussalam-circular.png';
     
     case 'CDF':
     return 'https://img.icons8.com/color/48/congo-circular.png';
     case 'CRC':
     return 'https://img.icons8.com/color/48/casta-rica-circular.png';
     case 'CVE':
     return 'https://img.icons8.com/color/48/cape-verde-circular.png';
     case 'CZK':
     return 'https://img.icons8.com/color/48/48/czech-republic-circular.png';
     case 'DOP':
     return 'https://img.icons8.com/color/48/dominican-republic-circular.png';
     case 'FKP':
     return 'https://img.icons8.com/color/48/falkland-islands-circular.png';
     case 'FOK':
     return 'https://img.icons8.com/color/48/antarctica-circular.png';
     case 'GGP':
     return 'https://img.icons8.com/color/48/jersey-circular.png';
     case 'HTG':
     return 'https://img.icons8.com/color/48/the-republic-of-haiti-circular.png';
     case 'HRK':
     return 'https://img.icons8.com/color/48/croatia-circular.png';
     case 'IMP':
     return 'https://img.icons8.com/color/48/benin-circular.png';
     case 'JEP':
      return 'https://img.icons8.com/color/48/burundi-circular.png';
      case 'JOD':
        return 'https://img.icons8.com/color/48/jordan-circular.png';
        case 'KID':
          return 'https://img.icons8.com/color/48/burkina-faso-circular.png';
          case 'KYD':
            return 'https://img.icons8.com/color/48/bermuda-circular.png';
            case 'RSD':
              return 'https://img.icons8.com/color/48/sernia-circular.png';
              case 'RUB':
                return 'https://img.icons8.com/color/48/russian-federation.png';
                case 'TVD':
              return 'https://img.icons8.com/emoji/48/tuvalu-emoji.png';
              case 'XDR':
                return 'https://img.icons8.com/color/48/flag-of-hamburg.png';
                case '':
              return 'https://img.icons8.com/color/48/-circular.png';
              case '':
                return 'https://img.icons8.com/color/48/-circular.png';

                              
    // Diğer ülkeler ve bayra
    // Diğer ülkeler ve bayra
    // Diğer ülkeler ve bayra

    // Diğer ülkeler ve bayra
    ; // Bayrak bulunamadığında boş bir değer döndürülür
  }
}

function getRateChange(currency, rate) {
  // Kurlardaki değişimi simüle etmek için bir fonksiyon
  // Gerçek bir API kullanılmadığı için rastgele bir artış/azalış değeri döndürülür
  // Bu fonksiyonu, gerçek bir değişim hesaplama mantığıyla güncellemeniz gerekmektedir
  const randomChange = Math.random() * 0.1; // Rastgele bir değer (0 ile 0.1 arasında)
  return currency === 'USD' ? randomChange : -randomChange;
}

// İlk kez çalıştır
fetchExchangeRates();

// Belirli bir süre aralığında yenileme işlemini gerçekleştir
setInterval(fetchExchangeRates, refreshInterval);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// arama motoru  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arama işlemleri için gerekli elementlerin referanslarını al
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const clearIcon = document.getElementById('clear-icon');
const searchHistory = document.getElementById('search-history');

// Arananları depolamak için bir dizi oluştur
let searchQueries = [];

// Arama butonuna tıklanınca arama işlemini gerçekleştir
searchButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  searchCurrency(searchText);
});

// Arama metnine göre para birimlerini filtrele
function searchCurrency(searchText) {
  const currencyRows = table.getElementsByTagName('tr');

  for (let i = 0; i < currencyRows.length; i++) {
    const currencyCell = currencyRows[i].getElementsByTagName('td')[1];
    const currency = currencyCell.textContent || currencyCell.innerText;

    if (currency.toLowerCase().includes(searchText.toLowerCase())) {
      currencyRows[i].style.display = '';
    } else {
      currencyRows[i].style.display = 'none';
    }
  }

  // Arama metni girildiğinde temizleme ikonunu ve arama geçmişini güncelle
  if (searchText.length > 0) {
    clearIcon.style.display = 'inline-block';
    addToSearchHistory(searchText);
  } else {
    clearIcon.style.display = 'none';
  }
  
  // Son arama sorgusunu depola
  localStorage.setItem('lastSearch', searchText);
}

// Temizleme ikonuna tıklanınca arama metnini temizle
clearIcon.addEventListener('click', () => {
  searchInput.value = '';
  searchCurrency('');
});

// Sayfa yüklendiğinde son arama sorgusunu geri yükle
window.addEventListener('load', () => {
  const lastSearch = localStorage.getItem('lastSearch');
  if (lastSearch) {
    searchInput.value = lastSearch;
    searchCurrency(lastSearch);
  }
});

// Arama geçmişine yeni bir öğe ekler
function addToSearchHistory(searchText) {
  if (!searchQueries.includes(searchText)) {
    searchQueries.push(searchText);
    const searchItem = document.createElement('div');
    searchItem.textContent = searchText;
    searchItem.classList.add('search-item');
    searchItem.addEventListener('click', () => {
      searchInput.value = searchText;
      searchCurrency(searchText);
    });
    searchHistory.appendChild(searchItem);
  }
}


