angular.module('indigo').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    WELCOME1: 'Welcome to Indigo, an online go playing portal.',
    WELCOME2: 'Playing on Indigo is completely free and does not require installing any software.',
    WELCOME3: 'Have fun!'
  });
  $translateProvider.translations('it', {
    WELCOME1: 'Benvenuti su Indigo, una piattaforma per giocare a go online.',
    WELCOME2: 'Indigo è gratis al 100%. Non occorre installare alcun software per giocare.',
    WELCOME3: 'Buon divertimento!'
  });
  $translateProvider.preferredLanguage('en');
});