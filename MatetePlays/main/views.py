import requests
from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    """
    Retrieves a list of repositories from the GitHub API for the specified GitHub username.
    
    Args:
        request (HttpRequest): The HTTP request object.
        
    Returns:
        HttpResponse: The HTTP response object containing the rendered template with the list of repositories or an error message.
    """
    # GitHub username.
    github_username = "MatetePlays"
    
    # GitHub API endpoint to retrieve user's repositories.
    url = f"https://api.github.com/users/{github_username}/repos"
    
    # Make GET request to GitHub API.
    response = requests.get(url)
    
    # Check if request was successful.
    if response.status_code == 200:
        # Parse JSON response.
        repositories = response.json()
        
        # Filter repositories to include only those that are not forks.
        repositories = [repo for repo in repositories if not repo.get('fork')]
        
        # Pass repositories data to the template.
        return render(request, 'main/index/index.html', {'repositories': repositories})
    else:
        # Handle error response.
        error_message = f"Failed to retrieve repositories. Status code: {response.status_code}"
        return render(request, 'main/index/index.html', {'error_message': error_message})

def about(request):
    return render(request, "main/about/about.html", {})

def calculator(request):
    return render(request, "main/calculator/calculator.html", {})

def yt_downloader(request):
    return render(request, "main/yt-downloader/yt-downloader.html", {})
