var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Slow Down Video");
	video.playbackRate *= .95;
	console.log("New speed is " +video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Speed Up Video");
	video.playbackRate /= .95;
	console.log("New speed is " +video.playbackRate)
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume")
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current location is " +video.currentTime)

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}

	else {
		video.currentTime = 0
		console.log("Starting at beginning")
	}

});


document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted){
		this.innerHTML = "Mute"
		video.muted = false
		console.log("Muted")
	}

	else{
		this.innerHTML = "Unmute"
		video.muted = true
		console.log("Unmuted")
	}

});



document.querySelector("#vintage").addEventListener
("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener
("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool")
});
