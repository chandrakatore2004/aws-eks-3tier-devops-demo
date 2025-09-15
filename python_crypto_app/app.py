from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Hardcoded credentials
DEFAULT_USERNAME = "admin"
DEFAULT_PASSWORD = "password123"

@app.route("/", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == DEFAULT_USERNAME and password == DEFAULT_PASSWORD:
            return redirect(url_for("welcome"))
        else:
            error = "Invalid Credentials. Please try again."

    return render_template("login.html", error=error)

@app.route("/welcomepage")
def welcome():
    return render_template("product.html")

@app.route("/place_order")
def place_order():
    product_id = request.args.get("product")
    return f"Order placed for product ID: {product_id}"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

