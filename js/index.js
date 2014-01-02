$(document).ready(function() {
	
	var timer = {
		timerMin: {},
		warnMin: {},
		twoMinReset: function() {
			clearInterval(this.timerMin);

			var intTime = 120000;
			var warnTime = intTime * 0.75;

			$("#timerBox").removeClass("grey red orange").addClass("green");			
			
			warnAlarm = function() {
				console.log("Only 1/4 time left!")
				$("#timerBox").removeClass("green").addClass("orange");
				clearInterval(this.warnMin);
			};

			timerAlarm = function() {
				console.log("Two minute timer has ended.");
				$("#timerBox").removeClass("orange").addClass("red");
				clearInterval(this.timerMin);
			};

			console.log("Two minute timer is running...");
			
			this.timerMin = setInterval(timerAlarm, intTime);
			this.warnMin = setInterval(warnAlarm, warnTime);
		},
		fiveMinReset: function() {
			clearInterval(this.timerMin);

			var intTime = 300000;
			var warnTime = intTime * 0.75;

			$("#timerBox").removeClass("grey red orange").addClass("green");			
			
			warnAlarm = function() {
				console.log("Only 1/4 time left!")
				$("#timerBox").removeClass("green").addClass("orange");
				clearInterval(this.warnMin);
			};

			timerAlarm = function() {
				console.log("Five minute timer has ended.");
				$("#timerBox").removeClass("orange").addClass("red");
				clearInterval(this.timerMin);
			};

			console.log("Five minute timer is running...");
			
			this.timerMin = setInterval(timerAlarm, intTime);
			this.warnMin = setInterval(warnAlarm, warnTime);
		},
		stop: function() {
			console.log("Timer stopped.");
			$("#timerBox").removeClass("green red orange").addClass("grey");
			clearInterval(this.timerMin);
			clearInterval(this.warnMin);
		}
	};

	$("#fiveMin").on('click', function() {
		timer.fiveMinReset();
	});

	$("#twoMin").on('click', function() {
		timer.twoMinReset();
	});

	$("#stop").on('click', function() {
		timer.stop();
	});
});
