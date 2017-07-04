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
        // const $results = $('.results').empty();
        const $symbol = $('.symbol');
        const $name = $('.companyName');
        const $price = $('.openPrice');
        const $close = $('.previousPrice')
        console.log(data.results[0].symbol);
        console.log(data.results[0].name);
        console.log(data.results[0].open);
        console.log(data.results[0].lastPrice);
        const $addTicker = $('<h3>').text(data.results[0].symbol).addClass('symbolname').appendTo($symbol);
        const $addName = $('<h3>').text(data.results[0].name).addClass('companyname').appendTo($name);
        const $addOpenPrice = $('<h3>').text(data.results[0].open).addClass('currentprice').appendTo($price);
        const $addLastPrice = $('<h3>').text(data.results[0].lastPrice).addClass('closingprice').appendTo($close);
    };


    //add stock to watchlist 
    $('.save-stock').on('click', (e) => {
        e.preventDefault();
        // debugger

        const stocksymbol = $('.symbolname')[0].innerText;
        console.log(stocksymbol);
        const companyname = $('.companyname')[0].innerText;
        console.log(companyname);
        const currentprice = $('.currentprice')[0].innerText; 
        console.log(currentprice); 
        const closingprice = $('.closingprice')[0].innerText;
        console.log(closingprice);

        const addStockInfo = {
            symbol: stocksymbol,
            company: companyname,
            currentPrice: currentprice,
            closingPrice: closingprice
        }

        $.ajax({
            type:'POST', 
            url:'/users/profile', 
            data: addStockInfo,
            success: addStockInfo => {
                window.location.replace('/users/profile')
                console.log('stock info added!------>', addStockInfo); 
            }, 
            error: err => {
                console.log('error from POST route********', err)
            }
        })

    })








}); // ends document.ready
