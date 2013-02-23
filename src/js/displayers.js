var Display = {};

Display.userStats = function(user) {
  $("#user_stats #tweets .content").text(user.statuses_count);
  $("#user_stats #following .content").text(user.friends_count);
  $("#user_stats #followers .content").text(user.followers_count);
}
