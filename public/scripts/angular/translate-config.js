angular.module('indigo').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    WELCOME1: 'Welcome to Indigo, an online go playing portal.',
    WELCOME2: 'Playing on Indigo is completely free and does not require installing any software.',
    WELCOME3: 'Have fun!',
	LOGIN_USER: 'Username or email',
	LOGIN_PASSWORD: 'Password',
	ERR_MISSING_CREDENTIALS: 'Please fill the form.',
	ERR_USER_NOT_FOUND: 'User not found.',
	ERR_PASSWORD: 'Wrong password.'
  });
  $translateProvider.translations('it', {
    WELCOME1: 'Benvenuti su Indigo, una piattaforma per giocare a go online.',
    WELCOME2: 'Indigo è gratis al 100%. Non occorre installare alcun software per giocare.',
    WELCOME3: 'Buon divertimento!',
	LOGIN_USER: 'Nome utente o indirizzo email',
	LOGIN_PASSWORD: 'Password',
	ERR_MISSING_CREDENTIALS: 'Inserire utente e password.',
	ERR_USER_NOT_FOUND: 'Utente non trovato.',
	ERR_PASSWORD: 'Password errata.'
  });
  $translateProvider.preferredLanguage('en');
});