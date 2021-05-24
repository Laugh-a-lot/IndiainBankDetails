from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Banks, Branches


class BranchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Branches
        fields = '__all__'

class BankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banks
        fields='__all__'