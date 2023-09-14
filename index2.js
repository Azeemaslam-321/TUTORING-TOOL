       // Event listener for the search button
       document.getElementById('video-search-button').addEventListener('click', function() {
        // Get the topic entered by the user
        var topic = document.getElementById('video-search-input').value;

        // Call the function to fetch YouTube videos based on the topic
        searchYouTubeVideos(topic);
    });

    // Function to search for YouTube videos
    function searchYouTubeVideos(topic) {
        gapi.load('client', function() {
            gapi.client.init({
                apiKey: 'AIzaSyCeAejZ6pt_kt5BA-odIC0P2UxIe_Xa_s0', // Replace with your YouTube API key
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
            }).then(function() {
                // Call the YouTube Data API to search for videos
                return gapi.client.youtube.search.list({
                    q: topic,
                    type: 'video',
                    part: 'snippet',
                    maxResults: 5, // Number of videos to display
                });
            }).then(function(response) {
                var results = response.result.items;
                displaySearchResults(results);
            }).catch(function(error) {
                console.error('Error fetching YouTube videos:', error);
            });
        });
    }

    // Function to display search results
    function displaySearchResults(results) {
        var resultsContainer = document.getElementById('video-search-results');
        resultsContainer.innerHTML = '';

        results.forEach(function(item) {
            var videoId = item.id.videoId;
            var title = item.snippet.title;

            // Create an iframe element to embed the video
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/' + videoId;
            iframe.width = '560';
            iframe.height = '315';

            // Create a div to display the video title
            var videoTitle = document.createElement('div');
            videoTitle.innerHTML = '<h4>' + title + '</h4>';

            // Append the iframe and video title to the results container
            resultsContainer.appendChild(iframe);
            resultsContainer.appendChild(videoTitle);
        });
    }
