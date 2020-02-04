const BASE_URL = 'http://api.currencylayer.com/';
const API_KEY = '777cfc15a74e10ecb14e3696ab2cf70c';
const button = document.querySelector("#money");
let input = document.querySelector("input");
let answer = input.value;

let drop = document.querySelector('.drop')
let downUnder = document.querySelector(".down-under")


let currencies = ['pound', 'aus-dollar', 'euro', 'MX-Pesos', 'canadian-dollar', 'Jap-Yen', 'Rus-Ruble', 'Bitcoin', 'Chinese-Yuan', 'Swiss-Franc', 'Israeli-NewShekel', 'Indian-Rupee', 'South-Korean-Won',
'Brazilian-Real', 'Argentine-Peso', 'Turkish-lira', 'Icelandic-Krona', 'Swedish-Krona', 'Czech-Koruna', 'S-African-Rand']

///)populates drop down
const populateDrop = async () => {
  currencies.forEach(cur => {
    let op = new Option()
    op.value = cur
    op.text = cur

    drop.options.add(op)
  })

}
populateDrop()

///gets data
const apiCall = async (currency) => {
  let response = await axios.get(`${BASE_URL}live?access_key=${API_KEY}&currencies=${answer}`);
  console.log(response.data.quotes)
  let quotes1 = response.data.quotes


  let keys = Object.keys(quotes1)
  console.log(keys)
  let quote = keys.filter(quote => {
    if (currency === 'pound') {
      if (quote === 'USDGBP') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'aus-dollar') {
      if (quote === 'USDAUD') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'euro') {
      if (quote === 'USDEUR') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'MX-Pesos') {
      if (quote === 'USDMXN') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'canadian-dollar') {
      if (quote === 'USDCAD') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Jap-Yen') {
      if (quote === 'USDJPY') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Rus-Ruble') {
      if (quote === 'USDRUB') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Bitcoin') {
      if (quote === 'USDBTC') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Chinese-Yuan') {
      if (quote === 'USDCNY') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Swiss-Franc') {
      if (quote === 'USDCHF') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Israeli-NewShekel') {
      if (quote === 'USDILS') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Indian-Rupee') {
      if (quote === 'USDINR') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'South-Korean-Won') {
      if (quote === 'USDKRW') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Brazilian-Real') {
      if (quote === 'USDBRL') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Argentine-Peso') {
      if (quote === 'USDARS') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Turkish-lira') {
      if (quote === 'USDTRY') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Icelandic-Krona') {
      if (quote === 'USDISK') {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Swedish-Krona') {
      if (quote === "USDSEK") {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'Czech-Koruna') {
      if (quote === "USDCZK") {
        console.log(quotes1[quote])
        return quote
      }
    } else if (currency === 'S-African-Rand') {
      if (quote === 'USDZAR') {
        console.log(quotes1[quote])
        return quote
      }
    }
  })

  console.log(quote);
  downUnder.innerHTML = quotes1[quote];
  //the two lines above call back the result which is the currency rate to the HTML
}
 
  drop.addEventListener('change', (event) => {

    console.log(event.target.value)
    apiCall(event.target.value)
  })




 






