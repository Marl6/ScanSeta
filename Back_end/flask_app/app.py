from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, template_folder='Front_end/build')

@app.route('/')
def home():
    return render_template('index.html')  # Calls the frontend HTML file

if __name__ == '__main__':
    app.run(debug=True)
