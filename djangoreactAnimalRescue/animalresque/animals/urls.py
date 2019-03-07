from rest_framework import routers
from .api import AnimalViewSet

router = routers.DefaultRouter()
router.register('api/animals', AnimalViewSet, 'animals')

urlpatterns = router.urls