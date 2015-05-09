#SpotifyAPI

#Steps

  ##Models
    appModel: Contain all application
    songModel: Contain data from song
      - initialize (call ajax to Spotify API for retrieve the preview_url) || https://api.spotify.com/v1/tracks/:id
      - AddToList
      - RemoveToList
      - Play

  ##Collections
    searchList: Contain all songs retrieve from Spotify API -> model songModel
    playList: Contain all songs in queue -> model songModel

  ##Views
    appListView: Contain playerView, listView
    appSearchView: Contain searchInputView, searchView
    searchInputView: input || searchList Collection
      - events
        - keydown (when push enter button call https://api.spotify.com/v1/search with data {q: stringSearch, type: "track"}
    searchEntryView: each song from search || songModel
      - events:
        - addToList (add song to playListCollection)
    searchView: list songs from search || searchListCollection
    playerView: Contain the video tag with the current song || songModel
      - events:
        - ended (change the playerView song to the dequeue playList)
    listEntryView: each song from playlist ||songModel
      - events:
        - play (change PlayerView with the new song and remove the curren song is playing)
        - remove (remove song from play list)
    listView: Contain the songs in the current list || playListCollection

