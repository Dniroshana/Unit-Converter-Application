FROM nginx:alpine

# Default nginx files remove කරලා
RUN rm -rf /usr/share/nginx/html/*

# src folder content copy කරනවා nginx folder එකට
COPY src/ /usr/share/nginx/html/

EXPOSE 80