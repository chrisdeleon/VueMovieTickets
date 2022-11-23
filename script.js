/* 
* Chris de Leon
* 11/23/2022
* CIS131 Vue Movie Tickets Project
*/


var app = new Vue({
    el: "#app",
    data: {
        nowPlayingArray:""
    },
    mounted(){ // API request
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=eb5fafc9ff4aaca27543575afba0e08a&language=en-US&page=1')
        .then( (response) => {
            this.nowPlayingArray = response.data.results.slice(0,4); // specifies the length of the array, 
            console.log(this.nowPlayingArray) // displays results in the console
        })
    }
})

// "https://image.tmdb.org/t/p/w200" -- poster path