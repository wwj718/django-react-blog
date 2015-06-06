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
