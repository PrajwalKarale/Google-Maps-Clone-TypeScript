# Google Maps Clone (TypeScript)

This project is a simplified Google Maps clone built using **TypeScript**. It provides functionality to search for addresses using the OpenStreetMap API and displays the selected location on an interactive map.

---

## 🚀 Features

1. **Search Locations**: 
   - Users can search for a city, state, country, or any specific address.
   - The app fetches a list of up to 5 matching addresses using the OpenStreetMap API.

2. **Interactive Map**:
   - A default map is displayed on one half of the screen.
   - Clicking the **Go** button places a marker on the map, pointing to the selected location.

---

## 🛠️ Tech Stack

- **Frontend**: TypeScript, React
- **API**: OpenStreetMap API for location search
- **Map Rendering**: [Leaflet.js](https://leafletjs.com/) (or any mapping library you used)
- **Styling**: CSS (or any library/framework like TailwindCSS)

---

## 📦 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/PrajwalKarale/Google-Maps-Clone-TypeScript.git
   cd Google-Maps-Clone-TypeScript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🔑 API Integration

- **OpenStreetMap API**:
  - The app uses the `search` endpoint from OpenStreetMap for address lookup.
  - Example API request:
    ```plaintext
    https://nominatim.openstreetmap.org/search?q=<SEARCH_TERM>&format=geojson&addressdetails=1&limit=5
    ```

---

## 🖼️ User Interface

1. **Search Bar**:
   - Input box to search for a location.
   - Displays a dropdown with a list of matching addresses.

2. **Map Section**:
   - Displays a default map.
   - A marker updates dynamically to point to the location of the selected address.

---

## 🚧 Challenges and Future Improvements

### Challenges
- Handling API rate limits when making frequent requests to OpenStreetMap.
- Optimizing the UI for better responsiveness and user experience.

### Future Improvements
- Add geolocation to detect the user's current location.
- Implement a history feature to save and revisit past searches.
- Integrate more detailed map features like zoom levels and route planning.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For questions or feedback, feel free to reach out to me:

- **Email**: [prkarale@syr.edu](mailto:prkarale@syr.edu)
- **GitHub**: [Prajwal Karale](https://github.com/PrajwalKarale)

---