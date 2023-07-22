from . import apis



@apis.route('/test', methods=['GET'])
def test(): return {"status": 200, "response": 'test'}
