function AppViewModel() {
  this.name = ko.observable("World");
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
