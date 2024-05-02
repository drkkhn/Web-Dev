from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import AppUser

class AppUserAdmin(UserAdmin):
    model = AppUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('gender',)}),  # Add the 'gender' field to the UserAdmin form
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {
            'fields': ('gender',),
        }),
    )
    # Add any other customizations you want for the admin panel

# Register the AppUser model and the custom AppUserAdmin
admin.site.register(AppUser, AppUserAdmin)
