# Clubmaster Booking Plugin

The **Clubmaster Booking Plugin** lets you embed a modern, multi-step booking flow into any website.
It connects to the [Clubmaster API](https://app.clubmaster.org/api/v3/doc) and is highly configurable (UI theme, order of steps, text, hooks, analytics, i18n, etc.).

**Live demo**
👉 [https://demo.optikpartner.dk/book-appointment/](https://demo.optikpartner.dk/book-appointment/)

---

## 🚀 Quick Start

### Option A — Standalone public URL

Every plugin has a public booking page:

```
https://app.clubmaster.org/public/booking/{id}/
```

Replace `{id}` with your plugin’s ID.

---

### Option B — Embed on your site

Add a container where the widget will render:

```html
<div id="bw-widget"></div>
```

Configure and load the script:

```html
<script>
  window.BW_WIDGET_CONFIG = {
    id: 62,                             // ✅ required: your plugin ID
  };

  const s = document.createElement("script");
  s.src = "https://cdn.beastscan.com/plugin/booking/plugin.js";
  document.head.appendChild(s);
</script>
```

**Notes**

* The widget auto-renders into `#bw-widget` unless you specify `containerId`.
* The widget follows the container’s width — use `max-width` for responsiveness.

## 🧪 SDK at a Glance

- Load once via the CDN and pass window.BW_WIDGET_CONFIG before the script.
- Global API:
  - BookingWidget.init(config) — initialize manually (if autoInit: false).
  - bwWidgetOpen() / bwWidgetClose() — open/close the modal (also auto-created).
  - bwWidgetOpen_<instanceKey>() / bwWidgetClose_<instanceKey>() for multi‑instance pages.
- Hooks:
  - onBeforeApi* to change requests
  - onApi* to change responses
  - onConfirm(booking) fires once on thank you page after a successful booking
  - onViewService(progress), onViewLocation(progress), onViewEmployee(progress), onViewSchedule(progress), onViewSubmit(progress), onViewThankyou(progress) — called on each page switch with current selection summary
- Analytics:
  - Optional auto‑insert of GA or GTM
  - Simple event tracking via trackEvents + BW_WIDGET_DISPATCH
- Theming:
  - Style via uiOverrides (colors, radius, font)
  - Renders inside Shadow DOM to avoid CSS conflicts

### Typography sizing (ui.fontScale and ui.fontSizes)
- You can uniformly scale all font sizes or override specific sizes. These map to the widget’s CSS variables that power text-xs, text-sm, text-base, etc., so no template changes are needed.
- Defaults: { xs: 12, sm: 14, base: 16, lg: 18, xl: 20, 2xl: 24, 3xl: 30, 4xl: 36 } px
- Examples:

```js
window.BW_WIDGET_CONFIG = {
  id: 62,
  uiOverrides: {
    fontScale: 1.1, // +10% globally
  },
};
```

```js
window.BW_WIDGET_CONFIG = {
  id: 62,
  uiOverrides: {
    fontSizes: { base: 18, sm: 16, xl: 22 }, // px overrides
    fontScale: 1, // optional together with fontSizes
  },
};
```

## Per‑step View Hooks

- These fire on every page switch when the corresponding step becomes active.
- Signature: onViewX(progress)
- Steps:
  - onViewService
  - onViewLocation
  - onViewEmployee
  - onViewSchedule
  - onViewSubmit
  - onViewThankyou

Payload:
- progress.step: { key, index, title }
- progress.summary: {
    products: Array,
    totalPrice: number|null,
    totalTime: number|null,
    locations: Array,
    employee: object|true|null,
    date: string|null,
    slot: object|null
  }
- progress.isAllValid: boolean

Example:
```html
<script>
  window.BW_WIDGET_CONFIG = {
    id: 62,
    onViewService(p)  { console.log("View Service:", p); },
    onViewLocation(p) { console.log("View Location:", p); },
    onViewEmployee(p) { console.log("View Employee:", p); },
    onViewSchedule(p) { console.log("View Schedule:", p); },
    onViewSubmit(p)   { console.log("View Submit:", p); },
    onViewThankyou(p) { console.log("View Thankyou:", p); },
  };
</script>
```

Notes:
- These hooks fire in addition to analytics tracking and any auto‑advance/skip logic.
- They are invoked on initial step render and all subsequent navigations.

---

## ⚡ Initialization Modes

You can let the plugin auto-init, or init it yourself.

**Auto-init (default)**
Just define `window.BW_WIDGET_CONFIG` before loading the script.

**Manual init**

```html
<div id="bw-widget"></div>

<script>
  window.BW_WIDGET_CONFIG = {
    id: 62,
    autoInit: false, // 👈 turn off auto-init
  };
</script>

<script src="https://cdn.beastscan.com/plugin/booking/plugin.js"></script>

<script>
  // Later, when you’re ready:
  BookingWidget.init({
    ...window.BW_WIDGET_CONFIG,
    containerId: "bw-widget",
    inlineAlsoShowModalTrigger: true, // show a modal trigger next to the inline widget
    // forceModal: true,              // render only as a modal (no inline)
  });
</script>
```

## Loading After Page Is Ready (Recommended: Dynamic Injection)

If you want to ensure the widget loads only after the page is ready (and avoid render‑blocking), use dynamic injection with DOMContentLoaded. This method requires no build step and works on any site/CMS.

Prerequisites:
- Add a container where the widget will render:
  ```html
  <div id="bw-widget"></div>
  ```

Paste this snippet anywhere on your page (head or body):

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    window.BW_WIDGET_CONFIG = {
      id: 62, // required: your plugin ID
    };

    var s = document.createElement("script");
    s.src = "https://cdn.beastscan.com/plugin/booking/plugin.js";
    s.async = true; // non-blocking fetch

    document.head.appendChild(s);
  });
</script>
```

Notes:
- This guarantees the page finishes parsing before the widget script is fetched and initialized.
- Keep your configuration inside the DOMContentLoaded handler so the script can read it at init time.

## 🧰 SDK API (Globals)

- BookingWidget.init(config)
  - Use when you set autoInit: false or want to create more instances.
- bwWidgetOpen() / bwWidgetClose()
  - Always defined for convenience.
- bwWidgetOpen_<instanceKey>() / bwWidgetClose_<instanceKey>()
  - If you pass instanceKey in init, instance‑scoped open/close helpers are created.

Example: multiple widgets on the same page

```html
<div id="w1"></div>
<div id="w2"></div>

<script>
  const base = {
    id: 62,
    autoInit: false,
    inlineAlsoShowModalTrigger: true,
  };

  BookingWidget.init({ ...base, containerId: "w1", instanceKey: "storeA" });
  BookingWidget.init({ ...base, containerId: "w2", instanceKey: "storeB" });

  // Later:
  bwWidgetOpen_storeA();
  bwWidgetClose_storeB();
</script>
```

---

## 🎛️ Opening Modal via Button

In addition to inline rendering and automatic triggers, you can open the booking widget modal manually from **any button or element** by calling the global function `bwWidgetOpen()`.

**Example:**

```html
<button onclick="bwWidgetOpen()">Book Now</button>
```

You can also close the modal programmatically:

```html
<button onclick="bwWidgetClose()">Close widget</button>
```

---

## 🔔 Fallback Trigger (Auto-Modal) When Inline Isn’t Visible

If the inline widget does not exist, the server can be configured to automatically inject a **trigger button** on the page. Clicking this trigger opens the booking widget as a modal overlay.

- **Server-controlled**: Requires enabling in plugin settings, no extra client code is needed.
- **Behavior**: Trigger appears if inline widget is invisible; clicking it opens the modal flow.
- **Styling**: Trigger inherits your `uiOverrides` theme (colors, border radius, etc.).
- **Analytics**: Same tracking events as inline flow.

**Related client options:**
- `inlineAlsoShowModalTrigger: true` — always show trigger in addition to inline widget.
- `forceModal: true` — skip inline completely and use modal only.
- `containerId` — where inline widget should mount if visible.

---

## 📍 Preselecting a Location

You can preselect a location to create custom landing pages for a specific store or branch.
When a location is preselected, you can also apply skip: true to automatically skip the location step.

Example:
window.BW_WIDGET_CONFIG = {
  id: 62,
  overrideConfig: {
    steps: {
      location: {
        preselected: [2423], // ID(s) of the location(s) you want to lock in
        skip: true,       // 👈 optional: skip location step if only one is preselected
      },
    },
  },
};

This is especially useful when you want to build store-specific landing pages that go straight into service or employee selection without asking the user to choose a location.

## 🎯 Preselects and Auto‑Skip (Services/Employees too)

You can preselect across steps and optionally skip them:

```js
overrideConfig: {
  steps: {
    service:  { preselected: [123], allowMultiple: false, skip: true },
    location: { preselected: [2423], skip: true },
    employee: { preselected: 789,   skip: true },
  },
}
```

Auto‑skip behavior:
- If a step has exactly one available choice, it’s skipped automatically.
- Employee is hidden in the left menu when auto‑skipped; service/location remain visible.

---
## 🧾 Configuration Cheat Sheet

```js
window.BW_WIDGET_CONFIG = {
  // Required
  id: 62,

  // Optional
  autoInit: true,              // set false to init later yourself
  containerId: "bw-widget",    // where inline widget renders
  forceModal: false,           // ignore inline and use modal only
  inlineAlsoShowModalTrigger: true, // show a floating "Book" button

  // Locale/Money
  locale: "da-DK",
  currency: "DKK",
  weekStart: "monday",         // or "sunday"

  // Theming
  uiOverrides: {
    borderRadius: "3xl",
    fontFamily: "Archivo",
    colors: { primary: "#0059ff", secondary: "#00b894" },
    fontScale: 1.0,                 // optional: uniform scaling
    fontSizes: { base: 16, xl: 20 }, // optional: per-size overrides (px)
  },

  // Text overrides (per language)
  i18n: {
    en: { onAt: "On {date} at {time}", dateTimeNotSelected: "Date & Time not selected" },
  },

  // Tracking payloads (used when steps are viewed/chosen)
  trackEvents: {
    viewThankyou: { goal: "booking", stage: "complete" },
  },

  // Hooks
  onBeforeApiInit(req)     { return req; },
  onApiInit(config)        { return config; },

  onBeforeApiService(req)  { return req; },
  onApiService(items)      { return items; },

  onBeforeApiLocation(req) { return req; },
  onApiLocation(items)     { return items; },

  onBeforeApiEmployee(req) { return req; },
  onApiEmployee(items)     { return items; },

  onBeforeApiSchedule(req) { return req; },
  onApiSchedule(items)     { return items; },

  onBeforeApiConfirm(req)  { return req; },
  onApiConfirm(result)     { return result; },

  // Called once after a successful booking (thank you page)
  onConfirm(booking) {
    console.log("Booking confirmed:", booking);
  },

  // Per‑step view hooks
  onViewService(p)  { /* ... */ },
  onViewLocation(p) { /* ... */ },
  onViewEmployee(p) { /* ... */ },
  onViewSchedule(p) { /* ... */ },
  onViewSubmit(p)   { /* ... */ },
  onViewThankyou(p) { /* ... */ },

  // Advanced overrides (merged into server config)
  overrideConfig: {
    // Example: enable GTM and autoload the container
    generel: {
      analytics: { provider: "gtm", trackingId: "GTM-XXXXXXX", autoLoadScript: true },
    },
    steps: {
      location: { preselected: [2423], skip: true },
    },
  },

  // Advanced: override API base (debug/testing)
  apiBaseURL: "https://app.optikpartner.dk/api/v3/public/booking/",
};
```

## 🍳 Hooks Cookbook

- Limit schedule window to the next 30 days:

```js
onBeforeApiSchedule(req) {
  const now = new Date();
  const from = now.toISOString().slice(0, 10);
  const to = new Date(now); to.setDate(to.getDate() + 30);
  return { ...req, body: { ...req.body, from, to: to.toISOString().slice(0,10) } };
}
```

- Filter employees to first 10:

```js
onApiEmployee(items) {
  return items.slice(0, 10);
}
```

- Remove employees without a profile image:

```js
onApiEmployee(items) {
  // Keep only employees that have a non-empty user.image.url
  return items.filter((e) => {
    const url = e?.user?.image?.url;
    return typeof url === "string" && url.trim().length > 0;
  });
}
```

Note: If this filter removes all employees, the widget will automatically switch to “any employee” selection for the booking step. This filter is applied both in the Employee step and to employees shown under each location (location.employees used for thumbnails).

- Remove employees without an image from the Location lookup (explicit via onApiLocation):

```js
onApiLocation(items) {
  return items.map((loc) => {
    const filtered = (loc.employees || []).filter((e) => {
      const url = e?.user?.image?.url;
      return typeof url === "string" && url.trim().length > 0;
    });
    return { ...loc, employees: filtered };
  });
}
```

Note: This is only needed if you want a location-specific rule. If you already filter in onApiEmployee, the widget applies that filter to location.employees automatically.

- Remove all employees from the Location lookup (hide thumbnails entirely):

```js
onApiLocation(items) {
  return items.map((loc) => ({ ...loc, employees: [] }));
}
```

This prevents employee thumbnails from rendering under each location.

- Enrich confirm payload:

```js
onBeforeApiConfirm(req) {
  return { ...req, body: { ...req.body, meta: { source: "landing-page-A" } } };
}
```

## 🧩 Full Configuration Reference

```js
window.BW_WIDGET_CONFIG = {
  // === Core ===
  id: 62,
  name: "VariantA",
  debug: false,
  autoInit: true,
  containerId: "bw-widget",
  inlineAlsoShowModalTrigger: true,
  // weekStart: "monday",

  // === API base override ===
  apiBaseURL: "",

  // === Organization/locale overrides ===
  locale: "da-DK",
  currency: "DKK",

  // === Internationalization ===
  i18n: {
    en: { onAt: "On {date} at {time}", dateTimeNotSelected: "Date & Time not selected" },
    da: { onAt: "{date} kl. {time}",  dateTimeNotSelected: "Dato og tidspunkt er ikke valgt" },
    de: { onAt: "Am {date} um {time}", dateTimeNotSelected: "Datum und Uhrzeit nicht ausgewählt" },
    es: { onAt: "El {date} a las {time}", dateTimeNotSelected: "Fecha y hora no seleccionadas" },
    fr: { onAt: "Le {date} à {time}", dateTimeNotSelected: "Date et heure non sélectionnées" },
  },

  // === UI Overrides ===
  uiOverrides: {
    borderRadius: "3xl",
    fontFamily: "Archivo",
    colors: {
      primary:  "#0059ff",
      secondary:"#00b894",
    },
  },

  // === Attributes ===
  attributes: {
    experiment: { experimentId: "exp-1234", cohort: "A" },
  },

  // === Analytics ===
  trackEvents: {
    viewService:  { brand: "Acme", market: "DK" },
    viewLocation: { market: "DK" },
    viewEmployee: { department: "optometry" },
    viewSchedule: { variant: "A" },
    viewSubmit:   { goal: "booking" },
    viewThankyou: { goal: "booking", stage: "complete" },
  },

  // === Hooks: BEFORE ===
  onBeforeApiInit(req)      { return req; },
  onBeforeApiService(req)   { return req; },
  onBeforeApiLocation(req)  { return req; },
  onBeforeApiEmployee(req)  { return req; },
  onBeforeApiSchedule(req)  {
    const now = new Date();
    const from = now.toISOString().slice(0, 10);
    const to   = new Date(now); to.setDate(to.getDate() + 30);
    const toStr = to.toISOString().slice(0, 10);
    return req;
  },
  onBeforeApiConfirm(req)   { return req; },

  // === Hooks: AFTER ===
  onApiInit(config)       { return config; },
  onApiService(items)     { return items; },
  onApiLocation(items)    { return items; },
  onApiEmployee(items)    { return items.slice(0, 10); },
  onApiSchedule(items)    { return items; },
  onApiConfirm(result)    { return result; },

  // === Booking Callback ===
  onConfirm(booking) {
    console.log("Booking confirmed:", booking);
  },
};
```

---

## 📈 Analytics Setup (GA or GTM)

To auto‑insert GA or GTM and wire up event dispatching, set analytics under overrideConfig.generel.analytics.

- provider: "ga" or "gtm"
- trackingId: GA4 ID (G-XXXXXXX) or GTM container (GTM-XXXXXXX)
- autoLoadScript: when true, the script/iframe is injected for you

```js
window.BW_WIDGET_CONFIG = {
  id: 62,
  overrideConfig: {
    generel: {
      analytics: {
        provider: "gtm",
        trackingId: "GTM-XXXXXXX",
        autoLoadScript: true,
      },
    },
  },
  trackEvents: {
    viewService:  { market: "DK" },
    viewThankyou: { goal: "booking", stage: "complete" },
  },
};
```

If you don’t auto‑load the script, define a global BW_WIDGET_DISPATCH yourself before init:
- GA: function gtag() { dataLayer.push(arguments); }
- GTM: function (_, eventName, payload) { dataLayer.push({ event: eventName, ...payload }); }

## 📊 Analytics Examples

**Static payloads**

```js
trackEvents: {
  viewService:  { market: "DK" },
  viewThankyou: { goal: "booking", stage: "complete" },
}
```

**Dynamic payloads**

```js
trackEvents: {
  chooseService(summary) {
    return { service_name: summary.service?.friendly_name, price: summary.service?.price };
  },
  chooseLocation(summary) {
    return { postcode: summary.location?.postcode };
  },
}
```

---

## Per‑step View DOM Events

- Fired on document on each page switch with the same payload as the hooks above.

Event names:
- clubBookingViewService
- clubBookingViewLocation
- clubBookingViewEmployee
- clubBookingViewSchedule
- clubBookingViewSubmit
- clubBookingViewThankyou

Listen example:
```html
<script>
  document.addEventListener("clubBookingViewSchedule", (e) => {
    const { step, summary, isAllValid } = e.detail;
    console.log("Viewing schedule step:", step, summary, isAllValid);
  });
</script>
```

## ✅ Booking Confirmation

```js
onConfirm(booking) {
  // booking.id, booking.starts_at, booking.customer, etc.
  console.log("Booked:", booking);
}
```

---

## 🧠 Debugging

* Set `debug: true` to enable detailed console logs.
* Use `onBefore*` hooks to inspect/modify requests.
* Use `onApi*` hooks to inspect/modify responses.

---

## 📚 API Reference

See the public API docs: [https://app.clubmaster.org/api/v3/doc](https://app.clubmaster.org/api/v3/doc)
Endpoints used: `/api/v3/public/booking/`

---

## 📝 License

This plugin is part of the **Clubmaster** platform.
Use is subject to your service agreement and API terms.

---

## 🛠️ Troubleshooting

- Widget doesn’t appear
  - Ensure a container with id="bw-widget" exists, or set containerId.
  - If using forceModal: true, call bwWidgetOpen() or enable the floating trigger.
- API errors or no data
  - Check CORS and apiBaseURL overrides.
  - Inspect the Network tab; set debug: true to see verbose logs.
- No available time slots
  - Your date window may be too narrow; widen via onBeforeApiSchedule or pick another date.
- Analytics events not firing
  - Ensure overrideConfig.generel.analytics is set and BW_WIDGET_DISPATCH exists (auto when autoLoadScript: true).
- onConfirm didn’t fire
  - It fires once when the thank you page shows after a successful confirm. Verify the confirm call succeeded and you navigated to thank you.

## 🌐 Browser Support

- The widget uses Shadow DOM and modern JS; it targets evergreen browsers.
- If you enforce a CSP, allow the configured CDN(s) (e.g., jsDelivr for icons, GA/GTM if enabled).

## Minimal Demo

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Booking Demo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&display=swap" rel="stylesheet" />
</head>
<body>
  <div id="bw-widget"></div>

  <script>
    window.BW_WIDGET_CONFIG = {
      id: 62,
      uiOverrides: { fontFamily: "Archivo", borderRadius: "3xl" },
      inlineAlsoShowModalTrigger: true,
      trackEvents: { viewThankyou: { goal: "booking", stage: "complete" } },
      onConfirm(booking) { console.log("Booked:", booking); },
    };
  </script>

  <script src="https://cdn.beastscan.com/plugin/booking/plugin.js"></script>
</body>
</html>
```

