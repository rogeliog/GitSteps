var Display = {};

Display.userStats = function(user) {
  $("#user_stats #tweets .content").text(user.statuses_count);
  $("#user_stats #following .content").text(user.friends_count);
  $("#user_stats #followers .content").text(user.followers_count);
}

Display.userInfo = function(user) {
  $("#user_info #name").text(user.name);
  $("#user_info #screen_name").text(user.screen_name);
  $("#user_info #image").attr('src', user.profile_image_url);
  $("#user_info #bio").text(user.description);
}
