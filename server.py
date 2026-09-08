import http.server
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class DualStackServer(http.server.ThreadingHTTPServer):
    allow_reuse_address = True
    daemon_threads = True

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

if __name__ == '__main__':
    with DualStackServer(("", PORT), CustomHandler) as httpd:
        print(f"Server ready at http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
