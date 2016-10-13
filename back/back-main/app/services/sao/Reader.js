angular.module('npress').factory('Reader',function ReaderFactory($resource){
	return $resource('/api/readers/:id',{id:'@id'});
})
