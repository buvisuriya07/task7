// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    
    // 1.Get all the countries from the Asia continent/region using the Filter function
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian countries:', asiaCountries);

    // 2.Get all the countries with a population of less than 2 lakhs using Filter function
    const lessThan2Lakhs = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', lessThan2Lakhs);

    // 3.Print the following details name, capital, flag using forEach function
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // 4.Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total population of all countries:', totalPopulation);

    // 5.Print the country which uses US Dollars as currency.
    const usdCountries = data.filter(country => country.currencies.USD);
    console.log('Countries using US Dollars:', usdCountries);
  })
  .catch(error => console.log(error));
