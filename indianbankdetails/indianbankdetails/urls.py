from django.urls import path, include

urlpatterns = [
    path('', include('frontend.url')),
    path('', include('bank_details.urls')),
]
