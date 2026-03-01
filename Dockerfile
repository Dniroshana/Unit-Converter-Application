FROM nginx:alpine

# Default nginx files remove 
RUN rm -rf /usr/share/nginx/html/*

# src folder content copy to nginx folder 
COPY src/ /usr/share/nginx/html/


EXPOSE 80
