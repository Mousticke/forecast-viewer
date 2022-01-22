<h1 align="center">
  Weather Forecast Front-End
</h1>
<p align="center">
  Play with <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a> api with <a href="https://angular.io/start" target="_blank">Angular 13</a> and hosted with <a href="https://vercel.com/" target="_blank">Vercel</a>
</p>

![Vercel](https://vercelbadge.vercel.app/api/mousticke/forecast-viewer?style=for-the-badge)

![demo](https://raw.githubusercontent.com/Mousticke/forecast-viewer/main/src/assets/appforecast.png)

## 🛠️ Installation & Set Up

1. Install Angular 13

   ```sh
   npm install -g @angular/cli
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Create a .env file (base on the .env.example)

   ```sh
   touch .env
   ```

4. Add your env values from <a href="https://openweathermap.org/" target="_blank">Open Weather</a> API

`API_KEY` from your Open Weather Account <br />
`API_UNITS='metric'` or from [Open Weather App Measure](https://openweathermap.org/api/one-call-api#data) <br />
`API_LANG='en'` or from [Open Weather App Lang](https://openweathermap.org/api/one-call-api#multi)

5. Run your local server. This will populate all your data inside the environment file used by angular.

   ```sh
   npm run start
   ```

   Navigate to `http://localhost:4200/`

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

   The build artifacts will be stored in the `dist/` directory

## 🎨 Color Reference

| Color      | Hex                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| cyan       | ![hsl(178deg 100% 44%)](https://via.placeholder.com/10/00e0d9?text=+) `hsl(178deg 100% 44%)`             |
| deepCyan   | ![hsl(199deg 100% 50%)](https://via.placeholder.com/10/00aeff?text=+) `hsl(199deg 100% 50%)`             |
| mediumBlue | ![hsl(236deg 63% 33% / 67%)](https://via.placeholder.com/10/1f2689ab?text=+) `hsl(236deg 63% 33% / 67%)` |
| glassyBlue | ![rgba(17, 25, 40, 0.79)](https://via.placeholder.com/10/111928c9?text=+) `rgba(17, 25, 40, 0.79)`       |
| deepBlue   | ![hsl(215deg 68% 8%)](https://via.placeholder.com/10/071222?text=+) `hsl(215deg 68% 8%)`                 |
| darkNavy   | ![hsl(244deg 62% 15%)](https://via.placeholder.com/10/071222?text=+) `hsl(244deg 62% 15%)`               |
| blackyBlue | ![rgba(4, 4, 22, 0.35)](https://via.placeholder.com/10/04041659?text=+) `rgba(4, 4, 22, 0.35)`           |
| crimson    | ![hsl(0deg 100% 63%)](https://via.placeholder.com/10/ff4242?text=+) `hsl(0deg 100% 63%)`                 |
| green      | ![hsl(147deg 100% 50%)](https://via.placeholder.com/10/00ff73?text=+) `hsl(147deg 100% 50%)`             |
| lightGray  | ![hsl(220deg 100% 99%)](https://via.placeholder.com/10/fafcff?text=+) `hsl(220deg 100% 99%)`             |
| grayBlue   | ![hsl(215deg 29% 16%)](https://via.placeholder.com/10/1d2735?text=+) `hsl(215deg 29% 16%)`               |
| gray       | ![hsl(0deg 0% 100% / 18%)](https://via.placeholder.com/10/ffffff2e?text=+) `hsl(0deg 0% 100% / 18%)`     |

[owner]: Mousticke
[reponame]: forecast-viewer
