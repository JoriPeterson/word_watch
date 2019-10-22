import $ from 'jquery'

$(document).ready(() => {
  $.ajax({
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word',
    success: function(data){
    $('.word-count').append(`The most popular word is ${Object.keys(data.word)} with a word count of ${Object.values(data.word)}`)
  },
    error: function(error) {
      console.log(error)
    }
  })
})


//   function populateWord() {
//     fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word')
//     .then(response => response.json())
//     .then(result => {
//
//     })
//     let word_count = document.getElementById("word-count")
//       .then(function(data){
//         console.log(data)
//         let word = data.results
//         send(word)
//     })
//     .catch(function(error){
//       console.log(error)
//     });
//   }
// })
