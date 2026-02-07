1. Three things a client might request from a server

   1. Retrieve a resource (e.g., `GET /document.xml` — an XML of the document).
   2. Request data (e.g., `GET /api/teachers/salaries` or `POST /api/teachers/query`).
   3. Send an action/acknowledgement (e.g., `POST /confirm` to send a confirmation response).

2. Main job of a server
   Process incoming client requests, run the required logic (fetch/update/store data), and return the appropriate response (plus handle security, validation and persistence).

3. 3-digit code for an internal server error
   **500**
