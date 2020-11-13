## Become .htaccess file Ninja

### Error Pages
Create custom error pages for `401 Unauthorized`, `403 Forbidden`, `404 File Not Found` and `500 Internal Server Error`.
Assuming that the location of these pages in your website is `https://example.com/error-pages/404.html`.
```
ErrorDocument 401 /error-pages/401.html
ErrorDocument 403 /error-pages/403.html
ErrorDocument 404 /error-pages/404.html
ErrorDocument 500 /error-pages/500.html
```

### Redirecting
Redirect from one url to another. Here we are redirecting from `old-folder` to `new-folder/index.html`.
First parameter, which is the path from where we are redirecting is relative url and the redirected path is absolute url.
`````
Redirect /old-folder/ https://example.com/new-folder/index.html
`````

### Hotlink Prevention (Save Bandwidth and Data)
This is used to stop other websites from linking to files on our website. This saves bandwidth and our important data.
Here we are protecting gif, jpg and css files. Make sure to change `mywebsite.com` to the domain of your website.
```
RewriteEngine on
RewriteCond %{HTTP_REFERER} !^$
RewriteCond %{HTTP_REFERER} !^http://(www\.)?mywebsite.com/.*$ [NC]
RewriteRule \.(gif|jpg|css)$ - [F]
```

Return a different image to other users when they try to connect to our files.
```

```
