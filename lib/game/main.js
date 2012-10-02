ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'impact.debug.debug'
)
.defines(function(){


MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/helvetica14.png' ),
	intro_image: new ig.Image('media/intro.png'),
	
	init: function() {
		// Initialize your game here; bind keys etc.
	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps
		this.parent();
		
		// Add your own drawing code here
		var x = ig.system.width / 2;
		var y = ig.system.height - (ig.system.height * .10);
		
		this.intro_image.draw(0, 0);
		this.font.draw( 'Press any key to continue ..', x, y, ig.Font.ALIGN.CENTER );
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
