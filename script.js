/* Add some basic styling */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
}

.header h1 {
  margin: 0;
}

.header p {
  margin: 0;
}

.content {
  padding: 15px;
}

.features,
.benefits {
  margin-bottom: 30px;
}

.footer {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

/* Add some basic animation */
.fade-in {
  animation: fadeIn ease-in-out 1s;
}

.slide-up {
  animation: slideUp ease-in-out 1s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
