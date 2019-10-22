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

  $('#break-button').click(function() {
    let text = $('#submission').val()

    $.ajax({
      type: 'POST',
      url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
      contentType: 'application/json',
      data: JSON.stringify({ word: { value: `${text}`}}),
      success: function(response) {
        alert('Sucessful!')
        $('#submission').val('')
      },
      error: function(error) {
        console.log(error)
      }
    })
  })
})


//     fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
  //       method: 'post',
  //       contentType: 'application/json',
  //       data: JSON.stringify({ word: { value: `${text}` } })
  //     })
  //     .then(function(response) {
    //       return response.json();
    //     })
    //     .then(function(data) {
      //       console.log({ message: `${text} added!`})
      //     })
      //   })
      // }
