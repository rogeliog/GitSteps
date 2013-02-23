$(function(){

  updateData = function(data){
	  user = getUserInfo(data);
	  Display.userStats(user);
  }


  pullDataFromTwitter = function(){
    var user = $("#user_name").val();
    var url = "http://api.twitter.com/1/statuses/user_timeline.json";

    $.ajax({
      url: url,
      dataType: "jsonp",
      data: {count: 50, include_entities: true, screen_name: user},
      success: updateData,
      error: function(){ console.log("NO");}
    });
  }


  pullDataFromTwitter();

  $("#search").on("click",function(event){
    event.preventDefault();
    pullDataFromTwitter();
  });
});
