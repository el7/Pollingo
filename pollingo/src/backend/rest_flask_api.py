from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast

app = Flask(__name__)
api = Api(app)



class UpdatePoll(Resource):
    # methods
    pass

class Poll(Resource):
    # methods
    pass



api.add_resource(UpdatePoll, '/updatePoll') # entry point
api.add_resource(Poll, '/poll') # entry point



if __name__ == '__main__':
    print("here~") # doesn't work?
    app.run() # run flask app



