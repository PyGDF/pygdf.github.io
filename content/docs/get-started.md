# Начало работы с PyGDF

### 1. Установите Python.

Скачать можно [тут](https://www.python.org/)

Пример кода:

```python
# Пример использования сцен в PyGDF.

# Импортируем:
if True:
    from gdf.graphics import Scene


# Класс сцены:
class MyScene(Scene):
    def __init__(self) -> None:
        pass

    # Вызывается при переключении на эту сцену:
    def start(self) -> None:
        pass

    # Вызывается каждый кадр (игровой цикл):
    def update(self, delta_time: float, event_list: list) -> None:
        pass

    # Вызывается каждый кадр (игровая отрисовка):
    def render(self, delta_time: float) -> None:
        pass

    # Вызывается при изменении размера окна:
    def resize(self, width: int, height: int) -> None:
        pass

    # Вызывается при разворачивании окна:
    def show(self) -> None:
        pass
```

### 2. Скачайте этот фреймворк.

Скачать можно тут.
