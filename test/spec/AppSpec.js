describe('App Model', function() {
  var app;

  beforeEach(function() {
    app = new AppModel();
  });

  it('creates app', function() {
    expect(app).to.be.an('object');
  });
});

describe('App View', function() {

  var app, appView;

  beforeEach(function(){
    app = new AppModel();
    appView = new AppView({model: app});
  });

  // it('should appView is created', function(){
  //   expect(appView).to.be.an('object');
  // });

  // it('should generate a searchView when is created', function() {
  //   expect(appView.searchView).to.be.an.instanceof(SearchView);
  // });

  // it('should generate a listSearchView when is created', function() {
  //   expect(appView.listSearchView).to.be.an.instanceof(ListSearchView);
  // });

  // it('should generate a playerView when is created', function() {
  //   expect(appView.playerView).to.be.an.instanceof(PlayerView);
  // });

  // it('should generate a listSong when is created', function() {
  //   expect(appView.listSong).to.be.an.instanceof(ListSongView);
  // });

});