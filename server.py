import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

class LoggingHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        print("\n--- New GET Request ---")
        print("Path:", self.path)
        print("Headers:\n", self.headers)
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"GET request received")

    def do_POST(self):
        print("\n--- New POST Request ---")
        print("Path:", self.path)
        print("Headers:\n", self.headers)
        
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length)
        print("Body:\n", post_data.decode('utf-8'))
        
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"POST request received")

# Utilise le port défini par Render
PORT = int(os.environ.get('PORT', 8080))
server_address = ('', PORT)
httpd = HTTPServer(server_address, LoggingHTTPRequestHandler)
print(f"Serving on port {PORT}...")
httpd.serve_forever()
