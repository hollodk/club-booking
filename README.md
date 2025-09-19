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

---

## 🎛️ Opening Modal via Button

In addition to inline rendering and automatic triggers, you can open the booking widget modal manually from **any button or element** by calling the global function `bwWidgetOpen()`.

**Example:**

```html
<button onclick="bwWidgetOpen()">Book Now</button>
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

