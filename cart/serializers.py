from .models import User, Cart, DeliveryCost, UserOrder
from rest_framework import serializers
from client_app.models import Product


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'created_at', 'updated_at']


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ['id', 'user', 'item', 'quantity', 'created_at', 'updated_at']


class DeliveryCostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryCost
        fields = ['id', 'status', 'cost_per_delivery', 'cost_per_product', 'fixed_cost', 'created_at', 'updated_at']

class UserOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOrder
        fields = ('__all__')
