console.log("Hello World")


$(document).ready(function() {
  // Extract the CSRF token from the meta tags
  const csrfToken = $('meta[name="csrf-token"]').attr('content');

  $(".sortable-events").sortable({
    axis: "y",
    update: function(event, ui) {
      var eventOrder = [];
      $(".event-row").each(function(index, element) {
        eventOrder.push($(element).data("event-id"));
      });

      // Include the CSRF token in the headers
      const headers = { 'X-CSRF-Token': csrfToken };

      // Send the updated event order to the server using AJAX
      $.ajax({
        method: "PATCH",
        url: "/events/update_order",
        headers: headers,
        data: { order: eventOrder },
        dataType: "json",
        success: function(response) {
          // Handle the success response if needed
        },
        error: function(error) {
          // Handle the error if needed
        },
      });
    },
  });
});


