function getReviews() {
  $.get('/get-reviews', function(data) {
    data.forEach(review => {
      $('#reviews').append(
        `<li>${review.userName} said ${review.subject}</li>`
      );
    });
  });
}

function getQuote() {
  $.get('http://quotes.rest/qod.json', function(data) {
    const quote = data.contents.quotes[0].quote;
    $('#list').append('<p>' + quote + '</p>');
    $('#quote-button').remove();
  });
}

$(function() {
  getReviews();

  $('#journal-form').on('submit', function(e) {
    e.preventDefault();
    $.post(
      '/save-review',
      {
        username: $('#journal-form #uname').val(),
        subject: $('#journal-form #subject').val()
      },
      function(data) {
        $('#reviews').empty();
        data.forEach(review => {
          $('#reviews').append(
            `<li>${review.userName} said ${review.subject}</li>`
          );
        });
      }
    );
  });
});
