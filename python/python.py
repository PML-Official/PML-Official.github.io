from flask import Flask, render_template
import dash
from dash import html

server = Flask(__name__, template_folder="..")

app = dash.Dash(__name__, server=server, url_base_pathname="/python-page/")

app.layout = html.Div([
    html.H1("This is the Python test page.")
])

@server.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__": 
    server.run(debug=True)