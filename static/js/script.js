    $(document).ready(function() {
        $('.rating input').click(function() {
            // Handle star selection (store the rating value)
            var userRating = $(this).val();
            console.log('User rating: ' + userRating);
            // You can send this value to your server/database via AJAX
        });

        $('#reviewForm').submit(function(e) {
            e.preventDefault();
            // Handle form submission (send data to the server)
            // Implement your database logic here
            alert('Review submitted successfully!');
        });
    });
