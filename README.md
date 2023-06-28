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

### Tests coverage report

- Test Files  21 passed (21)
-     Tests  35 passed (35)
-  Start at  21:09:26
-  Duration  7.39s (transform 2.29s, setup 9.13s, collect 9.82s, tests 1.63s, environment 29.26s, prepare 8.17s)

 % Coverage report from c8

------------------------------------------|---------|----------|---------|---------|-------------------
File                                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------------------------|---------|----------|---------|---------|-------------------
All files                                 |   99.41 |    87.09 |   91.66 |   99.41 |                  
 src                                      |     100 |      100 |     100 |     100 |                  
  setupTests.ts                           |     100 |      100 |     100 |     100 |                  
 src/app                                  |     100 |      100 |     100 |     100 |                  
  hooks.ts                                |     100 |      100 |     100 |     100 |                  
 src/app/sagas                            |    92.3 |      100 |   66.66 |    92.3 |                  
  currency.ts                             |    92.3 |      100 |   66.66 |    92.3 | 47-50            
 src/components/atoms/Container           |     100 |      100 |     100 |     100 |                  
  Container.tsx                           |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
 src/components/atoms/CurrencyContainer   |     100 |      100 |     100 |     100 |                  
  CurrencyContainer.tsx                   |     100 |      100 |     100 |     100 |                  
 src/components/atoms/Loader              |     100 |      100 |     100 |     100 |                  
  Loader.tsx                              |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
 src/components/atoms/SwitchButton        |     100 |       60 |     100 |     100 |                  
  SwitchButton.tsx                        |     100 |       60 |     100 |     100 | 11-12            
 src/components/layouts/MainLayout        |     100 |      100 |     100 |     100 |                  
  MainLayout.tsx                          |     100 |      100 |     100 |     100 |                  
 src/components/molecules/CurrencyRow     |     100 |      100 |     100 |     100 |                  
  CurrencyRow.tsx                         |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
 src/components/organisms/AboutContent    |     100 |      100 |     100 |     100 |                  
  AboutContent.tsx                        |     100 |      100 |     100 |     100 |                  
 src/components/organisms/CurrencyBlock   |     100 |      100 |     100 |     100 |                  
  CurrencyBlock.tsx                       |     100 |      100 |     100 |     100 |                  
 src/components/organisms/CurrencyTable   |     100 |      100 |     100 |     100 |                  
  CurrencyTable.tsx                       |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
 src/components/organisms/ExchangeResults |     100 |    33.33 |     100 |     100 |                  
  ExchangeResults.tsx                     |     100 |    33.33 |     100 |     100 | 10-11            
 src/components/organisms/Navigation      |     100 |      100 |     100 |     100 |                  
  Navigation.tsx                          |     100 |      100 |     100 |     100 |                  
 src/components/templates/Page            |     100 |      100 |     100 |     100 |                  
  Page.tsx                                |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
 src/constants                            |     100 |      100 |     100 |     100 |                  
  colors.ts                               |     100 |      100 |     100 |     100 |                  
  currency.ts                             |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
  paths.ts                                |     100 |      100 |     100 |     100 |                  
 src/features/actions-info                |     100 |      100 |     100 |     100 |                  
  actions-info-selector.ts                |     100 |      100 |     100 |     100 |                  
  actions-info-slice.ts                   |     100 |      100 |     100 |     100 |                  
 src/features/currency                    |     100 |    88.88 |   71.42 |     100 |                  
  currency-selectors.ts                   |     100 |    85.71 |     100 |     100 | 27               
  currency-slice.ts                       |     100 |      100 |      50 |     100 |                  
 src/helpers                              |     100 |      100 |     100 |     100 |                  
  format-date.ts                          |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
  test-utils.tsx                          |     100 |      100 |     100 |     100 |                  
 src/mock-data                            |     100 |      100 |     100 |     100 |                  
  currency.ts                             |     100 |      100 |     100 |     100 |                  
  index.ts                                |     100 |      100 |     100 |     100 |                  
  state.ts                                |     100 |      100 |     100 |     100 |                  
 src/pages                                |     100 |       80 |     100 |     100 |                  
  About.tsx                               |     100 |      100 |     100 |     100 |                  
  Home.tsx                                |     100 |      100 |     100 |     100 |                  
  NotFound.tsx                            |     100 |      100 |     100 |     100 |                  
  Rates.tsx                               |     100 |     62.5 |     100 |     100 | 49               
 src/types                                |     100 |      100 |     100 |     100 |                  
  currency.ts                             |     100 |      100 |     100 |     100 |                  
------------------------------------------|---------|----------|---------|---------|-------------------
