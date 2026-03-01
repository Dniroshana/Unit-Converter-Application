FROM nginx:alpine

# Remove default nginx static assets 
RUN rm -rf /usr/share/nginx/html/*

# Copy custom static assets from src directory to nginx 
COPY src/ /usr/share/nginx/html/


EXPOSE 80

