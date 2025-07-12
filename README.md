
# 🥗 Healthy Bite — Multiclass Food Healthiness Classification

## 📋 Project Overview

**Healthy Bite** is a machine learning-based classification project that evaluates the **healthiness level** of food items. Based on a food item's nutritional values, the model predicts one of **five health categories**, from **Healthiest** to **Unhealthiest**.

This tool can help users, nutritionists, or food product developers assess food quality objectively and make healthier dietary decisions.

---

## 🩺 Health Categories

The model classifies food into the following five categories:

1. 🟢 **Healthiest**  
2. 🟢 **Healthy**  
3. 🟡 **Moderate**  
4. 🔴 **Unhealthy**  
5. 🔴 **Unhealthiest**

---

## 🔍 Features

- Clean and preprocess real-world nutritional data  
- Visualize relationships between nutrients and health ratings  
- Use supervised machine learning to predict one of five health classes  
- Evaluate and compare multiple models (accuracy, confusion matrix, etc.)  
- Interactive user inputs using `ipywidgets` to test food items

---

## 🧰 Technologies Used

- **Python 3**
- **Pandas / NumPy** – Data loading and processing  
- **Matplotlib / Seaborn** – Visualization  
- **Scikit-learn** – Classification algorithms and model evaluation  
- **IPyWidgets** – UI elements in Jupyter Notebook

---

## 🗂️ Dataset

Each food item in the dataset contains:
- **Macronutrients**: Fat, Protein, Carbohydrates, Sugar  
- **Micronutrients**: Sodium, Fiber  
- **Energy (kcal)**  
- **Health Score**: A multiclass label (0 to 4) where:
  - `0 = Healthiest`
  - `1 = Healthy`
  - `2 = Moderate`
  - `3 = Unhealthy`
  - `4 = Unhealthiest`

> 🧠 Labels may be derived using health guidelines (e.g., WHO, FDA) or calculated via a scoring formula based on thresholds.

---

## 🧠 Model Overview

### Algorithms Tried:
- Logistic Regression (Multinomial)
- Decision Tree Classifier
- Random Forest Classifier
- K-Nearest Neighbors (KNN)
- Support Vector Machines (SVM)

### Evaluation Metrics:
- Accuracy
- Confusion Matrix
- Precision/Recall/F1-Score (for multiclass)

### Sample Output:
> For an item with:  
> - Fat: 12g, Sugar: 6g, Sodium: 350mg, Protein: 2g  
> 🔍 **Predicted Category**: 3 (Unhealthy)

---

## 🚀 Getting Started

### Installation

```bash
pip install pandas numpy matplotlib seaborn scikit-learn ipywidgets
```

### Run the Notebook

1. Launch `Healthy_Bite.ipynb` in Jupyter  
2. Execute all cells in sequence  
3. Use the interactive widgets at the end to input nutritional values and view healthiness prediction  

---

## ✅ Future Enhancements

- Convert notebook into a web app using **Streamlit** or **Gradio**  
- Integrate real-time barcode scanning and food product lookup  
- Visual diet dashboard based on daily food entries  
- Explainable AI (XAI) integration to justify predictions

---

## 📄 License

Licensed under the **MIT License** – Free to use, modify, and distribute for non-commercial and educational use.

---

## 🙌 Acknowledgements

- Open Food Facts / USDA data (if used)
- Scikit-learn and Python data science community
- WHO & FDA for health threshold inspiration
