from rest_framework import viewsets, permissions

from .models import Post
from .serializers import PostSerializer
from .permissions import IsPostAuthor


class PostViewSet(viewsets.ModelViewSet):
    """A simple ViewSet for viewing and editing posts"""
    queryset = Post.objects.get_published_posts()
    serializer_class = PostSerializer

    def get_permissions(self):
        """Set permissions based on request types"""
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsPostAuthor(),)
