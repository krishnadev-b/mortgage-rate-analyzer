# mortgage-rate-analyzer

Analyzes historical mortgage rates to find best and worst pricing days

## Mortgage Rate Analyzer

This repository contains a Node.js application that analyzes historical mortgage rates to determine the best and worst days to price a loan. The project includes a `MortgageRateAnalyzer` class that processes an array of rate data (stored in `sampleRates.json`) and returns the days with the lowest and highest rates. It also includes sample data, testing setup, and documentation for easy use.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Using Custom Data](#using-custom-data)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

The `MortgageRateAnalyzer` class takes historical mortgage rate data (each entry with a `date` and `rate`) and identifies the best day (lowest rate) and worst day (highest rate) to price a loan. The project uses sample data stored in `sampleRates.json` for demonstration and includes error handling, documentation, and tests.

## Features

- Analyzes historical mortgage rates to find optimal pricing days.
- Returns both the best and worst days with their rates and reasons.
- Includes input validation and error handling.
- Uses sample data in JSON format (`sampleRates.json`) for easy testing.
- Supports custom data input.
- Includes Jest for testing the analyzer functionality.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later recommended): [Download here](https://nodejs.org/)
- **npm** (comes with Node.js): Check with `npm -v` in your terminal.
- **Git** (for cloning the repository): [Download here](https://git-scm.com/)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository** to your local machine:

   ```bash
   git clone https://github.com/yourusername/mortgage-rate-analyzer.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd mortgage-rate-analyzer
   ```

3. **Install the dependencies**:

   Run the following command to install the required Node.js packages (including Jest for testing):

   ```bash
   npm install
   ```

   This will create a node_modules folder and download dependencies listed in package.json.

## Running the Project

Once installed, you can run the project to analyze the sample data provided in `sampleRates.json`.

### Steps to Run

1. Ensure you are in the project directory:

   ```bash
   cd /path/to/mortgage-rate-analyzer
   ```

2. Run the main script using Node.js:

   ```bash
   node mortgageRates.js
   ```

   Alternatively, use the npm start script for convenience:

   ```bash
   npm start
   ```

This will read the `sampleRates.json` file, process the data, and output the best and worst days to price a loan based on the sample rates. The output will look something like:

```
Analysis Results: {
  bestDayToPrice: { date: '2025-02-04', rate: 3.1, reason: 'Lowest mortgage rate found' },
  worstDayToPrice: { date: '2025-02-03', rate: 3.9, reason: 'Highest mortgage rate found' }
}
```

## Using Custom Data

If you want to analyze different mortgage rate data, you can either modify `sampleRates.json` or provide your own data in the same format (an array of objects with date and rate properties).

### Example of Custom Data

Create or update a JSON file (e.g., `customRates.json`) with your data:

```json
[
    { "date": "2025-03-01", "rate": 3.4 },
    { "date": "2025-03-02", "rate": 3.6 },
    { "date": "2025-03-03", "rate": 3.2 }
]
```

Then, update `mortgageRates.js` to read from your custom file by changing the file path in the main function:

```javascript
const data = await fs.readFile(path.join(__dirname, 'customRates.json'), 'utf8');
```

Run the script again with `node mortgageRates.js` or `npm start`.

## Testing

The project includes tests using Jest to verify the MortgageRateAnalyzer functionality.

### Run Tests

To execute the tests:

1. Ensure Jest is installed (it should be after running `npm install`).

2. Run the following command:

   ```bash
   npm test
   ```

This will run any test files (e.g., `test.js`) and report whether the tests pass or fail. The tests check that the analyzer correctly identifies the best and worst pricing days and handles edge cases.

## File Structure

Here's an overview of the project files:

- `mortgageRates.js`: Main JavaScript file containing the MortgageRateAnalyzer class and example usage.
- `sampleRates.json`: Sample historical mortgage rate data in JSON format.
- `package.json`: Project configuration, including dependencies and scripts.
- `test.js` (optional): Test file using Jest to verify functionality.
- `.gitignore`: Excludes node_modules/ and other unnecessary files.
- `README.md`: This file, providing documentation and instructions.

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you'd like to change.

## License

This project is licensed under the ISC License. See the LICENSE file for details (if you want to add a license, create a LICENSE file with appropriate content).

## Contact

For questions or feedback, contact the project maintainer:

- Name: Sai Krishna 
- Email: krishnachowdary963@gmail.com
- GitHub: krishnadev-b

Feel free to open an issue on GitHub if you encounter bugs or have suggestions.
