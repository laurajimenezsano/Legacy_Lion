from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text


app = Flask(__name__)



# change to name of your database; add path if necessary
db_name = 'project_db'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

# this variable, db, will be used for all SQLAlchemy commands
db = SQLAlchemy(app)

# class coord(db.Model):
#     __tablename__ = 'states_coord'
#     state = db.Column(db.String, primary_key=True)
#     lat = db.Column(db.Integer)
#     lon = db.Column(db.Integer)





# NOTHING BELOW THIS LINE NEEDS TO CHANGE
# this route will test the database connection and nothing more
# @app.route('/')
# def testdb():
#     try:
#         db.session.query(text('1')).from_statement(text('SELECT 1')).all()
#         return '<h1>It works.</h1>'
#     except Exception as e:
#         # e holds description of the error
#         error_text = "<p>The error:<br>" + str(e) + "</p>"
#         hed = '<h1>Something is broken.</h1>'
#         return hed + error_text

# hello_dict = {"Hello": "World2!"}


# @app.route("/")
# @app.route("/Home")
# def home():
#     return "This is the home page, which is still under development"


# @app.route("/story")
# def normal():
#     return hello_dict


# @app.route("/jsonified")
# def jsonified():
#     return jsonify(hello_dict)


if __name__ == "__main__":
    app.run(debug=True)