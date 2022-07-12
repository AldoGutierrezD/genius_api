new Vue({
	el: '#main',

	mounted() {
		this.getArtistSongs('Cráneo');
	},

	data: {
		artistSongs: [],
		artist: '',
		showModal: false,
		lyricSong: []
	},

	methods: {

		getArtistSongs(artist) {
			let vue = this;

			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '4c3b171581mshae162e91cf29c62p1f1ef9jsn72250847a9ee',
					'X-RapidAPI-Host': 'genius.p.rapidapi.com'
				}
			};

			fetch('https://genius.p.rapidapi.com/search?q='+artist, options)
				.then(response => response.json())
				.then(response => this.artistSongs = response.response.hits)
				.catch(err => console.error(err));

			vue.artist = '';
			
		},

		getLyrics(id_song){
			let vue = this;
			vue.showModal = true;

			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': '4c3b171581mshae162e91cf29c62p1f1ef9jsn72250847a9ee',
					'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
				}
			};
			
			fetch('https://genius-song-lyrics1.p.rapidapi.com/songs/'+id_song+'/lyrics', options)
				.then(response => response.json())
				.then(response => this.lyricSong = response.response)
				.catch(err => console.error(err));

		}

	},
});