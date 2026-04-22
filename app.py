from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/airport/<icao>')
def get_airport(icao):
    return {
        "ICAO": icao.upper(),
        "Name": "Total Rf Heliport"
    }

if __name__ == '__main__':
    app.run(port=5000, debug=True)