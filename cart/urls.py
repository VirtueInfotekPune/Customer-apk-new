from django.urls import include, path, re_path
from rest_framework import routers
from . import views
from .views import PlaceOrderViewSet, CartViewSet, DeliveryCostViewSet, UserViewSet
from .views import order_list

router = routers.DefaultRouter()
router.register(r'Cart', views.CartViewSet)
router.register(r'delivery-cost', views.DeliveryCostViewSet)
router.register(r'user', views.UserViewSet)
# router.register(r'place_order', views.PlaceOrderViewSet.as_view({'post'}))


urlpatterns = [
    path('', include((router.urls, 'B2C_APP.cart'))),
    # path('placeOrder', ),
    # path('cart', CartViewSet),
    # path('delivery-cost', DeliveryCostViewSet),
    # path('user', UserViewSet),
    re_path(r'^api/orderlist/$', views.order_list),
]