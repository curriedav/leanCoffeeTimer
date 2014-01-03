$(document).ready(function() {
	var timer = {
		timerMin: {},
		warnMin: {},
		timerReset: function(milles) {
			clearInterval(timer.timerMin);
			var intTime = milles;
			var warnTime = intTime * 0.75;

			$("#timerBox").removeClass("grey red orange").addClass("green");			
			
			warnAlarm = function() {
				$("#timerBox").removeClass("green").addClass("orange");
				clearInterval(timer.warnMin);
			};

			timerAlarm = function() {
				$("#timerBox").removeClass("orange").addClass("red");
				clearInterval(timer.timerMin);
			};

			this.timerMin = setInterval(timerAlarm, intTime);
			this.warnMin = setInterval(warnAlarm, warnTime);
		},
		stop: function() {
			$("#timerBox").removeClass("green red orange").addClass("grey");
			clearInterval(timer.timerMin);
			clearInterval(timer.warnMin);
		}
	};

	$("#fiveMin").on('click', function() {
		timer.timerReset(300000);
	});

	$("#twoMin").on('click', function() {
		timer.timerReset(120000);
	});

	$("#stop").on('click', function() {
		timer.stop();
	});
});
