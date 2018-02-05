# Android Video Player library

## EXOPlayer
* https://github.com/google/ExoPlayer
Developed by people at google and used in youtube and play-movie app and able to play streaming content

Sample code:-
* https://github.com/google/ExoPlayer/tree/release-v2/demos/main

## About the demo

Video stream: it loads video streams via a json file
* https://github.com/google/ExoPlayer/blob/release-v2/demos/main/src/main/assets/media.exolist.json

Events: has lots of handlers for events (but i dont see play and pause event)
* https://github.com/google/ExoPlayer/blob/release-v2/demos/main/src/main/java/com/google/android/exoplayer2/demo/EventLogger.java

Player Setup: here we can see events and methods that relate to player, play and pause are here too
* https://github.com/google/ExoPlayer/blob/release-v2/demos/main/src/main/java/com/google/android/exoplayer2/demo/PlayerActivity.java

Playlist setup: this loads data from json and place in a list
https://github.com/google/ExoPlayer/blob/release-v2/demos/main/src/main/java/com/google/android/exoplayer2/demo/SampleChooserActivity.java

No idea what this does for now..
https://github.com/google/ExoPlayer/blob/release-v2/demos/main/src/main/java/com/google/android/exoplayer2/demo/TrackSelectionHelper.java
