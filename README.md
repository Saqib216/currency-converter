# Currency Converter

A real-time currency conversion web app built with vanilla HTML, CSS, and JavaScript. Convert between 150+ currencies with live exchange rates and country flags.

## 🌐 Live Demo

Visit: [saqib-curr.netlify.app](https://saqib-curr.netlify.app)

## 📋 Project Overview

A simple, clean web app that lets users convert currency amounts instantly. It fetches live exchange rates from a free API and displays country flags for each currency. Perfect for travelers, traders, or anyone who needs quick currency conversions.

## ✨ Key Features

- **Real-time Exchange Rates** — Fetches live rates from an open API (no signup needed)
- **150+ Currencies** — Support for all major and minor world currencies
- **Country Flags** — Visual flag icons for each currency (makes it intuitive)
- **Swap Currencies** — Easy toggle button to swap From/To currencies
- **Input Validation** — Handles empty or invalid inputs gracefully
- **Clean UI** — Minimal, user-friendly interface with warm colors
- **Responsive Design** — Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **API:** Currency exchange rates from `cdn.jsdelivr.net/npm/@fawazahmed0/currency-api`
- **Flags:** Country flags from `flagsapi.com`
- **Icons:** Font Awesome for arrow icon
- **Hosting:** Netlify

## 📁 Project Structure

```
currency-converter/
│
├── index.html              # Main HTML (single page)
├── css/
│   └── style.css          # Styling (flexbox centered layout)
├── js/
│   ├── countries.js       # Currency-to-Country code mapping (150+ currencies)
│   └── script.js          # API calls & conversion logic
└── README.md
```

## 🎯 How It Works

1. **User enters an amount** (default: 1)
2. **Selects From/To currencies** from dropdowns
3. **Clicks "Get Exchange Rate" button**
4. **API fetches live exchange rate** for that currency pair
5. **App displays:** `1 USD = 280 PKR` (example)
6. **User can swap currencies** by clicking the arrow icon

### JavaScript Flow

```
1. Page loads → Populate all 150+ currency options in dropdowns
2. When user selects a currency → Update the country flag
3. When user clicks "Get Exchange Rate":
   ├─ Validate amount input
   ├─ Fetch exchange rate from API
   ├─ Calculate final amount
   └─ Display: "X currency = Y currency"
```

## 📊 Key Functions

| Function | Purpose |
|---|---|
| `updateFlag(element)` | Changes flag image based on selected currency |
| `btn.addEventListener("click", ...)` | Fetches API and calculates conversion |
| `Math.ceil(amtVal * value)` | Rounds up the converted amount |

## 🎨 Design

- **Colors:** Soft green background (#f8ffe5), warm orange container (rgb(255, 225, 181))
- **Accent:** Pink exchange button (rgb(253, 167, 253))
- **Layout:** Centered flexbox, clean and minimal
- **Font:** System default (readable and fast)

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Saqib216/currency-converter.git
   cd currency-converter
   ```

2. Open `index.html`:
   - Double-click to open in browser
   - Or use VS Code Live Server (Right-click → Open with Live Server)

3. Start converting! (No backend setup needed)

## 🔌 API Details

**Endpoint:** `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`

**Example:**
```javascript
// Fetching USD to other currencies
const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
const data = await response.json();
// Returns: { "usd": { "pkr": 280, "inr": 83, "eur": 0.92, ... } }
```

**Why This API?**
- ✅ Free (no API key needed)
- ✅ No rate limits for personal use
- ✅ Updated daily
- ✅ Supports 150+ currencies
- ✅ Reliable & fast

## 📱 Responsive Features

The app is fully responsive:
- **Desktop:** Full layout with side-by-side dropdowns
- **Tablet:** Adjusted spacing and button sizes
- **Mobile:** Stacked layout, optimized touch targets

## ✅ What This Project Teaches

- ✅ Async/await with fetch API
- ✅ JSON parsing and data manipulation
- ✅ DOM manipulation (creating, appending, updating elements)
- ✅ Event listeners and form handling
- ✅ Working with external APIs
- ✅ Input validation
- ✅ Currency formatting and math operations
- ✅ Responsive CSS design

## 🐛 Common Issues & Solutions

| Issue | Solution |
|---|---|
| Conversion not working | Check browser console (F12) for API errors; internet connection needed |
| Flags not loading | Verify flagsapi.com is accessible; CORS shouldn't be an issue |
| Dropdown options not showing | Ensure `countries.js` is loaded before `script.js` |

## 📈 Future Enhancements

- [ ] Add conversion history/favorites
- [ ] Offline mode with cached rates
- [ ] Multiple conversion at once
- [ ] Copy/paste converted amount
- [ ] Chart showing currency trend over time
- [ ] Widget version for embedding
- [ ] Dark mode toggle
- [ ] Keyboard shortcuts (Enter to convert)

## 📧 Contact

- **GitHub:** [github.com/Saqib216](https://github.com/Saqib216)
- **Portfolio:** [saqib-portfo.netlify.app](https://saqib-portfo.netlify.app)
- **Instagram:** [@itx.saqib.hussnain](https://instagram.com/itx.saqib.hussnain)

## 📝 License

This project is open source and available for educational and personal use.

---

**Made with ❤️ by Saqib Hussnain**

*A simple project to master fetch API, working with live data, and practical web app development.*