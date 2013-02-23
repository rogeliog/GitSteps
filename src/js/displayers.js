var Display = {};

$(function(){

	Display.raphael_bar = Raphael("bar_graph",460,300);
	Display.raphael_pie = Raphael("pie_chart",460,300);

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

    Display.userBackground = function(user) {
      $('body').css('background', "url(" + user.profile_background_image_url + ")");
    }

    Display.daysOfWeek = function(days) {
      labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      pie = Display.raphael_pie.piechart(250, 150, 100, days, {legend: labels, legendpos: "west"});

      pie.hover(function () {
        this.sector.stop();
        this.sector.scale(1.05, 1.05, this.cx, this.cy);

        if (this.label) {
          this.label[0].stop();
          this.label[0].attr({ r: 7.5 });
          this.label[1].attr({ "font-weight": 800 });
        }
      }, function () {
        this.sector.animate({ transform: 's1 1 ' + this.cx + ' ' + this.cy }, 500, "bounce");

        if (this.label) {
          this.label[0].animate({ r: 5 }, 500, "bounce");
          this.label[1].attr({ "font-weight": 400 });
        }
      });
}

});
