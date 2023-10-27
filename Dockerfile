# Usa una imagen oficial de Nginx como base
FROM nginx:latest

# Copia el archivo de configuración personalizado a la ubicación correcta en el contenedor
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia la carpeta "dist" de tu proyecto a la carpeta raíz de Nginx en el contenedor
COPY /dist/test-tesis /usr/share/nginx/html

# Expon el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
