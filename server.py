from http.server import SimpleHTTPRequestHandler, HTTPServer

class LoggingHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        print("\n--- New GET Request ---")
        print("Path:", self.path)
        print("Headers:\n", self.headers)
        super().do_GET()  # Traitement standard

    def do_POST(self):
        print("\n--- New POST Request ---")
        print("Path:", self.path)
        print("Headers:\n", self.headers)
        
        # Lire et afficher le corps de la requête POST
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        print("Body:\n", post_data.decode('utf-8'))
        
        # Réponse
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"POST request received")

# Lancer le serveur sur le port 8080
server_address = ('', 8080)
httpd = HTTPServer(server_address, LoggingHTTPRequestHandler)
print("Serving on port 8080...")
httpd.serve_forever()
