var Display = {};

$(function(){

	Display.raphael_bar = Raphael("bar_graph",460,300);

	Display.bar_fin = function () {
		this.flag = Display.raphael_bar.popup(this.bar.x, this.bar.y+40, this.bar.value || "0").insertBefore(this);
	}

	Display.bar_fout = function () {
		this.flag.animate({opacity: 0}, 300, function () {this.remove();});
	}


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

	Display.mentions = function(mentions) {
		data = _.values(mentions);
		labels = _.keys(mentions);

		barChart = Display.raphael_bar.barchart(0, 50, 460, 250, data).hover(Display.bar_fin,Display.bar_fout);

		var i = 0;
		_.each(barChart.bars,function(b){
			ll = Display.raphael_bar.text(b.x,b.y,labels[i++]);
			ll.transform("r-90");
			ll.size = ll.attrs.text.length;
			ll.attr({ "font-size": "12px" });
			ll.transform("...T0,-"+(3.5*ll.size+5));
		});
	}
});
