from rest_framework import serializers

from .models import Post


class PostSerializer(serializers.ModelSerializer):
    """Post Serializer

    Serialize the Post Object(s) into JSON data for consumption.
    """

    class Meta:
        model = Post
        read_only_fields = ('hash', 'slug', 'deleted', 'deleted_at',
                            'published_at', 'created_at', 'updated_at',)
