from rest_framework import routers
from .api import BranchViewSet,BranchAutoCompleteViewSet,TempBankViewset

router = routers.DefaultRouter()
router.register('api/branches/autocomplete', BranchAutoCompleteViewSet, 'autocomplete')
router.register('api/branches', BranchViewSet, 'branches')
router.register('api/banks',TempBankViewset, 'banks' )
urlpatterns = router.urls