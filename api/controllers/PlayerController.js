/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers

 */

module.exports = {
	 getPlayers: function(req, res) {
       var players = Player.find({
       	where: {
       		user: req.user.id
       	}
       }).exec(function (err, players) {
          if(err){return res.serverError(err);} 
       		sails.log(players);
       		return res.view('playerlist',{players:players});
       });

       
    },

    createPlayer: function (req, res) {
    		req.file('avatar').upload({
			  dirname: require('path').resolve(sails.config.appPath, 'assets/images/playerimgs/')
			},function (err, uploadedFiles) {
				let filename = uploadedFiles[0].fd.substring(uploadedFiles[0].fd.lastIndexOf('/') + 1);
				sails.log('**** ', uploadedFiles);
			  	if (err) {return res.negotiate(err);}
				Player.create({
					name: req.param('playername'),
					backstory: req.param('backstory'),
					maxpe: req.param('pe'),
					maxme: req.param('me'),
					maxse: req.param('se'),
					image: '/images/playerimgs/'+filename,
					user: req.user
					}).exec(function (err, newplayer) {
						if(err){return res.serverError(err);}

						sails.log('New player create with id',newplayer.id);
						sails.log('Generating stats');
						Stats.create({
							player: newplayer,
							pe: newplayer.maxpe,
							se: newplayer.maxse,
							me: newplayer.maxme,
							pm: 0,
							mm: 0,
							sm: 0,
							le: 100
						}).exec(function (err, currentstats) {
							if(err){return res.serverError(err);}
						});

						sails.log('Generating Inventory');
						Inventory.create({
							player: newplayer
						}).exec(function (err, currentstats) {
							if(err){return res.serverError(err);}
						});
						return res.redirect('/readyplayer1');
					});
			});
    	
    	

    },

    createForm: function (req, res) {
    	res.view('createplayer');
    },

};

