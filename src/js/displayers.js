var Display = {};

Display.userInfo = function(user) {
  $("#user_info #name").text(user.name);
  $("#user_info #screen_name").text(user.screen_name);
  $("#user_info #image").attr('src', user.profile_image_url);
  $("#user_info #bio").text(user.description);
}

