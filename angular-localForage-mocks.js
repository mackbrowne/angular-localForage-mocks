angular.module('LocalForageModule', []).factory('$localForage', function ($q) {

  return {

    throwsError: false,

    getItem: function (key) {
      var deferred = $q.defer();
      if (this.throwsError) {
        deferred.reject(this.throwsError);
      } else {
        deferred.resolve("Key");
      }
      return deferred.promise;
    },
    setItemSpy: sinon.spy(),
    setItem: function (key, item) {
      var deferred = $q.defer();
      if (this.throwsError) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      this.setItemSpy(key, item);
      return deferred.promise;
    },
    removeItemSpy: sinon.spy(),
    removeItem: function (key) {
      var deferred = $q.defer();
      if (this.throwsError) {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      this.removeItemSpy(key);
      return deferred.promise;
    }

  };
});