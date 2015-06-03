from rest_framework import viewsets

from .models import Post
from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    """A simple ViewSet for viewing and editing posts"""
    queryset = Post.objects.get_published_posts()
    serializer_class = PostSerializer
