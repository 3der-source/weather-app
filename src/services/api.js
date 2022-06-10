const KEY = '35261753f3b54bad9d4101521221006';

const fetchData = async (city) =>{
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=yes`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
}

export default fetchData