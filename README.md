# Currency converter app

### Technologies used:
- React with Typescript
- Redux Toolkit, Redux-Saga
- CSS modules
- Axios
- Vitest (tests in progress)

### Project description
This application offers you two main features:

1. **Currency Converter:** Convert any amount from one currency to another.

2. **Check Rates:** Get the latest exchange rates for any currency.

We use the free plan of the [exchangeratesapi.io](https://exchangeratesapi.io/) service to get real-time exchange rates.

### Instructions how to run application locally:
1. Clone the repository to your local machine, open terminal and clone repo with command bellow:
```bash 
git clone https://github.com/BudnikOleksii/currency-converter.git
```
2. Open project in terminal:
```bash 
cd currency-converter
```
3. Set up dependencies:
```bash 
npm install
```
4. Add .env file to the project's root folder with variable or use your own API key if you have an account in for exchangeratesapi:
``` 
VITE_EXCHANGE_RATES_API_KEY=0236102a833132b4be80d51aaabf3c9e
```
5. Run project by command:
```bash 
npm start
```
6. Open application in your browser `http://127.0.0.1:5173/`
