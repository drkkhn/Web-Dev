from django.contrib import admin
from django.urls import path

from .views_category import category_list, category_details
from .views_size import size_list, size_details
from .views_hat import HatCRUD, HatsCRUD
from .views_top import TopCRUD, TopsCRUD
from .views_pant import PantCRUD, PantsCRUD
from .views_shoe import ShoeCRUD, ShoesCRUD

urlpatterns = [
    path('categories/', category_list),
    path('categories/<int:id>', category_details),
    
    path('sizes/', size_list),
    path('sizes/<int:id>', size_details),

    path('hats/', HatsCRUD.as_view()),
    path('hats/<int:id>/', HatCRUD.as_view()),

    path('tops/', TopsCRUD.as_view()),
    path('tops/<int:id>/', TopCRUD.as_view()), 

    path('pants/', PantsCRUD.as_view()),
    path('pants/<int:id>/', PantCRUD.as_view()),    
    
    path('shoes/', ShoesCRUD.as_view()),
    path('shoes/<int:id>/', ShoeCRUD.as_view()),    
]