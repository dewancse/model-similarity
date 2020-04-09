from mainML import *

from sanic import Sanic, response
from sanic.response import json, text

app = Sanic()

app.config.REQUEST_TIMEOUT = 600
app.config.RESPONSE_TIMEOUT = 600


# sanic-apline project's code
@app.route("/")
async def test(request):
    return json({"hello": "world"})

@app.route('/polyML', methods=['POST'])
async def post_handler(request):
    obj = request.json
    return json(polyML(obj))

@app.route('/decisionML', methods=['POST'])
async def post_handler(request):
    obj = request.json
    return json(decisionML(obj))

@app.route('/forestML', methods=['POST'])
async def post_handler(request):
    obj = request.json
    return json(forestML(obj))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, workers=4)

