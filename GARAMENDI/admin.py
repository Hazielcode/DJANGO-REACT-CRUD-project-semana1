from django.contrib import admin
from .models import Item

@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    # columnas visibles en la lista
    list_display = ('id', 'name', 'description')

    # búsqueda rápida por nombre y descripción
    search_fields = ('name', 'description')

    # filtros en la barra lateral (por si agregas más campos en el futuro)
    list_filter = ('name',)

    # orden por defecto
    ordering = ('id',)
