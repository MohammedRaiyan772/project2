from flask import Flask, jsonify

app = Flask(__name__)

products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "price": 1999,
        "category": "Electronics"
    },
    {
        "id": 2,
        "name": "Smart Watch",
        "price": 2999,
        "category": "Electronics"
    },
    {
        "id": 3,
        "name": "Sports Shoes",
        "price": 1499,
        "category": "Fashion"
    },
    {
        "id": 4,
        "name": "Travel Backpack",
        "price": 999,
        "category": "Accessories"
    }
]

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
