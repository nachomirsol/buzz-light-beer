let beersApi;
(function(){

    const call= function(url,handleSuccess,handleError){// llamada ajax preparada
        fetch(url)
        .then(data => data.json())
        .then(data => handleSuccess(data))
        .catch(err => handleError(err))

    }

    beersApi = {
        baseUrl: "https://quiet-inlet-67115.herokuapp.com/api/",
        search: function(query,handleResults,handleError){
            call(
                `${this.baseUrl}search/all?q=${query}`,
                handleResults,
                handleError
            );
        },

        showDetails: function(idBeer,handleDetail,handleError){
            call(
                `${this.baseUrl}beer/${idBeer}`,
                handleDetail,
                handleError
            );
        }
    }
})()
