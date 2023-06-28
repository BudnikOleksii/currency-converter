# Currency converter app

### Technologies used:
- React with Typescript
- Redux Toolkit, Redux-Saga
- CSS modules
- Axios
- Vitest

### Project description
This application offers you two main features:

1. **Currency Converter:** Convert any amount from one currency to another.

2. **Check Rates:** Get the latest exchange rates for any currency.

Any changes to the input will take effect only after a delay of 500 milliseconds, because of debounce(it helps to avoid so many calculations or requests). This means that the system won't instantly reflect your modifications; instead, it will wait for half a second before updating the results.

We use the free plan of the [exchangeratesapi.io](https://exchangeratesapi.io/) service to get real-time exchange rates. Some of the endpoints unavailable for the free plan.

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
4. Get your API key for [exchangeratesapi.io](https://exchangeratesapi.io/) service, add .env file to the project's root folder, and add variable with yours api key to it:
``` 
VITE_EXCHANGE_RATES_API_KEY=api_key
```
5. Current API have problems with CORS policy and needs a proxy to handle it. Please, open the [cors-anywhere](https://cors-anywhere.herokuapp.com/corsdemo) and click "Request temporary access to the demo server" button, it's free proxy that fixes error.
6. Run project by command:
```bash 
npm start
```
7. Open application in your browser `http://127.0.0.1:5173/`

