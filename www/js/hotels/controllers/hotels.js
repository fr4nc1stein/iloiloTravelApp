'use strict';

angular
  .module('hotels.module')
  .controller('HotelsCtrl', ['$scope', '$stateParams', '$state', '$rootScope',
  function($scope, $stateParams, $state, $rootScope) {
  $scope.hotels = [
    { id: 1,
      title: 'Hotel Del Rio',
      img: 'del-rio.jpg',
      lat: 10.700133, 
      lng:122.552114,
      desc: {
              address: 'M.H del Pilar St, Molo, Iloilo City, 5000 Iloilo',
              website: 'hoteldelrio.com.ph',
              contact: '(033) 337 0736'
            }
    },
    { id: 2,
      title: 'Sarabia Manor Hotel' ,
      img: 'sarabia.jpg',
      lat: 10.699647,
      lng: 122.556336,
      desc: {
              address: 'General Luna Street, Iloilo City Proper, Iloilo City, 5000 Iloilo',
              website: 'sarabiamanorhotel.com',
              contact: '(033) 337 0736'
            }
    },
    { id: 3,
      title: 'Century 21', 
      img: 'century21.jpg',
      lat: 10.700421, 
      lng:122.566201,
      desc: {
              address: 'Iloilo City Proper, Iloilo City, Iloilo',
              website: 'ann2.net',
              contact: '(033) 335 8821'
            }
    },
    { id: 4,
      title: 'Days Hotel', 
      img: 'days.jpg',
      lat:10.701329, 
      lng:122.567958,
      desc: {
              address: '4F The Atrium Mall Gen Luna St, Iloilo City Proper, Iloilo City, 5000 Iloilo',
              website: 'wyndhamhotels.com',
              contact: '(033) 337 3297'
            }
    }
  ]
  $scope.mapStyle = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
  $scope.showMap = function(lat, lng, desc) {
      console.log(lat, lng, desc)
      $state.go('app.hotel_map', { lat: lat, lng: lng, desc: desc });
  }
}])

.controller('HotelsMapCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams, $state) {
      $scope.mapStyle = [{"featureType":"water","stylers":[{"color":"#19a0d8"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":6}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#e85113"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-40}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#efe9e4"},{"lightness":-20}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"lightness":20},{"color":"#efe9e4"}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#f0e4d3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}]
      $scope.current_lat = $stateParams.lat
      $scope.current_lng = $stateParams.lng
      $scope.hotel = $stateParams.desc
      console.log($stateParams)
    }
  ]);