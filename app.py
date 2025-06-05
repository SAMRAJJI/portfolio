from flask import Flask, request, jsonify, render_template
from google.cloud import dialogflow_v2 as dialogflow
import uuid
import os
from flask_cors import CORS

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)
# Set path to your service account key
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/credentials/dialogflow.json"

# Set your Dialogflow project ID
DIALOGFLOW_PROJECT_ID = 'sam-hl9m'
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/message', methods=['POST'])
def handle_message():
    user_message = request.json.get('message')
    session_id = str(uuid.uuid4())

    session_client = dialogflow.SessionsClient()
    session = session_client.session_path(DIALOGFLOW_PROJECT_ID, session_id)

    text_input = dialogflow.TextInput(text=user_message, language_code='en')
    query_input = dialogflow.QueryInput(text=text_input)

    response = session_client.detect_intent(request={"session": session, "query_input": query_input})
    reply = response.query_result.fulfillment_text

    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
