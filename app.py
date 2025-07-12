from flask import Flask, request, jsonify
import joblib
import numpy as np

# Load the saved model
model = joblib.load('random_forest_model.pkl')  

# Initialize the Flask app
app = Flask(__name__)

# Define a route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    # Get the input data as JSON
    data = request.json
    try:
        # Extract the features in the expected order
        features = [
            data['energy_100g'], data['proteins_100g'], data['carbohydrates_100g'], 
            data['fat_100g'], data['fiber_100g'], data['sugars_100g'],
            data['salt_100g'], data['sodium_100g'], data['saturated-fat_100g'],
            data['cholesterol_100g'], data['trans-fat_100g'], data['calcium_100g'],
            data['iron_100g']
        ]
        # Convert the features into a 2D array for prediction
        prediction = model.predict([features])
        
        # Return the prediction as a JSON response
        return jsonify({'prediction': float(prediction[0])})
    except KeyError as e:
        return jsonify({'error': f'Missing key in input data: {e}'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
