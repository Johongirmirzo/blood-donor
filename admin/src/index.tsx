import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

/**
 *    Make custom hooks for the following cases
 * 1. Alert
 * 2. create and edit company, medicine,
 *
 */

/**
 *  1. Create the folder structure - DONE
 *
 *  2. Install all the packages - DONE
 *
 *  3. Create files with starter code - DONE
 *
 *  4. Setup routes - DONE
 *
 *  5. Set up global styles - DONE
 *
 *  6. Create apis
 *    1. admin - DONE
 *    2. blood-group - DONE
 *    3. home-page - DONE
 *    4. about-page - DONE
 *    5. gallery-page  - DONE
 *    6. faq-paage  - DONE
 *    7. contact-page  - DONE
 *    8. blood-requests  - DONE
 *    9. donor  - DONE
 *    10. message  - DONE
 *    11. subscriber  - DONE
 *
 *  7. Set up redux store
 *    1. admin - DONE
 *    2. blood-group - DONE
 *    3. home-page - DONE
 *    4. about-page - DONE
 *    5. gallery-page - DONE
 *    6. faq-paage  - DONE
 *    7. contact-page  - DONE
 *    8. blood-requests  - DONE
 *    9. donor  - DONE
 *    10. message  - DONE
 *    11. subscriber  - DONE
 *
 *
 *  9. Steps
 *    1. Login - DONE
 *    2. Change Profile - DONE
 *    3. Change Password - DONE
 *    4. Blood Groups - DONE
 *      1. Manage Blood Groups - DONE
 *      2. Add Blood Group - DONE
 *      3. Edit Blood Group - DONE
 *      4. Delete Blood Group - DONE
 *    5. Home Page - DONE
 *      1. Add Slider - DONE
 *      2. Manage Sliders - DONE
 *      3. Edit Slider - DONE
 *      4. Delete Slider - DONE
 *      5. Helpful Info - DONE
 *      6. Blood Group Info - DONE
 *      7. Our Initative - DONE
 *      8. Our Value - DONE
 *    6. About Page
 *      1. Achievements Section - DONE
 *      2. Donor Review Section - DONE
 *      3. Volunteer Section - DONE
 *      4. About Us - DONE
 *      5. Hero Image - DONE
 *      6. Donor Reviews - DONE
 *      7. Create Donor Review - DONE
 *      8. Edit Donor Review - DONE
 *      9. Manage Volunteers - DONE
 *      10. Create Voolunteer - DONE
 *      11. Edit Voolunteer - DONE
 *    7. Gallery Page - DONE
 *      1. Gallery Section - DONE
 *      2. Create Gallery - DONE
 *      3. Manage Galleries - DONE
 *      4. Hero Image - DONE
 *    8. Faq Page - DONE
 *      1. Faq Section - DONE
 *      2. Sponsor Section - DONE
 *      3. Create Faq - DONE
 *      4. Create Sponsor - DONE
 *      5. Hero Image - DONE
 *      6. Managa Faqs - DONE
 *      7. Manage Sponsors - DONE
 *    9. Contact Page - DONE
 *      Hero Image - DONE
 *      Contact Info Section - DONE
 *    10. dashboard  - DONE
 *    11. blood-requests  - DONE
 *    12. donor  - DONE
 *    13. message  - DONE
 *    14. subscriber  - DONE
 *
 *
 */
