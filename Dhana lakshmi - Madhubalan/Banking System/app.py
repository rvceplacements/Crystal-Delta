import sqlite3
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Function to create a database connection and table
def create_user_table():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        )
    ''')

    # Insert a test user for demonstration purposes
    cursor.execute('''
        INSERT INTO users (username, password) VALUES (?, ?)
    ''', ('testuser', 'password'))

    conn.commit()
    conn.close()

# Run function to create user table
create_user_table()

# Serve the login page
@app.route('/login', methods=['GET'])
def login_page():
    return render_template('login.html')

# Handle login request
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE username=? AND password=?', (username, password))
    user = cursor.fetchone()
    
    conn.close()

    if user:
        return jsonify({'message': 'Login successful'})
    else:
        return jsonify({'message': 'Login failed'})

# Render index1.html upon successful login
@app.route('/index1')
def index1():
    return render_template('index1.html')

if __name__ == '__main__':
    app.run(debug=True)
