# Finance App

Proyecto de prueba que muestra el funcionamiento de un CRUD con pantalla de
Lista de productos, agregar productos, editar producto y eliminar productos.

![](https://github.com/gabarod/FinanceApp/FinanceApp-Demo1.gif)

## Requisitos

- Node.js v14 o superior
- npm v6 o superior (o yarn)
- React Native CLI
- Xcode o Android Studio, dependiendo de si desarrollas para iOS o Android

## Instalación

Instrucciones paso a paso sobre cómo configurar el entorno de desarrollo y ejecutar el proyecto localmente:

```bash
# Clona este repositorio
git clone https://github.com/gabarod/FinanceApp

# Navega al directorio del proyecto
cd FinanceApp

# Instala las dependencias
npm install

# Si estás desarrollando para iOS, también ejecuta:
cd ios && pod install && cd ..

# Para iniciar el servidor Metro
npm start

# Para ejecutar la aplicación en un dispositivo/emulador iOS
npm run ios

# Para ejecutar la aplicación en un dispositivo/emulador Android
npm run android
