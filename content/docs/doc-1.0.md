# ДОКУМЕНТАЦИЯ НАХОДИТСЯ В СТАДИИ РАЗРАБОТКИ

---

</br>

# Документация по API ядра фреймворка PyGDF версии v1.0-release

#### В этой документации описаны все доступные функции, и их назначение.
#### Есть небольшие примеры кода по использованию тех или иных функций.</br></br>

#### Описание версии:
Эта версия предназначена в основном только для работы с 2D графикой.</br>
Так как это первая версия, возможно что в ней всё ещё есть проблемы, которые я не заметил.</br>
Убедительная просьба сообщить [мне](https://t.me/mr_lukov) если найдёте проблемы или баги в работе с ядром.</br>
В начале сообщения укажите такой хештег: <code>#pygdf_bug_problem</code> и полное название версии.</br>
В противном случае, я не смогу найти или сохранить ваш чат с сообщением.</br>
А также, если заметите ошибки в этой документации, сообщите мне. Но с хештегом <code>#docs_mistake</code>

</br>

#### Ядро требует установки определённых библиотек и определённых версий
<pre><code class="language-text">pyopenal            == 0.7.11a1
pyogg               == 0.6.14a1

numpy               == 1.26.4
pyglm               == 2.7.1

pygame              == 2.5.2
pyopengl            == 3.1.7
pyopengl_accelerate == 3.1.7

pymunk              == 6.8.1

pypresence          == 4.3.0
imgui[pygame]       == 2.0.0
requests            == 2.32.3
cython              == 3.0.10
</code></pre>

Или вы можете запустить файл <code>pypi.bat</code> который есть в папке ядра для установки всех нужных библиотек.

## Дерево навигации по классам
Дерево навигации ниже, упростит перемещение по этой странице.</br>
Нажмите на интересующий вас класс или функцию, и страница пролистается до этого раздела.</br>
</br>

- [audio](#audio)
    - [Listener()](#audio-listener)
    - [Music()](#audio-music)
    - [Sound()](#audio-sound)
- [graphics](#graphics)
    - [OpenGLWindowError()](              #graphics-win-exception)
    - [OpenGLContextNotSupportedError()]( #graphics-opengl-context-exception)
    - [Animator2D()](                     #graphics-animator-2d)
    - [AtlasTexture()](                   #graphics-atlas)
    - [SpriteBatch2D()](                  #graphics-batch-sprite)
    - [AtlasTextureBatch2D()](            #graphics-batch-atlas)
    - [SSBO()](                           #graphics-buffers-ssbo)
    - [FrameBuffer()](                    #graphics-buffers-fb)
    - [Camera2D()](                       #graphics-camera-2d)
    - [Camera3D()](                       #graphics-camera-3d)
    - [Draw2D()](                         #graphics-draw-2d)
    - [Draw3D()](                         #graphics-draw-3d)
    - [FontGenerator()](                  #graphics-font-generator)
    - [Image()](                          #graphics-image)
    - [ImGUI()](                          #graphics-imgui)
    - [Light2D()](                        #graphics-light-2d)
    - [PackerTexture()](                  #graphics-packer-texture)
    - [SimpleParticleEffect2D()](         #graphics-simple-particle-effect-2d)
    - [Renderer2D()](                     #graphics-renderer-2d)
    - [Scene()](                          #graphics-scene)
    - [ShaderProgram()](                  #graphics-shader-program)
    - [SkyBox()](                         #graphics-skybox)
    - [Sprite2D()](                       #graphics-sprite-2d)
    - [Texture()](                        #graphics-texture)
    - [Window()](                         #graphics-window)
- [net](#net)
    - [NetServerTCP()](                   #net-server-tcp)
    - [NetClientTCP()](                   #net-client-tcp)
    - [NetSocket()](                      #net-socket)
    - [NetException()](                   #net-exception)
    - [NetClientKeyWrong()](              #net-exception-key-wrong)
    - [NetClientKeyTimeout()](            #net-exception-key-timeout)
    - [NetServerOverflow()](              #net-exception-server-overflow)
    - [NetAddressRelatedError()](         #net-exception-address-related-error)
    - [NetConnectingTimedOut()](          #net-exception-connecting-timedout)
    - [NetConnectingRefused()](           #net-exception-connecting-refused)
    - [NetConnectingAborted()](           #net-exception-connecting-aborted)
    - [NetConnectingResetError()](        #net-exception-connecting-reset-error)
    - [NetAddressInvalid()](              #net-exception-address-invalid)
    - [NetUnavailable()](                 #net-exception-unavailable)
    - [NetHostUnreachable()](             #net-exception-host-unavailable)
    - [NetOSError()](                     #net-exception-os-error)
    - [NetConnectionTimeout()](           #net-exception-connection-timeout)
    - [NetConnectionAborted()](           #net-exception-connection-aborted)
    - [NetConnectionResetError()](        #net-exception-connection-reset-error)
    - [NetBrokenPipeError()](             #net-exception-broken-pipe-error)
    - [NetConnectionLost()](              #net-exception-connection-lost)
    - [NetTimeout()](                     #net-exception-timeout)
- [physics](#physics)
    - [PhysicsError](                     #physics-error)
    - [Physics2D](                        #physics-2d)
        - [Body()](                       #physics-2d-body)
        - [Shape()](                      #physics-2d-shape)
        - [ShapeFilter()](                #physics-2d-shape-filter)
        - [Arbiter()](                    #physics-2d-arbiter)
        - [MeshGenerator()](              #physics-2d-mesh-generator)
        - [Objects](                      #physics-2d-objects)
            - [Empty()](                  #physics-2d-empty)
            - [Square()](                 #physics-2d-square)
            - [Circle()](                 #physics-2d-circle)
            - [Triangle()](               #physics-2d-triangle)
            - [Poly()](                   #physics-2d-poly)
            - [Segment()](                #physics-2d-segment)
            - [Mesh()](                   #physics-2d-mesh)
        - [Constraints](                  #physics-2d-constraints)
            - [PinJoint()](               #physics-2d-pinjoint)
            - [SlideJoint()](             #physics-2d-slidejoint)
            - [PivotJoint()](             #physics-2d-pivotjoint)
            - [GrooveJoint()](            #physics-2d-groovejoint)
            - [DampedSpring()](           #physics-2d-dampedjoint)
            - [DampedRotarySpring()](     #physics-2d-dampedrotatyjoint)
            - [RotaryLimitJoint()](       #physics-2d-rotatylimitjoint)
            - [RatchetJoint()](           #physics-2d-ratchetjoint)
            - [GearJoint()](              #physics-2d-gearjoint)
            - [SimpleMotor()](            #physics-2d-simplemotor)
        - [Space](                        #physics-2d-space)
- [controllers](#controllers)
    - [CameraController2D](               #controllers.cameracontroller-2d)
    - [CameraController3D](               #controllers.cameracontroller-3d)
- [files](#files)
    - [load_image()](                     #files-load-image)
    - [save_image()](                     #files-save-image)
    - [load_texture()](                   #files-load-texture)
    - [save_texture()](                   #files-save-texture)
    - [load_sprite()](                    #files-load-sprite)
    - [load_music()](                     #files-load-music)
    - [load_sound()](                     #files-load-sound)
    - [load_file()](                      #files-load-file)
    - [save_file()](                      #files-save-file)
    - [load_json()](                      #files-load-json)
    - [save_json()](                      #files-save-json)
    - [create_zip_file()](                #files-create-zip-file)
    - [extract_zip_file()](               #files-extract-zip-file)
    - [get_file_path_dialog()](           #files-get-file-path-dialog)
    - [read_url_file()](                  #files-read-url-file)
    - [read_url_json()](                  #files-read-url-json)
    - [download_url_file()](              #files-download-url-file)
- [input](#input)
    - [MouseScancodes](                   #input-mousescancodes)
    - [KeyboardScancodes](                #input-keyboardscancodes)
    - [InputHandler](                     #input-inputhandler)
- [utils](#utils)
    - [DiscordRPC](                       #utils-discord-rpc)
    - [Utils2D](                          #utils-utils-2d)
    - [Intersects](                       #utils-intersects)

<section id="audio">
</br>

---

</br>
<h1 style="font-size: 32px;">Audio</h1>
Подмодуль звука содержит различные скрипты и классы для работы со звуком.
</section>

<section id="audio-listener" style="font-size: 24px;"></br></br>
Класс <code style="font-size: 24px;">Listener()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Этот класс устанавливает слушателя в пространстве.</tab></br>
> <tab>Просто смещает все звуки относительно своих координат.</tab>
> </p></br></br>
> 
> </br>
> <p>Способ импорта:</p>
> <pre><code class="language-python">from gdf.audio import Listener
> </code></pre></br>
> 
> </br>
> <p>Параметры класса:</p>
> <pre><code class="language-python">position: vec3  = vec3(0, 0, 0)   # Позиция в пространстве.
> look_at:  vec3  = vec3(0, 0, -1)  # Направление взгляда.
> up:       vec3  = vec3(0, 1, 0)   # Вектор верха взгляда.
> volume:   float = 1.0             # Сила слуха.
> </code></pre></br>
> 
> </br>
> <p>Создать экземпляр класса:</p>
> <pre><code class="language-python">my_listener = gdf.audio.Listener(
>     position = vec3(0, 0, 0),   # Позиция слушателя.
>     look_at  = vec3(0, 0, -1),  # Можно не указывать.
>     up       = vec3(0, 1, 0),   # Можно не указывать.
>     volume   = 1.0              # Сила слуха.
> )
> </code></pre></br>
> 
> </br>
> <p>Функция <code>.update()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию в основной функции <code>update()</code> чтобы обновлять слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_position()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает трёхмерный вектор позиции <code>position: vec3</code></dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить позицию слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_position()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить позицию слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_orientation()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает трёхмерный вектор взгляда <code>look_at: vec3</code> и трёхмерный вектор верха <code>up: vec3</code></dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить ориентацию слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_orientation()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить ориентацию слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>float</code> значение для установки силы слуха.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить силу слуха слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить силу слуха слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.destroy()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы освободить ресурсы.</dtab>
> </tab></p></br>
> 
> </br>
> <h3>Уточнения</h3>
> <p>
> Что такое вектор взгляда и вектор верха?</br>
> </br>
> Представьте что ваша голова, это слушатель.</br>
> Вектор верха <code>up: vec3</code> будет направлением от центра вашей головы, до самой её макушки.</br>
> А вектор взгляда <code>look_at: vec3</code>, это направление от центра головы, до кончика носа.
> </p></br>
> </br>

<section id="audio-music" style="font-size: 24px;"></br></br>
Класс <code style="font-size: 24px;">Music()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Этот класс создаёт проигрывателя музыки. Его можно сравнить с mp3-плеером.</tab></br>
> <tab>Загружаете звуковой файл и можете делать простые махинации.</tab></br>
> <tab>Например: проиграть, поставить на паузу, продолжить проигрывание, остановить, установить громкость.</tab></br>
> <tab>Этот класс поддерживает 3 типа звуковых файлов: <code>.wav</code>, <code>.ogg</code> и <code>.mp3</code></tab>
> </p></br></br>
> 
> </br>
> <p>Способ импорта:</p>
> <pre><code class="language-python">from gdf.audio import Music
> </code></pre></br>
> 
> </br>
> <p>Параметры класса:</br>
> <i>При создании экземпляра класса, параметры не указываются.</i></p>
> 
> </br>
> <p>Создать экземпляр класса:</p>
> <pre><code class="language-python">my_music = gdf.audio.Music()
> </code></pre></br>
> 
> </br>
> <p>Функция <code>.load()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает строку в виде пути до звукового файла <code>file_path: str</code></dtab></br>
> <dtab>Вызывайте эту функцию чтобы загрузить звуковой файл в проигрыватель.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.play()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает необязательный параметр <code>is_loop: bool</code> чтобы музыка проигрывалась циклично.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы запустить проигрывание музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.stop()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы остановить проигрывание музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.pause()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы поставить на паузу проигрывание музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.resume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы продолжить проигрывание музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>volume: float</code> параметр для указания громкости.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить громкость музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить громкость музыки.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_active()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы узнать, активен ли проигрыватель (проигрывает ли музыку) или нет.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.destroy()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы освободить ресурсы.</dtab>
> </tab></p></br>

<section id="audio-sound" style="font-size: 24px;"></br></br>
Класс <code style="font-size: 24px;">Sound()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Этот класс в отличии от Music() класса, работает уже с OpenAL а не с PyGame.Mixer</tab></br>
> <tab>Это значит что вам доступно чуть больше возможностей. Например, вы можете устанавливать позицию звука,</tab></br>
> <tab>или менять её скорость воспроизведения. В отличии от Music() класса, этот класс предназначен для работы со звуками, а не музыкой.</tab></br>
> <tab>Этот класс может работать только с форматами файлов <code>.wav</code> и <code>.ogg</code>. Я рекомендую использовать <code>.ogg</code> формат.</tab>
> </p></br>
> <p>
> Примечание:</br>
> <tab>Если вы хотите чтобы был эффект пространственного звука, вам нужны аудио-файлы с расширением <code>.wav</code> или <code>.ogg</code></tab></br>
> <tab>Только с таким расширением. Другие расширения не будут поддаваться пространственному звуку.</tab></br>
> <tab>Даже если вы конвертируете их в этот формат файла. Поэтому важно иметь оригинальные аудиофайлы.</tab></br>
> <tab>Если ваш звук не поддаётся пространственному эффекту, значит этот файл был конвертирован. Считайте его испорченным.</tab>
> </p></br></br>
> 
> </br>
> <p>Способ импорта:</p>
> <pre><code class="language-python">from gdf.audio import Sound
> </code></pre></br>
> 
> </br>
> <p>Параметры класса:</br>
> <i>При создании экземпляра класса, параметры не указываются.</i></p>
> 
> </br>
> <p>Создать экземпляр класса:</p>
> <pre><code class="language-python">my_sound = gdf.audio.Sound()
> </code></pre></br>
> 
> </br>
> <p>Функция <code>.load()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает строку в виде пути до звукового файла <code>file_path: str</code></dtab></br>
> <dtab>Вызывайте эту функцию чтобы загрузить звуковой файл.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.play()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает необязательный параметр <code>is_loop: bool</code> чтобы звук проигрывался циклично.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы запустить проигрывание звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.stop()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы остановить проигрывание звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.pause()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы поставить на паузу проигрывание звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.resume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы продолжить проигрывание звука после паузы.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.rewind()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы перемотать звук к началу.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_pitch()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>pitch: float</code> параметр для установки скорости звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить скорость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_pitch()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить текущую скорость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>volume: float</code> параметр для установки громкости звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить текущую громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_min_distance()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>value: float</code> параметр для установки расстояния, на котором громкость на максимуме.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить расстояние на котором громкость звука на максимуме.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_min_distance()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить расстояние на котором громкость звука на максимуме.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_max_distance()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>value: float</code> параметр для установки максимального расстояния, на котором слышен звук.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить максимальное расстояние слышимости звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_max_distance()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить максимальное расстояние слышимости звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_rolloff_factor()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>value: float</code> параметр для установки силы затухания звука с расстоянием.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить силу затухания звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_rolloff_factor()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить силу затухания звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_min_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>value: float</code> параметр для установки минимального значения громкости звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить минимальную громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_min_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить минимальную громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_max_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>value: float</code> параметр для установки максимального значения громкости звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить максимальную громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_max_volume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить максимальную громкость звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_position()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>position: vec3</code> параметр для установки позиции звука в пространстве.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить позицию звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_position()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить позицию звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_velocity()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>velocity: vec3</code> параметр для установки скорости перемещения источника звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить скорость перемещения источника звука. Надо для создания эффекта Доплера.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_velocity()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить скорость перемещения источника звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_relative()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>is_relative: bool</code> параметр для установки относительного расположения звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить относительное расположение звука от слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_relative()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить относительно ли расположен звук от слушателя.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.set_looping()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>is_loop: bool</code> параметр для установки цикличного воспроизведения звука.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы установить цикличное воспроизведение звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_looping()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить цикличное воспроизведение звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.get_active()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы проверить, активно ли проигрывание звука.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.destroy()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы освободить ресурсы.</dtab>
> </tab></p></br>

<section id="graphics">
</br>

---

</br>
<h1 style="font-size: 32px;">Graphics</h1>
Подмодуль графики содержит различные скрипты и классы для работы с графикой.
</section>

<section id="graphics-win-exception" style="font-size: 24px;"></br></br>
Исключение <code style="font-size: 24px;">OpenGLWindowError()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Обычно возникает либо в инициализации окна, либо в ходе работы окна.</tab>
> </p></br>

<section id="graphics-opengl-context-exception" style="font-size: 24px;"></br></br>
Исключение <code style="font-size: 24px;">OpenGLContextNotSupportedError()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Возникает в инициализации контекста OpenGL</tab></br>
> <tab>Это исключение означает что инициализируемый контекст OpenGL не поддерживается устройством.</tab></br>
> <tab>Это значит что устанавливаемая версия OpenGL не поддерживается видео-драйвером.</tab>
> </p></br>

<section id="graphics-animator-2d" style="font-size: 24px;"></br></br>
Класс <code style="font-size: 24px;">Animator2D()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Этот класс создаёт аниматора для вашей 2D покадровой анимации.</tab>
> </p></br>
>
> </br>
> <p>Способ импорта:</p>
> <pre><code class="language-python">from gdf.graphics import Animator2D
> </code></pre></br>
> 
> </br>
> <p>Параметры класса:</p>
> <pre><code class="language-python">frames:   int    # Количество кадров анимации.
> duration: float  # Продолжительность одного кадра (в секундах).
> </code></pre></br>
> 
> </br>
> <p>Создать экземпляр класса:</p>
> <pre><code class="language-python">my_animation = gdf.graphics.Animator2D(
>     frames   = 4,    # 4 кадра анимации (количество не ограничено).
>     duration = 0.15  # Продолжительность одного кадра 150 миллисекунд.
> )
> </code></pre></br>
>
> </br>
> <p>Атрибут <code>.count</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>float</code> типом данных. Это счётчик кадров.</dtab></br>
> <dtab>Если превратить это число в <code>int</code> тип данных, то мы получим текущий кадр анимации.</dtab>
> </tab></p></br>
> 
> </br>
> <p>Функция <code>.update()</code></br>
> <tab>Описание:</br>
> <dtab>Принимает <code>delta_time: float</code> (время между кадрами).</dtab></br>
> <dtab>Вызывайте эту функцию в основной функции <code>update()</code> чтобы обновлять анимацию.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.start()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы запустить анимацию.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.stop()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы остановить анимацию.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.pause()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы поставить на паузу анимацию.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.resume()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы продолжить анимацию после паузы.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.reset()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы сбросить анимацию.</dtab>
> </tab></p></br>
>
> </br>
> <p>Функция <code>.get_frame()</code></br>
> <tab>Описание:</br>
> <dtab>Ничего не принимает. Возвращает <code>int</code> тип данных.</dtab></br>
> <dtab>Вызывайте эту функцию чтобы получить текущий кадр анимации.</dtab>
> </tab></p></br>

<section id="graphics-atlas" style="font-size: 24px;"></br></br>
Класс <code style="font-size: 24px;">AtlasTexture()</code>
</section></br>

> </br><p>
> Описание:</br>
> <tab>Этот класс просто представляет из себя текстуру, полученную из атласа текстур (большой текстуры спрайтов).</tab></br>
> <tab>Этот класс является продуктом получения текстуры из атласа. Создавать экземпляр не имеет смысла.</tab>
> </p></br>
> <p>
> Примечание:</br>
> <tab>Обычно эту текстуру можно получить из упаковщика текстур.</tab></br>
> <tab>Ниже показано какие параметры вы можете получить из такой текстуры.</tab>
> </p></br></br>
>
> </br>
> <p>Атрибут <code>.texture</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>Texture</code> классом. Это оригинальная текстура полного атласа.</dtab></br>
> <dtab>Она является оригинальным полным атласом, из которого была получена эта текстура.</dtab>
> </tab></p></br>
>
> </br>
> <p>Атрибут <code>.id</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>int</code> типом данных. Это ID оригинальной текстуры полного атласа.</dtab></br>
> <dtab>Можете использовать этот <code>id</code> чтобы обращаться к оригинальной текстуре атласа (при работе с OpenGL или шейдерами).</dtab>
> </tab></p></br>
>
> </br>
> <p>Атрибут <code>.width</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>int</code> типом данных. Это ширина нашей полученной текстуры из атласа текстур.</dtab></br>
> <dtab>Можете использовать это чтобы узнать ширину полученной текстуры из атласа текстур.</dtab>
> </tab></p></br>
>
> </br>
> <p>Атрибут <code>.height</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>int</code> типом данных. Это высота нашей полученной текстуры из атласа текстур.</dtab></br>
> <dtab>Можете использовать это чтобы узнать высоту полученной текстуры из атласа текстур.</dtab>
> </tab></p></br>
>
> </br>
> <p>Атрибут <code>.texcoords</code></br>
> <tab>Описание:</br>
> <dtab>Является <code>list</code> типом данных. Хранит координаты вашей текстуры на атласе текстур.</dtab></br>
> <dtab>Можете использовать это чтобы узнать координаты вершин вашей текстуры на оригинальной текстуре атласа.</dtab>
> </tab></p></br>

...

<section id="net">
</br>

---

</br>
<h1 style="font-size: 32px;">NET</h1>
Подмодуль сети содержит различные скрипты и классы для работы с сетевым соединением.
</section>

...

<section id="physics">
</br>

---

</br>
<h1 style="font-size: 32px;">Physics</h1>
Подмодуль физики содержит различные скрипты и классы для работы с физическим движком.
</section>

...

---
