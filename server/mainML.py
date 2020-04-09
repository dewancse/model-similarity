# Importing the libraries
import csv
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor

def polyML(data):
    # writing a csv data sheet for the X_grid and y_grid 
    with open('modelML.csv', 'w', newline='') as csvfile:
        fieldnames = ['X', 'Y']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    
        writer.writeheader()
        for i in range(len(data)):
            writer.writerow({'X': data[i]['xaxis'], 'Y': data[i]['yaxis']})
    
    # Importing the dataset
    dataset = pd.read_csv('modelML.csv')
    X = dataset.iloc[:, 0:1].values
    y = dataset.iloc[:, 1].values
        
    # Fitting Polynomial Regression to the dataset
    poly_reg = PolynomialFeatures(degree = 7)
    X_poly = poly_reg.fit_transform(X)
    poly_reg.fit(X_poly, y)
    lin_reg_2 = LinearRegression()
    lin_reg_2.fit(X_poly, y)
    
    # Visualising the Polynomial Regression results (for higher resolution and smoother curve)
    X_grid = np.arange(min(X), max(X), 0.1)
    X_grid = X_grid.reshape((len(X_grid), 1))
    y_grid = lin_reg_2.predict(poly_reg.fit_transform(X_grid))
    
    objList = []
    for i in range(len(X_grid)):
        objList.append({'xaxis': X_grid[i][0], 'yaxis': y_grid[i]})
        
    return objList

def decisionML(data):
    # writing a csv data sheet for the X_grid and y_grid 
    with open('modelML.csv', 'w', newline='') as csvfile:
        fieldnames = ['X', 'Y']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    
        writer.writeheader()
        for i in range(len(data)):
            writer.writerow({'X': data[i]['xaxis'], 'Y': data[i]['yaxis']})
    
    # Importing the dataset
    dataset = pd.read_csv('modelML.csv')
    X = dataset.iloc[:, 0:1].values
    y = dataset.iloc[:, 1].values
    
    # Fitting the Decision Tree Regression to the dataset
    regressor = DecisionTreeRegressor(random_state = 0)
    regressor.fit(X, y)
    
    # Predicting a new result
    y_pred = regressor.predict([[6.5]])
    
    # Visualising the Decision Tree Regression results (for higher resolution and smoother curve)
    X_grid = np.arange(min(X), max(X), 0.1)
    X_grid = X_grid.reshape((len(X_grid), 1))
    y_grid = regressor.predict(X_grid)
    
    objList = []
    for i in range(len(X_grid)):
        objList.append({'xaxis': X_grid[i][0], 'yaxis': y_grid[i]})
        
    return objList

def forestML(data):
    # writing a csv data sheet for the X_grid and y_grid 
    with open('modelML.csv', 'w', newline='') as csvfile:
        fieldnames = ['X', 'Y']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    
        writer.writeheader()
        for i in range(len(data)):
            writer.writerow({'X': data[i]['xaxis'], 'Y': data[i]['yaxis']})
    
    # Importing the dataset
    dataset = pd.read_csv('modelML.csv')
    X = dataset.iloc[:, 0:1].values
    y = dataset.iloc[:, 1].values
    
    # Fitting the Random Forest Regression to the dataset
    regressor = RandomForestRegressor(n_estimators = 300, random_state = 0)
    regressor.fit(X, y)
    
    # Predicting a new result
    y_pred = regressor.predict([[6.5]])
    
    # Visualising the Regression results (for higher resolution and smoother curve)
    X_grid = np.arange(min(X), max(X), 0.01)
    X_grid = X_grid.reshape((len(X_grid), 1))
    y_grid = regressor.predict(X_grid)
    
    objList = []
    for i in range(len(X_grid)):
        objList.append({'xaxis': X_grid[i][0], 'yaxis': y_grid[i]})
        
    return objList