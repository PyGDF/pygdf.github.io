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
В начале сообщения укажите такой хештег: \`\`\`#pygdf_bug_problem\`\`\` и полное название версии.</br>
В противном случае, я не смогу найти или сохранить ваш чат с сообщением.</br>
А также, если заметите ошибки в этой документации, сообщите мне. Но с хештегом \`\`\`#docs_mistake\`\`\`

## Дерево навигации по классам
Дерево навигации ниже, упростит перемещение по этой странице.</br>
Нажмите на интересующий вас класс или функцию, и страница пролистается до этого раздела.</br>
</br>

- [audio](#audio)
    - [Listener()](#audio-listener)
    - [Music()](#audio-music)
    - [Sound()](#audio-sound)
- [graphics](#graphics)
    - [OpenGLWindowError()](              #graphics-exception)
    - [OpenGLContextNotSupportedError()]( #graphics-exception)
    - [Animator2D()](                     #graphics-animator)
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
> <p>Создать слушателя:</p>
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
> <p>Создать проигрывателя:</p>
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
> <p>Создать звуковой объект:</p>
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


---
