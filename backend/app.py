from flask import Flask, jsonify, request
from withLC import get_image_informations

app = Flask(__name__)

@app.route("/api/generate", methods=['POST'])
def generate():
    # file = request.get_data()
    print("getting data")
    data = request.form
    file = request.files.get('file')
    prompt = data["prompt"]
    tone = data["tone"]
    language = data["language"]
    
    result = get_image_informations(file.stream.read(), prompt, tone, language)
    # result = {
    #     "description":"This adorable enamel pin features a cat dressed as an assassin, complete with a sword and ninja outfit. Perfect for cat lovers and pin collectors alike.",
    #     "tags":["enamel pin","cat","assassin","cute","collectible","accessory"],
    #     "title":"Assassin Meowy Enamel Pin"
    # }
    return jsonify({'result': result})