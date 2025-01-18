FROM nginx

COPY alseis.html /usr/share/nginx/html
COPY index.html /usr/share/nginx/html

COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
COPY css /usr/share/nginx/html/css
COPY bootstrap /usr/share/nginx/html/bootstrap