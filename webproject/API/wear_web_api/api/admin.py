from django.contrib import admin
from .models import Size, Category, Hat, Top, Shoe, Pant, Gender

@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ['size']

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Gender)
class GenderAdmin(admin.ModelAdmin):
    list_display = ['name']

@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'price', 'gender', 'category']

@admin.register(Top)
class TopAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'price', 'gender', 'category']

@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'price', 'gender', 'category']

@admin.register(Pant)
class PantAdmin(admin.ModelAdmin):
    list_display = ['name', 'brand', 'price', 'gender', 'category']

