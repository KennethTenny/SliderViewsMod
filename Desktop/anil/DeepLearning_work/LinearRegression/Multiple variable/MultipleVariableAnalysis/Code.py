
from keras.models import Sequential         #The core data structure of Keras is a model, a way to organize layers. The simplest type of model is the Sequential model, a linear stack of layers.
from keras.layers.core import Dense, Activation
from keras import optimizers    # An optimizer is one of the two arguments required for compiling a Keras model
import numpy as np              # Using Large multi dimensional arrays.
from keras import backend as K	# Rather than picking one single tensor library and making the implementation of Keras tied to that library, Keras handles the problem in a modular way, and several different backend engines can be plugged seamlessly into Keras.
#import matplotlib.pyplot as plt         # Using of matlab functionalities in Pyhton

import pandas as pd             # Operations for manipulating numerical tables

def Normalize(xtrain,m):
    for k in range(0,5):        # For printing every column
        min = np.amin(xtrain[:,k])      
        max = np.amax(xtrain[:,k])      
        std = max-min                   # Standard deviation
        mean = np.sum(xtrain[:,k])/(m)  # Mean
        xtrain[:,k] = (xtrain[:,k] - mean)/std  # Normalising every entry

x = pd.ExcelFile("data_carsmall.xlsx")          # x:opening, pd: Operations for manipulating numerical tables
df = x.parse()              # Resolving the data into component parts.
NaNIndex = df.index[df.y.isnull()] # Storing Indices of all the rows that has y as NaN.
testData = np.c_[df.x1[NaNIndex], df.x2[NaNIndex],df.x3[NaNIndex],df.x4[NaNIndex], df.x5[NaNIndex]]    #Creating a features table for all those rows that has a NaN index.

df = df.dropna()        # Return object with labels on given axis omitted where alternately any or all of the data are missing
xtrain = np.c_[df.x1[1:], df.x2[1:], df.x3[1:], df.x4[1:], df.x5[1:]]  # All the remaining rows would be included in training data.
print xtrain.shape          # Printing the Training table.
m = len(xtrain)             # Calculating the number of rows for training table.


Normalize(xtrain,m)       # Normalising the training data.
xtrain = np.c_[np.ones(m), xtrain]  # Adding the x0 to the normalised training data.

print xtrain

ytrain = df.y[1:]           # The non NaN y entries(Since we used Dropna earlier and we didn't need to store NaN y entries)

#create Model
	
model = Sequential()
layer1 = Dense(6, input_shape = (6,))          # Using a Dense layer of neural networks.
model.add(layer1)
layer2 = Dense(1)                       # Creating a single output for the second layer.
model.add(layer2)

model.compile(loss='mean_squared_error', optimizer='sgd',metrics=['accuracy'])      #Stochastic gradient descent optimizer.Includes support for momentum, learning rate decay, and Nesterov momentum.

model.fit(xtrain, ytrain, epochs=500, verbose=1)            # Model includes the training data. Verbose 1 for progress bar

c = layer2.get_weights()            # Getting the weights
c = np.array(c)                 # Putting them into an array.
print c

tSize = len(testData)
Normalize(testData, tSize)

testData = np.c_[np.ones(tSize), testData]  # including the x0 in the test data.

s = [np.ones(100), np.linspace(-25,25,100), np.linspace(-25,25,100),np.linspace(-25,25,100),np.linspace(-25,25,100),
     np.linspace(-25,25,100)]                    #Create a vector of 100 evenly spaced points between -25 and 25.
s = np.array(s).transpose()     # For plotting.

print s.shape
#d = s.dot(c[0])
#plt.plot(d.dot(c[1]))
#print testData

z = model.predict(testData) #Predicting the model.
print z
#plt.show()
