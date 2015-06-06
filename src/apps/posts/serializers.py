from rest_framework import serializers
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

from .models import Post


class PostSerializer(TaggitSerializer, serializers.ModelSerializer):
    """Post Serializer

    Serialize the Post Object(s) into JSON data for consumption.
    """
    tags = TagListSerializerField()

    class Meta:
        model = Post
        fields = ('hash', 'title', 'slug', 'content', 'user', 'status',
                  'published_at', 'created_at', 'updated_at', 'tags',)
        read_only_fields = ('hash', 'slug', 'published_at', 'created_at',
                            'updated_at',)
