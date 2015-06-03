"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.conf import settings

from rest_framework import routers

from posts.views import PostViewSet
from src.core.views import index

# Register API Routes
router = routers.DefaultRouter(trailing_slash=False)
router.register(r'posts', PostViewSet)

urlpatterns = [
    url(r'^static/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.STATIC_ROOT
    }),

    url(r'^api/', include(router.urls)),

    # NOTE: Must be last to catch all URLs
    url(r'^.*$', index, name='index'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
