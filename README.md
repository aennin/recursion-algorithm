# Recursion Algorithms in JavaScript

This project demonstrates the implementation of classic recursive algorithms in JavaScript, including **Fibonacci sequence generation** and **Merge Sort**. Both recursive and iterative approaches are explored to highlight the power and trade-offs of recursion.

---

## Project Structure

- `fibonacci.js`  
  Implements functions to compute the Fibonacci sequence using both **iteration** and **recursion**.

- `mergeSort.js`  
  Implements the **Merge Sort** algorithm recursively.

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/recursion-algorithms.git
cd recursion-algorithm
```
### 2. Run the algorithms
You can run the files directly with Node.js:
```bash
node fibonacci.js
node mergeSort.js
```
If you want automatic restarts on file changes, use **nodemon**:
```bash
nodemon fibonacci.js
```
Stop nodemon anytime with ctrl + C

## Algorithms Implemented
**Fibonacci (fibonacci.js)**
- fibs(n): Iterative method to compute the first `n` Fibonacci numbers.
- fibsRec(n): Recursive method to compute the first `n` Fibonacci numbers.
Example:
```bash
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```

## Key Learning Points
- Recursion allows breaking down problems into smaller subproblems.
- Iterative methods can sometimes be more efficient, but recursion often makes code cleaner and more elegant.