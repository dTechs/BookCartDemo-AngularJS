var myApp = angular.module('myBookCart', ['ngRoute','ngAnimate']);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books", {
			templateUrl: "partials/books-list.html",
			controller: "BookListController"
		})
		.when("/cart",{
			templateUrl: "partials/cart-list.html",
			controller: "CartListController"
		})

	.otherwise({
		redirectTo: "/books"
	});
});

myApp.factory("bookService", function () {
	var books = [
		{
			imgUrl: "http://bit.ly/1ymtWqT",
			name: "Chicago",
			price: 199,
			rating: 4,
			binding: "Paperbook",
			publisher: "Randmom House India",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and pedictability of her days."
		},
		{
			imgUrl: "http://bit.ly/1KMJ3QT",
			name: "Gernomia Stilion Spacemice",
			price: 179,
			rating: 4,
			binding: "Paperbook",
			publisher: "Scholars",
			releaseDate: "01-07-2014",
			details: "Gernomia stillin meets other space in this."
		},
		{
			imgUrl: "http://bit.ly/1G0o79k",
			name: "Perfect Enjoyment",
			price: 189,
			rating: 5,
			binding: "Hardcover",
			publisher: "Weleris",
			releaseDate: "01-05-2014",
			details: "A pefect enjoyment book, IM perfect enjoyment."			
		}
	];

	return{
		getBooks:function () {
			return books;
		}
	}
});

myApp.factory("cartService", function(){
	var cart = [];

	return{
		getCart: function () {			
			return cart;
		},
		addToCart: function (book) {			
			cart.push(book);
		},
		buy: function(book){
			alert("Thanks for buying: ", book.name);
		}
	}
});

myApp.controller("HeaderController", function ($scope, $location) {
	$scope.appDetails = {
		title: "BookCart",
		tagline: "We have just millions of books for you"
	}

	$scope.nav ={};
	$scope.nav.isActive =function(path){
		if(path === $location.path()){
			return true;
		}

		return false;
	}
});


myApp.controller("CartListController", function ($scope, cartService) {
	$scope.cart = cartService.getCart();

	$scope.buy = function(book) {
		cartService.buy(book);
	}	
});


myApp.controller("BookListController", function ($scope, bookService, cartService){
	$scope.books = bookService.getBooks();

	$scope.addToCart = function(book){
		cartService.addToCart(book);
	}
});

