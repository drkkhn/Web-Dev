from django.urls import path
from .views import CompanyList, CompanyDetail, CompanyVacancyList, VacancyList, VacancyDetail, VacancyTopTenList

urlpatterns = [
    path('companies/', CompanyList.as_view()),
    path('companies/<int:id>/', CompanyDetail.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacancyList.as_view()),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:id>/', VacancyDetail.as_view()),
    path('vacancies/top_ten/', VacancyTopTenList.as_view()),
]