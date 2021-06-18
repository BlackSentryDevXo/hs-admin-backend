/**
 * Created by black on 16/06/2021.
 */
 (function () {
    'use strict';
    angular.module("quizApp").controller('promoCtrl',
     ['$scope', 'auth', '$state',
        function ($scope, auth, $state) {
        
        //CHECK LOGIN STATUS
        if(!auth.isLoggedIn()){
            $state.go('login');
        }else{
            $scope.logged_user = auth.currentUser();
        }

        $scope.nameV = null;
        $scope.secV = null;
        $scope.imgUrl = null;
        $scope.reader = null;
        $scope.files = [];

        function Ready(){
            $scope.nameV = document.getElementById('titlebox').value;
            $scope.secV = document.getElementById('secbox').value;
        }

        //SELECT IMAGE
        document.getElementById('selectImg').onclick = function(e){
            var input = document.createElement('input');
            input.type = 'file';
            var result;
            
            input.onchange = e => {
            $scope.files = e.target.files;
            $scope.reader = new FileReader();
            $scope.reader.onload = function(){
                document.getElementById("myImg").src = result;
                $scope.reader.result = result;
            };
            $scope.reader.readAsDataURL($scope.files[0]);
            };
            input.click();
        };
  
        //UPLOAD IMAGE 
        //Uploading Image to Storage
        document.getElementById('uploadImg').onclick = function(){
            var uploadTask = firebase.storage().ref('PromoImage/'+"promoImage"+".png").put($scope.files[0]);
        
            uploadTask.on('state_changed', function(snapshot){
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('UpProgress').innerHTML = 'Upload'+progress+'%';
        }, 
      
      //Checking for errors
      function(error){
        alert('error in saving the image');
      }, 
  
      //submitting image to database
      function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            $scope.imgUrl = url;
  
          firebase.database().ref('data/'+"promoImage").set({
            Name: "promoImage", 
            Link: $scope.imgUrl
          });
          alert('image added successfully');
        });
      }
      );
  
    };
  
    //INSERT
    document.getElementById('insert').onclick = function(){
      Ready();
      firebase.database().ref('data/'+"promo").set({
        NameOfTitle: $scope.nameV,
        Url: $scope.secV,
      });
      window.location.reload();
    };
  
      //DELETE 
      document.getElementById('delete').onclick = function(){
      Ready();
      firebase.database().ref('data/'+"promo").remove();
      firebase.database().ref('data/'+'promoImage').remove();
      window.location.reload();
    };
       
    }]);
})();