var myApp = angular.module('myApp',[]);//khai báo angular
//trong angular này có 2 controller là jsonCtrl và test Ctrl.

myApp.controller('jsonCtrl',function($scope, $http){
    /*lấy dữ liệu từ file employees.json bằng $http.get() và 
    gán nó vào biến $scope.employees */
    $http.get('employees.json').success(function(data){
        $scope.employees = data;
    });
     
    /* Hàm addEmp() khi được gọi sẽ thêm mới vào lần lượt giá trị Name,City,State từ ng-model(empName,empCity,empState)
    được nhập từ người dùng từ view vào danh sách file employees.json*/
    $scope.addEmp = function(){
        $scope.employees.push({name: $scope.empName,city: $scope.empCity, state: $scope.empState});
    }
    
    /* Đơn giản cập nhật tổng số mảng hiện tại có trong $scope.employees
      tức là trong file employees.json */
    $scope.getTotalEmployees = function(){
        return $scope.employees.length;
    }

    /* đảo ngược giá trị chuỗi empName ,split() dùng để chuyển đổi giá trị 
    chuỗi empName thành mảng,mỗi kí tự riêng biệt của empName sẽ được chia thành
    một phần tử của mảng, reverse() dùng để đảo ngược thứ tự phần tử
    trong mảng,tức là kí tự ban đầu sẽ trở thành kí tự đầu tiên và ngược lại. */
    $scope.reversedMessage = function(){
        return $scope.empName.split("").reverse().join("");
        /* join() dùng để kết hợi lại các phần tử trong mảng đã được
        chuyển đổi bằng split() trước đó thành MỘT CHUỖI DUY NHẤT.
        Không có kí tự nào ngăn cách giữa các phần tử. */
        //Kết quả của hàm reversedMessage là một chuỗi mới, là kết quả của việc đảo ngược thứ tự các ký tự trong chuỗi ban đầu.
    }
});


/* Controller testCtrl: Controller này đơn giản chỉ khai báo một 
 mảng names và 2 hàm addName và reversedMessage. Hàm addName 
 được sử dụng để thêm tên mới vào mảng names, và hàm reversedMessage 
 được sử dụng để đảo ngược chuỗi myName. */
function testCtrl($scope){
    $scope.names = [
        {name: "ThiDK"},
        {name: "CodeLearn"},
        {name:"Dang Kim Thi"}
    ];

    $scope.addName = function(){
        $scope.names.push({name: $scope.myName});
    }

    $scope.reversedMessage = function(){
        return $scope.myName.split("").reverse().join("");
    }
}
