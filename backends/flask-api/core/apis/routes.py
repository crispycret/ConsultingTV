from . import apis



@apis.route('/test', methods=['GET'])
def test():
    return "test"
