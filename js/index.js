var timer = {
	twoMinReset: function() {
		var intTime = 120000;
		timerAlarm = function() {
			console.log("Two minute timer has ended.");
			clearInterval(timerMin);
		};
		console.log("Two minute timer is running...");
		var timerMin = setInterval(timerAlarm, intTime);
	},
	fiveMinReset: function() {
		var intTime = 300000;
		timerAlarm = function() {
			console.log("Five minute timer has ended.");
			clearInterval(timerMin);
		};
		console.log("Five minute timer is running...");
		var timerMin = setInterval(timerAlarm, intTime);
	},
	stop: function() {
		clearInterval(timerMin);
	}
};


