# Clean Arquitecture

## Domain - Capa de dominio
La carpeta "domain" en Clean Architecture se utiliza para albergar la lógica del negocio y las reglas del dominio de tu aplicación. Es el núcleo de tu aplicación y debería ser independiente de las tecnologías externas, la interfaz de usuario y el almacenamiento de datos. Aquí se definen los conceptos y las reglas de negocio que son esenciales para tu aplicación.


##  Data - Capa de datos
En Clean Architecture, la capa de datos es responsable de interactuar con el almacenamiento de datos, como bases de datos, servicios web, archivos, etc. Esta capa maneja la persistencia y recuperación de datos y es independiente de las capas de presentación y dominio. Mantener esta capa separada ayuda a garantizar que los detalles técnicos relacionados con el almacenamiento de datos no afecten la lógica del negocio y la interfaz de usuario.