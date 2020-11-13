## Become .htaccess file Ninja

### Error Pages
Create custom error pages for `401 Unauthorized`, `403 Forbidden`, `404 File Not Found` and `500 Internal Server Error`.
Assuming that the location of these pages in your website is `https://example.com/error_pages/404.html`.
```
ErrorDocument 401 /error_pages/401.html
ErrorDocument 403 /error_pages/403.html
ErrorDocument 404 /error_pages/404.html
ErrorDocument 500 /error_pages/500.html
```
