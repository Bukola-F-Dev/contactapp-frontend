### The Frontend and The Backend Structure.

### Frontend Responsibilities:

Form UI to add/edit contact
Lists to view all contacts
Search bar to filter contacts by either name or email
New page for editing and updating
Deletion button with confirmation
State management for contacts
Frontend API requests to backend (CRUD + Search)

### Backend Responsibilities:

RESTful API endpoints:
POST /contacts – Creates new contact
GET /contacts – Fetch all contacts
GET /contacts/:id – Get a single contact
PUT /contacts/:id – Update contact
DELETE /contacts/:id – Delete contact
GET /contacts/search?name&email – Search
### Input validation (express-validator)
MongoDB schema definition
Error handling and status codes
Cross-Origin setup for frontend connection

### How the frontend and the backend work together

### For(Add Contact):
### Frontend:
User fills contact form
On clicking submit, React Frontend sends data via the Axios.post("/api/contacts", contactData)

### Backend:
Express receives POST request at /contacts
Validates and saves the data to MongoDB
Responds with success or error message

### Frontend:
Displays confirmation and updates UI without reload

### For(Search Contact):
### Frontend:

User types either name or email in search field
React debounces input and sends request like:
Axios.get("/api/contacts/search?name=Jane")

### Backend:
Parses query and runs MongoDB filter and Returns filtered list

### Frontend:

Displays search results instantly

### The Frontend allow users to: 
 
View all contacts
Create a new contact
Edit an existing contact
Delete a contact
Search for contacts (by name or email)

### Viewing Contacts (ContactList.jsx)

### The ContactList.jsx file:

Fetches all contacts with useEffect**************************************
Display them in a list on the web page
Includes edit and delete buttons


### Creating a Contact (ContactForm.jsx)

### The ContactForm.jsx file:

A Controlled form with inputs for name, email, phone and note.
On clicking the submit, calls createContact(data)
Shows either success or error message


### Editing a Contact (EditContact.jsx)

### The ContactEdit.jsx file:

Uses React Router to get the id param
Fetch the contact info via the getContactById(id)
Allows Users to Prefill the form and allow updates


### Deleting a Contact

On delete button click, show confirmation
Call deleteContact(id) then update the UI

### Searching Contacts (Search.jsx)

A Controlled input
Debounce search
Call searchContacts e.g ("name=Benson")
Updates the contact list state with the response

### Summary. 
It's a two page CRA website that does the functionality of Creating, Viewing, Updating, Deleting and Searching of contacts (Composed of Name, Email Address, Phone Number and note).
It works in a way that rejects duplicate email or phone number by displaying error messages.  

### A local state management is used and datas and functions are passed through props. 