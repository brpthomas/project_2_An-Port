$(document).ready(function() {
    console.log('jquery is running! from script.js')

    $('#search').on('submit', (e) => {
        e.preventDefault();
        const searchData = $('#search-input').val();
        console.log(searchData);
        makeSearchCall(searchData);
    })

    const makeSearchCall = (name) => {
        $.ajax({
            type: 'GET',
            url: `http://marketdata.websol.barchart.com/getQuote.json?key=4bfdb2da99476a86a66cae1eef9b6aaa&symbols=${name}`,
            success: data => {
                getData(data);

            }
        });

    };

    //call function to get the results and parse the data from the ajax call

    const getData = (data) => {
        const $results = $('.results').empty();
        console.log(data.results[0].symbol);
        console.log(data.results[0].name);
        console.log(data.results[0].open);
        console.log(data.results[0].lastPrice);
        const $ticker = $('<h3>').text(data.results[0].symbol).appendTo($results); 
        const $name = $('<h3>').text(data.results[0].name).appendTo($results); 
        const $openPrice = $('<h3>').text(data.results[0].open).appendTo($results); 
        const $lastPrice = $('<h3>').text(data.results[0].lastPrice).appendTo($results);



    }


});
