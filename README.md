# Financial Times Technical Test

This repository contains my solution to the Financial Times Technical Test, which is divided into two exercises: retrieving stock data and building a UI component. Below, you’ll find implementation details, setup instructions, testing documentation, and additional notes.

---

## **Overview**
### **Part 1: Retrieve the Data**
- Fetch data from the FT Securities Quotes API and display it in plain HTML.
- The data includes stock prices and percentage changes for symbols like FTSE 100 and S&P 500.

### **Part 2: Build the UI**
- Create a component based on the provided design and sample JSON.
- The component is styled, responsive, and accessible.

## **Setup Instructions**

### **Installation**
1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd ft-technical-test
   
3. Install dependencies
   npm start
   Open your browser and navigate to http://localhost:3500.

## Implementation Details

### 1. Retrieve the Data

The application fetches stock market data using the **FT Securities Quotes API**.

#### **API Endpoint**  
`https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes`

#### **Example Query**  
```text
?symbols=FTSE:FSI,INX:IOM
```
## 2. Build the UI

The UI component is implemented using **plain HTML, CSS, and JavaScript**.

---

### **Accessibility**
- Semantic HTML tags (e.g., `<ul>`, `<li>`) are used for better structure.
- Screen reader-friendly attributes, such as `aria-label`, are added where necessary to enhance accessibility.

---

### **Responsiveness**
- **Media Queries**: Ensure the UI adapts to various screen sizes and resolutions, providing an optimal user experience on both mobile and desktop devices.

---

### **Performance**
- **Inline Critical CSS**: Improves rendering speed by reducing the need for additional requests.
- **Minimized JavaScript**: Reduces load times and ensures better performance over slower networks.

---

### **Testing**

#### **Unit Tests**
- Mocked API responses were used to validate:
  - API calls functionality.
  - Сorrect operation of functions.

#### **Accessibility Tests**
- Tools like **Lighthouse** were used to validate compliance with WCAG (Web Content Accessibility Guidelines).

---

### **Key Features**

#### **Progressive Enhancement**
- The UI gracefully falls back to static content if JavaScript is disabled, ensuring core functionality remains accessible.

#### **Error Handling**
- **Network Errors**:
  - Display a fallback message if the API call fails.
- **Invalid API Responses**:
  - Handled gracefully to avoid crashing the UI.

#### **Styling**
- The UI design follows the **FT.com aesthetic** to ensure consistency with the overall brand experience.

---

### **Optional Features Addressed**
- **Responsiveness**:
  - Implemented using CSS media queries for cross-device compatibility.
- **Accessibility**:
  - Semantic HTML tags and ARIA attributes ensure compliance with accessibility standards.


