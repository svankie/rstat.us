(function() {
  $(document).ready(function() {
    return $(".unfollow").click(function() {
      return confirm("Are you sure you want to unsubscribe from this user?");
    });
  });
}).call(this);
