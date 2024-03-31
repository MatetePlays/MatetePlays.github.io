from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about/", views.about, name="about"),
    path("calculator/", views.calculator, name="calculator"),
    path("yt-downloader/", views.yt_downloader, name="yt-downloader"),
    path("tt-downloader/", views.tt_downloader, name="tt-downloader"),
]
