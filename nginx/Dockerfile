# Fetching the latest nginx image
FROM nginx:stable-alpine

# Removing default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d

# COPY --from=builder /react-ui/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]