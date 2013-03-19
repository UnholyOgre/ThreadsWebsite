function results() {
	var q1Val = $('input[name=q1]:checked').val();
	var q2Val = $('input[name=q2]:checked').val();
	var qClassVal = $('input[name=qClass]:checked').val();
	var scores = new Array();
	scores[0] = 0;
	scores[1] = 0;
	scores[2] = 0;
	scores[3] = 0;
	scores[4] = 0;
	scores[5] = 0;
	scores[6] = 0;
	scores[7] = 0;	
	var devices = 0;
	var intellegence = 1;
	var internetworks = 2;
	var media = 3;
	var modeling = 4;
	var people = 5;
	var systems = 6;
	var theory = 7;
	if (q1Val == 'q1-yes') {
		scores[devices] += 1;
		scores[internetworks] += 1;
		scores[systems] += 1;
	} else {
		scores[devices] -= 1;
		scores[internetworks] -= 1;
		scores[systems] -= 1;
	}
	if (q2Val == 'q2-yes') {
		scores[media] += 1;
		scores[people] += 1;
	} else {
		scores[media] -= 1;
		scores[people] -= 1;
	}
	if (qClassVal == 'qClass-1301') {

	} else if (qClassVal == 'qClass-1315') {
		scores[media] += 1;
		scores[people] += 1;
	} else if (qClassVal == 'qClass-1331') {

	} else if (qClassVal == 'qClass-1332') {

	} else if (qClassVal == 'qClass-2050') {
		scores[modeling] += 1;
		scores[theory] += 1;
	} else if (qClassVal == 'qClass-2110') {
		scores[devices] += 1;
		scores[media] += 1;
		scores[systems] += 1;
	} else if (qClassVal == 'qClass-2200') {
		scores[devices] += 1;
		scores[internetworks] += 1;
		scores[systems] += 1;
	} else if (qClassVal == 'qClass-2261') {
		scores[media] += 1;
		scores[people] += 1;
	} else if (qClassVal == 'qClass-2340') {

	}
	
	var maxScore = -1;
	var maxScoreVal = -999999;
	var secondMaxScore = -1;
	var secondMaxScoreVal = -999999;

	for (var i = 0; i < 8; i++) {
		if (scores[i] > maxScoreVal) {
			secondMaxScore = maxScore;
			secondMaxScoreVal = maxScoreVal;
			maxScore = i;
			maxScoreVal = scores[i];
		} else if ((maxScoreVal >= scores[i]) && (secondMaxScoreVal < scores[i])) {
			secondMaxScore = i;
			secondMaxScoreVal = scores[i];
		}
	}
	var maxScores = [maxScore, secondMaxScore];
	var resultsDiv = '<div id = "resultsDiv" name = "resultsDiv" > You may like:<ul>'
	for (var i = 0; i < 2; i++) {
		if (maxScores[i] == devices) {
			resultsDiv += '<li><a href="devices.html">Devices</a></li>';
		} else if (maxScores[i] == intellegence) {
			resultsDiv += '<li><a href="intellegence.html">Intellegence</a></li>';
		} else if (maxScores[i] == internetworks) {
			resultsDiv += '<li><a href="internetworks.html">Information Internetworks</a></li>';
		} else if (maxScores[i] == media) {
			resultsDiv += '<li><a href="media.html">Media</a></li>';
		} else if (maxScores[i] == modeling) {
			resultsDiv += '<li><a href="modeling.html">Modeling and Simulation</a></li>';
		} else if (maxScores[i] == people) {
			resultsDiv += '<li><a href="people.html">People</a></li>';
		} else if (maxScores[i] == systems) {
			resultsDiv += '<li><a href="systems.html">Systems</a></li>';
		} else if (maxScores[i] == theory) {
			resultsDiv += '<li><a href="theory.html">Theory</a></li>';
		}
	}
	resultsDiv += '</ul></div>';
	$('#resultsDiv').replaceWith(resultsDiv);
	$('#resultsDiv').trigger('create');
}
