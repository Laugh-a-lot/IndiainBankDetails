from django.db.models import Q
from .models import Banks, Branches
from rest_framework import viewsets, permissions
from .serializers import BranchSerializer, BankSerializer


class BranchViewSet(viewsets.ModelViewSet):
    queryset = Branches.objects.all()

    serializer_class = BranchSerializer
    
    def get_queryset(self):
        q = self.request.query_params.get('q', "").upper()
        limit = int(self.request.query_params.get('limit', 10000))
        offset = int(self.request.query_params.get('offset', 0))
        return Branches.objects.filter(
            Q(branch__contains=q.upper()) |
            Q(address__contains = q.upper()) |
            Q(city__contains = q.upper()) |
            Q(district__contains = q.upper()) |
            Q(state__contains = q.upper())|
            Q(ifsc__startswith = q.upper())
        ).order_by('ifsc')[offset: limit+offset]


class BranchAutoCompleteViewSet(viewsets.ModelViewSet):
    serializer_class = BranchSerializer
    
    def get_queryset(self):
        q = self.request.query_params.get('q', '')
        limit = int(self.request.query_params.get('limit', 10))
        offset = int(self.request.query_params.get('offset', 0))
        return Branches.objects.filter(branch__startswith=q.upper()).order_by('ifsc')[offset: limit+offset]



class TempBankViewset(viewsets.ModelViewSet):
    serializer_class= BankSerializer
    queryset= Banks.objects.all()