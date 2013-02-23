var Timeline = {};

Timeline.getUser = function(tweets) {
  return tweets[0].user;
}

Timeline.getMentionsFor = function(tweets){
  var mentions = [];
  _.each(tweets,function(e){
    var m = e.entities.user_mentions;
    if(m.length > 0){
      _.each(m,function(u){
        mentions.push("@"+u.screen_name);
      });
    }
  });

  var all_users = _.reduce(mentions,function(counts, word) {
	  counts[word] = (counts[word] || 0) + 1;
	  return counts;
  }, {});

  var tmp = _.pairs(all_users);
  var ordered = _.sortBy(tmp,function(g){ return g[1]; });

  var users_pairs = _.last(ordered,7);

  return _.object(users_pairs);
}

Timeline.getDaysFor = function(tweets) {
  days = makeArrayOf(0, 7);

  _.each(tweets,function(tweet){
    date = new Date(tweet.created_at);
    tweetDay = date.getDay();
    days[tweetDay]++;
  });

  return days;
}

makeArrayOf = function(value, length) {
  var arr = [], i = length;
  while (i--) {
    arr[i] = value;
  }
  return arr;
}

