# ДОКУМЕНТАЦИЯ НАХОДИТСЯ В СТАДИИ РАЗРАБОТКИ

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

## Структура ядра
Для начала, вам нужно понять как выглядит ядро изнутри.</br>
Список ниже представляет из себя подмодули и скрипты:
- [audio](#audio)
- [graphics](#graphics)
- [net](#net)
- [physics](#physics)
- [controllers.py]( #controllers)
- [files.py](       #files)
- [input.py](       #input)
- [math.py](        #math)
- [utils.py](       #utils)

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

<section id="audio"><p>
</p></section>
