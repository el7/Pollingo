from flask import Flask
from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast

app = Flask(__name__)
api = Api(app)



class UpdatePoll(Resouce):
    # methods
    pass

class Poll(Resouce):
    # methods
    pass



api.add_resource(UpdatePoll, '/updatePoll') # entry point
api.add_resource(Poll, '/poll') # entry point







