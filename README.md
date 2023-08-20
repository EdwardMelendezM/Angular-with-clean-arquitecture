# Clean Arquitecture

## Domain - Capa de dominio
La carpeta "domain" en Clean Architecture se utiliza para albergar la lógica del negocio y las reglas del dominio de tu aplicación. Es el núcleo de tu aplicación y debería ser independiente de las tecnologías externas, la interfaz de usuario y el almacenamiento de datos. Aquí se definen los conceptos y las reglas de negocio que son esenciales para tu aplicación.


##  Data - Capa de datos
En Clean Architecture, la capa de datos es responsable de interactuar con el almacenamiento de datos, como bases de datos, servicios web, archivos, etc. Esta capa maneja la persistencia y recuperación de datos y es independiente de las capas de presentación y dominio. Mantener esta capa separada ayuda a garantizar que los detalles técnicos relacionados con el almacenamiento de datos no afecten la lógica del negocio y la interfaz de usuario.

## Presentation - Cada de Gui
La capa de presentación es la interfaz a través de la cual los usuarios interactúan con tu aplicación. Incluye componentes como la interfaz gráfica de usuario (GUI), la lógica de presentación, las vistas y los controladores en el caso de aplicaciones web o móviles. Esta capa es consciente de la interfaz de usuario y se preocupa por cómo los datos son mostrados, cómo se manejan las interacciones del usuario y cómo se reflejan las acciones del usuario en la aplicación.


## Flujo de interaccion de capas
- Capa de Presentación:

El usuario abre la aplicación y ve la pantalla principal de la lista de tareas.
La capa de presentación muestra la lista de tareas utilizando componentes visuales como elementos de lista o tarjetas.

- Interacción con la Capa de Dominio:

El usuario marca una tarea como completada tocando un botón en la interfaz.
La capa de presentación llama a un caso de uso específico, por ejemplo, CompleteTaskUseCase.

- Capa de Dominio:

El caso de uso CompleteTaskUseCase recibe la solicitud y los detalles de la tarea a completar desde la capa de presentación.
El caso de uso verifica la lógica de negocio para marcar la tarea como completada.
El caso de uso se comunica con el repositorio apropiado (por ejemplo, TaskRepository) para actualizar el estado de la tarea en la capa de datos.

- Capa de Datos:

El repositorio TaskRepository en la capa de datos recibe la solicitud de marcar la tarea como completada.
El repositorio actualiza el estado de la tarea en la base de datos o en el sistema de almacenamiento correspondiente.

- Actualización de la Interfaz de Usuario:

La capa de datos notifica al caso de uso CompleteTaskUseCase que la tarea se ha marcado como completada.
El caso de uso notifica a la capa de presentación que la tarea se ha completado con éxito.

- Capa de Presentación:

La capa de presentación actualiza la interfaz de usuario para reflejar el estado actualizado de la tarea.

En resumen, aquí tienes una secuencia de cómo interactúan todas las capas en Clean Architecture:

1. El usuario interactúa con la interfaz de usuario en la capa de presentación.
2. La capa de presentación llama a casos de uso específicos en la capa de dominio.
3. La capa de dominio procesa la lógica de negocio y se comunica con los repositorios.
4. La capa de datos gestiona el acceso y la actualización de los datos en función de la solicitud de la capa de dominio.
5. Los cambios en los datos se comunican de nuevo a la capa de presentación para actualizar la interfaz de usuario.

Esta estructura asegura la separación de preocupaciones y permite que cada capa se centre en su responsabilidad principal sin depender directamente de las otras capas.