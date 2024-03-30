"use strict";

console.info("Ignore the iframe console warning above. It needs to have both of those attributes to work. The only reason the iframe is running in a sandbox is to block the scammy popups from being shown.");

document.getElementById("video_url").addEventListener("input", function() {
    var videoUrl = this.value.trim();
    // Check if the input URL is a valid YouTube link.
    if (isYouTubeURL(videoUrl)) {
        // Extract the video ID from the YouTube URL.
        var videoId = getYouTubeVideoId(videoUrl);
        // Construct the youtu.be link
        var youtuBeLink = "https://youtu.be/" + videoId;
        // Update the iframe src attribute with the youtu.be link.
        var iframe = document.getElementById("loader_to_iframe");
        iframe.src = "https://loader.to/api/card/?url=" + encodeURIComponent(youtuBeLink);
    } else {
        // If the input URL is not a valid YouTube link, reset the iframe src attribute.
        var iframe = document.getElementById("loader_to_iframe");
        iframe.src = "";
    }
});

/**
 * Checks if the given URL is a valid YouTube URL.
 *
 * @param {string} url - The URL to be checked.
 * @return {boolean} Returns true if the URL is a valid YouTube URL, false otherwise.
 */
function isYouTubeURL(url) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)\S+$/i.test(url);
}

/**
 * Retrieves the YouTube video ID from the given URL.
 *
 * @param {string} url - The URL of the YouTube video.
 * @return {string} The YouTube video ID extracted from the URL.
 */
function getYouTubeVideoId(url) {
    var match = url.match(/[?&]v=([^&]+)/);
    return match && match[1] ? match[1] : url.split('/').pop();
}

document.getElementById('refresh_button').addEventListener('click', function() {
    var videoUrlInput = document.getElementById("video_url");
    var videoUrl = videoUrlInput.value.trim();

    // Check if the input URL is a valid YouTube link.
    if (isYouTubeURL(videoUrl)) {
        // If it's a valid YouTube link, refresh the iframe content.
        var iframe = document.getElementById('loader_to_iframe');
        iframe.src = iframe.src; // Refresh the iframe content by setting its src attribute to the same URL.
    }
});
