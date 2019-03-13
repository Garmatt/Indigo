angular.module('indigo').service('AuthenticationService', function($http) {
  
  var thisService = this;
  const tokenName = 'indigo-token';
  
  var saveToken = function(token) {
    localStorage.setItem(tokenName, token);
    thisService.token = token;
  };

  var getToken = function() {
    if (!('token' in thisService)) {
      thisService.token = localStorage.getItem(tokenName);
    }
    return thisService.token;
  };

  thisService.logout = function() {
    delete thisService.token;
    window.localStorage.removeItem(tokenName);
    //this.router.navigateByUrl('/');
	//TO DO: REDIRECT TO LOGIN
  };
  
  thisService.getUserDetails = function() {
	var token = getToken();
	let payload;
	if (token) {
		payload = token.split('.')[1];
		payload = window.atob(payload);
		return JSON.parse(payload);
	} else {
		return null;
	}
  };
  
  thisService.isLoggedIn = function() {
	var user = thisService.getUserDetails();
	if (user) {
		return user.exp > Date.now() / 1000;
	} else {
		return false;
	}
  };
  
  /* var request = function(verb, type, user) {
  let base;

  if (verb === 'post') {
    base = this.http.post(`/api/${type}`, user);
  } else {
    base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${getToken()}` }});
  }

  const request = base.pipe(
    map((data: TokenResponse) => {
      if (data.token) {
        saveToken(data.token);
      }
      return data;
    })
  );

  return request;
} */
  
});