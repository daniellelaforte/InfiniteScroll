angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", "$interval", function($scope, $interval){
	$scope.calendar = [];
	$scope.date = new Date();
	$scope.nextdate = new Date();
	$scope.nextdate.setDate($scope.nextdate.getDate() - 1)


    $scope.addWeek = function () {

    	for (var i=0; i<7; i++){
    	$scope.nextdate.setDate($scope.nextdate.getDate() + 1)
    	$scope.calendar.push({datem: angular.copy($scope.nextdate), input: "test", appointment:[]})
        }
  
    }

$scope.addWeek()

   $scope.Show = function(calIndex) {
		    	
		    	$scope.calendar[calIndex].appointment.push({appointmentname: ""}); 

    }

  
$scope.checkForPos = function () {
    var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.clientHeight);
    console.log(scrollpercent);

    if (scrollpercent > .6) {
    	$scope.addWeek()
    	console.log(scrollpercent);

    }
}

$interval($scope.checkForPos, 100);


}]
);

