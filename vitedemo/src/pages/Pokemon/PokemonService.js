export const getPokemonCards = async (page) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ead6b9fb3msh90d4404a2b71121p1b963bjsncf4dad082546',
		'X-RapidAPI-Host': 'pokemon-tcg-card-prices.p.rapidapi.com'
	}
};
try {
  console.log(page);
  const url = page !== ""?
    `https://pokemon-tcg-card-prices.p.rapidapi.com/card?setId=33ee55f4-30d0-4900-850f-36a351fb9719&set=vivid-voltage&series=sword-and-shield&limit=25&fromId=${page}`:
    'https://pokemon-tcg-card-prices.p.rapidapi.com/card?setId=33ee55f4-30d0-4900-850f-36a351fb9719&set=vivid-voltage&series=sword-and-shield&limit=25';
const response = await fetch(url, options)
const jsonResponse = await response.json();
return jsonResponse;
}catch(ex){
  console.log(ex)
  return {
    results: [],
    paging:{
      pageIndex:0,
      pageSize:25,
      count:0
    }
  }
}
}
