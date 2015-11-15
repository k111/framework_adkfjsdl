var tab = new Tab();

QUnit.test( "option test", function( assert ) {
  assert.ok( option.activeClass == "is-active", "Passed!" );
  assert.ok( option.header == '[data-js="tab-header"] > li', "Passed!" );
  assert.ok( option.contents == '[data-js="tab-body"] > div', "Passed!" );

});
