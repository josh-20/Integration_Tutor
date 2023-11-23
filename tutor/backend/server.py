from flask import Flask , request
from markupsafe import escape
from flask_cors import CORS
from sympy import parsing, Symbol, integrate,sin
from sympy.integrals.manualintegrate import integral_steps
import re
api = Flask(__name__)
CORS(api)
'''
Sympy parsing: convert all answers to sympy expression.
evaluate based on what outputs are.


'''

@api.route("/", methods=['GET','POST'])
def hello_world():
    return '<p> Hello </p>'


'''
This Function checks each answer for Quesiton 1.
'''
def check_answers_Question1(Answer1, Answer2=''):
    step = request.form.get('step')
    x = Symbol('x')
    u = Symbol('u')
    if (step == 'step1'):
        print(integrate(Answer1,x))
        if integrate(Answer1,x) == integrate('x**2',x) and integrate(Answer2,x) == integrate('2*x',x):
            feedback = f"Correct, {Answer1}/{Answer2} are the correct values to substitute for u/du"
        elif integrate(Answer1,x) == integrate('x**2',x) and integrate(Answer2,x) != integrate('2*x',x):
            feedback = f" Although {Answer1} is the right substitution for u, {Answer2} is not valid. Hint: Find the differential du/dx, which allows you to express dx in terms of du."
        elif (integrate(Answer1,x) != integrate('x**2',x) and integrate(Answer2,x) == integrate('2*x',x)):
            feedback = f" Although {Answer2} is the right substitution for du, {Answer1} is not valid. Hint:  Make a substitution by letting u be a function of x that simplifies the expression. This choice is often guided by differentials, powers, or trigonometric functions."
        return {'feedback': feedback}
    elif (step == 'step2'):
        if (integrate(Answer1,u) == parsing.sympy_parser.parse_expr('E**u')):
            feedback = f'That is the correct substitution: {Answer1} du, Good Job!'
        else:
            feedback = f'This is not the right substitution. Remeber to substitue the u/du with the respected values.'
        return {'feedback':feedback}
    elif (step == 'step3'):
        Answer = integrate(Answer1,u)
        if (Answer == parsing.sympy_parser.parse_expr('E**u')):
            feedback = f"{Answer} is the correct answer! Good Job!"
        else:
            feedback = f"{Answer1} is not right. Hint: cancel out common denominators."
    # Check for null values in answers
    elif (step == 'step4'):
        print(Answer1)
        if (Answer1 == parsing.sympy_parser.parse_expr('E**(x**2)')):
            feedback = f'correct {Answer1} is the final answer.'
        else:
            feedback = f'This is not the right answer. remember we replace u/du with what we substituted for u/du in step 1'
    return {"feedback":feedback}

@api.route('/Question1', methods=['GET', 'POST'])
def question_One():
    '''
    create all possible u's and du's for problems.
    '''
    u = parsing.sympy_parser.parse_expr(request.form.get('Answer1').replace('^','**').replace('e','E').replace('* du',"").replace('*du',"").replace(' du',""))
    if (request.form.get('Answer2')):
        du = parsing.sympy_parser.parse_expr(request.form.get('Answer2').replace('^','**').replace('e','E'))
    else:
        du = ""
    return check_answers_Question1(u, du)

def check_Answer_Question2(Answer1, Answer2, Answer3, Answer4):
    pass

@api.route('/Question2', methods=['GET','POST'])
def question_Two():
    x = Symbol('x')
    expression = x*sin(x)
    steps = repr(integral_steps(expression,x))
    print(steps)
    return("<p>test</p>")


if __name__ == '__main__':
    api.run(debug=True)